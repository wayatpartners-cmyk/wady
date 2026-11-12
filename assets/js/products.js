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
  },
  /* ---- from the owner's copy (no poster yet) ---- */
  {
    id: "irwa-premium", extra: true, category: "personal", price: 20, old_price: 0, in_stock: true, sort_order: 10,
    image_url: "assets/img/products/p-irwapremium.jpg",
    name_ar: "إرواء بريميوم", name_en: "Irwa Premium", capacity_ar: "1200 مل", capacity_en: "1200 ml",
    desc_ar: "إصدار مطوّر من عائلة إرواء، مستوحى من تصميمها الكلاسيكي، بتفاصيل تمنحه طابعًا أكثر تميزًا وأناقة.",
    desc_en: "An elevated edition of the Irwa family, inspired by its classic design, with details that give it a more distinctive, elegant character.",
    gifts_ar: "كوب فخار، صحن ترشيح", gifts_en: "Clay cup, filtering plate", tag_ar: "", tag_en: ""
  },
  {
    id: "irwa-lines", extra: true, category: "personal", price: 19, old_price: 0, in_stock: true, sort_order: 11,
    image_url: "assets/img/products/p-irwalines.jpg",
    name_ar: "إرواء لاينز", name_en: "Irwa Lines", capacity_ar: "1000 مل", capacity_en: "1000 ml",
    desc_ar: "إصدار مطوّر من عائلة إرواء، يتميز بخطوطه التصميمية التي ترسم شكلًا متفردًا للفخارة وتمنحها هوية بصرية مختلفة عن التصميم الكلاسيكي.",
    desc_en: "An elevated edition of the Irwa family, defined by sculpted lines that give the carafe a unique shape and its own visual identity.",
    gifts_ar: "كوب فخار، صحن ترشيح", gifts_en: "Clay cup, filtering plate", tag_ar: "", tag_en: ""
  },
  {
    id: "irwa-curvy", extra: true, category: "personal", price: 20, old_price: 0, in_stock: true, sort_order: 12,
    image_url: "assets/img/products/p-irwacurvy.jpg",
    name_ar: "إرواء كيرفي", name_en: "Irwa Curvy", capacity_ar: "1300 مل", capacity_en: "1300 ml",
    desc_ar: "إصدار مطوّر من عائلة إرواء، مستوحى من تصميمها الكلاسيكي، يتميز بانحناءاته الناعمة وتفاصيله المنسابة التي تمنحه حضورًا مختلفًا.",
    desc_en: "An elevated edition of the Irwa family, inspired by its classic design, with soft curves and flowing details that give it a different presence.",
    gifts_ar: "كوب فخار، صحن ترشيح", gifts_en: "Clay cup, filtering plate", tag_ar: "", tag_en: ""
  },
  {
    id: "petra", extra: true, category: "personal", price: 22, old_price: 0, in_stock: true, sort_order: 13,
    image_url: "assets/img/products/wc-petra-1.jpg",
    name_ar: "بترا", name_en: "Petra", capacity_ar: "1400 مل", capacity_en: "1400 ml",
    desc_ar: "تصميم يستلهم جمال التفاصيل التراثية، ويعكس طابعًا خاصًا يجمع بين الأصالة والحضور المميز.",
    desc_en: "A design inspired by the beauty of heritage details, with a character that unites authenticity and a distinctive presence.",
    gifts_ar: "صحن فخار مخصص للترشيح، كوب فخار", gifts_en: "Filtering clay plate, clay cup", tag_ar: "", tag_en: ""
  },
  {
    id: "irwa-plus", extra: true, category: "offers", price: 10, old_price: 0, in_stock: true, sort_order: 14,
    image_url: "assets/img/products/wc-irwa-plus-1.jpg",
    name_ar: "إرواء بلس", name_en: "Irwa Plus", capacity_ar: "1000 مل", capacity_en: "1000 ml",
    desc_ar: "تصميم عصري بتفاصيل مميزة، يجمع بين أناقة الشكل وعملية الاستخدام اليومي.",
    desc_en: "A modern design with distinctive details, combining an elegant shape with everyday practicality.",
    gifts_ar: "", gifts_en: "", tag_ar: "عرض", tag_en: "Offer"
  },
  {
    id: "cups-offer", extra: true, category: "offers", price: 5, old_price: 0, in_stock: true, sort_order: 15,
    image_url: "assets/img/products/wc-cup-naqaa-1.jpg",
    name_ar: "عرض كاسات نقاء ورواق", name_en: "Naqaa & Riwaq cups offer", capacity_ar: "كوبان", capacity_en: "2 cups",
    desc_ar: "اشتري كوبًا واحصل على الثاني مجانًا! استمتعوا بعرض كاسات نقاء ورواق: كوبان بسعر 5 دنانير فقط. العرض متاح فقط عند شراء إحدى الفخارات المدرجة في قسم العروض.",
    desc_en: "Buy one cup, get the second free! Two Naqaa or Riwaq cups for just 5 JOD. Available only with the purchase of one of the carafes in the offers section.",
    gifts_ar: "", gifts_en: "", tag_ar: "اشتري واحد والثاني مجانًا", tag_en: "Buy one, get one free"
  },
  {
    id: "cup-naqaa", extra: true, category: "accessories", price: 5, old_price: 0, in_stock: true, sort_order: 16,
    image_url: "assets/img/products/wc-cup-naqaa-1.jpg",
    name_ar: "كوب نقاء", name_en: "Naqaa cup", capacity_ar: "", capacity_en: "",
    desc_ar: "من ملحقات وادي كلاي المتاحة للشراء بشكل منفصل، لتختاروا ما يناسب فخاراتكم واحتياجاتكم.",
    desc_en: "A Wadi Clay accessory, available separately to suit your carafes and your needs.",
    gifts_ar: "", gifts_en: "", tag_ar: "", tag_en: ""
  },
  {
    id: "cup-riwaq", extra: true, category: "accessories", price: 5, old_price: 0, in_stock: true, sort_order: 17,
    image_url: "assets/img/products/wc-cup-riwaq-1.jpg",
    name_ar: "كوب رواق", name_en: "Riwaq cup", capacity_ar: "", capacity_en: "",
    desc_ar: "من ملحقات وادي كلاي المتاحة للشراء بشكل منفصل، لتختاروا ما يناسب فخاراتكم واحتياجاتكم.",
    desc_en: "A Wadi Clay accessory, available separately to suit your carafes and your needs.",
    gifts_ar: "", gifts_en: "", tag_ar: "", tag_en: ""
  },
  {
    id: "plate", extra: true, category: "accessories", price: 1, old_price: 0, in_stock: true, sort_order: 18,
    image_url: "assets/img/products/wc-plate-1.jpg",
    name_ar: "صحن فخار", name_en: "Clay plate", capacity_ar: "", capacity_en: "",
    desc_ar: "من ملحقات وادي كلاي المتاحة للشراء بشكل منفصل، لتختاروا ما يناسب فخاراتكم واحتياجاتكم.",
    desc_en: "A Wadi Clay accessory, available separately to suit your carafes and your needs.",
    gifts_ar: "", gifts_en: "", tag_ar: "", tag_en: ""
  }
];

/* Per product: poster colour, the wall tone behind it, and its photo set.
   Keyed by "name_en capacity_en" (Ghaith comes in two sizes), then name_en. */
// studio photo first, then the WhatsApp photos (the price posters are not shown on the site)
const IMGS = (k, more = []) => [`assets/img/products/p-${k}.jpg`, ...more];
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
  "Riwaq":       { color: "#6B4C3B", wall: "#DFC6AC", gallery: IMGS("riwaq", WC("riwaq", 3)) },
  "Irwa Premium": { color: "#B3202A", wall: "#DEC6AE", gallery: IMGS("irwapremium", WC("irwa-premium", 4)) },
  "Irwa Lines":   { color: "#1F4F9C", wall: "#D9C7B3", gallery: IMGS("irwalines", WC("irwa-lines", 4)) },
  "Irwa Curvy":   { color: "#5E3B6E", wall: "#DFC8AF", gallery: IMGS("irwacurvy", WC("irwa-curvy", 3)) },
  "Petra":        { color: "#9C4A3A", wall: "#E0C9B2", gallery: WC("petra", 3) },
  "Irwa Plus":    { color: "#B5651D", wall: "#E2CDB4", gallery: WC("irwa-plus", 3) },
  "Naqaa & Riwaq cups offer": { color: "#5B6B3A", wall: "#DCCDB6", gallery: [...WC("cup-naqaa", 1), ...WC("cup-riwaq", 1)] },
  "Naqaa cup":    { color: "#2F5BA6", wall: "#DDC5AD", gallery: WC("cup-naqaa", 1) },
  "Riwaq cup":    { color: "#6B4C3B", wall: "#DFC6AC", gallery: WC("cup-riwaq", 1) },
  "Clay plate":   { color: "#7A5A43", wall: "#E3D0BA", gallery: WC("plate", 1) }
};
window.productStyle = p => (window.PRODUCT_STYLE[`${p.name_en} ${p.capacity_en || ""}`.trim()] || window.PRODUCT_STYLE[p.name_en] || { color: "#4A2E1F", wall: "#E5D4BC", gallery: [] });
