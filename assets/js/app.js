// ===== DATA PRODUK =====
const products = [
  {
    id: 1,
    name: "Madu Pahit",
    category: "madu_premium",
    price: 120000,
    image: "https://hni.net/public/front/img/produk/MADU%20PAHIT-1_04-01-19_.png",
    description: "Madu pahit kaya flavonoid & antioksidan alami.",
    benefits: "Meningkatkan imun, melawan radikal bebas, menjaga kesehatan liver.",
    ingredients: "100% madu murni dari lebah Apis dorsata, tanpa campuran gula.",
    isBestSeller: true
  },
  {
    id: 2,
    name: "Centella Teh Sinergi",
    category: "minuman_sehat",
    price: 70000,
    image: "https://hni.net/public/front/img/produk/CENTELLA-1_04-01-19_.png",
    description: "Teh herbal dari daun pegagan pilihan.",
    benefits: "Meningkatkan sirkulasi darah, meredakan stres, membantu detoks alami.",
    ingredients: "Daun pegagan, daun mint, jahe, serai.",
    isBestSeller: true
  },
  {
    id: 3,
    name: "Deep Olive",
    category: "minyak_herba",
    price: 145000,
    image: "https://hni.net/public/front/img/produk/deep-olive-0625_16-06-25_.png",
    description: "Minyak herba premium untuk pijat & perawatan kulit.",
    benefits: "Meredakan nyeri sendi, pegal, rematik, dan melembutkan kulit.",
    ingredients: "Minyak zaitun, minyak kemiri, ekstrak jahe, sereh, kayu putih.",
    isBestSeller: false
  },
  {
    id: 4,
    name: "Etta Goat Milk",
    category: "minuman_sehat",
    price: 75000,
    image: "https://hni.net/public/front/img/produk/egm-topbrand_14-11-24_.png",
    description: "Susu kambing etawa premium tanpa pengawet.",
    benefits: "Meningkatkan daya tahan tubuh, aman untuk anak & lansia.",
    ingredients: "Susu kambing etawa, madu, kurma.",
    isBestSeller: true
  },
  {
    id: 5,
    name: "Madu Multiflora",
    category: "madu_premium",
    price: 100000,
    image: "https://hni.net/public/front/img/produk/MADU%20MULTI%202020_18-05-20_.png",
    description: "Madu dari berbagai bunga pilihan.",
    benefits: "Mengatasi batuk, meningkatkan energi, dan mempercepat pemulihan.",
    ingredients: "Madu multiflora alami 100%.",
    isBestSeller: false
  },
  {
    id: 6,
    name: "Hania Susu Kambing Full Cream",
    category: "minuman_sehat",
    price: 75000,
    image: "https://hni.net/public/front/img/produk/hania-fc-full_01-03-23_.png",
    description: "Susu kambing full cream untuk keluarga.",
    benefits: "Meningkatkan berat badan anak, kaya kalsium & probiotik.",
    ingredients: "Susu kambing full cream, madu murni.",
    isBestSeller: true
  },
  {
    id: 7,
    name: "Habbatusauda Kapsul",
    category: "aneka_herbal",
    price: 60000,
    image: "https://hni.net/public/front/img/produk/2023-habbats_21-02-24_.png",
    description: "Ekstrak habbatusauda dalam kapsul praktis.",
    benefits: "Meningkatkan imun, anti-inflamasi, dan menjaga kesehatan jantung.",
    ingredients: "Habbatusauda (Nigella sativa) 100%.",
    isBestSeller: true
  },
  {
    id: 8,
    name: "Zareen Bright Glow Serum",
    category: "perawatan_kulit",
    price: 70000,
    image: "https://hni.net/public/front/img/produk/zareen-serum_22-12-22_.png",
    description: "Serum herbal untuk kulit cerah alami.",
    benefits: "Mencerahkan kulit, mengurangi noda, dan melembabkan.",
    ingredients: "Ekstrak licorice, vitamin C alami, aloe vera.",
    isBestSeller: false
  },
  {
    id: 9,
    name: "Sabun Kolagen",
    category: "perawatan_kulit",
    price: 25000,
    image: "https://hni.net/public/front/img/produk/SABUN%20KOLAGEN-4_07-01-19_.png",
    description: "Sabun herbal dengan kolagen alami.",
    benefits: "Melembutkan kulit, mengencangkan, dan mencegah penuaan dini.",
    ingredients: "Kolagen ikan, ekstrak chamomile, minyak zaitun.",
    isBestSeller: true
  },
  {
    id: 10,
    name: "Hibis Pantyliner",
    category: "perawatan_pribadi",
    price: 225000,
    image: "https://hni.net/public/front/img/produk/HIBIS%20PANTY-5_26-03-19_.png",
    description: "Pantyliner herbal untuk kesehatan kewanitaan.",
    benefits: "Menjaga kelembaban, mengurangi bau tidak sedap, dan mencegah infeksi.",
    ingredients: "Ekstrak daun sirih, tea tree oil, serat kapas organik.",
    isBestSeller: true
  }
  // ... tambahkan produk lain jika diperlukan
];

// ===== DOM ELEMENTS =====
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const resetCartBtn = document.getElementById('resetCart');
const checkoutWA = document.getElementById('checkoutWA');

const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const closeModalBottom = document.getElementById('closeModalBottom');
const modalProductImage = document.getElementById('modalProductImage');
const modalProductName = document.getElementById('modalProductName');
const modalProductDesc = document.getElementById('modalProductDesc');
const modalProductBenefits = document.getElementById('modalProductBenefits');
const modalProductIngredients = document.getElementById('modalProductIngredients');
const modalProductPrice = document.getElementById('modalProductPrice');
const addToCartFromModal = document.getElementById('addToCartFromModal');
const whatsappOrderLink = document.getElementById('whatsappOrderLink');

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

// ===== KERANJANG (localStorage) =====
let cart = JSON.parse(localStorage.getItem('herbaprima-cart')) || [];

function saveCart() {
  localStorage.setItem('herbaprima-cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  // Update badge count
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalCount;
  cartCount.style.display = totalCount > 0 ? 'block' : 'none';

  // Update sidebar
  renderCartItems();
  updateCartTotal();
}

function renderCartItems() {
  if (!cartItems) return;
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="text-center">Keranjang Anda kosong.</p>';
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>Rp ${item.price.toLocaleString('id-ID')}</p>
        <div class="cart-item-qty">
          <button class="qty-btn minus" data-id="${item.id}">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn plus" data-id="${item.id}">+</button>
        </div>
      </div>
      <button class="btn btn-sm btn-secondary remove-item" data-id="${item.id}">Hapus</button>
    </div>
  `).join('');
}

function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  cartTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: qty
    });
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

function updateQuantity(productId, newQty) {
  if (newQty < 1) {
    removeFromCart(productId);
    return;
  }
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.qty = newQty;
    saveCart();
  }
}

// ===== MODAL DETAIL PRODUK =====
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  modalProductImage.src = product.image;
  modalProductName.textContent = product.name;
  modalProductDesc.textContent = product.description;
  modalProductBenefits.textContent = product.benefits;
  modalProductIngredients.textContent = product.ingredients;
  modalProductPrice.textContent = `Rp ${product.price.toLocaleString('id-ID')}`;

  // Update tombol WhatsApp
  const waMessage = encodeURIComponent(
    `Halo Herbaprima, saya ingin memesan:\n - ${product.name}\n\nNama:\nAlamat:\nNo HP:`
  );
  whatsappOrderLink.href = `https://wa.me/6282241900467?text=${waMessage}`;

  // Simpan ID produk untuk keranjang
  addToCartFromModal.onclick = () => {
    addToCart(productId);
    alert(`${product.name} ditambahkan ke keranjang!`);
  };

  productModal.style.display = 'flex';
  setTimeout(() => productModal.classList.add('show'), 10);
}

function closeProductModal() {
  productModal.classList.remove('show');
  setTimeout(() => {
    productModal.style.display = 'none';
  }, 300);
}

// ===== EVENT LISTENERS =====
// Keranjang
if (cartIcon) {
  cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('show');
  });
}

if (closeCart) {
  closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('show');
  });
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-item')) {
    const id = parseInt(e.target.dataset.id);
    removeFromCart(id);
  }

  if (e.target.classList.contains('qty-btn')) {
    const id = parseInt(e.target.dataset.id);
    const isPlus = e.target.classList.contains('plus');
    const item = cart.find(item => item.id === id);
    if (item) {
      const newQty = isPlus ? item.qty + 1 : item.qty - 1;
      updateQuantity(id, newQty);
    }
  }
});

if (resetCartBtn) {
  resetCartBtn.addEventListener('click', () => {
    if (confirm('Reset keranjang? Semua item akan dihapus.')) {
      cart = [];
      saveCart();
    }
  });
}

// Checkout WhatsApp
if (checkoutWA) {
  checkoutWA.addEventListener('click', (e) => {
    if (cart.length === 0) {
      e.preventDefault();
      alert('Keranjang Anda kosong.');
      return;
    }

    let message = 'Halo Herbaprima, saya ingin memesan:\n';
    cart.forEach(item => {
      message += ` - ${item.name} Qty: ${item.qty}\n`;
    });
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    message += `\nTotal: Rp ${total.toLocaleString('id-ID')}\n\nNama:\nAlamat:\nNo HP:`

    const encoded = encodeURIComponent(message);
    checkoutWA.href = `https://wa.me/6282241900467?text=${encoded}`;
  });
}

// Modal
if (closeModal) closeModal.addEventListener('click', closeProductModal);
if (closeModalBottom) closeModalBottom.addEventListener('click', closeProductModal);

// Hamburger Menu
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Scroll to Top
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }, 1000);
  }
});

// Animasi Scroll (Fade-in)
function revealOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < window.innerHeight - elementVisible) {
      el.classList.add('appear');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);

// ===== RENDER PRODUK UNGGULAN (6) =====
function renderFeaturedProducts() {
  const featuredContainer = document.querySelector('.products-grid.featured');
  if (!featuredContainer) return;

  // Ambil 6 produk unggulan (3 best seller + 3 lainnya)
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 3);
  const others = products.filter(p => !p.isBestSeller).slice(0, 3);
  const featured = [...bestSellers, ...others];

  featuredContainer.innerHTML = featured.map(product => `
    <div class="product-card fade-in">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-price">Rp ${product.price.toLocaleString('id-ID')}</div>
        ${product.isBestSeller ? '<span class="badge">Terlaris</span>' : ''}
        <div class="product-actions">
          <button class="btn btn-sm btn-primary" onclick="openProductModal(${product.id})">Detail</button>
          <button class="btn btn-sm btn-secondary" onclick="addToCart(${product.id})">+ Keranjang</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== RENDER SEMUA PRODUK (untuk halaman product/index.html) =====
// Catatan: Untuk halaman produk lengkap, buat file terpisah dengan fungsi serupa

// ===== INISIALISASI =====
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  renderFeaturedProducts();

  // Hero Carousel (Auto)
  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Auto slide every 5s
  setInterval(nextSlide, 5000);

  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.dataset.slide);
      showSlide(slideIndex);
    });
  });
});

// Expose functions to global scope for inline onclick
window.openProductModal = openProductModal;
window.addToCart = addToCart;
