/* ============================================================
   SHUKLA BAKERY STORE — app.js
   Local-state prototype (AWS API Gateway ready)
   ============================================================ */

'use strict';

// ─── APP STATE ────────────────────────────────────────────────
const state = {
  lang: 'en',
  darkMode: false,
  authMode: 'signin',
  currentUser: null,
  currentFilter: 'all',
  selectedRating: 0,
  products: [],
  reviews: [],
  gallery: [],
};

// ─── SEED DATA ────────────────────────────────────────────────
const SEED_PRODUCTS = [
  { id: 1, name: 'Black Forest Cake',    nameHi: 'ब्लैक फॉरेस्ट केक',   category: 'cakes',    price: 650,  emoji: '🎂', desc: 'Classic German chocolate & cherry delight',    descHi: 'क्लासिक जर्मन चॉकलेट और चेरी' },
  { id: 2, name: 'Butter Croissant',     nameHi: 'बटर क्रोइसां',         category: 'pastries', price: 80,   emoji: '🥐', desc: 'Flaky, golden, freshly baked every morning',   descHi: 'हर सुबह ताज़ा बेक किया हुआ' },
  { id: 3, name: 'Sourdough Loaf',       nameHi: 'सॉरडो लोफ',            category: 'breads',   price: 180,  emoji: '🍞', desc: 'Tangy artisan sourdough with crispy crust',    descHi: 'कुरकुरी परत के साथ आर्टिसन ब्रेड' },
  { id: 4, name: 'Choco Chip Cookies',   nameHi: 'चॉको चिप कुकीज़',      category: 'cookies',  price: 120,  emoji: '🍪', desc: 'Loaded with premium Belgian chocolate chips',  descHi: 'बेल्जियन चॉकलेट चिप्स से भरपूर' },
  { id: 5, name: 'Red Velvet Cake',      nameHi: 'रेड वेलवेट केक',       category: 'cakes',    price: 750,  emoji: '🍰', desc: 'Velvety layers with cream cheese frosting',    descHi: 'क्रीम चीज़ फ्रॉस्टिंग के साथ' },
  { id: 6, name: 'Almond Danish',        nameHi: 'बादाम डेनिश',          category: 'pastries', price: 95,   emoji: '🥧', desc: 'Buttery pastry filled with almond cream',      descHi: 'बादाम क्रीम से भरी पेस्ट्री' },
  { id: 7, name: 'Multigrain Bread',     nameHi: 'मल्टीग्रेन ब्रेड',     category: 'breads',   price: 140,  emoji: '🫓', desc: 'Wholesome blend of 7 grains & seeds',          descHi: '7 अनाज और बीजों का मिश्रण' },
  { id: 8, name: 'Macarons Box (6)',     nameHi: 'मैकरॉन बॉक्स (6)',     category: 'cookies',  price: 320,  emoji: '🫐', desc: 'Assorted French macarons in seasonal flavors', descHi: 'मौसमी स्वादों में फ्रेंच मैकरॉन' },
  { id: 9, name: 'Mango Mousse Cake',   nameHi: 'आम मूस केक',           category: 'cakes',    price: 820,  emoji: '🥭', desc: 'Seasonal Alphonso mango with light mousse',    descHi: 'अल्फांसो आम के साथ हल्का मूस' },
  { id:10, name: 'Cinnamon Roll',        nameHi: 'दालचीनी रोल',          category: 'pastries', price: 75,   emoji: '🌀', desc: 'Warm, gooey rolls with cream cheese glaze',    descHi: 'क्रीम चीज़ ग्लेज़ के साथ गर्म रोल' },
  { id:11, name: 'Focaccia Bread',       nameHi: 'फोकाशिया ब्रेड',       category: 'breads',   price: 160,  emoji: '🫓', desc: 'Herb-infused Italian flatbread with olive oil', descHi: 'जड़ी-बूटी और जैतून तेल के साथ' },
  { id:12, name: 'Shortbread Fingers',   nameHi: 'शॉर्टब्रेड फिंगर्स',   category: 'cookies',  price: 90,   emoji: '🍘', desc: 'Melt-in-mouth Scottish butter shortbread',     descHi: 'मुंह में घुलने वाला बटर शॉर्टब्रेड' },
];

const SEED_GALLERY = [
  { id: 1,  emoji: '🎂', caption: 'Custom Wedding Cake',    captionHi: 'कस्टम वेडिंग केक',     size: 'hero'   },
  { id: 2,  emoji: '🥐', caption: 'Morning Croissants',     captionHi: 'सुबह के क्रोइसां',      size: 'normal' },
  { id: 3,  emoji: '🍰', caption: 'Red Velvet Slice',       captionHi: 'रेड वेलवेट स्लाइस',     size: 'normal' },
  { id: 4,  emoji: '🍩', caption: 'Glazed Donuts',          captionHi: 'ग्लेज़्ड डोनट्स',       size: 'wide'   },
  { id: 5,  emoji: '🧁', caption: 'Cupcake Collection',     captionHi: 'कपकेक कलेक्शन',         size: 'normal' },
  { id: 6,  emoji: '🫐', caption: 'Macaron Tower',          captionHi: 'मैकरॉन टॉवर',           size: 'normal' },
];

const SEED_REVIEWS = [
  { id: 1, name: 'Priya Sharma',   rating: 5, content: 'The Black Forest cake was absolutely divine! Perfect for my daughter\'s birthday. Will definitely order again.', date: '2024-05-20' },
  { id: 2, name: 'Rahul Gupta',    rating: 5, content: 'Best sourdough in Kanpur, hands down. The crust is perfect and the inside is so soft. Highly recommend!', date: '2024-05-18' },
  { id: 3, name: 'Anita Verma',    rating: 4, content: 'Lovely pastries and very fresh. The croissants are buttery and flaky. Great morning treat with chai!', date: '2024-05-15' },
];

// ─── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  state.products = [...SEED_PRODUCTS];
  state.reviews  = [...SEED_REVIEWS];
  state.gallery  = [...SEED_GALLERY];

  renderProducts();
  renderGallery();
  renderReviews();
  updateRatingSummary();
  applyLanguage();

  // Auth modal backdrop click
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
  }

  // Splash screen — hide after 2.8s regardless of logo load
  const splash = document.getElementById('splashScreen');
  const hideSplash = () => {
    splash.classList.add('splash-hide');
    setTimeout(() => {
      splash.style.display = 'none';
      document.body.style.overflow = '';
    }, 650);
  };
  setTimeout(hideSplash, 2800);

  // Fallback: if splash somehow sticks, force hide at 4s
  setTimeout(() => {
    if (splash && splash.style.display !== 'none') {
      splash.style.display = 'none';
    }
  }, 4000);
});

// ─── DARK MODE ────────────────────────────────────────────────
function toggleDarkMode() {
  state.darkMode = !state.darkMode;
  document.body.classList.toggle('dark-mode', state.darkMode);
  document.body.classList.toggle('light-mode', !state.darkMode);
  document.getElementById('darkBtn').textContent = state.darkMode ? '☀️' : '🌙';
}

// ─── LANGUAGE ─────────────────────────────────────────────────
function toggleLanguage() {
  state.lang = state.lang === 'en' ? 'hi' : 'en';
  document.getElementById('langBtn').textContent = state.lang === 'en' ? 'हिंदी' : 'English';
  applyLanguage();
  renderProducts();
  renderGallery();
  renderReviews();
  updateRatingSummary();
}

function applyLanguage() {
  const hi = state.lang === 'hi';
  document.documentElement.lang = hi ? 'hi' : 'en';

  // Elements with data-en / data-hi
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = hi ? (el.dataset.hi || el.dataset.en) : el.dataset.en;
  });

  // Brand
  document.getElementById('brandName').textContent    = hi ? 'शुक्ला बेकरी' : 'Shukla Bakery';
  document.getElementById('brandTagline').textContent = hi ? 'प्यार से बना' : 'Baked with Love';

  // Hero
  document.getElementById('heroTitle').innerHTML = hi
    ? 'रोज़ ताज़ा बेक,<br/>हर एक दिन'
    : 'Freshly Baked,<br/>Every Single Day';
  document.getElementById('heroSubtitle').textContent = hi
    ? 'आर्टिसन ब्रेड, उत्सव केक और हस्तनिर्मित पेस्ट्री — बेहतरीन सामग्री और पीढ़ियों के प्यार से बनाई गई।'
    : 'Artisan breads, celebration cakes, and handcrafted pastries — made with the finest ingredients and generations of love.';

  // Splash tagline
  const splashTag = document.getElementById('splashTagline');
  if (splashTag) splashTag.textContent = hi ? 'ताज़ा बेक, शुद्ध खुशी' : 'Fresh Baked, Pure Happiness';

  // Modal
  document.getElementById('labelEmail').textContent    = hi ? 'ईमेल पता' : 'Email Address';
  document.getElementById('labelPassword').textContent = hi ? 'पासवर्ड' : 'Password';

  // Review placeholder
  const rn = document.getElementById('reviewName');
  const rc = document.getElementById('reviewContent');
  if (rn) rn.placeholder = hi ? 'आपका नाम' : 'Your Name';
  if (rc) rc.placeholder = hi ? 'अपना अनुभव बताएं...' : 'Tell us about your experience...';
}

// ─── MOBILE MENU ──────────────────────────────────────────────
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('hidden');
}

// ─── AUTH MODAL ───────────────────────────────────────────────
function openModal() {
  document.getElementById('authModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('authModal').classList.add('hidden');
  document.body.style.overflow = '';
  document.getElementById('authError').classList.add('hidden');
}

function toggleAuthMode() {
  state.authMode = state.authMode === 'signin' ? 'register' : 'signin';
  const isReg = state.authMode === 'register';
  const hi = state.lang === 'hi';
  document.getElementById('modalTitle').textContent    = isReg ? (hi ? 'रजिस्टर करें' : 'Register') : (hi ? 'साइन इन' : 'Sign In');
  document.getElementById('modalSubtitle').textContent = isReg ? (hi ? 'शुक्ला बेकरी में आपका स्वागत है' : 'Join Shukla Bakery') : (hi ? 'वापस आने पर स्वागत है' : 'Welcome back to Shukla Bakery');
  document.getElementById('authSubmitBtn').textContent = isReg ? (hi ? 'रजिस्टर करें' : 'Register') : (hi ? 'साइन इन' : 'Sign In');
  document.getElementById('authToggleText').textContent = isReg ? (hi ? 'पहले से खाता है?' : 'Already have an account?') : (hi ? 'खाता नहीं है?' : "Don't have an account?");
  document.getElementById('authToggleBtn').textContent  = isReg ? (hi ? 'साइन इन' : 'Sign In') : (hi ? 'रजिस्टर करें' : 'Register');
  document.getElementById('roleSelectWrap').classList.toggle('hidden', !isReg);
}

function handleAuth() {
  const email    = document.getElementById('authEmail').value.trim();
  const password = document.getElementById('authPassword').value;
  const errEl    = document.getElementById('authError');
  const hi       = state.lang === 'hi';

  if (!email || !password) {
    errEl.textContent = hi ? 'कृपया सभी फ़ील्ड भरें।' : 'Please fill in all fields.';
    errEl.classList.remove('hidden');
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    errEl.textContent = hi ? 'कृपया एक वैध ईमेल दर्ज करें।' : 'Please enter a valid email.';
    errEl.classList.remove('hidden');
    return;
  }
  if (password.length < 6) {
    errEl.textContent = hi ? 'पासवर्ड कम से कम 6 अक्षर का होना चाहिए।' : 'Password must be at least 6 characters.';
    errEl.classList.remove('hidden');
    return;
  }

  // Simulate Cognito auth — determine role
  let role = 'client';
  if (state.authMode === 'register') {
    role = document.getElementById('authRole').value;
  } else {
    // Demo: emails containing "admin" get admin role
    role = email.toLowerCase().includes('admin') ? 'admin' : 'client';
  }

  state.currentUser = { email, role };
  closeModal();
  updateAuthUI();
  showToast(hi ? `स्वागत है, ${email.split('@')[0]}! 🎉` : `Welcome, ${email.split('@')[0]}! 🎉`);
  renderProducts(); // re-render to show/hide admin controls
}

function updateAuthUI() {
  const authArea = document.getElementById('authArea');
  const hi = state.lang === 'hi';
  if (state.currentUser) {
    const isAdmin = state.currentUser.role === 'admin';
    authArea.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="text-xs font-medium opacity-70">${isAdmin ? '🔑 Admin' : '👤 ' + state.currentUser.email.split('@')[0]}</span>
        <button onclick="signOut()" class="btn-secondary px-3 py-1.5 rounded-lg text-xs font-semibold transition hover:scale-105">
          ${hi ? 'साइन आउट' : 'Sign Out'}
        </button>
      </div>`;
    if (isAdmin) document.getElementById('adminAddForm').classList.remove('hidden');
  } else {
    authArea.innerHTML = `
      <button onclick="openModal()" id="signInBtn" class="btn-primary px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105">
        <span data-en="Sign In" data-hi="साइन इन">${hi ? 'साइन इन' : 'Sign In'}</span>
      </button>`;
    document.getElementById('adminAddForm').classList.add('hidden');
  }
}

function signOut() {
  state.currentUser = null;
  updateAuthUI();
  renderProducts();
  const hi = state.lang === 'hi';
  showToast(hi ? 'आप साइन आउट हो गए।' : 'You have been signed out.');
}

// ─── PRODUCTS ─────────────────────────────────────────────────
function renderProducts() {
  const hi      = state.lang === 'hi';
  const grid    = document.getElementById('productGrid');
  const empty   = document.getElementById('emptyState');
  const isAdmin = state.currentUser?.role === 'admin';

  const filtered = state.currentFilter === 'all'
    ? state.products
    : state.products.filter(p => p.category === state.currentFilter);

  grid.innerHTML = '';

  if (filtered.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.id = `product-${product.id}`;
    card.innerHTML = `
      <div class="p-6 text-center text-6xl bg-gradient-to-br from-transparent to-[var(--accent-light)] min-h-[120px] flex items-center justify-center">
        ${product.emoji}
      </div>
      <div class="p-4">
        <div class="flex items-start justify-between gap-2 mb-1">
          <h3 class="font-playfair font-bold text-base leading-tight">${hi ? product.nameHi : product.name}</h3>
          <span class="badge badge-${product.category} flex-shrink-0">${getCategoryLabel(product.category, hi)}</span>
        </div>
        <p class="text-xs opacity-60 mb-3 leading-relaxed">${hi ? product.descHi : product.desc}</p>
        <div class="flex items-center justify-between">
          <span class="font-bold text-lg accent-text">₹${product.price}</span>
          <button onclick="addToCart(${product.id})" class="btn-primary px-4 py-1.5 rounded-lg text-xs font-semibold text-white transition hover:scale-105">
            ${hi ? 'कार्ट में डालें' : 'Add to Cart'}
          </button>
        </div>
        ${isAdmin ? `
        <div class="mt-3 pt-3 border-t border-[var(--border)] flex gap-2">
          <button onclick="editProduct(${product.id})" class="flex-1 px-3 py-1.5 rounded-lg text-xs font-semibold border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition">
            ✏️ ${hi ? 'संपादित करें' : 'Edit'}
          </button>
          <button onclick="deleteProduct(${product.id})" class="flex-1 px-3 py-1.5 rounded-lg text-xs font-semibold border border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition">
            🗑️ ${hi ? 'हटाएं' : 'Delete'}
          </button>
        </div>` : ''}
      </div>`;
    grid.appendChild(card);
  });
}

function getCategoryLabel(cat, hi) {
  const map = { cakes: ['Cake','केक'], pastries: ['Pastry','पेस्ट्री'], breads: ['Bread','ब्रेड'], cookies: ['Cookie','कुकी'] };
  return hi ? (map[cat]?.[1] || cat) : (map[cat]?.[0] || cat);
}

function filterProducts(category) {
  state.currentFilter = category;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const en = btn.dataset.en?.toLowerCase();
    const match = category === 'all' ? en === 'all' : en === category;
    btn.classList.toggle('active', match);
  });
  renderProducts();
}

function addToCart(id) {
  const hi = state.lang === 'hi';
  const p  = state.products.find(x => x.id === id);
  if (p) showToast(hi ? `${p.nameHi} कार्ट में जोड़ा! 🛒` : `${p.name} added to cart! 🛒`);
}

function addProduct() {
  const hi   = state.lang === 'hi';
  const name = document.getElementById('newName').value.trim();
  const price= parseFloat(document.getElementById('newPrice').value);
  const cat  = document.getElementById('newCategory').value;
  const emoji= document.getElementById('newEmoji').value.trim() || '🍰';
  const desc = document.getElementById('newDesc').value.trim();

  if (!name || !price || !desc) {
    showToast(hi ? 'कृपया सभी फ़ील्ड भरें।' : 'Please fill all fields.', true);
    return;
  }

  const newProduct = {
    id: Date.now(),
    name, nameHi: name,
    category: cat,
    price,
    emoji,
    desc, descHi: desc,
  };

  state.products.unshift(newProduct);
  ['newName','newPrice','newEmoji','newDesc'].forEach(id => document.getElementById(id).value = '');
  renderProducts();
  showToast(hi ? `${name} जोड़ा गया! ✅` : `${name} added! ✅`);
}

function deleteProduct(id) {
  const hi = state.lang === 'hi';
  const p  = state.products.find(x => x.id === id);
  if (!p) return;
  const card = document.getElementById(`product-${id}`);
  if (card) {
    card.style.transition = 'all 0.3s';
    card.style.opacity    = '0';
    card.style.transform  = 'scale(0.9)';
    setTimeout(() => {
      state.products = state.products.filter(x => x.id !== id);
      renderProducts();
    }, 300);
  }
  showToast(hi ? `${p.nameHi} हटाया गया।` : `${p.name} removed.`);
}

function editProduct(id) {
  const hi = state.lang === 'hi';
  const p  = state.products.find(x => x.id === id);
  if (!p) return;
  const newPrice = prompt(hi ? `${p.nameHi} की नई कीमत दर्ज करें:` : `Enter new price for ${p.name}:`, p.price);
  if (newPrice !== null && !isNaN(parseFloat(newPrice))) {
    p.price = parseFloat(newPrice);
    renderProducts();
    showToast(hi ? 'कीमत अपडेट की गई! ✅' : 'Price updated! ✅');
  }
}

// ─── GALLERY ──────────────────────────────────────────────────
function renderGallery() {
  const hi   = state.lang === 'hi';
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';

  state.gallery.forEach((item) => {
    const div = document.createElement('div');
    div.className = `gallery-item gallery-${item.size}`;
    div.title = hi ? item.captionHi : item.caption;
    div.innerHTML = `
      <div class="gallery-img-wrap">
        <span class="gallery-emoji">${item.emoji}</span>
        <span class="gallery-label">${hi ? item.captionHi : item.caption}</span>
      </div>
      <div class="gallery-overlay">
        <span>${hi ? item.captionHi : item.caption}</span>
      </div>`;
    div.onclick = () => openLightbox(item, hi);
    grid.appendChild(div);
  });
}

function openLightbox(item, hi) {
  document.getElementById('lightboxContent').textContent = item.emoji;
  document.getElementById('lightboxCaption').textContent = hi ? item.captionHi : item.caption;
  document.getElementById('lightbox').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
  document.body.style.overflow = '';
}

// ─── REVIEWS ──────────────────────────────────────────────────
function setRating(val) {
  state.selectedRating = val;
  document.querySelectorAll('.star').forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.val) <= val);
  });
}

function submitReview() {
  const hi      = state.lang === 'hi';
  const name    = document.getElementById('reviewName').value.trim();
  const content = document.getElementById('reviewContent').value.trim();
  const rating  = state.selectedRating;
  const successEl = document.getElementById('reviewSuccess');

  if (!name || !content || rating === 0) {
    showToast(hi ? 'कृपया नाम, रेटिंग और समीक्षा भरें।' : 'Please fill in name, rating, and review.', true);
    return;
  }

  const review = {
    id: Date.now(),
    name,
    rating,
    content,
    date: new Date().toISOString().split('T')[0],
  };

  state.reviews.unshift(review);
  renderReviews();
  updateRatingSummary();

  // Reset form
  document.getElementById('reviewName').value    = '';
  document.getElementById('reviewContent').value = '';
  state.selectedRating = 0;
  setRating(0);

  successEl.textContent = hi ? 'समीक्षा सफलतापूर्वक सबमिट की गई! धन्यवाद 🙏' : 'Review submitted successfully! Thank you 🙏';
  successEl.classList.remove('hidden');
  setTimeout(() => successEl.classList.add('hidden'), 4000);
  showToast(hi ? 'समीक्षा जोड़ी गई! 🌟' : 'Review added! 🌟');
}

function renderReviews() {
  const hi   = state.lang === 'hi';
  const feed = document.getElementById('reviewFeed');
  feed.innerHTML = '';

  state.reviews.forEach(r => {
    const card = document.createElement('div');
    card.className = 'review-card';
    const stars = Array.from({length: 5}, (_, i) =>
      `<span style="color:${i < r.rating ? 'var(--star-active)' : 'var(--star-inactive)'};font-size:1rem">★</span>`
    ).join('');
    const dateStr = new Date(r.date).toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { year:'numeric', month:'short', day:'numeric' });
    card.innerHTML = `
      <div class="flex items-start justify-between mb-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
            style="background:linear-gradient(135deg,var(--accent),var(--accent-hover))">
            ${r.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p class="font-semibold text-sm">${r.name}</p>
            <p class="text-xs opacity-50">${dateStr}</p>
          </div>
        </div>
        <div class="flex">${stars}</div>
      </div>
      <p class="text-sm opacity-70 leading-relaxed">"${r.content}"</p>`;
    feed.appendChild(card);
  });
}

function updateRatingSummary() {
  const hi = state.lang === 'hi';
  if (state.reviews.length === 0) return;

  const avg = state.reviews.reduce((s, r) => s + r.rating, 0) / state.reviews.length;
  document.getElementById('avgRatingDisplay').textContent = avg.toFixed(1);

  const stars = Array.from({length: 5}, (_, i) =>
    `<span style="color:${i < Math.round(avg) ? '#fbbf24' : 'var(--star-inactive)'};font-size:1.25rem">★</span>`
  ).join('');
  document.getElementById('avgStarsDisplay').innerHTML = stars;

  const total = state.reviews.length;
  document.getElementById('totalReviewsDisplay').textContent =
    hi ? `${total} समीक्षाएं` : `${total} review${total !== 1 ? 's' : ''}`;

  // Rating bars
  const bars = document.getElementById('ratingBars');
  bars.innerHTML = '';
  for (let s = 5; s >= 1; s--) {
    const count = state.reviews.filter(r => r.rating === s).length;
    const pct   = total > 0 ? (count / total) * 100 : 0;
    bars.innerHTML += `
      <div class="flex items-center gap-2 text-xs">
        <span class="opacity-60 w-4 text-right">${s}</span>
        <span style="color:#fbbf24;font-size:0.75rem">★</span>
        <div class="flex-1 h-2 rounded-full" style="background:var(--border)">
          <div class="h-2 rounded-full transition-all duration-500" style="width:${pct}%;background:var(--accent)"></div>
        </div>
        <span class="opacity-50 w-4">${count}</span>
      </div>`;
  }
}

// ─── TOAST ────────────────────────────────────────────────────
function showToast(msg, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.background = isError
    ? 'linear-gradient(135deg,#ef4444,#dc2626)'
    : 'linear-gradient(135deg,var(--accent),var(--accent-hover))';
  toast.classList.remove('hidden');
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('show');
  }, 3000);
}
