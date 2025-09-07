async function cargarProductos() {
  const response = await fetch("info_product.json");
  const data = await response.json();
  return new Promise(resolve => setTimeout(() => resolve(data.catalogo.productos), 600));
}

function obtenerParametro(nombre) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nombre);
}

function slugify(text) {
  if (!text) return "";
  return text.toString().toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function renderizarDetalle(producto) {
  const contenedor = document.getElementById("detalle-producto");
  if (!contenedor) return;

  const humanLabel = key => {
    const mapa = {
      medidas: "Medidas",
      materiales: "Materiales",
      acabado: "Acabado",
      rotacion: "Rotación",
      garantia: "Garantía",
      peso: "Peso",
      capacidad: "Capacidad",
      tapizado: "Tapizado",
      confort: "Confort",
      estructura: "Estructura",
      extension: "Extensión",
      almacenamiento: "Almacenamiento",
      carga_maxima: "Carga máxima",
      caracteristicas: "Características",
      regulacion: "Regulación",
      certificacion: "Certificación",
      incluye: "Incluye",
      sostenibilidad: "Sostenibilidad",
      rellenado: "Relleno"
    };
    if (mapa[key]) return mapa[key];
    return key
      .replace(/_/g, " ")
      .replace(/([A-Z])/g, " $1")
      .replace(/\b\w/g, l => l.toUpperCase())
      .trim();
  };

  const prioridad = [
    "medidas",
    "materiales",
    "acabado",
    "peso",
    "capacidad",
    "rotacion",
    "garantia",
    "tapizado",
    "confort"
  ];

  const ignoreKeys = new Set([
    "nombre",
    "categoria",
    "descripcion",
    "imagen",
    "id",
    "precio"
  ]);

  const specs = [];
  prioridad.forEach(k => {
    if (producto[k] !== undefined && producto[k] !== null && String(producto[k]).trim() !== "") {
      specs.push({ key: k, value: producto[k] });
    }
  });
  Object.keys(producto).forEach(k => {
    if (ignoreKeys.has(k)) return;
    if (prioridad.includes(k)) return;
    const val = producto[k];
    if (val === undefined || val === null) return;
    const s = String(val).trim();
    if (s === "") return;
    specs.push({ key: k, value: s });
  });

  const imagenSrc = producto.imagen
    ? `${producto.imagen}`
    : (producto.nombre ? `imagenes/${slugify(producto.nombre)}.png` : "imagenes/placeholder.png");

  contenedor.innerHTML = `
    <div class="imagen-producto">
      <div class="img-card">
        <img src="${imagenSrc}" alt="${producto.nombre || ''}" class="img-silla" onerror="this.src='imagenes/placeholder.png'">
        <div class="selector-cantidad centrado" id="selector-externo">
          <button class="boton-cant" id="menos" aria-label="Restar">−</button>
          <span class="numero-cant" id="cantidad">1</span>
          <button class="boton-cant" id="mas" aria-label="Sumar">+</button>
        </div>
      </div>
    </div>

    <div class="info-producto">
      <div class="info-top">
        <h1 class="titulo-producto">${producto.nombre || ''}</h1>
        <p class="descripcion-producto">${producto.descripcion || ''}</p>

        <div class="cuadricula-especificaciones" id="especificaciones">
        </div>
      </div>

      <div class="info-footer">
        <button id="btn-carrito" class="boton-cant boton-anadir">Añadir al Carrito</button>
      </div>
    </div>
  `;

  const contSpecs = document.getElementById("especificaciones");
  if (!contSpecs) return;

  if (specs.length === 0) {
    contSpecs.innerHTML = `<p style="color:#7a8b7a; font-size:14px;">No hay especificaciones adicionales para este producto.</p>`;
  } else {
    contSpecs.innerHTML = specs.map(s => {
      const valor = String(s.value).replace(/\n/g, "<br>");
      return `
        <div class="tarjeta-especificacion">
          <h3>${humanLabel(s.key)}</h3>
          <p>${valor}</p>
        </div>
      `;
    }).join("");
  }

  let cantidad = 1;
  const menosEl = document.getElementById("menos");
  const masEl = document.getElementById("mas");
  const cantEl = document.getElementById("cantidad");
  if (menosEl && masEl && cantEl) {
    menosEl.addEventListener("click", () => {
      if (cantidad > 1) cantidad--;
      cantEl.textContent = cantidad;
    });
    masEl.addEventListener("click", () => {
      cantidad++;
      cantEl.textContent = cantidad;
    });
  }

  const btnCarrito = document.getElementById("btn-carrito");
  if (btnCarrito) {
    btnCarrito.addEventListener("click", () => {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push({ ...producto, cantidad });
      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert(`${cantidad} ${producto.nombre || 'producto'} añadido(s) al carrito`);
      if (typeof actualizarContadorCarrito === "function") actualizarContadorCarrito();
    });
  }
}

function renderizarCarrusel(productos, id) {
  const carrusel = document.getElementById(id);
  if (!carrusel) return;
  carrusel.innerHTML = "";

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("tarjeta-producto");

    const imgSrc = prod.imagen ? prod.imagen : `imagenes/${slugify(prod.nombre)}.png`;

    card.innerHTML = `
      <a class="card-link" href="producto.html?id=${encodeURIComponent(prod.nombre)}">
        <div class="thumb">
          <img src="${imgSrc}" alt="${prod.nombre}" onerror="this.src='imagenes/placeholder.png'">
        </div>
        <h3 class="nombre-card">${prod.nombre}</h3>
        <p class="categoria-card">${prod.categoria || ""}</p>
      </a>
    `;
    carrusel.appendChild(card);
  });
}

function activarCarrusel() {
  document.querySelectorAll(".boton-carrusel").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target || !target.firstElementChild) return;
      const primeraTarjeta = target.firstElementChild;
      const style = getComputedStyle(primeraTarjeta);
      const gap = parseInt(style.marginRight || 20, 10) || 20;
      const cardWidth = primeraTarjeta.getBoundingClientRect().width + gap;
      target.scrollBy({
        left: btn.classList.contains("next") ? cardWidth : -cardWidth,
        behavior: "smooth"
      });
    });
  });
}

function actualizarContadorCarrito() {
  const contador = document.getElementById("contador-carrito");
  if (!contador) return;
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const total = carrito.reduce((s, item) => s + (item.cantidad || 0), 0);
  contador.textContent = total;
}

function formatPrice(valor) {
  if (valor === undefined || valor === null || String(valor).trim() === "") return "";
  let num = null;
  if (typeof valor === "number") num = valor;
  else {
    const cleaned = String(valor).replace(/[^\d,.-]/g, "").replace(",", ".");
    num = Number(cleaned);
    if (Number.isNaN(num)) num = null;
  }
  if (num === null) return String(valor);
  return new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(num);
}

document.addEventListener("DOMContentLoaded", async () => {
  const productos = await cargarProductos();
  const id = obtenerParametro("id");
  const producto = productos.find(p => p.nombre === id) || productos[0];

  renderizarDetalle(producto);

  renderizarCarrusel(productos.slice(0, 4), "carrusel1");
  renderizarCarrusel(productos.slice(4, 8), "carrusel2");
  activarCarrusel();

  actualizarContadorCarrito();
});
