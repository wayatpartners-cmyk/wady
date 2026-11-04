-- ============================================================
-- Wadi Clay — UPDATE 2: new collection (essentials, family sizes,
-- offers, accessories). Run once in Supabase: SQL Editor → New
-- query → paste → Run.
--
-- What it does:
--   1) allows the new category "offers"
--   2) HIDES (does not delete) every current product — you can
--      re-show any of them from the admin panel or with
--      update products set is_active = true where ...;
--   3) adds the 16 products of the new collection.
-- ============================================================
begin;

alter table public.products drop constraint if exists products_category_check;
alter table public.products add constraint products_category_check
  check (category in ('family', 'lifestyle', 'personal', 'accessories', 'offers'));

update public.products set is_active = false where is_active;

insert into public.products
  (name_ar, name_en, capacity_ar, capacity_en, price, category, gifts_ar, gifts_en, tag_ar, tag_en, image_url, sort_order, desc_ar, desc_en)
values
  ('إرواء كلاسيك', 'Irwa Classic', '1300 مل', '1300 ml', 20, 'personal', 'صحن فخار مخصص للترشيح، كوب فخار', 'Clay filtering plate, clay cup', '', '', 'assets/img/products/irwaa.jpg', 1, 'التصميم الكلاسيكي لعائلة إرواء، يجمع بين البساطة والأناقة والعملية، ويشكّل الأساس الذي انطلقت منه إصدارات إرواء المطوّرة.', 'The classic design of the Irwa family — simple, elegant and practical, and the base from which every later Irwa edition grew.'),
  ('إرواء بريميوم', 'Irwa Premium', '1200 مل', '1200 ml', 19.99, 'personal', 'صحن فخار، كوب فخار', 'Clay plate, clay cup', 'شامل التوصيل', 'Delivery included', '', 2, 'إصدار مطوّر من عائلة إرواء، مستوحى من تصميمها الكلاسيكي، بتفاصيل تمنحه طابعًا أكثر تميزًا وأناقة.', 'An evolved edition of the Irwa family, inspired by the classic, with details that give it a more distinguished, elegant character.'),
  ('إرواء لاينز', 'Irwa Lines', '1000 مل', '1000 ml', 18.99, 'personal', 'صحن فخار، كوب فخار', 'Clay plate, clay cup', 'شامل التوصيل', 'Delivery included', '', 3, 'إصدار مطوّر من عائلة إرواء، يتميز بخطوطه التصميمية التي ترسم شكلًا متفردًا للفخارة وتمنحها هوية بصرية مختلفة عن التصميم الكلاسيكي.', 'An evolved Irwa edition whose sculpted lines draw a unique silhouette and give it a visual identity of its own.'),
  ('إرواء كيرفي', 'Irwa Curvy', '1300 مل', '1300 ml', 19.99, 'personal', 'صحن فخار، كوب فخار', 'Clay plate, clay cup', 'شامل التوصيل', 'Delivery included', '', 4, 'إصدار مطوّر من عائلة إرواء، مستوحى من تصميمها الكلاسيكي، يتميز بانحناءاته الناعمة وتفاصيله المنسابة التي تمنحه حضورًا مختلفًا.', 'An evolved Irwa edition with soft curves and flowing details that give it a presence all its own.'),
  ('نقاء', 'Naqaa', '1400 مل', '1400 ml', 22, 'personal', 'صحن فخار مخصص للترشيح، كوب فخار', 'Clay filtering plate, clay cup', '', '', 'assets/img/products/naqaa.jpg', 5, 'تصميم مستوحى من شكل القُلّة الفخارية التقليدية، يجمع بين أصالة التراث وروح التصميم المعاصر.', 'Inspired by the traditional clay qulla — heritage authenticity with a contemporary spirit.'),
  ('رواق', 'Riwaq', '1500 مل', '1500 ml', 25, 'personal', 'كوب فخار', 'Clay cup', 'طابع ملكي', 'Regal design', 'assets/img/products/rawaq.jpg', 6, 'تصميم بطابع ملكي، يجمع بين الفخامة وأصالة الفخار، ليمنح رواق حضورًا مميزًا ضمن مجموعة وادي كلاي.', 'A regal design that unites luxury with the authenticity of clay — Riwaq''s signature presence in the Wadi Clay collection.'),
  ('بترا', 'Petra', '1400 مل', '1400 ml', 22, 'personal', 'صحن فخار مخصص للترشيح، كوب فخار', 'Clay filtering plate, clay cup', '', '', '', 7, 'تصميم يستلهم جمال التفاصيل التراثية، ويعكس طابعًا خاصًا يجمع بين الأصالة والحضور المميز.', 'A design drawn from the beauty of heritage details, with a character that is both authentic and striking.'),
  ('رحال', 'Rihal', '1000 مل', '1000 ml', 18, 'personal', 'صحن فخار، كاسة فخار، شنطة مخصصة للحمل', 'Clay plate, clay cup, carry bag', 'مع شنطة', 'Bag included', 'assets/img/products/rahhal.jpg', 8, 'تصميم عملي مستوحى من شكل أكواب ستانلي، يجمع بين سهولة الحمل وأناقة التصميم؛ مناسب للمكتب والسيارة والتنقل.', 'A practical tumbler-style design that is easy to carry and elegant — made for the office, the car and life on the go.'),
  ('القارورة العائلية', 'Family Qarora', '12 لتر', '12 L', 79, 'family', 'صحن ترشيح كبير، مضخة ذكية، كوب فخار', 'Large filtering plate, smart pump, clay cup', 'مع مضخة ذكية', 'Smart pump', 'assets/img/products/qarora.jpg', 10, 'قارورة فخارية بسعة 12 لتر، تجمع بين السعة الكبيرة والتصميم العملي، وتناسب العائلات والاستخدام اليومي المتكرر، مع مضخة ذكية تسهّل سحب المياه بكل سهولة.', 'A 12-litre clay vessel that pairs generous capacity with a practical design for families and daily use — with a smart pump for effortless pouring.'),
  ('زير غيث', 'Ghaith Zeer', '15 لتر', '15 L', 99, 'family', 'قاعدة فخار، حنفية أصلية من الستانلس ستيل، صحن ترشيح كبير، كوب فخار', 'Clay stand, genuine stainless-steel tap, large filtering plate, clay cup', 'الأكبر سعة', 'Largest size', 'assets/img/products/ghaith-15.jpg', 11, 'زير فخار بسعة عائلية كبيرة، يجمع بين أصالة الفخار والتصميم العصري المتقن، ويناسب العائلات الكبيرة والاستخدام اليومي المشترك.', 'A large family-size clay zeer that brings together authentic pottery and refined modern design — for big families and shared daily use.'),
  ('زير غيث', 'Ghaith Zeer', '6 لترات', '6 L', 59, 'family', 'قاعدة فخار، حنفية أصلية من الستانلس ستيل، صحن ترشيح كبير، كوب فخار', 'Clay stand, genuine stainless-steel tap, large filtering plate, clay cup', '', '', 'assets/img/products/ghaith-6.jpg', 12, 'زير غيث بسعة 6 لترات بحجم متوسط، يناسب الاستخدام اليومي في المنازل الصغيرة والمطابخ، ويوفر خيارًا عمليًا لمن يفضّلون سعة أقل مع الحفاظ على أصالة التصميم الفخاري.', 'The mid-size 6-litre Ghaith — ideal for smaller homes and kitchens, a practical choice for a lower capacity without losing the authentic clay design.'),
  ('إرواء بلس', 'Irwa Plus', '1000 مل', '1000 ml', 10, 'offers', '', '', 'عرض', 'Offer', '', 20, 'تصميم عصري بتفاصيل مميزة، يجمع بين أناقة الشكل وعملية الاستخدام اليومي.', 'A modern design with distinctive details, combining elegant form with everyday practicality.'),
  ('عرض كاسات نقاء ورواق', 'Naqaa & Riwaq cups offer', 'كوبان بسعر 5 دنانير', 'Two cups for 5 JOD', 5, 'offers', '', '', '١ + ١ مجاناً', 'Buy 1 get 1', '', 21, 'اشتري كوبًا واحصل على الثاني مجانًا! استمتعوا بعرض كاسات نقاء ورواق: كوبان بسعر 5 دنانير فقط. العرض متاح فقط عند شراء إحدى الفخارات المدرجة في قسم العروض.', 'Buy one cup, get the second free — two Naqaa & Riwaq cups for just 5 JOD. Available only with the purchase of a vessel from the offers section.'),
  ('كوب نقاء', 'Naqaa cup', '', '', 5, 'accessories', '', '', '', '', '', 30, 'كوب فخار من تشكيلة نقاء، متاح للشراء بشكل منفصل.', 'A clay cup from the Naqaa line, available separately.'),
  ('كوب رواق', 'Riwaq cup', '', '', 5, 'accessories', '', '', '', '', '', 31, 'كوب فخار من تشكيلة رواق، متاح للشراء بشكل منفصل.', 'A clay cup from the Riwaq line, available separately.'),
  ('صحن فخار', 'Clay plate', '', '', 1, 'accessories', '', '', '', '', '', 32, 'صحن فخار يوضع تحت الفخارة، متاح للشراء بشكل منفصل.', 'A clay plate to set under your vessel, available separately.');

commit;
