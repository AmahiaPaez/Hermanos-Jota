// Header JavaScript - Hermanos Jota

// Variables globales
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchContainer = document.querySelector('.search-container');
const searchIcon = document.querySelector('.search-icon');
const cartCount = document.querySelector('.cart-count');
let isMenuOpen = false;

// Función para alternar el menú hamburguesa
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (hamburger) {
        hamburger.classList.toggle('active', isMenuOpen);
    }
    
    if (navLinks) {
        navLinks.classList.toggle('active', isMenuOpen);
    }
    
    // Prevenir scroll del body cuando el menú está abierto
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
}

// Función para cerrar el menú
function closeMenu() {
    if (isMenuOpen) {
        isMenuOpen = false;
        if (hamburger) hamburger.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Event listeners para el menú hamburguesa
if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });
}

// Cerrar menú al hacer clic en los enlaces
if (navLinks) {
    const menuLinks = navLinks.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
    
    // Cerrar menú al hacer clic en el overlay
    navLinks.addEventListener('click', (e) => {
        if (e.target === navLinks) {
            closeMenu();
        }
    });
}

// Cerrar menú con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
    }
});

// Cerrar menú al redimensionar la ventana
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    if (width > 768 && isMenuOpen) {
        closeMenu();
    }
});

// Funcionalidad de búsqueda
if (searchIcon && searchContainer) {
    const searchInput = searchContainer.querySelector('input');
    
    searchIcon.addEventListener('click', () => {
        if (searchInput) {
            searchInput.focus();
        }
    });
    
    if (searchInput) {
        // Efecto de focus en el buscador
        searchInput.addEventListener('focus', () => {
            searchContainer.parentElement.style.borderColor = '#A0522D';
            searchContainer.parentElement.style.boxShadow = '0 4px 12px rgba(160, 82, 45, 0.2)';
        });
        
        searchInput.addEventListener('blur', () => {
            searchContainer.parentElement.style.borderColor = '#C47A6D';
            searchContainer.parentElement.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        });
        
        // Funcionalidad de búsqueda (básica)
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    // Aquí puedes agregar la lógica de búsqueda
                    console.log('Buscando:', searchTerm);
                    // Ejemplo: redirigir a página de resultados
                    // window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
                }
            }
        });
    }
}

// Funcionalidad del carrito
function updateCartCount(count = 0) {
    if (cartCount) {
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'flex' : 'none';
    }
}

// Función para agregar al carrito (ejemplo)
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(cart.length);
    
    // Animación del contador
    if (cartCount) {
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
    }
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar contador del carrito
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount(cart.length);
    
    // Asegurar que el menú esté cerrado
    closeMenu();
    
    // Agregar eventos de clic al carrito si existe
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            // Aquí puedes agregar la funcionalidad para mostrar el carrito
            console.log('Carrito clickeado');
            // Ejemplo: mostrar modal del carrito o redirigir
            // window.location.href = 'cart.html';
        });
    }
    
    // Smooth scroll para enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMenu();
            }
        });
    });
});

// Exportar funciones para uso global
window.HermanosJotaHeader = {
    toggleMenu,
    closeMenu,
    addToCart,
    updateCartCount
};
