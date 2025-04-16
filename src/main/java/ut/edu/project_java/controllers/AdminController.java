package ut.edu.project_java.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.ui.Model;

@Controller
public class AdminController {

    @GetMapping({"/admin"})
    public String adminPage() {
        return "admin"; 
    }

    @GetMapping("/loadAdminPage/{page}")
    public String loadAdminPage(@PathVariable String page, Model model) {
        return "adminPages/" + page ; 
    }

    @GetMapping("/adminPages/admin_lichtiem")
    public String adminLichTiemPage(){
        return "adminPages/admin_lichtiem";
    }
}
