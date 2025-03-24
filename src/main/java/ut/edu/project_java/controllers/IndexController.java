package ut.edu.project_java.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.ui.Model;

@Controller
public class IndexController {

    @GetMapping({"/", "/index"}) 
    public String indexPage() {
        return "index"; // Gọi file index.html trong thư mục templates
    }

    @GetMapping({"/indexLogin"})
    public String indexAfterLoginPage() {
        return "indexAfterLogin"; // Gọi file indexAfterLogin.html trong thư mục templates
    }

    @GetMapping("/loadPage/{page}")
    public String loadPage(@PathVariable String page, Model model) {
        return "pages/" + page ; // Sửa lỗi ở đây
    }
}
