// Munculkan text box lepas 0.5s
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const textBox = document.getElementById("aboutText");
    textBox.style.opacity = "1";
  }, 500);

  // Dropdown Translate Logic
  const toggleBtn = document.getElementById("translateToggle");
  const menu = document.getElementById("languageMenu");

  // Text translation data
  const translations = {
    English: "Hi, my name is NUR NATASHA BATRISYIA BINTI NAZRIN. I am from Kuala Lumpur. I am continuing my studies at UiTM Alor Gajah in the field of Digital Media Communication. I started getting interested in reading novels when I was 15. The first novel I read was Dr Alpha Male. For me, reading is not just a hobby, but also a space to relax, learn, and grow. Every book opens the door to a new world, whether it's a magical fiction or knowledge that expands my thinking. It helps me understand different perspectives, enhances creativity, and enriches the way I think and communicate. For me, reading is the best way to understand the world and myself.",
    Malay: "Hai, nama saya NUR NATASHA BATRISYIA BINTI NAZRIN. Saya asal dari Kuala Lumpur. Saya menyambung pengajian saya di UiTM Alor Gajah dalam bidang Komunikasi Media Digital. Saya mula minat membaca novel ketika saya berumur 15 tahun. Novel pertama yang saya baca ialah Dr Alpha Male. Membaca bagi saya bukan sekadar hobi tetapi ia juga merupakan ruang untuk saya berehat, belajar dan berkembang. Setiap buku membuka pintu kepada dunia baru, sama ada dunia fiksyen yang penuh keajaiban atau pengetahuan yang memperluaskan pemikiran saya. Ia membantu saya memahami pelbagai perspektif, meningkatkan kreativiti serta memperkaya cara saya berfikir dan berkomunikasi. Bagi saya, membaca ialah cara terbaik untuk mengenal dunia dan diri sendiri.",
	Chinese: "你好，我叫NUR NATASHA BATRISYIA BINTI NAZRIN，来自吉隆坡。我正在UiTM Alor Gajah学习数字媒体传播专业。我在15岁时开始喜欢阅读小说，第一本读的小说是《Dr Alpha Male》。对我来说，阅读不仅仅是爱好，更是让我放松、学习和成长的空间。每一本书都为我打开一个新世界的大门，无论是充满魔力的虚构世界，还是拓展思维的知识。它帮助我理解不同的观点，提升创造力，并丰富我思考和沟通的方式。对我来说，阅读是认识世界和自我的最佳方式。",
	Tamil: "வணக்கம், என் பெயர் நூர் நடாஷா பாட்ரிசியா பிந்தி நஸ்ரின். நான் கோலாலம்பூரைச் சேர்ந்தவன். நான் டிஜிட்டல் மீடியா கம்யூனிகேஷன் துறையில் UiTM அலோர் கஜாவில் என் படிப்பைத் தொடர்கிறேன். எனக்கு 15 வயதாக இருந்தபோது நாவல்களைப் படிப்பதில் ஆர்வம் ஏற்படத் தொடங்கியது. நான் படித்த முதல் நாவல் டாக்டர் ஆல்பா மாலே. எனக்கு, வாசிப்பு என்பது ஒரு பொழுதுபோக்கு மட்டுமல்ல, ஓய்வெடுக்கவும், கற்றுக்கொள்ளவும், வளரவும் ஒரு இடமாகும். ஒவ்வொரு புத்தகமும் ஒரு புதிய உலகத்திற்கான கதவைத் திறக்கிறது, அது ஒரு மாயாஜால புனைகதையாக இருந்தாலும் சரி அல்லது என் சிந்தனையை விரிவுபடுத்தும் அறிவாக இருந்தாலும் சரி. இது வெவ்வேறு கண்ணோட்டங்களைப் புரிந்துகொள்ளவும், படைப்பாற்றலை மேம்படுத்தவும், நான் சிந்திக்கும் மற்றும் தொடர்பு கொள்ளும் விதத்தை வளப்படுத்தவும் உதவுகிறது. எனக்கு, உலகத்தையும் என்னையும் புரிந்துகொள்ள வாசிப்பு சிறந்த வழியாகும்.",
    Japanese: "こんにちは、私の名前はNUR NATASHA BATRISYIA BINTI NAZRINです。私はクアラルンプール出身です。UiTMアロールガジャでデジタルメディアコミュニケーションを専攻しています。15歳の時に小説を読むことに興味を持ち始め、最初に読んだ小説は「Dr Alpha Male」でした。読書は単なる趣味ではなく、私にとってはリラックスし、学び、成長するための空間です。あらゆる本が新しい世界への扉を開きます。それは魔法のようなフィクションの世界であったり、思考を広げる知識の世界であったりします。読書はさまざまな視点を理解し、創造力を高め、思考とコミュニケーションの方法を豊かにするのに役立ちます。私にとって読書は、世界と自分自身を知るための最良の方法です。",
    Korean: "안녕하세요, 저는 누르 나타샤 바트리시아 빈티 나즈린입니다. 쿠알라룸푸르 출신입니다. UiTM 알로르 가자에서 디지털 미디어 커뮤니케이션 전공을 계속 공부하고 있습니다. 15살 때부터 소설 읽기에 관심을 갖기 시작했습니다. 제가 처음 읽은 소설은 <알파 메일 박사>였습니다. 저에게 독서는 단순한 취미가 아니라, 휴식을 취하고 배우고 성장하는 공간입니다. 마법 같은 소설이든, 생각을 넓혀주는 지식이든, 모든 책은 새로운 세계로 통하는 문을 열어줍니다. 다양한 관점을 이해하고, 창의력을 키우고, 생각하고 소통하는 방식을 풍요롭게 해 줍니다. 저에게 독서는 세상과 저 자신을 이해하는 가장 좋은 방법입니다.",

  };

  const textBox = document.getElementById("aboutText");

  // Toggle dropdown
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  // Pilih bahasa → tukar isi
  document.querySelectorAll("#languageMenu li").forEach((item) => {
    item.addEventListener("click", () => {
      const selected = item.textContent.trim();
      if (translations[selected]) {
        textBox.innerHTML = `<p>${translations[selected]}</p>`;
      }
      menu.style.display = "none";
    });
  });

  // Tutup menu bila klik luar
  window.addEventListener("click", function (e) {
    if (!toggleBtn.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = "none";
    }
  });
});


