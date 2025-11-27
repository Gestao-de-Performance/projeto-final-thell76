const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Abrir/fechar menu ao clicar no hambúrguer
toggleButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  toggleButton.classList.toggle("active", isOpen);
  toggleButton.setAttribute("aria-expanded", isOpen);
});

// Fechar o menu ao clicar em um link (no mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      toggleButton.classList.remove("active");
      toggleButton.setAttribute("aria-expanded", "false");
   }
  });
});