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
// script.js
const form = document.getElementById("contactForm");
const status = document.getElementById("status");
const popup = document.getElementById("popup");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  if (!formData.name || !formData.email || !formData.message) {
    showPopup("❌ กรุณากรอกข้อมูลให้ครบทุกช่อง", "error");
    return;
  }

  showPopup("⏳ กำลังส่งข้อความ...", "loading");

  try {
    const response = await fetch("https://formspree.io/f/xnnoedno", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      showPopup("✅ ส่งข้อความสำเร็จแล้ว! ขอบคุณที่ติดต่อครับ ❤️", "success");
      form.reset();
    } else {
      showPopup("⚠️ เกิดข้อผิดพลาดในการส่ง กรุณาลองใหม่", "error");
    }
  } catch {
    showPopup("🚫 ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้", "error");
  }
});

function showPopup(message, type) {
  popup.textContent = message;
  popup.className = `popup show ${type}`;
  setTimeout(() => {
    popup.classList.remove("show");
  }, 3500);
}
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}
