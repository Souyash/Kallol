# KALLOL Haute Joaillerie & Fine Jewelry

A luxury multi-page e-commerce website designed and developed for **Kallol**, strictly following the luxury template design and integrated with the official **Razorpay Payment Gateway**.

---

## 🏛️ Multi-Page Architecture

| Page | File | Purpose |
| :--- | :--- | :--- |
| **Home** | [`index.html`](file:///Users/souyashbiswas/Desktop/Kallol/index.html) | Brand hero banner, best-selling rings grid, necklace spotlight, and specifications accordion. |
| **Shop** | [`shop.html`](file:///Users/souyashbiswas/Desktop/Kallol/shop.html) | Full atelier catalog with live inventory counters, category pills, metal filtering, and dynamic sorting. |
| **About Us** | [`about.html`](file:///Users/souyashbiswas/Desktop/Kallol/about.html) | Heritage, ethical diamond commitments, master goldsmith standards, and international showroom addresses. |
| **News** | [`news.html`](file:///Users/souyashbiswas/Desktop/Kallol/news.html) | The Kallol Journal featuring editorial stories, gemstone cutting guides, and jewelry care protocols. |
| **Contact** | [`contact.html`](file:///Users/souyashbiswas/Desktop/Kallol/contact.html) | Atelier concierge, private showroom appointment bookings, and direct client assistance. |
| **Quick View** | [`product.html`](file:///Users/souyashbiswas/Desktop/Kallol/product.html) | Dedicated dynamic product detail page with viewpoint gallery, ring size picker, metal swatches, and specs. |
| **Checkout** | [`checkout.html`](file:///Users/souyashbiswas/Desktop/Kallol/checkout.html) | Secure Checkout integrated with **Razorpay Standard Gateway** (UPI, QR, Cards, NetBanking, EMI) and invoicing. |

---

## 💳 Real Razorpay Payment Gateway Integration

The checkout system is integrated with the official **Razorpay Checkout SDK** (`https://checkout.razorpay.com/v1/checkout.js`):

1. **Payment Methods Supported via Razorpay**:
   - **UPI**: Instant QR Code, Google Pay, PhonePe, Paytm, BHIM.
   - **Cards**: All domestic & international Credit/Debit Cards (Visa, MasterCard, RuPay, Maestro, Amex).
   - **NetBanking**: Direct netbanking across 50+ banks (HDFC, ICICI, SBI, Axis, Kotak, etc.).
   - **Wallets & EMI**: Mobikwik, Airtel Money, and cardless/card EMI options.

2. **Currency & Conversion**:
   - Automatically converts cart total to Indian Rupees (INR ₹) at the standard rate (`1 USD = ₹85`) so all Indian Razorpay merchant keys operate seamlessly without requiring international currency activation.
   - Transparently displays both USD and INR totals before checkout.

3. **Live Key Configured**:
   - Pre-configured with your official Razorpay Live Key (`rzp_live_U20LEX1goVWtO2`).
   - All completed transactions will instantly appear in real-time in your [Razorpay Dashboard](https://dashboard.razorpay.com/) under **Payments** & **Transactions**.

4. **Official Invoice & Payment Verification**:
   - Upon successful transaction, Razorpay returns a verified `razorpay_payment_id` (e.g. `pay_xxxxxxxxxxxxxx`).
   - The invoice screen immediately renders the payment ID, marks the transaction as certified, decrements stock from inventory, and offers a **"Print Official Invoice"** action.

---

## 🚀 How to View and Test

Open [`checkout.html`](file:///Users/souyashbiswas/Desktop/Kallol/checkout.html) or [`index.html`](file:///Users/souyashbiswas/Desktop/Kallol/index.html) in your browser:

```bash
cd /Users/souyashbiswas/Desktop/Kallol
python3 -m http.server 8000
```
Then visit:
- **Storefront**: `http://localhost:8000/index.html`
- **Shop Catalog**: `http://localhost:8000/shop.html`
- **Razorpay Checkout**: `http://localhost:8000/checkout.html`
