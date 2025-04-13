package ut.edu.project_java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ut.edu.project_java.models.PaymentHistory;

import java.util.List;

public interface PaymentHistoryRepository extends JpaRepository<PaymentHistory, Long> {
    List<PaymentHistory> findByMaHoaDonContainingAndTrangThaiContaining(String maHoaDon, String trangThai);
}