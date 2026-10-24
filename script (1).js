(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  // Sapaan sesuai jam
  const hour = new Date().getHours();
  const sapaan = hour < 11 ? "Selamat pagi, saya" : hour < 15 ? "Selamat siang, saya" : hour < 18 ? "Selamat sore, saya" : "Selamat malam, saya";
  document.getElementById("greeting").textContent = sapaan;

  // Mode siang/malam (disimpan di browser)
  const root = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    if (theme === "night") {
      root.setAttribute("data-theme", "night");
      themeBtn.textContent = "☀️";
      themeBtn.setAttribute("aria-label", "Ganti ke mode siang");
    } else {
      root.removeAttribute("data-theme");
      themeBtn.textContent = "🌙";
      themeBtn.setAttribute("aria-label", "Ganti ke mode malam");
    }
  }

  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  applyTheme(saved || "day");

  themeBtn.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "night" ? "day" : "night";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Rumah anjing: ketuk untuk pesan baru dan jejak kaki
  const house = document.getElementById("doghouse");
  const bubble = document.getElementById("bubble");
  const pesan = [ // ganti dengan pesan Anda sendiri
    "Hari ini cocok untuk coba hal baru!",
    "Jangan lupa minum air putih.",
    "Satu langkah kecil tetap maju.",
    "Waktunya camilan, kan?",
    "Kamu sudah melakukan yang terbaik.",
    "Istirahat sebentar juga boleh."
  ];
  let urutan = 0;

  house.addEventListener("click", function (e) {
    urutan = (urutan + 1) % pesan.length;
    bubble.textContent = pesan[urutan];

    for (let i = 0; i < 3; i++) {
      const paw = document.createElement("span");
      paw.className = "paw";
      paw.textContent = "🐾";
      paw.setAttribute("aria-hidden", "true");
      paw.style.left = (e.clientX || house.getBoundingClientRect().left + 100) + (i - 1) * 28 + "px";
      paw.style.top = (e.clientY || house.getBoundingClientRect().top) + "px";
      paw.style.setProperty("--dx", (i - 1) * 24 + "px");
      document.body.appendChild(paw);
      setTimeout(function () { paw.remove(); }, 900);
    }
  });

  // Menu mobile
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menu-toggle");

  menuBtn.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Tandai menu yang sedang dilihat
  const links = nav.querySelectorAll("a");
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        links.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach(function (s) { observer.observe(s); });

  // Formulir kontak
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const EMAIL_TUJUAN = "emailanda@example.com"; // ganti dengan email Anda

  function setError(id, message) {
    document.getElementById(id + "-error").textContent = message;
    document.getElementById(id).setAttribute("aria-invalid", message ? "true" : "false");
    return !message;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "";

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const okName = setError("name", name ? "" : "Tulis nama Anda.");
    const okEmail = setError("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Tulis alamat email yang valid.");
    const okMessage = setError("message", message.length >= 10 ? "" : "Tulis pesan minimal 10 karakter.");

    if (!(okName && okEmail && okMessage)) return;

    const subject = encodeURIComponent("Pesan dari " + name);
    const body = encodeURIComponent(message + "\n\nEmail balasan: " + email);
    window.location.href = "mailto:" + EMAIL_TUJUAN + "?subject=" + subject + "&body=" + body;
    status.textContent = "Aplikasi email Anda akan terbuka. Tekan kirim di sana.";
    form.reset();
  });
})();
