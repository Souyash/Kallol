// ========================================================
// Kallol Luxury Jewels - Complete Standalone Web Application
// Works both over HTTP servers and direct local file:// opening
// ========================================================

// --- INVENTORY DATABASE ---
const inventoryData = [
  {
    id: "kal-001",
    sku: "KL-RNG-01",
    name: "Eternal Embrace Ring",
    collection: "by Lusture & Co",
    category: "Rings",
    price: 330.0,
    rating: 4.9,
    reviewsCount: 2345,
    inStock: 8,
    isBestSeller: true,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    fallbackSvg: "rose-gold-marquise",
    shortDesc: "A delicate 18k rose gold band with a brilliant marquise diamond solitaire embracing timeless beauty.",
    specs: {
      metalType: "18k Rose Gold",
      gemstones: "Marquise Diamond, 0.45 carats",
      ringSize: "Adjustable (US 5 - 9)",
      design: "Slender crossover band with four-prong center setting",
      finish: "High-polish mirror finish",
      dimensions: "Band width: 1.8mm, Crown height: 4.5mm",
      certification: "GIA Certified Conflict-Free Natural Diamond",
      packaging: "Kallol Signature Velvet Gift Box with Authenticity Card"
    }
  },
  {
    id: "kal-002",
    sku: "KL-RNG-02",
    name: "Harmonic Serenity Ring",
    collection: "by Aurora Jewels",
    category: "Rings",
    price: 325.0,
    rating: 4.9,
    reviewsCount: 2345,
    inStock: 5,
    isBestSeller: true,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
    fallbackSvg: "champagne-teardrop",
    shortDesc: "Harmoniously paired champagne and icy blue gemstones nestled in sculpted white gold filigree.",
    specs: {
      metalType: "18k White Gold",
      gemstones: "Champagne Sapphire & Aquamarine, 0.62 carats total",
      ringSize: "US 6, 7, 8 Available",
      design: "Dual cluster asymmetric duo with diamond accents",
      finish: "Micro-pave polished rhodium plating",
      dimensions: "Band width: 2.1mm, Crown width: 11mm",
      certification: "IGI Fine Jewelry Certificate",
      packaging: "Lacquered Wooden Keepsake Box with Travel Pouch"
    }
  },
  {
    id: "kal-003",
    sku: "KL-RNG-03",
    name: "Starlit Voyage Ring",
    collection: "by Gilded Grace",
    category: "Rings",
    price: 300.0,
    rating: 4.9,
    reviewsCount: 2845,
    inStock: 12,
    isBestSeller: true,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80",
    fallbackSvg: "baguette-gold",
    shortDesc: "Geometric baguette diamonds channeled along a satin-finished solid yellow gold band.",
    specs: {
      metalType: "18k Yellow Gold",
      gemstones: "Baguette Cut Diamonds, 0.50 carats (VS1 Clarity)",
      ringSize: "US 5 to 10 Available",
      design: "Channel-set horizontal baguette alignment",
      finish: "Satin brushed band with polished beveled edges",
      dimensions: "Band width: 3.4mm, Height: 2.2mm",
      certification: "AGS Certified Conflict-Free",
      packaging: "Kallol Suede Travel Case"
    }
  },
  {
    id: "kal-004",
    sku: "KL-RNG-04",
    name: "Ember Glow Ring",
    collection: "by Soleil Gems",
    category: "Rings",
    price: 350.0,
    rating: 4.9,
    reviewsCount: 2345,
    inStock: 3,
    isBestSeller: true,
    badge: "Low Stock",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    fallbackSvg: "pave-dome",
    shortDesc: "Intricate floral pattern with pave-set stones across an architectural dome of 18k rose gold.",
    specs: {
      metalType: "18k Rose Gold",
      gemstones: "Diamonds, 0.5 carats",
      ringSize: "Adjustable (Available any sizes)",
      design: "Intricate floral pattern with pave-set stones",
      finish: "High-polish with textured details",
      dimensions: "Dome width: 14mm, Band taper: 2.5mm",
      certification: "Kallol Master Jeweler Seal of Authenticity",
      packaging: "Kallol Signature Velvet Case with Cleaning Kit"
    }
  },
  {
    id: "kal-005",
    sku: "KL-RNG-05",
    name: "Moonlit Serenade Ring",
    collection: "by Velora Atelier",
    category: "Rings",
    price: 380.0,
    rating: 4.9,
    reviewsCount: 2345,
    inStock: 6,
    isBestSeller: true,
    badge: "Editor's Pick",
    image: "https://images.unsplash.com/photo-1543290954-bc6c733b4786?auto=format&fit=crop&w=800&q=80",
    fallbackSvg: "intertwined-bands",
    shortDesc: "A trio of intertwined ribbon bands in two-tone white and yellow gold, adorned with micro-diamonds.",
    specs: {
      metalType: "Two-Tone 18k Gold (White & Yellow)",
      gemstones: "Round Brilliant Cut Diamonds, 0.42 carats",
      ringSize: "US 5, 6, 7, 8, 9",
      design: "Dynamic entwined infinity multi-band weave",
      finish: "Dual high-polish and frosted gold contrasting bands",
      dimensions: "Total width: 8.5mm",
      certification: "GIA Certificate Included",
      packaging: "Artisan Leather Jewel Box"
    }
  },
  {
    id: "kal-006",
    sku: "KL-RNG-06",
    name: "Radiant Reverie Ring",
    collection: "by Opal & Ivy",
    category: "Rings",
    price: 450.0,
    rating: 4.9,
    reviewsCount: 2345,
    inStock: 4,
    isBestSeller: true,
    badge: "Exclusive",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    fallbackSvg: "filigree-dome",
    shortDesc: "Honeycomb lattice dome crowned with brilliant starburst clusters of hand-selected diamonds.",
    specs: {
      metalType: "18k Yellow Gold",
      gemstones: "Natural White Diamonds, 0.75 carats total",
      ringSize: "US 6, 7, 8",
      design: "Openwork honeycomb lattice with floral star motif",
      finish: "Hand-engraved Florentine textured gold",
      dimensions: "Dome diameter: 16mm",
      certification: "European Gemological Laboratory (EGL)",
      packaging: "Handcrafted Italian Suede Box"
    }
  },
  {
    id: "kal-007",
    sku: "KL-RNG-07",
    name: "Twilight Serenity Ring",
    collection: "by Lumière Jewelry",
    category: "Rings",
    price: 299.99,
    rating: 4.9,
    reviewsCount: 1890,
    inStock: 9,
    isBestSeller: false,
    badge: "Spotlight",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    fallbackSvg: "rose-gold-marquise",
    shortDesc: "An oval halo of pave diamonds circling a central sparkling cluster on an airy split-shank rose gold band.",
    specs: {
      metalType: "18k Rose Gold",
      gemstones: "Round Brilliant Diamonds, 0.38 carats",
      ringSize: "US 4 through 9",
      design: "Floating halo with split micro-pave shank",
      finish: "High-polish",
      dimensions: "Halo: 8mm x 6mm, Band: 1.6mm",
      certification: "Kallol Certificate of Authenticity",
      packaging: "Kallol Signature Velvet Gift Box"
    }
  },
  {
    id: "kal-008",
    sku: "KL-NCK-01",
    name: "Celestial Aurora Diamond Necklace",
    collection: "by Kallol Haute Joaillerie",
    category: "Necklaces",
    price: 590.0,
    rating: 5.0,
    reviewsCount: 1420,
    inStock: 7,
    isBestSeller: true,
    badge: "New Arrival",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    fallbackSvg: null,
    shortDesc: "Graceful layered diamond infinity pendant suspended on an Italian 18k white gold cable chain.",
    specs: {
      metalType: "18k White Gold",
      gemstones: "Brilliant Pavé Diamonds, 0.85 carats (F Color, VVS1)",
      ringSize: "16-inch to 18-inch adjustable chain",
      design: "Curved horizontal bar & infinity teardrop drop",
      finish: "Mirror rhodium plating with anti-tarnish shield",
      dimensions: "Pendant drop: 28mm, Bar length: 32mm",
      certification: "GIA Certified Diamond Pendant",
      packaging: "Kallol Luxury Silk-Lined Case"
    }
  },
  {
    id: "kal-009",
    sku: "KL-NCK-02",
    name: "Golden Cascade Pendant",
    collection: "by Velora Atelier",
    category: "Necklaces",
    price: 420.0,
    rating: 4.8,
    reviewsCount: 978,
    inStock: 10,
    isBestSeller: false,
    badge: "Essential",
    image: "https://images.unsplash.com/photo-1611591475879-7a38b58473ca?auto=format&fit=crop&w=800&q=80",
    fallbackSvg: null,
    shortDesc: "Layered delicate beaded chains with polished coin medals and diamond accents.",
    specs: {
      metalType: "18k Solid Yellow Gold",
      gemstones: "Single Bezel Diamond, 0.15 carats",
      ringSize: "18 inches + 2 inch extender",
      design: "Double strand choker and drop pendant",
      finish: "High-gloss diamond-cut gold link",
      dimensions: "Medal diameter: 12mm",
      certification: "Responsible Jewellery Council (RJC) Certified",
      packaging: "Luxury Kallol Suede Pouch"
    }
  },
  {
    id: "kal-010",
    sku: "KL-EAR-01",
    name: "Luminescence Pearl Drop Earrings",
    collection: "by Soleil Gems",
    category: "Earrings",
    price: 360.0,
    rating: 4.9,
    reviewsCount: 1120,
    inStock: 11,
    isBestSeller: false,
    badge: "Classic",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    fallbackSvg: null,
    shortDesc: "Akoya cultured pearls suspended from sculpted diamond-set 18k yellow gold huggies.",
    specs: {
      metalType: "18k Yellow Gold",
      gemstones: "AAA Akoya Cultured Pearls (8.5mm) & Pave Diamonds (0.24 ctw)",
      ringSize: "Secure hinge back closure",
      design: "Articulated drop movement",
      finish: "Lustrous nacre and mirror gold",
      dimensions: "Total earring drop: 24mm",
      certification: "Pearl Quality Grade Certificate",
      packaging: "Kallol Signature Velvet Case"
    }
  },
  {
    id: "kal-011",
    sku: "KL-BRC-01",
    name: "Ethereal Tennis Diamond Bracelet",
    collection: "by Gilded Grace",
    category: "Bracelets",
    price: 890.0,
    rating: 5.0,
    reviewsCount: 840,
    inStock: 4,
    isBestSeller: true,
    badge: "Haute Luxe",
    image: "https://images.unsplash.com/photo-1611591475879-7a38b58473ca?auto=format&fit=crop&w=800&q=80",
    fallbackSvg: null,
    shortDesc: "Continuous line of prong-set round brilliant diamonds with double safety latch clasp.",
    specs: {
      metalType: "18k White Gold",
      gemstones: "Round Diamonds, 2.50 carats total (VS2, G-H Color)",
      ringSize: "7 inches standard (custom sizing available)",
      design: "Classic four-prong continuous line setting",
      finish: "Micro-polished rhodium finish",
      dimensions: "Width: 2.8mm, Thickness: 2.3mm",
      certification: "GIA Diamond Bracelet Verification",
      packaging: "Kallol Presentation Jewel Vault"
    }
  },
  {
    id: "kal-012",
    sku: "KL-EAR-02",
    name: "Bloom Pavé Diamond Hoops",
    collection: "by Aurora Jewels",
    category: "Earrings",
    price: 280.0,
    rating: 4.8,
    reviewsCount: 1640,
    inStock: 15,
    isBestSeller: false,
    badge: "Everyday Luxe",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    fallbackSvg: null,
    shortDesc: "Inside-out sparkling pave diamonds adorning refined everyday huggie hoops.",
    specs: {
      metalType: "18k Rose Gold",
      gemstones: "Brilliant Cut Diamonds, 0.35 carats",
      ringSize: "Diameter 14mm",
      design: "Inside-out diamond facing for maximum brilliance",
      finish: "Ultra-smooth click clasp comfort fit",
      dimensions: "Diameter: 14mm, Width: 2.2mm",
      certification: "Kallol Craftsmanship Guarantee",
      packaging: "Kallol Suede Travel Pouch"
    }
  },
  {
    id: "kal-test",
    sku: "KL-TEST-01",
    name: "Kallol Atelier Velvet Pouch (Live Test Order)",
    collection: "by Kallol Haute Joaillerie",
    category: "Accessories",
    price: 0.012, // Evaluates to ₹1.00
    priceINR: 1.0,
    priceDisplay: "₹1.00 ($0.01)",
    rating: 5.0,
    reviewsCount: 999,
    inStock: 999,
    isBestSeller: true,
    badge: "₹1 Live Test",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    fallbackSvg: "pave-dome",
    shortDesc: "Signature emerald & gold-embossed keepsake velvet jewelry pouch. Configured for testing real-time live payments on Razorpay at exactly ₹1.",
    specs: {
      metalType: "Crushed Velvet with 18K Gold Thread",
      gemstones: "Atelier Wax Seal Sample",
      ringSize: "Universal Travel Size",
      design: "Embossed Kallol Emblem",
      finish: "Hand-stitched velvet lining",
      dimensions: "80mm x 80mm",
      certification: "Razorpay Live Payment Test Verification",
      packaging: "Signature Kallol Ribbon Box"
    }
  }
];

// --- HIGH PRECISION SVG GRAPHICS ---
const jewelrySVGs = {
  "rose-gold-marquise": `
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="ring-vector">
      <defs>
        <radialGradient id="rg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFDF9" stop-opacity="1" />
          <stop offset="60%" stop-color="#F7EFE5" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#F2EAE0" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="rose-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F7D0BA" />
          <stop offset="35%" stop-color="#E5A68B" />
          <stop offset="70%" stop-color="#FDE8DE" />
          <stop offset="100%" stop-color="#BF7E67" />
        </linearGradient>
        <linearGradient id="diamond-sparkle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="40%" stop-color="#EAF6FF" />
          <stop offset="75%" stop-color="#D5ECFF" />
          <stop offset="100%" stop-color="#F9FEFF" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="160" fill="url(#rg-glow)" />
      <ellipse cx="200" cy="315" rx="90" ry="16" fill="#D3C3B6" opacity="0.45" />
      <g>
        <path d="M120 230 C120 290 280 290 280 230 C280 170 230 140 200 140 C170 140 120 170 120 230 Z" 
              stroke="url(#rose-gold-grad)" stroke-width="18" stroke-linecap="round" fill="none" />
        <path d="M125 228 C125 285 275 285 275 228" 
              stroke="#FFF1EA" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8" />
        <circle cx="150" cy="180" r="3.5" fill="url(#diamond-sparkle)" />
        <circle cx="165" cy="162" r="3.5" fill="url(#diamond-sparkle)" />
        <circle cx="180" cy="150" r="3.5" fill="url(#diamond-sparkle)" />
        <circle cx="220" cy="150" r="3.5" fill="url(#diamond-sparkle)" />
        <circle cx="235" cy="162" r="3.5" fill="url(#diamond-sparkle)" />
        <circle cx="250" cy="180" r="3.5" fill="url(#diamond-sparkle)" />
        <path d="M200 100 Q225 135 200 170 Q175 135 200 100 Z" fill="url(#diamond-sparkle)" stroke="#E5A68B" stroke-width="2"/>
        <polygon points="200,105 212,135 200,148 188,135" fill="#FFFFFF" opacity="0.9"/>
        <polygon points="200,105 200,148 188,135" fill="#EDF7FF" opacity="0.6"/>
        <polygon points="200,165 212,135 200,148 188,135" fill="#F0F8FF" opacity="0.75"/>
        <circle cx="200" cy="135" r="3" fill="#FFFFFF" />
        <circle cx="200" cy="102" r="2.8" fill="#F7D0BA" />
        <circle cx="200" cy="168" r="2.8" fill="#F7D0BA" />
        <circle cx="184" cy="135" r="2.8" fill="#F7D0BA" />
        <circle cx="216" cy="135" r="2.8" fill="#F7D0BA" />
      </g>
    </svg>
  `,
  "champagne-teardrop": `
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="ring-vector">
      <defs>
        <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="35%" stop-color="#D9E2E8" />
          <stop offset="70%" stop-color="#F0F4F7" />
          <stop offset="100%" stop-color="#9AA6B2" />
        </linearGradient>
        <linearGradient id="champagne-gem" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF2E2" />
          <stop offset="50%" stop-color="#E8B88A" />
          <stop offset="100%" stop-color="#B37C4F" />
        </linearGradient>
        <linearGradient id="aquamarine-gem" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="50%" stop-color="#9CD9E8" />
          <stop offset="100%" stop-color="#5B9BB0" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="315" rx="85" ry="15" fill="#C9D3DC" opacity="0.45" />
      <path d="M125 230 C125 292 275 292 275 230 C275 175 235 145 200 145 C165 145 125 175 125 230 Z" 
            stroke="url(#silver-grad)" stroke-width="17" stroke-linecap="round" fill="none" />
      <path d="M175 120 C160 145 160 170 180 170 C195 170 195 145 175 120 Z" fill="url(#aquamarine-gem)" stroke="#C4D7E0" stroke-width="2"/>
      <ellipse cx="178" cy="150" rx="6" ry="10" fill="#FFFFFF" opacity="0.6"/>
      <path d="M215 110 C195 140 200 170 225 168 C245 165 240 135 215 110 Z" fill="url(#champagne-gem)" stroke="#D6A77A" stroke-width="2"/>
      <ellipse cx="218" cy="142" rx="7" ry="12" fill="#FFFDF8" opacity="0.55"/>
      <circle cx="160" cy="145" r="3" fill="#FFFFFF" stroke="#BACCD6" stroke-width="0.8"/>
      <circle cx="168" cy="165" r="3" fill="#FFFFFF" stroke="#BACCD6" stroke-width="0.8"/>
      <circle cx="185" cy="175" r="3" fill="#FFFFFF" stroke="#BACCD6" stroke-width="0.8"/>
      <circle cx="235" cy="160" r="3" fill="#FFFFFF" stroke="#D6A77A" stroke-width="0.8"/>
      <circle cx="242" cy="140" r="3" fill="#FFFFFF" stroke="#D6A77A" stroke-width="0.8"/>
      <circle cx="230" cy="120" r="3" fill="#FFFFFF" stroke="#D6A77A" stroke-width="0.8"/>
    </svg>
  `,
  "baguette-gold": `
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="ring-vector">
      <defs>
        <linearGradient id="yellow-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFE8A3" />
          <stop offset="35%" stop-color="#E2B755" />
          <stop offset="70%" stop-color="#FFF0BD" />
          <stop offset="100%" stop-color="#AA822A" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="315" rx="90" ry="15" fill="#D3C7AB" opacity="0.45" />
      <path d="M120 230 C120 295 280 295 280 230 C280 165 240 135 200 135 C160 135 120 165 120 230 Z" 
            stroke="url(#yellow-gold-grad)" stroke-width="22" stroke-linecap="round" fill="none" />
      <g transform="translate(0, -5)">
        <rect x="155" y="142" width="10" height="22" rx="1" fill="#FFFFFF" stroke="#E2B755" stroke-width="1.5" transform="rotate(-15 160 153)"/>
        <rect x="172" y="136" width="11" height="24" rx="1" fill="#F4FAFF" stroke="#E2B755" stroke-width="1.5" transform="rotate(-8 177 148)"/>
        <rect x="190" y="133" width="12" height="26" rx="1" fill="#FFFFFF" stroke="#E2B755" stroke-width="1.5"/>
        <rect x="209" y="136" width="11" height="24" rx="1" fill="#F4FAFF" stroke="#E2B755" stroke-width="1.5" transform="rotate(8 214 148)"/>
        <rect x="226" y="142" width="10" height="22" rx="1" fill="#FFFFFF" stroke="#E2B755" stroke-width="1.5" transform="rotate(15 231 153)"/>
      </g>
    </svg>
  `,
  "pave-dome": `
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="ring-vector">
      <defs>
        <linearGradient id="rose-gold-dome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCDFD0" />
          <stop offset="40%" stop-color="#E29F81" />
          <stop offset="70%" stop-color="#FCEAE1" />
          <stop offset="100%" stop-color="#B26C4E" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="320" rx="90" ry="16" fill="#CEB5A8" opacity="0.45" />
      <path d="M125 235 C125 300 275 300 275 235 C275 180 240 150 200 150 C160 150 125 180 125 235 Z" 
            stroke="url(#rose-gold-dome)" stroke-width="20" stroke-linecap="round" fill="none" />
      <path d="M145 175 Q200 100 255 175 Q200 160 145 175 Z" fill="url(#rose-gold-dome)" stroke="#D89274" stroke-width="2"/>
      <g fill="#FFFFFF" stroke="#D89274" stroke-width="0.8">
        <circle cx="200" cy="130" r="4.5" />
        <circle cx="193" cy="126" r="3" />
        <circle cx="207" cy="126" r="3" />
        <circle cx="193" cy="136" r="3" />
        <circle cx="207" cy="136" r="3" />
        <circle cx="178" cy="142" r="3.5" />
        <circle cx="170" cy="140" r="2.8" />
        <circle cx="184" cy="148" r="2.8" />
        <circle cx="222" cy="142" r="3.5" />
        <circle cx="216" cy="148" r="2.8" />
        <circle cx="230" cy="140" r="2.8" />
        <circle cx="160" cy="160" r="3" />
        <circle cx="175" cy="162" r="3" />
        <circle cx="190" cy="155" r="3.5" />
        <circle cx="210" cy="155" r="3.5" />
        <circle cx="225" cy="162" r="3.5" />
        <circle cx="240" cy="160" r="3" />
      </g>
    </svg>
  `,
  "intertwined-bands": `
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="ring-vector">
      <defs>
        <linearGradient id="tw-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFE8A3" />
          <stop offset="50%" stop-color="#D9A83E" />
          <stop offset="100%" stop-color="#9E7623" />
        </linearGradient>
        <linearGradient id="tw-white" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="50%" stop-color="#CCD7E0" />
          <stop offset="100%" stop-color="#8C9CA8" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="315" rx="88" ry="16" fill="#C8C4B8" opacity="0.4" />
      <path d="M125 230 Q125 150 200 135 Q275 150 275 230 Q275 295 200 295 Q125 295 125 230 Z" 
            stroke="url(#tw-white)" stroke-width="12" fill="none"/>
      <path d="M135 210 Q145 130 215 150 Q285 170 265 245 Q245 305 185 285 Q125 265 135 210 Z" 
            stroke="url(#tw-gold)" stroke-width="11" fill="none"/>
      <path d="M140 245 Q160 170 230 135 Q290 150 260 220 Q230 290 160 280 Q120 270 140 245 Z" 
            stroke="url(#tw-white)" stroke-width="10" fill="none"/>
      <circle cx="185" cy="140" r="3" fill="#FFFFFF"/>
      <circle cx="215" cy="148" r="3" fill="#FFFFFF"/>
      <circle cx="200" cy="165" r="3" fill="#FFFFFF"/>
    </svg>
  `,
  "filigree-dome": `
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="ring-vector">
      <defs>
        <linearGradient id="honey-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF2C2" />
          <stop offset="45%" stop-color="#E2B755" />
          <stop offset="100%" stop-color="#A67B1E" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="320" rx="90" ry="16" fill="#D3C4A3" opacity="0.45" />
      <path d="M120 235 C120 300 280 300 280 235 C280 180 240 145 200 145 C160 145 120 180 120 235 Z" 
            stroke="url(#honey-gold)" stroke-width="22" stroke-linecap="round" fill="none" />
      <ellipse cx="200" cy="155" rx="55" ry="32" fill="url(#honey-gold)" stroke="#8A6417" stroke-width="1.5" />
      <g fill="#FFFFFF" stroke="#8A6417" stroke-width="1">
        <polygon points="200,135 206,146 218,148 209,156 212,168 200,162 188,168 191,156 182,148 194,146" fill="#FFFFFF" />
        <circle cx="200" cy="152" r="3.5" fill="#FFEAA8" />
        <circle cx="170" cy="155" r="3.5" fill="#FFFFFF" />
        <circle cx="230" cy="155" r="3.5" fill="#FFFFFF" />
        <circle cx="185" cy="140" r="3.5" fill="#FFFFFF" />
        <circle cx="215" cy="140" r="3.5" fill="#FFFFFF" />
        <circle cx="185" cy="168" r="3.5" fill="#FFFFFF" />
        <circle cx="215" cy="168" r="3.5" fill="#FFFFFF" />
      </g>
    </svg>
  `
};

// Retrieve saved persistent state from localStorage if available
function loadSavedState() {
  let savedCart = [];
  let savedWishlist = ["kal-002"];
  let savedInventory = inventoryData;

  try {
    const c = localStorage.getItem('kallol_cart');
    if (c) savedCart = JSON.parse(c);
    const w = localStorage.getItem('kallol_wishlist');
    if (w) savedWishlist = JSON.parse(w);
    const inv = localStorage.getItem('kallol_inventory');
    if (inv) {
      savedInventory = JSON.parse(inv);
      if (!savedInventory.some(i => i.id === 'kal-test')) {
        const testItem = inventoryData.find(i => i.id === 'kal-test');
        if (testItem) savedInventory.push(testItem);
      }
    }
  } catch (e) {
    console.error(e);
  }

  return {
    inventory: savedInventory,
    cart: savedCart,
    wishlist: new Set(savedWishlist)
  };
}

const savedState = loadSavedState();

// --- APP STATE ---
const state = {
  inventory: savedState.inventory,
  cart: savedState.cart,
  wishlist: savedState.wishlist,
  activeCategory: 'all',
  activeMetal: 'all',
  activeSort: 'featured',
  discountPercent: 0,
  activeCouponCode: '',
  selectedProductForModal: null,
  selectedRingSize: 'US 6'
};

function savePersistentState() {
  try {
    localStorage.setItem('kallol_cart', JSON.stringify(state.cart));
    localStorage.setItem('kallol_wishlist', JSON.stringify(Array.from(state.wishlist)));
    localStorage.setItem('kallol_inventory', JSON.stringify(state.inventory));
  } catch (e) {
    console.error(e);
  }
}

// Global expose
window.kallolInventory = state.inventory;

// DOM References (only if present on page)
const bestSellingGrid = document.getElementById('best-selling-grid');
const inventoryGrid = document.getElementById('inventory-grid');
const spotlightThumbWrap = document.getElementById('spotlight-thumb-wrap');
const specProductImgBox = document.getElementById('spec-product-img-box');

const totalSkusEl = document.getElementById('total-skus');
const totalUnitsEl = document.getElementById('total-units');
const lowStockCountEl = document.getElementById('low-stock-count');

const cartBadge = document.getElementById('cart-badge');
const wishlistBadge = document.getElementById('wishlist-badge');
const cartDrawerCount = document.getElementById('cart-drawer-count');
const wishlistDrawerCount = document.getElementById('wishlist-drawer-count');

const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const wishlistDrawerOverlay = document.getElementById('wishlist-drawer-overlay');
const productModalOverlay = document.getElementById('product-modal-overlay');
const searchModal = document.getElementById('search-modal');
const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');

const cartItemsContainer = document.getElementById('cart-items-container');
const cartDrawerFooter = document.getElementById('cart-drawer-footer');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDiscountEl = document.getElementById('cart-discount');
const discountRowEl = document.getElementById('discount-row');
const cartTotalEl = document.getElementById('cart-total');
const wishlistItemsContainer = document.getElementById('wishlist-items-container');

const liveSearchInput = document.getElementById('live-search-input');
const searchResultsBox = document.getElementById('search-results-box');
const toastContainer = document.getElementById('toast-container');

function formatPrice(val) {
  return `$${val.toFixed(2)}`;
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color: var(--accent-gold); font-size: 1.1rem;">&#10022;</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

window.showToast = showToast;

function getProductGraphic(item) {
  if (item.fallbackSvg && jewelrySVGs[item.fallbackSvg]) {
    return jewelrySVGs[item.fallbackSvg];
  }
  return `<img src="${item.image}" alt="${item.name}" loading="lazy">`;
}

function createProductCardHTML(item) {
  const isWished = state.wishlist.has(item.id);
  const graphic = getProductGraphic(item);
  const isLowStock = item.inStock <= 3;

  return `
    <div class="product-card" data-id="${item.id}">
      <div class="card-top">
        <div class="card-rating">
          <svg width="13" height="13" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span>${item.rating} (${item.reviewsCount})</span>
        </div>
        <button class="wishlist-toggle ${isWished ? 'active' : ''}" data-id="${item.id}" aria-label="Toggle Wishlist" title="Save to Wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      <div class="product-img-wrap" data-id="${item.id}">
        ${graphic}
        <div class="card-actions-hover">
          <button class="quick-btn action-quick-view" data-id="${item.id}">Quick View</button>
          <button class="quick-btn secondary action-add-cart" data-id="${item.id}" ${item.inStock === 0 ? 'disabled' : ''}>
            ${item.inStock === 0 ? 'Sold Out' : 'Add to Bag'}
          </button>
        </div>
      </div>

      <div class="product-info">
        <h3 class="product-title" data-id="${item.id}">${item.name}</h3>
        <p class="product-vendor">${item.collection}</p>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(item.price)}</span>
          <span class="stock-tag ${isLowStock ? 'low' : ''}">
            ${item.inStock > 0 ? (isLowStock ? `Only ${item.inStock} left` : `In Stock: ${item.inStock}`) : 'Sold Out'}
          </span>
        </div>
      </div>
    </div>
  `;
}

function renderBestSellers() {
  if (!bestSellingGrid) return;
  const bestSellers = state.inventory.slice(0, 6);
  bestSellingGrid.innerHTML = bestSellers.map(createProductCardHTML).join('');
}

function renderInventoryHub() {
  if (!inventoryGrid) return;
  let list = [...state.inventory];

  if (state.activeCategory !== 'all') {
    list = list.filter(item => item.category === state.activeCategory);
  }

  if (state.activeMetal !== 'all') {
    list = list.filter(item => item.specs.metalType.toLowerCase().includes(state.activeMetal.toLowerCase()));
  }

  if (state.activeSort === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (state.activeSort === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (state.activeSort === 'stock') {
    list.sort((a, b) => b.inStock - a.inStock);
  }

  inventoryGrid.innerHTML = list.map(createProductCardHTML).join('');
  updateInventoryStats();
}

function updateInventoryStats() {
  if (!totalSkusEl) return;
  const totalSkus = state.inventory.length;
  const totalUnits = state.inventory.reduce((sum, item) => sum + item.inStock, 0);
  const lowStock = state.inventory.filter(item => item.inStock > 0 && item.inStock <= 3).length;

  totalSkusEl.textContent = totalSkus;
  totalUnitsEl.textContent = totalUnits;
  lowStockCountEl.textContent = lowStock;
}

function renderSpotlightAndSpecs() {
  if (!spotlightThumbWrap) return;
  const spotlightItem = state.inventory.find(i => i.id === 'kal-007') || state.inventory[0];
  spotlightThumbWrap.innerHTML = getProductGraphic(spotlightItem);

  if (specProductImgBox) {
    const specItem = state.inventory.find(i => i.id === 'kal-004') || state.inventory[3];
    specProductImgBox.innerHTML = getProductGraphic(specItem);
  }
}

function setupAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      accordionItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const icon = other.querySelector('.acc-icon');
          if (icon) icon.textContent = '+';
        }
      });

      if (!isActive) {
        item.classList.add('active');
        item.querySelector('.acc-icon').textContent = '−';
      } else {
        item.classList.remove('active');
        item.querySelector('.acc-icon').textContent = '+';
      }
    });
  });
}

function addToCart(productId, size = 'US 6', metal = null) {
  const product = state.inventory.find(p => p.id === productId);
  if (!product) return;

  if (product.inStock <= 0) {
    showToast(`Sorry, "${product.name}" is currently sold out.`);
    return;
  }

  const chosenMetal = metal || product.specs.metalType;
  const existing = state.cart.find(item => item.id === productId && item.size === size && item.metal === chosenMetal);
  if (existing) {
    if (existing.qty < product.inStock) {
      existing.qty += 1;
      showToast(`Added another "${product.name}" (${size}) to your bag.`);
    } else {
      showToast(`Max available stock (${product.inStock}) reached for "${product.name}".`);
      return;
    }
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      collection: product.collection,
      price: product.price,
      size: size,
      metal: chosenMetal,
      fallbackSvg: product.fallbackSvg,
      image: product.image,
      qty: 1
    });
    showToast(`"${product.name}" added to your shopping bag.`);
  }

  savePersistentState();
  updateCartUI();
  if (cartDrawerOverlay) openCartDrawer();
}

function removeFromCart(index) {
  const removed = state.cart.splice(index, 1)[0];
  if (removed) {
    showToast(`Removed "${removed.name}" from shopping bag.`);
  }
  savePersistentState();
  updateCartUI();
}

function changeCartQty(index, delta) {
  const item = state.cart[index];
  if (!item) return;

  const product = state.inventory.find(p => p.id === item.id);
  const newQty = item.qty + delta;

  if (newQty <= 0) {
    removeFromCart(index);
    return;
  }

  if (product && newQty > product.inStock) {
    showToast(`Only ${product.inStock} units available in stock.`);
    return;
  }

  item.qty = newQty;
  savePersistentState();
  updateCartUI();
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadge) cartBadge.textContent = totalCount;
  if (cartDrawerCount) cartDrawerCount.textContent = totalCount;

  if (!cartItemsContainer) return;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="drawer-empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <p>Your shopping bag is currently empty.</p>
        <a href="index.html#shop" class="hero-btn" onclick="document.getElementById('cart-drawer-overlay').classList.remove('open')">
          Explore Jewels
        </a>
      </div>
    `;
    if (cartDrawerFooter) cartDrawerFooter.style.display = 'none';
    return;
  }

  if (cartDrawerFooter) cartDrawerFooter.style.display = 'block';

  cartItemsContainer.innerHTML = state.cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-img">
        ${item.fallbackSvg && jewelrySVGs[item.fallbackSvg] ? jewelrySVGs[item.fallbackSvg] : `<img src="${item.image}" alt="${item.name}">`}
      </div>
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-meta">${item.metal} &bull; Size: ${item.size}</div>
        <div class="cart-item-controls">
          <div class="qty-counter">
            <button class="qty-btn" data-action="dec" data-index="${index}">&minus;</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" data-action="inc" data-index="${index}">&#43;</button>
          </div>
          <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        </div>
        <button class="cart-item-remove" data-index="${index}">Remove</button>
      </div>
    </div>
  `).join('');

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = subtotal * state.discountPercent;
  const total = subtotal - discount;

  if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(subtotal);
  if (discountRowEl && cartDiscountEl) {
    if (state.discountPercent > 0) {
      discountRowEl.style.display = 'flex';
      cartDiscountEl.textContent = `-${formatPrice(discount)}`;
    } else {
      discountRowEl.style.display = 'none';
    }
  }
  if (cartTotalEl) cartTotalEl.textContent = formatPrice(total);
}

function toggleWishlist(productId) {
  const product = state.inventory.find(p => p.id === productId);
  if (!product) return;

  if (state.wishlist.has(productId)) {
    state.wishlist.delete(productId);
    showToast(`Removed "${product.name}" from your wishlist.`);
  } else {
    state.wishlist.add(productId);
    showToast(`Added "${product.name}" to your wishlist.`);
  }

  savePersistentState();
  updateWishlistUI();
  renderBestSellers();
  renderInventoryHub();
}

function updateWishlistUI() {
  const count = state.wishlist.size;
  if (wishlistBadge) wishlistBadge.textContent = count;
  if (wishlistDrawerCount) wishlistDrawerCount.textContent = count;

  if (!wishlistItemsContainer) return;

  if (count === 0) {
    wishlistItemsContainer.innerHTML = `
      <div class="drawer-empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <p>Your wishlist is empty.</p>
        <a href="index.html#shop" class="hero-btn" onclick="document.getElementById('wishlist-drawer-overlay').classList.remove('open')">
          Browse Collection
        </a>
      </div>
    `;
    return;
  }

  const wishedItems = state.inventory.filter(p => state.wishlist.has(p.id));
  wishlistItemsContainer.innerHTML = wishedItems.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        ${getProductGraphic(item)}
      </div>
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-meta">${item.collection} &bull; ${item.specs.metalType}</div>
        <div style="font-weight: 600; margin-bottom: 8px;">${formatPrice(item.price)}</div>
        <div style="display: flex; gap: 8px;">
          <button class="quick-btn action-add-cart" data-id="${item.id}" style="padding: 6px 12px; font-size: 0.7rem;">
            Move to Bag
          </button>
          <button class="cart-item-remove" onclick="window.kallolApp.toggleWishlist('${item.id}')">
            Remove
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Navigates directly to dedicated product page
function openDedicatedProductPage(productId) {
  window.location.href = `product.html?id=${productId}`;
}

function handleLiveSearch(query) {
  if (!searchResultsBox) return;
  const q = query.trim().toLowerCase();
  if (!q) {
    searchResultsBox.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 20px 0;">Type to search across our 18k gold collections and inventory...</p>`;
    return;
  }

  const results = state.inventory.filter(item => 
    item.name.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q) ||
    item.collection.toLowerCase().includes(q) ||
    item.specs.metalType.toLowerCase().includes(q) ||
    item.specs.gemstones.toLowerCase().includes(q)
  );

  if (results.length === 0) {
    searchResultsBox.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;">No jewelry found matching "${query}".</p>`;
    return;
  }

  searchResultsBox.innerHTML = results.map(createProductCardHTML).join('');
}

function openCartDrawer() {
  if (cartDrawerOverlay) cartDrawerOverlay.classList.add('open');
}

function openWishlistDrawer() {
  updateWishlistUI();
  if (wishlistDrawerOverlay) wishlistDrawerOverlay.classList.add('open');
}

function setupEventListeners() {
  if (document.getElementById('open-cart-btn')) {
    document.getElementById('open-cart-btn').addEventListener('click', openCartDrawer);
  }
  if (document.getElementById('close-cart-btn')) {
    document.getElementById('close-cart-btn').addEventListener('click', () => {
      cartDrawerOverlay.classList.remove('open');
    });
  }
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) cartDrawerOverlay.classList.remove('open');
    });
  }

  if (document.getElementById('open-wishlist-btn')) {
    document.getElementById('open-wishlist-btn').addEventListener('click', openWishlistDrawer);
  }
  if (document.getElementById('close-wishlist-btn')) {
    document.getElementById('close-wishlist-btn').addEventListener('click', () => {
      wishlistDrawerOverlay.classList.remove('open');
    });
  }
  if (wishlistDrawerOverlay) {
    wishlistDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === wishlistDrawerOverlay) wishlistDrawerOverlay.classList.remove('open');
    });
  }

  if (document.getElementById('open-search-btn')) {
    document.getElementById('open-search-btn').addEventListener('click', () => {
      searchModal.classList.add('open');
      liveSearchInput.focus();
      handleLiveSearch('');
    });
  }
  if (document.getElementById('close-search-btn')) {
    document.getElementById('close-search-btn').addEventListener('click', () => {
      searchModal.classList.remove('open');
    });
  }
  if (liveSearchInput) {
    liveSearchInput.addEventListener('input', (e) => {
      handleLiveSearch(e.target.value);
    });
  }

  // Delegated clicks for product cards
  document.body.addEventListener('click', (e) => {
    // Add to Cart button
    const addCartBtn = e.target.closest('.action-add-cart');
    if (addCartBtn) {
      e.stopPropagation();
      const id = addCartBtn.dataset.id;
      addToCart(id);
      return;
    }

    // Quick View button -> Navigates to dedicated product.html
    const quickViewBtn = e.target.closest('.action-quick-view');
    if (quickViewBtn) {
      e.stopPropagation();
      const id = quickViewBtn.dataset.id;
      openDedicatedProductPage(id);
      return;
    }

    // Wishlist Toggle
    const wishBtn = e.target.closest('.wishlist-toggle');
    if (wishBtn) {
      e.stopPropagation();
      const id = wishBtn.dataset.id;
      toggleWishlist(id);
      return;
    }

    // Image or Title Click -> Navigates to dedicated product.html
    const imgWrap = e.target.closest('.product-img-wrap');
    const titleEl = e.target.closest('.product-title');
    if (imgWrap || titleEl) {
      const id = (imgWrap || titleEl).dataset.id;
      if (id) {
        openDedicatedProductPage(id);
        return;
      }
    }

    // Cart Quantity Buttons
    const qtyBtn = e.target.closest('.qty-btn');
    if (qtyBtn && qtyBtn.dataset.index !== undefined) {
      const idx = parseInt(qtyBtn.dataset.index, 10);
      const action = qtyBtn.dataset.action;
      changeCartQty(idx, action === 'inc' ? 1 : -1);
      return;
    }

    // Cart Item Remove Button
    const removeBtn = e.target.closest('.cart-item-remove');
    if (removeBtn && removeBtn.dataset.index !== undefined) {
      const idx = parseInt(removeBtn.dataset.index, 10);
      removeFromCart(idx);
      return;
    }
  });

  if (document.getElementById('category-filter-pills')) {
    document.getElementById('category-filter-pills').addEventListener('click', (e) => {
      if (e.target.classList.contains('cat-pill')) {
        document.querySelectorAll('#category-filter-pills .cat-pill').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        state.activeCategory = e.target.dataset.cat;
        renderInventoryHub();
      }
    });
  }

  if (document.getElementById('metal-filter')) {
    document.getElementById('metal-filter').addEventListener('change', (e) => {
      state.activeMetal = e.target.value;
      renderInventoryHub();
    });
  }

  if (document.getElementById('sort-select')) {
    document.getElementById('sort-select').addEventListener('change', (e) => {
      state.activeSort = e.target.value;
      renderInventoryHub();
    });
  }

  if (document.getElementById('apply-coupon-btn')) {
    document.getElementById('apply-coupon-btn').addEventListener('click', () => {
      const input = document.getElementById('coupon-input');
      const code = input.value.trim().toUpperCase();

      if (code === 'KALLOL10') {
        state.discountPercent = 0.10;
        state.activeCouponCode = code;
        showToast('10% VIP Atelier discount applied!');
        updateCartUI();
      } else if (code) {
        showToast('Invalid promo code. Try "KALLOL10" for 10% off.');
      }
    });
  }

  // Checkout Trigger button in drawer -> Navigates to dedicated checkout.html
  if (document.getElementById('checkout-trigger-btn')) {
    document.getElementById('checkout-trigger-btn').addEventListener('click', () => {
      window.location.href = 'checkout.html';
    });
  }
}

window.kallolApp = {
  toggleWishlist,
  openDedicatedProductPage,
  addToCart
};

document.addEventListener('DOMContentLoaded', () => {
  renderBestSellers();
  renderInventoryHub();
  renderSpotlightAndSpecs();
  setupAccordions();
  setupEventListeners();
  updateCartUI();
  updateWishlistUI();
});
