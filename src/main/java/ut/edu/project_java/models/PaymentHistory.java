package ut.edu.project_java.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String soPhieu;

    private String maHoaDon;

    private LocalDate ngayThu;

    private Double soTien;

    private String trangThai;
}