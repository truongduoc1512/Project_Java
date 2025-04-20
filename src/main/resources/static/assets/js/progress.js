const mockData = [
    { id: 1, userName: "Nguyễn Văn A", tenMui: "Mũi 1", ngay: "2024-05-01" },
    { id: 2, userName: "Nguyễn Văn A", tenMui: "Mũi 2", ngay: "2024-06-01" },
    { id: 3, userName: "Nguyễn Văn A", tenMui: "Mũi 3", ngay: "2024-07-01" },
    { id: 4, userName: "Nguyễn Văn A", tenMui: "Mũi 4", ngay: "2024-08-01" },
    { id: 5, userName: "Trần Thị B", tenMui: "Mũi 1", ngay: "2024-05-10" },
    { id: 6, userName: "Trần Thị B", tenMui: "Mũi 2", ngay: "2024-06-10" },
    { id: 7, userName: "Trần Thị B", tenMui: "Mũi 3", ngay: "2024-07-10" },
    { id: 8, userName: "Trần Thị B", tenMui: "Mũi 4", ngay: "2024-08-10" }
 

];

// Gán tên người dùng cố định (hoặc sau này từ localStorage / token)
const user = "Nguyễn Văn A";

function renderUserProgress() {
  console.log("JS đã chạy!")
  const tbody = document.getElementById("userProgressTable");
  if (!tbody) {
    console.warn("❗Không tìm thấy bảng userProgressTable");
    return;
  }

  tbody.innerHTML = "";

  const filtered = mockData.filter(item => item.userName === user);

  filtered.forEach(item => {
    const daTiem = localStorage.getItem("tiem_" + item.id) === "true";
    const row = `
      <tr>
        <td>${item.tenMui}</td>
        <td>${item.ngay}</td>
        <td class="${daTiem ? 'done' : 'pending'}">
          ${daTiem ? '✅ Đã tiêm' : '⌛ Chưa tiêm'}
        </td>
      </tr>
    `;
    tbody.insertAdjacentHTML("beforeend", row);
  });
}

// Đưa hàm ra global để gọi sau khi trang được load động
document.addEventListener("DOMContentLoaded", function () {
  renderUserProgress();
});
setInterval(renderUserProgress, 1000);