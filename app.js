/* ═══════════════════════════════════════════
   TASTE OF NAIJA — app.js
   ═══════════════════════════════════════════ */

// ── CONFIG ──────────────────────────────────
const BANK = {
  accountName:   'TESSA AFRICAN FOODS LIMITED',
  bankName:      'REVOLUT BANK',
  accountNumber: '62857886',
  sortCode:      '23-01-20',
};

const WA_NUMBER = '447398061863'; // Replace with real number

// ── PRODUCT DATA ─────────────────────────────
const products = [
  { id: 'goat-head',                          name: 'Fresh Goat Head',              weight: '1kg',             price: 9.99,                      img:'images/head-goat.jpg',              badge: 'OUT OF STOCK 	&#10060; 	&#10060; 	&#10060;'     },
  { id: 'goat-3kg',                           name: 'Fresh Goat Meat',              weight: '1kg',             price: 15.99,                     img:'images/GgoatMeat.jpg',              badge: 'Only Meat'  },
  { id: 'goat-5kg',                           name: 'Fresh Goat Meat',              weight: '5kg',             price: 79.99,                     img:'images/goatmeat_5kg.jpg',           badge: 'With All Part Inclusive' },
  { id: 'Ponmo',                              name: 'Fresh & Cleaned Ponmo',        weight: '1kg',             price: 9.99,                      img:'images/freshPONMO.png',       badge: 'Soft'  },
  { id: 'Ponmo-Ijebu',                        name: 'Dried Ponmo',                  weight: '15 Piece',        price: 9.99,                      img:'images/driedPonmo.jpg',             badge: 'Best Value'  },
  { id: 'Turkey',                             name: 'Fresh Turkey',                 weight: '5kg',             price: 19.99,                     img:'images/naija-turkey.png',          badge: 'Fresh Turkey'    },
  { id: 'Pepper-soup',                        name: 'PepperSoup Spice',             weight: '200gram',         price: 4.99,                      img:'images/peppersoup.jpeg',            badge: 'Hot &#128293;'  },
  { id: 'Suya-soup',                          name: 'Suya Spice',                   weight: '200gram',         price: 4.99,                      img:'images/suyaspice.jpeg',             badge: 'Hot &#128293;'  },
  { id: 'P-FISH',                             name: 'PANLA',                        weight: '15 pieces',       price: 9.99,                      img:'images/Panla_tessa.jpeg',           badge: 'EJA KIKA'  },
  { id: 'C-FISH',                             name: 'CATFISH',                      weight: '500gram',         price:14.99,                      img:'images/catfish-tessa.jpeg',         badge: 'Smoked & Fresh'  },
  { id: 'T-FISH',                             name: 'TAILAND FISH',                 weight: '4 BIG PIECES',    price:9.99,                       img:'images/tailandfish-tessa.jpeg',     badge: 'Smoked & Fresh'  },
  { id: 'B-FISH',                             name: 'BONGA FISH',                   weight: '10 BIG PIECES',   price:9.99,                       img:'images/bongafish-tessa.png',        badge: 'Shawa Fish'  },
  { id: 'CARYFISH',                           name: 'PAINT(CRAYFISH)',              weight: '500gram',         price:14.99,                      img:'images/paintofcrayfish-tessa.png',  badge: 'Cleaned'  },
  { id: 'D-FISH',                             name: 'DRIED SMOKED PRAWN',           weight: '300gram',         price:14.99,                      img:'images/driedprawn-tessa.png',       badge: 'Smoked & Clean'  },
  { id: 'SHAKI',                              name: 'COW TRIPE',                    weight: '1KG',             price:4.99,                       img:'images/cowtripe-tessa.png',         badge: 'Shaki'  },
  { id: 'ABODI',                              name: 'COW BEEF REED',                weight: '1KG',             price:4.99,                       img:'images/abodi-tessa.png',            badge: 'Abodi'  },
  { id: 'GrounNut',                           name: 'NAIJA GROUNDNUT',              weight: '1 PACk',             price:4.99,                       img:'images/groundnutpack.png',            badge: 'Nuts'  },
  { id: 'MoiMoiTin',                          name: 'MoiMoi-Tin',                   weight: '12 PACK',             price:11.99,                       img:'images/moimoiTin.png',            badge: 'Good Value'  },
  { id: 'Thyme',                              name: 'DRIED-THYME',                  weight: '1 PIECES',             price:0.99,                       img:'images/thymefood.png',            badge: 'Spices'  },
  { id: 'creamcracker',                       name: 'CREAM-CRACKERS',               weight: '4 PIECES',             price:2.99,                       img:'images/yellow-creamcracker.png',            badge: 'Biscuit'  },
  { id: 'happy-biscuit',                      name: 'HAPPY-BISCUIT',                weight: '6 PIECES',             price:2.99,                       img:'images/happy-biscuit.png',            badge: 'Biscuit'  },
  { id: 'TILAPIA',                            name: 'TILAPIA-FISH',                 weight: '1 BAG(3-4)',             price:9.99,                       img:'images/fresh-tilapia.png',            badge: 'TILAPIA'  },
  { id: 'ROUNDABOUT',                         name: 'COW-ROUNDABOUT',               weight: '300-500gram',             price:19.99,                       img:'images/roundabout-tessa.png',            badge: 'SWEET'  },
  { id: 'NAIJA PALMOIL',                      name: 'NAIJA PALMOIL',                weight: '1ltr',             price:4.99,                       img:'images/NaijaPalmoil.png',            badge: 'PALMOIL'  },
  { id: 'NAIJA ZOBO',                         name: 'NAIJA ZOBO',                   weight: '1 PACK',             price:4.99,                       img:'images/zoboPACK.png',            badge: 'WITH SWEETNER'  },
  { id: 'MOIMOI POUCH',                       name: 'MOIMOI POUCH',                 weight: '12 PACK',             price:4.99,                       img:'images/MoiMoi-Pouch.png',            badge: 'MoiMoi-Pouch'  },
  { id: 'TAPIOCA',                            name: 'TAPIOCA',                      weight: '1KG',             price:4.99,                       img:'images/TessaFoods-Tapioca.png',            badge: 'Tapioca'  },
  { id: 'NAIJA-BROOM',                        name: 'NAIJA-BROOM',                  weight: 'Per Brunch',             price:4.99,                       img:'images/NaijaBroom.png',            badge: 'NAIJA BROOM'  },
  { id: 'SPICITY',                            name: 'SPICITY',                      weight: '10 ROLL',             price:2.99,                       img:'images/Spicity10.png',            badge: 'SPICES'  },
  { id: 'ABOLIKI BALM',                       name: 'ABOLIKI BALM',                 weight: '1 PIECE',             price:4.99,                       img:'images/Aboniki_Balm.png',            badge: 'Aboniki Balm'  },
  { id: 'PLAINTAIN',                          name: 'AFRICAN PLANTAIN',             weight: '3 PIECES',             price:1.99,                       img:'images/NaijaPlantain.png',            badge: 'Plantain'  },
  { id: 'PALINTAIN-CHIPS',                    name: 'OLU OLU PLAINTAIN CHIPS',      weight: '1 PACK',             price:0.99,                       img:'images/OluOlu_PlantainChip.png',            badge: 'Plantain'  },
  { id: 'JUMBO-SNAIL',                        name: 'JUMBO-SNAIL',                  weight: '1KG',             price:49.99,                       img:'images/jumbo-snail.png',            badge: 'JUMBO'  },
  { id: 'EGUSI(Blended & Unblended)',         name: 'EGUSI(Blended & Unblended)',   weight: '250g',             price:3.99,                       img:'images/egusi-tessa.png',            badge: 'JUMBO'  },
  { id: 'Ogbono(Blended & Unblended)',        name: 'Ogbono(Blended & Unblended)',  weight: '250g',             price:5.99,                       img:'images/ogbono-tessa.png',            badge: 'JUMBO'  },
  { id: 'Locust Beans',                       name: 'Iru(Locust Beans)',            weight: '300g',             price:4.99,                       img:'images/Locust-Beans.png',            badge: 'JUMBO'  },
  { id: 'Kilishi',                            name: 'Kilishi',                      weight: 'A PACK',             price:4.99,                       img:'images/kilishi.png',            badge: 'JUMBO'  },
  { id: 'Beans',                              name: 'Beans(Oloyin)',                weight: '1kg',             price:3.99,                       img:'images/beans-tessa.png',            badge: 'JUMBO'  },
  { id: 'Garri ijebu',                        name: 'Garri Ijebu',                  weight: ' 1kg',             price:1.99,                       img:'images/garriIjebu.png',            badge: 'JUMBO'  },
  { id: 'Indomie',                            name: 'Indomie',                      weight: 'A BOX',             price:9.99,                       img:'images/Indomie.png',            badge: 'JUMBO'  },
  { id: 'Periwinkle',                         name: 'Periwinkle',                   weight: '100g',             price:4.99,                       img:'images/periwinkle.png',            badge: 'JUMBO'  },
  { id: 'Kokoro',                             name: 'Kokoro',                       weight: 'A PACK',             price:4.99,                       img:'images/Kokoro.png',            badge: 'JUMBO'  },
];

// ── REVIEWS DATA ─────────────────────────────
const reviews = [
  { name: 'Adaeze O.',    loc: 'Manchester',    stars: 5, text: '"The goat meat is genuinely the closest thing to home I\'ve found in the UK. Beautifully fresh, arrived well-packed. My egusi soup has never tasted better!"' },
  { name: 'Kunle B.',     loc: 'London',        stars: 5, text: '"Ordered the 5kg family pack and it was worth every penny. My kids devoured it. The WhatsApp ordering was easy and delivery was next day!"' },
  { name: 'Temitope A.',  loc: 'Birmingham',    stars: 5, text: '"I was sceptical ordering meat online but the quality blew me away. Properly fresh, perfectly cut. The snails were massive. Will 100% order again."' },
  { name: 'Folake M.',    loc: 'Leeds',         stars: 5, text: '"Finally found a UK supplier that understands Nigerian cooking. Authentic taste, brilliant service, and my husband won\'t stop asking me to order more."' },
  { name: 'Chukwudi E.',  loc: 'Glasgow',       stars: 4, text: '"Delivery was a day later than expected but the meat quality was outstanding. Customer service on WhatsApp was super responsive. Will order again."' },
  { name: 'Blessing N.',  loc: 'Liverpool',     stars: 5, text: '"Absolutely love this service! The goat meat is so tender and fresh — you can genuinely taste the difference. Fast delivery too. 10/10 recommend."' },
  { name: 'Emeka J.',     loc: 'Nottingham',    stars: 5, text: '"Been searching for authentic Nigerian goat meat for years. Finally found it! Perfect for my pepper soup. The packaging was excellent and arrived cold."' },
  { name: 'Ngozi A.',     loc: 'Bristol',       stars: 5, text: '"This is the real deal. The snails are cleaned beautifully and the goat meat has that proper Nigerian flavour. My family was so happy. Will be a regular customer!"' },
  { name: 'Seun K.',      loc: 'Sheffield',     stars: 4, text: '"Really impressed with the quality. The meat was fresh and well-cut. Slight delay on delivery but they kept me updated on WhatsApp. Would order again."' },
  { name: 'Chioma O.',    loc: 'Leicester',     stars: 5, text: '"Ordered for a big family gathering and everyone was asking where I got the meat from. Absolutely delicious. The 5kg pack was great value for money."' },
  { name: 'Babatunde F.', loc: 'Southampton',   stars: 5, text: '"The quality is unmatched. I\'ve tried other suppliers but Taste of Naija is on another level. Fresh, authentic, and the WhatsApp support is quick and friendly."' },
  { name: 'Ifeoma C.',    loc: 'Cardiff',       stars: 5, text: '"I make banga soup every weekend and this goat meat has completely elevated my cooking. Thick, fresh cuts with real flavour. Cannot recommend enough!"' },
  { name: 'Rotimi L.',    loc: 'Coventry',      stars: 4, text: '"Good quality meat and very convenient ordering process. The bank transfer was straightforward and they confirmed everything on WhatsApp quickly. Reliable service."' },
];

// ── STATE ─────────────────────────────────────
let cart         = {};
let checkoutStep = 1;
let customerInfo = {};

// ═══════════════════════════════════════════
// MENU
// ═══════════════════════════════════════════
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn  = document.getElementById('menuBtn');
  menu.classList.toggle('open');
  btn.textContent = menu.classList.contains('open') ? '✕ Close' : '☰ Menu';
}

function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('menuBtn').textContent = '☰ Menu';
}

// ═══════════════════════════════════════════
// RENDER PRODUCTS
// ═══════════════════════════════════════════
function renderProducts(filteredList = null) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const list = filteredList !== null ? filteredList : products;
  const query = document.getElementById('productSearch')?.value.trim() || '';

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="product-not-found">
        <div class="nf-icon">🔍</div>
        <h3>Product Not Found</h3>
        <p>We couldn't find "<strong>${query}</strong>" in our store.<br>
        Try a different name or browse all products below.</p>
        <button onclick="clearSearch()">Show All Products</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(p => {
    const displayName = query
      ? p.name.replace(new RegExp(`(${query})`, 'gi'), '<span class="search-highlight">$1</span>')
      : p.name;

    const imgContent = p.img
      ? `<img src="${p.img}" alt="${p.name} ${p.weight}" style="width:100%;height:100%;object-fit:cover;display:block;">`
      : p.emoji || '🥩';

    return `
      <div class="product-card" id="card-${p.id}">
        <div class="product-img">
          <span class="product-badge">${p.badge}</span>
          ${imgContent}
        </div>
        <div class="product-body">
          <div class="product-name">${displayName}</div>
          <div class="product-weight">${p.weight} · Fresh, Cleaned</div>
          <div class="product-price">£${p.price.toFixed(2)}</div>
          <div class="product-footer">
            <div class="qty-control">
              <button class="qty-btn" onclick="changeQty('${p.id}', -1)">−</button>
              <input class="qty-num" id="qty-${p.id}" value="1" readonly>
              <button class="qty-btn" onclick="changeQty('${p.id}', 1)">+</button>
            </div>
            <button class="add-cart-btn" onclick="addToCart('${p.id}')">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function changeQty(id, delta) {
  const el = document.getElementById('qty-' + id);
  let v = parseInt(el.value) + delta;
  if (v < 1)  v = 1;
  if (v > 20) v = 20;
  el.value = v;
}

// ═══════════════════════════════════════════
// RENDER REVIEWS
// ═══════════════════════════════════════════
function renderReviews() {
  const grid = document.getElementById('testiGrid');
  if (!grid) return;

  grid.innerHTML = reviews.map(r => `
    <div class="testi-card">
      <div class="testi-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <div class="testi-text">${r.text}</div>
      <div class="testi-author">
        <div class="testi-avatar">${r.name.charAt(0)}</div>
        <div>
          <div class="testi-name">${r.name}</div>
          <div class="testi-loc">${r.loc}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════
// CART
// ═══════════════════════════════════════════
function addToCart(id) {
  const p   = products.find(x => x.id === id);
  const qty = parseInt(document.getElementById('qty-' + id).value);
  if (cart[id]) cart[id].qty += qty;
  else          cart[id] = { ...p, qty };
  updateCartUI();
  showToast(`✓ ${p.name} (${p.weight}) added to cart`);
}

function removeFromCart(id) {
  delete cart[id];
  updateCartUI();
}

function getSubtotal() {
  return Object.values(cart).reduce((s, x) => s + x.price * x.qty, 0);
}

function getTotal() {
  return getSubtotal() + 7.99 + 1.99;
}

function updateCartUI() {
  const items    = Object.values(cart);
  const count    = items.reduce((s, x) => s + x.qty, 0);
  const subtotal = getSubtotal();
  const total    = getTotal();

  document.getElementById('cartCount').textContent = count;

  const cartSubEl = document.getElementById('cartSubtotal');
  const cartTotEl = document.getElementById('cartTotal');
  if (cartSubEl) cartSubEl.textContent = '£' + subtotal.toFixed(2);
  if (cartTotEl) cartTotEl.textContent = '£' + total.toFixed(2);

  const itemsEl  = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  if (items.length === 0) {
    itemsEl.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">🛒</div>
        <p>Your cart is empty.<br>Browse our products and add items.</p>
      </div>`;
    if (footerEl) footerEl.style.display = 'none';
  } else {
    if (footerEl) footerEl.style.display = 'block';
    itemsEl.innerHTML = items.map(item => `
      <div class="cart-item">
        <div class="cart-item-icon">
          <img src="${item.img}" alt="${item.name}" style="width:46px;height:46px;object-fit:cover;border-radius:8px;">
        </div>
        <div style="flex:1;min-width:0">
          <div class="cart-item-name">${item.name} (${item.weight})</div>
          <div class="cart-item-price">£${(item.price * item.qty).toFixed(2)} × ${item.qty}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">✕ Remove</button>
      </div>
    `).join('');
  }
}

// ═══════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════
function searchProducts() {
  const query = document.getElementById('productSearch').value.trim().toLowerCase();
  const clearBtn = document.getElementById('searchClear');
  const infoEl   = document.getElementById('searchInfo');

  // Show/hide clear button
  if (query.length > 0) {
    clearBtn.classList.add('visible');
  } else {
    clearBtn.classList.remove('visible');
    infoEl.textContent = '';
    infoEl.className = 'search-results-info';
    renderProducts();
    return;
  }

  // Filter products by name, weight, or badge
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query)  ||
    p.weight.toLowerCase().includes(query) ||
    p.badge.toLowerCase().includes(query)
  );

  // Update info text
  if (filtered.length === 0) {
    infoEl.textContent = `No products found for "${query}"`;
    infoEl.className = 'search-results-info not-found';
  } else if (filtered.length === 1) {
    infoEl.textContent = `1 product found`;
    infoEl.className = 'search-results-info found';
  } else {
    infoEl.textContent = `${filtered.length} products found`;
    infoEl.className = 'search-results-info found';
  }

  renderProducts(filtered);
}

function clearSearch() {
  const input    = document.getElementById('productSearch');
  const clearBtn = document.getElementById('searchClear');
  const infoEl   = document.getElementById('searchInfo');

  input.value = '';
  clearBtn.classList.remove('visible');
  infoEl.textContent = '';
  infoEl.className = 'search-results-info';
  renderProducts();
  input.focus();
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  closeMenu();
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
}

function scrollToProduct(id) {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    const el = document.getElementById('card-' + id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 450);
}

// ═══════════════════════════════════════════
// CHECKOUT
// ═══════════════════════════════════════════
function startCheckout() {
  if (Object.keys(cart).length === 0) {
    showToast('Your cart is empty!');
    return;
  }
  checkoutStep = 1;
  closeCart();
  renderCheckoutStep();
  document.getElementById('checkoutModal').classList.add('open');
}

function renderCheckoutStep() {
  updateProgressDots();
  const content = document.getElementById('checkoutContent');

  // ── STEP 1: Order summary + customer details ──
  if (checkoutStep === 1) {
    const items = Object.values(cart);
    content.innerHTML = `
      <div class="modal-header">
        <div class="modal-step-badge">1</div>
        <div>
          <div class="modal-title">Order Summary</div>
          <div class="modal-subtitle">Review your items and enter your details</div>
        </div>
      </div>
      <div class="modal-body">
        ${items.map(i => `
          <div class="cart-fee-row" style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06)">
            <span>${i.emoji} ${i.name} (${i.weight}) × ${i.qty}</span>
            <span style="font-weight:700">£${(i.price * i.qty).toFixed(2)}</span>
          </div>
        `).join('')}
        <div class="cart-fee-row" style="margin-top:8px"><span>Subtotal</span><span>£${getSubtotal().toFixed(2)}</span></div>
        <div class="cart-fee-row locked"><span>Delivery Fee</span><span>£7.99</span></div>
        <div class="cart-fee-row locked"><span>Handling Fee</span><span>£1.99</span></div>
        <div class="cart-total"><span>Grand Total</span><span>£${getTotal().toFixed(2)}</span></div>

        <div style="margin-top:16px;display:flex;flex-direction:column;gap:12px">
          <div>
            <label class="form-label">Your Name *</label>
            <input class="form-input" id="customerName" placeholder="Full name" value="${customerInfo.name || ''}">
          </div>
          <div>
            <label class="form-label">Phone Number *</label>
            <input class="form-input" id="customerPhone" placeholder="+44 7..." value="${customerInfo.phone || ''}">
          </div>
          <div>
            <label class="form-label">Email Address *</label>
            <input class="form-input" id="customerEmail" type="email" placeholder="you@example.com" value="${customerInfo.email || ''}">
          </div>
          <div>
            <label class="form-label">Delivery Address *</label>
            <input class="form-input" id="customerAddress" placeholder="House number & street name" value="${customerInfo.address || ''}">
          </div>
          <div>
            <label class="form-label">Postcode *</label>
            <input class="form-input" id="customerPostcode" placeholder="e.g. E1 6AN" style="text-transform:uppercase" value="${customerInfo.postcode || ''}">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-back" onclick="closeCheckout()">Cancel</button>
        <button class="btn-next" onclick="nextStep()">Continue to Payment →</button>
      </div>
    `;
  }

  // ── STEP 2: Bank transfer details ──
  else if (checkoutStep === 2) {
    content.innerHTML = `
      <div class="modal-header">
        <div class="modal-step-badge">2</div>
        <div>
          <div class="modal-title">Bank Transfer Details</div>
          <div class="modal-subtitle">Send the exact amount to the account below</div>
        </div>
      </div>
      <div class="modal-body">
        <div class="bank-details-box">
          <div class="bank-row">
            <span class="bank-label">Account Name</span>
            <span class="bank-value">${BANK.accountName}</span>
          </div>
          <div class="bank-row">
            <span class="bank-label">Bank</span>
            <span class="bank-value">${BANK.bankName}</span>
          </div>
          <div class="bank-row">
            <span class="bank-label">Account Number</span>
            <span class="bank-value bank-highlight">${BANK.accountNumber}</span>
          </div>
          <div class="bank-row">
            <span class="bank-label">Sort Code</span>
            <span class="bank-value bank-highlight">${BANK.sortCode}</span>
          </div>
          <div class="bank-row">
            <span class="bank-label">Amount to Send</span>
            <span class="bank-value bank-highlight" style="color:var(--amber);font-size:1.15rem">£${getTotal().toFixed(2)}</span>
          </div>
        </div>
        <p style="font-size:0.82rem;color:var(--muted);margin-top:12px;line-height:1.5">
          ⚠️ Please transfer the exact amount shown. After payment, send us proof via WhatsApp on the next step.
        </p>
      </div>
      <div class="modal-footer">
        <button class="btn-back" onclick="prevStep()">← Back</button>
        <button class="btn-next" onclick="nextStep()">I've Made the Transfer →</button>
      </div>
    `;
  }

  // ── STEP 3: Instructions ──
  else if (checkoutStep === 3) {
    content.innerHTML = `
      <div class="modal-header">
        <div class="modal-step-badge">3</div>
        <div>
          <div class="modal-title">What Happens Next</div>
          <div class="modal-subtitle">Follow these steps to confirm your order</div>
        </div>
      </div>
      <div class="modal-body">
        <ul class="instructions-list">
          <li>
            <div class="instr-num">1</div>
            <div>Transfer <strong>£${getTotal().toFixed(2)}</strong> to the Taste of Naija account using the bank details shown.</div>
          </li>
          <li>
            <div class="instr-num">2</div>
            <div>Take a screenshot or save your bank payment confirmation.</div>
          </li>
          <li>
            <div class="instr-num">3</div>
            <div>Tap the WhatsApp button below. Your order details are pre-filled — just attach your payment screenshot and send.</div>
          </li>
        </ul>
        <div style="background:var(--green-pale);border-radius:10px;padding:14px;font-size:0.85rem;color:var(--green);font-weight:600;margin-top:14px;line-height:1.55">
          📦 Orders confirmed before 1pm are dispatched the same day.
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-back" onclick="prevStep()">← Back</button>
        <button class="btn-next" onclick="nextStep()">Send Payment Proof →</button>
      </div>
    `;
  }

  // ── STEP 4: WhatsApp ──
  else if (checkoutStep === 4) {
    const items    = Object.values(cart);
    const itemList = items.map(i => `- ${i.name} (${i.weight}) x${i.qty}`).join('%0A');
    const msg = [
      'Hello Taste of Naija,',
      '',
      'I have completed payment for my order.',
      '',
      `Order Total: *£${getTotal().toFixed(2)}*`,
      '',
      'Items:',
      itemList,
      '',
      `Customer Name: ${customerInfo.name || ''}`,
      `Phone: ${customerInfo.phone || ''}`,
      `Email: ${customerInfo.email || ''}`,
      `Delivery Address: ${customerInfo.address || ''}, ${customerInfo.postcode || ''}`,
      '',
      'Please find my payment confirmation attached.',
      '',
      'Thank you.',
    ].join('%0A');

    content.innerHTML = `
      <div class="modal-header">
        <div class="modal-step-badge" style="background:var(--amber)">✓</div>
        <div>
          <div class="modal-title">Send Payment Proof</div>
          <div class="modal-subtitle">One tap to complete your order on WhatsApp</div>
        </div>
      </div>
      <div class="modal-body">
        <div class="order-confirm">
          <div class="conf-icon">🎉</div>
          <h3>Almost Done!</h3>
          <p style="margin-bottom:16px">
            Tap the button below to open WhatsApp. Your message is pre-filled —
            just attach your payment screenshot and hit send.
          </p>
          <div style="background:var(--cream-dark);border-radius:10px;padding:16px;text-align:left;font-size:0.8rem;line-height:1.75;color:var(--mid);font-family:monospace;border:1px solid rgba(0,0,0,0.08)">
            Hello Taste of Naija,<br><br>
            I have completed payment for my order.<br>
            Order Total: <strong>£${getTotal().toFixed(2)}</strong><br>
            Name: ${customerInfo.name || '[your name]'}<br>
            Phone: ${customerInfo.phone || '[your phone]'}<br>
            Email: ${customerInfo.email || '[your email]'}<br>
            Address: ${customerInfo.address || '[your address]'}, ${customerInfo.postcode || '[postcode]'}<br><br>
            Please find my payment confirmation attached.
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-back" onclick="prevStep()">← Back</button>
        <a class="btn-wa"
           href="https://wa.me/${WA_NUMBER}?text=${msg}"
           target="_blank"
           onclick="orderComplete()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Send Proof on WhatsApp
        </a>
      </div>
    `;
  }
}

function nextStep() {
  if (checkoutStep === 1) {
    const name     = document.getElementById('customerName').value.trim();
    const phone    = document.getElementById('customerPhone').value.trim();
    const email    = document.getElementById('customerEmail').value.trim();
    const address  = document.getElementById('customerAddress').value.trim();
    const postcode = document.getElementById('customerPostcode').value.trim();

    if (!name || !phone || !email || !address || !postcode) {
      showToast('Please fill in all fields to continue');
      return;
    }
    customerInfo = { name, phone, email, address, postcode };
  }
  checkoutStep++;
  renderCheckoutStep();
}

function prevStep() {
  checkoutStep--;
  renderCheckoutStep();
}

function updateProgressDots() {
  for (let i = 1; i <= 4; i++) {
    const d = document.getElementById('dot' + i);
    if (!d) continue;
    d.className = 'step-dot';
    if (i < checkoutStep)      d.classList.add('done');
    else if (i === checkoutStep) d.classList.add('active');
  }
}

function orderComplete() {
  setTimeout(() => {
    cart = {};
    updateCartUI();
    closeCheckout();
    showToast('🎉 Order submitted! Check WhatsApp for confirmation.');
  }, 800);
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
}

// ═══════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderReviews();

  // Close checkout modal when clicking overlay
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) closeCheckout();
    });
  }

  // Search input — also trigger on Enter key
  const searchInput = document.getElementById('productSearch');
  if (searchInput) {
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') clearSearch();
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    const menu    = document.getElementById('mobileMenu');
    const menuBtn = document.getElementById('menuBtn');
    if (menu && menu.classList.contains('open')) {
      if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
      }
    }
  });
});
