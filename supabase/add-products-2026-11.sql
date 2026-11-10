-- Wadi Clay: products from the owner's copy (Irwa editions, Petra, offers, accessories)
-- Run in Supabase: SQL Editor -> paste -> Run. Safe to re-run (skips names already there).
insert into public.products
  (name_ar, name_en, capacity_ar, capacity_en, desc_ar, desc_en, gifts_ar, gifts_en, tag_ar, tag_en, category, price, image_url, sort_order)
select v.* from (values
  ('إرواء بريميوم', 'Irwa Premium', '1200 مل', '1200 ml',
   'إصدار مطوّر من عائلة إرواء، مستوحى من تصميمها الكلاسيكي، بتفاصيل تمنحه طابعًا أكثر تميزًا وأناقة. السعر شامل التوصيل.',
   'An elevated edition of the Irwa family, inspired by its classic design, with details that give it a more distinctive, elegant character. Price includes delivery.',
   'صحن فخار، كوب فخار', 'Clay plate, clay cup', 'شامل التوصيل', 'Delivery included', 'personal', 19.99, 'assets/img/products/wc-irwa-premium-1.jpg', 10),
  ('إرواء لاينز', 'Irwa Lines', '1000 مل', '1000 ml',
   'إصدار مطوّر من عائلة إرواء، يتميز بخطوطه التصميمية التي ترسم شكلًا متفردًا للفخارة وتمنحها هوية بصرية مختلفة عن التصميم الكلاسيكي. السعر شامل التوصيل.',
   'An elevated edition of the Irwa family, defined by sculpted lines that give the carafe a unique shape and its own visual identity. Price includes delivery.',
   'صحن فخار، كوب فخار', 'Clay plate, clay cup', 'شامل التوصيل', 'Delivery included', 'personal', 18.99, 'assets/img/products/wc-irwa-lines-1.jpg', 11),
  ('إرواء كيرفي', 'Irwa Curvy', '1300 مل', '1300 ml',
   'إصدار مطوّر من عائلة إرواء، مستوحى من تصميمها الكلاسيكي، يتميز بانحناءاته الناعمة وتفاصيله المنسابة التي تمنحه حضورًا مختلفًا. السعر شامل التوصيل.',
   'An elevated edition of the Irwa family, inspired by its classic design, with soft curves and flowing details that give it a different presence. Price includes delivery.',
   'صحن فخار، كوب فخار', 'Clay plate, clay cup', 'شامل التوصيل', 'Delivery included', 'personal', 19.99, 'assets/img/products/wc-irwa-curvy-1.jpg', 12),
  ('بترا', 'Petra', '1400 مل', '1400 ml',
   'تصميم يستلهم جمال التفاصيل التراثية، ويعكس طابعًا خاصًا يجمع بين الأصالة والحضور المميز.',
   'A design inspired by the beauty of heritage details, with a character that unites authenticity and a distinctive presence.',
   'صحن فخار مخصص للترشيح، كوب فخار', 'Filtering clay plate, clay cup', '', '', 'personal', 22, 'assets/img/products/wc-petra-1.jpg', 13),
  ('إرواء بلس', 'Irwa Plus', '1000 مل', '1000 ml',
   'تصميم عصري بتفاصيل مميزة، يجمع بين أناقة الشكل وعملية الاستخدام اليومي.',
   'A modern design with distinctive details, combining an elegant shape with everyday practicality.',
   '', '', 'عرض', 'Offer', 'offers', 10, 'assets/img/products/wc-irwa-plus-1.jpg', 14),
  ('عرض كاسات نقاء ورواق', 'Naqaa & Riwaq cups offer', 'كوبان', '2 cups',
   'اشتري كوبًا واحصل على الثاني مجانًا! استمتعوا بعرض كاسات نقاء ورواق: كوبان بسعر 5 دنانير فقط. العرض متاح فقط عند شراء إحدى الفخارات المدرجة في قسم العروض.',
   'Buy one cup, get the second free! Two Naqaa or Riwaq cups for just 5 JOD. Available only with the purchase of one of the carafes in the offers section.',
   '', '', 'اشتري واحد والثاني مجانًا', 'Buy one, get one free', 'offers', 5, 'assets/img/products/wc-cup-naqaa-1.jpg', 15),
  ('كوب نقاء', 'Naqaa cup', '', '',
   'من ملحقات وادي كلاي المتاحة للشراء بشكل منفصل، لتختاروا ما يناسب فخاراتكم واحتياجاتكم.',
   'A Wadi Clay accessory, available separately to suit your carafes and your needs.',
   '', '', '', '', 'accessories', 5, 'assets/img/products/wc-cup-naqaa-1.jpg', 16),
  ('كوب رواق', 'Riwaq cup', '', '',
   'من ملحقات وادي كلاي المتاحة للشراء بشكل منفصل، لتختاروا ما يناسب فخاراتكم واحتياجاتكم.',
   'A Wadi Clay accessory, available separately to suit your carafes and your needs.',
   '', '', '', '', 'accessories', 5, 'assets/img/products/wc-cup-riwaq-1.jpg', 17),
  ('صحن فخار', 'Clay plate', '', '',
   'من ملحقات وادي كلاي المتاحة للشراء بشكل منفصل، لتختاروا ما يناسب فخاراتكم واحتياجاتكم.',
   'A Wadi Clay accessory, available separately to suit your carafes and your needs.',
   '', '', '', '', 'accessories', 1, 'assets/img/products/wc-plate-1.jpg', 18)
) as v(name_ar, name_en, capacity_ar, capacity_en, desc_ar, desc_en, gifts_ar, gifts_en, tag_ar, tag_en, category, price, image_url, sort_order)
where not exists (select 1 from public.products p where p.name_en = v.name_en and p.is_active);
