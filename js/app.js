document.querySelector('.brand img').src = 'assets/images/iceberg-x-logo-blackbg.png';
/* ======================================================================
   CONFIG
====================================================================== */
const QUIZ_SIZE = 20;
const MATCHING_SIZE = 5;
const QUIZ_TOTAL_ITEMS = QUIZ_SIZE + MATCHING_SIZE;
const POINTS_PER_ITEM = 4;
const QUIZ_LANGUAGE = 'en';
const QUIZ_DURATION_MS = 30 * 60 * 1000;
const SUPABASE_URL = "https://mktvvrzmldheqrkgmcau.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_khy1ZsX40MbygiQ_nnT-mg_LrEMTdC4";

/* ======================================================================
   UI STRINGS
====================================================================== */
const STR = {
  tr:{
    brandSub:"STAJ EĞİTİM MERKEZİ", drawerTitle:"İçindekiler",
    navTopics:"Konular", navUtil:"Diğer",
    heroEyebrow:"STAJYER EĞİTİM PROGRAMI",
    heroTitleA:"Yüzeyin", heroTitleHL:"altına", heroTitleB:"dalın.",
    heroLede:"Web geliştirmenin temelini, bir buzdağının görünmeyen kısmı gibi katman katman keşfedin. 11 konu, yüzeyden derine doğru sıralanır — her biri bir öncekinin üzerine inşa edilir.",
    metaTopics:"Konu", metaLevel:"Seviye", metaLevelVal:"Başlangıç", metaFormat:"Format", metaFormatVal:"Kendi hızında",
    waterline:"SU YÜZEYİ — BURADAN AŞAĞIYA İNİYORUZ",
    quizTag:"BÖLÜM 12", quizTitle:"Bilgini Test Et", quizDesc:"11 konuyu bitirdikten sonra 20 soru ve 5 eşleştirmeden oluşan 100 puanlık quiz ile kendini sına. Her denemede içerikler soru havuzundan rastgele seçilir.",
    quizBtn:"Quiz'e Git", quizStart:"Quiz'i Başlat", quizNext:"Sonraki Soru", quizFinish:"Sonuçları Gör", quizRestart:"Yeniden Başla",
    faqTag:"DAHA FAZLA BİLGİ", faqTitle:"More Knowledge",
    backHome:"Menüye Dön", allTopics:"Tüm Konular",
    prevTopic:"Önceki", nextTopic:"Sonraki", toQuiz:"Quiz'e Geç",
    footerLine:"Staj Eğitim Programı", footerLine2:"11 Konu · Quiz · More Knowledge",
    depthLabel:"derinlik"
  },
  en:{
    brandSub:"INTERNSHIP TRAINING HUB", drawerTitle:"Contents",
    navTopics:"Topics", navUtil:"More",
    heroEyebrow:"INTERN TRAINING PROGRAM",
    heroTitleA:"Dive", heroTitleHL:"beneath", heroTitleB:"the surface.",
    heroLede:"Explore the fundamentals of web development layer by layer, like the hidden mass of an iceberg. 11 topics, ordered from tip to depth — each one builds on the last.",
    metaTopics:"Topics", metaLevel:"Level", metaLevelVal:"Beginner", metaFormat:"Format", metaFormatVal:"Self-paced",
    waterline:"WATERLINE — DESCENDING FROM HERE",
    quizTag:"CHAPTER 12", quizTitle:"Test Your Knowledge", quizDesc:"After all 11 topics, take a 100-point quiz with 20 questions and 5 matches. Each attempt draws a new random selection from the question pools.",
    quizBtn:"Go to Quiz", quizStart:"Start Quiz", quizNext:"Next Question", quizFinish:"View Results", quizRestart:"Restart",
    faqTag:"MORE KNOWLEDGE", faqTitle:"More Knowledge",
    backHome:"Back to Menu", allTopics:"All Topics",
    prevTopic:"Previous", nextTopic:"Next", toQuiz:"Go to Quiz",
    footerLine:"Internship Training Program", footerLine2:"11 Topics · Quiz · More Knowledge",
    depthLabel:"depth"
  }
};

/* ======================================================================
   ICONS (inline, minimal line style)
====================================================================== */
const ICON = {
  globe:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 2.6 4.2 5.7 4.2 9s-1.4 6.4-4.2 9c-2.8-2.6-4.2-5.7-4.2-9s1.4-6.4 4.2-9z"/></svg>`,
  swap:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 8h13l-3-3M20 16H7l3 3"/></svg>`,
  code:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>`,
  plug:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 2v5M15 2v5M7 7h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V7zM12 15v3M9 22h6"/></svg>`,
  key:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/></svg>`,
  shield:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/></svg>`,
  db:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="5" rx="7" ry="2.5"/><path d="M5 5v14c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/></svg>`,
  clock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>`,
  cloud:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 18a4.5 4.5 0 0 1-.6-8.96A5.5 5.5 0 0 1 17 9.05 4 4 0 0 1 16.5 18H7z"/></svg>`,
  branch:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="6" r="2.2"/><circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="9" r="2.2"/><path d="M6 8.2V15.8M6 8.2C6 12 12 12 15.8 10"/></svg>`,
};

/* ======================================================================
   DIVIDER BANNERS (decorative "photos" placed between topics)
====================================================================== */
function bannerA(){ return `
<svg viewBox="0 0 880 160" xmlns="http://www.w3.org/2000/svg">
<rect width="880" height="160" fill="#0a0c12"/>
<defs><linearGradient id="gA" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#ff2699" stop-opacity=".55"/><stop offset="1" stop-color="#5fe3ff" stop-opacity=".35"/></linearGradient></defs>
<polygon points="60,140 200,20 340,140" fill="none" stroke="url(#gA)" stroke-width="2"/>
<polygon points="180,140 330,-10 480,140" fill="none" stroke="#5fe3ff" stroke-opacity=".35" stroke-width="1.4"/>
<line x1="0" y1="140" x2="880" y2="140" stroke="#ffffff" stroke-opacity=".12"/>
<circle cx="620" cy="55" r="3" fill="#ff2699"/><circle cx="660" cy="90" r="2" fill="#5fe3ff"/>
<circle cx="720" cy="40" r="2.4" fill="#ff2699" opacity=".7"/><circle cx="780" cy="100" r="2" fill="#5fe3ff" opacity=".7"/>
<circle cx="820" cy="60" r="1.6" fill="#ffffff" opacity=".5"/>
<text x="30" y="30" font-family="JetBrains Mono, monospace" font-size="10" fill="#5c6273" letter-spacing="2">— 0 M —</text>
</svg>`; }
function bannerB(){ return `
<svg viewBox="0 0 880 160" xmlns="http://www.w3.org/2000/svg">
<rect width="880" height="160" fill="#0a0c12"/>
<defs><linearGradient id="gB" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#5fe3ff" stop-opacity="0"/><stop offset=".5" stop-color="#5fe3ff" stop-opacity=".5"/><stop offset="1" stop-color="#5fe3ff" stop-opacity="0"/></linearGradient></defs>
<rect x="0" y="78" width="880" height="1" fill="url(#gB)"/>
<rect x="0" y="82" width="880" height="1" fill="#ff2699" fill-opacity=".22"/>
<g fill="none" stroke="#ff2699" stroke-width="1.5" stroke-opacity=".5">
<path d="M100 78 L100 40 L160 40"/><path d="M260 78 L260 118 L330 118"/>
<path d="M500 78 L500 30 L580 30"/><path d="M700 78 L700 130 L760 130"/>
</g>
<circle cx="160" cy="40" r="4" fill="#ff2699"/><circle cx="330" cy="118" r="4" fill="#5fe3ff"/>
<circle cx="580" cy="30" r="4" fill="#5fe3ff"/><circle cx="760" cy="130" r="4" fill="#ff2699"/>
<text x="820" y="150" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="10" fill="#5c6273" letter-spacing="2">SIGNAL</text>
</svg>`; }
function bannerC(){ return `
<svg viewBox="0 0 880 160" xmlns="http://www.w3.org/2000/svg">
<rect width="880" height="160" fill="#0a0c12"/>
<g stroke="#ffffff" stroke-opacity=".05">
<line x1="0" y1="20" x2="880" y2="20"/><line x1="0" y1="60" x2="880" y2="60"/>
<line x1="0" y1="100" x2="880" y2="100"/><line x1="0" y1="140" x2="880" y2="140"/>
</g>
<path d="M0 100 Q 220 40 440 90 T 880 70" fill="none" stroke="#ff2699" stroke-width="2" stroke-opacity=".6"/>
<path d="M0 120 Q 220 150 440 110 T 880 130" fill="none" stroke="#5fe3ff" stroke-width="1.4" stroke-opacity=".45"/>
<circle cx="440" cy="90" r="5" fill="#ff2699"/><circle cx="440" cy="90" r="10" fill="none" stroke="#ff2699" stroke-opacity=".4"/>
<text x="30" y="140" font-family="JetBrains Mono, monospace" font-size="10" fill="#5c6273" letter-spacing="2">— 260 M —</text>
</svg>`; }
function bannerD(){ return `
<svg viewBox="0 0 880 160" xmlns="http://www.w3.org/2000/svg">
<rect width="880" height="160" fill="#0a0c12"/>
<polygon points="440,10 830,150 50,150" fill="none" stroke="#5fe3ff" stroke-opacity=".3" stroke-width="1.4"/>
<polygon points="440,50 700,150 180,150" fill="none" stroke="#ff2699" stroke-opacity=".55" stroke-width="1.8"/>
<line x1="0" y1="150" x2="880" y2="150" stroke="#ffffff" stroke-opacity=".12"/>
<circle cx="120" cy="70" r="2" fill="#5fe3ff"/><circle cx="770" cy="55" r="2.4" fill="#ff2699"/>
<circle cx="60" cy="110" r="1.6" fill="#ffffff" opacity=".4"/><circle cx="810" cy="95" r="1.8" fill="#5fe3ff" opacity=".6"/>
<text x="850" y="30" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="10" fill="#5c6273" letter-spacing="2">— 410 M —</text>
</svg>`; }
const BANNERS = [bannerA, bannerB, bannerC, bannerD];

const LEARNING_RESOURCES = {
  1: { title:'How the Web Works', source:'MDN Web Docs', url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works' },
  2: { title:'Client-Server Overview', source:'MDN Web Docs', url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview' },
  3: { title:'Overview of HTTP', source:'MDN Web Docs', url:'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview' },
  4: { title:'Web API Design Best Practices', source:'Microsoft Learn', url:'https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design' },
  5: { title:'Session, Cookie, JWT, Token, SSO, and OAuth 2.0', source:'ByteByteGo', url:'https://bytebytego.com/guides/session-cookie-jwt-token-sso-and-oauth-2/' },
  6: { title:'Web Security', source:'MDN Web Docs', url:'https://developer.mozilla.org/en-US/docs/Web/Security', additional:{ title:'Web Performance', source:'MDN Web Docs', url:'https://developer.mozilla.org/en-US/docs/Web/Performance' } },
  7: { title:'What Is a Database?', source:'AWS', url:'https://aws.amazon.com/what-is/database/' },
  8: { title:'Best Practices for Background Jobs', source:'Microsoft Learn', url:'https://learn.microsoft.com/en-us/azure/architecture/best-practices/background-jobs' },
  9: { title:'Learn Testing', source:'Google web.dev', url:'https://web.dev/learn/testing' },
  10: { title:'Publishing Your Website', source:'MDN Web Docs', url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website' },
  11: { title:'Hello World', source:'GitHub Docs', url:'https://docs.github.com/en/get-started/using-github/hello-world' }
};

/* ======================================================================
   TOPIC DATA
====================================================================== */
const TOPICS = [
{
  id:1, icon:"globe", depth:"-40 m",
  tr:{title:"Web Nedir ve Neden Önemlidir?", summary:"Web (World Wide Web), internet üzerinden birbirine bağlanan web sayfaları ve uygulamalardan oluşan bir bilgi sistemidir.", html:`
      <div class="tsec">
        <h3>Web Nedir?</h3>
        <p>Web (World Wide Web), internet üzerinden birbirine bağlanan web sayfaları ve uygulamalardan oluşan bir bilgi sistemidir.</p>
        <p>İnternet büyük bir ağdır. Web, bu ağın üzerinde çalışan hizmetlerden yalnızca biridir.</p>
        <p>İnterneti bir şehir olarak düşün:</p>
        <ul class="plain">
          <li>İnternet → Şehirdeki tüm yollar</li>
          <li>Web → Bu yollar üzerindeki binalar</li>
          <li>Web siteleri → Binalar</li>
          <li>Sayfalar → Odalar</li>
        </ul>
        <p>Gerçek Hayattan Örnek</p>
        <p>Google'ı açıp "en yakın restoran" diye aradığında:</p>
        <ul class="plain">
          <li>Tarayıcı isteğini gönderir.</li>
          <li>Google'ın sunucuları bir yanıt gönderir.</li>
          <li>Sonuçları ekranında görürsün.</li>
        </ul>
        <p>Bu sürecin tamamı Web sayesinde gerçekleşir.</p>
        <p>Neden Önemli?</p>
        <p>Web'in nasıl çalıştığını anlamadan şunları tam olarak kavrayamazsın:</p>
        <ul class="plain">
          <li>Frontend kodunun neden bu şekilde çalıştığını,</li>
          <li>Backend'in neden gerekli olduğunu,</li>
          <li>API'lerin arkasındaki mantığı,</li>
          <li>Verinin nasıl taşındığını</li>
        </ul>
        <p>Bu nedenle bir sonraki bölümde, bir web sitesini ziyaret ettiğinde perde arkasında kimin ne yaptığını (İstemci ve Sunucu) öğreneceğiz.</p>
        <h3><span class="tag">DERİNLEŞTİR</span>İnternet, Web ve WWW Protokolleri</h3>
        <p>Başlangıç düzeyinde Web'in internetin "üzerinde" çalıştığını bilmek yeterlidir. Orta düzeyde ise sıklıkla birbirinin yerine kullanılan üç katmanı ayırmak faydalıdır:</p>
        <ul class="plain">
          <li>İnternet — fiziksel/mantıksal ağ katmanı: kablolar, yönlendiriciler ve makineler arasında ham paketleri taşıyan IP protokolü.</li>
          <li>WWW (World Wide Web) — HTTP/HTTPS, HTML ve bağlantılar kullanarak internet üzerinde çalışan bir uygulamadır. Birçok internet hizmetinden biridir.</li>
          <li>Diğer internet hizmetleri — e-posta (SMTP), dosya aktarımı (FTP), gerçek zamanlı mesajlaşma ve akış protokolleri de internet üzerinde çalışır; ancak bunlar "Web" değildir.</li>
        </ul>
        <p>Orta düzeyde faydalı bir diğer ayrım, statik ve dinamik içeriktir:</p>
        <ul class="plain">
          <li>Statik içerik — her ziyaretçiye aynı HTML/CSS/JS dosyası sunulur (örneğin basit bir açılış sayfası).</li>
          <li>Dinamik içerik — sunucu, sayfayı veya yanıtı her istek için çoğunlukla bir veritabanına dayanarak oluşturur (örneğin kişiselleştirilmiş Instagram akışın).</li>
        </ul>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Statik hosting ile dinamik backend arasında seçim yapmak, gerçek bir projedeki ilk mimari kararlardan biridir. Maliyeti, ölçeklenebilirliği ve yazman gereken sunucu tarafı kodun miktarını doğrudan etkiler.</p>
      </div>
      <div class="tsec">
        <h3>Web Nasıl Çalışır?</h3>
        <p>Temel düzeyde Web, tarayıcının sunucudan bir sayfa istemesi ve sunucunun bu sayfayı göndermesiyle çalışır. Bu basit alışverişin altında belirli bir adımlar dizisi vardır.</p>
        <h3><span class="tag">DERİNLEŞTİR</span>Bir İsteğin Tam Yaşam Döngüsü</h3>
        <p>Bir URL yazıp Enter'a bastığında, her biri bir öncekinin üzerine kurulan birkaç farklı adım sırayla gerçekleşir:</p>
        <ul class="plain">
          <li>1. DNS Çözümlemesi — tarayıcı, DNS sunucusundan alan adını (örneğin example.com) bir IP adresine çevirmesini ister.</li>
          <li>2. TCP Bağlantısı — tarayıcı üç aşamalı el sıkışma (SYN, SYN-ACK, ACK) kullanarak bu IP adresine bir TCP bağlantısı açar.</li>
          <li>3. TLS El Sıkışması (HTTPS) — site HTTPS kullanıyorsa gerçek veriler gönderilmeden önce şifreli bir kanal kurulur (6. bölümde ayrıntılı olarak ele alınır).</li>
          <li>4. HTTP İsteği — tarayıcı güvenli bağlantı üzerinden belirli bir kaynağı isteyen bir HTTP isteği gönderir.</li>
          <li>5. Sunucuda İşleme — sunucu isteği yönlendirir, backend mantığını çalıştırır, gerekirse veritabanını sorgular ve yanıtı oluşturur.</li>
          <li>6. HTTP Yanıtı — sunucu durum kodunu, header'ları ve gövdeyi (HTML, JSON vb.) geri gönderir.</li>
          <li>7. Rendering — tarayıcı HTML'i ayrıştırır, DOM'u oluşturur, CSS'i uygular, JavaScript'i çalıştırır ve pikselleri ekrana çizer.</li>
        </ul>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Performans sorunlarını gidermek neredeyse her zaman bu yedi adımdan hangisinin yavaş olduğunu belirlemekle başlar. Yavaş DNS çözümlemesi, yavaş veritabanı sorgusu ve yavaş JavaScript paketi kullanıcıya aynı şekilde hissettirir ("sayfa yükleniyor"); ancak tamamen farklı çözümler gerektirir.</p>
      </div>
      <div class="tsec">
        <h3>Frontend ve Backend Rolleri</h3>
        <p>İstemci tarafında çalışan koda frontend, sunucu tarafında çalışan koda backend denir. Burada da önceki bölümdeki restoran benzetmesini kullanmayı sürdüreceğiz.</p>
        <p>İstemci Tarafı ve Sunucu Tarafı Mantık Arasındaki Fark Nedir?</p>
        <p>Temel fark, kodun nerede çalıştığıdır.</p>
        <ul class="plain">
          <li>İstemci tarafı: Kod, kullanıcının kendi cihazında (tarayıcıda) çalışır. Tarayıcı bu kodu indirir ve kendisi çalıştırır. Kullanıcı, tarayıcının "geliştirici araçları" ile kodu görebilir, hatta değiştirebilir.</li>
          <li>Sunucu tarafı: Kod sunucuda çalışır. Kullanıcı bu kodu doğrudan göremez veya değiştiremez; yalnızca sonucunu (HTML sayfası, JSON yanıtı vb.) alır.</li>
        </ul>
        <p>Bu ayrım en çok güvenlik açısından önemlidir: şifre kontrolü, ödeme veya veritabanı erişimi gibi hassas işlemler istemci tarafında yapılmaz; çünkü istemci tarafındaki her şey kullanıcı tarafından görülebilir ve değiştirilebilir. Bu nedenle bu tür işler her zaman sunucu tarafında yapılır.</p>
        <h4 class="content-subheading">Frontend</h4>
        <p>Kullanıcının gördüğü ve etkileşim kurduğu kısımdır.</p>
        <p>Örneğin: düğmeler, menüler, renkler, animasyonlar ve sayfa düzeni.</p>
        <p>Bir restoranda müşterinin gördüğü bölümdür: masalar, menü tasarımı ve dekorasyon.</p>
        <p>Kullanılan Teknolojiler: HTML, CSS, JavaScript, React, Angular, Vue.</p>
        <p>Neden önemli?</p>
        <p>Kullanıcı deneyimini şekillendirir. Kötü bir frontend kullanıcıyı zorlar ve siteden ayrılmasına neden olur.</p>
        <h4 class="content-subheading">Backend</h4>
        <p>Bir web uygulamasının görünmeyen, işlemleri yürüten kısmıdır. Görevleri:</p>
        <ul class="plain">
          <li>Veriyi işlemek</li>
          <li>Kullanıcıların kimliğini doğrulamak</li>
          <li>Veritabanıyla iletişim kurmak</li>
          <li>Güvenliği sağlamak</li>
        </ul>
        <p>Bir restoranda mutfak ve aşçılardır: müşteri görmez ama asıl iş burada gerçekleşir.</p>
        <p>Kullanılan Teknolojiler: C#, Java, Python, Node.js, PHP.</p>
        <p>Başlangıçta Sık Yapılan Hatalar</p>
        <ul class="plain">
          <li>❌ Frontend'in yalnızca tasarımdan ibaret olduğunu düşünmek. Frontend; kullanıcı deneyimini, performansı ve veri işlemeyi de kapsar.</li>
          <li>❌ Backend'in yalnızca veri getirmekten ibaret olduğunu düşünmek. Backend; güvenliği, yetkilendirmeyi ve iş kurallarını da kapsar.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Rendering Stratejileri ve Mimari Seçimler</h3>
        <p>Modern framework'ler sınırları belirsizleştirdiği için orta düzey geliştiriciler, frontend/backend ayrımının ötesinde rendering işleminin nerede gerçekleştiğini de bilmelidir:</p>
        <table class="tcompare">
          <tr><th>Strateji</th><th>HTML Nerede Oluşturulur?</th><th>Tipik Kullanım Alanı</th></tr>
          <tr><td>CSR (İstemci Tarafında Rendering)</td><td>Sayfa yüklendikten sonra tarayıcıda, JavaScript ile</td><td>Yoğun etkileşimli paneller (örneğin basit bir React SPA)</td></tr>
          <tr><td>SSR (Sunucu Tarafında Rendering)</td><td>Sunucuda, her istek için</td><td>Kişiselleştirme de gerektiren, SEO'nun önemli olduğu sayfalar (örneğin Next.js)</td></tr>
          <tr><td>SSG (Statik Site Üretimi)</td><td>Dağıtımdan önce, build sırasında</td><td>Bloglar, dokümantasyon ve pazarlama sayfaları</td></tr>
          <tr><td>Hibrit / ISR</td><td>Build sırasında ve istek başına üretimin birleşimi</td><td>Büyük e-ticaret katalogları</td></tr>
        </table>
        <p>Bu aşamada bilinmesi faydalı olan ilgili mimari yaklaşımlar:</p>
        <ul class="plain">
          <li>SPA (Tek Sayfalı Uygulama) — tek bir HTML iskeleti vardır; gezinme, sayfanın tamamı yeniden yüklenmeden JavaScript tarafından yönetilir.</li>
          <li>MPA (Çok Sayfalı Uygulama) — her gezinme işleminde yeni bir HTML sayfası için sunucuya yeni bir istek gönderilir.</li>
          <li>API öncelikli / ayrıştırılmış mimari — backend doğrudan HTML üretmek yerine yalnızca bir API sunar; bir veya daha fazla bağımsız frontend (web, mobil) bu API'yi kullanır.</li>
        </ul>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">CSR, SSR ve SSG arasında seçim yapmak yalnızca teknik bir ayrıntı değildir. SEO'yu, ilk yükleme süresini, hosting maliyetini ve çalıştırıp bakımını yapman gereken sunucu altyapısının miktarını etkiler.</p>
      </div>
      <div class="tsec">
        <h3>Erişilebilirlik ve SEO Temelleri</h3>
        <p>Kodun nerede çalıştığını (istemci veya sunucu) bilmek tek başına yeterli değildir. Gerçek insanların ve arama motorlarının geliştirdiğin ürüne erişip onu kullanabilmesini iki konu daha belirler.</p>
        <h4 class="content-subheading">Erişilebilirlik (a11y)</h4>
        <ul class="plain">
          <li>Tanım: Bir siteyi, ekran okuyucu, yalnızca klavyeyle gezinme veya sesle kontrol kullananlar dahil engelli bireylerin kullanabileceği şekilde geliştirmektir.</li>
          <li>Gerçek Hayattan Örnek: Rampası olmayan ve menüsü yalnızca küçük harflerle basılmış bir restoran, tekerlekli sandalye kullanan veya küçük yazıları okuyamayan müşterileri fark ettirmeden geri çevirir. Yemekler iyidir ama binanın kendisi bir engeldir.</li>
          <li>Neden Önemli?: Erişilemeyen bir site yalnızca kullanıcı kaybetme riski taşımaz; birçok ülkede erişilebilirlikle ilgili yasal gereklilikler de vardır. Doğru etiketler ve klavye desteği gibi iyileştirmeler, ürünü genellikle herkes için daha iyi hale getirir.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Semantik HTML ve Temel SEO Sinyalleri</h3>
        <p>Erişilebilirlik ve SEO büyük ölçüde aynı temele dayanır: öğelerin yalnızca nasıl göründüğünü değil, *ne olduğunu* açıklayan HTML.</p>
        <ul class="plain">
          <li>Semantik HTML — düğme gibi görünecek şekilde biçimlendirilmiş bir &lt;div&gt; yerine &lt;button&gt;, &lt;nav&gt;, &lt;header&gt; ve doğru başlık düzeylerini kullanmaktır. Ekran okuyucular ve arama motoru tarayıcıları sayfayı anlamak için bu yapıya dayanır.</li>
          <li>ARIA nitelikleri — &lt;div&gt; öğelerinden oluşturulmuş özel bir açılır menü gibi, yerleşik erişilebilirlik bilgisi olmayan öğelere rol ve durum bilgisi eklemenin yoludur. Yalnızca semantik HTML tek başına yeterli olmadığında kullanılır.</li>
          <li>Temel SEO sinyalleri — &lt;title&gt; etiketi, meta açıklaması, görsellerin alternatif metinleri ve canonical URL, arama motorunun sayfanın konusunu ve sonuçlarda nasıl listeleneceğini belirlemek için okuduğu bilgilerdir.</li>
        </ul>
        <p>1. bölümdeki rendering stratejisi seçimi burada yeniden önem kazanır: arama motoru tarayıcısı ilk gönderilen HTML'i okur. Bu nedenle JavaScript çalışana kadar boş kalan bir sayfanın (saf CSR) indekslenmesi, sunucuda oluşturulan bir sayfaya (SSR/SSG) göre çok daha zor olabilir.</p>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Ekran okuyucunun kullanamadığı bir açılır menü veya arama motorunun okuyamadığı, istemcide oluşturulan bir blog, backend ne kadar iyi çalışırsa çalışsın fark edilmeden kullanıcı kaybettirir. Bunlar isteğe bağlı süslemeler değil, frontend'in doğru çalışmasıyla ilgili konulardır.</p>
      </div>`},
  en:{title:"What Is the Web and Why Does It Matter?", summary:"The Web (World Wide Web) is an information system made up of web pages and applications that are linked to one another over the internet.", html:`
      <div class="tsec">
        <h3>What Is the Web?</h3>
        <p>The Web (World Wide Web) is an information system made up of web pages and applications that are linked to one another over the internet.</p>
        <p>The internet is a large network. The Web is just one of the services that runs on top of that network.</p>
        <p>Think of the internet as a city:</p>
        <ul class="plain">
          <li>Internet → All the roads in the city</li>
          <li>Web → The buildings along those roads</li>
          <li>Websites → Buildings</li>
          <li>Pages → Rooms</li>
        </ul>
        <p>Real-Life Example</p>
        <p>When you open Google and search for "nearest restaurant":</p>
        <ul class="plain">
          <li>The browser sends your request.</li>
          <li>Google's servers send back a response.</li>
          <li>You see the results on your screen.</li>
        </ul>
        <p>This entire process happens thanks to the Web.</p>
        <p>Why Does It Matter?</p>
        <p>Without understanding how the Web works, you can't fully grasp:</p>
        <ul class="plain">
          <li>Why frontend code works the way it does,</li>
          <li>Why the backend is needed,</li>
          <li>The logic behind APIs,</li>
          <li>How data is transported</li>
        </ul>
        <p>That's why, in the next section, we'll learn who does what behind the scenes (the Client and the Server) when you visit a website.</p>
        <h3><span class="tag">DEEP DIVE</span>Internet vs. Web vs. WWW Protocols</h3>
        <p>At the beginner level it's enough to know the Web sits "on top of" the internet. At the intermediate level, it helps to separate three layers that are often used interchangeably:</p>
        <ul class="plain">
          <li>Internet — the physical/logical network layer: cables, routers, and the IP protocol that moves raw packets between machines.</li>
          <li>WWW (World Wide Web) — an application built on top of the internet using HTTP/HTTPS, HTML, and hyperlinks. It is one internet service among many.</li>
          <li>Other internet services — email (SMTP), file transfer (FTP), real-time messaging, and streaming protocols also run on the internet but are not "the Web."</li>
        </ul>
        <p>A useful intermediate distinction is static vs. dynamic content:</p>
        <ul class="plain">
          <li>Static content — the same HTML/CSS/JS file is served to every visitor (e.g., a plain landing page).</li>
          <li>Dynamic content — the server builds the page or response per request, often based on a database (e.g., your personalized Instagram feed).</li>
        </ul>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">choosing static hosting vs. a dynamic backend is one of the first architectural decisions in any real project, and it directly affects cost, scalability, and how much server-side code you need to write.</p>
      </div>
      <div class="tsec">
        <h3>How the Web Works</h3>
        <p>At a beginner level, "the Web works" by your browser asking a server for a page and the server sending it back. Underneath that simple exchange there is a well-defined sequence of steps.</p>
        <h3><span class="tag">DEEP DIVE</span>The Full Request Lifecycle</h3>
        <p>When you type a URL and press Enter, several distinct steps happen in order, each building on the previous one:</p>
        <ul class="plain">
          <li>1. DNS Resolution — the browser asks a DNS server to translate the domain name (e.g., example.com) into an IP address.</li>
          <li>2. TCP Connection — the browser opens a TCP connection to that IP address using a three-way handshake (SYN, SYN-ACK, ACK).</li>
          <li>3. TLS Handshake (HTTPS) — if the site uses HTTPS, an encrypted channel is negotiated before any real data is sent (covered in depth in Section 6).</li>
          <li>4. HTTP Request — the browser sends an HTTP request over that secure connection, asking for a specific resource.</li>
          <li>5. Server Processing — the server routes the request, runs backend logic, queries a database if needed, and builds a response.</li>
          <li>6. HTTP Response — the server sends back status code, headers, and a body (HTML, JSON, etc.).</li>
          <li>7. Rendering — the browser parses the HTML, builds the DOM, applies CSS, runs JavaScript, and paints pixels on screen.</li>
        </ul>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">performance debugging almost always means identifying which of these seven steps is slow — a slow DNS lookup, a slow database query, and a slow JavaScript bundle all feel the same to the user ("the page is loading") but require completely different fixes.</p>
      </div>
      <div class="tsec">
        <h3>Frontend and Backend Roles</h3>
        <p>Code that runs on the client side is called frontend, and code that runs on the server side is called backend. We'll keep using the same restaurant analogy from the previous section here too.</p>
        <p>What Is the Difference Between Client-Side and Server-Side Logic?</p>
        <p>The key difference is where the code runs.</p>
        <ul class="plain">
          <li>Client-side: The code runs on the user's own device (in the browser). The browser downloads this code and runs it on its own. The user can view — and even change — this code using the browser's "developer tools."</li>
          <li>Server-side: The code runs on the server. The user never sees or touches this code directly; they only receive its result (an HTML page, a JSON response, etc.).</li>
        </ul>
        <p>This distinction matters most for security: sensitive operations such as password checks, payments, or database access are never done on the client side, because anything on the client side can be seen and altered by the user. That's why this kind of work is always done on the server.</p>
        <h4 class="content-subheading">Frontend</h4>
        <p>The part the user sees and interacts with.</p>
        <p>For example: buttons, menus, colors, animations, page layout.</p>
        <p>In a restaurant, it's the part the customer sees: the tables, the menu design, the decor.</p>
        <p>Technologies Used: HTML, CSS, JavaScript, React, Angular, Vue.</p>
        <p>Why does it matter?</p>
        <p>It shapes the user experience. A poor frontend frustrates users, and they leave the site.</p>
        <h4 class="content-subheading">Backend</h4>
        <p>The invisible, processing part of a web application. Its jobs:</p>
        <ul class="plain">
          <li>Process data</li>
          <li>Authenticate users</li>
          <li>Talk to the database</li>
          <li>Provide security</li>
        </ul>
        <p>In a restaurant, this is the kitchen and the cooks: the customer doesn't see it, but the real work happens there.</p>
        <p>Technologies Used: C#, Java, Python, Node.js, PHP.</p>
        <p>Common Beginner Mistakes</p>
        <ul class="plain">
          <li>❌ Thinking frontend is only about design. Frontend also covers user experience, performance, and data handling.</li>
          <li>❌ Thinking backend is only about fetching data. Backend also covers security, authorization, and business rules.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Rendering Strategies and Architecture Choices</h3>
        <p>Beyond "frontend vs. backend," intermediate developers need to know where rendering happens, since modern frameworks blur the line:</p>
        <table class="tcompare">
          <tr><th>Strategy</th><th>Where HTML Is Built</th><th>Typical Use Case</th></tr>
          <tr><td>CSR (Client-Side Rendering)</td><td>In the browser, via JavaScript, after the page loads</td><td>Highly interactive dashboards (e.g., a plain React SPA)</td></tr>
          <tr><td>SSR (Server-Side Rendering)</td><td>On the server, per request</td><td>SEO-sensitive pages that also need personalization (e.g., Next.js)</td></tr>
          <tr><td>SSG (Static Site Generation)</td><td>At build time, before deployment</td><td>Blogs, docs, marketing pages</td></tr>
          <tr><td>Hybrid / ISR</td><td>Mix of build time and per-request</td><td>Large e-commerce catalogs</td></tr>
        </table>
        <p>Related architectural patterns worth knowing at this stage:</p>
        <ul class="plain">
          <li>SPA (Single Page Application) — one HTML shell; navigation is handled by JavaScript without full page reloads.</li>
          <li>MPA (Multi Page Application) — each navigation triggers a fresh request to the server for a new HTML page.</li>
          <li>API-first / decoupled architecture — the backend only exposes an API; one or more separate frontends (web, mobile) consume it, rather than the backend directly rendering HTML.</li>
        </ul>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">choosing CSR vs. SSR vs. SSG is not just a technical detail — it affects SEO, initial load time, hosting cost, and how much server infrastructure you need to run and maintain.</p>
      </div>
      <div class="tsec">
        <h3>Accessibility and SEO Basics</h3>
        <p>Knowing where code runs (client vs. server) is not enough on its own — two more questions decide whether real people, and search engines, can actually reach and use what you built.</p>
        <h4 class="content-subheading">Accessibility (a11y)</h4>
        <ul class="plain">
          <li>Definition: Building a site so it can be used by people with disabilities — including those using a screen reader, keyboard-only navigation, or voice control.</li>
          <li>Real-Life Example: A restaurant with no ramp and a menu printed only in tiny text quietly turns away customers who use a wheelchair or can’t read small print — the food is fine, but the building itself is the barrier.</li>
          <li>Why This Matters: An inaccessible site doesn’t just risk losing users; in many countries it also carries legal requirements, and the fixes (proper labels, keyboard support) usually make the product better for everyone.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Semantic HTML and Core SEO Signals</h3>
        <p>Accessibility and SEO turn out to rely on much of the same foundation: HTML that describes what things *are*, not just how they look.</p>
        <ul class="plain">
          <li>Semantic HTML — using &lt;button&gt;, &lt;nav&gt;, &lt;header&gt;, and proper heading levels instead of a &lt;div&gt; styled to look like a button — screen readers and search engine crawlers both depend on this structure to understand the page.</li>
          <li>ARIA attributes — a way to add accessibility information (roles, states) to elements that don’t have it natively, such as a custom dropdown built from &lt;div&gt;s; used only when semantic HTML alone can’t express it.</li>
          <li>Core SEO signals — the &lt;title&gt; tag, meta description, alt text on images, and a canonical URL are what a search engine reads to decide what a page is about and how to list it in results.</li>
        </ul>
        <p>This is also where Section 1’s rendering-strategy choice comes back: a search engine crawler reads whatever HTML is sent first, so a page that’s blank until JavaScript runs (pure CSR) can be far harder to index than one rendered on the server (SSR/SSG).</p>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">a dropdown menu a screen reader can’t operate, or a client-rendered blog a search engine can’t read, silently loses users no matter how well the backend performs — these are frontend correctness issues, not nice-to-haves.</p>
      </div>`}
},
{
  id:2, icon:"swap", depth:"-80 m",
  tr:{title:"İstemci–Sunucu İletişimi", summary:"Web uygulamalarının temel mantığı, İstemci ile Sunucu arasındaki iletişimdir. Neyin neyi temsil ettiğini kolayca hatırlamak için bu bölüm boyunca her şeyi tek bir restoran benzetmesiyle açıklayacağız:", html:`
      <div class="tsec">
        <p>Web uygulamalarının temel mantığı, İstemci ile Sunucu arasındaki iletişimdir. Neyin neyi temsil ettiğini kolayca hatırlamak için bu bölüm boyunca her şeyi tek bir restoran benzetmesiyle açıklayacağız:</p>
        <ul class="plain">
          <li>Müşteri (sen) → Kullanıcı</li>
          <li>Sipariş verdiğin tablet → Tarayıcı</li>
          <li>Mutfak → Sunucu</li>
          <li>Sipariş → İstek</li>
          <li>Yemek → Yanıt</li>
        </ul>
        <h4 class="content-subheading">Tarayıcı (Browser)</h4>
        <p>Web sitelerini açmamızı sağlayan programdır.</p>
        <p class="content-detail"><strong>Örnek:</strong> Chrome, Firefox, Edge.</p>
        <p>Tarayıcı, restoran masasındaki sipariş tableti gibidir: ne istediğini tablete söylersin, o da isteğini mutfağa (sunucuya) iletir.</p>
        <p>Neden önemli? Çünkü kullanıcı ile web sistemi arasındaki ilk temas noktasıdır.</p>
        <h3><span class="tag">DERİNLEŞTİR</span>Tarayıcı Aslında Ne Yapar?</h3>
        <p>Bir tarayıcı tek bir programdan değil, birlikte çalışan birkaç motordan oluşur. Bunları anlamak, gerçek hayatta karşılaşılan birçok hatayı açıklar:</p>
        <ul class="plain">
          <li>Rendering motoru (örneğin Chrome'da Blink, Safari'de WebKit, Firefox'ta Gecko) — HTML/CSS'i ayrıştırır ve sayfayı çizer. Farklı motorlar aynı CSS'i biraz farklı gösterebilir; bu yüzden farklı tarayıcılarda test yapmak önemlidir.</li>
          <li>JavaScript motoru (örneğin V8) — JS'i derler ve çalıştırır. Tek iş parçacıklıdır ve bir event loop kullanır. Bu nedenle uzun süren tek bir script tüm sayfayı dondurabilir ("sayfa yanıt vermiyor").</li>
          <li>Ağ katmanı — DNS önbelleğini, TCP/TLS bağlantılarını ve istekler arasında bağlantıların yeniden kullanılmasını yönetir.</li>
        </ul>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">"Benim bilgisayarımda çalışıyor" türündeki hatalar çoğunlukla backend sorunlarından değil, tarayıcıların rendering veya JavaScript motorları arasındaki farklardan kaynaklanır.</p>
        <h4 class="content-subheading">İstemci (Client)</h4>
        <p>Sunucudan hizmet isteyen cihaz veya uygulamadır.</p>
        <p>Örneğin: telefonundaki uygulama, bilgisayarındaki tarayıcı.</p>
        <p>Restoranda müşteri yemek ister; istemci de aynı şekilde sunucudan veri veya hizmet ister.</p>
        <h3><span class="tag">DERİNLEŞTİR</span>Kalın ve İnce İstemciler</h3>
        <p>Her istemci aynı şekilde davranmaz. Sistem tasarlarken bu ayrım önemlidir:</p>
        <ul class="plain">
          <li>İnce istemci (thin client) — yerelde az işlem yapar; çoğunlukla sunucunun gönderdiğini gösterir (klasik, sunucuda oluşturulan web siteleri).</li>
          <li>Kalın istemci (thick client) — önemli miktarda mantığı ve durumu yerelde tutar (bir React SPA veya yerel mobil uygulama); sunucuyla çoğunlukla API üzerinden iletişim kurar.</li>
        </ul>
        <p>Yerel mobil uygulamalar, masaüstü uygulamaları ve hatta diğer backend servisleri (sunucudan sunucuya çağrılar) API açısından birer "istemcidir". İstemci rolü web tarayıcısıyla sınırlı değildir.</p>
        <h4 class="content-subheading">Sunucu (Server)</h4>
        <p>Gelen istekleri karşılayan güçlü bilgisayarlardır. Görevleri:</p>
        <ul class="plain">
          <li>Veriyi saklamak</li>
          <li>İşlemleri yürütmek</li>
          <li>Yanıt göndermek</li>
        </ul>
        <p>Restoranın mutfağına benzetebiliriz: sipariş girer, yemek çıkar.</p>
        <h3><span class="tag">DERİNLEŞTİR</span>Durumsuzluk ve Ölçeklendirme</h3>
        <p>Orta düzeydeki temel kavramlardan biri, çoğu web sunucusunun durumsuz (stateless) tasarlanmasıdır: her istek bağımsız işlenir; sunucu istekler arasında istemciyi "hatırlamaz". Gereken durum bilgisi veritabanında, önbellekte veya token'da tutulur (bkz. Bölüm 5).</p>
        <p>Bu önemlidir; çünkü durumsuz sunucular yatay ölçeklendirilebilir. Tek bir sunucuyu güçlendirmek (dikey ölçeklendirme) yerine, gelen istekleri aralarında dağıtan bir yük dengeleyicinin arkasında çok sayıda aynı sunucu örneği çalıştırırsın. Sunucu istemciye özgü bilgiyi belleğinde tutmuyorsa her örnek her isteği işleyebilir; bu da bu tür ölçeklendirmeyi mümkün kılar.</p>
        <h4 class="content-subheading">İstek (Request)</h4>
        <p>İstemcinin sunucuya gönderdiği taleptir.</p>
        <p class="content-detail"><strong>Örnek:</strong> "Profil bilgilerimi getir."</p>
        <p>Tablet ekranında "Bir pizza istiyorum" seçeneğine dokunup siparişi mutfağa göndermek gibidir.</p>
        <h4 class="content-subheading">Yanıt (Response)</h4>
        <p>Sunucunun istemciye geri gönderdiği sonuçtur.</p>
        <p class="content-detail"><strong>Örnek:</strong> "İşte kullanıcı bilgilerin."</p>
        <p>Mutfakta hazırlanan yemeğin sana ulaşması veya tablette "Siparişiniz hazır" yazısını görmen gibidir.</p>
        <h3><span class="tag">DERİNLEŞTİR</span>İstek ve Yanıtın Yapısı</h3>
        <p>İster tarayıcı sayfa yüklesin ister mobil uygulama API çağırsın, her HTTP isteği ve yanıtı aynı üç parçadan oluşur:</p>
        <ul class="plain">
          <li>Başlangıç satırı — istekte: metot + yol + HTTP sürümü (örneğin GET /profile HTTP/1.1); yanıtta: sürüm + durum kodu (örneğin HTTP/1.1 200 OK).</li>
          <li>Header'lar — mesaj hakkındaki üst veriler (3. bölümde ayrıntılı ele alınır).</li>
          <li>Gövde (body) — varsa asıl taşınan veri (çoğunlukla JSON). GET isteklerinde genellikle gövde bulunmaz; POST/PUT/PATCH isteklerinde genellikle bulunur.</li>
        </ul>
        <p>Burada bilinmesi faydalı bir diğer orta düzey kavram idempotency'dir: bir isteği bir kez veya birçok kez yapmak sunucuda aynı sonucu üretiyorsa istek idempotent'tir. GET, PUT ve DELETE'in idempotent olması beklenir; POST genellikle değildir (aynı "sipariş oluştur" isteğini iki kez göndermek iki sipariş oluşturabilir). Bu, istemci başarısız istekleri otomatik tekrarladığında önem kazanır; idempotent olmayan bir isteği tekrarlamak mükerrer yan etkilere yol açabilir.</p>
      </div>`},
  en:{title:"Client–Server Communication", summary:"The core logic of web applications is the communication between the Client and the Server. Throughout this section we'll explain everything using a single restaurant analogy, so that it's easy to remember what stands for what:", html:`
      <div class="tsec">
        <p>The core logic of web applications is the communication between the Client and the Server. Throughout this section we'll explain everything using a single restaurant analogy, so that it's easy to remember what stands for what:</p>
        <ul class="plain">
          <li>Customer (you) → User</li>
          <li>The tablet you order from → Browser</li>
          <li>Kitchen → Server</li>
          <li>Order → Request</li>
          <li>Meal → Response</li>
        </ul>
        <h4 class="content-subheading">Browser</h4>
        <p>The program that lets us open websites.</p>
        <p class="content-detail"><strong>Example:</strong> Chrome, Firefox, Edge.</p>
        <p>The browser is like the ordering tablet on a restaurant table: you tell the tablet what you want, and it passes your request on to the kitchen (the server).</p>
        <p>Why does it matter? Because it's the first point of contact between the user and the web system.</p>
        <h3><span class="tag">DEEP DIVE</span>What a Browser Actually Does</h3>
        <p>A browser is not one program but several engines working together, and understanding them explains a lot of real-world bugs:</p>
        <ul class="plain">
          <li>Rendering engine (e.g., Blink in Chrome, WebKit in Safari, Gecko in Firefox) — parses HTML/CSS and paints the page. Different engines can render the same CSS slightly differently, which is why cross-browser testing matters.</li>
          <li>JavaScript engine (e.g., V8) — compiles and runs JS. It's single-threaded and uses an event loop, which is why one long-running script can freeze an entire page ("the page is unresponsive").</li>
          <li>Networking stack — manages DNS caching, TCP/TLS connections, and connection reuse across requests.</li>
        </ul>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">"it works on my machine" bugs are frequently rendering-engine or JS-engine differences between browsers, not backend problems.</p>
        <h4 class="content-subheading">Client</h4>
        <p>The device or application that requests a service from the server.</p>
        <p>For example: the app on your phone, the browser on your computer.</p>
        <p>In a restaurant, the customer wants food; a client asks the server for data or a service in the same way.</p>
        <h3><span class="tag">DEEP DIVE</span>Thick vs. Thin Clients</h3>
        <p>Not all clients behave the same way, and the split matters when designing a system:</p>
        <ul class="plain">
          <li>Thin client — does little logic locally; mostly displays what the server sends (classic server-rendered websites).</li>
          <li>Thick client — holds significant logic and state locally (a React SPA, a native mobile app) and talks to the server mainly through an API.</li>
        </ul>
        <p>Native mobile apps, desktop apps, and even other backend services (server-to-server calls) are all "clients" from the API's point of view — the client role isn't limited to a web browser.</p>
        <h4 class="content-subheading">Server</h4>
        <p>Powerful computers that handle incoming requests. Their jobs:</p>
        <ul class="plain">
          <li>Store data</li>
          <li>Process operations</li>
          <li>Send back responses</li>
        </ul>
        <p>We can compare it to the restaurant's kitchen: the order goes in, the meal comes out.</p>
        <h3><span class="tag">DEEP DIVE</span>Statelessness and Scaling</h3>
        <p>A core intermediate concept is that most web servers are designed to be stateless: each request is handled independently, without the server "remembering" the client between requests (state, when needed, is kept in a database, cache, or token — see Section 5).</p>
        <p>This matters because stateless servers can be scaled horizontally: instead of making one server more powerful (vertical scaling), you run many identical server instances behind a load balancer, which distributes incoming requests across them. If a server holds no client-specific memory, any instance can handle any request, which makes this kind of scaling possible.</p>
        <h4 class="content-subheading">Request</h4>
        <p>The ask that the client sends to the server.</p>
        <p class="content-detail"><strong>Example:</strong> "Fetch my profile information."</p>
        <p>It's like tapping "I'd like a pizza" on the tablet screen and sending the order to the kitchen.</p>
        <h4 class="content-subheading">Response</h4>
        <p>The result that the server sends back to the client.</p>
        <p class="content-detail"><strong>Example:</strong> "Here is your user information."</p>
        <p>It's like the meal prepared in the kitchen reaching you, or seeing "Your order is ready" appear on the tablet.</p>
        <h3><span class="tag">DEEP DIVE</span>Anatomy of a Request and Response</h3>
        <p>Every HTTP request and response is made of the same three parts, whether it's a browser loading a page or a mobile app calling an API:</p>
        <ul class="plain">
          <li>Start line — for a request: method + path + HTTP version (e.g., GET /profile HTTP/1.1); for a response: version + status code (e.g., HTTP/1.1 200 OK).</li>
          <li>Headers — metadata about the message (covered in depth in Section 3).</li>
          <li>Body — the actual payload, if any (often JSON). GET requests typically have no body; POST/PUT/PATCH usually do.</li>
        </ul>
        <p>Another intermediate idea worth knowing here is idempotency: a request is idempotent if making it once or many times produces the same result on the server. GET, PUT, and DELETE are expected to be idempotent; POST usually is not (sending the same "create order" request twice can create two orders). This becomes important when a client automatically retries failed requests — retrying a non-idempotent request can cause duplicate side effects.</p>
      </div>`}
},
{
  id:3, icon:"code", depth:"-120 m",
  tr:{title:"HTTP İletişimi", summary:"HTTP (HyperText Transfer Protocol), cihazların veri alışverişi yapmasını sağlayan iletişim kuralları bütünüdür.", html:`
      <div class="tsec">
        <h3>HTTP Nedir?</h3>
        <p>HTTP (HyperText Transfer Protocol), cihazların veri alışverişi yapmasını sağlayan iletişim kuralları bütünüdür.</p>
        <p>HTTP, iki insanın ortak dili gibidir: biri Türkçe, diğeri Japonca konuşursa birbirlerini anlayamazlar. HTTP, bilgisayarların birbirini anlamasını sağlar ve Web'deki tüm veri alışverişinin temelidir.</p>
        <h3><span class="tag">DERİNLEŞTİR</span>HTTP/1.1, HTTP/2 ve HTTP/3</h3>
        <p>HTTP tek ve değişmez bir protokol değildir; zamanla gelişmiştir ve kullanılan sürüm gerçek hayattaki performansı etkiler:</p>
        <table class="tcompare">
          <tr><th>Sürüm</th><th>Temel Özellik</th><th>Pratik Etkisi</th></tr>
          <tr><td>HTTP/1.1</td><td>Bağlantı başına aynı anda tek istek (veya sınırlı pipelining)</td><td>Tarayıcılar bunu telafi etmek için alan adı başına birden fazla paralel bağlantı açar</td></tr>
          <tr><td>HTTP/2</td><td>Multiplexing — birçok istek tek bir TCP bağlantısını paylaşır</td><td>Daha hızlı sayfa yüklemesi; daha az bağlantı ihtiyacı</td></tr>
          <tr><td>HTTP/3</td><td>TCP yerine QUIC (UDP tabanlı) üzerinde çalışır</td><td>Head-of-line blocking sorununu önler; kararsız ağlarda daha iyi çalışır</td></tr>
        </table>
        <p>Şunu da bilmek faydalıdır: bağlantılar kalıcı olabilir (Connection: keep-alive). Böylece aynı TCP bağlantısı birden fazla istekte kullanılır ve her seferinde yeni bir el sıkışmanın maliyetinden kaçınılır. HTTP/1.0'ın modern HTTP'ye göre daha yavaş hissettirmesinin nedenlerinden biri budur.</p>
      </div>
      <div class="tsec">
        <h3>HTTP Metotları</h3>
        <p>İstemcinin ne yapmak istediğini sunucuya bildiren komutlardır:</p>
        <table class="tcompare">
          <tr><th>Metot</th><th>Kullanım Amacı</th><th>Günlük Hayattan Örnek</th></tr>
          <tr><td>GET</td><td>Yalnızca veri okumak/getirmek için.</td><td>Başkasının Instagram profiline bakmak.</td></tr>
          <tr><td>POST</td><td>Yeni veri oluşturmak veya göndermek için.</td><td>Yeni bir fotoğraf paylaşmak.</td></tr>
          <tr><td>PUT</td><td>Mevcut bir veriyi tamamen değiştirmek veya sıfırdan oluşturmak için.</td><td>Profil fotoğrafını değiştirmek.</td></tr>
          <tr><td>PATCH</td><td>Mevcut verinin yalnızca belirli bir kısmını güncellemek (değiştirmek) için.</td><td>Profil biyografindeki tek bir kelimeyi düzeltmek.</td></tr>
          <tr><td>DELETE</td><td>Mevcut veriyi silmek için.</td><td>Hesabını kalıcı olarak kapatmak.</td></tr>
        </table>
        <h3><span class="tag">DERİNLEŞTİR</span>Güvenli, İdempotent ve Önbelleğe Alınabilir Metotlar</h3>
        <p>HTTP, her metodun kullanım amacının ötesinde, sunucuların ve tarayıcıların dayandığı biçimsel özellikler tanımlar:</p>
        <table class="tcompare">
          <tr><th>Metot</th><th>Güvenli mi?</th><th>İdempotent mi?</th><th>Genellikle Önbelleğe Alınabilir mi?</th></tr>
          <tr><td>GET</td><td>Evet</td><td>Evet</td><td>Evet</td></tr>
          <tr><td>POST</td><td>Hayır</td><td>Hayır</td><td>Nadiren</td></tr>
          <tr><td>PUT</td><td>Hayır</td><td>Evet</td><td>Hayır</td></tr>
          <tr><td>PATCH</td><td>Hayır</td><td>Hayır (genellikle)</td><td>Hayır</td></tr>
          <tr><td>DELETE</td><td>Hayır</td><td>Evet</td><td>Hayır</td></tr>
        </table>
        <p>"Güvenli", metodun sunucu durumunu değiştirmediği anlamına gelir (kötü yazılmış bir sunucunun bunu yapmasını teknik olarak hiçbir şey engellemese de GET asla veri silmemelidir). PUT ve PATCH sık karıştırılır: PUT kaynağın tamamını bekler ve bütünüyle değiştirir; PATCH ise yalnızca değişen alanları gönderir. PUT endpoint'ine eksik bir nesne göndermek, gönderilmeyen alanları istemeden silebilir.</p>
      </div>
      <div class="tsec">
        <h3>HTTP Durum Kodları</h3>
        <p>Sunucunun bildirdiği işlem sonucu:</p>
        <ul class="plain">
          <li>1xx (Bilgilendirme): "İsteğini aldım ve işlemeye devam ediyorum." (Arka planda çalışır; kullanıcılar bunu nadiren görür.)</li>
          <li>2xx (Başarılı): "Harika, her şey yolunda ve isteğini yerine getirdim."</li>
          <li>3xx (Yönlendirme): "Aradığın şey başka bir yere taşındı; seni yeni adrese yönlendiriyorum."</li>
          <li>4xx (İstemci Hatası): "Sen (kullanıcı veya tarayıcı) bir hata yaptın: yanlış adres girdin, eksik veri gönderdin veya iznin yok."</li>
          <li>5xx (Sunucu Hatası): "Sorun sende değil; benim (sunucunun) tarafımda bir şey ters gitti veya çöktü."</li>
        </ul>
        <p>En sık kullanılan durum kodları:</p>
        <table class="tcompare">
          <tr><th>Kod</th><th>Adı</th><th>Anlamı</th><th>Günlük Hayattan Örnek</th></tr>
          <tr><td>200</td><td>OK</td><td>İstek başarılı oldu ve istenen veri döndürüldü.</td><td>Bir sitenin ana sayfasını sorunsuz yüklemek.</td></tr>
          <tr><td>201</td><td>Created</td><td>İstek (genellikle POST) başarılı oldu ve yeni bir kayıt oluşturuldu.</td><td>Siparişi tamamlayıp "Siparişiniz alındı" mesajını görmek.</td></tr>
          <tr><td>204</td><td>No Content</td><td>İşlem (genellikle DELETE) başarılı oldu; ancak gösterilecek yeni bilgi yok.</td><td>Bir fotoğrafı silmek ve sistemin arka planda sessizce "tamamlandı" onayı vermesi.</td></tr>
          <tr><td>301</td><td>Moved Permanently</td><td>İstenen sayfa kalıcı olarak farklı bir URL'ye taşındı.</td><td>Kapanmış eski bir sitenin adresini yazıp yeni siteye yönlendirilmek.</td></tr>
          <tr><td>400</td><td>Bad Request</td><td>Sunucu, gönderdiğin verinin biçimini veya mantığını anlayamadı.</td><td>Yaş alanına sayı yerine "yirmi" yazıp göndermeye çalışmak.</td></tr>
          <tr><td>401</td><td>Unauthorized</td><td>Bu işlemi yapmak için giriş yapman gerekiyor.</td><td>Şifre girmeden gelen kutunu açmaya çalışmak.</td></tr>
          <tr><td>403</td><td>Forbidden</td><td>Giriş yaptın ancak bu işlemi yapma iznin yok.</td><td>Standart hesapla "Yönetici" sayfasına erişmeye çalışmak.</td></tr>
          <tr><td>404</td><td>Not Found</td><td>İstenen sayfa veya veri sunucuda bulunmuyor.</td><td>Bir sitenin adresini yanlış veya eksik yazmak.</td></tr>
          <tr><td>500</td><td>Internal Server Error</td><td>Sunucuda beklenmeyen bir hata oluştu.</td><td>Bir sitenin yazılım hatası nedeniyle çökmesi.</td></tr>
          <tr><td>503</td><td>Service Unavailable</td><td>Sunucu şu anda aşırı yüklü veya bakımda.</td><td>Sınav sonuçları açıklanınca herkes aynı anda giriş yapmaya çalıştığı için sitenin kilitlenmesi.</td></tr>
        </table>
        <h3><span class="tag">DERİNLEŞTİR</span>İstemcide Durum Kodlarını Doğru Ele Almak</h3>
        <p>Kodları bilmek işin yalnızca yarısıdır. Orta düzey geliştiriciler, iyi tasarlanmış bir istemcinin her kod grubuna nasıl tepki vermesi gerektiğini de bilmelidir:</p>
        <ul class="plain">
          <li>401 ve 403 — 401 genellikle "yeniden giriş yap" anlamına gelir (örneğin giriş ekranına yönlendir veya kimlik doğrulama token'ını yenile). 403 ise kullanıcının tanındığını ancak izinli olmadığını belirtir; dolayısıyla yeniden kimlik doğrulamak yardımcı olmaz.</li>
          <li>429 (Too Many Requests) — hız sınırlamasını belirtir (Bölüm 6). İstemci hemen yeniden denemek yerine, çoğunlukla Retry-After header'ını kullanarak yavaşlamalıdır.</li>
          <li>5xx hataları — istemci hatası yerine geçici bir sunucu sorununu belirttiklerinden, bekleme süresini artırarak yeniden denemek genellikle güvenlidir. 4xx hatalarında sorun isteğin kendisi olduğu için istek genellikle değiştirilmeden tekrarlanmamalıdır.</li>
        </ul>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Her hatayı aynı şekilde ("Bir şeyler ters gitti") ele alan bir frontend, kötü kullanıcı deneyimi oluşturur ve hata ayıklama sırasında gerçek sorunları geliştiricilerden gizler.</p>
      </div>
      <div class="tsec">
        <h3>Header'lar (Başlıklar)</h3>
        <p>İstek veya yanıt hakkında ek bilgi taşıyan bölümdür; kargo paketinin üzerindeki etiket (gönderen, alıcı, içerik) gibidir.</p>
        <p>İstek ve yanıt header'ları, istemci ile sunucu arasında iletişimi sağlayan HTTP protokolünün görünmeyen kahramanlarıdır. Ekranda gördüğümüz sayfanın dışında, arka planda üst veri taşırlar. Bu, mektuptaki yazı ile zarf üzerindeki gönderen, alıcı ve pul bilgileri arasındaki ilişkiye benzer.</p>
        <p>İstek Header'ları</p>
        <p>Tarayıcının sunucudan sayfa isterken gönderdiği teknik notlardır: "Ben kimim, ne istiyorum ve bu veriyi bana nasıl göndermelisin?"</p>
        <table class="tcompare">
          <tr><th>Header</th><th>Amacı</th><th>Örnek Değer</th></tr>
          <tr><td>Host</td><td>Hangi alan adına istek yapıldığını belirtir.</td><td>www.ornek.com</td></tr>
          <tr><td>User-Agent</td><td>İsteği yapan tarayıcıyı, işletim sistemini ve cihazı tanımlar.</td><td>Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0…</td></tr>
          <tr><td>Accept</td><td>İstemcinin hangi veri türlerini okuyabildiğini sunucuya bildirir.</td><td>text/html, application/json, image/webp</td></tr>
          <tr><td>Accept-Language</td><td>Kullanıcının tercih ettiği dili belirtir.</td><td>en-US, en;q=0.9</td></tr>
          <tr><td>Authorization</td><td>Giriş yapmış kullanıcının kimlik doğrulama bilgilerini taşır.</td><td>Bearer eyJhbGciOiJIUzI1Ni…</td></tr>
        </table>
        <p>GET /profile HTTP/1.1</p>
        <p>Host: www.ornek.com</p>
        <p>User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)</p>
        <p>Accept-Language: en-US</p>
        <p>Authorization: Bearer abc123xyz</p>
        <p>Yanıt Header'ları</p>
        <p>Sunucunun veri (HTML, JSON, görsel vb.) gönderirken pakete eklediği teknik notlardır. Tarayıcıya veriyi nasıl işlemesi veya saklaması gerektiğini söylerler.</p>
        <table class="tcompare">
          <tr><th>Header</th><th>Amacı</th><th>Örnek Değer</th></tr>
          <tr><td>Content-Type</td><td>Gelen verinin türünü belirtir.</td><td>text/html; charset=UTF-8</td></tr>
          <tr><td>Content-Length</td><td>Gönderilen verinin boyutunu bayt olarak gösterir.</td><td>3495</td></tr>
          <tr><td>Set-Cookie</td><td>Kullanıcıyı hatırlamak için tarayıcıya bir cookie saklamasını söyler.</td><td>session_id=987654321; Secure; HttpOnly</td></tr>
          <tr><td>Cache-Control</td><td>Verinin tarayıcı önbelleğinde ne kadar tutulabileceğini tanımlar.</td><td>max-age=3600</td></tr>
          <tr><td>Server</td><td>Arka planda çalışan sunucu yazılımının adını belirtir.</td><td>Apache/2.4.41 veya cloudflare</td></tr>
        </table>
        <p>HTTP/1.1 200 OK</p>
        <p>Content-Type: application/json; charset=utf-8</p>
        <p>Content-Length: 142</p>
        <p>Cache-Control: max-age=3600</p>
        <p>Set-Cookie: user_session=abc987; Secure; HttpOnly</p>
        <p>{"user": "Ahmet", "status": "active"}</p>
        <h3><span class="tag">DERİNLEŞTİR</span>Güvenlik ve CORS Header'ları</h3>
        <p>Bazı header'lar özellikle canlı ortamdaki bir uygulamayı güvenli hale getirirken veya sorun giderirken karşına çıkar. Bunları gördüğünde tanımak faydalıdır:</p>
        <table class="tcompare">
          <tr><th>Header</th><th>Amacı</th></tr>
          <tr><td>Access-Control-Allow-Origin</td><td>CORS'un bir parçasıdır (Bölüm 6); tarayıcıya bu yanıtı hangi origin'lerin okuyabileceğini söyler.</td></tr>
          <tr><td>Content-Security-Policy (CSP)</td><td>Sayfanın yükleyebileceği script'leri, stilleri ve kaynakları sınırlandırarak XSS riskini azaltır.</td></tr>
          <tr><td>Strict-Transport-Security (HSTS)</td><td>Kullanıcı http:// yazsa bile tarayıcının siteyle yalnızca HTTPS üzerinden iletişim kurmasını söyler.</td></tr>
          <tr><td>ETag</td><td>Önbellek doğrulamasında kullanılan, kaynak içeriğinin parmak izidir (Bölüm 6).</td></tr>
          <tr><td>X-Request-ID / Correlation-ID</td><td>Bir isteği birden fazla servis ve log boyunca takip etmek için kullanılan özel bir header'dır (resmî standart değildir).</td></tr>
        </table>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Frontend ile backend arasındaki iletişim bozulduğunda gerçek yanıt çoğu zaman header'larda saklıdır. Eksik CORS header'ı, güncelliğini yitirmiş ETag veya CSP'nin engellediği script, tarayıcı geliştirici araçlarındaki yanıt header'larından doğrudan teşhis edilebilir.</p>
      </div>
      <div class="tsec">
        <h3>Gerçek Zamanlı İletişim: WebSocket ve SSE</h3>
        <p>Bu bölümde şimdiye kadar ele alınan her şey tek bir düzeni izler: istemci sorar, sunucu yanıtlar. Canlı sohbet, borsa fiyat akışı veya çok oyunculu imleç gibi özelliklerde ise sunucunun olay gerçekleşir gerçekleşmez yeni veriyi göndermesi gerekir; bu düzen yeterli olmaz.</p>
        <p>İlk akla gelen çözüm polling'dir: istemci, garsona sürekli yemeğin hazır olup olmadığını sormak gibi, birkaç saniyede bir "Yeni bir şey var mı?" diye sorar. Çalışır; ancak gereksiz istek üretir ve gecikmeye yol açar.</p>
        <h3><span class="tag">DERİNLEŞTİR</span>WebSocket ve Server-Sent Events (SSE)</h3>
        <p>İki standart, sürekli polling yapmadan bu sorunu çözer; ancak birbirlerinin yerine kullanılamazlar:</p>
        <table class="tcompare">
          <tr><th>Teknoloji</th><th>Nasıl Çalışır?</th><th>Uygun Kullanım Alanı</th></tr>
          <tr><td>WebSocket</td><td>Tek bir bağlantı, HTTP'den tam çift yönlü bir kanala yükseltilir; iki taraf da istediği anda mesaj gönderebilir.</td><td>Canlı sohbet, çok oyunculu oyunlar, ortak düzenleme</td></tr>
          <tr><td>SSE (Server-Sent Events)</td><td>Normal HTTP üzerinden sunucudan istemciye tek yönlü akıştır; istemci aynı kanaldan geri mesaj gönderemez.</td><td>Canlı akışlar, bildirimler, yalnızca güncelleme alması gereken paneller</td></tr>
        </table>
        <p>WebSocket bağlantısı, Upgrade: websocket header'ı taşıyan normal bir HTTP isteği olarak başlar (yukarıdaki Header'lar anlatımıyla bağlantılıdır). Sunucu kabul ederse bağlantı protokol değiştirir ve açık kalır.</p>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">WebSocket önemli bir karmaşıklık getirir: bağlantı durumunu takip etmek, kopunca yeniden bağlanmak ve yük dengeleyici arkasında çok sayıda örnek varken mesajları doğru sunucuya yönlendirmek gerekir. Orta düzey geliştiriciler, veri yalnızca tek yönde akacaksa önce SSE'yi tercih etmeli; WebSocket'i istemcinin de sık sık geri mesaj göndermesi gerektiğinde kullanmalıdır.</p>
      </div>`},
  en:{title:"HTTP Communication", summary:"HTTP (HyperText Transfer Protocol) is the set of communication rules that lets devices exchange data.", html:`
      <div class="tsec">
        <h3>What Is HTTP?</h3>
        <p>HTTP (HyperText Transfer Protocol) is the set of communication rules that lets devices exchange data.</p>
        <p>HTTP is like a shared language between two people — if one speaks Turkish and the other Japanese, they can't understand each other. HTTP lets computers understand one another, and it's the foundation of all data exchange on the Web.</p>
        <h3><span class="tag">DEEP DIVE</span>HTTP/1.1 vs. HTTP/2 vs. HTTP/3</h3>
        <p>"HTTP" is not a single fixed protocol — it has evolved, and the version in use affects real-world performance:</p>
        <table class="tcompare">
          <tr><th>Version</th><th>Key Characteristic</th><th>Practical Effect</th></tr>
          <tr><td>HTTP/1.1</td><td>One request per connection at a time (or limited pipelining)</td><td>Browsers open multiple parallel connections per domain to compensate</td></tr>
          <tr><td>HTTP/2</td><td>Multiplexing — many requests share a single TCP connection</td><td>Faster page loads; fewer connections needed</td></tr>
          <tr><td>HTTP/3</td><td>Runs over QUIC (UDP-based) instead of TCP</td><td>Avoids head-of-line blocking; better on unstable networks</td></tr>
        </table>
        <p>Also worth knowing: connections can be persistent (Connection: keep-alive) so the same TCP connection is reused for multiple requests, avoiding the cost of a new handshake every time — this is one of the reasons HTTP/1.0 felt slower than modern HTTP.</p>
      </div>
      <div class="tsec">
        <h3>HTTP Methods</h3>
        <p>These are the commands that tell the server what the client wants to do:</p>
        <table class="tcompare">
          <tr><th>Method</th><th>What It's For</th><th>Everyday Example</th></tr>
          <tr><td>GET</td><td>For reading/fetching data only.</td><td>Looking at someone else's Instagram profile.</td></tr>
          <tr><td>POST</td><td>For creating or submitting new data.</td><td>Sharing a new photo.</td></tr>
          <tr><td>PUT</td><td>For completely replacing an existing piece of data, or creating it from scratch.</td><td>Changing your profile photo.</td></tr>
          <tr><td>PATCH</td><td>For updating (modifying) only a specific part of existing data.</td><td>Fixing a single word in your profile bio.</td></tr>
          <tr><td>DELETE</td><td>For deleting existing data.</td><td>Permanently closing your account.</td></tr>
        </table>
        <h3><span class="tag">DEEP DIVE</span>Safe, Idempotent, and Cacheable Methods</h3>
        <p>Beyond what each method "is for," HTTP defines formal properties that servers and browsers rely on:</p>
        <table class="tcompare">
          <tr><th>Method</th><th>Safe?</th><th>Idempotent?</th><th>Typically Cacheable?</th></tr>
          <tr><td>GET</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>POST</td><td>No</td><td>No</td><td>Rarely</td></tr>
          <tr><td>PUT</td><td>No</td><td>Yes</td><td>No</td></tr>
          <tr><td>PATCH</td><td>No</td><td>No (usually)</td><td>No</td></tr>
          <tr><td>DELETE</td><td>No</td><td>Yes</td><td>No</td></tr>
        </table>
        <p>"Safe" means the method doesn't change server state (a GET should never delete data, even though nothing stops a poorly written server from doing so). PUT vs. PATCH is a common point of confusion: PUT expects the full resource and replaces it entirely, while PATCH sends only the fields that changed — sending a partial object to a PUT endpoint can unintentionally wipe out the missing fields.</p>
      </div>
      <div class="tsec">
        <h3>HTTP Status Codes</h3>
        <p>The outcome of an operation, as reported by the server:</p>
        <ul class="plain">
          <li>1xx (Informational): "I received your request and I'm still processing it." (Runs in the background; users rarely see this.)</li>
          <li>2xx (Success): "Great, everything's fine and I've carried out your request."</li>
          <li>3xx (Redirection): "What you're looking for has moved elsewhere, I'm redirecting you to the new address."</li>
          <li>4xx (Client Error): "You (the user or the browser) made a mistake — you entered the wrong address, sent incomplete data, or don't have permission."</li>
          <li>5xx (Server Error): "This isn't about you — something went wrong, or crashed, on my (the server's) side."</li>
        </ul>
        <p>The most commonly used status codes:</p>
        <table class="tcompare">
          <tr><th>Code</th><th>Name</th><th>What It Means</th><th>Everyday Example</th></tr>
          <tr><td>200</td><td>OK</td><td>The request succeeded and the requested data was returned.</td><td>Loading a website's homepage without any issues.</td></tr>
          <tr><td>201</td><td>Created</td><td>The request (usually a POST) succeeded and a new record was created.</td><td>Completing an order and seeing "Your order has been placed."</td></tr>
          <tr><td>204</td><td>No Content</td><td>The operation (usually DELETE) succeeded, but there's no new information to show.</td><td>Deleting a photo and the system quietly confirming "done" in the background.</td></tr>
          <tr><td>301</td><td>Moved Permanently</td><td>The requested page has permanently moved to a different URL.</td><td>Typing the address of an old, closed site and being redirected to the new one.</td></tr>
          <tr><td>400</td><td>Bad Request</td><td>The server couldn't understand the format or logic of the data you sent.</td><td>Typing "twenty" instead of a number into an age field and trying to submit it.</td></tr>
          <tr><td>401</td><td>Unauthorized</td><td>You need to log in to perform this action.</td><td>Trying to open your inbox without entering a password.</td></tr>
          <tr><td>403</td><td>Forbidden</td><td>You're logged in, but you don't have permission to do this.</td><td>Trying to access an "Admin" page with a standard account.</td></tr>
          <tr><td>404</td><td>Not Found</td><td>The requested page or data doesn't exist on the server.</td><td>Typing a site's address incorrectly or incompletely.</td></tr>
          <tr><td>500</td><td>Internal Server Error</td><td>An unexpected error occurred on the server.</td><td>A site crashing because of a software bug.</td></tr>
          <tr><td>503</td><td>Service Unavailable</td><td>The server is currently overloaded or under maintenance.</td><td>A site locking up because everyone tries to log in at once when exam results are released.</td></tr>
        </table>
        <h3><span class="tag">DEEP DIVE</span>Handling Status Codes Correctly on the Client</h3>
        <p>Knowing the codes is only half the skill — intermediate developers also need to know how a well-built client should react to each family:</p>
        <ul class="plain">
          <li>401 vs. 403 — a 401 usually means "log in again" (e.g., redirect to a login screen or refresh the auth token); a 403 means the user is identified but not allowed, so re-authenticating won't help.</li>
          <li>429 (Too Many Requests) — signals rate limiting (Section 6); the client should slow down, often using the Retry-After header, rather than retrying immediately.</li>
          <li>5xx errors — are usually safe to retry with backoff, since they indicate a transient server problem rather than a client mistake; 4xx errors generally should not be retried unchanged, since the request itself is the problem.</li>
        </ul>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">a frontend that treats every error the same way ("Something went wrong") produces a poor user experience and hides real problems from developers during debugging.</p>
      </div>
      <div class="tsec">
        <h3>Headers</h3>
        <p>A section that carries extra information about a request or a response — like the label on a shipping package (sender, recipient, contents).</p>
        <p>Request headers and response headers are the unsung heroes of the HTTP protocol that enables communication between client and server. Traveling in the background, outside the page we see on screen, these headers carry metadata — much like the relationship between the writing in a letter and the sender/recipient/stamp information on the envelope.</p>
        <p>Request Headers</p>
        <p>Technical notes the browser sends when it asks the server for a page: "Who am I, what do I want, and how should you send this data to me?"</p>
        <table class="tcompare">
          <tr><th>Header</th><th>Purpose</th><th>Example Value</th></tr>
          <tr><td>Host</td><td>Specifies which domain is being requested.</td><td>www.ornek.com</td></tr>
          <tr><td>User-Agent</td><td>Identifies the browser, operating system, and device making the request.</td><td>Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0…</td></tr>
          <tr><td>Accept</td><td>Tells the server what types of data the client can read.</td><td>text/html, application/json, image/webp</td></tr>
          <tr><td>Accept-Language</td><td>States the user's preferred language.</td><td>en-US, en;q=0.9</td></tr>
          <tr><td>Authorization</td><td>Carries the authentication credentials of a logged-in user.</td><td>Bearer eyJhbGciOiJIUzI1Ni…</td></tr>
        </table>
        <p>GET /profile HTTP/1.1</p>
        <p>Host: www.ornek.com</p>
        <p>User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)</p>
        <p>Accept-Language: en-US</p>
        <p>Authorization: Bearer abc123xyz</p>
        <p>Response Headers</p>
        <p>Technical notes the server attaches to the package when sending data (HTML, JSON, an image, etc.) — they tell the browser how to handle or store that data.</p>
        <table class="tcompare">
          <tr><th>Header</th><th>Purpose</th><th>Example Value</th></tr>
          <tr><td>Content-Type</td><td>Specifies the type of the incoming data.</td><td>text/html; charset=UTF-8</td></tr>
          <tr><td>Content-Length</td><td>Shows the size of the data sent, in bytes.</td><td>3495</td></tr>
          <tr><td>Set-Cookie</td><td>Instructs the browser to store a cookie so it can remember the user.</td><td>session_id=987654321; Secure; HttpOnly</td></tr>
          <tr><td>Cache-Control</td><td>Defines how long the data can be kept in the browser's cache.</td><td>max-age=3600</td></tr>
          <tr><td>Server</td><td>States the name of the server software running behind the scenes.</td><td>Apache/2.4.41 or cloudflare</td></tr>
        </table>
        <p>HTTP/1.1 200 OK</p>
        <p>Content-Type: application/json; charset=utf-8</p>
        <p>Content-Length: 142</p>
        <p>Cache-Control: max-age=3600</p>
        <p>Set-Cookie: user_session=abc987; Secure; HttpOnly</p>
        <p>{"user": "Ahmet", "status": "active"}</p>
        <h3><span class="tag">DEEP DIVE</span>Security and CORS Headers</h3>
        <p>A few headers show up specifically when hardening or debugging a production application, and are worth recognizing on sight:</p>
        <table class="tcompare">
          <tr><th>Header</th><th>Purpose</th></tr>
          <tr><td>Access-Control-Allow-Origin</td><td>Part of CORS (Section 6) — tells the browser which origins may read this response.</td></tr>
          <tr><td>Content-Security-Policy (CSP)</td><td>Restricts which scripts, styles, and resources a page is allowed to load, reducing XSS risk.</td></tr>
          <tr><td>Strict-Transport-Security (HSTS)</td><td>Tells the browser to only ever contact this site over HTTPS, even if the user types http://.</td></tr>
          <tr><td>ETag</td><td>A fingerprint of a resource's content, used for cache validation (Section 6).</td></tr>
          <tr><td>X-Request-ID / Correlation-ID</td><td>A custom header (not a formal standard) used to trace one request across multiple services and logs.</td></tr>
        </table>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">when something breaks between frontend and backend, the headers are often where the real answer is hiding — a missing CORS header, a stale ETag, or a blocked script under CSP are all diagnosable directly from the response headers in browser dev tools.</p>
      </div>
      <div class="tsec">
        <h3>Real-Time Communication: WebSockets and SSE</h3>
        <p>Everything covered so far in this section follows one pattern: the client asks, the server answers. That breaks down for features like a live chat, a stock ticker, or a multiplayer cursor, where the server needs to push new data the instant something happens.</p>
        <p>The naive fix is polling — the client just asks “anything new?” every few seconds, like repeatedly asking a waiter if the food is ready. It works, but it wastes requests and adds delay.</p>
        <h3><span class="tag">DEEP DIVE</span>WebSockets vs. Server-Sent Events (SSE)</h3>
        <p>Two standards solve this without constant polling, and they are not interchangeable:</p>
        <table class="tcompare">
          <tr><th>Technology</th><th>How It Works</th><th>Good Fit For</th></tr>
          <tr><td>WebSocket</td><td>A single connection is upgraded from HTTP to a full-duplex channel — both sides can send messages at any time.</td><td>Live chat, multiplayer games, collaborative editing</td></tr>
          <tr><td>SSE (Server-Sent Events)</td><td>A one-way stream from server to client over plain HTTP; the client cannot send messages back on the same channel.</td><td>Live feeds, notifications, dashboards that only need updates pushed to them</td></tr>
        </table>
        <p>A WebSocket connection starts life as an ordinary HTTP request carrying an Upgrade: websocket header (tying back to the Headers discussion above); if the server agrees, the connection switches protocols and stays open.</p>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">WebSockets bring real complexity — tracking connection state, reconnecting after a drop, and routing messages to the right server when there are many instances behind a load balancer. Intermediate developers should reach for SSE first when data only needs to flow one way, and use WebSockets only when the client also needs to send frequent messages back.</p>
      </div>`}
},
{
  id:4, icon:"plug", depth:"-160 m",
  tr:{title:"API'ler ve Veri Alışverişi", summary:"Farklı yazılımların birbiriyle iletişim kurmasını sağlayan bir köprüdür.", html:`
      <div class="tsec">
        <h3>API Nedir?</h3>
        <p>Farklı yazılımların birbiriyle iletişim kurmasını sağlayan bir köprüdür.</p>
        <p>API, restorandaki garson gibidir: "Bir pizza istiyorum" dersin, garson bunu mutfağa iletir. Mutfağa (sunucuya) kendin hiç girmezsin.</p>
        <p>Gerçek Hayattan Örnek: Hava durumu uygulamasını açarsın → uygulama hava durumu API'sine sorar → API sıcaklığı geri gönderir.</p>
        <p>Neden önemli? Modern uygulamalar (mobil uygulamalar, web siteleri, ödeme sistemleri) birbirleriyle API'ler üzerinden iletişim kurar.</p>
        <h3><span class="tag">DERİNLEŞTİR</span>API Versiyonlama ve Gateway'ler</h3>
        <p>Bir API'nin gerçek kullanıcıları olduğunda onu istediğin gibi değiştiremezsin; geriye dönük uyumluluğu bozan değişiklikler, ona bağlı tüm uygulamaları bozabilir. İki uygulama bu sorunu ele alır:</p>
        <ul class="plain">
          <li>Versiyonlama — /api/v1/users ve /api/v2/users gibi endpoint'leri yan yana sunmaktır. Yeni istemciler yeni sürüme geçerken mevcut istemciler çalışmaya devam eder.</li>
          <li>API Gateway — bir veya daha fazla backend servisinin önünde bulunan tek giriş noktasıdır. Kimlik doğrulama, hız sınırlama, yönlendirme ve loglama gibi ortak işleri yönetir; böylece her servis bunları ayrı ayrı uygulamak zorunda kalmaz.</li>
        </ul>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Proje tek bir backend'den birden fazla servise büyüdüğünde API gateway ortak giriş kapısı olur. Versiyonlama ise eski ve yeni istemcilerin aynı anda uyumlu çalışmasını sağlayan sözleşmeye dönüşür.</p>
      </div>
      <div class="tsec">
        <h3>REST API'ler</h3>
        <p>Web üzerinde API oluşturmak için kullanılan standart yaklaşımdır ve genellikle HTTP kullanır.</p>
        <p>İstek: GET /users/5</p>
        <p>Anlamı: "5 numaralı kullanıcıyı getir."</p>
        <p>Yanıt:</p>
        <p>{</p>
        <p>"name": "Ali",</p>
        <p>"age": 25</p>
        <p>}</p>
        <p>REST API, restoranın standart sipariş sistemi gibidir: herkes aynı kurallara uyarak sipariş verir.</p>
        <h3><span class="tag">DERİNLEŞTİR</span>Bir API'yi RESTful Yapan Nedir ve Alternatifleri Nelerdir?</h3>
        <p>REST (Representational State Transfer), yalnızca "HTTP kullanan bir API" değil, bir dizi mimari kısıttır. Pratikte en ilgili olanları şunlardır:</p>
        <ul class="plain">
          <li>Durumsuzluk — her istek, kendisini anlamak için gereken tüm bilgileri içermelidir; sunucu önceki istekleri hatırlamaya dayanmaz (2. bölümle bağlantılıdır).</li>
          <li>Kaynak tabanlı URL'ler — URL'ler eylemleri değil kaynakları (isimleri) tanımlar: /getUser?id=5 yerine /users/5 kullanılır; eylemi HTTP metodu (GET/POST/PUT/DELETE) ifade eder.</li>
          <li>Tek tip arayüz — tüm endpoint'lerde tutarlı ve öngörülebilir kurallar kullanılır (örneğin POST işleminde oluşturulan nesneyi her zaman 201 koduyla döndürmek).</li>
        </ul>
        <p>REST'in karşına çıkacak diğer API yaklaşımlarından farkını bilmek de faydalıdır:</p>
        <table class="tcompare">
          <tr><th>Yaklaşım</th><th>Temel Fikir</th><th>Uygun Kullanım Alanı</th></tr>
          <tr><td>REST</td><td>HTTP üzerinden kaynaklar; her kaynak için bir endpoint</td><td>Genel amaçlı, dışa açık veya kurum içi API'ler</td></tr>
          <tr><td>GraphQL</td><td>Tek endpoint; istemci tam olarak hangi alanlara ihtiyaç duyduğunu belirtir</td><td>Tek çağrıda esnek ve iç içe veri gerektiren karmaşık arayüzler</td></tr>
          <tr><td>gRPC</td><td>Hız için tasarlanmış, Protocol Buffers kullanan ikili protokol</td><td>Backend içindeki servisler arası iletişim</td></tr>
        </table>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">REST tek seçenek değildir. Belirli bir problem için doğru yaklaşımı seçmek (örneğin veri yoğun bir panelde GraphQL, kurum içi mikroservisler arasında gRPC) orta düzeyde sık karşılaşılan bir mimari karardır.</p>
      </div>
      <div class="tsec">
        <h3>JSON (JavaScript Object Notation)</h3>
        <p>Veri taşımak için kullanılan hafif bir veri biçimidir. İnsanlar tarafından okunabilir ve veriyi, garsonun sipariş fişi gibi, "anahtar-değer" çiftlerinde saklar.</p>
        <p>{</p>
        <p>"name": "Fatma",</p>
        <p>"age": 20</p>
        <p>}</p>
        <p>JSON bir form gibidir: alanlar bellidir — İsim, Yaş, E-posta.</p>
        <p>Neden önemli?</p>
        <p>Frontend ile backend arasındaki en yaygın veri alışverişi biçimidir.</p>
        <h3><span class="tag">DERİNLEŞTİR</span>İç İçe Yapılar, Serileştirme ve Doğrulama</h3>
        <p>Gerçek API'ler nadiren düz nesneler gönderir. JSON, iç içe nesneleri ve dizileri destekler; ilişkili veriler tek bir yanıtta bu şekilde temsil edilir:</p>
        <p>{</p>
        <p>"id": 5,</p>
        <p>"name": "Ali",</p>
        <p>"roles": ["editor", "viewer"],</p>
        <p>"address": {</p>
        <p>"city": "Adana",</p>
        <p>"zip": "01000"</p>
        <p>}</p>
        <p>}</p>
        <p>Her JSON alışverişinin arkasında iki orta düzey kavram bulunur:</p>
        <ul class="plain">
          <li>Serialization / Deserialization (Serileştirme / Geri Serileştirme) — backend, bellekteki nesneleri (örneğin veritabanı satırını) göndermek için JSON metnine dönüştürür (serialize); frontend ise JSON metnini yeniden kullanılabilir nesneye çevirir (deserialize). Çoğu framework bunu otomatik yapar; ancak tarihlerin veya büyük sayıların bazen beklenmeyen biçimde gelmesinin nedeni budur.</li>
          <li>JSON Schema — JSON verisinin beklenen yapısını (zorunlu alanlar, türleri, izin verilen değerler) biçimsel olarak tanımlamanın yoludur. Gelen veriyi doğrulamak ve API dokümantasyonunu otomatik üretmek için kullanılır.</li>
        </ul>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">"Frontend ve backend anlaşamıyor" hatalarının çoğu, beklenen JSON yapısındaki uyumsuzluktan kaynaklanır: frontend'in her zaman var sandığı isteğe bağlı bir alan veya backend'in haber vermeden değiştirdiği tarih biçimi gibi. Deneyimli ekipler bunu ortak şema ve API dokümantasyonu (örneğin OpenAPI/Swagger) ile önler.</p>
      </div>`},
  en:{title:"APIs and Data Exchange", summary:"A bridge that lets different pieces of software talk to one another.", html:`
      <div class="tsec">
        <h3>What Is an API?</h3>
        <p>A bridge that lets different pieces of software talk to one another.</p>
        <p>An API is like a waiter in a restaurant: you say "I'd like a pizza," the waiter relays it to the kitchen — you never step into the kitchen (the server) yourself.</p>
        <p>Real-Life Example: You open a weather app → the app asks a weather API → the API sends back the temperature.</p>
        <p>Why does it matter? Modern applications (mobile apps, websites, payment systems) talk to one another through APIs.</p>
        <h3><span class="tag">DEEP DIVE</span>API Versioning and Gateways</h3>
        <p>Once an API has real users, you can't just change it freely — breaking changes would break every app that depends on it. Two practices address this:</p>
        <ul class="plain">
          <li>Versioning — exposing endpoints like /api/v1/users and /api/v2/users side by side so existing clients keep working while new clients adopt the new version.</li>
          <li>API Gateway — a single entry point in front of one or more backend services that handles cross-cutting concerns (authentication, rate limiting, routing, logging) so individual services don't each reimplement them.</li>
        </ul>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">as a project grows from "one backend" into multiple services, the API gateway becomes the shared front door, and versioning becomes the contract that keeps old and new clients compatible at the same time.</p>
      </div>
      <div class="tsec">
        <h3>REST APIs</h3>
        <p>The standard approach for building APIs on the Web, and it typically uses HTTP.</p>
        <p>Request: GET /users/5</p>
        <p>Meaning: "Fetch user number 5."</p>
        <p>Response:</p>
        <p>{</p>
        <p>"name": "Ali",</p>
        <p>"age": 25</p>
        <p>}</p>
        <p>A REST API is like a restaurant's standard ordering system: everyone places orders following the same rules.</p>
        <h3><span class="tag">DEEP DIVE</span>What Makes an API "RESTful," and the Alternatives</h3>
        <p>REST (Representational State Transfer) is a set of architectural constraints, not just "an API that uses HTTP." The ones most relevant in practice:</p>
        <ul class="plain">
          <li>Statelessness — each request must contain everything needed to understand it; the server doesn't rely on memory of previous requests (ties back to Section 2).</li>
          <li>Resource-based URLs — URLs identify resources (nouns), not actions: /users/5 rather than /getUser?id=5, with the HTTP method (GET/POST/PUT/DELETE) expressing the action.</li>
          <li>Uniform interface — consistent, predictable conventions across all endpoints (e.g., always returning the created object with a 201 from a POST).</li>
        </ul>
        <p>It's also useful to know how REST compares to other API styles you'll encounter:</p>
        <table class="tcompare">
          <tr><th>Style</th><th>Core Idea</th><th>Good Fit For</th></tr>
          <tr><td>REST</td><td>Resources over HTTP, one endpoint per resource</td><td>General-purpose public/internal APIs</td></tr>
          <tr><td>GraphQL</td><td>One endpoint; the client specifies exactly which fields it needs</td><td>Complex UIs that need flexible, nested data in one call</td></tr>
          <tr><td>gRPC</td><td>Binary protocol using Protocol Buffers, built for speed</td><td>Service-to-service communication inside a backend</td></tr>
        </table>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">REST is not the only option, and picking the right style for a given problem (e.g., GraphQL for a data-heavy dashboard vs. gRPC between internal microservices) is a common intermediate-level architecture decision.</p>
      </div>
      <div class="tsec">
        <h3>JSON (JavaScript Object Notation)</h3>
        <p>A lightweight data format used to transport data. It's human-readable and stores data as "key-value" pairs — like a waiter's order slip.</p>
        <p>{</p>
        <p>"name": "Fatma",</p>
        <p>"age": 20</p>
        <p>}</p>
        <p>JSON is like a form: the fields are fixed — Name, Age, Email.</p>
        <p>Why does it matter?</p>
        <p>It's the most common data-exchange format between frontend and backend.</p>
        <h3><span class="tag">DEEP DIVE</span>Nested Structures, Serialization, and Validation</h3>
        <p>Real APIs rarely send flat objects — JSON supports nested objects and arrays, which is how related data is represented in a single response:</p>
        <p>{</p>
        <p>"id": 5,</p>
        <p>"name": "Ali",</p>
        <p>"roles": ["editor", "viewer"],</p>
        <p>"address": {</p>
        <p>"city": "Adana",</p>
        <p>"zip": "01000"</p>
        <p>}</p>
        <p>}</p>
        <p>Two intermediate concepts sit behind every JSON exchange:</p>
        <ul class="plain">
          <li>Serialization / Deserialization — the backend turns in-memory objects (e.g., a database row) into a JSON string to send ("serialize"), and the frontend turns that JSON string back into a usable object ("deserialize"). Most frameworks do this automatically, but it's the reason things like dates or big numbers sometimes arrive in an unexpected format.</li>
          <li>JSON Schema — a way to formally describe the expected shape of a JSON payload (which fields are required, their types, allowed values). It's used to validate incoming data and to auto-generate API documentation.</li>
        </ul>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">most "the frontend and backend don't agree" bugs come down to a mismatch in the expected JSON shape — an optional field the frontend assumes always exists, or a date format the backend changed without telling anyone. A shared schema (and API documentation, e.g., OpenAPI/Swagger) is how mature teams prevent this.</p>
      </div>`}
},
{
  id:5, icon:"key", depth:"-200 m",
  tr:{title:"Kimlik Doğrulama ve Kullanıcı Yönetimi", summary:"Genel Bakış", html:`
      <div class="tsec">
        <p>Genel Bakış</p>
        <p>Kullanıcıların güvenle giriş yapmasını, kimliklerinin doğrulanmasını, izinlerinin yönetilmesini ve oturumlarının kesintisiz sürdürülmesini sağlayan yapıdır.</p>
        <p>Terimlerin Açıklaması</p>
        <h4 class="content-subheading">Authentication (Kimlik Doğrulama)</h4>
        <ul class="plain">
          <li>Tanım: Kullanıcının beyan ettiği kimliğin doğrulanması sürecidir (örneğin kullanıcı adı ve şifre).</li>
          <li>Gerçek Hayattan Örnek: Bir otelin resepsiyonuna geldiğini düşün. Resepsiyoniste adını söyler ve kim olduğunu kanıtlamak için kimlik kartını verirsin.</li>
          <li>Neden Önemli?: Kimlik doğrulama olmadan yetkisiz herhangi biri hesap sahibi olduğunu iddia edebilir; bu da güvenliğin tamamen çökmesine ve veri ihlallerine yol açabilir.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Şifrenin Ötesi</h3>
        <p>Yalnızca şifreyle kimlik doğrulama, başlangıç düzeyindeki temeldir. Gerçek sistemler genellikle şunları ekler:</p>
        <ul class="plain">
          <li>MFA / 2FA (Çok Faktörlü Kimlik Doğrulama) — şifreye ek olarak, uygulamadan veya SMS'ten gelen tek kullanımlık kod gibi ikinci bir kimlik kanıtı ister. Çalınmış veya sızdırılmış şifrelere karşı korur.</li>
          <li>OAuth 2.0 — kullanıcının şifresini paylaşmadan, bir uygulamaya başka bir hizmetteki verilerine sınırlı erişim vermesini sağlayan yetkilendirme çerçevesidir (örneğin "Google ile devam et").</li>
          <li>SSO (Tek Oturum Açma) — kullanıcının bir kez giriş yapıp birden fazla ilişkili uygulamaya erişmesini sağlar. Şirketlerde yaygındır (e-postana giriş yaptığında kurum içi araçlara da giriş yapmış olursun).</li>
        </ul>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Orta düzey geliştiricilerin eklediği "Google/GitHub ile devam et" düğmeleri, arka planda neredeyse her zaman özel bir kimlik doğrulama sistemi yerine OAuth 2.0 kullanır.</p>
        <h4 class="content-subheading">Authorization (Yetkilendirme)</h4>
        <ul class="plain">
          <li>Tanım: Kimliği doğrulanmış kullanıcının hangi kaynaklara erişmesine izin verildiğini belirleme sürecidir.</li>
          <li>Gerçek Hayattan Örnek: Otel resepsiyonisti kimliğini doğruladıktan sonra sana yalnızca 304 numaralı odayı açacak şekilde programlanmış bir kart verir. Diğer konukların odalarına veya yönetim ofislerine girmeni engeller.</li>
          <li>Neden Önemli?: Authentication kim olduğunu doğrular; Authorization ise normal kullanıcıların yönetici kontrollerini veya diğer kullanıcıların kişisel verilerini değiştirememesi için kesin sınırlar uygular.</li>
        </ul>
        <p>Karşılaştırma Tablosu: Authentication ve Authorization</p>
        <table class="tcompare">
          <tr><th>Özellik</th><th>Authentication</th><th>Authorization</th></tr>
          <tr><td>Temel Soru</td><td>"Sen kimsin?"</td><td>"Ne yapmana izin var?"</td></tr>
          <tr><td>Kontrol Süreci</td><td>Kimliği doğrular (şifre, biyometri, OTP)</td><td>İzinleri doğrular (roller, erişim kontrol listeleri)</td></tr>
          <tr><td>İşlem Sırası</td><td>Önce gerçekleşir</td><td>Kimlik doğrulamadan sonra gerçekleşir</td></tr>
        </table>
        <h3><span class="tag">DERİNLEŞTİR</span>RBAC ve ABAC</h3>
        <p>Uygulamada birden fazla kullanıcı türü olduğunda yetkilendirme bir modele ihtiyaç duyar:</p>
        <ul class="plain">
          <li>RBAC (Rol Tabanlı Erişim Kontrolü) — izinler rollere ("yönetici", "editör", "görüntüleyici") bağlanır; kullanıcılara bir veya daha fazla rol atanır. Anlaşılması kolaydır ve çoğu uygulamanın ihtiyacını karşılar.</li>
          <li>ABAC (Nitelik Tabanlı Erişim Kontrolü) — izinler kullanıcı, kaynak ve bağlamın niteliklerinden hesaplanır (örneğin "yönetici yalnızca kendi departmanının harcamalarını ve yalnızca mesai saatlerinde onaylayabilir"). Daha esnektir; ancak uygulaması ve denetimi daha karmaşıktır.</li>
        </ul>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Aslında ABAC tarzı kurallar gerekirken RBAC seçmek, kodun her yanına dağılmış özel durum "if" ifadeleriyle dolu bir sisteme yol açar. İhtiyacı erken fark etmek, izin mantığını merkezi ve denetlenebilir tutar.</p>
        <h4 class="content-subheading">Cookies (Çerezler)</h4>
        <ul class="plain">
          <li>Tanım: Küçük verileri ve kullanıcı tercihlerini tutmak için kullanıcının tarayıcısında saklanan küçük metin dosyalarıdır.</li>
          <li>Gerçek Hayattan Örnek: Otelde kalırken resepsiyona fazladan yastık tercih ettiğini söylersin. Gelecekteki konaklamalarında tercihini hatırlamak için bunu bankoda tutulan küçük bir karta yazarlar.</li>
          <li>Neden Önemli?: Küçük tercihleri istemci tarafında saklamak, backend sunucularına gereksiz veri işleme yükü getirmeden kullanıcı deneyimini kişiselleştirir.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Cookie Güvenlik Nitelikleri</h3>
        <p>Bir cookie'nin davranışı ve güvenliği büyük ölçüde oluşturulurken ayarlanan bayraklara bağlıdır. Bunlar gerçek güvenlik hatalarının sık görülen nedenlerindendir:</p>
        <table class="tcompare">
          <tr><th>Nitelik</th><th>Ne Yapar?</th></tr>
          <tr><td>HttpOnly</td><td>JavaScript'in cookie'yi okumasını engelleyerek XSS saldırısının etkisini azaltır.</td></tr>
          <tr><td>Secure</td><td>Cookie yalnızca HTTPS üzerinden gönderilir; düz HTTP üzerinden asla gönderilmez.</td></tr>
          <tr><td>SameSite</td><td>Cookie'nin siteler arası isteklerde gönderilip gönderilmeyeceğini kontrol eder. CSRF saldırılarına karşı temel savunmalardandır (Strict, Lax veya None).</td></tr>
          <tr><td>Expires / Max-Age</td><td>Cookie'nin ne kadar süre kalacağını belirler. Süresi belirtilmeyen oturum cookie'si tarayıcı kapanınca kaybolur.</td></tr>
        </table>
        <h4 class="content-subheading">Sessions (Oturumlar)</h4>
        <ul class="plain">
          <li>Tanım: Kullanıcının aktif durumunu birden fazla istek boyunca takip etmek için kullanılan sunucu tarafı durum yönetimi mekanizmalarıdır.</li>
          <li>Gerçek Hayattan Örnek: Otel resepsiyonu aktif konaklamanı merkezi misafir defterine kaydeder. Çıkış yapmadığın sürece personel binadaki aktif varlığını tanır.</li>
          <li>Neden Önemli?: Oturumlar, sunucunun kullanıcının giriş yapmış olduğunu birden fazla sayfa görüntüleme boyunca hatırlamasını sağlar; her tıklamada şifre yazma ihtiyacını ortadan kaldırır.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Oturum Verisi Gerçekte Nerede Tutulur?</h3>
        <p>Bir oturum genellikle cookie'de saklanan bir kimlikle temsil edilir; arkasındaki gerçek veri sunucuda yaşar. Her istekte "Bu kullanıcı giriş yapmış mı?" kontrolü daha yavaş, disk tabanlı depolamaya yük getirmesin diye ana veritabanı yerine çoğunlukla Redis gibi hızlı, bellek içi bir depoda tutulur. Bilinen risklerden biri session fixation'dır: saldırgan kullanıcıyı bilinen bir oturum kimliğini kullanmaya yönlendirir. Standart savunma, girişten hemen sonra tamamen yeni bir oturum kimliği üretmektir.</p>
        <h4 class="content-subheading">Tokens (Jetonlar)</h4>
        <ul class="plain">
          <li>Tanım: İstemci ile sunucu arasında güvenlik bilgisini güvenle aktarmak için kullanılan dijital erişim bilgileridir.</li>
          <li>Gerçek Hayattan Örnek: Otele girişte verilen oda kartı fiziksel erişim token'ı gibi davranır. Her kapıyı elle açmaları için resepsiyonu aramak yerine kartı kapıda okutursun.</li>
          <li>Neden Önemli?: Token'lar, hassas kimlik bilgilerini açığa çıkarmadan mikroservisler ve dış platformlar arasında durumsuz ve güvenli doğrulamaya olanak tanır.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Access Token ve Refresh Token</h3>
        <p>Canlı sistemler genellikle güvenlik ile kullanım kolaylığı arasında denge kurarak tek token yerine iki token verir:</p>
        <ul class="plain">
          <li>Access token (erişim token'ı) — kısa ömürlüdür (dakikalar); kimliği kanıtlamak için her API isteğiyle gönderilir.</li>
          <li>Refresh token (yenileme token'ı) — uzun ömürlüdür, daha dikkatli saklanır ve yalnızca eski erişim token'ının süresi dolduğunda kullanıcıyı yeniden giriş yapmaya zorlamadan yenisini almak için kullanılır.</li>
        </ul>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Bu ayrım, kullanıcıyı günlerce veya haftalarca giriş yapmış tutarken sızan erişim token'ının zararını sınırlar; çünkü token hızla sona erer. Erişimi iptal etmek (örneğin çıkışta veya "tüm cihazlardan çıkış yap" işleminde), sunucuda yenileme token'ını geçersiz kılmak demektir. Durumsuz bir erişim token'ı normalde kendi süresi dolmadan geri alınamaz.</p>
        <h4 class="content-subheading">JWT (JSON Web Token)</h4>
        <ul class="plain">
          <li>Tanım: Dijital imzalar kullanarak taraflar arasında doğrulanmış beyanları JSON biçiminde güvenle ileten standart token biçimidir.</li>
          <li>Gerçek Hayattan Örnek: Otel kartında, son kullanım zamanı (öğlen 12.00 çıkış saati) ile kriptografik olarak imzalanmış dijital bir çip bulunur. Asansör ve oda kapıları konaklamanı anında doğrulamak için bu imzalı çipi çevrimdışı okur.</li>
          <li>Neden Önemli?: JWT'ler imzalı beyanlar içerdiğinden backend sunucuları her seferinde veritabanını sorgulamadan istekleri doğrulayabilir; bu da yüksek ölçeklenebilirlik sağlar.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>JWT Yapısı ve Ödünleşimler</h3>
        <p>JWT, noktalarla ayrılmış Base64 kodlu üç parçadan oluşur: header, payload ve signature:</p>
        <p>header.payload.signature</p>
        <p>eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjV9.4f3c9a…</p>
        <ul class="plain">
          <li>Header — kullanılan imzalama algoritmasını belirtir (örneğin HS256, RS256).</li>
          <li>Payload — asıl beyanlardır (kullanıcı kimliği, roller, son kullanım zamanı). Not: bu kısım yalnızca kodlanmıştır, şifrelenmemiştir. Herkes kodunu çözüp okuyabilir; bu yüzden JWT payload'ına asla hassas veri konulmamalıdır.</li>
          <li>Signature — token'ın değiştirilmediğini kanıtlar; yalnızca sırrı (veya özel anahtarı) bilen sunucu geçerli imza üretebilir.</li>
        </ul>
        <p>JWT ile geleneksel sunucu tarafı oturumlar arasında seçim, orta düzeyde sık karşılaşılan bir tasarım kararıdır:</p>
        <table class="tcompare">
          <tr><th></th><th>Oturum Tabanlı Kimlik Doğrulama</th><th>JWT Tabanlı Kimlik Doğrulama</th></tr>
          <tr><td>Sunucunun durum saklaması gerekir mi?</td><td>Evet (oturum deposu)</td><td>Hayır (kendi bilgilerini taşıyan token)</td></tr>
          <tr><td>Hemen iptal etmek kolay mı?</td><td>Evet (oturumu sil)</td><td>Zor (token süresi dolana kadar geçerlidir)</td></tr>
          <tr><td>Servisler arasında kolay ölçeklenir mi?</td><td>Ortak oturum deposu gerekir</td><td>Evet — her servis imzayı doğrulayabilir</td></tr>
        </table>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">JWT'ler durumsuz, dağıtık sistemlerde popülerdir; ancak süre dolmadan iptal edilmelerinin zorluğu gerçek bir ödünleşimdir. Pratikte kısa geçerlilik süreleri ile refresh token akışı birlikte kullanılarak veya ele geçirilmiş hesap gibi kritik durumlarda sunucu tarafı token engelleme listesiyle bu sorun azaltılır.</p>
      </div>`},
  en:{title:"Authentication & User Management", summary:"General Overview", html:`
      <div class="tsec">
        <p>General Overview</p>
        <p>The framework responsible for allowing users to log in securely, verifying their identity, managing their permissions, and handling their sessions seamlessly.</p>
        <p>Term Breakdown</p>
        <h4 class="content-subheading">Authentication</h4>
        <ul class="plain">
          <li>Definition: The process of verifying the identity claimed by a user (e.g., username and password).</li>
          <li>Real-Life Example: Imagine walking into a hotel reception. You tell the receptionist your name and hand over your ID card to prove who you are.</li>
          <li>Why This Matters: Without identity verification, any unauthorized user could claim to be an account owner, leading to complete security failure and data breaches.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Beyond the Password</h3>
        <p>Password-only authentication is a beginner-level baseline. Real systems typically add:</p>
        <ul class="plain">
          <li>MFA / 2FA (Multi-Factor Authentication) — requires a second proof of identity beyond the password, such as a one-time code from an app or SMS. It defends against stolen or leaked passwords.</li>
          <li>OAuth 2.0 — an authorization framework that lets a user grant one app limited access to their data on another service without sharing their password (e.g., "Continue with Google").</li>
          <li>SSO (Single Sign-On) — lets a user log in once and gain access to multiple related applications, common inside companies (log in to your email, and you're also signed into internal tools).</li>
        </ul>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">"Continue with Google/GitHub" buttons that intermediate developers implement are almost always OAuth 2.0 under the hood, not custom authentication.</p>
        <h4 class="content-subheading">Authorization</h4>
        <ul class="plain">
          <li>Definition: The process of determining what resources an authenticated user is allowed to access.</li>
          <li>Real-Life Example: After verifying your ID, the hotel receptionist hands you a keycard programmed strictly to open Room 304, preventing you from entering other guests' rooms or administrative offices.</li>
          <li>Why This Matters: Authentication confirms who you are, but Authorization enforces strict boundaries so regular users cannot tamper with admin controls or other users' personal data.</li>
        </ul>
        <p>Comparison Table: Authentication vs. Authorization</p>
        <table class="tcompare">
          <tr><th>Feature</th><th>Authentication</th><th>Authorization</th></tr>
          <tr><td>Primary Question</td><td>"Who are you?"</td><td>"What are you allowed to do?"</td></tr>
          <tr><td>Check Process</td><td>Validates identity (Passwords, Biometrics, OTP)</td><td>Validates permissions (Roles, Access Control Lists)</td></tr>
          <tr><td>Execution Order</td><td>Happens first</td><td>Happens after authentication</td></tr>
        </table>
        <h3><span class="tag">DEEP DIVE</span>RBAC vs. ABAC</h3>
        <p>Once an application has more than one type of user, authorization needs a model:</p>
        <ul class="plain">
          <li>RBAC (Role-Based Access Control) — permissions are attached to roles ("admin," "editor," "viewer"), and users are assigned one or more roles. Simple to reason about and covers most applications.</li>
          <li>ABAC (Attribute-Based Access Control) — permissions are computed from attributes of the user, resource, and context (e.g., "a manager can approve expenses only for their own department, and only during business hours"). More flexible, but more complex to implement and audit.</li>
        </ul>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">choosing RBAC when ABAC-style rules are actually needed leads to a system full of special-case "if" statements scattered through the code; recognizing the pattern early keeps permission logic centralized and auditable.</p>
        <h4 class="content-subheading">Cookies</h4>
        <ul class="plain">
          <li>Definition: Small text files stored on the user's browser to hold lightweight data and user preferences.</li>
          <li>Real-Life Example: During your hotel stay, you inform the front desk that you prefer extra pillows. They write this note on a small card kept at the desk so they remember your preference for future stays.</li>
          <li>Why This Matters: Storing light preferences client-side personalizes the user experience without placing unnecessary data-processing overhead on the backend servers.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Cookie Security Attributes</h3>
        <p>A cookie's behavior and safety depend heavily on the flags set when it's created — this is a frequent source of real security bugs:</p>
        <table class="tcompare">
          <tr><th>Attribute</th><th>What It Does</th></tr>
          <tr><td>HttpOnly</td><td>Blocks JavaScript from reading the cookie, reducing the impact of an XSS attack.</td></tr>
          <tr><td>Secure</td><td>The cookie is only ever sent over HTTPS, never plain HTTP.</td></tr>
          <tr><td>SameSite</td><td>Controls whether the cookie is sent on cross-site requests, which is a key defense against CSRF attacks (Strict, Lax, or None).</td></tr>
          <tr><td>Expires / Max-Age</td><td>Defines how long the cookie persists — a session cookie (no expiry) disappears when the browser closes.</td></tr>
        </table>
        <h4 class="content-subheading">Sessions</h4>
        <ul class="plain">
          <li>Definition: Server-side state management mechanisms used to keep track of a user's active status across multiple requests.</li>
          <li>Real-Life Example: The hotel desk logs your active stay in their central guest register. As long as you remain checked in, the staff recognizes your active presence in the building.</li>
          <li>Why This Matters: Sessions allow the server to remember that a user is actively logged in across multiple page views, eliminating the need to type passwords on every click.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Where Session Data Actually Lives</h3>
        <p>A session is usually just an ID stored in a cookie; the real data behind it lives on the server, commonly in a fast in-memory store like Redis rather than the main database, so that checking "is this user logged in?" doesn't add load to slower, disk-based storage on every single request. A known risk is session fixation, where an attacker tricks a user into using a known session ID; the standard defense is to generate a brand-new session ID immediately after login.</p>
        <h4 class="content-subheading">Tokens</h4>
        <ul class="plain">
          <li>Definition: Digital access credentials used to exchange security information safely between client and server.</li>
          <li>Real-Life Example: The hotel keycard given to you at check-in acts as a physical access token. You scan it at doors instead of calling the front desk to unlock every door manually.</li>
          <li>Why This Matters: Tokens allow stateless and secure verification across microservices and external platforms without exposing sensitive credentials.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Access Tokens vs. Refresh Tokens</h3>
        <p>Production systems typically issue two tokens instead of one, trading off security against convenience:</p>
        <ul class="plain">
          <li>Access token — short-lived (minutes), sent with every API request to prove identity.</li>
          <li>Refresh token — long-lived, stored more carefully, and used only to obtain a new access token once the old one expires, without forcing the user to log in again.</li>
        </ul>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">this split limits the damage of a leaked access token (it expires quickly) while still keeping the user logged in for days or weeks. Revoking access (e.g., on logout, or "log out of all devices") means invalidating the refresh token on the server, since a stateless access token normally can't be un-issued before it naturally expires.</p>
        <h4 class="content-subheading">JWT (JSON Web Token)</h4>
        <ul class="plain">
          <li>Definition: A standard token format used to transmit verified claims between parties securely in JSON format using digital signatures.</li>
          <li>Real-Life Example: Your hotel keycard contains a digital chip cryptographically signed with an expiration date (12:00 PM check-out). The elevator and room doors read this signed chip offline to verify your stay instantly.</li>
          <li>Why This Matters: Because JWTs contain signed claims, backend servers can verify requests without querying a database every time, allowing high scalability.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>JWT Structure and Trade-offs</h3>
        <p>A JWT is three Base64-encoded parts separated by dots — header, payload, and signature:</p>
        <p>header.payload.signature</p>
        <p>eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjV9.4f3c9a…</p>
        <ul class="plain">
          <li>Header — specifies the signing algorithm used (e.g., HS256, RS256).</li>
          <li>Payload — the actual claims (user ID, roles, expiration time). Note: this part is only encoded, not encrypted — anyone can decode and read it, so sensitive data should never go in a JWT payload.</li>
          <li>Signature — proves the token wasn't tampered with; only the server that knows the secret (or private key) can produce a valid signature.</li>
        </ul>
        <p>JWT vs. traditional server-side sessions is a common intermediate design decision:</p>
        <table class="tcompare">
          <tr><th></th><th>Session-Based Auth</th><th>JWT-Based Auth</th></tr>
          <tr><td>Server needs to store state?</td><td>Yes (session store)</td><td>No (self-contained token)</td></tr>
          <tr><td>Easy to revoke immediately?</td><td>Yes (delete the session)</td><td>Hard (token is valid until it expires)</td></tr>
          <tr><td>Scales across services easily?</td><td>Needs a shared session store</td><td>Yes — any service can verify the signature</td></tr>
        </table>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">JWTs are popular for stateless, distributed systems, but their difficulty to revoke early is a real trade-off — mitigated in practice with short expirations plus a refresh-token flow, or a server-side token blocklist for critical cases like a compromised account.</p>
      </div>`}
},
{
  id:6, icon:"shield", depth:"-240 m",
  tr:{title:"Güvenlik ve Performans", summary:"Genel Bakış", html:`
      <div class="tsec">
        <p>Genel Bakış</p>
        <p>Web uygulamalarını dış tehditlere karşı korumak, yetkisiz erişimi önlemek ve hızlı, güvenilir kullanıcı deneyimleri sunmak için tasarlanmış temel mekanizmalardır.</p>
        <p>Terimlerin Açıklaması</p>
        <h4 class="content-subheading">CORS (Cross-Origin Resource Sharing)</h4>
        <ul class="plain">
          <li>Tanım: Kaynakların farklı origin'ler (alan adları) arasında güvenli şekilde nasıl paylaşılacağını düzenleyen bir tarayıcı güvenlik kuralıdır.</li>
          <li>Gerçek Hayattan Örnek: Güvenli bir banka binası düşün. Güvenlik görevlisi yalnızca güvenilen, önceden onaylanmış ortak kuruluşlarla işlem yapılmasına izin verir; bilinmeyen üçüncü tarafların araçla hizmet şeridine girmesini engeller.</li>
          <li>Neden Önemli?: Kötü amaçlı sitelerin, durumdan habersiz bir ziyaretçi adına backend servislerine sessizce yetkisiz istekler göndermesini önler.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Preflight İsteği</h3>
        <p>CORS'u sunucu değil tarayıcı uygular; sunucu yalnızca Access-Control-Allow-Origin header'ıyla neye izin verdiğini bildirir. Basit olmayan isteklerde (örneğin PUT/DELETE veya Authorization gibi özel header'lar kullanıldığında) tarayıcı, asıl isteği göndermeden önce "Bu isteğe izin verir misin?" diye soran, preflight adı verilen otomatik bir OPTIONS isteği gönderir:</p>
        <p>OPTIONS /api/users/5 HTTP/1.1</p>
        <p>Origin: https://myapp.com</p>
        <p>Access-Control-Request-Method: DELETE</p>
        <p>HTTP/1.1 204 No Content</p>
        <p>Access-Control-Allow-Origin: https://myapp.com</p>
        <p>Access-Control-Allow-Methods: GET, POST, DELETE</p>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Orta düzey geliştiricileri sık şaşırtan durumlardan biri, tek API çağrısı gibi görünen işlem için iki ağ isteği görmektir. Nedeni görünmeyen OPTIONS preflight isteğidir; bunu doğru yanıtlamayan, yanlış yapılandırılmış sunucu pratikteki en yaygın CORS hatalarından biridir.</p>
        <h4 class="content-subheading">Cache (Önbellek)</h4>
        <ul class="plain">
          <li>Tanım: Sık erişilen veriyi, sonraki isteklerde daha hızlı getirmek için geçici olarak saklamaktır.</li>
          <li>Gerçek Hayattan Örnek: Banka görevlisi, müşteri döviz kurunu her sorduğunda merkezi dosya odasına yürümek yerine günlük faiz oranlarının basılı bir listesini masasında tutar.</li>
          <li>Neden Önemli?: Önbellekleme, veritabanı yükünü ve gecikmeyi büyük ölçüde azaltarak son kullanıcıya neredeyse anlık yanıtlar sunar.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Önbellekleme Nerede Yapılır ve Nasıl Geçersiz Kılınır?</h3>
        <p>Önbellekleme tek bir katmandan oluşmaz; istek yolu boyunca farklı noktalarda yapılır ve her katman farklı bir sorunu çözer:</p>
        <table class="tcompare">
          <tr><th>Katman</th><th>Örnek</th><th>Tipik Kullanım</th></tr>
          <tr><td>Tarayıcı önbelleği</td><td>Statik dosyalardaki Cache-Control header'ı</td><td>Değişmeyen görsellerin, CSS ve JS dosyalarının tekrar indirilmesini önlemek</td></tr>
          <tr><td>CDN (İçerik Dağıtım Ağı)</td><td>Önbellekteki sayfa ve dosyaları kullanıcıya yakın noktadan sunan Cloudflare, Fastly</td><td>Dünya genelinde gecikmeyi ve kaynak sunucunun yükünü azaltmak</td></tr>
          <tr><td>Uygulama / sunucu önbelleği</td><td>Redis, Memcached</td><td>Maliyetli sorguları veya hesaplamaları tekrar çalıştırmamak</td></tr>
          <tr><td>Veritabanı önbelleği</td><td>Veritabanı motoru içinde sorgu sonuçlarının önbelleğe alınması</td><td>Tekrarlanan aynı sorguları hızlandırmak</td></tr>
        </table>
        <p>Önbelleklemenin en zor kısmı geçersiz kılmadır (invalidation): önbellekteki verinin ne zaman eskidiğini bilmek. İki yaygın strateji:</p>
        <ul class="plain">
          <li>TTL (Time To Live) — önbellek kaydı belirli bir süreden sonra otomatik sona erer (basittir; ancak veri kısa süreliğine güncelliğini yitirmiş olabilir).</li>
          <li>ETag / koşullu istekler — sunucu kaynağın her sürümüne bir parmak izi (ETag) verir. İstemci bunu sonraki istekte geri gönderir; hiçbir şey değişmediyse sunucu hafif bir "304 Not Modified" yanıtı vererek aynı verinin tekrar gönderilmesini önler.</li>
        </ul>
        <h4 class="content-subheading">Frontend Performansı</h4>
        <ul class="plain">
          <li>Tanım: İlk baytın alınmasından kullanıcının gerçekten etkileşime geçebildiği ana kadar, bir sayfanın tarayıcıda ne kadar hızlı ve akıcı kullanılabilir hale geldiğidir.</li>
          <li>Gerçek Hayattan Örnek: Kasa (sunucu) anında yanıt verse bile müşteri, görevliye ulaşmadan önce kapılarla dolu bir labirentten geçiyorsa veya form imzalarken banko sürekli yana kayıyorsa bankayı yavaş hisseder.</li>
          <li>Neden Önemli?: Backend'in 50 ms'de yanıt vermesi, herhangi bir şey tıklanabilir olmadan önce tarayıcı üç saniye JavaScript indirip çalıştırıyorsa boşa gider. Kullanıcılar hızı yalnızca sunucu yanıt süresiyle değil, yaşadıkları deneyimle değerlendirir.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Core Web Vitals</h3>
        <p>Google, kullanıcının gerçekte hissettiklerini yaklaşık olarak yansıtan üç metriği tanımladı. Bunlar frontend performansını ölçmek ve izlemek için yaygın kullanılır:</p>
        <table class="tcompare">
          <tr><th>Metrik</th><th>Neyi Ölçer?</th><th>İyi Hedef</th></tr>
          <tr><td>LCP (Largest Contentful Paint)</td><td>Ana içeriğin (örneğin büyük açılış görseli veya başlığın) görünür olmasına kadar geçen süre.</td><td>2,5 saniyenin altında</td></tr>
          <tr><td>INP (Interaction to Next Paint)</td><td>Tıklama, dokunma veya tuşa basma sonrasında sayfanın yanıt vermesi için geçen süre.</td><td>200 ms'nin altında</td></tr>
          <tr><td>CLS (Cumulative Layout Shift)</td><td>Sayfa yüklenirken görünür içeriğin beklenmedik şekilde ne kadar yer değiştirdiği.</td><td>0,1'in altında</td></tr>
        </table>
        <p>Bunları iyileştirmek için yaygın teknikler: kod bölme ve lazy loading (yalnızca sayfanın o anda ihtiyaç duyduğu JavaScript'i göndermek), görsel optimizasyonu ve modern biçimler, tarayıcının indirip ayrıştıracağı veriyi azaltmak için küçültme ve paketleme.</p>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Bu metrikler artık arama sıralamasını ve dönüşüm oranlarını doğrudan etkiliyor. Teknik olarak doğru çalışan backend, yavaş hissettiren frontend ile birleştiğinde yine kullanıcı kaybettirir. Bu nedenle performans yalnızca backend'in değil, tüm katmanların ortak sorumluluğu olarak ele alınır.</p>
        <h4 class="content-subheading">HTTPS / SSL</h4>
        <ul class="plain">
          <li>Tanım: Dinlemeyi ve değiştirmeyi önlemek için istemci ile sunucu arasındaki tüm veri trafiğini şifreleyen güvenli protokoldür.</li>
          <li>Gerçek Hayattan Örnek: Banka görevlisiyle konuşurken aranızdaki kurşun geçirmez cam, çevreden geçenlerin alışverişini yaptığınız para ve notları ele geçirmesini veya değiştirmesini önler.</li>
          <li>Neden Önemli?: Şifrelenmemiş HTTP trafiği, açık Wi-Fi ağlarındaki saldırganların kimlik bilgilerini, kredi kartı ayrıntılarını ve özel uygulama verilerini çalmasına olanak tanır.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>TLS El Sıkışması ve Sertifikalar</h3>
        <p>HTTPS, TLS (Transport Layer Security) üzerinde çalışan HTTP'dir; SSL ise onun eski, kullanım dışı öncülüdür. HTTP verisi gönderilmeden önce istemci ve sunucu TLS el sıkışması yapar:</p>
        <ul class="plain">
          <li>Sunucu, güvenilen bir Sertifika Yetkilisi (CA) tarafından verilen ve gerçekten iddia ettiği alan adına ait olduğunu kanıtlayan dijital sertifika sunar.</li>
          <li>İstemci ve sunucu, ortak bir sır üzerinde anlaşmak için asimetrik (açık/özel anahtar) kriptografi kullanır.</li>
          <li>Bundan sonra gerçek trafiğin hızlı simetrik şifrelemesinde bu ortak sır kullanılır.</li>
        </ul>
        <p>Let's Encrypt gibi sağlayıcıların ücretsiz, otomatik sertifikaları, HTTPS'i yalnızca ödeme alan siteler için değil tüm siteler için fiilen ücretsiz ve standart hale getirdi. Modern tarayıcılar artık düz HTTP sitelerini "Güvenli Değil" olarak işaretliyor.</p>
        <h4 class="content-subheading">Rate Limiting (Hız Sınırlama)</h4>
        <ul class="plain">
          <li>Tanım: Kullanıcının veya IP adresinin belirli bir zaman aralığında yapabileceği istek sayısını sınırlayan koruma stratejisidir.</li>
          <li>Gerçek Hayattan Örnek: Banka girişindeki güvenlik görevlisi, yoğun saatlerde düzeni korumak ve şubenin aşırı kalabalıklaşmasını önlemek için dakikada yalnızca 10 kişiyi içeri alır.</li>
          <li>Neden Önemli?: Uygulama sunucularını hizmet reddi (DoS) saldırılarından, kaba kuvvet denemelerinden ve ani trafik artışlarında kaynak tükenmesinden korur.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Hız Sınırlama Algoritmaları</h3>
        <p>Sınır uygulamanın birden fazla yolu vardır. Seçilen algoritma, ani trafik patlamalarının nasıl ele alınacağını etkiler:</p>
        <ul class="plain">
          <li>Sabit pencere (fixed window) — örneğin her dakika başında sıfırlanan "dakikada 100 istek". Basittir; ancak pencere sınırında 200 istek patlamasına izin verebilir.</li>
          <li>Kayan pencere (sliding window) — istekleri sabit saat sınırı yerine kayan bir zaman aralığında sayarak bu ani yığılma sorununu yumuşatır.</li>
          <li>Token bucket — her kullanıcının sabit hızda yeniden dolan bir token "kovası" vardır; her istek bir token tüketir. Uzun vadeli ortalama hızı sınırlandırırken kısa patlamalara izin verir. Canlı API gateway'lerinde en yaygın yaklaşımdır.</li>
        </ul>
        <p>İyi tasarlanmış API, sınırlarını X-RateLimit-Remaining ve Retry-After gibi header'larla istemciye bildirir. Böylece istemciler sunucuyu istek yağmuruna tutmak yerine uygun şekilde bekleyebilir (3. bölümdeki 429 durum koduyla bağlantılıdır).</p>
      </div>`},
  en:{title:"Security & Performance", summary:"General Overview", html:`
      <div class="tsec">
        <p>General Overview</p>
        <p>Core mechanisms designed to protect web applications against external threats, prevent unauthorized access, and deliver high-speed, reliable user experiences.</p>
        <p>Term Breakdown</p>
        <h4 class="content-subheading">CORS (Cross-Origin Resource Sharing)</h4>
        <ul class="plain">
          <li>Definition: A browser security rule that governs how resources are shared safely across different origins (domains).</li>
          <li>Real-Life Example: Think of a secure bank building. The security guard only permits transactions with trusted, pre-approved partner agencies, blocking unknown third parties from entering the drive-thru lane.</li>
          <li>Why This Matters: It prevents malicious websites from silently executing unauthorized requests against your backend services on behalf of an unsuspecting visitor.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>The Preflight Request</h3>
        <p>CORS is enforced by the browser, not the server — the server simply announces what it allows, via the Access-Control-Allow-Origin header. For "non-simple" requests (e.g., using PUT/DELETE, or custom headers like Authorization), the browser first sends an automatic OPTIONS request called a preflight, asking the server "would you allow this real request?" before sending the actual one:</p>
        <p>OPTIONS /api/users/5 HTTP/1.1</p>
        <p>Origin: https://myapp.com</p>
        <p>Access-Control-Request-Method: DELETE</p>
        <p>HTTP/1.1 204 No Content</p>
        <p>Access-Control-Allow-Origin: https://myapp.com</p>
        <p>Access-Control-Allow-Methods: GET, POST, DELETE</p>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">a common source of confusion for intermediate developers is seeing two network requests for what looks like one API call — the invisible OPTIONS preflight is the reason, and a misconfigured server that doesn't answer it correctly is one of the most common CORS bugs in practice.</p>
        <h4 class="content-subheading">Cache</h4>
        <ul class="plain">
          <li>Definition: Temporary storage of frequently accessed data to allow faster retrieval in future requests.</li>
          <li>Real-Life Example: Real-Life Example: Instead of walking back to the central file room every time a customer asks for exchange rates, the bank teller keeps a printed sheet of daily interest rates right on their desk.</li>
          <li>Why This Matters: Caching drastically reduces database load and latency, delivering near-instant responses to end users.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Where Caching Happens, and How It's Invalidated</h3>
        <p>Caching isn't one layer — it happens at several points along the request path, and each layer solves a different problem:</p>
        <table class="tcompare">
          <tr><th>Layer</th><th>Example</th><th>Typical Use</th></tr>
          <tr><td>Browser cache</td><td>Cache-Control header on static assets</td><td>Avoid re-downloading unchanged images, CSS, JS</td></tr>
          <tr><td>CDN (Content Delivery Network)</td><td>Cloudflare, Fastly serving cached pages/assets near the user</td><td>Reduce latency and origin server load globally</td></tr>
          <tr><td>Application / server cache</td><td>Redis, Memcached</td><td>Avoid re-running expensive queries or computations</td></tr>
          <tr><td>Database cache</td><td>Query result caching inside the database engine</td><td>Speed up repeated identical queries</td></tr>
        </table>
        <p>The hardest part of caching is invalidation — knowing when cached data has gone stale. Two common strategies:</p>
        <ul class="plain">
          <li>TTL (Time To Live) — the cache entry automatically expires after a fixed time (simple, but data can be briefly stale).</li>
          <li>ETag / conditional requests — the server gives each version of a resource a fingerprint (ETag); the client sends it back on the next request, and the server replies with a lightweight "304 Not Modified" if nothing changed, avoiding re-sending the same data.</li>
        </ul>
        <h4 class="content-subheading">Frontend Performance</h4>
        <ul class="plain">
          <li>Definition: How quickly and smoothly a page becomes usable in the browser — from the first byte received to the moment the user can actually interact with it.</li>
          <li>Real-Life Example: Even if the vault (the server) responds instantly, a customer still feels the bank is slow if the lobby is a maze of doors before reaching the teller, or if the counter keeps sliding sideways while they’re trying to sign a form.</li>
          <li>Why This Matters: A backend that responds in 50ms is wasted if the browser then spends three seconds downloading and running JavaScript before anything is clickable — users judge speed by what they experience, not by server response time alone.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Core Web Vitals</h3>
        <p>Google formalized three metrics that approximate what a user actually feels, and they are commonly used to measure and monitor frontend performance:</p>
        <table class="tcompare">
          <tr><th>Metric</th><th>What It Measures</th><th>Good Target</th></tr>
          <tr><td>LCP (Largest Contentful Paint)</td><td>How long until the main content (e.g., a hero image or headline) is visible.</td><td>Under 2.5s</td></tr>
          <tr><td>INP (Interaction to Next Paint)</td><td>How long the page takes to respond after a click, tap, or key press.</td><td>Under 200ms</td></tr>
          <tr><td>CLS (Cumulative Layout Shift)</td><td>How much visible content unexpectedly jumps around as the page loads.</td><td>Under 0.1</td></tr>
        </table>
        <p>Common techniques to improve these: code splitting and lazy loading (only sending the JavaScript a page actually needs right now), image optimization and modern formats, and minification/bundling to shrink what the browser has to download and parse.</p>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">these metrics now directly affect search ranking and conversion rates — a technically correct backend paired with a slow-feeling frontend still loses users, which is why performance is treated as a shared responsibility across the stack, not just a backend concern.</p>
        <h4 class="content-subheading">HTTPS / SSL</h4>
        <ul class="plain">
          <li>Definition: A secure protocol that encrypts all data traffic between the client and server to prevent eavesdropping and tampering.</li>
          <li>Real-Life Example: When you speak with a teller at the bank, a bulletproof glass partition ensures that passersby cannot intercept or alter the money and notes you exchange.</li>
          <li>Why This Matters: Unencrypted HTTP traffic allows attackers on open Wi-Fi networks to steal credentials, credit card details, and private application data.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>The TLS Handshake and Certificates</h3>
        <p>"HTTPS" is HTTP running over TLS (Transport Layer Security; SSL is its older, retired predecessor). Before any HTTP data is sent, client and server perform a TLS handshake:</p>
        <ul class="plain">
          <li>The server presents a digital certificate, issued by a trusted Certificate Authority (CA), proving it really is the domain it claims to be.</li>
          <li>Client and server use asymmetric (public/private key) cryptography to agree on a shared secret.</li>
          <li>From then on, that shared secret is used for fast symmetric encryption of the actual traffic.</li>
        </ul>
        <p>Free, automated certificates from providers like Let's Encrypt made HTTPS effectively free and standard for all sites, not just those handling payments — modern browsers now flag plain HTTP sites as "Not Secure."</p>
        <h4 class="content-subheading">Rate Limiting</h4>
        <ul class="plain">
          <li>Definition: A protective strategy that caps the number of requests a user or IP address can make within a set timeframe.</li>
          <li>Real-Life Example: A security guard at the bank entrance lets only 10 people enter per minute during peak hours to maintain order and prevent overcrowding inside the branch.</li>
          <li>Why This Matters: It protects application servers from Denial of Service (DoS) attacks, brute-force attempts, and resource exhaustion during traffic spikes.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Rate Limiting Algorithms</h3>
        <p>There's more than one way to implement a limit, and the algorithm chosen affects how "bursty" traffic is handled:</p>
        <ul class="plain">
          <li>Fixed window — e.g., "100 requests per minute," reset at the top of each minute. Simple, but allows a burst of 200 requests right at the window boundary.</li>
          <li>Sliding window — counts requests in a rolling time frame instead of a fixed clock boundary, smoothing out that burst problem.</li>
          <li>Token bucket — each user has a "bucket" of tokens that refills at a steady rate; each request consumes a token. Allows short bursts while still enforcing a long-term average rate — the most common approach in production API gateways.</li>
        </ul>
        <p>A well-behaved API communicates its limits back to the client with headers like X-RateLimit-Remaining and Retry-After, so clients can back off gracefully instead of hammering the server (tying back to the 429 status code from Section 3).</p>
      </div>`}
},
{
  id:7, icon:"db", depth:"-280 m",
  tr:{title:"Veri Depolama", summary:"Genel Bakış", html:`
      <div class="tsec">
        <p>Genel Bakış</p>
        <p>Veriyi güvenilir ve güvenli biçimde saklama, kaydetmeden önce girdileri doğrulama ve kayıtları kullanıcı için verimli şekilde getirme sürecinin tamamıdır.</p>
        <p>Terimlerin Açıklaması</p>
        <h4 class="content-subheading">Veritabanları (Databases)</h4>
        <ul class="plain">
          <li>Tanım: Uygulama verilerini kalıcı olarak saklamak, sorgulamak, düzenlemek ve yönetmek için kullanılan yapılandırılmış sistemlerdir.</li>
          <li>Gerçek Hayattan Örnek: Binlerce kitabı sistematik biçimde sınıflandırılmış raflarda saklayan, istenen herhangi bir kitabın bulunabildiği büyük bir üniversite kütüphanesi düşün.</li>
          <li>Neden Önemli?: Veritabanları, backend sunucuları yeniden başlasa veya ölçeklense bile uygulama durumunun ve kullanıcı kayıtlarının güvenle korunmasını sağlar.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>SQL, NoSQL ve İndekslerin Önemi</h3>
        <p>"Veritabanı" kavramının arkasında önemli bir seçim vardır: ilişkisel (SQL) veya ilişkisel olmayan (NoSQL).</p>
        <table class="tcompare">
          <tr><th></th><th>SQL (İlişkisel)</th><th>NoSQL</th></tr>
          <tr><td>Yapı</td><td>Sabit şema: tablolar, satırlar, sütunlar</td><td>Esnek: belgeler, anahtar-değer, graflar, geniş sütun</td></tr>
          <tr><td>İlişkiler</td><td>Yabancı anahtarlar ve JOIN'ler ile güçlü destek</td><td>Çoğunlukla denormalize; ilişkiler uygulama kodunda ele alınır</td></tr>
          <tr><td>Örnekler</td><td>PostgreSQL, MySQL, SQL Server</td><td>MongoDB, Redis, DynamoDB, Cassandra</td></tr>
          <tr><td>Uygun kullanım</td><td>İlişkileri net, yapılandırılmış veriler (siparişler, hesaplar)</td><td>Hızla değişen şemalar, çok büyük ölçek, basit erişim kalıpları</td></tr>
        </table>
        <p>Başlangıç düzeyinden orta düzey veritabanı kullanımına geçişte iki kavram daha öne çıkar:</p>
        <ul class="plain">
          <li>İndeksleme — veritabanı indeksi, kitabın dizini gibi, tüm tabloyu taramak yerine eşleşen satırlara doğrudan ulaşmayı sağlar. Sık aranan sütunda indeks yoksa 100 satırda hızlı olan sorgular 1 milyon satırda çok yavaşlayabilir.</li>
          <li>Normalizasyon — ilişkisel veriyi aynı bilginin birden fazla tabloda tekrarlanmasını önleyecek şekilde düzenlemektir (örneğin kullanıcı adresini her sipariş satırına kopyalamak yerine bir kez saklayıp kimliğiyle referans vermek).</li>
          <li>ACID özellikleri — Atomicity (Atomiklik), Consistency (Tutarlılık), Isolation (Yalıtım), Durability (Kalıcılık): ilişkisel veritabanlarının bir transaction'ın (örneğin "A'dan B'ye para aktar") ya tamamen tamamlanmasını ya da tamamen başarısız olmasını, veriyi asla yarım güncellenmiş bırakmamasını sağlayan güvenceleridir.</li>
        </ul>
        <h4 class="content-subheading">Validation (Doğrulama)</h4>
        <ul class="plain">
          <li>Tanım: Gelen kullanıcı verisini kaydetmeden veya işlemeden önce tanımlanmış kurallara göre kontrol etme sürecidir.</li>
          <li>Gerçek Hayattan Örnek: Bir okuyucu kütüphaneye kitap bağışladığında kütüphaneci, rafa yerleştirmeden önce kitabın hasarlı olmadığını, eksik sayfa veya sahte bilgi içermediğini dikkatle kontrol eder.</li>
          <li>Neden Önemli?: Girdi doğrulama, veri depolama katmanlarına ulaşmadan önce bozuk veriyi, uygulama çökmelerini ve ciddi enjeksiyon açıklarını (örneğin SQL Injection, XSS) önler.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>İstemci Tarafı ve Sunucu Tarafı Doğrulama</h3>
        <p>Doğrulama genellikle iki farklı nedenle iki kez yapılır:</p>
        <ul class="plain">
          <li>İstemci tarafı doğrulama — tarayıcıdaki kontroller (örneğin "bu alan boş bırakılamaz"), sunucuya gidip gelmeden kullanıcıya anında geri bildirim verir. Kullanıcı deneyimi için iyidir.</li>
          <li>Sunucu tarafı doğrulama — aynı ve daha sıkı kontroller sunucuda tekrarlanır; çünkü istemci tarafı kontroller her zaman atlatılabilir (kullanıcı tarayıcı formunu tamamen atlayarak API'yi doğrudan çağırabilir). Veriyi gerçekten koruyan kontrol budur.</li>
        </ul>
        <p>Orta düzeyde yaygın bir kural: güvenlik veya veri bütünlüğü için istemci tarafı doğrulamaya asla güvenme; o bir kolaylık katmanıdır, savunma değildir. Şema doğrulama kütüphaneleri (örneğin JSON verisini iş mantığına ulaşmadan önce tanımlı şemayla doğrulamak), bunu sunucuda tutarlı uygulamanın standart yoludur.</p>
        <h4 class="content-subheading">Pagination (Sayfalama)</h4>
        <ul class="plain">
          <li>Tanım: Büyük veri kümelerini tek seferde yüklemek yerine daha küçük parçalara (sayfalara) ayırma stratejisidir.</li>
          <li>Gerçek Hayattan Örnek: Kütüphane kataloğunda arama yaptığında sistem, 50.000 kayıttan oluşan bunaltıcı tek liste yerine sayfa başına 10 öğelik düzenli liste verir.</li>
          <li>Neden Önemli?: Milyonlarca veritabanı kaydını aynı anda getirmek aşırı bellek tüketimine ve uzun yükleme sürelerine yol açar. Sayfalama, sayfaların hızlı yüklenmesini ve belleğin verimli kullanılmasını sağlar.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Offset ve Cursor Tabanlı Sayfalama</h3>
        <p>Sayfalamanın yaygın iki uygulama yöntemi vardır ve aralarında gerçek bir ödünleşim bulunur:</p>
        <table class="tcompare">
          <tr><th>Yaklaşım</th><th>Nasıl Çalışır?</th><th>Ödünleşim</th></tr>
          <tr><td>Offset tabanlı</td><td>?page=3&amp;limit=20 — (page-1)×limit satırı atla, sonraki limit kadar satırı getir</td><td>Basittir ve herhangi bir sayfaya atlamaya izin verir; ancak büyük offset değerlerinde yavaşlar ve istekler arasında veri değişirse öğeleri atlayabilir veya tekrarlayabilir</td></tr>
          <tr><td>Cursor tabanlı</td><td>?after=&lt;last_item_id&gt; — belirli bir işaretçiden sonraki öğeleri getir</td><td>Her derinlikte hızlı ve tutarlı kalır; ancak rastgele bir sayfaya doğrudan atlayamaz</td></tr>
        </table>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Birkaç bin satırlık yönetim tablosunda offset sayfalama yeterlidir. Ancak verinin sürekli değiştiği, sosyal medya benzeri sonsuz kaydırmalı akışlar, tekrarlanan veya eksik öğe sorununu önlemek için neredeyse her zaman cursor tabanlı sayfalama kullanır.</p>
      </div>`},
  en:{title:"Data Storage", summary:"General Overview", html:`
      <div class="tsec">
        <p>General Overview</p>
        <p>The end-to-end process of storing data reliably and securely, validating inputs before persistence, and retrieving records efficiently for the user.</p>
        <p>Term Breakdown</p>
        <h4 class="content-subheading">Databases</h4>
        <ul class="plain">
          <li>Definition: Structured systems used to store, query, organize, and manage application data permanently.</li>
          <li>Real-Life Example: Imagine a massive university library designed to store thousands of books in systematically categorized shelves so any title can be retrieved on demand.</li>
          <li>Why This Matters: Databases ensure that application state and user records persist safely even when backend servers restart or scale up.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>SQL vs. NoSQL, and Why Indexes Matter</h3>
        <p>"Database" hides an important choice: relational (SQL) vs. non-relational (NoSQL).</p>
        <table class="tcompare">
          <tr><th></th><th>SQL (Relational)</th><th>NoSQL</th></tr>
          <tr><td>Structure</td><td>Fixed schema: tables, rows, columns</td><td>Flexible: documents, key-value, graphs, wide-column</td></tr>
          <tr><td>Relationships</td><td>Strong support via foreign keys and JOINs</td><td>Often denormalized; relationships handled in application code</td></tr>
          <tr><td>Examples</td><td>PostgreSQL, MySQL, SQL Server</td><td>MongoDB, Redis, DynamoDB, Cassandra</td></tr>
          <tr><td>Good fit for</td><td>Structured data with clear relationships (orders, accounts)</td><td>Rapidly changing schemas, huge scale, simple access patterns</td></tr>
        </table>
        <p>Two more concepts separate beginner from intermediate database use:</p>
        <ul class="plain">
          <li>Indexing — a database index (much like a book's index) lets the database jump straight to matching rows instead of scanning the entire table. Without an index on a frequently searched column, queries that are fast with 100 rows can become painfully slow with 1 million rows.</li>
          <li>Normalization — structuring relational data to avoid duplicating the same information across multiple tables (e.g., storing a user's address once, referenced by ID, rather than copying it into every order row).</li>
          <li>ACID properties — Atomicity, Consistency, Isolation, Durability — the guarantees relational databases give that a transaction (e.g., "transfer money from A to B") either fully completes or fully fails, never leaving data half-updated.</li>
        </ul>
        <h4 class="content-subheading">Validation</h4>
        <ul class="plain">
          <li>Definition: The process of checking incoming user data against defined rules before saving or processing it.</li>
          <li>Real-Life Example: When a patron donates a book to the library, the librarian inspects it thoroughly to ensure it isn't damaged, missing pages, or containing fake information before placing it on the shelves.</li>
          <li>Why This Matters: Input validation prevents corrupt data, application crashes, and severe injection vulnerabilities (e.g., SQL Injection, XSS) before data reaches storage layers.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Client-Side vs. Server-Side Validation</h3>
        <p>Validation typically happens twice, for two different reasons:</p>
        <ul class="plain">
          <li>Client-side validation — checks in the browser (e.g., "this field can't be empty") that give the user instant feedback without a round trip to the server. Good for user experience.</li>
          <li>Server-side validation — the same (and stricter) checks repeated on the server, because client-side checks can always be bypassed (a user can call the API directly, skipping the browser form entirely). This is the check that actually protects the data.</li>
        </ul>
        <p>A common intermediate-level rule: never trust client-side validation for security or data integrity — it's a convenience layer, not a defense. Schema-validation libraries (e.g., validating a JSON payload against a defined schema before it touches business logic) are the standard way to enforce this consistently on the server.</p>
        <h4 class="content-subheading">Pagination</h4>
        <ul class="plain">
          <li>Definition: A strategy to break large datasets into smaller chunks (pages) rather than loading everything at once.</li>
          <li>Real-Life Example: When you search the library catalog, the system prints a neat list of 10 items per page rather than handing you a single, overwhelming list of 50,000 entries.</li>
          <li>Why This Matters: Fetching millions of database records simultaneously causes extreme memory consumption and high load times. Pagination ensures fast page loads and optimized memory usage.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Offset vs. Cursor-Based Pagination</h3>
        <p>There are two common ways to implement pagination, with a real trade-off between them:</p>
        <table class="tcompare">
          <tr><th>Approach</th><th>How It Works</th><th>Trade-off</th></tr>
          <tr><td>Offset-based</td><td>?page=3&amp;limit=20 — skip (page-1)×limit rows, return the next limit</td><td>Simple and allows jumping to any page, but gets slower on large offsets and can skip/repeat items if data changes between requests</td></tr>
          <tr><td>Cursor-based</td><td>?after=&lt;last_item_id&gt; — return items after a specific marker</td><td>Stays fast and consistent at any depth, but can't jump directly to an arbitrary page</td></tr>
        </table>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">offset pagination is fine for an admin table with a few thousand rows, but social-media-style infinite-scroll feeds with constantly changing data almost always use cursor-based pagination to avoid the duplicate/missing item problem.</p>
      </div>`}
},
{
  id:8, icon:"clock", depth:"-320 m",
  tr:{title:"Arka Plan İşlemleri", summary:"Webhook'lar", html:`
      <div class="tsec">
        <h4 class="content-subheading">Webhook'lar</h4>
        <ul class="plain">
          <li>Tanım: Bir olay gerçekleştiğinde servisin sana otomatik bilgi göndermesinin yoludur. Normal API çağrısında sen sorarsın; webhook'ta karşı taraf sana haber verir.</li>
          <li>Örnek: WhatsApp'a bir mesaj geldiğinde servis URL'ne otomatik POST isteği gönderir. Gönderen hızlı yanıt beklediği için bu genellikle hemen kuyruğa aktarılır.</li>
          <li>Neden önemli?: Sistemlerin sürekli polling yapmadan olaylara anında tepki vermesini sağlar; WhatsApp, ödeme sağlayıcıları ve Zoom gibi entegrasyonların temelidir.</li>
          <li>Sık yapılan hata: Gelen istekleri doğrulamadan kabul etmek (imza kontrolü yapmamak); ağır işleri doğrudan webhook işleyicisinde yapmak.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Webhook'ları Güvenle Doğrulamak ve Yeniden Denemek</h3>
        <p>Webhook entegrasyonu canlıya alındığında iki sorun ortaya çıkar:</p>
        <ul class="plain">
          <li>İmza doğrulama — webhook URL'si dışa açık bir endpoint olduğu için herkes sahte veri gönderebilir (örneğin sahte "ödeme başarılı" olayı). Sağlayıcılar her veriyi gizli anahtarla imzalar; alıcı veriye güvenmeden önce imzayı yeniden hesaplayıp karşılaştırmalıdır.</li>
          <li>İdempotency ve yeniden denemeler — alıcı sunucu hızlı yanıt vermezse (genellikle birkaç saniye içinde) gönderen başarısızlık varsayar ve yeniden dener. Aynı olay birden fazla kez iletilebilir. İşleyiciler, örneğin müşteriden iki kez ücret almak yerine, tekrarları belirleyip yok saymak için idempotency anahtarı (benzersiz olay kimliği) kullanmalıdır.</li>
        </ul>
        <p>Yukarıdaki başlangıç notunda ağır işlerin işleyicinin içinde çalışmaması gerektiğinin söylenmesi tam da bu yüzdendir: işleyici imzayı doğrulamalı, olayı kaydetmeli, kuyruğa aktarmalı ve hemen 200 yanıtı vermelidir. Asıl işleme arka plan worker'ına bırakılmalıdır.</p>
        <h4 class="content-subheading">Queues (Kuyruklar)</h4>
        <ul class="plain">
          <li>Tanım: İşlerin sıraya alındığı ve arka planda bir worker tarafından işlendiği yapıdır.</li>
          <li>Örnek: Kayıt sırasında hoş geldin e-postası göndermek yerine "e-posta gönder" görevi kuyruğa alınır; kullanıcı hemen yanıt alır.</li>
          <li>Neden önemli?: Ağır görevlerin kullanıcıyı bekletmesini önleyerek sistemi daha hızlı ve dayanıklı hale getirir.</li>
          <li>Sık yapılan hata: Her şeyi senkron yapmaya çalışmak; başarısız işler için yeniden deneme mantığı oluşturmamak.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Mesaj Aracıları ve Kuyruk Yaklaşımları</h3>
        <p>Pratikte kuyruklar, üreticiler ile worker'lar arasında mesajları güvenilir biçimde saklayıp ileten özel yazılım olan message broker ile uygulanır. RabbitMQ, Amazon SQS ve Redis tabanlı kuyruklar yaygın örneklerdir. İki iletim yaklaşımını ayırmak faydalıdır:</p>
        <ul class="plain">
          <li>İş kuyruğu (work queue) — her mesaj tam olarak bir worker tarafından işlenir (örneğin "bu e-postayı gönder"). Yükü birden fazla worker'a dağıtmak için uygundur.</li>
          <li>Pub/Sub (Yayınla/Abone Ol) — her mesaj ilgili tüm abonelere iletilir (örneğin "sipariş verildi" olayı, e-posta, analitik ve stok servislerine bağımsız olarak haber verebilir).</li>
        </ul>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Basit iş kuyruğu yerine pub/sub seçmek, olayları üreten kodu değiştirmeden sisteme yeni özellikler eklemeyi sağlar; örneğin mevcut olaylara tepki veren yeni bir analitik servisi eklenebilir.</p>
        <h4 class="content-subheading">Background Jobs (Arka Plan İşleri)</h4>
        <ul class="plain">
          <li>Tanım: Kullanıcıdan bağımsız çalışan, kuyruk kaynaklı veya zamanlanmış (cron) görevlerdir. Kuyruk bir mekanizmadır; arka plan işi bu mekanizma üzerinden çalışan işin kendisidir.</li>
          <li>Örnek: Tüm kullanıcılar için özet rapor oluşturan gece görevi.</li>
          <li>Neden önemli?: Bakım, temizleme ve raporlamayı elle yapmak yerine otomatik yürütür.</li>
          <li>Sık yapılan hata: İşlerin gerçekten çalışıp çalışmadığını izlememek (sessizce başarısız olabilirler).</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Zamanlama ve Gözlemlenebilirlik</h3>
        <p>Zamanlanmış arka plan işleri genellikle tekrar eden zamanları kısa bir sözdizimiyle tanımlayan cron ifadeleriyle çalışır (örneğin 0 2 * * *, "her gün saat 02.00" demektir). Özel iş zamanlayıcıları (örneğin framework'ün yerleşik zamanlayıcısı veya dış araçlar), cron'un tek başına sunmadığı özellikleri ekler: bir çalıştırma çok uzarsa aynı işin kendisiyle çakışmasını önleme ve başarısızlıkta otomatik yeniden deneme gibi.</p>
        <p>Yukarıdaki sık hata olan sessiz başarısızlıklar, gözlemlenebilirlikle çözülür: işler, raporun gelmediğini birinin fark etmesini beklemek yerine metrik veya uyarı üretmelidir ("bu iş 24 saattir başarılı olmadı").</p>
        <h4 class="content-subheading">Logging (Günlükleme)</h4>
        <ul class="plain">
          <li>Tanım: Uygulama içinde gerçekleşenleri kaydetmektir: istekler, hatalar, olaylar.</li>
          <li>Örnek: Webhook başarısız olduğunda ne zaman ve neden olduğunu içeren bir log kaydı yazmak.</li>
          <li>Neden önemli?: Loglar, canlı ortamdaki sorunları ayıklamanın genellikle tek yoludur.</li>
          <li>Sık yapılan hata: Şifre veya API anahtarı gibi hassas verileri loglamak; tüm logları aynı önemde görmek.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Log Seviyeleri ve Merkezi Günlükleme</h3>
        <p>Yukarıdaki ikinci sık hata, yani tüm logları eşit önemde görmek, geliştiricilerin önemli bilgiyi gürültüden ayırmasını sağlayan log seviyeleriyle çözülür:</p>
        <table class="tcompare">
          <tr><th>Seviye</th><th>Ne Zaman Kullanılır?</th></tr>
          <tr><td>DEBUG</td><td>Yalnızca aktif hata ayıklamada faydalı olan ayrıntılı iç durum bilgisi</td></tr>
          <tr><td>INFO</td><td>Normal işleyiş olayları ("kullanıcı giriş yaptı", "iş tamamlandı")</td></tr>
          <tr><td>WARN</td><td>Beklenmeyen ama henüz bozulmaya yol açmayan durum ("istek yeniden deneniyor")</td></tr>
          <tr><td>ERROR</td><td>Başarısız olan ve ilgilenilmesi gereken işlem</td></tr>
        </table>
        <p>Gerçek ölçekte, birçok sunucu ve servisin logları merkezi bir günlükleme sistemine (örneğin ELK: Elasticsearch, Logstash, Kibana veya yönetilen bir eşdeğeri) gönderilir. Böylece tek tek makinelere SSH ile bağlanmak yerine hepsi tek yerde aranabilir ve ilişkilendirilebilir. Yapılandırılmış günlükleme, serbest metin cümleleri yerine tutarlı alanlar (zaman damgası, istek kimliği, kullanıcı kimliği) içeren JSON logları yazmaktır. Aramayı uygulanabilir kılar ve 3. bölümdeki correlation ID kullanılarak tek bir isteğin birçok servis boyunca izlenmesini sağlar.</p>
      </div>`},
  en:{title:"Background Processing", summary:"Webhooks", html:`
      <div class="tsec">
        <h4 class="content-subheading">Webhooks</h4>
        <ul class="plain">
          <li>Definition: A way for a service to automatically send you information when an event happens. In a normal API call you ask; with a webhook, the other side notifies you.</li>
          <li>Example: When a message arrives on WhatsApp, the service sends an automatic POST request to your URL. This is usually pushed to a queue right away, since the sender expects a fast response.</li>
          <li>Why it matters: Lets systems react to events instantly without constant polling; it's the backbone of integrations like WhatsApp, payment providers, Zoom.</li>
          <li>Common mistake: Accepting incoming requests without verifying them (no signature check); doing heavy work directly inside the webhook handler.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Verifying and Retrying Webhooks Safely</h3>
        <p>Two problems come up as soon as a webhook integration goes to production:</p>
        <ul class="plain">
          <li>Signature verification — since a webhook URL is a public endpoint, anyone could send it a fake payload (e.g., a fake "payment succeeded" event). Providers sign each payload with a secret key; the receiver must recompute and compare that signature before trusting the data.</li>
          <li>Idempotency and retries — if the receiving server doesn't respond quickly (usually within a few seconds), the sender assumes failure and retries, which can deliver the same event more than once. Handlers should use an idempotency key (a unique event ID) to detect and ignore duplicates, rather than, say, charging a customer twice.</li>
        </ul>
        <p>This is exactly why the beginner note above says heavy work shouldn't run inside the handler itself: the handler should verify the signature, record the event, push it to a queue, and respond 200 immediately — leaving the actual processing to a background worker.</p>
        <h4 class="content-subheading">Queues</h4>
        <ul class="plain">
          <li>Definition: A structure where jobs are lined up and processed in the background by a "worker."</li>
          <li>Example: Instead of sending a welcome email during signup, the "send email" task is queued — the user gets a response immediately.</li>
          <li>Why it matters: Keeps heavy tasks from blocking the user, making the system faster and more resilient.</li>
          <li>Common mistake: Trying to do everything synchronously; not building retry logic for failed jobs.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Message Brokers and Queue Patterns</h3>
        <p>In practice, queues are implemented with a message broker — dedicated software that reliably stores and delivers messages between producers and workers. Common examples include RabbitMQ, Amazon SQS, and Redis-backed queues. Two delivery patterns are worth telling apart:</p>
        <ul class="plain">
          <li>Work queue — each message is processed by exactly one worker (e.g., "send this one email"), useful for distributing load across multiple workers.</li>
          <li>Pub/Sub (Publish/Subscribe) — each message is delivered to every interested subscriber (e.g., "order placed" might notify the email service, the analytics service, and the inventory service independently).</li>
        </ul>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">choosing pub/sub over a simple work queue is how systems add new features (like a new analytics service reacting to existing events) without modifying the code that produces those events.</p>
        <h4 class="content-subheading">Background Jobs</h4>
        <ul class="plain">
          <li>Definition: Tasks that run independently of the user, either queue-driven or scheduled (cron). A queue is a mechanism; a background job is the work that runs through it.</li>
          <li>Example: A nightly job that generates a summary report for all users.</li>
          <li>Why it matters: Handles maintenance, cleanup, and reporting automatically instead of manually.</li>
          <li>Common mistake: Not monitoring whether jobs actually run (they can fail silently).</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Scheduling and Observability</h3>
        <p>Scheduled background jobs are usually driven by cron expressions — a compact syntax describing recurring times (e.g., 0 2 * * * means "every day at 2:00 AM"). Dedicated job schedulers (e.g., a framework's built-in scheduler, or external tools) add features cron alone doesn't have: preventing the same job from overlapping itself if a run takes too long, and automatic retries on failure.</p>
        <p>The "common mistake" above — silent failures — is solved with observability: jobs should emit metrics or alerts ("this job hasn't succeeded in 24 hours") rather than relying on someone noticing the report never arrived.</p>
        <h4 class="content-subheading">Logging</h4>
        <ul class="plain">
          <li>Definition: Recording what happens inside an application — requests, errors, events.</li>
          <li>Example: Writing a log entry when a webhook fails, including when and why.</li>
          <li>Why it matters: Logs are usually the only way to debug issues in production.</li>
          <li>Common mistake: Logging sensitive data like passwords or API keys; treating all logs as equally important.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Log Levels and Centralized Logging</h3>
        <p>The second common mistake above — treating all logs as equally important — is addressed with log levels, which let developers filter noise from signal:</p>
        <table class="tcompare">
          <tr><th>Level</th><th>When to Use</th></tr>
          <tr><td>DEBUG</td><td>Detailed internal state, useful only while actively debugging</td></tr>
          <tr><td>INFO</td><td>Normal operational events ("user logged in," "job completed")</td></tr>
          <tr><td>WARN</td><td>Something unexpected but not yet broken ("retrying request")</td></tr>
          <tr><td>ERROR</td><td>An operation failed and needs attention</td></tr>
        </table>
        <p>At any real scale, logs from many servers and services are shipped to a centralized logging system (e.g., an ELK stack — Elasticsearch, Logstash, Kibana — or a managed equivalent) so they can be searched and correlated in one place, rather than SSH-ing into individual machines. Structured logging — writing logs as JSON with consistent fields (timestamp, request ID, user ID) instead of free-text sentences — is what makes that searching practical, and it's also what lets a single request be traced across multiple services using the correlation ID mentioned in Section 3.</p>
      </div>`}
},
{
  id:9, icon:"code", depth:"-360 m",
  tr:{title:"Test ve Kalite Güvencesi", summary:"Genel Bakış", html:`
      <div class="tsec">
        <p>Genel Bakış</p>
        <p>Kod gerçek kullanıcılara ulaşmadan önce beklendiği gibi davrandığını doğrulamak ve bir değişikliğin daha önce çalışan bir şeyi sessizce bozmasından önce regresyonları yakalamak için kullanılan uygulamalardır.</p>
        <p>Terimlerin Açıklaması</p>
        <h4 class="content-subheading">Unit Testleri (Birim Testleri)</h4>
        <ul class="plain">
          <li>Tanım: Küçük bir mantık parçasını, tek bir fonksiyonu veya metodu, sistemin geri kalanından yalıtılmış olarak kontrol eden testlerdir.</li>
          <li>Örnek: calculateDiscount() fonksiyonunun sıfır veya negatif fiyat gibi uç durumlar dahil çeşitli girdiler için doğru değeri döndürdüğünü test etmek.</li>
          <li>Neden önemli?: Mantık hatalarını erken ve oluştukları yere yakın yakalar; günde yüzlerce kez çalıştırılabilecek kadar hızlıdır.</li>
          <li>Sık yapılan hata: Gözlemlenebilir davranış yerine iç uygulama ayrıntılarını test etmek; uç durumları atlayıp yalnızca sorunsuz akışı (happy path) test etmek.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Test Piramidi</h3>
        <p>Tüm testler aynı türde olmamalıdır. Sağlıklı bir test paketi, hızlı ve düşük maliyetli katmanlarda daha fazla test bulunan bir piramit şeklindedir:</p>
        <table class="tcompare">
          <tr><th>Katman</th><th>Neyi Kontrol Eder?</th><th>Ödünleşim</th></tr>
          <tr><td>Unit</td><td>Tek bir fonksiyonu veya modülü yalıtılmış olarak</td><td>Hızlı ve düşük maliyetli — çok sayıda yaz</td></tr>
          <tr><td>Integration</td><td>Birlikte çalışan birkaç parçayı (örneğin API endpoint'i ve veritabanı)</td><td>Daha yavaş — birim testlerinin kaçırdığı sorunları yakalar</td></tr>
          <tr><td>End-to-End (E2E)</td><td>Gerçek arayüz üzerinden tam kullanıcı akışını; çoğunlukla Cypress veya Playwright gibi araçlarla</td><td>Yavaş ve kırılgan — kritik akışlar için sınırlı kullan</td></tr>
        </table>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Çok fazla E2E testi olan paket yavaşlar ve kararsız sonuçlar verir; 10. bölümde anlatılan tüm CI/CD hattını yavaşlatır. Çok az birim testi olan paket ise mantık hatalarının çok daha geç bir aşamaya kadar fark edilmeden geçmesine izin verir.</p>
        <h4 class="content-subheading">Test Odaklı Geliştirme (TDD)</h4>
        <ul class="plain">
          <li>Tanım: Testi geçirecek koddan önce testin yazıldığı çalışma biçimidir.</li>
          <li>Örnek: Red-green-refactor döngüsü: başarısız test yaz (kırmızı), testi geçirecek kadar kod yaz (yeşil), ardından davranışını değiştirmeden kodu düzenle (refactor).</li>
          <li>Neden önemli?: Geliştiriciyi uygulamayı yazmadan önce beklenen davranışı ve arayüzü düşünmeye zorlar; bu da çoğunlukla daha test edilebilir ve daha düzenli kod üretir.</li>
          <li>Sık yapılan hata: TDD'yi faydalı olduğunda kullanılacak bir araç yerine her kod satırı için zorunlu dogma saymak; davranış yerine uygulamayı kopyalayan testler yazmak.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Mock Kullanımı ve Test Doubles</h3>
        <p>Bir birimi gerçekten yalıtılmış test etmek için veritabanı, dış API veya message broker gibi gerçek bağımlılıkları çoğunlukla mock, stub veya fake ile değiştirilir. Böylece test gerçek sisteme dokunmadan hızlı çalışır ve her seferinde aynı sonucu verir.</p>
        <p>Bu, doğrudan 8. bölümle bağlantılıdır: webhook işleyicisinin birim testi, test paketi her çalıştığında gerçek broker'a mesaj göndermek yerine yayın yaptığı kuyruğu mock ile temsil eder.</p>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Gerçek veritabanlarına veya dış API'lere erişen testler yavaş, kararsız ve yan etkilere açık olabilir. Mock kullanımı, piramidin hızlı birim testi katmanını gerçekten hızlı tutar; gerçek bağlantıların çalıştığını doğrulama görevi integration ve E2E testlerinde kalır.</p>
      </div>`},
  en:{title:"Testing & Quality Assurance", summary:"General Overview", html:`
      <div class="tsec">
        <p>General Overview</p>
        <p>The practices used to verify that code behaves as expected before it reaches real users, and to catch regressions before a change quietly breaks something that used to work.</p>
        <p>Term Breakdown</p>
        <h4 class="content-subheading">Unit Tests</h4>
        <ul class="plain">
          <li>Definition: Tests that check one small piece of logic — a single function or method — in isolation from the rest of the system.</li>
          <li>Example: Testing that a calculateDiscount() function returns the right value for a range of inputs, including edge cases like zero or a negative price.</li>
          <li>Why it matters: Catches logic errors early, close to where they happen, and runs fast enough to execute hundreds of times a day.</li>
          <li>Common mistake: Testing internal implementation details instead of observable behavior; skipping edge cases and only testing the “happy path.”</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>The Testing Pyramid</h3>
        <p>Not all tests should be the same type — a healthy test suite is shaped like a pyramid, with more tests at the fast, cheap layers:</p>
        <table class="tcompare">
          <tr><th>Layer</th><th>What It Checks</th><th>Trade-off</th></tr>
          <tr><td>Unit</td><td>One function or module in isolation</td><td>Fast and cheap — write many</td></tr>
          <tr><td>Integration</td><td>Several pieces working together (e.g., an API endpoint plus the database)</td><td>Slower — catches issues units miss</td></tr>
          <tr><td>End-to-End (E2E)</td><td>A full user flow through the real UI, often with tools like Cypress or Playwright</td><td>Slow and brittle — use sparingly, for critical flows</td></tr>
        </table>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">a suite with too many E2E tests becomes slow and flaky, dragging down the whole CI/CD pipeline discussed in Section 10, while a suite with too few unit tests lets logic bugs slip through unnoticed until much later.</p>
        <h4 class="content-subheading">Test-Driven Development (TDD)</h4>
        <ul class="plain">
          <li>Definition: A workflow where the test is written before the code that makes it pass.</li>
          <li>Example: The “red-green-refactor” cycle: write a failing test (red), write just enough code to pass it (green), then clean up the code without changing its behavior (refactor).</li>
          <li>Why it matters: Forces the developer to think through the expected behavior and interface before writing implementation, which often leads to more testable, better-organized code.</li>
          <li>Common mistake: Treating TDD as mandatory dogma for every line of code rather than a tool to reach for when it helps; writing tests that mirror the implementation instead of the behavior.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Mocking and Test Doubles</h3>
        <p>To test a unit in true isolation, its real dependencies — a database, an external API, a message broker — are often replaced with a mock, stub, or fake so the test runs fast and gives the same result every time, without touching a real system.</p>
        <p>This connects directly back to Section 8: a unit test for a webhook handler would mock the queue it publishes to, rather than actually pushing a message to a real broker every time the test suite runs.</p>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">tests that hit real databases or external APIs are slow, flaky, and can have side effects — mocking keeps the fast unit-testing layer of the pyramid actually fast, while integration and E2E tests remain the layer that verifies the real connections work.</p>
      </div>`}
},
{
  id:10, icon:"cloud", depth:"-400 m",
  tr:{title:"Dağıtım ve Altyapı", summary:"Deployment (Dağıtım)", html:`
      <div class="tsec">
        <h4 class="content-subheading">Deployment (Dağıtım)</h4>
        <ul class="plain">
          <li>Tanım: Uygulamayı geliştirme ortamından gerçek kullanıcıların erişebildiği canlı sunucuya (production) taşıma sürecidir.</li>
          <li>Örnek: Kod main dalına birleştirilir → otomatik testler geçer → uygulama sunucuya dağıtılır.</li>
          <li>Neden önemli?: Harika kod bile doğru şekilde yayına alınmadığında kullanıcı için işe yaramaz.</li>
          <li>Sık yapılan hata: Test etmeden dağıtım yapmak; dağıtım sonrası kontrolü atlamak.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>CI/CD ve Daha Güvenli Yayınlama Stratejileri</h3>
        <p>Yukarıdaki örnek ("birleştir → testler geçsin → dağıt") bir CI/CD hattını tanımlar:</p>
        <ul class="plain">
          <li>CI (Sürekli Entegrasyon) — her kod değişikliği gönderilir gönderilmez otomatik derlenir ve test edilir. Sorunlar diğer geliştiricilere ulaşmadan yakalanır.</li>
          <li>CD (Sürekli Dağıtım/Teslimat) — CI kontrollerini geçen kod, elle yapılan ve hataya açık yayın süreci yerine otomatik (veya tek tıkla) canlıya alınır.</li>
        </ul>
        <p>Orta düzey ekipler yalnızca yeni sürümü dağıtmanın ötesinde, hatalı dağıtımın tüm kullanıcıları aynı anda etkileme riskini azaltan yayınlama stratejileri kullanır:</p>
        <table class="tcompare">
          <tr><th>Strateji</th><th>Nasıl Çalışır?</th></tr>
          <tr><td>Blue-Green Deployment</td><td>İki aynı ortam çalıştırılır ("blue" = canlı, "green" = yeni). Green doğrulandıktan sonra tüm trafik ona geçirilir; blue anında geri dönüş için tutulur.</td></tr>
          <tr><td>Canary Deployment</td><td>Yeni sürüm önce küçük bir kullanıcı yüzdesine açılır, hatalar izlenir ve ardından kademeli olarak herkese sunulur.</td></tr>
          <tr><td>Rollback</td><td>Yeni sürüm hatalara yol açarsa önceki çalışan sürüme otomatik veya elle geri dönülür.</td></tr>
        </table>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Yeni dağıtımı önce trafiğin yalnızca %5'i gördüğünde, yukarıdaki başlangıç hatası olan dağıtım sonrası kontrolü atlamanın riski çok azalır. Canary yayınlar, tam kesintiye dönüşmeden önce bu tür sorunları yakalamak için tasarlanır.</p>
        <h4 class="content-subheading">Container'lar ve Bulut Altyapısı</h4>
        <ul class="plain">
          <li>Tanım: Container, uygulamayı çalışması için gereken her şeyle (kod, bağımlılıklar, çalışma zamanı) birlikte, her yerde aynı davranan taşınabilir tek bir birime paketler.</li>
          <li>Örnek: Node.js uygulamasını geliştirildiği tam Node sürümü ve kütüphanelerle birlikte paketleyen Docker container'ı, geliştiricinin dizüstünde ve canlı sunucuda aynı şekilde çalışır.</li>
          <li>Neden önemli?: Çalışma ortamını her makinenin elle eşleştirmesi gereken bir şey olmaktan çıkarıp gönderilen paketin parçası yaparak klasik "benim bilgisayarımda çalışıyor" sorununu ortadan kaldırır.</li>
          <li>Sık yapılan hata: Container imajını tam bir sanal makine sanmak (değildir; ana makinenin çekirdeğini paylaşır); API anahtarı gibi sırları çalışma anında ortam değişkeniyle vermek yerine doğrudan imaja gömmek.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Orkestrasyon ve Yönetilen Bulut Hizmetleri</h3>
        <p>Tek container paketlemeyi çözer; ancak gerçek uygulama genellikle birçok makinede çalışan çok sayıda container'dan oluşur. Yeni sorular doğar: çöken container'ı ne yeniden başlatır, trafik artınca ne olur, container'lar birbirini nasıl bulur?</p>
        <ul class="plain">
          <li>Kubernetes (orkestrasyon) — container'ları makine kümesi üzerinde çalıştıran; başarısız olanları otomatik yeniden başlatan, yükü dağıtan ve çalışan örnek sayısını artırıp azaltan sistemdir.</li>
          <li>Yönetilen bulut hizmetleri — AWS, Azure ve Google Cloud gibi sağlayıcılar işlem gücü, depolama ve yönetilen veritabanlarını hizmet olarak sunar. Ekip kendi fiziksel donanımını satın almak, kurmak ve bakımını yapmak zorunda kalmaz.</li>
        </ul>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Container'lar ve orkestrasyon, 2. bölümdeki yatay ölçeklendirme ve durumsuz sunucu fikirlerinin canlı ortamda uygulanma biçimidir. Her container örneği herhangi bir isteği işleyebilir; o anda kaç örnek bulunması gerektiğine orkestrasyon sistemi karar verir.</p>
        <h4 class="content-subheading">Environment Variables (Ortam Değişkenleri)</h4>
        <ul class="plain">
          <li>Tanım: Koda gömülmek yerine kod dışından sağlanan, ortama özgü değerlerdir (şifreler, API anahtarları).</li>
          <li>Örnek: DATABASE_URL veya API_KEY gibi değerler kodun okuduğu .env dosyasında bulunur; .env Git'e commit edilmez.</li>
          <li>Neden önemli?: Gizli bilgileri koddan uzak tutar (güvenlik) ve aynı kodun farklı ortamlarda çalışmasını sağlar (esneklik).</li>
          <li>Sık yapılan hata: API anahtarlarını koda gömmek; .env dosyasını yanlışlıkla commit etmek.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Farklı Ortamlarda Gizli Bilgileri Yönetmek</h3>
        <p>Gerçek projede genellikle en az üç ortam vardır: development (geliştirme), staging (canlıya benzeyen test ortamı) ve production (canlı). Her biri aynı değişken adları için kendi değerlerine ihtiyaç duyar (örneğin her ortam için farklı DATABASE_URL). Küçük ölçekte ortam başına ayrı .env dosyaları yeterlidir. Daha büyük ölçekte ekipler, sırları şifreli saklayan, kimin erişebileceğini kontrol eden ve ele geçirilmiş anahtarı kodu yeniden dağıtmadan değiştirmeyi destekleyen özel gizli bilgi yöneticilerine (örneğin bulut sağlayıcısının secret manager'ı veya HashiCorp Vault) geçer.</p>
        <h4 class="content-subheading">DNS</h4>
        <ul class="plain">
          <li>Tanım: Alan adını (www.site.com) IP adresine çeviren sistemdir.</li>
          <li>Örnek: Yayına alınan sunucunun IP'si A kaydıyla alan adına bağlanır; alan adını yazmak tarayıcının bu IP'ye bağlanmasını sağlar.</li>
          <li>Neden önemli?: İnternetin "adres defteridir". Yanlış yapılandırılmış DNS, kusursuz çalışan uygulamaya bile kullanıcıların ulaşamaması demektir.</li>
          <li>Sık yapılan hata: DNS değişikliklerinin anında etkili olduğunu varsaymak (yayılması saatler alabilir); alan adını yenilemeyi unutmak.</li>
        </ul>
        <p>Kayıt türü</p>
        <table class="tcompare">
          <tr><th>Kayıt türü</th><th>Ne yapar?</th></tr>
          <tr><td>A</td><td>Alan adını doğrudan IP adresine yönlendirir</td></tr>
          <tr><td>CNAME</td><td>Alan adını başka bir alan adına yönlendirir</td></tr>
          <tr><td>MX</td><td>Gelen e-postayı hangi sunucunun işleyeceğini belirler</td></tr>
          <tr><td>TXT</td><td>Doğrulama ve diğer metin tabanlı bilgiler için kullanılır</td></tr>
        </table>
        <h3><span class="tag">DERİNLEŞTİR</span>TTL ve Yayılma</h3>
        <p>Her DNS kaydının TTL (Time To Live) değeri vardır. Diğer DNS sunucularına, güncellemeyi yeniden kontrol etmeden önce kaydı ne kadar süre önbellekte tutabileceklerini söyler. Yukarıdaki "DNS değişiklikleri anında etkili olur" hatasının nedeni budur: kaydın TTL'i 24 saatse güncellemeden sonra bile bazı kullanıcılar bir güne kadar eski IP'yi görmeye devam edebilir. Orta düzeyde yaygın uygulama, planlanan değişiklikten (örneğin sunucu taşıma) önce TTL'i düşürmek, yayılmasını beklemek, değişikliği yapmak ve sonra TTL'i yeniden yükseltmektir. Böylece kullanıcıların eski sonuçları gördüğü süre azaltılır.</p>
      </div>`},
  en:{title:"Deployment & Infrastructure", summary:"Deployment", html:`
      <div class="tsec">
        <h4 class="content-subheading">Deployment</h4>
        <ul class="plain">
          <li>Definition: The process of moving an application from a development environment to a live server (production) where real users can access it.</li>
          <li>Example: Code is merged into main → automated tests pass → the app is deployed to the server.</li>
          <li>Why it matters: Even great code is useless to users if it's never deployed correctly.</li>
          <li>Common mistake: Deploying without testing; skipping a post-deploy check.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>CI/CD and Safer Rollout Strategies</h3>
        <p>The example above ("merge → tests pass → deploy") describes a CI/CD pipeline:</p>
        <ul class="plain">
          <li>CI (Continuous Integration) — every code change is automatically built and tested as soon as it's pushed, catching problems before they reach other developers.</li>
          <li>CD (Continuous Deployment/Delivery) — code that passes CI is automatically (or with one click) released to production, instead of a manual, error-prone release process.</li>
        </ul>
        <p>Beyond "deploy the new version," intermediate teams use rollout strategies that reduce the risk of a bad deploy affecting all users at once:</p>
        <table class="tcompare">
          <tr><th>Strategy</th><th>How It Works</th></tr>
          <tr><td>Blue-Green Deployment</td><td>Run two identical environments ("blue" = live, "green" = new); switch all traffic to green only once it's verified, keeping blue as an instant rollback.</td></tr>
          <tr><td>Canary Deployment</td><td>Release the new version to a small percentage of users first, watch for errors, then gradually roll out to everyone.</td></tr>
          <tr><td>Rollback</td><td>Automatically or manually reverting to the previous working version if the new one causes errors.</td></tr>
        </table>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">"skipping a post-deploy check" (the beginner mistake above) becomes far less risky when only 5% of traffic sees a new deploy first — this is exactly what canary releases are designed to catch before it becomes a full outage.</p>
        <h4 class="content-subheading">Containers and Cloud Infrastructure</h4>
        <ul class="plain">
          <li>Definition: A container packages an application together with everything it needs to run — code, dependencies, runtime — into one portable unit that behaves the same way everywhere.</li>
          <li>Example: A Docker container that bundles a Node.js app with the exact Node version and libraries it was built against, so it runs identically on a developer’s laptop and on the production server.</li>
          <li>Why it matters: Eliminates the classic “works on my machine” problem by making the runtime environment part of what gets shipped, not something each machine has to match by hand.</li>
          <li>Common mistake: Treating a container image as a full virtual machine (it isn’t — it shares the host’s kernel); baking secrets like API keys directly into the image instead of injecting them as environment variables at runtime.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Orchestration and Managed Cloud Services</h3>
        <p>A single container solves packaging, but a real application usually runs as many containers across many machines — which raises new problems: what restarts a crashed container, what happens when traffic spikes, how do containers find each other?</p>
        <ul class="plain">
          <li>Kubernetes (orchestration) — a system that runs containers across a cluster of machines, automatically restarting failed ones, distributing load, and scaling the number of running instances up or down.</li>
          <li>Managed cloud services — providers like AWS, Azure, and Google Cloud offer compute, storage, and managed databases as a service, so a team doesn’t have to buy, rack, and maintain its own physical hardware.</li>
        </ul>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">containers and orchestration are how the horizontal scaling and stateless-server ideas from Section 2 actually get implemented in production — any container instance can handle any request, and the orchestrator is what decides how many instances should exist right now.</p>
        <h4 class="content-subheading">Environment Variables</h4>
        <ul class="plain">
          <li>Definition: Environment-specific values (passwords, API keys) provided from outside the code instead of being hardcoded.</li>
          <li>Example: Values like DATABASE_URL or API_KEY live in a .env file the code reads; .env is not committed to Git.</li>
          <li>Why it matters: Keeps secrets out of the code (security) and lets the same code run in different environments (flexibility).</li>
          <li>Common mistake: Hardcoding API keys in the code; accidentally committing .env.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Managing Secrets Across Environments</h3>
        <p>A real project usually has at least three environments — development, staging (a production-like testing environment), and production — each needing its own values for the same variable names (e.g., a different DATABASE_URL for each). At small scale, separate .env files per environment are enough; at larger scale, teams move to dedicated secrets managers (e.g., a cloud provider's secret manager, or HashiCorp Vault) that store secrets encrypted, control who can access them, and support rotating a compromised key without redeploying code.</p>
        <h4 class="content-subheading">DNS</h4>
        <ul class="plain">
          <li>Definition: The system that translates a domain name (www.site.com) into an IP address.</li>
          <li>Example: A deployed server's IP is linked to a domain via an A record; typing the domain makes the browser connect to that IP.</li>
          <li>Why it matters: It's the internet's "address book" — misconfigured DNS means users can't reach a perfectly working app.</li>
          <li>Common mistake: Assuming DNS changes take effect instantly (propagation can take hours); forgetting to renew the domain.</li>
        </ul>
        <p>Record type</p>
        <table class="tcompare">
          <tr><th>Record type</th><th>What it does</th></tr>
          <tr><td>A</td><td>Points a domain directly to an IP address</td></tr>
          <tr><td>CNAME</td><td>Points a domain to another domain</td></tr>
          <tr><td>MX</td><td>Determines which server handles incoming email</td></tr>
          <tr><td>TXT</td><td>Used for verification and other text-based info</td></tr>
        </table>
        <h3><span class="tag">DEEP DIVE</span>TTL and Propagation</h3>
        <p>Each DNS record has a TTL (Time To Live) — a value telling other DNS servers how long they're allowed to cache that record before checking for updates again. This is exactly why "DNS changes take effect instantly" (the common mistake above) is false: if a record's TTL is set to 24 hours, some users may keep seeing the old IP address for up to a day, even after the record is updated. A common intermediate-level practice is to lower the TTL in advance of a planned change (e.g., a server migration), let it propagate, make the change, and raise the TTL again afterward — reducing the window where users see stale results.</p>
      </div>`}
},
{
  id:11, icon:"branch", depth:"-440 m",
  tr:{title:"İşbirliği ve Versiyon Kontrolü", summary:"Git", html:`
      <div class="tsec">
        <h4 class="content-subheading">Git</h4>
        <ul class="plain">
          <li>Tanım: Kod değişikliklerini zaman içinde takip eden versiyon kontrol sistemidir.</li>
          <li>Örnek: Bir hata ortaya çıktığında onu hangi değişikliğin getirdiğini görmek için geçmiş incelenebilir.</li>
          <li>Neden önemli?: Ekiplerin birbirinin çalışmasını ezmeden çalışmasını ve önceki sürümlere dönmesini sağlar.</li>
          <li>Sık yapılan hata: Uzun süre commit yapmayıp ardından tek dev commit göndermek.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Git Değişiklikleri Aslında Nasıl Takip Eder?</h3>
        <p>Başlangıç düzeyindeki "değişiklikleri takip eder" açıklamasının altında Git, geliştiricilerin değişiklikleri taşıdığı üç alanla çalışır:</p>
        <ul class="plain">
          <li>Çalışma dizini (working directory) — diskte düzenlediğin gerçek dosyalar.</li>
          <li>Hazırlama alanı (staging area / index) — git add ile işaretlenen, sonraki commit'e girmesi seçilen değişiklikler.</li>
          <li>Repository (commit geçmişi) — git commit ile oluşturulan kalıcı kayıt.</li>
        </ul>
        <p>Bu hazırlama adımı, geliştiricinin aynı anda değişikliklerinin yalnızca bir kısmını commit etmesini sağlar. Çalışma dizininde birden fazla ilgisiz düzenleme olsa bile commit'ler odaklı kalır. git diff, git log ve git revert (geçmişi silmeden yeni bir ters commit oluşturarak commit'i geri alır) gibi komutlar doğrudan bu modele dayanır.</p>
        <h4 class="content-subheading">Branches (Dallar)</h4>
        <ul class="plain">
          <li>Tanım: Ana kod tabanından (main) ayrılan bağımsız çalışma koludur.</li>
          <li>Örnek: feature/login-page üzerinde çalışmak, main'i etkilemeden geliştirme yapmanı sağlar.</li>
          <li>Neden önemli?: Main'i kararlı tutarken ekipte paralel çalışmayı mümkün kılar.</li>
          <li>Sık yapılan hata: Dalı uzun süre main ile eşitlemeyip ardından büyük çakışmalarla karşılaşmak.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Dallanma Stratejileri</h3>
        <p>Ekip bir veya iki geliştiriciyi aştığında, gayriresmî "bir dal aç yeter" yaklaşımı yerine ortak bir kural fayda sağlar:</p>
        <table class="tcompare">
          <tr><th>Strateji</th><th>Temel Fikir</th></tr>
          <tr><td>Git Flow</td><td>Uzun ömürlü develop ve main dalları ile ayrı feature, release ve hotfix dalları. Daha yapılandırılmıştır; planlı yayınlara uygundur.</td></tr>
          <tr><td>Trunk-Based Development</td><td>Herkes küçük ve sık değişiklikleri doğrudan (veya çok kısa ömürlü dallarla) tek main dalına gönderir; feature flag'lerle birlikte kullanılır. Hızlı, sürekli dağıtıma uygundur.</td></tr>
          <tr><td>GitHub Flow</td><td>Hafif bir orta yol: main'den açılan kısa ömürlü özellik dalları, hazır olup incelendiklerinde pull request ile birleştirilir.</td></tr>
        </table>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Yukarıdaki büyük çakışma hatası, çoğunlukla uzun ömürlü dalların belirtisidir. Kısa ömürlü dalları tercih eden stratejiler (trunk-based, GitHub Flow), birleştirme çakışmalarını seyrek ve devasa olmak yerine küçük ve sık tutmak için vardır.</p>
        <h4 class="content-subheading">Commits</h4>
        <ul class="plain">
          <li>Tanım: Açıklayıcı mesajla birlikte kaydedilen değişiklik anlık görüntüsüdür.</li>
          <li>Örnek: "Webhook imza doğrulaması eklendi" gibi açık mesajla commit yapmak.</li>
          <li>Neden önemli?: Küçük ve açık commit'ler geçmişi okunabilir, geri almayı kolay hale getirir.</li>
          <li>Sık yapılan hata: İlgisiz değişiklikleri tek commit'e sıkıştırmak; "fix" gibi belirsiz mesajlar yazmak.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>Conventional Commit Mesajları</h3>
        <p>Birçok ekip, mesajın başına tür ekleyen Conventional Commits gibi bir biçimle commit mesajlarını standartlaştırır:</p>
        <p>feat: webhook imza doğrulaması ekle</p>
        <p>fix: sayfalamadaki bir eksik/fazla hesaplama hatasını düzelt</p>
        <p>docs: API kimlik doğrulama rehberini güncelle</p>
        <p>refactor: token doğrulamasını ayrı bir fonksiyona çıkar</p>
        <p>Bu kuralın okunabilirlik dışında pratik kullanımları da vardır: otomatik değişiklik günlüğü (changelog) üretebilir ve bir kişinin elle karar vermesi yerine doğrudan commit geçmişinden semantik versiyonlamayı (sonraki yayının patch, minor veya major olacağını) yönlendirebilir.</p>
        <h4 class="content-subheading">Pull Requests</h4>
        <ul class="plain">
          <li>Tanım: Değişiklikleri bir daldan diğerine (main) birleştirme isteğidir. Birleştirmeden önce ekip arkadaşları inceleyip yorum yapar.</li>
          <li>Örnek: Daldaki çalışma bitince PR açılır, ekip inceler ve onaydan sonra birleştirilir.</li>
          <li>Neden önemli?: Kodun ana kod tabanına katılmadan incelenmesini sağlar ve ekibi bilgilendirir.</li>
          <li>Sık yapılan hata: Onlarca dosyaya dokunan dev PR'lar açmak; PR açıklamasını boş bırakmak.</li>
        </ul>
        <h3><span class="tag">DERİNLEŞTİR</span>İyi Bir Kod İnceleme Kültürü Nasıl Olur?</h3>
        <p>PR açmanın ötesinde, etkili inceleme yapan ekipleri değişikliklere yalnızca onay verenlerden ayıran birkaç uygulama vardır:</p>
        <ul class="plain">
          <li>Birleştirme için CI kontrolleri — PR birleştirilmeye uygun hale gelmeden önce otomatik testler, lint kontrolleri ve build işlemleri (9. bölümdeki CI) geçmelidir. Böylece mekanik sorunlar insan inceleyici zaman harcamadan yakalanır.</li>
          <li>Küçük, odaklı PR'lar — yukarıdaki dev PR hatasını doğrudan çözer. Küçük farklar daha hızlı ve dikkatli incelenir; çünkü inceleyen kişi değişikliğin tamamını zihninde tutabilir.</li>
          <li>Zorunlu inceleyiciler / dal koruması — en az bir onay olmadan main'e birleştirmeyi engelleyen repository ayarlarıdır. Böylece inceleme nezaket değil, zorunlu adımdır.</li>
        </ul>
        <div class="content-label why-label">Neden Önemli?</div><p class="key-content">Kod tabanı ve ekip büyüdükçe pull request, kod kalitesinin, bilgi paylaşımının ve güvenlik incelemesinin gerçekleştiği ana kontrol noktası olur. Bunu formalite saymak, hataların ve tutarsız yaklaşımların birikmesinin en hızlı yollarından biridir.</p>
      </div>`},
  en:{title:"Collaboration & Version Control", summary:"Git", html:`
      <div class="tsec">
        <h4 class="content-subheading">Git</h4>
        <ul class="plain">
          <li>Definition: A version control system that tracks code changes over time.</li>
          <li>Example: When a bug appears, the history can be checked to see which change introduced it.</li>
          <li>Why it matters: Lets teams work without overwriting each other and roll back to earlier versions.</li>
          <li>Common mistake: Going long stretches without committing, then dumping one giant commit.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>How Git Actually Tracks Changes</h3>
        <p>Underneath the beginner-level "it tracks changes" description, Git works with three areas developers move changes through:</p>
        <ul class="plain">
          <li>Working directory — the actual files on disk that you edit.</li>
          <li>Staging area (index) — changes marked with git add, chosen to go into the next commit.</li>
          <li>Repository (commit history) — the permanent record created by git commit.</li>
        </ul>
        <p>This staging step is what lets a developer commit only part of their changes at a time, keeping commits focused even when several unrelated edits exist in the working directory simultaneously. Commands like git diff, git log, and git revert (which undoes a commit by creating a new, opposite commit, without erasing history) build directly on this model.</p>
        <h4 class="content-subheading">Branches</h4>
        <ul class="plain">
          <li>Definition: An independent line of work that splits off from the main codebase (main).</li>
          <li>Example: Working on feature/login-page lets you build without affecting main.</li>
          <li>Why it matters: Enables parallel work across the team while keeping main stable.</li>
          <li>Common mistake: Not syncing a branch with main for a long time, then hitting massive conflicts.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Branching Strategies</h3>
        <p>Once a team grows beyond one or two developers, an informal "just make a branch" approach benefits from a shared convention:</p>
        <table class="tcompare">
          <tr><th>Strategy</th><th>Core Idea</th></tr>
          <tr><td>Git Flow</td><td>Long-lived develop and main branches, plus dedicated feature, release, and hotfix branches — more structure, suited to scheduled releases.</td></tr>
          <tr><td>Trunk-Based Development</td><td>Everyone commits small, frequent changes directly to (or via very short-lived branches into) a single main branch, paired with feature flags — suited to fast, continuous deployment.</td></tr>
          <tr><td>GitHub Flow</td><td>A lightweight middle ground: short-lived feature branches off main, merged via pull request as soon as they're ready and reviewed.</td></tr>
        </table>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">the "massive conflicts" mistake above is largely a symptom of long-lived branches — strategies that favor short-lived branches (trunk-based, GitHub Flow) exist specifically to keep merge conflicts small and frequent instead of rare and huge.</p>
        <h4 class="content-subheading">Commits</h4>
        <ul class="plain">
          <li>Definition: A saved snapshot of a change, paired with a descriptive message.</li>
          <li>Example: Committing with a clear message like "Added webhook signature verification".</li>
          <li>Why it matters: Small, clear commits make history readable and easy to revert.</li>
          <li>Common mistake: Cramming unrelated changes into one commit; writing vague messages like "fix".</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>Conventional Commit Messages</h3>
        <p>Many teams standardize commit messages using a format such as Conventional Commits, which prefixes the message with a type:</p>
        <p>feat: add webhook signature verification</p>
        <p>fix: correct off-by-one error in pagination</p>
        <p>docs: update API authentication guide</p>
        <p>refactor: extract token validation into its own function</p>
        <p>Beyond readability, this convention has practical uses: it can automatically generate a changelog, and it can drive semantic versioning (deciding whether the next release is a patch, minor, or major version) directly from the commit history, rather than a person deciding by hand.</p>
        <h4 class="content-subheading">Pull Requests</h4>
        <ul class="plain">
          <li>Definition: A request to merge changes from one branch into another (main), where teammates review and comment before it's merged.</li>
          <li>Example: Once a branch is done, a PR is opened, the team reviews it, and it's merged after approval.</li>
          <li>Why it matters: Ensures code is reviewed before joining the main codebase and keeps the team informed.</li>
          <li>Common mistake: Opening huge PRs touching dozens of files; leaving the PR description empty.</li>
        </ul>
        <h3><span class="tag">DEEP DIVE</span>What Good Review Culture Looks Like</h3>
        <p>Beyond opening the PR, a few practices separate teams that review effectively from ones that just rubber-stamp changes:</p>
        <ul class="plain">
          <li>CI checks gating merges — automated tests, linting, and builds (Section 9's CI) must pass before a PR is even eligible to merge, catching mechanical problems before a human reviewer spends time on them.</li>
          <li>Small, focused PRs — directly addresses the "huge PR" mistake above; smaller diffs get reviewed faster and more carefully, since a reviewer can actually hold the whole change in their head.</li>
          <li>Required reviewers / branch protection — repository settings that prevent merging into main without at least one approval, so review isn't just a courtesy but an enforced step.</li>
        </ul>
        <div class="content-label why-label">Why This Matters</div><p class="key-content">as a codebase and team grow, the pull request becomes the main checkpoint where code quality, knowledge sharing, and security review actually happen — treating it as a formality is one of the fastest ways for bugs and inconsistent patterns to accumulate.</p>
      </div>`}
}
];

/* ======================================================================
   FAQ DATA
====================================================================== */
const FAQS = [
  { tr:{ q:"Bir kullanıcı tarayıcıya bir URL girdiğinde ne olur?", a:"Tarayıcı, sunucunun IP adresini bulmak için DNS kullanır ve ardından bir HTTP/HTTPS isteği gönderir. Sunucu isteği işler ve bir yanıt gönderir; tarayıcı bu yanıtı kullanarak istenen sayfayı gösterir. Bu süreç, perde arkasında kullanıcıyı, tarayıcıyı, sunucuyu ve web uygulamasını birbirine bağlar." },
    en:{ q:"What happens when a user enters a URL in the browser?", a:"The browser uses DNS to find the server's IP address and then sends an HTTP/HTTPS request. The server processes the request and sends a response, which the browser uses to display the requested page. This process connects the user, browser, server, and web application behind the scenes." } },
  { tr:{ q:"JSON nedir ve API'lerde neden bu kadar yaygın kullanılır?", a:"JSON, uygulamalar arasında bilgi alışverişi yapmak için kullanılan hafif bir veri formatıdır. Veriyi basit anahtar-değer çiftleri halinde saklar ve hem insanlar hem de makineler tarafından kolayca okunabilir, bu yüzden API'lerde yaygın olarak kullanılır. Farklı sistemlerin, değiş tokuş edilen veriyi anlaması için basit ve tutarlı bir yol sağlar." },
    en:{ q:"What is JSON and why is it commonly used in APIs?", a:"JSON is a lightweight data format used to exchange information between applications. It stores data in simple key-value pairs and is easy for both humans and machines to read, making it widely used in APIs. It provides a simple and consistent way for different systems to understand exchanged data." } },
  { tr:{ q:"CORS nedir ve frontend geliştiricileri neden sık sık CORS hataları görür?", a:"CORS, farklı domain'ler arasındaki istekleri kontrol eden bir tarayıcı güvenlik kuralıdır. Yetkisiz web sitelerinin başka bir uygulamanın kaynaklarına erişmesini önler; bu yüzden sunucu belirli bir origin'e izin vermediğinde bir CORS hatası oluşabilir. Bu durum, genellikle frontend ve backend farklı domain veya port'larda çalıştığında ortaya çıkar." },
    en:{ q:"What is CORS and why do frontend developers often see CORS errors?", a:"CORS is a browser security rule that controls requests between different domains. It prevents unauthorized websites from accessing another application's resources, so a CORS error can occur when the server does not allow a specific origin. This commonly appears when a frontend and backend are running on different domains or ports." } },
  { tr:{ q:"Session ile token arasındaki fark nedir?", a:"Bir session, kullanıcının aktif giriş durumunu sunucuda saklar; bir token ise istemci ve sunucu arasında değiş tokuş edilen dijital bir kimlik bilgisi olarak işlev görür. Her ikisi de sistemlerin, kimliği doğrulanmış kullanıcıları birden fazla istek boyunca tanımasına yardımcı olur. Temel fark, kimlik doğrulama durumunun nerede tutulduğu ve nasıl doğrulandığıdır." },
    en:{ q:"What is the difference between a session and a token?", a:"A session stores a user's active login state on the server, while a token acts as a digital credential exchanged between the client and server. Both help systems recognize authenticated users across multiple requests. The main difference is where the authentication state is maintained and how it is verified." } },
  { tr:{ q:"Webhook nedir ve normal bir API isteğinden farkı nedir?", a:"Normal bir API isteğinde istemci bir servisten bilgi ya da eylem talep eder. Webhook'ta ise servis, belirli bir olay gerçekleştiğinde her seferinde sorulmadan otomatik olarak başka bir sisteme istek gönderir. Bu, uygulamaların sürekli güncelleme kontrolü yapmak yerine olaylara anında tepki vermesini sağlar." },
    en:{ q:"What is a webhook, and how is it different from a normal API request?", a:"In a normal API request, the client asks a service for information or an action. With a webhook, the service automatically sends a request to another system when a specific event occurs, without being asked each time. This allows applications to react to events immediately instead of constantly checking for updates." } },
  { tr:{ q:"Web uygulamaları neden kuyruk ve arka plan işleri kullanır?", a:"Kuyruklar, görevlerin kullanıcıyı bitmesini beklemeye zorlamak yerine arka planda işlenmesine olanak tanır. Örneğin, hoş geldin e-postası göndermek kayıttan sonra gerçekleşebilirken kullanıcı hemen bir yanıt alır. Bu, özellikle zaman alan görevlerde uygulamaları daha hızlı ve daha duyarlı hale getirir." },
    en:{ q:"Why do web applications use queues and background jobs?", a:"Queues allow tasks to be processed in the background instead of making users wait for them to finish. For example, sending a welcome email can happen after signup while the user receives an immediate response. This keeps applications faster and more responsive, especially when handling time-consuming tasks." } },
  { tr:{ q:"Web uygulamalarında ortam değişkenleri (environment variables) neden kullanılır?", a:"Ortam değişkenleri, API anahtarları, şifreler ve veritabanı adresleri gibi hassas ya da ortama özgü değerleri ana kodun dışında saklar. Bu, güvenliği artırır ve aynı uygulamanın geliştirme ile production ortamlarında farklı ayarlarla çalışmasına olanak tanır. Ayrıca hassas bilgilerin koda gömülmesini ve yanlışlıkla başkalarıyla paylaşılmasını önler." },
    en:{ q:"Why are environment variables used in web applications?", a:"Environment variables store sensitive or environment-specific values such as API keys, passwords, and database URLs outside the main code. This improves security and allows the same application to use different settings in development and production. They also prevent sensitive information from being hardcoded and accidentally shared with others." } }
];

/* Additional depth: practical context that connects each concept to real projects. */
const TOPIC_DEEPENING = {
  1:{tr:"Gerçek bir sayfa yüklenirken DNS çözümlemesi, bağlantı kurulması, HTTP isteği, sunucuda işleme ve tarayıcıda rendering aşamalarından geçilir. Bu zincirin her halkası performansı ve kullanıcı deneyimini etkiler.",en:"A real page load moves through DNS resolution, connection setup, an HTTP request, server processing, and browser rendering. Every link in this chain affects performance and user experience."},
  2:{tr:"Frontend etkileşimi yönetir, backend iş kurallarını uygular, veritabanı ise durumu korur. Sorumlulukların açıkça ayrılması, sistemi test etmeyi ve değiştirmeyi kolaylaştırır.",en:"The frontend manages interaction, the backend enforces business rules, and the database preserves state. Clear boundaries make the system easier to test and change."},
  3:{tr:"HTTP iletişimini incelerken metot, URL, header’lar, gövde ve durum kodunu birlikte değerlendirin. Hata ayıklama çoğunlukla tarayıcının Network panelinde bu parçaları kontrol etmekle başlar.",en:"When inspecting HTTP, consider method, URL, headers, body, and status code together. Debugging often starts by checking these pieces in the browser Network panel."},
  4:{tr:"İyi bir API yalnızca veri sunmaz; tutarlı kaynak adları, açık hatalar, doğrulama ve geriye dönük uyumluluk sağlar. Bu da istemcilerin değişikliklerden daha az etkilenmesini sağlar.",en:"A good API provides consistent resource names, clear errors, validation, and backward compatibility—not merely data. This reduces disruption for clients."},
  5:{tr:"Authentication kimliği kanıtlar; authorization izni kontrol eder. Canlı sistemler, kısa ömürlü erişim bilgilerini, güvenli cookie ayarlarını ve sunucu tarafı erişim kontrollerini birlikte kullanır.",en:"Authentication proves identity; authorization checks permission. Production systems combine short-lived credentials, secure cookie settings, and server-side access checks."},
  6:{tr:"Güvenlik katmanlıdır: girdiyi doğrulama, trafiği şifreleme, istekleri sınırlandırma, gizli bilgileri koruma ve olağandışı davranışı izleme tek bir sistem olarak birlikte çalışır.",en:"Security is layered: validate input, encrypt traffic, limit requests, protect secrets, and monitor unusual behavior as one system."},
  7:{tr:"Veri modeli gelecekteki sorguları şekillendirir. İndeksler okumayı hızlandırır, doğrulama ve transaction’lar tutarlılığı korur, sayfalama ise büyük sonuç kümelerinin maliyetini sınırlar.",en:"The data model shapes future queries. Indexes speed reads, validation and transactions protect consistency, and pagination limits the cost of large result sets."},
  8:{tr:"Uzun görevleri istek döngüsünden çıkarmak yanıtların hızlı kalmasını sağlar. Kuyruk worker’ları, geçici hatalarda kaybı önlemek için yeniden deneme, idempotency ve hata kaydına ihtiyaç duyar.",en:"Moving long tasks out of the request cycle keeps responses fast. Queue workers need retries, idempotency, and error logging to prevent loss during transient failures."},
  9:{tr:"Kalite güvencesi hata bulmaktan fazlasıdır. Unit, integration ve E2E testlerinin dengeli birleşimi değişiklikleri daha güvenli kılar; CI ise bu kontrolleri otomatik tekrarlar.",en:"Quality assurance is more than finding bugs. A balanced mix of unit, integration, and E2E tests makes changes safer, while CI repeats those checks automatically for every change."},
 10:{tr:"Dağıtım yalnızca dosya yüklemekten ibaret değildir; build, test, yapılandırma, migration, sağlık kontrolleri ve rollback adımlarını içerir. Otomasyon süreci tekrarlanabilir hale getirir.",en:"Deployment includes build, test, configuration, migrations, health checks, and rollback—not merely uploading files. Automation makes the process repeatable."},
 11:{tr:"Küçük, odaklı branch, commit ve pull request’ler incelemeyi hızlandırır. Açık açıklamalar, otomatik testler ve güncel bir main dalı çakışmaları azaltır.",en:"Small, focused branches, commits, and pull requests accelerate review. Clear descriptions, automated tests, and an up-to-date main branch reduce conflicts."}
};

/* ======================================================================
   TECHNICAL GLOSSARY
   Important terms are enhanced after a topic is rendered. Keeping the
   glossary here prevents definitions from being duplicated in lessons.
====================================================================== */
const GLOSSARY = {
  tr: [
    {terms:['DNS servers','DNS server','DNS sunucuları','DNS sunucusu'], title:'DNS sunucusu', topic:10, definition:'Alan adını karşılık gelen IP adresine çözümleyen, Domain Name System altyapısının parçası olan sunucudur.'},
    {terms:['Web servers','Web server','Web sunucuları','Web sunucusu','HTTP servers','HTTP server'], title:'Web sunucusu', topic:2, definition:'HTTP isteklerini kabul edip HTML, görsel veya API yanıtı gibi web kaynaklarını istemciye sunan yazılım ve sistemdir.'},
    {terms:['Application server','Uygulama sunucusu'], title:'Uygulama sunucusu', topic:2, definition:'İş kurallarını çalıştıran, veri kaynaklarıyla iletişim kuran ve dinamik yanıt üreten sunucu katmanıdır.'},
    {terms:['HTTP requests','HTTP request','HTTP istekleri','HTTP isteği'], title:'HTTP isteği', topic:3, definition:'Bir istemcinin belirli bir kaynak veya işlem için HTTP kurallarına göre sunucuya gönderdiği mesajdır.'},
    {terms:['HTTP responses','HTTP response','HTTP yanıtları','HTTP yanıtı'], title:'HTTP yanıtı', topic:3, definition:'Sunucunun bir HTTP isteğine karşılık durum kodu, header ve isteğe bağlı body ile döndürdüğü mesajdır.'},
    {terms:['Access Token','Erişim tokenı'], title:'Access Token', topic:5, definition:'Bir istemcinin korunan kaynağa erişim yetkisini kısa süre boyunca kanıtlayan kimlik bilgisidir.'},
    {terms:['Refresh Token','Yenileme tokenı'], title:'Refresh Token', topic:5, definition:'Kullanıcıyı yeniden girişe zorlamadan yeni access token almak için kullanılan daha uzun ömürlü kimlik bilgisidir.'},
    {terms:['Session cookie','Oturum cookie’si'], title:'Session cookie', topic:5, definition:'Tarayıcı ile sunucu arasındaki oturumu tanımlayan session kimliğini taşıyan cookie’dir.'},
    {terms:['IP address','IP adresi'], title:'IP adresi', topic:10, definition:'Bir cihazın veya ağ arayüzünün ağ üzerindeki sayısal adresidir.'},
    {terms:['Domain name','Alan adı'], title:'Alan adı', topic:10, definition:'İnsanların okuyabildiği ve DNS aracılığıyla bir IP adresine çözümlenen internet adresidir.'},
    {terms:['Load balancer','Yük dengeleyici'], title:'Load balancer', topic:6, definition:'Gelen trafiği birden fazla sunucu örneğine dağıtarak kapasiteyi ve erişilebilirliği artıran bileşendir.'},
    {terms:['Message broker','Mesaj aracısı'], title:'Message broker', topic:8, definition:'Üreticiler ile tüketiciler arasında mesajları kabul eden, saklayan ve ileten ara yazılımdır.'},
    {terms:['Background job','Arka plan işi'], title:'Background job', topic:8, definition:'Kullanıcının isteğini bekletmeden ayrı bir süreçte veya worker üzerinde çalıştırılan görevdir.'},
    {terms:['Database index','Veritabanı indeksi'], title:'Veritabanı indeksi', topic:7, definition:'Tablodaki satırlara daha hızlı erişmek için belirli sütunlar üzerinde oluşturulan yardımcı veri yapısıdır.'},
    {terms:['Static content','Statik içerik'], title:'Statik içerik', topic:1, definition:'Sunucu tarafından saklandığı biçimde, istek başına yeniden üretilmeden sunulan içeriktir.'},
    {terms:['Dynamic content','Dinamik içerik'], title:'Dinamik içerik', topic:1, definition:'İstek, kullanıcı veya güncel veriye göre sunucuda ya da istemcide üretilen veya güncellenen içeriktir.'},
    {terms:['Pull Request'], title:'Pull Request', topic:11, definition:'Bir branch’teki değişikliklerin incelenip başka bir branch’e birleştirilmesi için açılan iş birliği kaydıdır.'},
    {terms:['Version Control','Versiyon kontrolü'], title:'Version Control', topic:11, definition:'Dosya ve kod değişikliklerinin geçmişini kaydeden, karşılaştırmayı ve ekip çalışmasını kolaylaştıran sistemdir.'},
    {terms:['Client-Side Rendering','Client-side'], title:'Client-Side Rendering (CSR)', topic:2, definition:'Sayfa arayüzünün ve içeriğinin büyük bölümünün tarayıcıda JavaScript ile oluşturulduğu render yaklaşımıdır.'},
    {terms:['Server-Side Rendering','Server-side'], title:'Server-Side Rendering (SSR)', topic:2, definition:'Bir sayfanın HTML çıktısının sunucuda hazırlanıp tarayıcıya gönderildiği render yaklaşımıdır.'},
    {terms:['World Wide Web','Web'], title:'Web (World Wide Web)', topic:1, definition:'İnternet altyapısı üzerinde çalışan, bağlantılarla birbirine bağlanmış sayfa ve uygulamalardan oluşan bilgi sistemidir.'},
    {terms:['İnternet'], title:'İnternet', topic:1, definition:'Dünya çapındaki cihazların ve ağların veri alışverişi yapmasını sağlayan fiziksel ve mantıksal ağ altyapısıdır.'},
    {terms:['Tarayıcı','Browser'], title:'Tarayıcı (Browser)', topic:2, definition:'Web kaynaklarını sunucudan isteyen, gelen HTML, CSS ve JavaScript’i işleyerek kullanıcıya gösteren istemci uygulamasıdır.'},
    {terms:['İstemci','Client'], title:'İstemci (Client)', topic:2, definition:'Bir sunucudan veri veya hizmet talep eden cihaz, tarayıcı ya da uygulamadır.'},
    {terms:['Sunucu','Server'], title:'Sunucu (Server)', topic:2, definition:'İstemcilerden gelen istekleri işleyen ve uygun yanıtı üreten sistem veya yazılımdır.'},
    {terms:['Frontend'], title:'Frontend', topic:2, definition:'Uygulamanın tarayıcıda çalışan, kullanıcının gördüğü ve etkileşim kurduğu katmanıdır.'},
    {terms:['Backend'], title:'Backend', topic:2, definition:'İş kurallarını, güvenliği ve veri işlemlerini sunucu tarafında yürüten görünmeyen uygulama katmanıdır.'},
    {terms:['İstek','Request'], title:'İstek (Request)', topic:2, definition:'İstemcinin bir kaynak veya işlem talep etmek amacıyla sunucuya gönderdiği mesajdır.'},
    {terms:['Yanıt','Response'], title:'Yanıt (Response)', topic:2, definition:'Sunucunun bir isteği işledikten sonra istemciye gönderdiği sonuç ve durum bilgisidir.'},
    {terms:['HTTP'], title:'HTTP', topic:3, definition:'İstemci ile sunucunun web üzerinde nasıl istek ve yanıt alışverişi yapacağını belirleyen uygulama katmanı protokolüdür.'},
    {terms:['HTTPS'], title:'HTTPS', topic:3, definition:'HTTP iletişimini TLS ile şifreleyerek veri bütünlüğü ve gizliliği sağlayan güvenli sürümdür.'},
    {terms:['Durum kodu','Status code'], title:'HTTP durum kodu', topic:3, definition:'Bir HTTP isteğinin başarılı, hatalı veya yönlendirilmiş olduğunu sayısal olarak bildiren koddur; örneğin 200 veya 404.'},
    {terms:['Header'], title:'HTTP Header', topic:3, definition:'İstek veya yanıtla birlikte taşınan içerik tipi, yetkilendirme ve önbellek gibi ek bilgilerdir.'},
    {terms:['API'], title:'API', topic:4, definition:'Farklı yazılımların önceden tanımlanmış kurallar üzerinden veri ve işlev alışverişi yapmasını sağlayan arayüzdür.'},
    {terms:['Endpoint'], title:'Endpoint', topic:4, definition:'Bir API içindeki belirli kaynağa veya işleme erişmek için kullanılan URL adresidir.'},
    {terms:['REST API','REST'], title:'REST API', topic:4, definition:'Kaynakları URL’lerle temsil eden ve HTTP metotlarını kullanan yaygın web API tasarım yaklaşımıdır.'},
    {terms:['JSON'], title:'JSON', topic:4, definition:'Veriyi anahtar-değer yapısında taşıyan, insanlar ve makineler tarafından kolay okunabilen hafif veri formatıdır.'},
    {terms:['Authentication','Kimlik doğrulama'], title:'Authentication', topic:5, definition:'Bir kullanıcının iddia ettiği kişi olup olmadığını parola, token veya başka bir yöntemle doğrulama sürecidir.'},
    {terms:['Authorization','Yetkilendirme'], title:'Authorization', topic:5, definition:'Kimliği doğrulanmış bir kullanıcının hangi kaynaklara ve işlemlere erişebileceğini belirleme sürecidir.'},
    {terms:['Token'], title:'Token', topic:5, definition:'Kullanıcının kimliğini veya yetkilerini sonraki isteklerde kanıtlamak için taşınan dijital kimlik bilgisidir.'},
    {terms:['Session'], title:'Session', topic:5, definition:'Bir kullanıcının oturum durumunun genellikle sunucuda tutulduğu kimlik doğrulama yaklaşımıdır.'},
    {terms:['CORS'], title:'CORS', topic:6, definition:'Tarayıcıların farklı origin’ler arasındaki isteklere hangi koşullarda izin vereceğini belirleyen güvenlik mekanizmasıdır.'},
    {terms:['Cache','Önbellek'], title:'Cache (Önbellek)', topic:6, definition:'Sık kullanılan veriyi daha hızlı sunmak için geçici ve hızlı bir alanda saklama yöntemidir.'},
    {terms:['Rate Limiting'], title:'Rate Limiting', topic:6, definition:'Bir istemcinin belirli süre içinde yapabileceği istek sayısını sınırlayarak sistemi kötüye kullanımdan koruyan yöntemdir.'},
    {terms:['Validation','Doğrulama'], title:'Validation', topic:7, definition:'Bir verinin işlenmeden veya kaydedilmeden önce beklenen biçim ve kurallara uygunluğunu kontrol etme işlemidir.'},
    {terms:['Pagination','Sayfalama'], title:'Pagination', topic:7, definition:'Büyük veri kümelerini daha küçük parçalar hâlinde getirerek yük ve yanıt süresini azaltma tekniğidir.'},
    {terms:['Veritabanı','Database'], title:'Veritabanı', topic:7, definition:'Uygulama verilerinin düzenli, kalıcı ve sorgulanabilir biçimde saklandığı sistemdir.'},
    {terms:['Queue','Kuyruk'], title:'Queue (Kuyruk)', topic:8, definition:'Uzun süren görevleri sıraya alıp arka planda güvenilir biçimde işlemek için kullanılan yapıdır.'},
    {terms:['Webhook'], title:'Webhook', topic:8, definition:'Belirli bir olay gerçekleştiğinde bir sistemin başka bir sisteme otomatik HTTP isteği göndermesidir.'},
    {terms:['Logging','Loglama'], title:'Logging', topic:8, definition:'Uygulamadaki olayların, isteklerin ve hataların daha sonra incelenmek üzere kaydedilmesidir.'},
    {terms:['Unit test','Integration','End-to-End','E2E'], title:'Test katmanları', topic:9, definition:'Yazılım davranışını tek birimden tam kullanıcı akışına kadar farklı kapsam seviyelerinde doğrulayan test gruplarıdır.'},
    {terms:['Continuous Integration','CI'], title:'Continuous Integration (CI)', topic:9, definition:'Her kod değişikliğinde test, lint ve build kontrollerini otomatik çalıştıran entegrasyon sürecidir.'},
    {terms:['DNS'], title:'DNS', topic:10, definition:'Alan adlarını cihazların iletişim kurabildiği IP adreslerine çeviren dağıtık isimlendirme sistemidir.'},
    {terms:['Deployment','Dağıtım'], title:'Deployment', topic:10, definition:'Bir uygulama sürümünü kullanıcıların erişebileceği hedef ortama yayınlama sürecidir.'},
    {terms:['Environment variable','Ortam değişkenleri'], title:'Ortam değişkeni', topic:10, definition:'Yapılandırma ve gizli değerleri uygulama kodundan ayrı tutmaya yarayan çalışma ortamı değeridir.'},
    {terms:['Git'], title:'Git', topic:11, definition:'Dosya değişikliklerinin geçmişini izleyen ve ekiplerin paralel çalışmasını sağlayan dağıtık versiyon kontrol sistemidir.'},
    {terms:['Commit'], title:'Commit', topic:11, definition:'Bir değişiklik grubunun açıklayıcı mesajla birlikte versiyon geçmişine kaydedilmiş hâlidir.'},
    {terms:['Branch'], title:'Branch', topic:11, definition:'Ana kod akışını etkilemeden bağımsız geliştirme yapılmasını sağlayan paralel çalışma koludur.'},
    {terms:['Merge'], title:'Merge', topic:11, definition:'Bir branch üzerindeki değişiklikleri başka bir branch’in geçmişiyle birleştirme işlemidir.'}
  ],
  en: [
    {terms:['DNS servers','DNS server'], title:'DNS server', topic:10, definition:'A server in the Domain Name System that resolves domain names to their corresponding IP addresses.'},
    {terms:['Web servers','Web server','HTTP servers','HTTP server'], title:'Web server', topic:2, definition:'Software and infrastructure that accepts HTTP requests and serves web resources such as HTML, images, or API responses.'},
    {terms:['Application server'], title:'Application server', topic:2, definition:'The server layer that runs business logic, communicates with data sources, and produces dynamic responses.'},
    {terms:['HTTP requests','HTTP request'], title:'HTTP request', topic:3, definition:'A message a client sends to a server under HTTP rules to request a resource or operation.'},
    {terms:['HTTP responses','HTTP response'], title:'HTTP response', topic:3, definition:'A server message containing a status code, headers, and an optional body in reply to an HTTP request.'},
    {terms:['Access Token'], title:'Access Token', topic:5, definition:'A short-lived credential that proves a client is authorized to access a protected resource.'},
    {terms:['Refresh Token'], title:'Refresh Token', topic:5, definition:'A longer-lived credential used to obtain a new access token without requiring the user to sign in again.'},
    {terms:['Session cookie'], title:'Session cookie', topic:5, definition:'A cookie carrying the session identifier that connects a browser request to server-maintained login state.'},
    {terms:['IP address'], title:'IP address', topic:10, definition:'The numeric network address assigned to a device or network interface.'},
    {terms:['Domain name'], title:'Domain name', topic:10, definition:'A human-readable internet address that DNS resolves to an IP address.'},
    {terms:['Load balancer'], title:'Load balancer', topic:6, definition:'A component that distributes incoming traffic across multiple server instances to improve capacity and availability.'},
    {terms:['Message broker'], title:'Message broker', topic:8, definition:'Middleware that accepts, stores, and delivers messages between producers and consumers.'},
    {terms:['Background job'], title:'Background job', topic:8, definition:'A task executed by a separate process or worker so it does not delay the user’s request.'},
    {terms:['Database index'], title:'Database index', topic:7, definition:'An auxiliary data structure built on selected columns to locate table rows more efficiently.'},
    {terms:['Static content'], title:'Static content', topic:1, definition:'Content served as stored instead of being generated again for each request.'},
    {terms:['Dynamic content'], title:'Dynamic content', topic:1, definition:'Content generated or updated on the server or client according to a request, user, or current data.'},
    {terms:['Pull Request'], title:'Pull Request', topic:11, definition:'A collaboration record proposing that changes from one branch be reviewed and merged into another.'},
    {terms:['Version Control'], title:'Version Control', topic:11, definition:'A system that records file and code history to support comparison, recovery, and collaboration.'},
    {terms:['Client-Side Rendering','Client-side'], title:'Client-Side Rendering (CSR)', topic:2, definition:'A rendering approach in which JavaScript builds most of the page interface and content in the browser.'},
    {terms:['Server-Side Rendering','Server-side'], title:'Server-Side Rendering (SSR)', topic:2, definition:'A rendering approach in which the server prepares the page’s HTML before sending it to the browser.'},
    {terms:['World Wide Web','Web'], title:'Web (World Wide Web)', topic:1, definition:'An information system of interlinked pages and applications that operates over Internet infrastructure.'},
    {terms:['Internet'], title:'Internet', topic:1, definition:'The global physical and logical network infrastructure that allows devices and networks to exchange data.'},
    {terms:['Browser'], title:'Browser', topic:2, definition:'A client application that requests web resources and renders the returned HTML, CSS, and JavaScript.'},
    {terms:['Client'], title:'Client', topic:2, definition:'A device, browser, or application that requests data or a service from a server.'},
    {terms:['Server'], title:'Server', topic:2, definition:'A system or program that processes client requests and produces appropriate responses.'},
    {terms:['Frontend'], title:'Frontend', topic:2, definition:'The browser-side layer of an application that users see and interact with.'},
    {terms:['Backend'], title:'Backend', topic:2, definition:'The server-side layer responsible for business rules, security, and data processing.'},
    {terms:['Request'], title:'Request', topic:2, definition:'A message sent by a client to ask a server for a resource or operation.'},
    {terms:['Response'], title:'Response', topic:2, definition:'The result and status information a server sends after processing a request.'},
    {terms:['HTTP'], title:'HTTP', topic:3, definition:'The application-layer protocol defining how clients and servers exchange requests and responses on the Web.'},
    {terms:['HTTPS'], title:'HTTPS', topic:3, definition:'The secure form of HTTP that uses TLS to protect confidentiality and data integrity.'},
    {terms:['Status code'], title:'HTTP status code', topic:3, definition:'A numeric code such as 200 or 404 that reports the outcome of an HTTP request.'},
    {terms:['Header'], title:'HTTP Header', topic:3, definition:'Metadata carried with a request or response, such as content type, authorization, or caching instructions.'},
    {terms:['API'], title:'API', topic:4, definition:'An interface that lets different software exchange data and capabilities through defined rules.'},
    {terms:['Endpoint'], title:'Endpoint', topic:4, definition:'A URL used to access a specific resource or operation exposed by an API.'},
    {terms:['REST API','REST'], title:'REST API', topic:4, definition:'A common web API design style that represents resources with URLs and uses HTTP methods.'},
    {terms:['JSON'], title:'JSON', topic:4, definition:'A lightweight, human-readable data format commonly used to exchange structured information.'},
    {terms:['Authentication'], title:'Authentication', topic:5, definition:'The process of verifying that a user is who they claim to be.'},
    {terms:['Authorization'], title:'Authorization', topic:5, definition:'The process of deciding which resources and actions an authenticated user may access.'},
    {terms:['Token'], title:'Token', topic:5, definition:'A digital credential carried with later requests to prove identity or permissions.'},
    {terms:['Session'], title:'Session', topic:5, definition:'An authentication approach in which a user’s active login state is commonly maintained on the server.'},
    {terms:['CORS'], title:'CORS', topic:6, definition:'A browser security mechanism controlling when requests between different origins are allowed.'},
    {terms:['Cache'], title:'Cache', topic:6, definition:'Temporary fast storage used to serve frequently requested data more quickly.'},
    {terms:['Rate Limiting'], title:'Rate Limiting', topic:6, definition:'Limiting how many requests a client may make during a period to protect a service from abuse.'},
    {terms:['Validation'], title:'Validation', topic:7, definition:'Checking that data satisfies expected rules and formats before it is processed or stored.'},
    {terms:['Pagination'], title:'Pagination', topic:7, definition:'Fetching a large dataset in smaller pages to reduce load and response time.'},
    {terms:['Database'], title:'Database', topic:7, definition:'A system that stores application data in an organized, durable, and queryable form.'},
    {terms:['Queue'], title:'Queue', topic:8, definition:'A structure that schedules long-running tasks for reliable background processing.'},
    {terms:['Webhook'], title:'Webhook', topic:8, definition:'An automatic HTTP request sent to another system when a specific event occurs.'},
    {terms:['Logging'], title:'Logging', topic:8, definition:'Recording application events, requests, and errors for later analysis.'},
    {terms:['Unit test','Integration','End-to-End','E2E'], title:'Testing layers', topic:9, definition:'Levels of software testing that verify behavior from an isolated unit to a complete user flow.'},
    {terms:['Continuous Integration','CI'], title:'Continuous Integration (CI)', topic:9, definition:'A process that automatically runs tests, lint checks, and builds for each code change.'},
    {terms:['DNS'], title:'DNS', topic:10, definition:'The distributed naming system that translates domain names into IP addresses.'},
    {terms:['Deployment'], title:'Deployment', topic:10, definition:'The process of releasing an application version to an environment users can access.'},
    {terms:['Environment variable'], title:'Environment variable', topic:10, definition:'A runtime value used to keep configuration and secrets separate from application code.'},
    {terms:['Git'], title:'Git', topic:11, definition:'A distributed version-control system that tracks file history and supports parallel teamwork.'},
    {terms:['Commit'], title:'Commit', topic:11, definition:'A recorded group of changes accompanied by a descriptive message in version history.'},
    {terms:['Branch'], title:'Branch', topic:11, definition:'A parallel line of development that allows isolated work without changing the main code flow.'},
    {terms:['Merge'], title:'Merge', topic:11, definition:'The operation that combines changes from one branch into another.'}
  ]
};

let activeGlossaryTerm = null;

function closeGlossaryTerm(){
  if(!activeGlossaryTerm) return;
  activeGlossaryTerm.classList.remove('open');
  activeGlossaryTerm.setAttribute('aria-expanded','false');
  activeGlossaryTerm = null;
}

function positionGlossaryTooltip(term){
  const tip = term.querySelector('.term-tooltip');
  if(!tip) return;
  const rect = term.getBoundingClientRect();
  const margin = 12;
  const width = Math.min(320, window.innerWidth - margin * 2);
  tip.style.width = `${width}px`;
  tip.style.left = `${Math.max(margin, Math.min(rect.left + rect.width / 2 - width / 2, window.innerWidth - width - margin))}px`;
  tip.style.top = `${rect.bottom + 10}px`;
  requestAnimationFrame(()=>{
    const tipRect = tip.getBoundingClientRect();
    if(tipRect.bottom > window.innerHeight - margin){
      tip.style.top = `${Math.max(margin, rect.top - tipRect.height - 10)}px`;
      term.classList.add('above');
    } else {
      term.classList.remove('above');
    }
  });
}

function openGlossaryTerm(term){
  if(activeGlossaryTerm && activeGlossaryTerm !== term) closeGlossaryTerm();
  activeGlossaryTerm = term;
  term.classList.add('open');
  term.setAttribute('aria-expanded','true');
  positionGlossaryTooltip(term);
}

function enhanceTechnicalTerms(topicId){
  const root = document.getElementById('app');
  if(!root) return;
  const entries = GLOSSARY[LANG];
  const lookup = [];
  entries.forEach(entry=>entry.terms.forEach(term=>lookup.push({term, entry})));
  lookup.sort((a,b)=>b.term.length-a.term.length);
  const escaped = lookup.map(x=>x.term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
  const matcher = new RegExp(`(?<![\\p{L}\\p{N}_])(${escaped.join('|')})(?![\\p{L}\\p{N}_])`,'giu');
  const exact = new Map(lookup.map(x=>[x.term.toLocaleLowerCase(LANG),x.entry]));
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node){
      const parent=node.parentElement;
      if(!parent || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if(parent.closest('a, button, code, pre, script, style, .tech-term, .idxrow, .crumbs, .tnav')) return NodeFilter.FILTER_REJECT;
      matcher.lastIndex=0;
      return matcher.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes=[];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    matcher.lastIndex=0;
    const fragment=document.createDocumentFragment();
    let last=0;
    node.nodeValue.replace(matcher,(match,_group,offset)=>{
      const entry=exact.get(match.toLocaleLowerCase(LANG));
      if(!entry) return match;
      fragment.append(document.createTextNode(node.nodeValue.slice(last,offset)));
      const term=document.createElement('span');
      term.className='tech-term';
      term.tabIndex=0;
      term.setAttribute('role','button');
      term.setAttribute('aria-expanded','false');
      term.innerHTML=`<span class="term-label"></span><span class="term-tooltip" role="tooltip"><strong>${entry.title}</strong><span>${entry.definition}</span><a href="#/topic/${entry.topic}">${LANG==='tr'?`Bölüm ${entry.topic}’de incele →`:`Review in Chapter ${entry.topic} →`}</a></span>`;
      term.querySelector('.term-label').textContent=match;
      fragment.append(term);
      last=offset+match.length;
      return match;
    });
    fragment.append(document.createTextNode(node.nodeValue.slice(last)));
    node.replaceWith(fragment);
  });

  root.querySelectorAll('.tech-term').forEach(term=>{
    let hoverTimer;
    term.addEventListener('mouseenter',()=>{ hoverTimer=setTimeout(()=>openGlossaryTerm(term),320); });
    term.addEventListener('mouseleave',()=>{ clearTimeout(hoverTimer); if(!term.matches(':focus')) closeGlossaryTerm(); });
    term.addEventListener('focus',()=>openGlossaryTerm(term));
    term.addEventListener('blur',()=>closeGlossaryTerm());
    term.addEventListener('click',e=>{
      if(e.target.closest('.term-tooltip a')) return;
      e.preventDefault();
      activeGlossaryTerm===term ? closeGlossaryTerm() : openGlossaryTerm(term);
    });
    term.addEventListener('keydown',e=>{ if(e.key==='Escape'){ closeGlossaryTerm(); term.blur(); } });
  });
}

document.addEventListener('pointerdown',e=>{
  if(activeGlossaryTerm && !e.target.closest('.tech-term')) closeGlossaryTerm();
});
window.addEventListener('resize',()=>{ if(activeGlossaryTerm) positionGlossaryTooltip(activeGlossaryTerm); });
window.addEventListener('scroll',()=>{ if(activeGlossaryTerm) positionGlossaryTooltip(activeGlossaryTerm); },{passive:true});

/* ======================================================================
   STATE + ROUTER
====================================================================== */
let LANG = 'tr';
try{
  const savedLanguage = localStorage.getItem('iceberg_lang');
  if(savedLanguage==='tr' || savedLanguage==='en') LANG=savedLanguage;
}catch(error){ /* Language selection still works when storage is unavailable. */ }

function t(key){ return STR[LANG][key]; }
function topicLang(topic){ return topic[LANG]; }

function setLang(l){
  LANG = l;
  try{ localStorage.setItem('iceberg_lang', l); }catch(error){} 
  document.documentElement.lang = l;
  render();
}

function buildDrawer(){
  const nav = document.getElementById('drawerNav');
  let html = `<div class="section-label">${t('navTopics')}</div>`;
  TOPICS.forEach(top=>{
    html += `<a class="item" href="#/topic/${top.id}"><span class="num">${String(top.id).padStart(2,'0')}</span>${topicLang(top).title}</a>`;
  });
  html += `<div class="section-label">${t('navUtil')}</div>`;
  html += `<a class="item util" href="#/quiz"><span class="num">Q</span>${t('quizTitle')}</a>`;
  html += `<a class="item util" href="#/faq"><span class="num">?</span>${t('faqTitle')}</a>`;
  nav.innerHTML = html;
}

function closeDrawer(){
  document.getElementById('drawer').classList.remove('show');
  document.getElementById('scrim').classList.remove('show');
  document.getElementById('hamburger').classList.remove('open');
}
function openDrawer(){
  document.getElementById('drawer').classList.add('show');
  document.getElementById('scrim').classList.add('show');
  document.getElementById('hamburger').classList.add('open');
}

function renderHome(){
  const s = STR[LANG];
  let rows = '';
  TOPICS.forEach((top,i)=>{
    const tl = topicLang(top);
    rows += `
    <a class="topic-row reveal" href="#/topic/${top.id}" style="animation-delay:${i*0.03}s">
      <div class="idx"><span class="n">${String(top.id).padStart(2,'0')}</span><span class="depth">${top.depth}</span></div>
      <div class="body">
        <h2>${ICON[top.icon]}${tl.title}</h2>
        <p>${tl.summary}</p>
      </div>
      <div class="arrow">→</div>
    </a>`;
    if([3,6,9].includes(top.id)){
      const b = BANNERS[(top.id/3-1) % BANNERS.length]();
      rows += `<div class="divider">${b}</div>`;
    }
  });

  let faqs = '';
  FAQS.forEach((f,i)=>{
    const fl = f[LANG];
    faqs += `
    <div class="faq-item" data-i="${i}">
      <button class="faq-q">${fl.q}<span class="plus">+</span></button>
      <div class="faq-a"><p>${fl.a}</p></div>
    </div>`;
  });

  document.getElementById('app').innerHTML = `
    <section class="hero">
      <div class="eyebrow">${s.heroEyebrow}</div>
      <h1>${s.heroTitleA} <span class="hl">${s.heroTitleHL}</span> ${s.heroTitleB}</h1>
      <p class="lede">${s.heroLede}</p>
      <div class="meta">
      <div><b>11</b>${s.metaTopics}</div>
        <div><b>${s.metaLevelVal}</b>${s.metaLevel}</div>
        <div><b>${s.metaFormatVal}</b>${s.metaFormat}</div>
      </div>
    </section>
    <div class="waterline"><span class="label">${s.waterline}</span></div>
    <div class="topic-list">${rows}</div>

    <div class="panel">
      <div class="tag">${s.quizTag}</div>
      <h3>${s.quizTitle}</h3>
      <p>${s.quizDesc}</p>
      <a class="btn" href="#/quiz">${s.quizBtn}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8"/></svg>
      </a>
    </div>

    <div class="panel" style="margin-top:24px;">
      <div class="tag">${s.faqTag}</div>
      <h3>${s.faqTitle}</h3>
      <div class="faq-list">${faqs}</div>
    </div>
  `;

  document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click', ()=> btn.parentElement.classList.toggle('open'));
  });
}

function renderTopic(id){
  const idx = TOPICS.findIndex(x=>x.id===id);
  if(idx===-1){ location.hash = '#/'; return; }
  const top = TOPICS[idx];
  const tl = topicLang(top);
  const prev = TOPICS[idx-1];
  const next = TOPICS[idx+1];
  const s = STR[LANG];
  const topicHtml = tl.html.replace(/<table\b[^>]*>[\s\S]*?<\/table>/g, table=>`<div class="table-scroll" tabindex="0" role="region" aria-label="${LANG==='tr'?'Karşılaştırma tablosu':'Comparison table'}">${table}</div>`);
  const resource = LEARNING_RESOURCES[top.id];
  const resourceCard = resource ? `
    <aside class="learning-resource" aria-labelledby="learning-resource-title">
      <div class="learning-resource-copy">
        <span class="learning-resource-kicker">${LANG==='tr'?'İLERİ OKUMA':'FURTHER READING'}</span>
        <h3 id="learning-resource-title">${LANG==='tr'?'Daha Fazlasını Keşfet':'Explore Further'}</h3>
        <p>${LANG==='tr'?'Bu konu hakkında daha fazla öğrenmek isterseniz aşağıdaki bağlantı üzerinden önerilen kaynağa ulaşabilirsiniz.':'If you would like to learn more about this topic, use the link below to visit the recommended resource.'}</p>
      </div>
      ${resource.additional ? '<div style="display:grid;gap:12px">' : ''}
      <a class="learning-resource-link" href="${resource.url}" target="_blank" rel="noopener noreferrer" aria-label="${resource.title} — ${resource.source} (${LANG==='tr'?'yeni sekmede açılır':'opens in a new tab'})">
        <span><small>${resource.source}</small><strong>${resource.title}</strong></span>
        <span class="learning-resource-arrow" aria-hidden="true">↗</span>
      </a>
      ${resource.additional ? `<a class="learning-resource-link" href="${resource.additional.url}" target="_blank" rel="noopener noreferrer" aria-label="${resource.additional.title} — ${resource.additional.source} (${LANG==='tr'?'yeni sekmede açılır':'opens in a new tab'})"><span><small>${resource.additional.source}</small><strong>${resource.additional.title}</strong></span><span class="learning-resource-arrow" aria-hidden="true">↗</span></a></div>` : ''}
    </aside>` : '';

  let nav = '<div class="tnav">';
  if(prev){
    const pl = topicLang(prev);
    nav += `<a class="prev" href="#/topic/${prev.id}"><span>←</span><span><small>${s.prevTopic}</small><span class="t">${pl.title}</span></span></a>`;
  } else { nav += `<a class="prev" href="#/"><span>←</span><span><small>${s.backHome}</small><span class="t">${s.allTopics}</span></span></a>`; }
  if(next){
    const nl = topicLang(next);
    nav += `<a class="next" href="#/topic/${next.id}"><span>→</span><span><small>${s.nextTopic}</small><span class="t">${nl.title}</span></span></a>`;
  } else {
    nav += `<a class="next" href="#/quiz"><span>→</span><span><small>${s.toQuiz}</small><span class="t">${s.quizTitle}</span></span></a>`;
  }
  nav += '</div>';

  document.getElementById('app').innerHTML = `
    <div class="crumbs">
      <a href="#/">${s.allTopics}</a><span class="sep">/</span><span class="current">${String(top.id).padStart(2,'0')}</span>
    </div>
    <div class="tdetail-head">
      <div class="idxrow"><span class="n">${String(top.id).padStart(2,'0')} / 11</span><span class="depth">${top.depth} ${s.depthLabel}</span></div>
      <h1>${ICON[top.icon]}${tl.title}</h1>
      <p class="lead">${tl.summary}</p>
    </div>
    ${topicHtml}
    <div class="tsec">
      <h3><span class="tag">${LANG==='tr'?'DERİNLEŞTİR':'DEEP DIVE'}</span>${LANG==='tr'?'Gerçek Proje Perspektifi':'Real-project perspective'}</h3>
      <p>${TOPIC_DEEPENING[top.id][LANG]}</p>
      <div class="callout"><div class="lbl">${LANG==='tr'?'Uygulama Notu':'Practice Note'}</div><p>${LANG==='tr'?'Bu bölümü bitirirken kavramı yalnızca tanımlamakla kalmayın; bir isteğin, verinin veya kod değişikliğinin sistem boyunca hangi adımlardan geçtiğini kendi cümlelerinizle açıklamayı deneyin.':'Do more than memorize the term: explain in your own words how a request, data item, or code change travels through the system.'}</p></div>
    </div>
    ${resourceCard}
    ${nav}
  `;
  enhanceTechnicalTerms(id);
  window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
}

let quizState = {step:-1, answers:[], participant:null};
let quizTimerInterval = null;
const QUIZ_STORAGE_KEY = 'iceberg_quiz_session_v1';

function saveQuizState(){
  try{ sessionStorage.setItem(QUIZ_STORAGE_KEY,JSON.stringify(quizState)); }
  catch(error){ console.warn('Quiz progress could not be saved:',error); }
}

function restoreQuizState(){
  try{
    const saved=JSON.parse(sessionStorage.getItem(QUIZ_STORAGE_KEY));
    const valid=saved
      && Array.isArray(saved.questions) && saved.questions.length===QUIZ_SIZE
      && saved.questions.every(q=>q && typeof q.question==='string' && typeof q.topic==='string'
        && typeof q.hint==='string' && Array.isArray(q.options) && q.options.length===4
        && q.options.every(option=>typeof option==='string') && Number.isInteger(q.answer) && q.answer>=0 && q.answer<4)
      && Array.isArray(saved.answers) && saved.answers.length===QUIZ_SIZE
      && saved.answers.every(answer=>answer===null || (Number.isInteger(answer) && answer>=0 && answer<4))
      && Array.isArray(saved.hintsUsed) && saved.hintsUsed.length===QUIZ_SIZE && saved.hintsUsed.every(value=>typeof value==='boolean')
      && Array.isArray(saved.visited) && saved.visited.length===QUIZ_SIZE && saved.visited.every(value=>typeof value==='boolean')
      && Array.isArray(saved.matchingItems) && saved.matchingItems.length===MATCHING_SIZE
      && saved.matchingItems.every(item=>item && typeof item.id==='string' && typeof item.definition==='string')
      && Array.isArray(saved.matchingTerms) && saved.matchingTerms.length===MATCHING_SIZE
      && saved.matchingTerms.every(term=>term && typeof term.id==='string' && typeof term.term==='string')
      && Array.isArray(saved.matchingAnswers) && saved.matchingAnswers.length===MATCHING_SIZE
      && saved.matchingAnswers.every(answer=>answer===null || saved.matchingTerms.some(term=>term.id===answer))
      && Number.isInteger(saved.step) && saved.step>=-1 && saved.step<=QUIZ_SIZE+1
      && (saved.step===-1 || (saved.participant && ['first','last','email','cube'].every(key=>typeof saved.participant[key]==='string' && saved.participant[key].trim())
        && Number.isFinite(saved.deadline) && saved.deadline>0));
    if(!valid) return false;
    if(saved.submissionStatus==='saving') saved.submissionStatus='error';
    saved.hintConfirm=null;
    quizState=saved;
    return true;
  }catch(error){
    try{ sessionStorage.removeItem(QUIZ_STORAGE_KEY); }catch(storageError){}
    return false;
  }
}

function stopQuizTimer(){
  if(quizTimerInterval){ clearInterval(quizTimerInterval); quizTimerInterval=null; }
}

function updateQuizTimer(){
  const timer=document.getElementById('quizTimer');
  if(!timer || !quizState.deadline || quizState.step<0 || quizState.step>QUIZ_SIZE) return;
  const remaining=Math.max(0,quizState.deadline-Date.now());
  const ratio=remaining/QUIZ_DURATION_MS;
  const minutes=Math.floor(remaining/60000);
  const seconds=Math.floor((remaining%60000)/1000);
  document.getElementById('quizTimerValue').textContent=`${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
  document.getElementById('quizTimerFill').style.width=`${ratio*100}%`;
  timer.classList.toggle('warning',ratio<=.33 && ratio>.1);
  timer.classList.toggle('critical',ratio<=.1);
  timer.setAttribute('aria-label',`${minutes} minutes ${seconds} seconds remaining`);
  if(remaining<=0 && quizState.step>=0){
    stopQuizTimer();
    quizState.timedOut=true;
    quizState.step=QUIZ_SIZE+1;
    renderQuizStep();
  }
}

function startQuizTimer(){
  stopQuizTimer();
  updateQuizTimer();
  if(quizState.deadline && quizState.step>=0 && quizState.step<=QUIZ_SIZE){
    quizTimerInterval=setInterval(updateQuizTimer,250);
  }
}

function resetQuiz(){
  stopQuizTimer();
  try{ sessionStorage.removeItem(QUIZ_STORAGE_KEY); }catch(error){}
  const sourceQuestions = QUIZ_QUESTIONS_EN;
  const questions = shuffleArray(sourceQuestions).slice(0,QUIZ_SIZE).map(question=>{
    const options=shuffleArray(question.options.map((text,index)=>({text,isCorrect:index===question.answer})));
    return {...question,options:options.map(option=>option.text),answer:options.findIndex(option=>option.isCorrect)};
  });
  const matchingItems=shuffleArray(MATCHING_ITEMS[QUIZ_LANGUAGE]).slice(0,MATCHING_SIZE);
  quizState = {
    step:-1, questions, matchingItems, matchingTerms:shuffleArray(matchingItems),
    answers:Array(QUIZ_SIZE).fill(null), matchingAnswers:Array(MATCHING_SIZE).fill(null),
    hintsUsed:Array(QUIZ_SIZE).fill(false), hintConfirm:null,
    visited:Array(QUIZ_SIZE).fill(false), participant:null, submissionStatus:'idle', deadline:null, timedOut:false
  };
  renderQuizStep();
}

function shuffleArray(items){
  const shuffled=[...items];
  for(let i=shuffled.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
  }
  return shuffled;
}

function getQuizScore(){
  const multipleChoiceCorrect=quizState.answers.reduce((sum,answer,index)=>sum+(answer===quizState.questions[index].answer?1:0),0);
  const matchingCorrect=quizState.matchingAnswers.reduce((sum,answer,index)=>sum+(answer===quizState.matchingItems[index].id?1:0),0);
  const correctCount=multipleChoiceCorrect+matchingCorrect;
  const hintPenalty=quizState.answers.reduce((sum,answer,index)=>sum+(answer===quizState.questions[index].answer&&quizState.hintsUsed[index]?1:0),0);
  const score=correctCount*POINTS_PER_ITEM-hintPenalty;
  return {multipleChoiceCorrect,matchingCorrect,correctCount,wrongCount:QUIZ_TOTAL_ITEMS-correctCount,hintPenalty,score};
}

async function saveQuizResult(){
  if(quizState.submissionStatus==='saving' || quizState.submissionStatus==='saved') return;
  const result=getQuizScore();
  const submissionState=quizState;
  const payload = {
    first_name: quizState.participant.first,
    last_name: quizState.participant.last,
    email: quizState.participant.email,
    cube_number: quizState.participant.cube,
    score:result.score,
    correct_count:result.correctCount,
    wrong_count:result.wrongCount,
    language: QUIZ_LANGUAGE,
    answers: quizState.questions.map((q,i)=>({
      question_number:i+1,
      topic:q.topic,
      question:q.question,
      selected_option:quizState.answers[i],
      selected_answer:q.options[quizState.answers[i]],
      correct_option:q.answer,
      correct_answer:q.options[q.answer],
      is_correct:quizState.answers[i]===q.answer,
      hint_used:quizState.hintsUsed[i],
      hint_penalty:quizState.answers[i]===q.answer&&quizState.hintsUsed[i]?1:0,
      awarded_points:quizState.answers[i]===q.answer?(quizState.hintsUsed[i]?3:4):0
    })).concat(quizState.matchingItems.map((item,index)=>({
      type:'matching',
      item_number:index+1,
      definition:item.definition,
      selected_term:quizState.matchingAnswers[index],
      correct_term:item.id,
      is_correct:quizState.matchingAnswers[index]===item.id
    })))
  };
  quizState.submissionStatus='saving';
  saveQuizState();
  updateSubmissionMessage();
  try{
    const response = await fetch(`${SUPABASE_URL}/rest/v1/quiz_results`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'apikey':SUPABASE_PUBLISHABLE_KEY,
        'Prefer':'return=minimal'
      },
      body:JSON.stringify(payload)
    });
    if(!response.ok) throw new Error(`Supabase ${response.status}`);
    if(quizState!==submissionState) return;
    quizState.submissionStatus='saved';
  }catch(error){
    if(quizState!==submissionState) return;
    console.error('Quiz result could not be saved:',error);
    quizState.submissionStatus='error';
  }
  saveQuizState();
  updateSubmissionMessage();
}

function updateSubmissionMessage(){
  const el=document.getElementById('submissionMessage');
  if(!el) return;
  const messages={
    saving:'Saving your result…',
    saved:'Your result was saved successfully.',
    error:'The result could not be saved. Check the connection and try again.'
  };
  el.textContent=messages[quizState.submissionStatus]||'';
  const retry=document.getElementById('submissionRetry');
  if(retry) retry.hidden=quizState.submissionStatus!=='error';
}

// Quiz content may contain HTML examples; display them as text, never markup.
function escapeQuizText(value){
  return String(value ?? '').replace(/[&<>"']/g, char=>({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[char]));
}

function renderQuizStep(){
  const shell = document.getElementById('quizShell');
  if(!shell) return;
  saveQuizState();
  const s = STR[QUIZ_LANGUAGE];
  if(quizState.step === -1){
    const timer=document.getElementById('quizTimer');
    if(timer) timer.hidden=true;
    shell.innerHTML = `<div class="quiz-meta"><span>20 questions + 5 matches</span><span>100 points</span></div>
      <div class="quiz-hint-notice"><strong>Hint policy</strong><span>Each multiple-choice question is worth 4 points. Revealing a hint reduces that question’s maximum score by 1 point. Incorrect or blank answers remain 0 points.</span></div>
      <div class="quiz-form">
        <div class="quiz-field"><label for="qFirst">First name *</label><input id="qFirst" autocomplete="given-name" required></div>
        <div class="quiz-field"><label for="qLast">Last name *</label><input id="qLast" autocomplete="family-name" required></div>
        <div class="quiz-field"><label for="qEmail">E-mail *</label><input id="qEmail" type="email" autocomplete="email" required></div>
        <div class="quiz-field"><label for="qCube">Cube Number *</label><input id="qCube" aria-describedby="qCubeHelp" required><small id="qCubeHelp" style="font-size:12px;color:var(--text-dim);line-height:1.5">If you’re not part of Iceberg X or aren’t a Cube yet, please enter 00.</small></div>
      </div><div class="quiz-error" id="quizError"></div>
      <button class="btn" id="quizStart">${s.quizStart}</button>`;
    document.getElementById('quizStart').onclick = ()=>{
      const participant={first:qFirst.value.trim(),last:qLast.value.trim(),email:qEmail.value.trim(),cube:qCube.value.trim()};
      if(!participant.first||!participant.last||!participant.cube||!/^\S+@\S+\.\S+$/.test(participant.email)){
        quizError.textContent='Please complete every field with valid information.'; return;
      }
      quizState.participant=participant;
      quizState.step=0;
      quizState.visited[0]=true;
      quizState.deadline=Date.now()+QUIZ_DURATION_MS;
      renderQuizStep();
      startQuizTimer();
    };
    return;
  }
  const timer=document.getElementById('quizTimer');
  if(timer) timer.hidden=false;
  if(quizState.step > QUIZ_SIZE){
    stopQuizTimer();
    if(timer) timer.hidden=true;
    const result=getQuizScore();
    shell.innerHTML=`<div class="quiz-result"><div class="quiz-topic">${escapeQuizText(quizState.participant.first)} ${escapeQuizText(quizState.participant.last)} · ${escapeQuizText(quizState.participant.cube)}</div>${quizState.timedOut?'<div class="quiz-timeout">Time is up — your current answers were evaluated.</div>':''}<div class="quiz-score">${result.score}/100</div><h2>${result.correctCount}/25 correct</h2><p>Multiple choice: ${result.multipleChoiceCorrect}/20 · Matching: ${result.matchingCorrect}/5${result.hintPenalty?` · Hint penalty: −${result.hintPenalty}`:''}</p><p id="submissionMessage" aria-live="polite"></p><button class="btn ghost" id="submissionRetry" hidden>Retry Saving</button><br><button class="btn" id="quizRestart">${s.quizRestart}</button></div>`;
    document.getElementById('quizRestart').onclick=resetQuiz;
    document.getElementById('submissionRetry').onclick=saveQuizResult;
    updateSubmissionMessage();
    saveQuizResult();
    return;
  }
  if(quizState.step===QUIZ_SIZE){
    const rows=quizState.matchingItems.map((item,index)=>`<div class="matching-row"><label for="match-${index}">${escapeQuizText(item.definition)}</label><select id="match-${index}" data-match-index="${index}"><option value="">Select a term</option>${quizState.matchingTerms.map(term=>`<option value="${escapeQuizText(term.id)}" ${quizState.matchingAnswers[index]===term.id?'selected':''}>${escapeQuizText(term.term)}</option>`).join('')}</select></div>`).join('');
    shell.innerHTML=`<div class="quiz-meta"><span>Matching · 5 / 5</span><span>100%</span></div><div class="quiz-progress"><span style="width:100%"></span></div><div class="quiz-question matching-question"><div class="quiz-topic">FINAL SECTION</div><h2>Match each concept with the correct definition.</h2><p class="matching-help">You may use the same term more than once.</p><div class="matching-list">${rows}</div></div><div class="quiz-error" id="quizError"></div><div class="quiz-actions"><button class="btn ghost" id="quizPrev">Previous</button><button class="btn" id="quizNext">${s.quizFinish}</button></div>`;
    shell.querySelectorAll('select[data-match-index]').forEach(select=>select.onchange=()=>{
      quizState.matchingAnswers[Number(select.dataset.matchIndex)]=select.value||null;
      saveQuizState();
    });
    document.getElementById('quizPrev').onclick=()=>{quizState.step=QUIZ_SIZE-1;renderQuizStep();};
    document.getElementById('quizNext').onclick=()=>{
      if(quizState.matchingAnswers.some(answer=>!answer)){quizError.textContent='Please complete every match.';return;}
      quizState.step++;renderQuizStep();
    };
    return;
  }
  const i=quizState.step, q=quizState.questions[i], selected=quizState.answers[i], hintUsed=quizState.hintsUsed[i];
  quizState.visited[i]=true;
  const dots=quizState.questions.map((_question,n)=>{
    const state=n===i?'current':(quizState.answers[n]!==null?'answered':(quizState.visited[n]?'skipped':'untouched'));
    const label=`Question ${n+1}${state==='answered'?', answered':state==='skipped'?', left blank':''}`;
    return `<button class="quiz-dot ${state}" data-question="${n}" aria-label="${label}" ${n===i?'aria-current="step"':''}><span>${n+1}</span></button>`;
  }).join('');
  const hintDialog=quizState.hintConfirm===i?`<div class="hint-confirm" role="dialog" aria-modal="true" aria-labelledby="hintConfirmTitle"><div class="hint-confirm-card"><span class="hint-confirm-icon">?</span><h3 id="hintConfirmTitle">Are you sure?</h3><p>Revealing this hint will reduce the maximum score for this question from 4 points to 3 points.</p><div class="hint-confirm-actions"><button class="btn ghost" id="hintCancel">Cancel</button><button class="btn" id="hintAccept">Yes, show hint</button></div></div></div>`:'';
  shell.innerHTML=`<div class="quiz-meta"><span>Question ${i+1} / 20</span><span>${Math.round((i+1)/QUIZ_TOTAL_ITEMS*100)}%</span></div><div class="quiz-progress"><span style="width:${(i+1)/QUIZ_TOTAL_ITEMS*100}%"></span></div>
    <div class="quiz-question"><div class="quiz-topic">${escapeQuizText(q.topic)}</div><h2>${escapeQuizText(q.question)}</h2><div class="quiz-options">${q.options.map((o,n)=>`<label class="quiz-option ${selected===n?'selected':''}"><input type="radio" name="quizAnswer" value="${n}" ${selected===n?'checked':''}><span><b>${String.fromCharCode(65+n)}.</b> ${escapeQuizText(o)}</span></label>`).join('')}</div><button class="hint-trigger ${hintUsed?'used':''}" id="hintTrigger" ${hintUsed?'disabled':''}>${hintUsed?'Hint used (−1 point)':'Show Hint (−1 point)'}</button>${hintUsed?`<div class="hint-panel show" role="note"><span>HINT</span><p>${escapeQuizText(q.hint)}</p></div>`:''}</div>
    <div class="quiz-error" id="quizError"></div><div class="quiz-actions"><button class="btn ghost" id="quizPrev" ${i===0?'disabled':''}>Previous</button><button class="btn" id="quizNext">${i===QUIZ_SIZE-1?'Continue to Matching':s.quizNext}</button></div>
    <nav class="quiz-dots" aria-label="Quiz question navigation">${dots}</nav>${hintDialog}`;
  shell.querySelectorAll('input[name="quizAnswer"]').forEach(r=>r.onchange=()=>{quizState.answers[i]=Number(r.value);renderQuizStep();});
  shell.querySelectorAll('.quiz-dot').forEach(dot=>dot.onclick=()=>{quizState.step=Number(dot.dataset.question);renderQuizStep();});
  document.getElementById('quizPrev').onclick=()=>{if(i>0){quizState.step--;renderQuizStep();}};
  document.getElementById('quizNext').onclick=()=>{quizState.step++;renderQuizStep();};
  document.getElementById('hintTrigger').onclick=()=>{quizState.hintConfirm=i;renderQuizStep();};
  if(quizState.hintConfirm===i){
    document.getElementById('hintCancel').onclick=()=>{quizState.hintConfirm=null;renderQuizStep();};
    document.getElementById('hintAccept').onclick=()=>{quizState.hintsUsed[i]=true;quizState.hintConfirm=null;renderQuizStep();};
    document.getElementById('hintAccept').focus();
  }
}

function renderQuiz(){
  const s = STR[QUIZ_LANGUAGE];
  document.getElementById('app').innerHTML = `
    <div class="crumbs"><a href="#/">${s.allTopics}</a><span class="sep">/</span><span class="current">Quiz</span></div>
    <div class="hero" style="padding-top:26px; padding-bottom:20px;">
      <div class="eyebrow">${s.quizTag}</div>
      <h1>${s.quizTitle}</h1>
      <p class="lede">${s.quizDesc}</p>
    </div>
    <div class="quiz-timer" id="quizTimer" hidden role="timer" aria-live="off">
      <div class="quiz-timer-track"><span id="quizTimerFill"></span></div>
      <div class="quiz-timer-value" id="quizTimerValue">30:00</div>
    </div>
    <div class="quiz-shell" id="quizShell"></div>
  `;
  if(restoreQuizState()){
    renderQuizStep();
    if(quizState.deadline && quizState.step>=0 && quizState.step<=QUIZ_SIZE) startQuizTimer();
  }else{
    resetQuiz();
  }
}

function renderFAQ(){
  const s = STR[LANG];
  let faqs = '';
  FAQS.forEach((f,i)=>{
    const fl = f[LANG];
    faqs += `
    <div class="faq-item" data-i="${i}">
      <button class="faq-q">${fl.q}<span class="plus">+</span></button>
      <div class="faq-a"><p>${fl.a}</p></div>
    </div>`;
  });
  document.getElementById('app').innerHTML = `
    <div class="crumbs"><a href="#/">${s.allTopics}</a><span class="sep">/</span><span class="current">${s.faqTitle}</span></div>
    <div class="hero" style="padding-top:26px; padding-bottom:10px;">
      <div class="eyebrow">${s.faqTag}</div>
      <h1>${s.faqTitle}</h1>
    </div>
    <div class="faq-list">${faqs}</div>
    <div style="margin-top:30px;"><a class="btn ghost" href="#/">${s.backHome}</a></div>
  `;
  document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click', ()=> btn.parentElement.classList.toggle('open'));
  });
}

function render(){
  buildDrawer();
  document.getElementById('langtoggle').querySelectorAll('button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang===LANG);
  });
  document.querySelectorAll('[data-t]').forEach(el=>{
    el.textContent = STR[LANG][el.dataset.t];
  });

  const hash = location.hash || '#/';
  document.getElementById('langtoggle').hidden=hash.startsWith('#/quiz');
  if(!hash.startsWith('#/quiz')) stopQuizTimer();
  const topicMatch = hash.match(/^#\/topic\/(\d+)/);
  closeDrawer();
  if(topicMatch){
    renderTopic(parseInt(topicMatch[1],10));
  } else if(hash.startsWith('#/quiz')){
    renderQuiz();
  } else if(hash.startsWith('#/faq')){
    renderFAQ();
  } else {
    renderHome();
  }
}

/* ======================================================================
   EVENTS
====================================================================== */
document.getElementById('hamburger').addEventListener('click', ()=>{
  const d = document.getElementById('drawer');
  d.classList.contains('show') ? closeDrawer() : openDrawer();
});
document.getElementById('drawerClose').addEventListener('click', closeDrawer);
document.getElementById('scrim').addEventListener('click', closeDrawer);
document.getElementById('langtoggle').addEventListener('click', (e)=>{
  const btn = e.target.closest('button');
  if(btn) setLang(btn.dataset.lang);
});
window.addEventListener('hashchange', render);
window.addEventListener('load', render);
document.documentElement.lang = LANG;
render();
