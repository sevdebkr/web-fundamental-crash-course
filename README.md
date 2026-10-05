# Iceberg Digital Web Projesi

Bu klasör VS Code ile doğrudan açılabilir.

## Çalıştırma

1. VS Code içinde bu klasörü açın.
2. `index.html` dosyasını **Live Server** eklentisiyle açın.

Alternatif olarak klasör içinde bir yerel HTTP sunucusu çalıştırabilirsiniz.

## Klasör yapısı

- `index.html`: Sayfanın HTML yapısı
- `css/style.css`: Tüm tasarım ve responsive stiller
- `js/app.js`: Sayfa davranışları ve Supabase REST bağlantısı
- `js/quiz-data-en-hints.js`: İngilizce quiz soru ve hint havuzu
- `js/matching-data.js`: Eşleştirme havuzu (quiz yalnızca İngilizce kullanır)
- `assets/images/`: Görseller
- `supabase/setup.sql`: Supabase tablo/politika kurulum dosyası

## Teknik terim sözlüğü

Konu sayfalarındaki önemli teknik terimler pembe ve noktalı alt çizgili olarak gösterilir. Masaüstünde terimin üzerinde kısa süre bekleyerek veya klavyeyle odaklanarak; mobilde ise terime dokunarak kısa tanımı açabilirsiniz. Tanım kutusundaki bağlantı kavramın ana bölümüne götürür.

Terimler ve Türkçe/İngilizce tanımlar `js/app.js` içindeki `GLOSSARY` sabitinde merkezi olarak yönetilir.

## Quiz süresi ve soru navigasyonu

Quiz yalnızca İngilizce çalışır ve quiz sayfasında dil seçimi gösterilmez. Katılımcı bilgileri girilip başlatıldıktan sonra 30 dakikalık geri sayım başlar. Her denemede 50 soruluk havuzdan 20 soru ve 10 kavramlık havuzdan 5 eşleştirme rastgele seçilir. Her doğru cevap 4 puandır ve toplam puan 100'dür. Çoktan seçmeli bir soruda ipucu açılırsa, yalnızca o soru doğru cevaplandığında 1 puan kesilir; yanlış veya boş cevaplar 0 puandır. Üstteki süre çubuğu buz mavisinden pembeye, son üç dakikada neon kırmızıya döner. Süre dolduğunda mevcut cevaplar otomatik değerlendirilir ve normal Supabase kayıt akışı kullanılır.

Quiz altındaki 20 nokta çoktan seçmeli soru durumlarını gösterir. Çoktan seçmeli sorular boş bırakılarak geçilebilir: aktif soru silver ışıklı, cevaplanan sorular neon pembe, görülüp boş bırakılan sorular buz mavisi ve henüz görülmeyen sorular koyu renkte gösterilir. Noktalara tıklayarak sorular arasında geçiş yapılabilir. Son ekranda 5 kavram eşleştirilir.

## Supabase notu

Mevcut Supabase URL ve publishable key `js/app.js` içinde korunmuştur. Frontend içinde yalnızca publishable/anon anahtar kullanılmalıdır; `service_role` anahtarı eklenmemelidir. Veritabanı erişimini Supabase RLS politikalarıyla sınırlandırın.

Eski 25 puanlık bir Supabase kurulumu kullanıyorsanız `supabase/migrate-to-100-points.sql` dosyasını SQL Editor içinde bir kez çalıştırın. Önceki 100 puanlık migration zaten çalıştırıldıysa, ipucu kesintili skorların kaydedilebilmesi için bunun yerine `supabase/migrate-add-hint-penalties.sql` dosyasını bir kez çalıştırın. Yeni kurulumlarda doğrudan `supabase/setup.sql` kullanılabilir.
