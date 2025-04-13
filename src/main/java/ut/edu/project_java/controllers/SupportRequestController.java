package ut.edu.project_java.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ut.edu.project_java.models.SupportRequest;
import ut.edu.project_java.services.SupportRequestService;


import java.util.Optional;

@RestController
@RequestMapping("/api/support")
@CrossOrigin(origins = "*") 
public class SupportRequestController {

    @Autowired
    private SupportRequestService service;
  
    @PostMapping
    public ResponseEntity<String> createSupport(@RequestBody SupportRequest request) {
        Long id = service.createSupport(request);
        return ResponseEntity.ok("Yêu cầu hỗ trợ đã được tạo với mã: " + id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getSupport(@PathVariable Long id) {
        Optional<SupportRequest> support = service.getSupportById(id);
        if (support.isPresent()) {
            return ResponseEntity.ok(support.get());
        } else {
            return ResponseEntity.status(404).body("Không tìm thấy yêu cầu hỗ trợ với mã: " + id);
        }
    }
}
