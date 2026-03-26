/* ─── PRODUCT DATA ─── */
const products = [
  { id: 1, name: "Arai RX-7V Full Face",       category: "Helmets",     type: "Sport",   price: 89500, oldPrice: null,  rating: 4.9, reviews: 234, emoji: "🪖", badge: "bestseller", bg: "linear-gradient(135deg,#1a0a00,#3d1500)" },
  { id: 2, name: "Dainese Torque D1 Out Boots", category: "Boots",       type: "Sport",   price: 24800, oldPrice: 31000, rating: 4.7, reviews: 89,  emoji: "👢", badge: "sale",       bg: "linear-gradient(135deg,#0a0a0a,#1a1a1a)" },
  { id: 3, name: "Kriega R30 Backpack",         category: "Accessories", type: "Touring", price: 18600, oldPrice: null,  rating: 4.8, reviews: 156, emoji: "🎒", badge: "new",        bg: "linear-gradient(135deg,#00100a,#001a10)" },
  { id: 4, name: "Oxford HotGrips Premium",     category: "Electronics", type: "Commute", price: 6200,  oldPrice: 7800,  rating: 4.6, reviews: 312, emoji: "🔌", badge: "sale",       bg: "linear-gradient(135deg,#100a1a,#1a0a2a)" },
  { id: 5, name: "Alpinestars GP Plus R V4",    category: "Jackets",     type: "Sport",   price: 54000, oldPrice: null,  rating: 4.9, reviews: 78,  emoji: "🧥", badge: "bestseller", bg: "linear-gradient(135deg,#1a0000,#3d0000)" },
  { id: 6, name: "Givi V47NNT Top Case",        category: "Luggage",     type: "Touring", price: 15400, oldPrice: null,  rating: 4.5, reviews: 203, emoji: "🧳", badge: "new",        bg: "linear-gradient(135deg,#0a0f1a,#0a1a2a)" },
  { id: 7, name: "Sena 30K Bluetooth Comm",     category: "Electronics", type: "All",     price: 32000, oldPrice: 38000, rating: 4.7, reviews: 445, emoji: "🎧", badge: "sale",       bg: "linear-gradient(135deg,#001a0a,#002a15)" },
  { id: 8, name: "REV'IT Nitro 2 Gloves",       category: "Gloves",      type: "Street",  price: 9800,  oldPrice: null,  rating: 4.8, reviews: 167, emoji: "🧤", badge: "bestseller", bg: "linear-gradient(135deg,#1a1000,#2a1a00)" },
];

/* ─── GEAR SETUPS ─── */
const setups = {
  street: [
    { type: 'Helmet',    name: 'LS2 FF800 Storm II',      emoji: '🪖', price: 18500 },
    { type: 'Jacket',    name: 'Rynox Air GT Jacket',     emoji: '🧥', price: 14500 },
    { type: 'Gloves',    name: 'Cramster Sprint Gloves',  emoji: '🧤', price: 3200  },
    { type: 'Boots',     name: 'TCX Street 3 Boots',      emoji: '👢', price: 9800  },
  ],
  sport: [
    { type: 'Helmet',    name: 'Arai RX-7V Evo',          emoji: '🪖', price: 89500 },
    { type: 'Jacket',    name: 'Alpinestars GP Plus R V4', emoji: '🧥', price: 54000 },
    { type: 'Gloves',    name: 'Alpinestars SP-8 V3',      emoji: '🧤', price: 12800 },
    { type: 'Boots',     name: 'Dainese Torque D1 Out',    emoji: '👢', price: 24800 },
  ],
  adventure: [
    { type: 'Helmet',    name: 'Shoei Hornet ADV',         emoji: '🪖', price: 52000 },
    { type: 'Jacket',    name: "REV'IT Cayenne Pro",        emoji: '🧥', price: 38000 },
    { type: 'Gloves',    name: 'Klim Badlands Pro',         emoji: '🧤', price: 16500 },
    { type: 'Luggage',   name: 'SW-Motech TRAX ADV',        emoji: '🧳', price: 48000 },
  ],
  commute: [
    { type: 'Helmet',    name: 'Vega Crux Helmet',          emoji: '🪖', price: 6500  },
    { type: 'Jacket',    name: 'Rynox Scout Jacket',        emoji: '🧥', price: 9800  },
    { type: 'Gloves',    name: 'Biking Brotherhood BBG',     emoji: '🧤', price: 2400  },
    { type: 'Accessory', name: 'Quad Lock Phone Mount',      emoji: '📱', price: 4200  },
  ],
};

/* ─── RENDER PRODUCTS ─── */
function renderProducts(filter = 'All') {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'All' ? products : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-img" style="background: ${p.bg}">
        <div class="product-img-bg"></div>
        <span style="position:relative;z-index:1;font-size:3.5rem;">${p.emoji}</span>
        ${p.badge ? `<div class="badge-tag badge-${p.badge}">${
          p.badge === 'bestseller' ? '🔥 Best Seller' :
          p.badge === 'new'        ? '✨ New'          : '🏷️ Sale'
        }</div>` : ''}
        <button class="wishlist-btn">❤️</button>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category} · ${p.type}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <div class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}</div>
          <div class="rating-num">${p.rating} (${p.reviews})</div>
        </div>
        <div class="product-bottom">
          <div>
            <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
            ${p.oldPrice ? `<span class="product-price-old">₹${p.oldPrice.toLocaleString('en-IN')}</span>` : ''}
          </div>
          <button class="add-cart-btn">+ Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ─── FILTER BAR ─── */
function setFilter(btn, cat) {
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(cat);
}

/* ─── RIDING STYLE CARDS ─── */
function filterByStyle(style) {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

/* ─── BUILD FORM PILLS ─── */
function selectPill(btn, group) {
  btn.closest('.pill-options').querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ─── BUDGET SLIDER ─── */
function updateBudget(val) {
  const num = parseInt(val);
  const display = num >= 100000
    ? `₹${(num / 100000).toFixed(1)}L`
    : `₹${(num / 1000).toFixed(0)}K`;
  document.getElementById('budgetVal').textContent = display;
}

/* ─── GENERATE GEAR SETUP ─── */
function generateSetup() {
  const stylePill = document.querySelector('#styleOptions .pill.active');
  const styleText = stylePill ? stylePill.textContent.toLowerCase() : '';

  let key = 'street';
  if (styleText.includes('adventure')) key = 'adventure';
  else if (styleText.includes('sport'))    key = 'sport';
  else if (styleText.includes('commute'))  key = 'commute';

  const setup = setups[key];
  const total = setup.reduce((sum, g) => sum + g.price, 0);

  document.getElementById('modalSubtitle').textContent =
    `Curated for your ${key} riding style. ${setup.length} essential items selected.`;

  document.getElementById('gearSetup').innerHTML = setup.map(g => `
    <div class="gear-item">
      <div class="gear-emoji">${g.emoji}</div>
      <div class="gear-details">
        <div class="gear-type">${g.type}</div>
        <div class="gear-name">${g.name}</div>
        <div class="gear-price">₹${g.price.toLocaleString('en-IN')}</div>
      </div>
    </div>
  `).join('');

  document.getElementById('totalPrice').textContent = `₹${total.toLocaleString('en-IN')}`;
  document.getElementById('buildModal').classList.add('open');
}

/* ─── MODAL ─── */
function closeModal() {
  document.getElementById('buildModal').classList.remove('open');
}

document.getElementById('buildModal').addEventListener('click', e => {
  if (e.target === document.getElementById('buildModal')) closeModal();
});

/* ─── SCROLL HELPERS ─── */
function scrollToProducts() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function scrollToBuild() {
  document.getElementById('build').scrollIntoView({ behavior: 'smooth' });
}

/* ─── WISHLIST TOGGLE ─── */
document.addEventListener('click', e => {
  if (e.target.classList.contains('wishlist-btn')) {
    e.target.textContent = e.target.textContent === '❤️' ? '🤍' : '❤️';
  }
});

/* ─── INIT ─── */
renderProducts();
