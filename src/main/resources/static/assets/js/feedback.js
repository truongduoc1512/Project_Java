console.log("✅ feedback.js đã được load!");

let selectedRating = 0;

function initFeedbackEvents() {
  const stars = document.querySelectorAll('.star');
  if (stars.length > 0) {
    stars.forEach(star => {
      star.addEventListener('click', () => {
        selectedRating = parseInt(star.dataset.value);
        updateStarDisplay(selectedRating);
      });
    });
  }

  const btn = document.querySelector('button[onclick="submitFeedback()"]');
  if (btn) {
    btn.onclick = submitFeedback;
  }
}

function updateStarDisplay(rating) {
  document.querySelectorAll('.star').forEach(star => {
    const value = parseInt(star.dataset.value);
    star.classList.toggle('selected', value <= rating);
  });
}

function submitFeedback() {
  const feedbackText = document.getElementById("feedbackText");
  if (!feedbackText) return;

  const comment = feedbackText.value.trim();
  if (!selectedRating || !comment) {
    alert("Vui lòng chọn số sao và nhập phản hồi.");
    return;
  }

  const feedback = {
    rating: selectedRating,
    comment,
    time: new Date().toLocaleString()
  };

  const stored = JSON.parse(localStorage.getItem("feedbacks") || "[]");
  stored.push(feedback);
  localStorage.setItem("feedbacks", JSON.stringify(stored));

  feedbackText.value = "";
  selectedRating = 0;
  updateStarDisplay(0);
  renderFeedbackList();
}

function renderFeedbackList() {
  const feedbackList = document.getElementById("feedbackList");
  if (!feedbackList) {
    console.warn("⚠️ Không tìm thấy #feedbackList trong DOM!");
    return;
  }

  feedbackList.innerHTML = "";
  const stored = JSON.parse(localStorage.getItem("feedbacks") || "[]");

  stored.forEach(fb => {
    const div = document.createElement("div");
    div.className = "feedback-item";
    div.innerHTML = `
      <strong>${"★".repeat(fb.rating)}${"☆".repeat(5 - fb.rating)}</strong><br>
      <em>${fb.time}</em><br>
      <p>${fb.comment}</p>
    `;
    feedbackList.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initFeedbackEvents();     // nếu có form đánh giá
  renderFeedbackList();     // nếu có nơi hiển thị feedback
});
