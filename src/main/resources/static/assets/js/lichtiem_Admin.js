function loadLichTiemTable() {
    fetch("http://localhost:8080/api/appointments")
      .then(res => res.json())
      .then(data => {
        console.log("Dữ liệu lịch tiêm:", data);
  
        const tbody = document.getElementById("lichTiemBody");
        if (!tbody) {
          console.error("Không tìm thấy tbody");
          return;
        }
  
        tbody.innerHTML = "";
  
        data.forEach(item => {
          const row = `
            <tr>
              <td>${item.hoTenNguoiTiem}</td>
              <td>${item.ngaySinh}</td>
              <td>${item.gioiTinh}</td>
              <td>${item.tinhThanh}</td>
              <td>${item.quanHuyen}</td>
              <td>${item.phuongXa}</td>
              <td>${item.hoTenNguoiLienHe}</td>
              <td>${item.moiQuanHe}</td>
              <td>${item.soDienThoai}</td>
              <td>${item.loaiVaccine}</td>
              <td>${item.ngayTiem}</td>
            </tr>
          `;
          tbody.insertAdjacentHTML("beforeend", row);
        });
      })
      .catch(err => {
        console.error("Lỗi khi tải lịch tiêm:", err);
      });
  }
  loadLichTiemTable();
  setInterval(loadLichTiemTable, 1000);