package ut.edu.project_java.controllers;

import ut.edu.project_java.models.SupportRequest;
import ut.edu.project_java.repositories.SupportRequestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@RestController
@RequestMapping("/api/support")
@CrossOrigin(origins = "*") 

public class SupportRequestController {

    @Autowired
    private SupportRequestRepository supportRequestRepository;

    @GetMapping("/{id}")
public ResponseEntity<?> getSupport(@PathVariable Long id) {
    Optional<SupportRequest> support = supportRequestRepository.findById(id);
    if (support.isPresent()) {
        return ResponseEntity.ok(support.get());
    } else {
        return ResponseEntity.status(404).body("Không tìm thấy yêu cầu hỗ trợ với mã: " + id);
    }
}

    @PostMapping
    public SupportRequest createSupportRequest(@RequestBody SupportRequest supportRequest) {
        return supportRequestRepository.save(supportRequest);
    }
    
}
