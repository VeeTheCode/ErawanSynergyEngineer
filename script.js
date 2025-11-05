// ✅ ป้องกัน Navbar ทับเนื้อหาโดยคำนวณอัตโนมัติ
window.addEventListener("load", () => {
  const navbarHeight = document.querySelector(".navbar").offsetHeight;
  document.body.style.paddingTop = navbarHeight + "px";
});

// ✅ เปลี่ยนสีเมนูอัตโนมัติให้ตรงกับหน้าปัจจุบัน
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".navbar nav a");

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

// ✅ ฟอร์มติดต่อ (จำลอง)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("status").innerText = "ขอบคุณที่ส่งข้อความครับ! (ระบบจำลอง)";
    form.reset();
  });
});
