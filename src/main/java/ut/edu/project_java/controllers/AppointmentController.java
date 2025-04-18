package ut.edu.project_java.controllers;

import ut.edu.project_java.models.Appointment;
import ut.edu.project_java.repositories.AppointmentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "*")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAppointment(@PathVariable Long id) {
        if (!appointmentRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        appointmentRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateAppointment(@PathVariable Long id, @RequestBody Appointment updatedAppointment) {
        return appointmentRepository.findById(id)
            .map(existing -> {
                // Cập nhật thông tin
                existing.setHoTenNguoiTiem(updatedAppointment.getHoTenNguoiTiem());
                existing.setNgaySinh(updatedAppointment.getNgaySinh());
                existing.setGioiTinh(updatedAppointment.getGioiTinh());
                existing.setTinhThanh(updatedAppointment.getTinhThanh());
                existing.setQuanHuyen(updatedAppointment.getQuanHuyen());
                existing.setPhuongXa(updatedAppointment.getPhuongXa());
                existing.setHoTenNguoiLienHe(updatedAppointment.getHoTenNguoiLienHe());
                existing.setMoiQuanHe(updatedAppointment.getMoiQuanHe());
                existing.setSoDienThoai(updatedAppointment.getSoDienThoai());
                existing.setLoaiVaccine(updatedAppointment.getLoaiVaccine());
                existing.setNgayTiem(updatedAppointment.getNgayTiem());

                appointmentRepository.save(existing);
                return ResponseEntity.ok(existing);
            })
            .orElseGet(() -> ResponseEntity.notFound().build());
        }

}
