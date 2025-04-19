package ut.edu.project_java.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
        .csrf(csrf -> csrf.disable())
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/**").permitAll()
            .requestMatchers("/api/**").authenticated()
            .requestMatchers("/", "/index", "/indexLogin","/admin", "/api/auth/**").permitAll()
            .requestMatchers("/assets/**", "/lib/**", "/static/**").permitAll()
            .requestMatchers("/pages/**").permitAll()
            .requestMatchers("/adminPages/**").permitAll() 
            .requestMatchers("/**/*.js", "/**/*.css", "/**/*.jpg", "/**/*.png").permitAll()
            .anyRequest().authenticated()
        )
            .formLogin(form -> form.disable())  // Tắt form login mặc định
            .httpBasic(basic -> basic.disable()); // Tắt basic auth
        
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}