function handleSubmit() {
  // Lấy từng giá trị
  const hoTenNguoiTiem = document.getElementById("hoTenNguoiTiem").value.trim();
  const ngaySinh = document.getElementById("ngaySinh").value;
  const maKhachHang = document.getElementById("maKhachHang").value.trim();
  const gioiTinh = document.querySelector('input[name="gender"]:checked')?.value || "";

  const tinhThanh = document.getElementById("province").value.trim();
  const quanHuyen = document.getElementById("district").value.trim();
  const phuongXa = document.getElementById("ward").value.trim();
  const diaChi = document.getElementById("diaChi").value.trim();

  const hoTenNguoiLienHe = document.getElementById("hoTenNguoiLienHe").value.trim();
  const moiQuanHe = document.getElementById("moiQuanHe").value;
  const soDienThoai = document.getElementById("soDienThoai").value.trim();

  const loaiVaccine = document.querySelector('input[name="vaccineType"]:checked')?.value || "";
  const trungTam = document.getElementById("trungTam").value;
  const ngayTiem = document.getElementById("ngayTiem").value;

  // Kiểm tra thủ công từng trường bắt buộc
  if (
    hoTenNguoiTiem === "" || ngaySinh === "" || gioiTinh === "" ||
    tinhThanh === "" || quanHuyen === "" || phuongXa === "" || diaChi === "" ||
    hoTenNguoiLienHe === "" || moiQuanHe === "" || soDienThoai === "" ||
    loaiVaccine === "" || trungTam === "" || ngayTiem === ""
  ) {
    alert("Vui lòng nhập đầy đủ thông tin bắt buộc!");
    return;
  }

  // Nếu hợp lệ, gửi request
  fetch("http://localhost:8080/api/appointments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      hoTenNguoiTiem,
      ngaySinh,
      maKhachHang,
      gioiTinh,
      tinhThanh,
      quanHuyen,
      phuongXa,
      diaChi,
      hoTenNguoiLienHe,
      moiQuanHe,
      soDienThoai,
      loaiVaccine,
      trungTam,
      ngayTiem
    }),
  })
    .then(async response => {
      if (response.ok) {
        alert("Đăng ký thành công!");
        document.querySelector("form").reset();
      } else {
        const errorText = await response.text();
        console.error("Lỗi từ server:", errorText);
        alert("Đăng ký thất bại. Vui lòng thử lại.");
      }
    })
}
