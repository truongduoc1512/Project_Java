package ut.edu.project_java.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ut.edu.project_java.models.PaymentHistory;
import ut.edu.project_java.repositories.PaymentHistoryRepository;

import java.util.List;

@RestController
@RequestMapping("/api/payment-history")
@RequiredArgsConstructor
public class PaymentHistoryController {

    private final PaymentHistoryRepository repository;

    @GetMapping
    public List<PaymentHistory> getAll() {
        return repository.findAll();
    }

    @GetMapping("/search")
    public List<PaymentHistory> search(
            @RequestParam(required = false, defaultValue = "") String maHoaDon,
            @RequestParam(required = false, defaultValue = "") String trangThai
    ) {
        return repository.findByMaHoaDonContainingAndTrangThaiContaining(maHoaDon, trangThai);
    }

    @PostMapping
    public PaymentHistory create(@RequestBody PaymentHistory ph) {
        return repository.save(ph);
    }
}
