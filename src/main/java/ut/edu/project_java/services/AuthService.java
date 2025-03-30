package ut.edu.project_java.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import ut.edu.project_java.models.User;
import ut.edu.project_java.models.Role;
import ut.edu.project_java.repositories.UserRepository;
import ut.edu.project_java.security.JwtService;
import ut.edu.project_java.dtos.AuthResponse;
import ut.edu.project_java.dtos.RegisterRequest;
import ut.edu.project_java.dtos.LoginRequest;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private JwtService jwtService;

    // Xử lý đăng ký người dùng
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email đã tồn tại!");
        }

        User user = new User();
        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.USER);


        userRepository.save(user);

        // Tạo token JWT từ email (thay vì fullName)
        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(token, "Đăng ký thành công!", user.getEmail());
    }

    // Xử lý đăng nhập
    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Email hoặc mật khẩu không đúng!"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Email hoặc mật khẩu không đúng!");
        }

        // Tạo token JWT từ email
        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(token, "Đăng nhập thành công!", user.getEmail());
    }
}
