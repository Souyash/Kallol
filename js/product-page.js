// ========================================================
// Kallol Luxury Jewels - Dedicated Product Quick View Page
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // Ensure inventory is available from app.js
  const inventory = (window.kallolInventory || inventoryData);

  // Extract Product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'kal-001';

  // Retrieve matching product
  let product = inventory.find(p => p.id === productId);
  if (!product) {
    product = inventory[0];
  }

  // Selected State
  let selectedMetal = product.specs.metalType;
  let selectedSize = 'US 6';
  let selectedQty = 1;

  // DOM Elements
  const crumbCategory = document.getElementById('crumb-category');
  const crumbName = document.getElementById('crumb-name');
  const mainViewport = document.getElementById('product-main-view');
  const thumbsStrip = document.getElementById('product-thumbs-strip');

  const brandEl = document.getElementById('detail-brand');
  const skuEl = document.getElementById('detail-sku');
  const titleEl = document.getElementById('detail-title');
  const ratingTextEl = document.getElementById('detail-rating-text');
  const stockPill = document.getElementById('detail-stock-pill');
  const priceEl = document.getElementById('detail-price');
  const descEl = document.getElementById('detail-desc');

  const metalSwatches = document.getElementById('metal-swatches');
  const selectedMetalName = document.getElementById('selected-metal-name');
  const sizeOptionsGrid = document.getElementById('size-options-grid');
  const qtyMinusBtn = document.getElementById('detail-qty-minus');
  const qtyPlusBtn = document.getElementById('detail-qty-plus');
  const qtyValEl = document.getElementById('detail-qty-val');

  const addBagBtn = document.getElementById('detail-add-bag-btn');
  const buyNowBtn = document.getElementById('detail-buy-now-btn');
  const wishlistBtn = document.getElementById('detail-wishlist-toggle');

  // Specs Elements
  const specMetal = document.getElementById('spec-metal');
  const specGems = document.getElementById('spec-gems');
  const specSize = document.getElementById('spec-size');
  const specDesign = document.getElementById('spec-design');
  const specFinish = document.getElementById('spec-finish');
  const specDimensions = document.getElementById('spec-dimensions');
  const specCert = document.getElementById('spec-cert');
  const specPackaging = document.getElementById('spec-packaging');

  const relatedGrid = document.getElementById('related-products-grid');

  // Helper for graphic
  function renderGraphic(item) {
    if (item.fallbackSvg && jewelrySVGs && jewelrySVGs[item.fallbackSvg]) {
      return jewelrySVGs[item.fallbackSvg];
    }
    return `<img src="${item.image}" alt="${item.name}">`;
  }

  // Render Product Data
  document.title = `${product.name} | KALLOL Haute Joaillerie`;
  crumbCategory.textContent = product.category;
  crumbName.textContent = product.name;

  brandEl.textContent = product.collection;
  skuEl.textContent = `SKU: ${product.sku}`;
  titleEl.textContent = product.name;
  ratingTextEl.textContent = `${product.rating} (${product.reviewsCount} reviews)`;
  priceEl.textContent = `$${product.price.toFixed(2)}`;
  descEl.textContent = product.shortDesc;

  // Stock Pill
  if (product.inStock > 0) {
    stockPill.className = 'stock-status-pill' + (product.inStock <= 3 ? ' low' : '');
    stockPill.textContent = product.inStock <= 3 ? `Only ${product.inStock} Left in Atelier` : `In Stock (${product.inStock} Available)`;
  } else {
    stockPill.className = 'stock-status-pill low';
    stockPill.textContent = 'Sold Out &bull; Made to Order';
    addBagBtn.disabled = true;
    buyNowBtn.disabled = true;
    addBagBtn.textContent = 'Sold Out';
  }

  // Main Image
  mainViewport.innerHTML = renderGraphic(product);

  // Thumbnails Strip
  thumbsStrip.innerHTML = `
    <button class="thumb-item-btn active" data-img="main" title="Crown View">
      ${renderGraphic(product)}
    </button>
    <button class="thumb-item-btn" data-img="model" title="Editorial Perspective">
      <img src="${product.image}" alt="Worn view">
    </button>
    <button class="thumb-item-btn" data-img="packaging" title="Luxury Case Presentation">
      <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=80" alt="Packaging">
    </button>
  `;

  thumbsStrip.querySelectorAll('.thumb-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      thumbsStrip.querySelectorAll('.thumb-item-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.dataset.img;
      if (type === 'main') {
        mainViewport.innerHTML = renderGraphic(product);
      } else if (type === 'model') {
        mainViewport.innerHTML = `<img src="${product.image}" alt="${product.name}" style="height: 100%; object-fit: cover;">`;
      } else {
        mainViewport.innerHTML = `<img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80" alt="Velvet Case" style="height: 100%; object-fit: cover;">`;
      }
    });
  });

  // Specifications
  specMetal.textContent = product.specs.metalType;
  specGems.textContent = product.specs.gemstones;
  specSize.textContent = product.specs.ringSize;
  specDesign.textContent = product.specs.design;
  specFinish.textContent = product.specs.finish;
  specDimensions.textContent = product.specs.dimensions;
  specCert.textContent = product.specs.certification;
  specPackaging.textContent = product.specs.packaging;

  selectedMetalName.textContent = product.specs.metalType;

  // Metal Swatch Change
  metalSwatches.querySelectorAll('.metal-swatch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      metalSwatches.querySelectorAll('.metal-swatch-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedMetal = btn.dataset.metal;
      selectedMetalName.textContent = selectedMetal;
      specMetal.textContent = selectedMetal;
    });
  });

  // Size Options Change
  sizeOptionsGrid.querySelectorAll('.size-choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sizeOptionsGrid.querySelectorAll('.size-choice-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = btn.dataset.size;
    });
  });

  // Quantity Change
  qtyMinusBtn.addEventListener('click', () => {
    if (selectedQty > 1) {
      selectedQty--;
      qtyValEl.textContent = selectedQty;
    }
  });

  qtyPlusBtn.addEventListener('click', () => {
    if (selectedQty < product.inStock) {
      selectedQty++;
      qtyValEl.textContent = selectedQty;
    } else {
      if (window.showToast) window.showToast(`Max available stock (${product.inStock}) reached.`);
    }
  });

  // Add to Bag
  addBagBtn.addEventListener('click', () => {
    for (let i = 0; i < selectedQty; i++) {
      window.kallolApp.addToCart(product.id, selectedSize, selectedMetal);
    }
  });

  // Buy Now
  buyNowBtn.addEventListener('click', () => {
    window.kallolApp.addToCart(product.id, selectedSize, selectedMetal);
    window.location.href = `checkout.html?buyNowId=${product.id}&size=${encodeURIComponent(selectedSize)}&metal=${encodeURIComponent(selectedMetal)}&qty=${selectedQty}`;
  });

  // Wishlist Toggle
  const isWished = state.wishlist && state.wishlist.has(product.id);
  if (isWished) wishlistBtn.classList.add('active');

  wishlistBtn.addEventListener('click', () => {
    window.kallolApp.toggleWishlist(product.id);
    const updated = state.wishlist.has(product.id);
    if (updated) {
      wishlistBtn.classList.add('active');
    } else {
      wishlistBtn.classList.remove('active');
    }
  });

  // Render Related Recommendations
  const related = inventory.filter(p => p.id !== product.id).slice(0, 3);
  relatedGrid.innerHTML = related.map(item => `
    <div class="product-card" onclick="window.location.href='product.html?id=${item.id}'">
      <div class="card-top">
        <div class="card-rating">
          <svg width="13" height="13" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span>${item.rating}</span>
        </div>
      </div>
      <div class="product-img-wrap">
        ${renderGraphic(item)}
      </div>
      <div class="product-info">
        <h3 class="product-title">${item.name}</h3>
        <p class="product-vendor">${item.collection}</p>
        <div class="product-price-row">
          <span class="product-price">$${item.price.toFixed(2)}</span>
          <span class="stock-tag">In Stock</span>
        </div>
      </div>
    </div>
  `).join('');
});
