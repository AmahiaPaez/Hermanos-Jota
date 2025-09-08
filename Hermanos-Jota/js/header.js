// Robust header interactions and search across pages
const menuBtn = document.getElementById("menu-btn") || document.getElementById("menuBtn");
const navLinks = document.getElementById("nav-links") || document.getElementById("navLinks");
const menuBtnIcono = menuBtn ? menuBtn.querySelector("i") : null;

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    if (menuBtnIcono) menuBtnIcono.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });
  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    if (menuBtnIcono) menuBtnIcono.setAttribute("class", "ri-menu-line");
  });
}

// Update cart counter in any header variant
function actualizarContadorCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const total = carrito.reduce((sum, item) => sum + (item.cantidad || item.qty || 0), 0);
  const contadorId = document.getElementById("contador-carrito");
  const contadorClass = document.querySelector(".cart-count");
  if (contadorId) contadorId.textContent = total;
  if (contadorClass) contadorClass.textContent = total;
}

// Basic search -> redirect to product page on Enter/click
async function buscarYRedirigir(termino) {
  if (!termino) return;
  try {
    const res = await fetch("info_product.json");
    const data = await res.json();
    const productos = (data.catalogo && data.catalogo.Productos) || [];
    const t = termino.trim().toLowerCase();
    const match = productos.find(p => (p.nombre || "").toLowerCase().includes(t));
    if (match) {
      window.location.href = `producto.html?id=${encodeURIComponent(match.nombre)}`;
    }
  } catch (e) {
    // ignore
  }
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarContadorCarrito();

  // wire search input(s)
  const inputBusqueda = document.getElementById("search-text") || document.querySelector("#nav-search input");
  if (inputBusqueda) {
    inputBusqueda.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        buscarYRedirigir(inputBusqueda.value);
      }
    });
  }
  const iconoBusqueda = document.querySelector(".search-icon, .img-search");
  if (iconoBusqueda) {
    iconoBusqueda.addEventListener("click", () => {
      const valor = (inputBusqueda && inputBusqueda.value) || "";
      buscarYRedirigir(valor);
    });
  }
});

// Expose for other scripts
window.actualizarContadorCarrito = window.actualizarContadorCarrito || actualizarContadorCarrito;