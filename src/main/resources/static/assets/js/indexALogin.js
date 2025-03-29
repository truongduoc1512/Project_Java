function loadPage(page) {
  console.log("Loading page:", page);

  // Kiểm tra nếu page đã có '/pages/', chỉ fetch(page) thôi
  let url = page.startsWith("/pages/") ? page : "/pages/" + page;

  fetch(url)
    .then((response) => response.text())
    .then((html) => (document.getElementById("content").innerHTML = html))
    .catch((error) => console.error("Fetch error:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  const submenuItems = document.querySelectorAll(".submenu-item");
  const navItems = document.querySelectorAll(".nav-item");
  const content = document.getElementById("content");

  const pages = {
    // "Trang chủ":
    //   "<h1>Trang chủ</h1><p>Đây là trang chủ của hệ thống quản lý tiêm vaccine.</p>",
    // "Dịch vụ tiêm chủng":
    //   "<h1>Dịch vụ tiêm chủng</h1><p>Thông tin về dịch vụ tiêm vaccine.</p>",
    // "Bảng giá": "<h1>Giá</h1><p>Thông tin về giá tiêm vaccine.</p>",
    // "Cẩm nang tiêm chủng":
    //   "<h1>Cẩm nang tiêm chủng</h1><p>Hướng dẫn tiêm vaccine.</p>",
    // "Gói vaccine": "<h1>Gói vaccine</h1><p>Thông tin về các gói vaccine.</p>",
    // "Tin tức": "<h1>Tin tức</h1><p>Các tin tức mới nhất về tiêm vaccine.</p>",
    "Đặt lịch": "/pages/index_DatLich",
    "Chăm sóc khách hàng": "/pages/index_ChamSocKhachHang",
    // "Cập nhật hồ sơ trẻ em":
    //   "<h1>Cập nhật hồ sơ trẻ em</h1><p>Thay đổi thông tin hồ sơ của trẻ.</p>",
    // "Cập nhật quá trình tiêm chủng":
    //   "<h1>Cập nhật quá trình tiêm chủng</h1><p>Quản lý tiến trình tiêm chủng.</p>",
    // "Thông báo":
    //   "<h1>Thông báo</h1><p>Các thông báo mới nhất về tiêm vaccine.</p>",
<<<<<<< HEAD
    "Support": "/pages/indexSP",
    // "Lịch sử giao dịch":
    //   "<h1>Lịch sử giao dịch</h1><p>Danh sách các giao dịch đã thực hiện.</p>",
=======
    Support: "/pages/indexSP",
    "Lịch sử giao dịch": "/pages/index_HistoryPay",
>>>>>>> 13fddd5 (add ChamSocKhachHang + lich su giao dich + sua lai giao dien dat lich)
    // "Phản hồi":
    //   "<h1>Phản hồi</h1><p>Đóng góp ý kiến và phản hồi về hệ thống.</p>",
  };

  // Xử lý click trên menu cha (có submenu)
  document.querySelectorAll(".has-submenu > div").forEach((parentTrigger) => {
    parentTrigger.addEventListener("click", function (event) {
      event.stopPropagation();

      let parentItem = parentTrigger.parentElement;
      let submenu = parentItem.querySelector(".submenu");

      // Đóng tất cả các menu khác
      document.querySelectorAll(".menu-item").forEach((item) => {
        if (item !== parentItem) {
          item.classList.remove("active");
          let sub = item.querySelector(".submenu");
          if (sub) sub.style.display = "none";
        }
      });

      // Toggle trạng thái của menu được bấm
      if (submenu.style.display === "block") {
        submenu.style.display = "none";
        parentItem.classList.remove("active");
      } else {
        submenu.style.display = "block";
        parentItem.classList.add("active");
      }
    });
  });

  // Xử lý click trên submenu-item (submenu con)
  submenuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.stopPropagation();

      // Xóa active của tất cả submenu-items
      submenuItems.forEach((i) => i.classList.remove("active"));

      // Active submenu-item được chọn
      item.classList.add("active");

      // Giữ menu cha active
      let parent = item.closest(".has-submenu");
      if (parent) {
        parent.classList.add("active");
        parent.querySelector(".submenu").style.display = "block";
      }

      // Hiển thị nội dung tương ứng
      const text = item.innerText.trim();
      content.innerHTML = pages[text] || "<h1>Trang chưa có nội dung</h1>";
    });
  });

  // Xử lý click trên menu chính (không có submenu)
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Đóng tất cả menu khác
      document.querySelectorAll(".menu-item").forEach((i) => {
        if (i !== item) {
          i.classList.remove("active");
          let sub = i.querySelector(".submenu");
          if (sub) sub.style.display = "none";
        }
      });

      // Xóa trạng thái active của submenu-items
      submenuItems.forEach((i) => i.classList.remove("active"));

      // Thêm active vào menu được chọn
      item.classList.add("active");

      // Hiển thị nội dung tương ứng
      const text = item.innerText.trim();
      if (pages[text]) {
        console.log("Calling loadPage with:", pages[text]);
        loadPage(pages[text]);
      } else {
        console.log("No page found for:", text);
      }
    });
  });

  // Xử lý click trên navbar (nếu có)
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Xóa trạng thái active của tất cả nav-items
      navItems.forEach((i) => i.classList.remove("active"));

      // Thêm active vào nav-item được chọn
      item.classList.add("active");

      // Hiển thị nội dung tương ứng
      const text = item.innerText.trim();
      content.innerHTML = pages[text] || "<h1>Trang chưa có nội dung</h1>";
    });
  });
});
