  totalPrecio.innerText = total.toLocaleString('es-AR'); 
// Renderizar items en el carrito
function renderizarCartItems() {
  cartItems.innerHTML = '';
  if (cartData.length === 0) {
    cartItems.innerHTML = '<p>Tu carrito está vacío.</p>';
    return;
  }
  cartData.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cartItem');
    cartItem.innerHTML = `
      <div class="removeItem" onclick="eliminarItemCart('${item.nombre}')">
        <span>&times;</span>
      </div>
      <div class="itemImg">
        <img src="${item.imagen}" alt="${item.nombre}">
      </div>
      <div class="itemsDetalles">
        <p>${item.nombre}</p>
        <strong>$${item.precio.toLocaleString('es-AR')}</strong>
        <div class="qty">
          <span onclick="incrementarQty('${item.nombre}')">+</span>
          <strong>${item.qty}</strong>
          <span onclick="decrementarQty('${item.nombre}')">-</span>
        </div>
      </div>
    `;
    cartItems.appendChild(cartItem);
  });
}
// Actualizar carrito (renderizar y calcular totales)
function actualizarCart() {
  renderizarCartItems();
  calcularTotalProd();
  calcularPrecioTotal();
}
// Inicializar carrito vacío
actualizarCart();