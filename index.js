document.addEventListener('DOMContentLoaded', function () {
  // GSAP animációk
  gsap.to('.main-image', {
    opacity: 1,
    y: 20,
    duration: 1,
    ease: 'power2.out',
    delay: 1,
  });

  gsap.to('.main-image', {
    y: 0,
    duration: 1,
    ease: 'power2.out',
  });

  gsap.to('.title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 1.5,
  });

  gsap.to('.title', {
    y: 5,
    duration: 1,
    ease: 'power2.out',
    opacity: 0,
  });

  gsap.to('.text-overlay', {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 1,
  });

  gsap.to('.text-overlay', {
    x: 50,
    duration: 1,
    ease: 'power2.out',
  });

  gsap.to('.small-image', {
    opacity: 1,
    x: 30,
    duration: 1,
    ease: 'power2.out',
    delay: 1.2,
  });

  gsap.to('.small-image', {
    x: 0,
    duration: 1,
    ease: 'power2.out',
  });

  gsap.set('.login-form', {
    opacity: 0,
    y: 20,
  });

  gsap.to('.login-form', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 1,
  });

  gsap.set('.contact2', {
    opacity: 0,
    y: 20,
  });

  gsap.to('.contact2', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
  });

  gsap.set('.name', {
    opacity: 0,
    y: 20,
  });

  gsap.to('.name', {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'power2.out',
    delay: 1.8,
  });
  gsap.set('.email', {
    opacity: 0,
    y: 20,
  });

  gsap.to('.email', {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'power2.out',
    delay: 2,
  });

  gsap.set('.message', {
    opacity: 0,
    y: 20,
  });

  gsap.to('.message', {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'power2.out',
    delay: 2.1,
  });

  gsap.set('.login-btn', {
    opacity: 0,
    y: 20,
  });

  gsap.to('.login-btn', {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'power2.out',
    delay: 2.5,
  });

  gsap.set('.name', {
    opacity: 0,
    y: 20,
  });

  gsap.to('.name', {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'power2.out',
    delay: 1.8,
  });
  gsap.to('label.navigation_button', {
    opacity: 1,
    y: 20,
    duration: 1,
    ease: 'power2.out',
    delay: 2,
  });

  gsap.to('label.navigation_button', {
    y: 0,
    duration: 1,
    ease: 'power2.out',
  });

  gsap.set('.name', {
    opacity: 0,
    y: 20,
  });

  gsap.to('.name', {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'power2.out',
    delay: 1.8,
  });

  //////asdsad

  const languageDropdown = document.getElementById('language-dropdown');
  let languageData;

  function loadLanguageData(language) {
    // AJAX vagy más módon betöltöd a nyelvi adatokat
    if (language === 'en') {
      languageData = {
        greeting: 'Hi, I am Apollónia',
        intro: `a passionate creator in the world of web development and design. Through innovative solutions and a keen eye for aesthetics, I bring your ideas to life online. Let's embark on a
         journey to make your digital presence extraordinary together. Your vision, my expertise –a perfect match for crafting exceptional websites!`,
        introSec: `Together, let's sculpt a digital masterpiece that mirrors your vision and captivates the online stage. Welcome to a fusion of style, technology, and boundless creativity.`,
        about: ` My journey began draped in threads of creativity, navigating the world of haute couture. However, the winds of change, guided by the pandemic, led me to a new frontier—web design. From stitches to pixels, I immersed myself in the artistry of digital landscapes. What started as a diversion became a fervent exploration, a journey beyond fashion,
        embracing the entire tapestry of web development and now, it's not just a profession; it's my
        passion.`,
        aboutSec: `My goal? To assist those whose dreams hinge on a creatively imagined and functional website. Let's bridge the gap between imagination and reality, crafting digital spaces that define your brand. Join me on this odyssey of turning visions into captivating online experiences. Explore my frontend portfolio and browse through my past projects and upcoming web design templates set to launch soon. Dive into the dynamic world of my work, where innovation meets client satisfaction.`,
        promoText: `Take your first step toward your very first website`,
        promoSub: `what would happen if you say "YES"?,`,
        promoTextLeft: `how would having an updated, professional looking website that represents you and your work impact? sition you in your industry? how would it impact the way potential clients see you and your work? don't allow what feels foreign in this moment to keep you from experiencing golden opportunities.`,
        promoTextSecond: ``,
        promoTextThird: `divine connection. the days of being frustrated about your brand and website in the past. it's time to step into a new era of success and reach your full potential. your talent and calling is to great to continue to play it small. the solution to your problem is finally here.`,
        promoTextThirds: `in a matter of days, you could be launching your new website and stepping into the next era of success.`,
        businessTitle: `Empower Your Business`,
        businessSub: `In the ever-evolving landscape of the digital world, your business deserves more than just a website—it deserves an immersive online experience. Whether you're envisioning a bespoke website, a captivating welcome page, or exploring unique ideas to enhance your brand, I specialize in crafting personalized, cutting-edge web solutions. In today's diverse digital landscape, your online presence should captivate audiences on every screen. With a commitment to responsive design, I ensure your website delivers an exceptional viewing experience on both mobile and desktop devices.`,
        businessSubSec: `Ready to kickstart your business journey? I'm here to turn your vision into a compelling reality.`,
        businessBtn: `last projects`,
        frontendTitle: `My Frontend Journey`,
        frontendSub: `While my initial focus lies in frontend technologies, I would gladly explore the backend as well. Engage with my work, where I prioritize responsiveness, adopt the latest technologies, and strive for a harmonious blend of aesthetics and functionality.`,
        frontendSec: `As you navigate through, envision not just a portfolio but a demonstration of my commitment to staying at the forefront of web development. Visit my portfolio to witness firsthand how I turn challenges into opportunities.`,
        templateTitleMain: `Soon Available – Web Design Templates`,
        templateSubMain: `Like a virtual canvas, these templates are not just pre-made designs; they're a dynamic toolkit. Personalize every detail - from colors to fonts, creating a bespoke and modern user interface. Imagine a platform as versatile as Squarespace, as customizable as WordPress, or as user-friendly as Showit. Whether you want to take the reins and build it yourself or leave it entirely to me, your dream website will soon be just a click away`,
        templateBtn: `Templates`,
        serviceIntro: `Here's a glimpse of the puzzle pieces I'm sharing with you, and there's so much more waiting to unfold. For additional details and the full picture, connect with me. For more, reach out—let's dive deeper into what lies ahead.`,
        serviceTitle1: `Web-Focused UI/UX`,
        serviceDescription1: `Enhancing your website's design and functionality for an intuitive and enjoyable user experience`,
        serviceTitle2: `Web Integrations`,
        serviceDescription2: `Connecting your website with external tools and services to expand its capabilities.`,
        serviceTitle3: `Content Writing`,
        serviceDescription3: `Crafting compelling and informative text content to engage and inform your website visitors.`,
        serviceTitle4: `Hosting`,
        serviceDescription4: `Providing the necessary infrastructure to make your website accessible and available on the internet`,
        serviceTitle5: `Mobile Friendly Design`,
        serviceDescription5: `Designing projects to ensure a smooth and user-friendly experience on various devices, including mobile phones and tablets like iPads.`,
        serviceTitle6: `Newest Technologies`,
        serviceDescription6: `Experience a digital transformation as I harness the power of the latest tools and solutions, providing you with cutting-edge web development`,
        contactBtn: `Let's work together`,
        ambitiosText: `Luxury products designed for ambitious and gorgeous individuals`,
        backToTopBtn: `Back to Top ⬆ `,
        contactText: `Contact`,
        contactTextSub: `Curious or have ideas? Connect and collaborate by dropping me an email. Let's bring your visions to life!"`,
        navHome: `Home`,
        navTemplates: `Templates`,
        navContact: `Contact`,
        navWorks: `Works`,
        workPageTitle: `Embark on a visual journey through my most recent works`,
        workPageDescription: ` A dedicated online platform crafted for fitness enthusiasts and professionals alike.`,
        workPageDescription1: ``,
        workPageDescription2: `This website serves serves as a gateway to cutting-edge technological solutions, offering a glimpse into the future of innovative digital experiences.`,
        workPageDescription3: `This platform is János's curated photography showcase, inviting you to explore the artistry through captivating visuals`,
        workPageBtnLink: `Preparing for Launch`,
        workPageVisitBtn: `Visit Website`,
        workPageBtn: `Portal to Home`,
        templateTitle: `Craft a stunning website without coding `,
        templateSub: `all my templates offer seamless customization and pre-designed UI blocks.Simplify your online presence with style!`,
        templateCardTitle1: `Skincare Template Unveiled`,
        templateCardTitle2: `Coffee Shop Template Unveiledt`,
        templateCardTitle3: `Photography Template Unveiledt`,
        templateCardText1: `This website template is dedicated to introducing a curated selection of skincare products designed to enhance your natural beauty.`,
        templateCardText2: `From the rich aroma of freshly ground beans to the cozy ambiance, this template invites visitors to savor every sip.`,
        templateCardText3: `Discover the blend of aesthetics and functionality in this template, designed to showcase your photographic journey with elegance and style.`,
        templateCardBtbn: `SOLD OUT`,
        templateDescription1: `Imagine a website template as a unique design concept for your online space. These templates are like ready-made blueprints, and typically, there are about 10 variations available. They serve as a fantastic starting point for your website. Now, if you want a personalized touch or have specific preferences, I offer the option to create a custom template just for you. In this case, I craft a tailored design to match your vision, and the process usually takes 1-3 days. Once it's ready, you can enjoy your very own website with the flexibility to change content whenever you want.`,
        templateDescription2: `I am about to launch new templates, available for purchase on Etsy. These new templates are crafted with care and attention to detail, ensuring a seamless and visually appealing experience for your visitors. Feel free to reach out if you have any questions or need assistance. Farawell, and thank you for making Divine Inborn Studio a part of your digital story! ♡`,
        contactPageTitle: `Get in touch!`,
        contactPageMessage: `Message`,
        contactPageName: `Name`,
        contactPageEmail: `Email`,
        contactPageBtn: `Send`,
      };
    } else if (language === 'hu') {
      languageData = {
        greeting: 'Szia! Apollónia vagyok',
        intro:
          'Egy szenvedélyes alkotó  a webfejlesztés és dizájn világában. Innovatív megoldásokkal és esztétikai érzékkel az ötleteidet valósítom meg az online térben. Együtt vállalkozzunk arra, hogy digitális jelenléted rendkívülivé váljon. A te elképzeléseid, az én szakértelmem – tökéletes párosítás kivételes weboldalak létrehozásához!',
        introSec: `Formáljunk együtt egy digitális remekművet, ami tükrözi a te elképzeléseidet, és lenyűgözi az online színpadot. Üdvözöllek egy stílus, technológia és határtalan kreativitás összefonódásában.`,
        about: `Az utazásom kreativitás szálakba burkolva kezdődött, a haute couture világát járva be. Azonban a változás szelei, amelyeket a járvány irányított, egy új határ felé vezettek — a webdesign felé. A varrásoktól a pixelekig belemerültem a digitális tájfestés művészetébe. Ami kezdetben eltérítés volt, az szenvedélyes felfedezéssé vált, egy utazássá a divat határain túl, az egész webfejlesztés szövetét átfonva, és most már ez nem csak egy szakma; ez az én szenvedélyem.`,
        aboutSec: `Hogy mi a célom? Segíteni azoknak, akik álmaikat egy kreatívan elképzelt és funkcionális weboldalhoz kapcsolják. Hozzuk létre az elképzelésed és valóság közötti hidat, olyan digitális terek kialakításával, amelyek meghatározzák a márkádat. Csatlakozz hozzám ezen odüsszeiában, ahol a víziókat lenyűgöző online élményekké alakítjuk. Fedezd fel frontend portfóliómat, böngészd át korábbi projekteimet és hamarosan induló webdesign sablonjaimat. Mergelj be a munkáim dinamikus világába, ahol az innováció találkozik az ügyfél elégedettségével.`,
        promoText: `Indulj el az első lépéseid felé, hogy létrehozd az első weboldaladat!`,
        promoSub: `mi történne, ha azt mondanád: "IGEN"?`,
        promoTextLeft: `Hogyan befolyásolná az, ha frissített, szakmailag megjelenő weboldalad lenne, amely téged és munkádat képviseli? Hogyan pozícionálná magad az iparágadban? Hogyan befolyásolná azoknak a potenciális ügyfeleknek a véleményét, akik látnak téged és a munkádat?`,
        promoTextSecond: `Csak jó dolgok származhatnak az újítástól. Ne engedd meg, hogy az, ami most idegennek tűnik, akadályozzon meg abban, hogy arany lehetőségeket tapasztalj meg.`,
        promoTextThird: ` Azok a napok, amikor frusztrált voltál a márkáddal és a weboldaladdal, már a múlté. Ideje belépned az új siker korszakába és elérned a teljes potenciálodat. A tehetséged és hivatásod túl nagy ahhoz, hogy továbbra is kicsiben gondolkodj. A problémádra végre itt a megoldás.`,
        promoTextThirds: ` Néhány nap alatt elindíthatod az új weboldaladat és beléphetsz a következő siker korszakába.`,
        businessTitle: `Erősítsd meg az üzletedet!`,
        businessSub: `A digitális világ folyamatos fejlődése során az üzleted többet érdemel csupán egy weboldalnál - egy elbűvölő online élményt. Legyen szó egyedi weboldalról, lenyűgöző üdvözlő oldalról, vagy olyan egyedi ötletek felfedezéséről, amelyek fokozzák a márkádat, én szakosodva személyre szabott és élvonalbeli webes megoldások készítésére. A mai változatos digitális környezetben az online jelenlétednek minden képernyőn lenyűgözőnek kell lennie. A rugalmas dizájn iránti elkötelezettségemmel biztosítom, hogy a weboldalad kivételes nézeti élményt nyújtson mind mobil-, mind asztali eszközökön.`,
        businessBtn: `Legutóbbi munkáim`,
        businessSubSec: `Készen állsz elindítani vállalkozásod útját? Itt vagyok, hogy a látomásod izgalmas valósággá változtassam.`,
        frontendTitle: `Frontend Utazásom`,
        frontendSub: `Mélyedj el a munkáimban, ahol a webfejlesztés dinamikus világába merülök. Bár eredeti fókuszom a frontend technológiákra irányul, szívesen tanulnék a backend területéről is. Ismerd meg a munkáimat, ahol a reszponzivitásra helyezem a hangsúlyt, alkalmazom a legújabb technológiákat, és törekszem az esztétika és funkcionalitás harmonikus egyesítésére.`,
        frontendSec: ` Ahogy navigálsz, ne csak egy portfóliót képzelj el, hanem az elkötelezettségem bemutatását a webfejlesztés élén maradása iránt. Látogasd meg a portfóliómat, hogy első kézből tapasztald meg, hogyan változtatom kihívásokat lehetőségekké.`,
        templateTitle: `Hamarosan elérhető - Webdesign sablonok`,
        templateSub: `Mint egy virtuális vászon, ezek a sablonok nem csak előre elkészített tervek; egy dinamikus eszközkészlet. Személyre szabhatod minden részletét - a színektől a betűtípusokig, létrehozva egyedi és modern felhasználói felületet. Képzeld el egy olyan platformot, amely annyira sokoldalú, mint a Squarespace, annyira testreszabható, mint a WordPress, vagy annyira felhasználóbarát, mint a Showit. Akár magad akarod építeni, akár teljesen rám bízod, az álomweboldalad csak egy kattintásnyira van.`,
        templateBtn: `Sablonok`,
        serviceIntro: `Íme egy pillantás arra, hogy milyen puzzle-darabokat osztok meg veled, és még sok más vár arra, hogy kibontakozzon. További részletekért és a teljes képért kapcsolatba léphetsz velem. Ha többet szeretnél tudni, keress bátran – merüljünk el együtt abban, ami előttünk áll.`,
        serviceTitle1: ` Webcentrikus felhasználói felület/élmény`,
        serviceDescription1: `A weboldal tervezésének és funkcionalitásának fejlesztése az intuitív és élvezetes felhasználói élmény érdekében.`,
        serviceTitle2: `Web Integrációk`,
        serviceDescription2: `Weboldalad kapcsolódása külső eszközökhöz és szolgáltatásokhoz annak képességeinek kiterjesztése érdekében.`,
        serviceTitle3: `Tartalomírás`,
        serviceDescription3: `Lenyűgöző és informatív szövegtartalom készítése annak érdekében, hogy megragadja és tájékoztassa a weboldallátogatókat.`,
        serviceTitle4: `Hosting`,
        serviceDescription4: `A szükséges infrastruktúra biztosítása annak érdekében, hogy a weboldalad elérhető és hozzáférhető legyen az interneten`,
        serviceTitle5: `Mobilbarát tervezés`,
        serviceDescription5: `A projektek tervezése annak érdekében, hogy zökkenőmentes és felhasználóbarát élményt biztosítson különböző eszközökön, beleértve a mobiltelefonokat és táblagépeket, például az iPad-et.`,
        serviceTitle6: `Legújabb technológiák`,
        serviceDescription6: `Tapasztald meg a digitális átalakulást, amint kihasználom a legújabb eszközök és megoldások erejét, és korszerű webfejlesztést nyújtok számodra.`,
        contactBtn: `Dologzzunk együtt!`,
        ambitiosText: `Luxus termékek ambiciózus és gyönyörű egyének számára tervezve`,
        backToTopBtn: `Vissza a tetejére ⬆️`,
        contactText: `Kapcsolat`,
        contactTextSub: `Kíváncsi vagy vagy van ötleted? Írj és mükődj együtt velem egy e-mail küldésével.`,
        navHome: `Főoldal`,
        navTemplates: `Sablonok`,
        navContact: `Kapcsolat`,
        navWorks: `Munkáim`,
        workPageTitle: `Indulj el egy vizuális utazáson legfrissebb munkáimon keresztül.`,
        workPageDescription: `Egy odaadó online platform, amelyet fitness rajongók és szakemberek egyaránt számára terveztek.`,
        workPageBtn: `Vissza a Főoldalra`,
        workPageDescription1: ``,
        workPageDescription2: `Ez a weboldal egy kaput szolgáltat a legújabb technológiai megoldásokhoz, betekintést nyújtva az innovatív digitális élmények jövőjébe.`,
        workPageDescription3: `Ez a platform János gondosan összeállított fotókiállítása, amely arra hívja fel a figyelmet, hogy fedezze fel a művészetet lenyűgöző vizuális elemeken keresztül.`,
        workPageBtnLink: `Hamarosan..`,
        workPageVisitBtn: `Megtekintés`,
        templateTitle: `Készíts lenyűgöző weboldalt kódolás nélkül`,
        templateSub: ` Minden sablonom sima testreszabhatóságot és előre tervezett felhasználói felületi blokkokat kínál. Egyszerűsítsd online jelenléted stílussal!`,
        templateCardTitle1: `Bőrápolási sablon bemutatva`,
        templateCardTitle2: `Kávézó Sablon Bemutatva`,
        templateCardTitle3: `Fotógaléria Sablon Bemutatva`,
        templateCardText1: `Ez a weboldal sablon arra szentelve, hogy bemutasson egy gondosan összeállított válogatást bőrápolási termékekből, melyek célja természetes szépséged fokozása.`,
        templateCardText2: `A frissen őrölt kávé bájos illatától kezdve a hangulatos környezetig ez a sablon arra ösztönzi a látogatókat, hogy élvezzék minden kortyot.`,
        templateCardText3: `Fedezd fel az esztétika és funkcionalitás elegáns keverékét ebben a sablonban, amelyet azért terveztek, hogy a fotós utadat stílusosan és elegánsan mutassa be.`,
        templateCardBtbn: `ELFOGYOTT`,
        templateDescription1: `Képzeld el egy weboldal sablont, mint egyedi design koncepciót az online tér számára. Ezek a sablonok olyanok, mintha előre elkészített vázlatok lennének, és általában körülbelül 10 variáció áll rendelkezésre. Fantasztikus kiindulópontot nyújtanak a weboldaladnak. Most, ha személyre szabott érintésre vágysz, vagy konkrét preferenciáid vannak, lehetőséged van egyedi sablon készítésére is. Ebben az esetben egy személyre szabott design-t hozok létre, amely megfelel a te elképzeléseidnek, és a folyamat általában 1-3 napot vesz igénybe. Amikor elkészül, élvezheted a saját weboldaladat azzal a lehetőséggel, hogy bármikor megváltoztathatod a tartalmat, amikor csak szeretnéd.`,
        templateDescription2: `Nemsokára elérhetők lesznek vásárlásra az új sablonjaim az Etsy oldalamon keresztül. Ezeket  gondosan és részletességgel terveztem, hogy zökkenőmentes és látványos élményt nyújtsanak a látogatóidnak. Ne habozz megkeresni, ha kérdéseid vannak, vagy segítségre van szükséged. Viszontlátásra, és köszönöm, hogy a Divine Inborn Studio részévé váltál digitális történetednek! ♡`,
        contactPageTitle: `Lépj kapcsolatba velem!`,
        contactPageMessage: `Üzenet`,
        contactPageName: `Név`,
        contactPageEmail: `Email cím`,
        contactPageBtn: `Küldés`,
      };
    }
  }

  function translateContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach((element) => {
      const key = element.getAttribute('data-translate');
      if (languageData && languageData[key]) {
        element.innerText = languageData[key];
      }
    });
  }

  function changeLanguage(language, updateStorage = false) {
    loadLanguageData(language);
    translateContent();

    if (updateStorage) {
      localStorage.setItem('selectedLanguage', language);
    }
  }
  languageDropdown.addEventListener('change', function () {
    const selectedLanguage = languageDropdown.value;
    changeLanguage(selectedLanguage, true);
  });

  window.addEventListener('load', function () {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      changeLanguage(storedLanguage);
    }
  });

  // URL paraméter alapján történő beállítás
  window.addEventListener('load', function () {
    const url = new URL(window.location.href);
    const langParam = url.searchParams.get('lang');
    if (langParam) {
      changeLanguage(langParam);
    }
  });

  changeLanguage('en');
});

// FORM VALIDATION AND SUBMISSION

function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  document.getElementById('nameError').innerHTML = '';
  document.getElementById('emailError').innerHTML = '';

  if (name.trim() === '') {
    document.getElementById('nameError').innerHTML = 'Name is required';
    return;
  }

  if (email.trim() === '') {
    document.getElementById('emailError').innerHTML = 'Email is required';
    return;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').innerHTML = 'Invalid Email format';
    return;
  }

  var formData = {
    name: name,
    email: email,
    message: document.getElementById('message').value,
  };

  fetch('https://getform.io/f/97facff9-3ed8-46bc-abc8-031a10c61426', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.text())
    .then((data) => {
      if (data.includes('success')) {
        alert(
          'Hooray! Your message just landed in my inbox. 🚀 I am excited to read it and will get back to you in a heartbeat.✨'
        );
      } else {
        alert('Form submission failed. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
      alert('Form submission failed. Please try again.');
    });
}
