// ===== DATA PRODUK LENGKAP (18 produk dari data Anda) =====
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
    name: "Madu Habbat",
    category: "madu_premium",
    price: 130000,
    image: "https://hni.net/public/front/img/produk/MADU%20HABBATS%202020_18-05-20_.png",
    description: "Madu dengan ekstrak habbatusauda.",
    benefits: "Meningkatkan imun, anti-inflamasi, dan menjaga kesehatan jantung.",
    ingredients: "Madu murni, ekstrak habbatusauda.",
    isBestSeller: true
  },
  {
    id: 7,
    name: "HNI Coffee",
    category: "minuman_sehat",
    price: 125000,
    image: "https://hni.net/public/front/img/produk/hcmockup2021_27-12-21_.png",
    description: "Kopi herbal tanpa kafein berlebih.",
    benefits: "Memberi energi tanpa jantung berdebar, cocok untuk penderita maag.",
    ingredients: "Ekstrak kopi robusta, jahe, ginseng, madu.",
    isBestSeller: false
  },
  {
    id: 8,
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
    id: 9,
    name: "Sevel Stamina",
    category: "minuman_sehat",
    price: 115000,
    image: "https://hni.net/public/front/img/produk/sevel-stamina_11-09-25_.png",
    description: "Minuman herbal penambah stamina pria & wanita.",
    benefits: "Meningkatkan vitalitas, mengurangi kelelahan, dan menjaga kesehatan reproduksi.",
    ingredients: "Ekstrak pasak bumi, purwoceng, madu, ginseng.",
    isBestSeller: true
  },
  {
    id: 10,
    name: "Hania Realco Cappuccino Less Sugar",
    category: "minuman_sehat",
    price: 50000,
    image: "https://hni.net/public/front/img/produk/cappucino-lessugar1_14-11-24_.png",
    description: "Cappuccino herbal rendah gula.",
    benefits: "Nikmat tanpa takut diabetes, cocok untuk diet sehat.",
    ingredients: "Bubuk kopi, susu skim, ekstrak stevia, cinnamon.",
    isBestSeller: false
  },
  {
    id: 11,
    name: "Madu HNI Health",
    category: "madu_premium",
    price: 80000,
    image: "https://hni.net/public/front/img/produk/hni-health-3_18-11-24_.png",
    description: "Madu kesehatan harian untuk seluruh keluarga.",
    benefits: "Menjaga stamina, meningkatkan nafsu makan anak, dan mempercepat pemulihan.",
    ingredients: "Madu multiflora, ekstrak temulawak, meniran.",
    isBestSeller: true
  },
  {
    id: 12,
    name: "Hania Gluta Juicy Drink",
    category: "minuman_sehat",
    price: 185000,
    image: "https://hni.net/public/front/img/produk/gluta2_27-10-22_.png",
    description: "Minuman glutathione alami untuk kulit cerah.",
    benefits: "Mencerahkan kulit dari dalam, anti-penuaan, dan detoks racun.",
    ingredients: "Glutathione, vitamin C alami, kolagen ikan, ekstrak delima.",
    isBestSeller: true
  },
  {
    id: 13,
    name: "Mahkota Dara",
    category: "aneka_herbal",
    price: 200000,
    image: "https://hni.net/public/front/img/produk/mahkota%20dara-l_16-06-25_.png",
    description: "Herbal khusus kewanitaan.",
    benefits: "Mengatasi nyeri haid, keputihan, dan menjaga kesehatan rahim.",
    ingredients: "Ekstrak mahkota dewa, kencur, kunyit putih, daun sirih.",
    isBestSeller: true
  },
  {
    id: 14,
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
    id: 15,
    name: "Minyak Herba Sinergi Hot",
    category: "minyak_herba",
    price: 55000,
    image: "https://hni.net/public/front/img/produk/mhs-hot_16-12-24_.png",
    description: "Minyak gosok hangat untuk nyeri otot.",
    benefits: "Meredakan pegal, keseleo, masuk angin, dan nyeri haid.",
    ingredients: "Minyak kelapa, minyak kayu putih, jahe, serai, cabe jawa.",
    isBestSeller: true
  },
  {
    id: 16,
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
    id: 17,
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
    id: 18,
    name: "Hibis Pantyliner",
    category: "perawatan_pribadi",
    price: 225000,
    image: "https://hni.net/public/front/img/produk/HIBIS%20PANTY-5_26-03-19_.png",
    description: "Pantyliner herbal untuk kesehatan kewanitaan.",
    benefits: "Menjaga kelembaban, mengurangi bau tidak sedap, dan mencegah infeksi.",
    ingredients: "Ekstrak daun sirih, tea tree oil, serat kapas organik.",
    isBestSeller: true
  }
];

// ===== DOM ELEMENTS =====
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const mobileCartBtn = document.getElementById('mobileCartBtn');
const mobileCartCount = document.getElementById('mobileCartCount');
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
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// ===== KERANJANG (localStorage) =====
let cart = JSON.parse(localStorage.getItem('herbaprima-cart')) || [];

function saveCart() {
  localStorage.setItem('herbaprima-cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  // Update badge di header
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalCount;
  cartCount.style.display = totalCount > 0 ? 'block' : 'none';
  
  // Update mobile cart badge
  if (mobileCartCount) {
    mobileCartCount.textContent = totalCount || '';
    mobileCartCount.style.display = totalCount > 0 ? 'block' : 'none';
  }
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
  showNotification(`✅ ${product.name} ditambahkan ke keranjang!`);
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

function resetCart() {
  if (confirm('Reset keranjang? Semua item akan dihapus.')) {
    cart = [];
    saveCart();
  }
}

function showNotification(message) {
  // Sederhana: alert, bisa diganti toast nanti
  alert(message);
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

  // Link WhatsApp otomatis
  const waMessage = encodeURIComponent(
    `Halo Herbaprima, saya ingin memesan:\n - ${product.name}\n\nNama:\nAlamat:\nNo HP:`
  );
  whatsappOrderLink.href = `https://wa.me/6282241900467?text=${waMessage}`;

  // Tombol "Tambah ke Keranjang" di modal
  addToCartFromModal.onclick = () => {
    addToCart(productId);
  };

  // Tampilkan modal
  productModal.style.display = 'flex';
  setTimeout(() => productModal.classList.add('show'), 10);
}

function closeProductModal() {
  productModal.classList.remove('show');
  setTimeout(() => {
    productModal.style.display = 'none';
  }, 300);
}

// ===== RENDER PRODUK UNGGULAN (6 produk) =====
function renderFeaturedProducts() {
  const featuredContainer = document.querySelector('.products-grid.featured');
  if (!featuredContainer) return;

  // Ambil 6 produk: 4 best seller + 2 lainnya
  const bestSellers = products.filter(p => p.isBestSeller);
  const others = products.filter(p => !p.isBestSeller);
  const featured = [
    ...bestSellers.slice(0, 4),
    ...others.slice(0, 2)
  ].slice(0, 6);

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

// ===== RENDER PRODUK LENGKAP (untuk halaman /product/) =====
// Catatan: Jika ingin buat halaman produk terpisah, gunakan fungsi ini di sana
function renderAllProducts(containerId, category = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let filtered = category ? products.filter(p => p.category === category) : products;
  
  container.innerHTML = filtered.map(product => `
    <div class="product-card">
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

// ===== EVENT LISTENERS UTAMA =====
document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi
  updateCartUI();
  renderFeaturedProducts();

  // Keranjang icon (desktop)
  if (cartIcon) {
    cartIcon.addEventListener('click', () => {
      // Jika ingin sidebar keranjang penuh, bisa ditambahkan nanti
      showCartSummary();
    });
  }

  // Mobile cart button
  if (mobileCartBtn) {
    mobileCartBtn.addEventListener('click', showCartSummary);
  }

  // Modal
  if (closeModal) closeModal.addEventListener('click', closeProductModal);
  if (closeModalBottom) closeModalBottom.addEventListener('click', closeProductModal);

  // Hamburger menu
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Scroll to top
  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      scrollToTopBtn.classList.toggle('show', window.scrollY > 300);
    });
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => preloader.style.display = 'none', 500);
    }, 800);
  }

  // Animasi scroll
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Hero carousel
  setupHeroCarousel();
});

// ===== FUNGSI BANTUAN =====
function revealOnScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add('appear');
  });
}

function setupHeroCarousel() {
  let current = 0;
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  
  function show(n) {
    slides.forEach((s, i) => s.classList.toggle('active', i === n));
    dots.forEach((d, i) => d.classList.toggle('active', i === n));
    current = n;
  }
  
  dots.forEach(d => d.addEventListener('click', () => show(parseInt(d.dataset.slide))));
  setInterval(() => show((current + 1) % slides.length), 5000);
}

function showCartSummary() {
  if (cart.length === 0) {
    showNotification('🛒 Keranjang Anda kosong.\nSilakan pilih produk terlebih dahulu.');
    return;
  }

  let message = '🛒 *Keranjang Anda:*\n';
  cart.forEach((item, i) => {
    message += `${i+1}. ${item.name} ×${item.qty} = Rp ${ (item.price * item.qty).toLocaleString('id-ID') }\n`;
  });
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  message += `\nTotal: Rp ${total.toLocaleString('id-ID')}\n\n`;
  message += 'Klik *Checkout via WhatsApp* untuk lanjut pemesanan.';

  showNotification(message);
}

// ===== CHECKOUT VIA WHATSAPP =====
function checkoutViaWA() {
  if (cart.length === 0) {
    showNotification('⚠️ Keranjang Anda kosong.');
    return;
  }

  let message = 'Halo Herbaprima, saya ingin memesan:\n';
  cart.forEach(item => {
    message += ` - ${item.name} Qty: ${item.qty}\n`;
  });
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  message += `\nTotal: Rp ${total.toLocaleString('id-ID')}\n\n`;
  message += 'Nama:\nAlamat:\nNo HP:';

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/6282241900467?text=${encoded}`, '_blank');
}

// ===== EKSPOR FUNGSI KE GLOBAL SCOPE (untuk inline onclick) =====
window.openProductModal = openProductModal;
window.addToCart = addToCart;
window.checkoutViaWA = checkoutViaWA;

// ===== OPSIONAL: Tambahkan event listener untuk tombol checkout jika ada di HTML =====
document.addEventListener('click', (e) => {
  if (e.target.id === 'checkoutWA' || e.target.closest('#checkoutWA')) {
    e.preventDefault();
    checkoutViaWA();
  }

  // Untuk tombol +/- di keranjang (jika ada sidebar keranjang)
  if (e.target.classList.contains('qty-btn')) {
    const id = parseInt(e.target.dataset.id);
    const isPlus = e.target.classList.contains('plus');
    const item = cart.find(item => item.id === id);
    if (item) {
      const newQty = isPlus ? item.qty + 1 : item.qty - 1;
      updateQuantity(id, newQty);
    }
  }

  if (e.target.classList.contains('remove-item')) {
    const id = parseInt(e.target.dataset.id);
    removeFromCart(id);
  }
});
