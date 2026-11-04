/* ============================================================
   Wadi Clay — categories + products
   ------------------------------------------------------------
   Once Supabase is connected (config.js), products come from the
   admin panel (admin.html) and this list is only a fallback.
   Prices in JOD. The order of CATEGORIES is the order of the
   groups on the home page.
   ============================================================ */

window.CATEGORIES = [
  { id: "all",         ar: "الكل",                 en: "All" },
  { id: "personal",    ar: "المجموعة الأساسية",    en: "Essentials" },
  { id: "family",      ar: "الأحجام العائلية",     en: "Family sizes" },
  { id: "offers",      ar: "العروض",               en: "Offers" },
  { id: "accessories", ar: "الملحقات",             en: "Accessories" },
  { id: "lifestyle",   ar: "للتنقل والمكتب",       en: "On the go" }
];

/* Intro text shown above each group on the home page */
window.CATEGORY_TEXT = {
  personal: {
    ar: "تصاميمنا الأساسية، بتفاصيل تناسب اختياراتكم. مع ملحقات مرفقة بحسب كل فخارة.",
    en: "Our essential designs, with details to suit your choice — each piece comes with its own accessories."
  },
  family: {
    ar: "اكتشفوا تشكيلة وادي كلاي من الأحجام العائلية، المصممة لتلبية احتياجاتكم اليومية بسعات متنوعة، مع ملحقات عملية تكمل كل صنف.",
    en: "Discover Wadi Clay's family sizes, designed for everyday needs in a range of capacities, each with practical accessories."
  },
  offers: {
    ar: "عروض مختارة… وقيمة تستحق الاقتناء.",
    en: "Selected offers… value worth owning.",
    note_ar: "عرض الكاسات متاح فقط عند شراء إحدى الفخارات المدرجة في قسم العروض. تكلفة التوصيل لفخارات العروض ديناران.",
    note_en: "The cup offer is available only with the purchase of a vessel from the offers section. Delivery for offer items is 2 JOD."
  },
  accessories: {
    ar: "تفاصيل تكمل تجربتكم. اكتشفوا ملحقات وادي كلاي المتاحة للشراء بشكل منفصل، لتختاروا ما يناسب فخاراتكم واحتياجاتكم.",
    en: "Details that complete your experience — Wadi Clay accessories, available separately to suit your vessels and needs."
  },
  lifestyle: { ar: "", en: "" }
};

const CUP_PLATE_AR = "صحن فخار، كوب فخار", CUP_PLATE_EN = "Clay plate, clay cup";
const FILTER_AR = "صحن فخار مخصص للترشيح، كوب فخار", FILTER_EN = "Clay filtering plate, clay cup";
const FREE_DEL_AR = "شامل التوصيل", FREE_DEL_EN = "Delivery included";

window.PRODUCTS = [
  /* ---------- Essentials ---------- */
  {
    id: "irwa-classic", category: "personal", price: 20, old_price: 0, in_stock: true, sort_order: 1,
    image_url: "",
    name_ar: "إرواء كلاسيك", name_en: "Irwa Classic", capacity_ar: "1300 مل", capacity_en: "1300 ml",
    desc_ar: "التصميم الكلاسيكي لعائلة إرواء، يجمع بين البساطة والأناقة والعملية، ويشكّل الأساس الذي انطلقت منه إصدارات إرواء المطوّرة.",
    desc_en: "The classic design of the Irwa family — simple, elegant and practical, and the base from which every later Irwa edition grew.",
    gifts_ar: FILTER_AR, gifts_en: FILTER_EN, tag_ar: "", tag_en: ""
  },
  {
    id: "irwa-premium", category: "personal", price: 19.99, old_price: 0, in_stock: true, sort_order: 2,
    image_url: "",
    name_ar: "إرواء بريميوم", name_en: "Irwa Premium", capacity_ar: "1200 مل", capacity_en: "1200 ml",
    desc_ar: "إصدار مطوّر من عائلة إرواء، مستوحى من تصميمها الكلاسيكي، بتفاصيل تمنحه طابعًا أكثر تميزًا وأناقة.",
    desc_en: "An evolved edition of the Irwa family, inspired by the classic, with details that give it a more distinguished, elegant character.",
    gifts_ar: CUP_PLATE_AR, gifts_en: CUP_PLATE_EN, tag_ar: FREE_DEL_AR, tag_en: FREE_DEL_EN
  },
  {
    id: "irwa-lines", category: "personal", price: 18.99, old_price: 0, in_stock: true, sort_order: 3,
    image_url: "",
    name_ar: "إرواء لاينز", name_en: "Irwa Lines", capacity_ar: "1000 مل", capacity_en: "1000 ml",
    desc_ar: "إصدار مطوّر من عائلة إرواء، يتميز بخطوطه التصميمية التي ترسم شكلًا متفردًا للفخارة وتمنحها هوية بصرية مختلفة عن التصميم الكلاسيكي.",
    desc_en: "An evolved Irwa edition whose sculpted lines draw a unique silhouette and give it a visual identity of its own.",
    gifts_ar: CUP_PLATE_AR, gifts_en: CUP_PLATE_EN, tag_ar: FREE_DEL_AR, tag_en: FREE_DEL_EN
  },
  {
    id: "irwa-curvy", category: "personal", price: 19.99, old_price: 0, in_stock: true, sort_order: 4,
    image_url: "",
    name_ar: "إرواء كيرفي", name_en: "Irwa Curvy", capacity_ar: "1300 مل", capacity_en: "1300 ml",
    desc_ar: "إصدار مطوّر من عائلة إرواء، مستوحى من تصميمها الكلاسيكي، يتميز بانحناءاته الناعمة وتفاصيله المنسابة التي تمنحه حضورًا مختلفًا.",
    desc_en: "An evolved Irwa edition with soft curves and flowing details that give it a presence all its own.",
    gifts_ar: CUP_PLATE_AR, gifts_en: CUP_PLATE_EN, tag_ar: FREE_DEL_AR, tag_en: FREE_DEL_EN
  },
  {
    id: "naqaa", category: "personal", price: 22, old_price: 0, in_stock: true, sort_order: 5,
    image_url: "",
    name_ar: "نقاء", name_en: "Naqaa", capacity_ar: "1400 مل", capacity_en: "1400 ml",
    desc_ar: "تصميم مستوحى من شكل القُلّة الفخارية التقليدية، يجمع بين أصالة التراث وروح التصميم المعاصر.",
    desc_en: "Inspired by the traditional clay qulla — heritage authenticity with a contemporary spirit.",
    gifts_ar: FILTER_AR, gifts_en: FILTER_EN, tag_ar: "", tag_en: ""
  },
  {
    id: "riwaq", category: "personal", price: 25, old_price: 0, in_stock: true, sort_order: 6,
    image_url: "",
    name_ar: "رواق", name_en: "Riwaq", capacity_ar: "1500 مل", capacity_en: "1500 ml",
    desc_ar: "تصميم بطابع ملكي، يجمع بين الفخامة وأصالة الفخار، ليمنح رواق حضورًا مميزًا ضمن مجموعة وادي كلاي.",
    desc_en: "A regal design that unites luxury with the authenticity of clay — Riwaq's signature presence in the Wadi Clay collection.",
    gifts_ar: "كوب فخار", gifts_en: "Clay cup", tag_ar: "طابع ملكي", tag_en: "Regal design"
  },
  {
    id: "petra", category: "personal", price: 22, old_price: 0, in_stock: true, sort_order: 7,
    image_url: "",
    name_ar: "بترا", name_en: "Petra", capacity_ar: "1400 مل", capacity_en: "1400 ml",
    desc_ar: "تصميم يستلهم جمال التفاصيل التراثية، ويعكس طابعًا خاصًا يجمع بين الأصالة والحضور المميز.",
    desc_en: "A design drawn from the beauty of heritage details, with a character that is both authentic and striking.",
    gifts_ar: FILTER_AR, gifts_en: FILTER_EN, tag_ar: "", tag_en: ""
  },
  {
    id: "rihal", category: "personal", price: 18, old_price: 0, in_stock: true, sort_order: 8,
    image_url: "",
    name_ar: "رحال", name_en: "Rihal", capacity_ar: "1000 مل", capacity_en: "1000 ml",
    desc_ar: "تصميم عملي مستوحى من شكل أكواب ستانلي، يجمع بين سهولة الحمل وأناقة التصميم؛ مناسب للمكتب والسيارة والتنقل.",
    desc_en: "A practical tumbler-style design that is easy to carry and elegant — made for the office, the car and life on the go.",
    gifts_ar: "صحن فخار، كاسة فخار، شنطة مخصصة للحمل", gifts_en: "Clay plate, clay cup, carry bag", tag_ar: "مع شنطة", tag_en: "Bag included"
  },

  /* ---------- Family sizes ---------- */
  {
    id: "qarora-12", category: "family", price: 79, old_price: 0, in_stock: true, sort_order: 10,
    image_url: "",
    name_ar: "القارورة العائلية", name_en: "Family Qarora", capacity_ar: "12 لتر", capacity_en: "12 L",
    desc_ar: "قارورة فخارية بسعة 12 لتر، تجمع بين السعة الكبيرة والتصميم العملي، وتناسب العائلات والاستخدام اليومي المتكرر، مع مضخة ذكية تسهّل سحب المياه بكل سهولة.",
    desc_en: "A 12-litre clay vessel that pairs generous capacity with a practical design for families and daily use — with a smart pump for effortless pouring.",
    gifts_ar: "صحن ترشيح كبير، مضخة ذكية، كوب فخار", gifts_en: "Large filtering plate, smart pump, clay cup", tag_ar: "مع مضخة ذكية", tag_en: "Smart pump"
  },
  {
    id: "ghaith-15", category: "family", price: 99, old_price: 0, in_stock: true, sort_order: 11,
    image_url: "",
    name_ar: "زير غيث", name_en: "Ghaith Zeer", capacity_ar: "15 لتر", capacity_en: "15 L",
    desc_ar: "زير فخار بسعة عائلية كبيرة، يجمع بين أصالة الفخار والتصميم العصري المتقن، ويناسب العائلات الكبيرة والاستخدام اليومي المشترك.",
    desc_en: "A large family-size clay zeer that brings together authentic pottery and refined modern design — for big families and shared daily use.",
    gifts_ar: "قاعدة فخار، حنفية أصلية من الستانلس ستيل، صحن ترشيح كبير، كوب فخار", gifts_en: "Clay stand, genuine stainless-steel tap, large filtering plate, clay cup", tag_ar: "الأكبر سعة", tag_en: "Largest size"
  },
  {
    id: "ghaith-6", category: "family", price: 59, old_price: 0, in_stock: true, sort_order: 12,
    image_url: "",
    name_ar: "زير غيث", name_en: "Ghaith Zeer", capacity_ar: "6 لترات", capacity_en: "6 L",
    desc_ar: "زير غيث بسعة 6 لترات بحجم متوسط، يناسب الاستخدام اليومي في المنازل الصغيرة والمطابخ، ويوفر خيارًا عمليًا لمن يفضّلون سعة أقل مع الحفاظ على أصالة التصميم الفخاري.",
    desc_en: "The mid-size 6-litre Ghaith — ideal for smaller homes and kitchens, a practical choice for a lower capacity without losing the authentic clay design.",
    gifts_ar: "قاعدة فخار، حنفية أصلية من الستانلس ستيل، صحن ترشيح كبير، كوب فخار", gifts_en: "Clay stand, genuine stainless-steel tap, large filtering plate, clay cup", tag_ar: "", tag_en: ""
  },

  /* ---------- Offers ---------- */
  {
    id: "irwa-plus", category: "offers", price: 10, old_price: 0, in_stock: true, sort_order: 20,
    image_url: "",
    name_ar: "إرواء بلس", name_en: "Irwa Plus", capacity_ar: "1000 مل", capacity_en: "1000 ml",
    desc_ar: "تصميم عصري بتفاصيل مميزة، يجمع بين أناقة الشكل وعملية الاستخدام اليومي.",
    desc_en: "A modern design with distinctive details, combining elegant form with everyday practicality.",
    gifts_ar: "", gifts_en: "", tag_ar: "عرض", tag_en: "Offer"
  },
  {
    id: "cups-offer", category: "offers", price: 5, old_price: 0, in_stock: true, sort_order: 21,
    image_url: "",
    name_ar: "عرض كاسات نقاء ورواق", name_en: "Naqaa & Riwaq cups offer", capacity_ar: "كوبان بسعر 5 دنانير", capacity_en: "Two cups for 5 JOD",
    desc_ar: "اشتري كوبًا واحصل على الثاني مجانًا! استمتعوا بعرض كاسات نقاء ورواق: كوبان بسعر 5 دنانير فقط. العرض متاح فقط عند شراء إحدى الفخارات المدرجة في قسم العروض.",
    desc_en: "Buy one cup, get the second free — two Naqaa & Riwaq cups for just 5 JOD. Available only with the purchase of a vessel from the offers section.",
    gifts_ar: "", gifts_en: "", tag_ar: "١ + ١ مجاناً", tag_en: "Buy 1 get 1"
  },

  /* ---------- Accessories ---------- */
  {
    id: "cup-naqaa", category: "accessories", price: 5, old_price: 0, in_stock: true, sort_order: 30,
    image_url: "",
    name_ar: "كوب نقاء", name_en: "Naqaa cup", capacity_ar: "", capacity_en: "",
    desc_ar: "كوب فخار من تشكيلة نقاء، متاح للشراء بشكل منفصل.", desc_en: "A clay cup from the Naqaa line, available separately.",
    gifts_ar: "", gifts_en: "", tag_ar: "", tag_en: ""
  },
  {
    id: "cup-riwaq", category: "accessories", price: 5, old_price: 0, in_stock: true, sort_order: 31,
    image_url: "",
    name_ar: "كوب رواق", name_en: "Riwaq cup", capacity_ar: "", capacity_en: "",
    desc_ar: "كوب فخار من تشكيلة رواق، متاح للشراء بشكل منفصل.", desc_en: "A clay cup from the Riwaq line, available separately.",
    gifts_ar: "", gifts_en: "", tag_ar: "", tag_en: ""
  },
  {
    id: "plate", category: "accessories", price: 1, old_price: 0, in_stock: true, sort_order: 32,
    image_url: "",
    name_ar: "صحن فخار", name_en: "Clay plate", capacity_ar: "", capacity_en: "",
    desc_ar: "صحن فخار يوضع تحت الفخارة، متاح للشراء بشكل منفصل.", desc_en: "A clay plate to set under your vessel, available separately.",
    gifts_ar: "", gifts_en: "", tag_ar: "", tag_en: ""
  }
];

/* Photo sets per product (matched by name_en). The first photo is the
   card image; the rest show in the product window. A photo uploaded from
   the admin panel (https://…) always wins over these. */
const P = (k, n) => Array.from({ length: n }, (_, i) => `assets/img/products/wc-${k}-${i + 1}.jpg`);
window.PRODUCT_GALLERY = {
  "Irwa Classic": P("irwa-classic", 3), "Irwa Premium": P("irwa-premium", 4),
  "Irwa Lines": P("irwa-lines", 4), "Irwa Curvy": P("irwa-curvy", 3),
  "Naqaa": P("naqaa", 3), "Riwaq": P("riwaq", 3), "Petra": P("petra", 3),
  "Rihal": P("rihal", 5), "Family Qarora": P("qarora", 5),
  "Ghaith Zeer": P("ghaith", 5), "Irwa Plus": P("irwa-plus", 3),
  "Naqaa & Riwaq cups offer": [...P("cup-naqaa", 1), ...P("cup-riwaq", 1)],
  "Naqaa cup": P("cup-naqaa", 1), "Riwaq cup": P("cup-riwaq", 1), "Clay plate": P("plate", 1)
};
