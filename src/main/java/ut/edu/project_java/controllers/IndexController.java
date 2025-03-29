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

    @GetMapping("/pages/index_DatLich")
    public String homePage() {
        System.out.println("Serving home page");
        return "pages/index_DatLich"; // Tìm file home.html trong thư mục templates/pages
    }

    @GetMapping("/pages/indexSP")
    public String SupportPage() {
        System.out.println("Serving home page");
        return "pages/indexSP"; // Tìm file home.html trong thư mục templates/pages
    }

    @GetMapping("/pages/index_ChamSocKhachHang")
    public String ChamSocKhachHangPage() {
        System.out.println("Serving home page");
        return "pages/index_ChamSocKhachHang"; // Tìm file home.html trong thư mục templates/pages
    }

    @GetMapping("/pages/create_support")
    public String creatSupport(){
        return "pages/create_support";
    }

    @GetMapping("/pages/check_status")
    public String checkStatus(){
        return "pages/check_status";
    }

    @GetMapping("/pages/home")
    public String home(){
        return "pages/home";
    }
}
