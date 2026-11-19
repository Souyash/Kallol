// Kallol Luxury Jewelry - High Precision SVG Vectors for Rings & Jewelry
export const jewelrySVGs = {
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
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="15" flood-color="#8C6656" flood-opacity="0.22" />
        </filter>
        <filter id="facet-glow">
          <feGaussianBlur stdDeviation="1.5" result="glow"/>
          <feComposite in="SourceGraphic" in2="glow" operator="over"/>
        </filter>
      </defs>
      <circle cx="200" cy="200" r="160" fill="url(#rg-glow)" />
      <!-- Shadow Ellipse -->
      <ellipse cx="200" cy="315" rx="90" ry="16" fill="#D3C3B6" opacity="0.45" filter="blur(8px)" />
      <!-- Ring Band Outer -->
      <g filter="url(#soft-shadow)">
        <path d="M120 230 C120 290 280 290 280 230 C280 170 230 140 200 140 C170 140 120 170 120 230 Z" 
              stroke="url(#rose-gold-grad)" stroke-width="18" stroke-linecap="round" fill="none" />
        <path d="M125 228 C125 285 275 285 275 228" 
              stroke="#FFF1EA" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8" />
        <!-- Micro Pavé Diamonds on Shank -->
        <circle cx="150" cy="180" r="3.5" fill="url(#diamond-sparkle)" />
        <circle cx="165" cy="162" r="3.5" fill="url(#diamond-sparkle)" />
        <circle cx="180" cy="150" r="3.5" fill="url(#diamond-sparkle)" />
        <circle cx="220" cy="150" r="3.5" fill="url(#diamond-sparkle)" />
        <circle cx="235" cy="162" r="3.5" fill="url(#diamond-sparkle)" />
        <circle cx="250" cy="180" r="3.5" fill="url(#diamond-sparkle)" />
        <!-- Center Marquise Setting -->
        <path d="M200 100 Q225 135 200 170 Q175 135 200 100 Z" fill="url(#diamond-sparkle)" stroke="#E5A68B" stroke-width="2" filter="url(#facet-glow)"/>
        <!-- Marquise Facets -->
        <polygon points="200,105 212,135 200,148 188,135" fill="#FFFFFF" opacity="0.9"/>
        <polygon points="200,105 200,148 188,135" fill="#EDF7FF" opacity="0.6"/>
        <polygon points="200,165 212,135 200,148 188,135" fill="#F0F8FF" opacity="0.75"/>
        <circle cx="200" cy="135" r="3" fill="#FFFFFF" />
        <!-- Prongs -->
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
      <ellipse cx="200" cy="315" rx="85" ry="15" fill="#C9D3DC" opacity="0.45" filter="blur(8px)" />
      <!-- Ring Band -->
      <path d="M125 230 C125 292 275 292 275 230 C275 175 235 145 200 145 C165 145 125 175 125 230 Z" 
            stroke="url(#silver-grad)" stroke-width="17" stroke-linecap="round" fill="none" />
      <!-- Dual Teardrop Gemstones Cluster -->
      <!-- Left Teardrop (Aquamarine) -->
      <path d="M175 120 C160 145 160 170 180 170 C195 170 195 145 175 120 Z" fill="url(#aquamarine-gem)" stroke="#C4D7E0" stroke-width="2"/>
      <ellipse cx="178" cy="150" rx="6" ry="10" fill="#FFFFFF" opacity="0.6"/>
      <!-- Right Teardrop (Champagne Sapphire) -->
      <path d="M215 110 C195 140 200 170 225 168 C245 165 240 135 215 110 Z" fill="url(#champagne-gem)" stroke="#D6A77A" stroke-width="2"/>
      <ellipse cx="218" cy="142" rx="7" ry="12" fill="#FFFDF8" opacity="0.55"/>
      <!-- Diamond Halos around both -->
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
      <ellipse cx="200" cy="315" rx="90" ry="15" fill="#D3C7AB" opacity="0.45" filter="blur(8px)" />
      <!-- Solid Bold Yellow Gold Band -->
      <path d="M120 230 C120 295 280 295 280 230 C280 165 240 135 200 135 C160 135 120 165 120 230 Z" 
            stroke="url(#yellow-gold-grad)" stroke-width="22" stroke-linecap="round" fill="none" />
      <!-- Channel Setting Baguette Diamonds Row -->
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
      <ellipse cx="200" cy="320" rx="90" ry="16" fill="#CEB5A8" opacity="0.45" filter="blur(8px)" />
      <!-- Band -->
      <path d="M125 235 C125 300 275 300 275 235 C275 180 240 150 200 150 C160 150 125 180 125 235 Z" 
            stroke="url(#rose-gold-dome)" stroke-width="20" stroke-linecap="round" fill="none" />
      <!-- Dome Silhouette with Floral Diamond Pave Lattice -->
      <path d="M145 175 Q200 100 255 175 Q200 160 145 175 Z" fill="url(#rose-gold-dome)" stroke="#D89274" stroke-width="2"/>
      <!-- Flower Motifs with Diamonds -->
      <g fill="#FFFFFF" stroke="#D89274" stroke-width="0.8">
        <circle cx="200" cy="130" r="4.5" />
        <circle cx="193" cy="126" r="3" />
        <circle cx="207" cy="126" r="3" />
        <circle cx="193" cy="136" r="3" />
        <circle cx="207" cy="136" r="3" />
        <!-- Flanking Petals -->
        <circle cx="178" cy="142" r="3.5" />
        <circle cx="170" cy="140" r="2.8" />
        <circle cx="184" cy="148" r="2.8" />
        <circle cx="222" cy="142" r="3.5" />
        <circle cx="216" cy="148" r="2.8" />
        <circle cx="230" cy="140" r="2.8" />
        <!-- Bottom Row -->
        <circle cx="160" cy="160" r="3" />
        <circle cx="175" cy="162" r="3" />
        <circle cx="190" cy="155" r="3.5" />
        <circle cx="210" cy="155" r="3.5" />
        <circle cx="225" cy="162" r="3" />
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
      <ellipse cx="200" cy="315" rx="88" ry="16" fill="#C8C4B8" opacity="0.4" filter="blur(8px)" />
      <!-- Intertwining Three Bands -->
      <!-- Band 1: White Gold with Pavé -->
      <path d="M125 230 Q125 150 200 135 Q275 150 275 230 Q275 295 200 295 Q125 295 125 230 Z" 
            stroke="url(#tw-white)" stroke-width="12" fill="none"/>
      <!-- Band 2: Yellow Gold Smooth Polished Ribbon -->
      <path d="M135 210 Q145 130 215 150 Q285 170 265 245 Q245 305 185 285 Q125 265 135 210 Z" 
            stroke="url(#tw-gold)" stroke-width="11" fill="none"/>
      <!-- Band 3: White Gold Ribbon Cross Over -->
      <path d="M140 245 Q160 170 230 135 Q290 150 260 220 Q230 290 160 280 Q120 270 140 245 Z" 
            stroke="url(#tw-white)" stroke-width="10" fill="none"/>
      <!-- Sparkle accents -->
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
      <ellipse cx="200" cy="320" rx="90" ry="16" fill="#D3C4A3" opacity="0.45" filter="blur(8px)" />
      <!-- Band -->
      <path d="M120 235 C120 300 280 300 280 235 C280 180 240 145 200 145 C160 145 120 180 120 235 Z" 
            stroke="url(#honey-gold)" stroke-width="22" stroke-linecap="round" fill="none" />
      <!-- Honeycomb Lattice Crown -->
      <ellipse cx="200" cy="155" rx="55" ry="32" fill="url(#honey-gold)" stroke="#8A6417" stroke-width="1.5" />
      <!-- Filigree Petals & Starburst Diamonds -->
      <g fill="#FFFFFF" stroke="#8A6417" stroke-width="1">
        <polygon points="200,135 206,146 218,148 209,156 212,168 200,162 188,168 191,156 182,148 194,146" fill="#FFFFFF" />
        <circle cx="200" cy="152" r="3.5" fill="#FFEAA8" />
        <circle cx="170" cy="155" r="3.5" fill="#FFFFFF" />
        <circle cx="230" cy="155" r="3.5" fill="#FFFFFF" />
        <circle cx="185" cy="140" r="3" fill="#FFFFFF" />
        <circle cx="215" cy="140" r="3" fill="#FFFFFF" />
        <circle cx="185" cy="168" r="3" fill="#FFFFFF" />
        <circle cx="215" cy="168" r="3" fill="#FFFFFF" />
      </g>
    </svg>
  `
};
