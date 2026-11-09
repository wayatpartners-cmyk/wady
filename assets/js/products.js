/* ============================================================
   Wadi Clay — categories + products (as on the brand posters)
   ------------------------------------------------------------
   Products come from Supabase (admin panel); this list is the
   fallback and matches the posters. Prices in JOD.
   ============================================================ */

window.CATEGORIES = [
  { id: "all",         ar: "الكل",               en: "All" },
  { id: "family",      ar: "الأحجام العائلية",   en: "Family sizes" },
  { id: "personal",    ar: "فخاريات المائدة",    en: "Table carafes" },
  { id: "lifestyle",   ar: "للتنقل والمكتب",     en: "On the go" },
  { id: "offers",      ar: "العروض",             en: "Offers" },
  { id: "accessories", ar: "الملحقات",           en: "Accessories" }
];

window.CATEGORY_TEXT = {};

window.PRODUCTS = [
  {
    id: "qarora", category: "family", price: 79, old_price: 0, in_stock: true, sort_order: 1,
    image_url: "assets/img/products/p-qarora.jpg",
    name_ar: "القارورة", name_en: "Al Qarora", capacity_ar: "12 لتر", capacity_en: "12 L",
    desc_ar: "قارورة فخارية بسعة 12 لتر، تجمع بين السعة الكبيرة والتصميم العملي، وتناسب العائلات والاستخدام اليومي المتكرر، مع مضخة ذكية تسهّل سحب المياه بكل سهولة.",
    desc_en: "A 12-litre clay vessel with generous capacity and a practical design for families and daily use — with a smart pump for effortless pouring.",
    gifts_ar: "كوب فخار، مضخة، صحن ترشيح", gifts_en: "Clay cup, pump, filtering plate", tag_ar: "", tag_en: ""
  },
  {
    id: "rihal", category: "lifestyle", price: 18, old_price: 0, in_stock: true, sort_order: 2,
    image_url: "assets/img/products/p-rihal.jpg",
    name_ar: "رحال", name_en: "Rihal", capacity_ar: "800 مل", capacity_en: "800 ml",
    desc_ar: "تصميم عملي يجمع بين سهولة الحمل وأناقة التصميم؛ مناسب للمكتب والسيارة والتنقل.",
    desc_en: "A practical design that is easy to carry and elegant — made for the office, the car and life on the go.",
    gifts_ar: "كوب فخار، صحن ترشيح، شنطة", gifts_en: "Clay cup, filtering plate, carry bag", tag_ar: "", tag_en: ""
  },
  {
    id: "ghaith-15", category: "family", price: 99, old_price: 0, in_stock: true, sort_order: 3,
    image_url: "assets/img/products/p-ghaith15.jpg",
    name_ar: "غيث", name_en: "Ghaith", capacity_ar: "15 لتر", capacity_en: "15 L",
    desc_ar: "زير فخار بسعة عائلية كبيرة، يجمع بين أصالة الفخار والتصميم العصري المتقن، ويناسب العائلات الكبيرة والاستخدام اليومي المشترك.",
    desc_en: "A large family-size clay zeer that brings together authentic pottery and refined modern design — for big families and shared daily use.",
    gifts_ar: "كوب فخار، قاعدة فخار، صحن ترشيح", gifts_en: "Clay cup, clay stand, filtering plate", tag_ar: "", tag_en: ""
  },
  {
    id: "irwaa", category: "personal", price: 20, old_price: 0, in_stock: true, sort_order: 4,
    image_url: "assets/img/products/p-irwaa.jpg",
    name_ar: "إرواء", name_en: "Irwaa", capacity_ar: "1300 مل", capacity_en: "1300 ml",
    desc_ar: "تصميم كلاسيكي يجمع بين البساطة والأناقة والعملية — فخارة انسيابية بسدّادة فخارية، أنيقة على المائدة وسهلة السكب.",
    desc_en: "A classic design — simple, elegant and practical: a flowing clay bottle with a clay stopper, lovely on the table and easy to pour.",
    gifts_ar: "كوب فخار، صحن ترشيح", gifts_en: "Clay cup, filtering plate", tag_ar: "", tag_en: ""
  },
  {
    id: "naqaa", category: "personal", price: 22, old_price: 0, in_stock: true, sort_order: 5,
    image_url: "assets/img/products/p-naqaa.jpg",
    name_ar: "نقاء", name_en: "Naqaa", capacity_ar: "1400 مل", capacity_en: "1400 ml",
    desc_ar: "تصميم مستوحى من شكل القُلّة الفخارية التقليدية، يجمع بين أصالة التراث وروح التصميم المعاصر.",
    desc_en: "Inspired by the traditional clay qulla — heritage authenticity with a contemporary spirit.",
    gifts_ar: "كوب فخار، صحن ترشيح", gifts_en: "Clay cup, filtering plate", tag_ar: "", tag_en: ""
  },
  {
    id: "thara", category: "lifestyle", price: 19, old_price: 0, in_stock: true, sort_order: 6,
    image_url: "assets/img/products/p-thara.jpg",
    name_ar: "ثرى", name_en: "Thara", capacity_ar: "900 مل", capacity_en: "900 ml",
    desc_ar: "فخارة بخصر منحوت يسهّل الإمساك بها، تأتي مع شنطة لتأخذها معك أينما ذهبت.",
    desc_en: "A carafe with a sculpted waist for an easy grip, with a bag to take it wherever you go.",
    gifts_ar: "صحن ترشيح، شنطة", gifts_en: "Filtering plate, carry bag", tag_ar: "", tag_en: ""
  },
  {
    id: "nada", category: "lifestyle", price: 20, old_price: 0, in_stock: true, sort_order: 7,
    image_url: "assets/img/products/p-nada.jpg",
    name_ar: "ندى", name_en: "Nada", capacity_ar: "900 مل", capacity_en: "900 ml",
    desc_ar: "مَج فخار كبير بمقبض مريح وغطاء، يرافقك على المكتب ويبقي ماءك بارداً لساعات.",
    desc_en: "A large clay mug with a comfortable handle and lid — your desk companion that keeps water cool for hours.",
    gifts_ar: "صحن ترشيح", gifts_en: "Filtering plate", tag_ar: "", tag_en: ""
  },
  {
    id: "ghaith-6", category: "family", price: 59, old_price: 0, in_stock: true, sort_order: 8,
    image_url: "assets/img/products/p-ghaith6.jpg",
    name_ar: "غيث", name_en: "Ghaith", capacity_ar: "6 لتر", capacity_en: "6 L",
    desc_ar: "زير غيث بحجم متوسط، يناسب الاستخدام اليومي في المنازل الصغيرة والمطابخ، مع الحفاظ على أصالة التصميم الفخاري.",
    desc_en: "The mid-size Ghaith — ideal for smaller homes and kitchens, with the same authentic clay design.",
    gifts_ar: "صحن ترشيح، كوب فخار، قاعدة فخار", gifts_en: "Filtering plate, clay cup, clay stand", tag_ar: "", tag_en: ""
  },
  {
    id: "riwaq", category: "personal", price: 25, old_price: 0, in_stock: true, sort_order: 9,
    image_url: "assets/img/products/p-riwaq.jpg",
    name_ar: "رواق", name_en: "Riwaq", capacity_ar: "1500 مل", capacity_en: "1500 ml",
    desc_ar: "تصميم بطابع ملكي، يجمع بين الفخامة وأصالة الفخار، ليمنح رواق حضورًا مميزًا ضمن مجموعة وادي كلاي.",
    desc_en: "A regal design that unites luxury with the authenticity of clay — Riwaq's signature presence in the Wadi Clay collection.",
    gifts_ar: "كوب فخار", gifts_en: "Clay cup", tag_ar: "", tag_en: ""
  }
];

/* Per product: poster colour, the wall tone behind it, and its photo set.
   Keyed by "name_en capacity_en" (Ghaith comes in two sizes), then name_en. */
const IMGS = (k, more = []) => [`assets/img/products/p-${k}.jpg`, `assets/img/products/p-${k}-poster.jpg`, ...more];
const WC = (k, n) => Array.from({ length: n }, (_, i) => `assets/img/products/wc-${k}-${i + 1}.jpg`);
window.PRODUCT_STYLE = {
  "Al Qarora":   { color: "#7B2D3F", wall: "#DEC5AC", gallery: IMGS("qarora", WC("qarora", 5)) },
  "Rihal":       { color: "#1E5D66", wall: "#D6C3B0", gallery: IMGS("rihal", WC("rihal", 5)) },
  "Ghaith 15 L": { color: "#2E5C3A", wall: "#DEC6AC", gallery: IMGS("ghaith15", WC("ghaith", 5)) },
  "Ghaith 6 L":  { color: "#A3245C", wall: "#E0CCB5", gallery: IMGS("ghaith6", WC("ghaith", 3)) },
  "Irwaa":       { color: "#C4511C", wall: "#DDC5AD", gallery: IMGS("irwaa", WC("irwa-classic", 3)) },
  "Naqaa":       { color: "#2F5BA6", wall: "#DDC5AD", gallery: IMGS("naqaa", WC("naqaa", 3)) },
  "Thara":       { color: "#4A4542", wall: "#DFCDBA", gallery: IMGS("thara") },
  "Nada":        { color: "#9B2A1C", wall: "#DDCAB4", gallery: IMGS("nada") },
  "Riwaq":       { color: "#6B4C3B", wall: "#DFC6AC", gallery: IMGS("riwaq", WC("riwaq", 3)) }
};
window.productStyle = p => (window.PRODUCT_STYLE[`${p.name_en} ${p.capacity_en || ""}`.trim()] || window.PRODUCT_STYLE[p.name_en] || { color: "#4A2E1F", wall: "#E5D4BC", gallery: [] });
