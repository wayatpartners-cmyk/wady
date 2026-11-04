/* ============================================================
   Wadi Clay — site settings (the only file you need to edit)
   ============================================================ */
window.SITE_CONFIG = {
  // WhatsApp number in international format, no + or spaces (e.g. 962791234567)
  whatsapp: "962797838721",
  instagram: "https://www.instagram.com/wadiclay/",
  facebook: "https://www.facebook.com/profile.php?id=61584512424077",

  // true = show the products listed in assets/js/products.js (admin panel edits are NOT shown).
  // Set back to false once supabase/UPDATE-2-collection.sql has been run in the Wadi Clay project.
  useLocalProducts: true,

  // Supabase (admin panel + live products). Leave empty to use assets/js/products.js instead.
  // Both values are in Supabase → Project Settings → API. The anon key is public by design;
  // the database rules in supabase/setup.sql decide who can change what.
  supabaseUrl: "https://asymcgkiakifxkedynwl.supabase.co",
  supabaseAnonKey: "sb_publishable_e1e64STQyU-Hh6k4OaOgQA_n0SVdTxs"
};
