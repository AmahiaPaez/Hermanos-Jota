        const productos = [
            {
                nombre: "Aparador Uspallata",
                categoria: "Aparadores",
                descripcion: "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
                medidas: "180 × 45 × 75 cm",
                materiales: "Nogal macizo FSC®, herrajes de latón",
                acabado: "Aceite natural ecológico",
                precio: 89900,
                imagen: "imagenes/Aparador_Uspallata.png"
            },
            {
                nombre: "Biblioteca Recoleta",
                categoria: "Bibliotecas",
                descripcion: "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
                medidas: "100 × 35 × 200 cm",
                materiales: "Estructura de acero, estantes de roble",
                acabado: "Laca mate ecológica",
                precio: 34900,
                imagen: "imagenes/Biblioteca_Recoleta.png"
            },
            {
                nombre: "Butaca Mendoza",
                categoria: "Butacas",
                descripcion: "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
                medidas: "80 × 75 × 85 cm",
                materiales: "Guatambú macizo, tela bouclé",
                acabado: "Cera vegetal, tapizado premium",
                precio: 45900,
                imagen: "imagenes/Butaca_Mendoza.png"
            },
            {
                nombre: "Sillón Copacabana",
                categoria: "Sillones",
                descripcion: "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
                medidas: "90 × 85 × 95 cm",
                materiales: "Cuero curtido vegetal, acero pintado",
                acabado: "Cuero anilina premium",
                precio: 67500,
                imagen: "imagenes/Sillon_Copacabana.png"
            },
            {
                nombre: "Mesa de Centro Araucaria",
                categoria: "Mesas de Centro",
                descripcion: "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
                medidas: "90 × 90 × 45 cm",
                materiales: "Sobre de mármol Patagonia, patas de nogal",
                acabado: "Mármol pulido, aceite natural en madera",
                precio: 52300,
                imagen: "imagenes/Mesa_de_Centro_Araucaria.png"
            },
            {
                nombre: "Mesa de Noche Aconcagua",
                categoria: "Mesas de Noche",
                descripcion: "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
                medidas: "45 × 35 × 60 cm",
                materiales: "Roble macizo FSC®, herrajes soft-close",
                acabado: "Barniz mate de poliuretano",
                precio: 18900,
                imagen: "imagenes/Mesa_de_Noche_Aconcagua.png"
            },
            {
                nombre: "Sofá Patagonia",
                categoria: "Sofás",
                descripcion: "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
                medidas: "220 × 90 × 80 cm",
                materiales: "Madera de eucalipto certificada FSC®, lino",
                acabado: "Lino 100% natural premium",
                precio: 89500,
                imagen: "imagenes/Sofa_Patagonia.png"
            },
            {
                nombre: "Mesa Comedor Pampa",
                categoria: "Mesas de Comedor",
                descripcion: "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
                medidas: "160-240 × 90 × 75 cm",
                materiales: "Roble macizo FSC®, mecanismo alemán",
                acabado: "Aceite-cera natural",
                precio: 78900,
                imagen: "imagenes/Mesa_Comedor_Pampa.png"
            },
            {
                nombre: "Sillas Córdoba",
                categoria: "Sillas",
                descripcion: "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
                medidas: "45 × 52 × 80 cm (cada una)",
                materiales: "Contrachapado nogal, tubo de acero",
                acabado: "Laca mate, pintura epoxi",
                precio: 28900,
                imagen: "imagenes/Sillas_Cordoba.png"
            },
            {
                nombre: "Escritorio Costa",
                categoria: "Escritorios",
                descripcion: "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
                medidas: "120 × 60 × 75 cm",
                materiales: "Bambú laminado, herrajes ocultos",
                acabado: "Laca mate resistente",
                precio: 32500,
                imagen: "imagenes/Escritorio_Costa.png"
            },
            {
                nombre: "Silla de Trabajo Belgrano",
                categoria: "Sillas de Oficina",
                descripcion: "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
                medidas: "60 × 60 × 90-100 cm",
                materiales: "Malla técnica, tejido reciclado",
                acabado: "Base cromada, tapizado premium",
                precio: 24900,
                imagen: "imagenes/Silla_de_Trabajo_Belgrano.png"
            }
        ];

        let cart = [];
        let currentSlide = 0;
        let carruselInterval;

        function init() {
            crearCarrusel();
            mostrarProductos();
            iniciarCarruse();
        }


        function crearCarrusel() {
            const carrusel = document.getElementById('carrusel');
            const nav = document.getElementById('carruselN');
            const featuredProducts = productos.slice(0, 6); 
            
            for (let i = 0; i < featuredProducts.length; i += 3) {
                const slide = document.createElement('div');
                slide.className = 'carrusel-slide';
                
                const slideProductos = featuredProducts.slice(i, i + 3);
                slideProductos.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.className = 'featured-product';
                    productDiv.onclick = () => mostrarDetallesProd(product);
                    productDiv.innerHTML = `
                        <img src="${product.imagen}" alt="${product.nombre}" class="product-image">
                        <h3>${product.nombre}</h3>
                        <p>$${product.precio.toLocaleString()}</p>
                    `;
                    slide.appendChild(productDiv);
                });
                
                carrusel.appendChild(slide);
            }
            
            const slideCount = Math.ceil(featuredProducts.length / 3);
            for (let i = 0; i < slideCount; i++) {
                const dot = document.createElement('div');
                dot.className = `carrusel-dot ${i === 0 ? 'active' : ''}`;
                dot.onclick = () => irASlide(i);
                nav.appendChild(dot);
            }
        }

        function mostrarProductos() {
            const mejoresProdsContainer = document.getElementById('mejoresProds');
            const catgPrimContainer = document.getElementById('segCateg');
            const catgSegContainer = document.getElementById('tercCateg');
            const todosProdctsContainer = document.getElementById('todosProdcts');

            const mejoresProds = [...productos].sort(() => 0.5 - Math.random()).slice(0, 4);
            mejoresProdsContainer.innerHTML = mejoresProds.map(crearProducCar).join('');

            const catgPrim = productos.filter(p => 
                p.categoria.includes('Butacas') || 
                p.categoria.includes('Sillones') || 
                p.categoria.includes('Sillas')
            );
            catgPrimContainer.innerHTML = catgPrim.map(crearProducCar).join('');

            const catgSeg = productos.filter(p => 
                p.categoria.includes('Mesa') || 
                p.categoria.includes('Biblioteca') || 
                p.categoria.includes('Aparador') ||
                p.categoria.includes('Escritorio')
            );
            catgSegContainer.innerHTML = catgSeg.map(crearProducCar).join('');

            todosProdctsContainer.innerHTML = productos.map(crearProducCar).join('');
        }

        function crearProducCar(product) {
            return `
                <div class="product-card" onclick="mostrarDetallesProd(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                    <img src="${product.imagen}" alt="${product.nombre}">
                    <h3 class="product-name">${product.nombre}</h3>
                    <p class="product-price">$${product.precio.toLocaleString()}</p>
                </div>
            `;
        }

        function iniciarCarruse() {
            carruselInterval = setInterval(sigSlide, 5000);
        }

        function sigSlide() {
            const slides = document.querySelectorAll('.carrusel-slide');
            const dots = document.querySelectorAll('.carrusel-dot');
            
            currentSlide = (currentSlide + 1) % slides.length;
            
            const carrusel = document.getElementById('carrusel');
            carrusel.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function irASlide(slideIndex) {
            clearInterval(carruselInterval);
            currentSlide = slideIndex;
            
            const carrusel = document.getElementById('carrusel');
            carrusel.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            const dots = document.querySelectorAll('.carrusel-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
            
            iniciarCarruse();
        }


        function bucadorProduct(query) {
            const buscarResult = document.getElementById('buscarResult');
            
            if (query.length < 2) {
                buscarResult.style.display = 'none';
                return;
            }
            
            const productoFiltrado = productos.filter(product =>
                product.nombre.toLowerCase().includes(query.toLowerCase()) ||
                product.categoria.toLowerCase().includes(query.toLowerCase())
            );
            
            if (productoFiltrado.length > 0) {
                buscarResult.innerHTML = productoFiltrado.map(product => `
                    <div class="search-result-item" onclick="mostrarDetallesProd(${JSON.stringify(product).replace(/"/g, '&quot;')}); ocultarBuscadoResult();">
                        ${product.nombre} - $${product.precio.toLocaleString()}
                    </div>
                `).join('');
                buscarResult.style.display = 'block';
            } else {
                buscarResult.innerHTML = '<div class="search-result-item">No se encontraron productos</div>';
                buscarResult.style.display = 'block';
            }
        }

        function ocultarBuscadoResult() {
            document.getElementById('buscarResult').style.display = 'none';
            document.querySelector('.buscarBox').value = '';
        }

     
        function mostrarHome() {
            document.getElementById('seccHome').style.display = 'block';
            document.getElementById('productosSection').style.display = 'none';
        }

        function mostrarProd() {
            document.getElementById('seccHome').style.display = 'none';
            document.getElementById('productosSection').style.display = 'block';
        }
        
        function mostrarDetallesProd(product) {
            const modal = document.getElementById('productModal');
            const productDetail = document.getElementById('productDetail');
            
            productDetail.innerHTML = `
                <div class="product-detail-image">
                    <img src="${product.imagen}" alt="${product.nombre}">
                </div>
                <div class="product-detail-info">
                    <h2 class="product-detail-title">${product.nombre}</h2>
                    <p class="product-detail-description">${product.descripcion}</p>
                    
                    <div class="product-specs">
                        <div class="specs-grid">
                            <div class="spec-item">
                                <div class="spec-title">Medidas</div>
                                <div>${product.medidas}</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-title">Materiales</div>
                                <div>${product.materiales}</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-title">Acabado</div>
                                <div>${product.acabado}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="changeQuantity(-1)">−</button>
                        <input type="number" class="quantity-input" id="quantityInput" value="1" min="1">
                        <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                    </div>
                    
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <div style="font-size: 1.5rem; font-weight: bold; color: #c17852;">
                            $${product.precio.toLocaleString()}
                        </div>
                        <button class="add-to-cart-btn" onclick="agregarCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
            ocultarBuscadoResult();
        }

        function cerrarModal() {
            document.getElementById('productModal').style.display = 'none';
        }

        function cambiarCantidad(delta) {
            const input = document.getElementById('quantityInput');
            const newValue = parseInt(input.value) + delta;
            if (newValue >= 1) {
                input.value = newValue;
            }
        }

        function toggleCart() {
            const sidebar = document.getElementById('cartSidebar');
            sidebar.classList.toggle('open');
        }

        function agregarCart(product) {
            const quantity = parseInt(document.getElementById('quantityInput').value);
            const existingItem = cart.find(item => item.nombre === product.nombre);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({...product, quantity});
            }
            
            actualizarCartDisplay();
            cerrarModal();
        }

        function removerdeCarrito(productName) {
            cart = cart.filter(item => item.nombre !== productName);
            actualizarCartDisplay();
        }

        function actualizarCantidad(productName, newQuantity) {
            if (newQuantity <= 0) {
                removerdeCarrito(productName);
                return;
            }
            
            const item = cart.find(item => item.nombre === productName);
            if (item) {
                item.quantity = newQuantity;
                actualizarCartDisplay();
            }
        }

        function actualizarCartDisplay() {
            const cartItems = document.getElementById('cartItems');
            const carritoCont = document.getElementById('cartCount');
            const carritoTitulo = document.getElementById('carritoTitulo');
            const cartTotal = document.getElementById('cartTotal');
            
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrecio = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);
            
           carritoCont.textContent = totalItems;
            carritoTitulo.textContent = `${totalItems} Producto${totalItems !== 1 ? 's' : ''}`;
            cartTotal.textContent = `$${totalPrecio.toLocaleString()}`;
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<div style="text-align: center; padding: 2rem; color: #666;">Tu carrito está vacío</div>';
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-image">
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.nombre}</div>
                            <div style="color: #c17852; font-weight: bold;">$${item.precio.toLocaleString()}</div>
                            <div class="cart-item-controls">
                                <button class="cart-quantity-btn" onclick="actualizarCantidad('${item.nombre}', ${item.quantity - 1})">−</button>
                                <input type="number" class="cart-quantity" value="${item.quantity}" onchange="actualizarCantidad('${item.nombre}', parseInt(this.value))" min="1">
                                <button class="cart-quantity-btn" onclick="actualizarCantidad('${item.nombre}', ${item.quantity + 1})">+</button>
                                <button class="remove-item" onclick="removerdeCarrito('${item.nombre}')">Eliminar</button>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }

        document.addEventListener('click', function(event) {
            const buscarContaineer = document.querySelector('.buscarContainer');
            if (!searchContainer.contains(event.target)) {
                ocultarBuscadoResult();
            }
        });
        window.addEventListener('load', init);