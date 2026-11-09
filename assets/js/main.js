/* ============================================================
   Wadi Clay — main script
   Settings live in assets/js/config.js, products in products.js.
   Arabic copy lives in index.html (the page's source language);
   I18N.en holds the English version of every [data-i18n] text.
   ============================================================ */

const CONFIG = Object.assign({ whatsapp: "", instagram: "#", facebook: "#", supabaseUrl: "", supabaseAnonKey: "" }, window.SITE_CONFIG || {});
CONFIG.currency = { ar: "د.أ", en: "JOD" };

/* ---------- Translations ---------- */
const I18N = {
  ar: {
    "cart.quick": "أضف للطلب +",
    "cart.empty": "سلّتك فارغة — اختر فخارتك من المجموعة.", "cart.remove": "إزالة",
    "cart.added": "أُضيفت إلى طلبك ✓", "cart.needItems": "أضف قطعة واحدة على الأقل",
    "stock.out": "نفد من المخزون", "stock.outBtn": "غير متوفر حالياً", "cart.add": "أضف إلى الطلب",
    "gift.label": "الهدية", "gift.title": "الهدية", "p.price": "السعر", "p.cur": "دينار", "p.gift": "الهدية", "photo.soon": "الصورة قريباً",
    "wa.hello": "مرحباً وادي كلاي 👋", "wa.order": "أرغب بطلب:",
    "wa.total": "المجموع", "wa.name": "الاسم", "wa.city": "العنوان", "wa.pay": "الدفع عند الاستلام",
    "wa.general": "مرحباً وادي كلاي 👋 حابب أستفسر عن منتجاتكم.",
    "wa.engrave": "مرحباً وادي كلاي 👋 حابب أعرف تفاصيل وأسعار خدمة الحفر بالليزر على الفخارة.",
    "menu": "القائمة", "cartLabel": "سلة الطلب",
    "title": "وادي كلاي | فخار صحي لتبريد وتنقية الماء في الأردن — Wadi Clay"
  },
  en: {
    "brand": "Wadi Clay",
    "nav.why": "Why Wadi Clay", "nav.collection": "Collection", "nav.benefits": "Benefits", "nav.how": "How it works", "nav.guide": "Care & FAQ", "nav.contact": "Contact",
    "hero.eyebrow": "Healthy, handmade clay",
    "hero.t1": "Crafted by nature,", "hero.t2": "for purer,", "hero.t3": "cooler water",
    "hero.lead": "Innovation in clay-making, with distinctive properties that elevate the way you drink water — pure Spanish terracotta, shaped by hand and fired at 900°C, for a healthier experience in every sip.",
    "hero.shop": "Browse the collection", "hero.lead2": "Pure Spanish terracotta, shaped by hand and fired at 900°C — cooler, purer water with no electricity and no plastic.", "feat.label": "Most ordered", "feat.order": "Order now", "feat.badge": "Handmade", "best.eyebrow": "Our customers' picks", "best.title": "Bestsellers", "best.all": "All products", "hero.story": "Why Wadi Clay?", "hero.cap": "Ghaith — 15 L", "hero.scroll": "Scroll",
    "trust.1": "Cash on delivery", "trust.2": "Free delivery within 24 hours", "trust.3": "100% golden guarantee",
    "marquee": "Spanish terracotta ✦ Handmade with care ✦ Fired at 900°C ✦ Natural cooling, no electricity ✦ Alkaline, oxygen-rich water ✦ Plastic-free ✦ Crafted by Nature ✦",

    "why.eyebrow": "Why Wadi Clay?", "why.title": "More than pottery… an identity made to last.",
    "why.p": "From the purity of Spanish terracotta clay to a specialised blend developed from long years of expertise in water science, Wadi Clay unites authentic materials, precise handcraft and care for the finest details — to give you a different, healthier experience in every sip.",
    "stat.fire": "Firing temperature", "stat.natural": "Handmade", "stat.gov": "Governorates we deliver to",

    "pil.eyebrow": "What sets us apart", "pil.title": "Five pillars behind every Wadi Clay piece",
    "pil.1": "Spanish terracotta clay", "pil.1s": "A natural origin… quality built from the ground up.",
    "pil.1p": "Wadi Clay vessels are made from pure, natural Spanish terracotta, chosen for its natural porosity that cools water and for properties that let it be shaped and fired at high temperatures — authentic, durable and made for everyday use.",
    "pil.2": "A blend of selected materials", "pil.2s": "A studied harmony… for outstanding performance.",
    "pil.2p": "Our clay is enhanced with carefully selected materials in a specialised blend that combines precise composition with quality performance, giving the pottery its unique identity.",
    "pil.3": "Masterful handcraft", "pil.3s": "Every piece shaped with care… never a copy.",
    "pil.3p": "Each vessel goes through stages of precise hand-shaping and detailing, where craft skill meets attention to the smallest detail — so every piece leaves with its own character and finish.",
    "pil.4": "High-temperature electric firing", "pil.4s": "A precise technique… quality made with care.",
    "pil.4p": "We fire electrically at temperatures up to 900°C, using technology that allows precise control of the firing conditions for a cohesive, highly durable body. It is a clean, precisely controlled method that requires costly equipment and operation.",
    "pil.5": "Quality guarantee", "pil.5s": "Trust that starts in the workshop.",
    "pil.5p": "We follow strict manufacturing and quality-control standards, so your vessel arrives with quality materials and careful detail — backed by a guarantee covering quality, performance, filtration and cooling.",

    "col.eyebrow": "The collection", "col.title": "The Wadi Clay collection",
    "col.lead": "Essential designs, family sizes, offers and accessories — every vessel comes with its own accessories.",

    "eng.eyebrow": "A personal service", "eng.title": "Laser engraving", "eng.sub": "Personal details that immortalise the finest meanings.",
    "eng.p1": "Give your vessel a personal touch by engraving the names, phrases and designs you choose, with precision in every detail. Whether for yourself or as a personalised gift, it stays a piece with special meaning and a lasting memory.",
    "eng.p2": "Discover examples of our laser-engraving work and personalise your vessel with a name or phrase that means something — a one-of-a-kind piece and an exceptional gift whose value lasts.",
    "eng.note": "Laser engraving is priced separately and added to the product price. Message us on WhatsApp for details and prices.",
    "eng.btn": "Ask about engraving on WhatsApp",

    "ben.eyebrow": "Exclusive benefits", "ben.title": "The exclusive benefits of Wadi Clay",
    "ben.lead": "Innovation in clay-making, with distinctive properties that elevate the way you drink water.",
    "ben.1": "Water purification", "ben.1p": "An integrated filtration system that purifies water of pollutants, impurities, heavy metals, gases and organic matter, improving its quality.",
    "ben.2": "Boosted alkalinity", "ben.2p": "An exclusive blend that raises the water's pH and enhances its alkaline nature, supporting general health and immunity.",
    "ben.3": "Double the natural oxygen", "ben.3p": "An innovative technique that doubles the natural dissolved oxygen in water, giving it distinctive properties.",
    "ben.4": "Balanced minerals and salts", "ben.4p": "A studied composition that balances the minerals and salts in water, enhancing its mineral profile.",
    "ben.5": "Antibacterial and antiviral", "ben.5p": "Carefully selected materials give Wadi Clay vessels antibacterial and antiviral properties.",
    "ben.6": "Natural cooling, no electricity", "ben.6p": "The natural porosity of clay cools water naturally, without electricity or refrigeration.",
    "ben.7": "Sustainability", "ben.7p": "Durable materials and fine craftsmanship make Wadi Clay a sustainable choice for repeated daily use, while reducing reliance on plastic bottles.",
    "ben.cta": "A healthy investment that lasts for years.", "ben.ctaBtn": "Choose your vessel",

    "how.eyebrow": "How it works", "how.title": "How Wadi Clay pottery works", "how.lead": "From the natural properties of clay to a healthier drinking experience",
    "how.1": "Natural filtration", "how.1p": "The fine pores in the clay body, together with the properties of the materials used, help filter water and reduce impurities.",
    "how.2": "Keeping water", "how.2p": "Water rests inside a carefully made vessel, ready for daily use, in a design that unites function and authenticity.",
    "how.3": "Evaporative cooling", "how.3p": "Natural porosity lets tiny amounts of water reach the outer surface, where it evaporates in the air — cooling the water inside naturally, with no electricity.",
    "how.4": "Natural material properties", "how.4p": "Wadi Clay relies on natural Spanish terracotta, carefully chosen for its physical properties and porous structure.",

    "guide.eyebrow": "Care", "guide.title": "Use and care instructions",
    "guide.1": "First use", "guide.1p": "Before the very first use only, rinse the vessel with water, then soak it in water for 3 hours.",
    "guide.2": "Daily use", "guide.2p": "We recommend filtered water, refreshed regularly.",
    "guide.3": "Cleaning and care", "guide.3p": "Wash with water only, avoiding detergents and chemicals. Never expose it to fire.",
    "guide.4": "Monthly cleaning", "guide.4p": "Once a month, soak the vessel in vinegar to remove build-up, then rinse well with water before using it again.",
    "faq.eyebrow": "Frequently asked questions",
    "faq.q1": "How is Wadi Clay different from traditional pottery?", "faq.a1": "Wadi Clay is made from natural Spanish terracotta and a special blend of carefully selected materials, shaped by hand and fired at up to 900°C with a refined finish. Traditional pottery has neither this composition nor the same advanced process.",
    "faq.q2": "What makes Wadi Clay's materials special?", "faq.a2": "We combine natural Spanish clay with selected materials in a studied composition, and take care over every detail of handcraft and finishing — for vessels that are high-quality, practical and distinctive.",
    "faq.q3": "How long does a Wadi Clay vessel last?", "faq.a3": "With correct use and by following the care and cleaning instructions, Wadi Clay vessels last a long time and keep their quality and performance.",
    "faq.q4": "Can I use filtered or unfiltered water?", "faq.a4": "Yes, both — but we recommend filtered water for the best experience.",
    "faq.q5": "How long does purification take?", "faq.a5": "Pre-filtered water needs about 20 minutes, while unfiltered water may need about two hours, depending on the water used.",

    "gu.eyebrow": "Our golden guarantee", "gu.title": "Your comfort and trust come first",
    "gu.p": "We guarantee performance and top quality — and your right to exchange or return is honoured instantly, no questions asked.",
    "gu.1": "100% guaranteed", "gu.2": "Instant exchange or return", "gu.3": "Cash on delivery", "gu.4": "Free delivery within 24 hours",

    "gal.eyebrow": "From the workshop", "gal.title": "Moments between clay and fire", "gal.ig": "Follow us on Instagram",
    "ct.eyebrow": "Order & contact", "ct.title": "Wadi Clay, closer to you.", "ct.lead": "To order or ask a question, reach us on any of these channels:",
    "ct.wa": "Message us on WhatsApp", "ct.phone": "Phone & WhatsApp", "ct.del": "Delivery",
    "ct.delv": "Free to every area of Jordan, within 24 hours of order confirmation", "ct.delx": "Exception: delivery for offer items is 2 JOD.",
    "ct.follow": "Follow us",
    "footer.made": "Made with love, from clay to heart.",
    "gift.title": "Included accessories",
    "cart.add": "Add to order", "cart.quick": "Add to order +", "cart.title": "Your order",
    "cart.name": "Name", "cart.city": "City / address", "cart.total": "Total",
    "cart.send": "Send order on WhatsApp",
    "cart.note": "WhatsApp will open with your order ready to send; we'll reply to confirm delivery. Cash on delivery.",
    "cart.empty": "Your order is empty — pick a piece from the collection.", "cart.remove": "Remove",
    "cart.added": "Added to your order ✓", "cart.needItems": "Add at least one piece",
    "stock.out": "Out of stock", "stock.outBtn": "Currently unavailable", "gift.label": "Gift", "gift.title": "Gift", "p.price": "Price", "p.cur": "JOD", "p.gift": "Gift", "photo.soon": "Photo coming soon",
    "wa.hello": "Hello Wadi Clay 👋", "wa.order": "I'd like to order:",
    "wa.total": "Total", "wa.name": "Name", "wa.city": "Address", "wa.pay": "Cash on delivery",
    "wa.general": "Hello Wadi Clay 👋 I'd like to ask about your products.",
    "wa.engrave": "Hello Wadi Clay 👋 I'd like details and prices for laser engraving on a vessel.",
    "menu": "Menu", "cartLabel": "Order basket",
    "title": "Wadi Clay | Healthy Clay Water Vessels in Jordan — وادي كلاي"
  }
};

/* ---------- Small helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage unavailable */ } }
};
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

let lang = store.get("wadi-lang", "ar") === "en" ? "en" : "ar";
const t = k => (I18N[lang][k] ?? I18N.ar[k] ?? I18N.en[k] ?? k);
const fmt = n => (Number.isInteger(n) ? String(n) : n.toFixed(2));
const money = n => lang === "ar" ? `${fmt(n)} ${CONFIG.currency.ar}` : `${CONFIG.currency.en} ${fmt(n)}`;

/* ============================================================
   Pottery illustrations (stand-ins until a product has a photo)
   ============================================================ */
const GLAZES = {
  terracotta: { base: "#B5552B", light: "#E09A70", dark: "#6E2E12", pat: "#F3E2CB" },
  sand:       { base: "#D9C3A5", light: "#F4EBDD", dark: "#9C8261", pat: "#9A4524" },
  olive:      { base: "#6F7A4B", light: "#A5AE7A", dark: "#3F4626", pat: "#EFE4CF" },
  cream:      { base: "#EFE6D8", light: "#FFFCF6", dark: "#BFAE93", pat: "#B5552B" },
  indigo:     { base: "#2F4A6B", light: "#5F7FA6", dark: "#172638", pat: "#F1E6D6" },
  charcoal:   { base: "#3A302A", light: "#66584D", dark: "#17120F", pat: "#C9A46A" }
};

const SHAPES = {
  zeer: {
    body: "M70 18h60v12q-4 4 0 8 40 18 42 72 2 50-32 80H60q-34-30-32-80 2-54 42-72 4-4 0-8z",
    front: '<path d="M60 190h80l10 30H50z" fill="DARK"/><path d="M50 220h100v6H50z" fill="DARK" opacity=".7"/>' +
           '<rect x="140" y="146" width="24" height="9" rx="3" fill="#C9A04A"/><rect x="155" y="152" width="7" height="13" rx="2" fill="#9C7A33"/>',
    rim: [100, 18, 30, 5], bands: [74, 118]
  },
  bottle: {
    body: "M64 44h72l-6 164q-1 14-15 14H85q-14 0-15-14z",
    back: '<path d="M134 72q34 0 34 40t-34 40" />',
    front: '<rect x="60" y="28" width="80" height="20" rx="7" fill="DARK"/><rect x="88" y="16" width="24" height="14" rx="5" fill="DARK"/>',
    bands: [96, 150]
  },
  amphora: {
    body: "M80 22h40v10q-5 3-5 10 0 8 8 12 44 18 47 70 3 56-36 94H66q-39-38-36-94 3-52 47-70 8-4 8-12 0-7-5-10z",
    back: '<path d="M86 56q-34-2-32 44" /><path d="M114 56q34-2 32 44" />',
    rim: [100, 22, 20, 4], bands: [104, 150]
  },
  vase: {
    body: "M88 20h24v8q-4 3-4 12 0 30 26 62 24 30 22 70-2 36-26 50H70q-24-14-26-50-2-40 22-70 26-32 26-62 0-9-4-12z",
    rim: [100, 20, 12, 3], bands: [146, 182]
  },
  jar: {
    body: "M70 30h60v12q-4 4 0 8 44 20 46 80 2 60-40 92H64q-42-32-40-92 2-60 46-80 4-4 0-8z",
    rim: [100, 30, 30, 5], bands: [92, 136]
  },
  pitcher: {
    body: "M76 26h48q6 4 2 16 34 28 34 86 0 56-36 94H76q-36-38-36-94 0-58 34-86-4-12 2-16z",
    back: '<path d="M126 58q44 4 34 78" />',
    front: '<path d="M78 24 54 14l18 26z" fill="BASE"/>',
    rim: [100, 26, 24, 4], bands: [118, 160]
  },
  mug: {
    body: "M48 76h104v124q0 22-22 22H70q-22 0-22-22z",
    back: '<path d="M150 108q38 0 38 38t-38 38" />',
    rim: [100, 76, 52, 8], raw: true, bands: [124, 164]
  },
  bowl: {
    body: "M18 116h164q-4 66-62 96H80q-58-30-62-96z",
    front: '<path d="M80 210h40v12H80z" fill="DARK"/>',
    rim: [100, 116, 82, 15], inner: true, bands: [146, 172]
  },
  plate: { body: "M100 38a90 90 0 1 0 .1 0z", plate: true },
  lantern: {
    body: "M66 78q34-48 68 0v116q0 22-22 28H88q-22-6-22-28z",
    back: '<circle cx="100" cy="36" r="10" />',
    lantern: true
  },
  tagine: {
    body: "M30 168C70 156 92 118 96 52h8c4 66 26 104 66 116v6H30z",
    front: '<path d="M18 172h164q-6 38-44 48H62q-38-10-44-48z" fill="DARK"/><circle cx="100" cy="46" r="11" fill="BASE"/>',
    bands: [120, 146]
  }
};

let uid = 0;
function vessel(shape = "jar", glaze = "terracotta") {
  const s = SHAPES[shape] || SHAPES.jar;
  const g = GLAZES[glaze] || GLAZES.terracotta;
  const id = `v${++uid}`;

  let pattern = "";
  if (s.bands) {
    const [a, b] = s.bands;
    let zig = `M-40 ${a + 8}`;
    for (let x = -40, up = true; x <= 260; x += 10, up = !up) zig += ` L${x} ${up ? a + 2 : a + 14}`;
    pattern = `
      <g class="v-pat" stroke="${g.pat}" fill="none" stroke-width="2.2" opacity=".85">
        <path d="M-40 ${a - 6}H260M-40 ${a + 20}H260M-40 ${b}H260M-40 ${b + 5}H260" stroke-width="1.6"/>
        <path d="${zig}"/>
        ${Array.from({ length: 16 }, (_, i) => `<circle cx="${-40 + i * 20}" cy="${b + 18}" r="2.4" fill="${g.pat}" stroke="none"/>`).join("")}
      </g>`;
  }
  if (s.plate) {
    const petals = Array.from({ length: 12 }, (_, i) =>
      `<ellipse cx="100" cy="76" rx="9" ry="26" transform="rotate(${i * 30} 100 128)" />`).join("");
    pattern = `
      <circle cx="100" cy="128" r="74" fill="none" stroke="${g.pat}" stroke-width="1.5" opacity=".7"/>
      <circle cx="100" cy="128" r="80" fill="none" stroke="${g.pat}" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/>
      <g class="v-pat-rot" fill="${g.pat}" opacity=".9">${petals}</g>
      <circle cx="100" cy="128" r="18" fill="${g.base}" stroke="${g.pat}" stroke-width="3"/>
      <circle cx="100" cy="128" r="6" fill="${g.pat}"/>`;
  }
  if (s.lantern) {
    const holes = [];
    for (let r = 0; r < 5; r++) for (let c = 0; c < 4; c++) {
      const x = 76 + c * 16 + (r % 2 ? 8 : 0), y = 104 + r * 20;
      if (x < 128) holes.push(`<path d="M${x} ${y - 7}q6 7 0 14q-6-7 0-14z" fill="${g.dark}"/><circle cx="${x}" cy="${y + 1}" r="2" class="v-glow" fill="#F6C36A"/>`);
    }
    pattern = `<g>${holes.join("")}</g>`;
  }

  const rim = s.rim ? `
    <ellipse cx="${s.rim[0]}" cy="${s.rim[1]}" rx="${s.rim[2]}" ry="${s.rim[3]}" fill="${s.raw ? "#E9D2B4" : g.light}"/>
    <ellipse cx="${s.rim[0]}" cy="${s.rim[1] + (s.inner ? 2 : 1)}" rx="${s.rim[2] * (s.inner ? .9 : .75)}" ry="${s.rim[3] * (s.inner ? .75 : .6)}" fill="${g.dark}"/>` : "";
  const rawBand = s.raw ? `<rect x="0" y="${s.rim[1]}" width="200" height="16" fill="#E9D2B4"/>` : "";

  return `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
    <defs>
      <linearGradient id="${id}s" x1="0" x2="1">
        <stop offset="0" stop-color="#000" stop-opacity=".42"/>
        <stop offset=".3" stop-color="#000" stop-opacity="0"/>
        <stop offset=".42" stop-color="#fff" stop-opacity=".28"/>
        <stop offset=".55" stop-color="#fff" stop-opacity="0"/>
        <stop offset="1" stop-color="#000" stop-opacity=".5"/>
      </linearGradient>
      <clipPath id="${id}c"><path d="${s.body}"/></clipPath>
    </defs>
    <g fill="none" stroke="${g.dark}" stroke-width="9" stroke-linecap="round">${s.back || ""}</g>
    <path d="${s.body}" fill="${g.base}"/>
    <g clip-path="url(#${id}c)">
      ${rawBand}
      ${pattern}
      <rect width="200" height="240" fill="url(#${id}s)"/>
    </g>
    ${(s.front || "").replace(/BASE/g, g.base).replace(/DARK/g, g.dark)}
    ${rim}
  </svg>`;
}

/* Line art for the five pillars */
const LINE = 'fill="none" stroke="#B5652F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
const STEP_ART = {
  clay: `<svg viewBox="0 0 200 160" ${LINE}><path d="M30 130q20-70 70-74 50 4 70 74z"/><path d="M58 104q22-10 42-4M96 84q20-6 34 6" opacity=".55"/><path d="M20 140h160" stroke="#C29A5B"/><circle cx="150" cy="40" r="4" fill="#C29A5B" stroke="none"/><circle cx="40" cy="60" r="2.5" fill="#C29A5B" stroke="none"/></svg>`,
  blend: `<svg viewBox="0 0 200 160" ${LINE}><circle cx="78" cy="78" r="34"/><circle cx="122" cy="78" r="34"/><circle cx="100" cy="112" r="34" stroke="#C29A5B"/><path class="spin" d="M100 92m-8 0a8 8 0 1 0 16 0a8 8 0 1 0-16 0" fill="#C29A5B" stroke="none"/></svg>`,
  wheel: `<svg viewBox="0 0 200 160" ${LINE}><ellipse cx="100" cy="128" rx="80" ry="16"/><path d="M76 120q-8-30 12-44 0-14-6-20h36q-6 6-6 20 20 14 12 44z"/><path d="M40 70q16 6 22 22M160 70q-16 6-22 22" stroke-dasharray="3 6" stroke="#C29A5B"/><path class="spin" d="M100 128m-50 0a50 10 0 1 0 100 0" stroke-dasharray="4 8" stroke="#C29A5B"/></svg>`,
  fire: `<svg viewBox="0 0 200 160" ${LINE}><rect x="50" y="40" width="100" height="100" rx="6"/><rect x="66" y="56" width="68" height="62" rx="3" stroke="#C29A5B"/><path class="flame" d="M100 112c-14-5-15-19-5-29 0 8 5 10 7 7 3-7 0-14-4-19 16 7 21 26 9 41" fill="rgba(181,101,47,.16)"/><path d="M70 128h18M112 128h18"/><text x="100" y="34" text-anchor="middle" font-size="13" fill="#C29A5B" stroke="none" font-family="Cormorant Garamond,serif">900°</text></svg>`,
  quality: `<svg viewBox="0 0 200 160" ${LINE}><path d="M100 22 60 38v34c0 30 18 50 40 60 22-10 40-30 40-60V38z"/><path d="m82 78 12 12 24-26" stroke="#C29A5B" stroke-width="2"/><circle class="rays" cx="100" cy="80" r="70" stroke-dasharray="2 9" stroke="#C29A5B" opacity=".6"/></svg>`
};

/* Icons for the benefits */
const ICO = 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
const BEN_ICONS = {
  filter: `<svg viewBox="0 0 64 64" ${ICO}><path d="M8 12h48L38 34v16l-12 6V34z"/><path d="M20 20h24" opacity=".5"/></svg>`,
  ph: `<svg viewBox="0 0 64 64" ${ICO}><path d="M32 6C22 22 14 31 14 40a18 18 0 0 0 36 0c0-9-8-18-18-34z"/><text x="32" y="46" text-anchor="middle" font-size="13" font-family="Manrope,sans-serif" fill="currentColor" stroke="none" font-weight="600">pH</text></svg>`,
  oxygen: `<svg viewBox="0 0 64 64" ${ICO}><circle cx="24" cy="38" r="14"/><circle cx="44" cy="20" r="8"/><circle cx="48" cy="44" r="5"/><text x="24" y="43" text-anchor="middle" font-size="13" font-family="Manrope,sans-serif" fill="currentColor" stroke="none" font-weight="600">O₂</text></svg>`,
  balance: `<svg viewBox="0 0 64 64" ${ICO}><path d="M32 8v48M18 56h28M12 18h40"/><path d="M12 18 4 34a8 8 0 0 0 16 0zM52 18l-8 16a8 8 0 0 0 16 0z"/></svg>`,
  shield: `<svg viewBox="0 0 64 64" ${ICO}><path d="M32 6 10 14v16c0 14 9.5 24 22 28 12.5-4 22-14 22-28V14z"/><path d="m22 32 7 7 13-14"/></svg>`,
  cool: `<svg viewBox="0 0 64 64" ${ICO}><path d="M32 6v52M10 19l44 26M54 19 10 45"/><path d="M26 10l6 6 6-6M26 54l6-6 6 6M10 27l8-2-2-8M54 37l-8 2 2 8M54 27l-8-2 2-8M10 37l8 2-2 8"/></svg>`,
  leaf: `<svg viewBox="0 0 64 64" ${ICO}><path d="M12 52C12 24 30 10 54 10c0 26-16 42-42 42z"/><path d="M12 52 38 26"/></svg>`
};

/* Gem leaves from the emblem (hero + intro sparkle) */
const GEM_COLORS = ["#2F6B4A", "#C98A2B", "#9C3B22", "#D8B56A", "#7A5A3A", "#3E8A5E", "#E0A040"];
const gemSVG = c => `<svg viewBox="0 0 20 36"><defs><linearGradient id="g${c.slice(1)}" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset=".35" stop-color="${c}"/><stop offset="1" stop-color="${c}" stop-opacity=".85"/></linearGradient></defs><path d="M10 0C17 9 17 27 10 36 3 27 3 9 10 0Z" fill="url(#g${c.slice(1)})"/><path d="M10 0v36M4 12l6 6 6-6" stroke="#fff" stroke-opacity=".35" stroke-width=".7" fill="none"/></svg>`;

/* ============================================================
   Products: Supabase (admin panel) with a local fallback
   ============================================================ */
let activeCat = "all";
const SHAPE_BY_CAT = { family: "zeer", lifestyle: "bottle", personal: "vase", offers: "bottle", accessories: "mug" };

// field in the current language, falling back to Arabic
const L = (p, f) => (p[`${f}_${lang}`] || p[`${f}_ar`] || "");
const safeUrl = u => (typeof u === "string" && /^(https:\/\/|assets\/)/.test(u) ? u : "");
const hasSale = p => Number(p.old_price) > Number(p.price);

function normalise(p) {
  // a photo uploaded from the admin panel (https) wins; otherwise the product's own photo set
  const st = window.productStyle ? window.productStyle(p) : { gallery: [] };
  const own = safeUrl(p.image_url || p.img || "");
  const uploaded = /^https:/.test(own) ? own : "";
  const set = st.gallery || [];
  const gallery = uploaded ? [uploaded, ...set] : set.length ? set : own ? [own] : [];
  return {
    ...p,
    id: String(p.id),
    price: Number(p.price) || 0,
    old_price: Number(p.old_price) || 0,
    in_stock: p.in_stock !== false,
    image_url: gallery[0] || "",
    gallery,
    color: st.color || "#4A2E1F",
    wall: st.wall || "#E5D4BC",
    shape: p.shape || SHAPE_BY_CAT[p.category] || "jar",
    glaze: p.glaze || "terracotta"
  };
}

let PRODUCT_LIST = (window.PRODUCTS || []).map(normalise);

async function loadProducts() {
  if (CONFIG.useLocalProducts || !CONFIG.supabaseUrl || !CONFIG.supabaseAnonKey) return false;
  try {
    const url = `${CONFIG.supabaseUrl.replace(/\/$/, "")}/rest/v1/products?select=*&is_active=eq.true&order=sort_order.asc,created_at.desc`;
    const res = await fetch(url, { headers: { apikey: CONFIG.supabaseAnonKey, Authorization: `Bearer ${CONFIG.supabaseAnonKey}` } });
    if (!res.ok) throw new Error(res.status);
    const rows = await res.json();
    if (!Array.isArray(rows) || !rows.length) return false;
    PRODUCT_LIST = rows.map(normalise);
    return true;
  } catch (err) {
    console.warn("Products: using local list —", err);
    return false;
  }
}

/* ============================================================
   Rendering
   ============================================================ */
const groupsInUse = () => CATEGORIES.filter(c => c.id !== "all" && PRODUCT_LIST.some(p => p.category === c.id));

function renderFilters() {
  const cats = [CATEGORIES[0], ...groupsInUse()];
  $("#filters").innerHTML = cats.map(c =>
    `<button class="filter ${c.id === activeCat ? "is-active" : ""}" data-cat="${c.id}" role="tab" aria-selected="${c.id === activeCat}">${esc(c[lang])}</button>`
  ).join("");
}

function productArt(p) {
  return p.image_url
    ? `<img src="${esc(p.image_url)}" alt="${esc(L(p, "name"))} — وادي كلاي" loading="lazy">`
    : `<div class="card__ph">${vessel(p.shape, p.glaze)}<small>${t("photo.soon")}</small></div>`;
}

function priceHTML(p) {
  return hasSale(p)
    ? `<span class="price"><s>${money(p.old_price)}</s> ${money(p.price)}</span>`
    : `<span class="price">${money(p.price)}</span>`;
}

/* poster-style text: "Name - capacity", diamond divider, price pill, gift pill */
const ICON_TAG = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.4"/><path d="m9 16 5-6"/></svg>`;
const ICON_GIFT = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="9" width="18" height="12" rx="1.5"/><path d="M3 13h18M12 9v12M12 9C10 5 6 5 7 8c.6 1.6 5 1 5 1s4.4.6 5-1c1-3-3-3-5 1"/></svg>`;
const fmtNum = n => (Number.isInteger(n) ? String(n) : n.toFixed(2));
function posterText(p) {
  const cap = L(p, "capacity"), gifts = L(p, "gifts");
  const price = hasSale(p) ? `<s>${fmtNum(p.old_price)}</s> <b>${fmtNum(p.price)}</b>` : `<b>${fmtNum(p.price)}</b>`;
  return `
    <div class="ptext">
      <h3 class="ptext__title">${esc(L(p, "name"))}${cap ? ` <em>-</em> <b>${esc(cap)}</b>` : ""}</h3>
      <div class="ptext__divider" aria-hidden="true"><i></i><span>✦</span><i></i></div>
      <p class="ptext__row"><span class="ptext__ico">${ICON_TAG}</span><span class="ptext__val">${t("p.price")}: ${price} ${t("p.cur")}</span></p>
      ${gifts ? `<p class="ptext__row"><span class="ptext__ico">${ICON_GIFT}</span><span class="ptext__val">${t("p.gift")}: ${esc(gifts)}</span></p>` : ""}
    </div>`;
}

function cardHTML(p) {
  return `
    <article class="pcard ${p.in_stock ? "" : "is-out"} ${activeCat !== "all" && activeCat !== p.category ? "is-hidden" : ""}" data-id="${esc(p.id)}" data-cat="${esc(p.category)}" tabindex="0" aria-label="${esc(L(p, "name"))}" style="--pc:${esc(p.color)};--pw:${esc(p.wall)}">
      ${posterText(p)}
      <div class="pcard__media">${productArt(p)}</div>
      ${p.in_stock ? `<button class="pcard__add" type="button" data-add="${esc(p.id)}">${t("cart.add")}</button>` : `<span class="pcard__out">${t("stock.out")}</span>`}
    </article>`;
}

/* The whole range as one gallery of small posters, in the posters' order */
function renderGrid() {
  $("#grid").innerHTML = `<div class="grid grid--posters">${PRODUCT_LIST.map(cardHTML).join("")}</div>`;
}

/* Structured data (schema.org) so Google understands the store and its products.
   Built from the live product list, with absolute URLs for the current domain. */
function updateSchema() {
  // always the canonical domain, even when opened from a preview URL
  const home = document.querySelector('link[rel="canonical"]')?.href || new URL("./", location.href).href;
  const abs = u => (u ? new URL(u, home).href : undefined);
  const store = {
    "@type": "Store", "@id": home + "#store", name: "Wadi Clay", alternateName: "وادي كلاي",
    description: "فخاريات ماء مصنوعة يدوياً من طين التيراكوتا الإسباني وتوليفة خامات مختارة — تنقية وتبريد طبيعي للماء.",
    url: home, logo: abs("assets/img/logo.png"), image: abs("assets/img/og-image.jpg"),
    telephone: "+" + CONFIG.whatsapp, priceRange: "JOD 18 - 99",
    paymentAccepted: "Cash on delivery", currenciesAccepted: "JOD",
    address: { "@type": "PostalAddress", addressCountry: "JO" },
    areaServed: { "@type": "Country", name: "Jordan" },
    sameAs: [CONFIG.instagram, CONFIG.facebook].filter(u => /^https:/.test(u))
  };
  const list = {
    "@type": "ItemList", name: "منتجات وادي كلاي",
    itemListElement: PRODUCT_LIST.map((p, i) => ({
      "@type": "ListItem", position: i + 1,
      item: {
        "@type": "Product", name: `${p.name_ar}${p.capacity_ar ? " " + p.capacity_ar : ""} — ${p.name_en || "Wadi Clay"}`,
        description: p.desc_ar || undefined, image: abs(p.image_url) || undefined,
        brand: { "@type": "Brand", name: "Wadi Clay" }, category: "Clay water vessels",
        offers: {
          "@type": "Offer", price: p.price.toFixed(2), priceCurrency: "JOD",
          availability: p.in_stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          seller: { "@id": home + "#store" }
        }
      }
    }))
  };
  let el = document.getElementById("schemaData");
  if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = "schemaData"; document.head.appendChild(el); }
  el.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": [store, list] });
}

const IMG = n => `assets/img/products/${n}.jpg`;
function renderStatic() {
  $$(".step__art").forEach(el => { el.innerHTML = STEP_ART[el.dataset.art] || ""; });
  $$(".benefit__ico").forEach(el => { el.innerHTML = BEN_ICONS[el.dataset.ico] || ""; });

  // floating gem leaves around the hero visual
  const spots = [[6, 22, 16, -18, 1.1], [14, 64, 11, 24, .7], [91, 26, 14, 12, 1.4], [84, 70, 18, -30, 1.8], [24, 12, 9, 40, .9], [4, 84, 10, 8, 1.3], [74, 12, 10, -8, .6], [95, 52, 8, 30, .5]];
  if ($("#heroGems")) $("#heroGems").innerHTML = spots.map(([x, y, s, r, depth], i) =>
    `<span class="gem" data-depth="${depth}" style="left:${x}%;top:${y}%;--s:${s}px;--r:${r}deg;--d:${4 + (i % 3)}s;--dl:-${i * .7}s">${gemSVG(GEM_COLORS[i % GEM_COLORS.length])}</span>`).join("");

  const gallery = [["wc-mood-2", "ماء بارد يُسكب من زير غيث في كوب فخار"], ["wc-qarora-2", "مضخة القارورة العائلية الذكية"], ["wc-irwa-premium-1", "إرواء بريميوم"], ["wc-mood-4", "زير غيث يتعرّق — تبريد طبيعي"], ["wc-engrave-2", "حفر بالليزر على الفخار"], ["wc-riwaq-1", "رواق"], ["wc-mood-3", "غطاء زير غيث"], ["wc-cup-naqaa-1", "كوب نقاء"], ["wc-qarora-5", "شعار وادي كلاي محفور على القارورة"], ["wc-irwa-curvy-1", "إرواء كيرفي"], ["wc-ghaith-3", "حنفية الستانلس ستيل"], ["wc-naqaa-1", "نقاء"]];
  $("#masonry").innerHTML = gallery.map(([n, alt]) => `<figure><img src="${IMG(n)}" alt="${alt} — وادي كلاي" loading="lazy"></figure>`).join("");
}

/* ---------- Language ---------- */
function splitWords(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words.map(w => `<span class="w"><span class="wi">${esc(w)}</span></span>`).join(" ");
}

function applyLang() {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => {
    if (el.dataset.ar === undefined) el.dataset.ar = el.textContent.trim();   // Arabic source text from the HTML
    const key = el.dataset.i18n;
    el.textContent = lang === "ar" ? (I18N.ar[key] ?? el.dataset.ar) : (I18N.en[key] ?? el.dataset.ar);
    if (el.classList.contains("split")) splitWords(el);
  });
  $("#langBtn").textContent = lang === "ar" ? "EN" : "ع";
  $("#cartBtn").setAttribute("aria-label", t("cartLabel"));
  $("#menuBtn").setAttribute("aria-label", t("menu"));
  document.title = t("title");
  renderFilters();
  renderGrid();
  renderHero();
  renderCart();
}

/* ============================================================
   Order basket → WhatsApp
   ============================================================ */
let cart = store.get("wadi-cart", {});
const byId = id => PRODUCT_LIST.find(p => p.id === id);

function saveCart() { store.set("wadi-cart", cart); renderCart(); }

function addToCart(id, qty = 1) {
  const p = byId(id);
  if (!p || !p.in_stock) return;
  cart[id] = (cart[id] || 0) + qty;
  saveCart();
  toast(t("cart.added"));
  const btn = $("#cartBtn");
  btn.classList.remove("bump"); void btn.offsetWidth; btn.classList.add("bump");
}

const cartEntries = () => Object.entries(cart).filter(([id, q]) => byId(id) && q > 0);
function cartTotal() { return cartEntries().reduce((s, [id, q]) => s + byId(id).price * q, 0); }

function renderCart() {
  const entries = cartEntries();
  const count = entries.reduce((s, [, q]) => s + q, 0);
  const badge = $("#cartCount");
  badge.textContent = count;
  badge.classList.toggle("has-items", count > 0);

  $("#cartItems").innerHTML = entries.length ? entries.map(([id, q]) => {
    const p = byId(id);
    return `
      <div class="line-item">
        <div class="line-item__art">${productArt(p)}</div>
        <div>
          <h4>${esc(L(p, "name"))}</h4>
          <small class="line-item__cap">${esc(L(p, "capacity"))}</small>
          <div class="mini-qty"><button type="button" data-dec="${esc(id)}" aria-label="-">−</button><span>${q}</span><button type="button" data-inc="${esc(id)}" aria-label="+">+</button></div>
        </div>
        <div class="line-item__end">
          <span class="price">${money(round(p.price * q))}</span><br>
          <button type="button" class="line-item__remove" data-remove="${esc(id)}">${t("cart.remove")}</button>
        </div>
      </div>`;
  }).join("") : `<div class="drawer__empty">${vessel("vase", "sand")}<p>${t("cart.empty")}</p></div>`;
  $("#cartTotal").textContent = money(round(cartTotal()));
}

const round = n => Math.round(n * 100) / 100;
function waLink(text) { return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`; }

function sendOrder() {
  const entries = cartEntries();
  if (!entries.length) { toast(t("cart.needItems")); return; }
  const lines = entries.map(([id, q]) => {
    const p = byId(id), cap = L(p, "capacity");
    const gifts = L(p, "gifts");
    return `• ${L(p, "name")}${cap ? ` (${cap})` : ""} × ${q} — ${money(round(p.price * q))}${gifts ? `\n   🎁 ${gifts}` : ""}`;
  });
  const name = $("#custName").value.trim(), city = $("#custCity").value.trim();
  const msg = [
    t("wa.hello"), "", t("wa.order"), ...lines, "",
    `${t("wa.total")}: ${money(round(cartTotal()))} — ${t("wa.pay")}`,
    name ? `${t("wa.name")}: ${name}` : null,
    city ? `${t("wa.city")}: ${city}` : null
  ].filter(v => v !== null).join("\n");
  window.open(waLink(msg), "_blank", "noopener");
}

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("is-show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-show"), 2200);
}

/* ============================================================
   Modal + drawer
   ============================================================ */
let lenis = null;
let modalProduct = null, modalQty = 1, lastFocus = null;

function lockScroll(on) {
  document.body.classList.toggle("no-scroll", on);
  if (lenis) on ? lenis.stop() : lenis.start();
}

function openModal(id) {
  const p = byId(id); if (!p) return;
  modalProduct = p; modalQty = 1; lastFocus = document.activeElement;
  const media = $("#modalMedia");
  const alt = esc(L(p, "name"));
  media.innerHTML = p.gallery.length
    ? `<img class="modal__main" src="${esc(p.gallery[0])}" alt="${alt} — وادي كلاي">` +
      (p.gallery.length > 1 ? `<div class="modal__thumbs">${p.gallery.map((u, i) =>
        `<button type="button" class="${i ? "" : "is-active"}" data-shot="${esc(u)}" aria-label="${i + 1}"><img src="${esc(u)}" alt="" loading="lazy"></button>`).join("")}</div>` : "")
    : productArt(p);
  media.classList.toggle("has-photo", !!p.image_url);
  $$("[data-shot]", media).forEach(b => b.addEventListener("click", e => {
    e.stopPropagation();
    $(".modal__main", media).src = b.dataset.shot;
    $$("[data-shot]", media).forEach(x => x.classList.toggle("is-active", x === b));
  }));
  $("#modalCat").textContent = CATEGORIES.find(c => c.id === p.category)?.[lang] || "";
  $("#modalName").textContent = L(p, "name");
  $("#modalSize").textContent = L(p, "capacity");
  $("#modalDesc").textContent = L(p, "desc");
  $("#modalGifts").hidden = !L(p, "gifts");
  $("#modalGiftsText").textContent = L(p, "gifts");
  $("#modalPrice").innerHTML = hasSale(p) ? `<s>${money(p.old_price)}</s> ${money(p.price)}` : money(p.price);
  $("#qtyVal").textContent = modalQty;
  $("#modalQty").hidden = !p.in_stock;
  $("#modalAdd").disabled = !p.in_stock;
  $("#modalAdd span").textContent = p.in_stock ? t("cart.add") : t("stock.outBtn");
  $("#modal").classList.add("is-open");
  $("#modal").setAttribute("aria-hidden", "false");
  lockScroll(true);
  setTimeout(() => $("#modal .modal__close").focus(), 50);
}
function closeModal() {
  $("#modal").classList.remove("is-open");
  $("#modal").setAttribute("aria-hidden", "true");
  lockScroll(false);
  lastFocus?.focus?.();
}
function openDrawer() {
  lastFocus = document.activeElement;
  $("#drawer").classList.add("is-open");
  $("#drawer").setAttribute("aria-hidden", "false");
  lockScroll(true);
  setTimeout(() => $("#drawer .icon-btn").focus(), 50);
}
function closeDrawer() {
  $("#drawer").classList.remove("is-open");
  $("#drawer").setAttribute("aria-hidden", "true");
  lockScroll(false);
  lastFocus?.focus?.();
}

/* ============================================================
   Events
   ============================================================ */
function bindEvents() {
  document.addEventListener("click", e => {
    const add = e.target.closest("[data-add]");
    if (add) { e.stopPropagation(); addToCart(add.dataset.add); return; }
    const card = e.target.closest(".card, .pcard");
    if (card) { openModal(card.dataset.id); return; }

    const filter = e.target.closest(".filter");
    if (filter) {
      activeCat = filter.dataset.cat;
      renderFilters();
      $$("#grid .pcard").forEach(c => c.classList.toggle("is-hidden", activeCat !== "all" && c.dataset.cat !== activeCat));
      if (hasGSAP && !reduceMotion) gsap.fromTo("#grid .pcard:not(.is-hidden)", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .8, stagger: .05, ease: "expo.out" });
      if (hasGSAP) ScrollTrigger.refresh();
      return;
    }

    if (e.target.closest("[data-close]")) { closeModal(); return; }
    if (e.target.closest("[data-close-cart]")) { closeDrawer(); return; }
    const inc = e.target.closest("[data-inc]"); if (inc) { cart[inc.dataset.inc]++; saveCart(); return; }
    const dec = e.target.closest("[data-dec]");
    if (dec) { const id = dec.dataset.dec; cart[id]--; if (cart[id] <= 0) delete cart[id]; saveCart(); return; }
    const rm = e.target.closest("[data-remove]"); if (rm) { delete cart[rm.dataset.remove]; saveCart(); return; }

    const wa = e.target.closest(".js-wa, .js-wa-engrave");
    if (wa) { e.preventDefault(); window.open(waLink(t(wa.classList.contains("js-wa-engrave") ? "wa.engrave" : "wa.general")), "_blank", "noopener"); return; }

    const anchor = e.target.closest('a[href^="#"]');
    if (anchor && anchor.getAttribute("href").length > 1) {
      const target = $(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        closeMenu();
        lenis ? lenis.scrollTo(target, { offset: -60, duration: 1.4 }) : target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if ($("#modal").classList.contains("is-open")) closeModal();
      if ($("#drawer").classList.contains("is-open")) closeDrawer();
      closeMenu();
    }
    if (e.key === "Enter" && (e.target.classList?.contains("card") || e.target.classList?.contains("pcard"))) openModal(e.target.dataset.id);
  });

  $("#qtyPlus").addEventListener("click", () => { modalQty++; $("#qtyVal").textContent = modalQty; });
  $("#qtyMinus").addEventListener("click", () => { modalQty = Math.max(1, modalQty - 1); $("#qtyVal").textContent = modalQty; });
  $("#modalAdd").addEventListener("click", () => { if (!modalProduct) return; addToCart(modalProduct.id, modalQty); closeModal(); });
  $("#cartBtn").addEventListener("click", openDrawer);
  $("#sendOrder").addEventListener("click", sendOrder);

  $("#langBtn").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    store.set("wadi-lang", lang);
    applyLang();
    if (hasGSAP) { buildProcessScroll(); animateCards(); ScrollTrigger.refresh(); }
  });

  $("#menuBtn").addEventListener("click", () => {
    const open = $("#menuBtn").getAttribute("aria-expanded") !== "true";
    $("#menuBtn").setAttribute("aria-expanded", open);
    $("#nav").classList.toggle("is-open", open);
    lockScroll(open);
  });

  $$(".js-ig").forEach(a => { a.href = CONFIG.instagram; });
  $$(".js-fb").forEach(a => { a.href = CONFIG.facebook; });

  // Header: glassy after scroll, hides on scroll down
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    $("#header").classList.toggle("is-scrolled", y > 40);
    $("#header").classList.toggle("is-hidden", y > 400 && y > lastY && !$("#nav").classList.contains("is-open"));
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function closeMenu() {
  if ($("#menuBtn").getAttribute("aria-expanded") === "true") {
    $("#menuBtn").setAttribute("aria-expanded", "false");
    $("#nav").classList.remove("is-open");
    lockScroll(false);
  }
}

/* ============================================================
   Motion
   ============================================================ */
function initPointerFX() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || reduceMotion) return;
  const cursor = $(".cursor");
  let cx = 0, cy = 0, x = 0, y = 0;
  window.addEventListener("mousemove", e => { cx = e.clientX; cy = e.clientY; cursor.style.opacity = 1; });
  (function loop() { x += (cx - x) * .18; y += (cy - y) * .18; cursor.style.transform = `translate(${x}px, ${y}px)`; requestAnimationFrame(loop); })();
  document.addEventListener("mouseover", e => cursor.classList.toggle("is-big", !!e.target.closest("a, button, .card, .pcard")));

  // Magnetic buttons
  $$(".magnetic").forEach(b => {
    b.addEventListener("mousemove", e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .35}px)`;
    });
    b.addEventListener("mouseleave", () => { b.style.transform = ""; });
  });

  // Hero depth parallax: arches, caption, badge and gems drift with the mouse
  const hero = $("#hero"), layers = $$("[data-depth]", hero);
  let mx = 0, my = 0, ax = 0, ay = 0, running = false;
  hero.addEventListener("mousemove", e => {
    const r = hero.getBoundingClientRect();
    mx = (e.clientX - r.left) / r.width - .5; my = (e.clientY - r.top) / r.height - .5;
    if (!running) { running = true; requestAnimationFrame(tick); }
  });
  function tick() {
    ax += (mx - ax) * .08; ay += (my - ay) * .08;
    layers.forEach(l => { const d = +l.dataset.depth; l.style.translate = `${ax * d * -28}px ${ay * d * -22}px`; });
    if (Math.abs(mx - ax) > .001 || Math.abs(my - ay) > .001) requestAnimationFrame(tick); else running = false;
  }

  // Card tilt
  document.addEventListener("mousemove", e => {
    const card = e.target.closest?.(".card");
    $$(".card__media.tilting").forEach(m => { if (!card || m !== $(".card__media", card)) { m.classList.remove("tilting"); m.style.transform = ""; } });
    if (!card) return;
    const m = $(".card__media", card), r = m.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
    m.classList.add("tilting");
    m.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg)`;
  });
}

let processTween = null;
function buildProcessScroll() {
  if (processTween) { processTween.scrollTrigger?.kill(); processTween.kill(); processTween = null; gsap.set("#processTrack", { x: 0 }); gsap.set("#processFill", { scaleX: 0 }); }
  if (reduceMotion || window.innerWidth <= 920) return;
  const track = $("#processTrack");
  const dist = () => Math.max(0, track.scrollWidth - document.documentElement.clientWidth);
  const dir = document.documentElement.dir === "rtl" ? 1 : -1;
  processTween = gsap.timeline({
    scrollTrigger: { trigger: "#pillars", start: "top top", end: () => "+=" + dist(), pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 }
  }).to(track, { x: () => dir * dist(), ease: "none" }, 0)
    .fromTo("#processFill", { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0);
}

function initMotion() {
  if (!hasGSAP) return;
  gsap.registerPlugin(ScrollTrigger);
  if (reduceMotion) return;

  if (typeof window.Lenis !== "undefined") {
    lenis = new Lenis({ lerp: .09, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  // Hero scroll parallax
  const heroST = { trigger: ".hero", start: "top top", end: "bottom top", scrub: true };
  gsap.to(".stage", { yPercent: 6, ease: "none", scrollTrigger: heroST });

  // Word-by-word title rise, kickers slide, paragraphs fade up
  $$(".split").forEach(el => {
    gsap.from($$(".wi", el), { yPercent: 110, duration: 1.1, ease: "expo.out", stagger: .05, scrollTrigger: { trigger: el, start: "top 86%" } });
  });
  $$(".kicker:not(.hero__kicker)").forEach(el => gsap.from(el, { opacity: 0, x: document.documentElement.dir === "rtl" ? 30 : -30, duration: 1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 92%" } }));
  $$(".fade-up").forEach(el => gsap.from(el, { y: 36, opacity: 0, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%" } }));

  // Emblem band: logo rises and the halo breathes
  gsap.fromTo(".story__emblem img", { scale: .86, opacity: 0, y: 60 }, { scale: 1, opacity: 1, y: 0, duration: 1.8, ease: "expo.out", scrollTrigger: { trigger: "#why", start: "top 70%" } });
  gsap.to(".story__emblem", { yPercent: -10, ease: "none", scrollTrigger: { trigger: "#why", start: "top bottom", end: "bottom top", scrub: true } });

  // Counters
  $$(".counter").forEach(el => {
    const to = +el.dataset.to, suffix = el.dataset.suffix || "";
    const o = { v: 0 };
    gsap.to(o, { v: to, duration: 2.2, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 90%" },
      onUpdate: () => { el.textContent = Math.round(o.v).toLocaleString("en-US") + suffix; } });
  });

  // Image curtain reveals (arches)
  $$(".engrave__arch, .how__arch").forEach(el => {
    gsap.fromTo(el, { clipPath: "inset(100% 0% 0% 0% round 999px 999px 6px 6px)" }, { clipPath: "inset(0% 0% 0% 0% round 999px 999px 6px 6px)", duration: 1.6, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 78%" } });
    gsap.fromTo(el.firstElementChild, { scale: 1.3 }, { scale: 1, duration: 2, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 78%" } });
  });

  // Laser engraving: the beam sweeps, then the words "burn" in
  gsap.timeline({ scrollTrigger: { trigger: ".engrave__visual", start: "top 60%" } })
    .fromTo(".engrave__beam", { opacity: 0, scaleX: .1 }, { opacity: 1, scaleX: 1, duration: .5, ease: "power2.out" }, .4)
    .to(".engrave__beam", { opacity: 0, duration: .6 }, 2.8);

  // Benefits: cells cascade
  ScrollTrigger.batch(".benefit", { start: "top 90%", once: true, onEnter: b => gsap.fromTo(b, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: .08, ease: "expo.out" }) });
  gsap.from(".how__dot", { scale: 0, duration: .9, stagger: .15, ease: "back.out(3)", scrollTrigger: { trigger: ".how__layout", start: "top 70%" } });

  animateCards();
  buildProcessScroll();
  if (window.innerWidth <= 920) $$(".step").forEach(s => gsap.from(s, { y: 50, opacity: 0, duration: 1, ease: "expo.out", scrollTrigger: { trigger: s, start: "top 88%" } }));

  // Gallery + contact
  ScrollTrigger.batch(".masonry figure", { start: "top 92%", once: true, onEnter: b => gsap.fromTo(b, { y: 60, opacity: 0, scale: .96 }, { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: .08, ease: "expo.out" }) });
  gsap.from(".contact__inner", { scale: .94, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: ".contact", start: "top 85%" } });
  gsap.fromTo(".footer__word", { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.6, ease: "expo.out", scrollTrigger: { trigger: ".footer", start: "top 95%" } });

  let resizeT;
  window.addEventListener("resize", () => { clearTimeout(resizeT); resizeT = setTimeout(() => { buildProcessScroll(); ScrollTrigger.refresh(); }, 250); });
}

/* Product cards rise in as they scroll into view (re-run after the grid is rebuilt) */
let cardTriggers = [];
function animateCards() {
  if (!hasGSAP || reduceMotion) return;
  cardTriggers.forEach(st => st.kill());
  cardTriggers = ScrollTrigger.batch(".pcard", {
    start: "top 92%", once: true,
    onEnter: b => gsap.fromTo(b, { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: .08, ease: "expo.out" })
  });
}

/* ============================================================
   Hero: a featured product with its price and an order button.
   The picker swaps between a few hero products; the page opens
   straight away (no loading screen), with a short entrance.
   ============================================================ */
const BESTSELLERS = [
  { en: "Ghaith", cap: /15/ }, { en: "Al Qarora" }, { en: "Irwaa" }, { en: "Riwaq" }
];
const findProduct = f => PRODUCT_LIST.find(p => p.name_en === f.en && (!f.cap || f.cap.test(p.capacity_en || p.capacity_ar || "")));

/* the hero is a live poster: every product in turn, in the posters' order */
let featIndex = 0, featTimer = null;
function featured() { return PRODUCT_LIST.filter(p => p.in_stock); }

function renderFeature(i, animate = true) {
  const list = featured();
  if (!list.length) return;
  featIndex = (i + list.length) % list.length;
  const p = list[featIndex];
  const hero = $("#hero"), box = $("#feature");
  const apply = () => {
    hero.style.setProperty("--pc", p.color);
    hero.style.setProperty("--pw", p.wall);
    $("#featName").textContent = L(p, "name");
    $("#featCap").textContent = L(p, "capacity");
    $("#featPrice").innerHTML = hasSale(p) ? `<s>${fmtNum(p.old_price)}</s> ${fmtNum(p.price)}` : fmtNum(p.price);
    $("#featGifts").textContent = L(p, "gifts") || "—";
    $("#featDesc").textContent = L(p, "desc");
    box.classList.remove("is-swapping");
  };
  if (animate) { box.classList.add("is-swapping"); setTimeout(apply, 300); } else apply();

  // cross-fade the product photo
  const imgs = $$(".stage__img"), cur = imgs.find(x => x.classList.contains("is-active")) || imgs[0], next = imgs.find(x => x !== cur);
  if (animate && cur.getAttribute("src") !== p.image_url) {
    next.src = p.image_url; next.alt = L(p, "name") + " — وادي كلاي";
    const show = () => { cur.classList.remove("is-active"); next.classList.add("is-active"); };
    next.complete ? requestAnimationFrame(show) : next.addEventListener("load", show, { once: true });
  } else if (!animate) { cur.src = p.image_url; cur.alt = L(p, "name") + " — وادي كلاي"; }

  $$("#picker button").forEach((b, k) => { b.classList.toggle("is-active", k === featIndex); b.setAttribute("aria-selected", k === featIndex); });
  clearTimeout(featTimer);
  if (!reduceMotion) featTimer = setTimeout(() => renderFeature(featIndex + 1), 6500);
}

function renderHero() {
  const list = featured();
  $("#picker").innerHTML = list.map((p, k) =>
    `<button type="button" role="tab" data-feat="${k}" style="--bc:${esc(p.color)}"><img src="${esc(p.image_url)}" alt="" loading="lazy"><span>${esc(L(p, "name"))} ${esc(L(p, "capacity"))}</span></button>`).join("");
  renderFeature(featIndex, false);
  $("#bestGrid").innerHTML = BESTSELLERS.map(findProduct).filter(Boolean).map(cardHTML).join("");
}

function bindHero() {
  $("#picker").addEventListener("click", e => { const b = e.target.closest("[data-feat]"); if (b) renderFeature(+b.dataset.feat); });
  $("#featOrder").addEventListener("click", () => {
    const p = featured()[featIndex]; if (!p) return;
    addToCart(p.id); openDrawer();
  });
  // pause the rotation while the visitor is looking at the product
  $(".hero__inner").addEventListener("mouseenter", () => clearTimeout(featTimer));
  $(".hero__inner").addEventListener("mouseleave", () => { if (!reduceMotion) featTimer = setTimeout(() => renderFeature(featIndex + 1), 4000); });
}

function heroEntrance() {
  if (!hasGSAP || reduceMotion) return;
  gsap.timeline({ defaults: { ease: "expo.out" } })
    .from(".stage", { y: 40, opacity: 0, duration: 1.2 }, 0)
    .from(".hero__brand, #feature > *, .hero__lead, .hero__cta, .hero__trust, .picker", { y: 22, opacity: 0, duration: .9, stagger: .06 }, .15);
}

/* ============================================================
   Boot
   ============================================================ */
$("#year").textContent = new Date().getFullYear();
renderStatic();
applyLang();
bindEvents();
bindHero();
initPointerFX();
initMotion();
// Opening screen with the emblem, as on the first site: ~2s on the first visit of a
// session (tap to skip), a quick fade after that; then the hero comes in.
(function loader() {
  const el = $("#loader");
  if (!el) { heroEntrance(); return; }
  let seen = false;
  try { seen = sessionStorage.getItem("wadi-loader") === "1"; sessionStorage.setItem("wadi-loader", "1"); } catch { /* private mode */ }
  let gone = false;
  const leave = () => {
    if (gone) return; gone = true;
    let removed = false;
    const done = () => { if (removed) return; removed = true; el.remove(); document.body.classList.remove("is-loading"); if (hasGSAP) ScrollTrigger.refresh(); };
    // safety net: if the tab is in the background the animation is paused, so remove it anyway
    setTimeout(done, 1400);
    if (hasGSAP && !reduceMotion) gsap.to(el, { yPercent: -100, duration: 1, ease: "expo.inOut", onComplete: done });
    else { el.style.transition = "opacity .4s"; el.style.opacity = 0; setTimeout(done, 400); }
    setTimeout(heroEntrance, hasGSAP && !reduceMotion ? 450 : 0);
  };
  el.addEventListener("click", leave);
  setTimeout(leave, seen || reduceMotion ? 350 : 2100);
})();

// Live products from the admin panel (if Supabase is configured)
updateSchema();
loadProducts().then(ok => {
  if (!ok) return;
  updateSchema();
  renderFilters();
  renderGrid();
  renderHero();
  renderCart();
  animateCards();
  if (hasGSAP) ScrollTrigger.refresh();
});
