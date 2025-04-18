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
              <td>${item.id}</td>
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
              <td>
                <button onclick="suaLichTiem(${item.id})">Sửa</button>
                /
                <button onclick="xoaLichTiem(${item.id})">Xóa</button>
              </td>
            </tr>
          `;
          tbody.insertAdjacentHTML("beforeend", row);
        });
      })
      .catch(err => {
        console.error("Lỗi khi tải lịch tiêm:", err);
      });
  }
  function xoaLichTiem(id) {
    if (confirm("Bạn có chắc muốn xóa lịch tiêm này không?")) {
      fetch(`http://localhost:8080/api/appointments/${id}`, {
        method: "DELETE"
      })
      .then(res => {
        if (res.ok) {
          alert("Xóa thành công!");
          loadLichTiemTable(); // Load lại bảng
        } else {
          alert("Xóa thất bại.");
        }
      })
      .catch(err => {
        console.error("Lỗi khi xóa lịch tiêm:", err);
      });
    }
  }

  function suaLichTiem(id) {
    window.location.href = `adminPages/admin_sualichtiem?id=${id}`;
  }

  loadLichTiemTable();
  setInterval(loadLichTiemTable, 100000);