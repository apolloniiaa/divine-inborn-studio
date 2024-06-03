document.addEventListener('DOMContentLoaded', function () {
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

  const languageDropdown = document.getElementById('language-dropdown');
  let languageData;

  function loadLanguageData(language) {
    if (language === 'en') {
      languageData = {
        greeting: 'Hi, I am Apollónia',
        intro: `as a web developer and designer, I assist in bringing your ideas to life in the online space with innovative solutions and refined aesthetic sensibility. Throughout our collaboration, your visions and my expertise converge to create stunning and effective websites. Your satisfaction is paramount to me, and I strive to exceed your expectations in every way possible.`,
        introSec: `Development of customized websites and web solutions. Welcome to a fusion of style, technology, and boundless creativity.`,
        about: ` 
        Your satisfaction is of paramount importance to me, and it is always the primary focus in every project. Before diving into the design and development process, I pay close attention to fully understanding your needs. This fundamental step allows me to approach each project with a personalized touch.`,
        aboutSec: `My goal is for the website to not only be aesthetically pleasing and functional but also to create real value and contribute to the growth and success of your brand, while achieving the best results possible. To achieve this, I implement solutions that highlight its uniqueness and attract visitors, all while optimizing the user experience and supporting business objectives.`,
        promoText: `Let's create the most outstanding website for your business!`,
        promoSub: `what would happen if you say "YES"?,`,
        promoTextLeft: `First, I thoroughly acquaint myself with your brand and objectives. Then, strategically, we determine the content needed to engage your target audience effectively and how best to reach them.`,
        promoTextSecond: `Based on the acquired knowledge, I personally design your website, taking into account the results of the surveys and the preferences of your target audience.`,
        promoTextThird: `Finally, after the design phase, comes the implementation of the website, with special attention to ensuring that every detail aligns precisely with the plans. Additionally, I will employ the latest technologies to optimize the site, ensuring maximum performance and user-friendly experience.`,
        businessTitle: `Empower Your Business`,
        businessSub: `For a brand, a well-designed website is indispensable. A well-developed online platform provides the opportunity to showcase its story, values, and products. Additionally, it adds various functionalities that can assist in building and strengthening customer relationships, thus enhancing brand authenticity and competitiveness.`,

        businessBtn: `last projects`,
        frontendTitle: `My Frontend Journey`,
        frontendSub: `While my initial focus lies in frontend technologies, I would gladly explore the backend as well. Engage with my work, where I prioritize responsiveness, adopt the latest technologies, and strive for a harmonious blend of aesthetics and functionality.`,
        frontendSec: `As you navigate through, envision not just a portfolio but a demonstration of my commitment to staying at the forefront of web development. Visit my portfolio to witness firsthand how I turn challenges into opportunities.`,
        templateTitleMain: `Soon Available – Web Design Templates`,
        templateSubMain: `Like a virtual canvas, these templates are not just pre-made designs; they're a dynamic toolkit. Personalize every detail - from colors to fonts, creating a bespoke and modern user interface. Imagine a platform as versatile as Squarespace, as customizable as WordPress, or as user-friendly as Showit. Whether you want to take the reins and build it yourself or leave it entirely to me, your dream website will soon be just a click away`,
        templateBtn: `Templates`,
        serviceIntro: `By crafting personalized, modern websites and harnessing the latest technologies, I ensure you stand out from the digital crowd and make a lasting impression.`,
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
        contactTextSub: `Curious or have ideas? Connect and collaborate by dropping me an email. Let's bring your visions to life!`,
        navHome: `Home`,
        navTemplates: `Templates`,
        navContact: `Contact`,
        navWorks: `Works`,
        workPageTitle: `Embark on a visual journey through my most recent works`,
        workPageDescription: ` On Brigi's page, captivating makeup artworks await every visitor.`,
        workPageDescription1: ``,
        workPageDescription2: `This website serves serves as a gateway to cutting-edge technological solutions, offering a glimpse into the future of innovative digital experiences.`,
        workPageDescription3: `On this page, marvelous photos await the visitor, where each image captures a unique moment.`,
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
          'Webfejlesztő és dizájnerként innovatív megoldásokkal és kifinomult esztétikai érzékkel segítek megvalósítani ötleteidet az online térben. Együttműködésünk során a te elképzeléseid és az én tapasztalatom ötvöződik, hogy lenyűgöző és hatékony weboldalakat hozzunk létre. Az elégedettséged a legfontosabb számomra, és mindent megteszek, hogy túlszárnyaljam a várakozásaidat.',
        introSec: `Egyedi igényekre szabott weboldal- és webes megoldások fejlesztése.`,
        about: `Az elégedettséged kiemelten fontos számomra, és ez mindig elsődleges szempont minden projekt során. Mielőtt nekikezdenénk a tervezésnek és fejlesztésnek, nagy figyelmet szentelek az igényeid teljes körű megértésére. Ez az alapvető lépés lehetőséget ad arra, hogy minden egyes projektet személyre szabott megközelítéssel kezeljek.`,
        aboutSec: `Célom, hogy a weboldal ne csak szép és funkcionális legyen, hanem valódi értéket teremtsen és hozzájáruljon a márkád növekedéséhez és sikeréhez, valamint a legjobb eredményeket érjük el. Ennek érdekében olyan megoldásokat alkalmazok, amelyek kiemelik az egyediségét és vonzzák a látogatókat, miközben optimalizálják a felhasználói élményt és támogatják az üzleti célokat.`,
        promoSub: `mi fog történni, ha azt mondod: "VÁGJUNK BELE"?`,
        promoText: `Készítsük el a vállalkozásod legkiemelkedőbb weboldalát!`,
        promoTextLeft: `Először megismerem a márkádat és céljaidat. Ezután stratégikusan meghatározzuk, milyen tartalmakra van szükségük a célközönségednek, és hogyan érhetjük el őket hatékonyan.`,
        promoTextSecond: `Ezután a megszerzett ismeretek alapján személyesen tervezem meg az oldaladat. Figyelembe véve a felmérések eredményeit és a célközönség preferenciáit.`,
        promoTextThird: ` Végül, a tervezési fázis után jöhet az oldal megvalósítása, kiemelt figyelmet fordítva arra, hogy minden részlet pontosan illeszkedjen a tervekhez. Emellett a legmodernebb technikákat alkalmazva optimalizálom az oldalt, hogy biztosítsam a maximális teljesítményt és a felhasználóbarát élményt.`,
        businessTitle: `Erősítsd meg az üzletedet!`,
        businessSub: `Egy márka számára elengedhetetlen egy jól megtervezett weboldal. Egy jól kidolgozott online platform lehetőséget kínál arra, hogy bemutassa történetét, értékeit és termékeit. Emellett számos funkcionalitást is hozzáad, amelyek segíthetnek az ügyfélkapcsolatok építésében és erősítésében, továbbá növeli a márkahitelességet és versenyképességet.`,
        businessBtn: `Legutóbbi munkáim`,

        frontendTitle: `Frontend Utazásom`,
        frontendSub: `Mélyedj el a munkáimban, ahol a webfejlesztés dinamikus világába merülök. Bár eredeti fókuszom a frontend technológiákra irányul, szívesen tanulnék a backend területéről is. Ismerd meg a munkáimat, ahol a reszponzivitásra helyezem a hangsúlyt, alkalmazom a legújabb technológiákat, és törekszem az esztétika és funkcionalitás harmonikus egyesítésére.`,
        frontendSec: ` Ahogy navigálsz, ne csak egy portfóliót képzelj el, hanem az elkötelezettségem bemutatását a webfejlesztés élén maradása iránt. Látogasd meg a portfóliómat, hogy első kézből tapasztald meg, hogyan változtatom kihívásokat lehetőségekké.`,
        templateTitle: `Hamarosan elérhető - Webdesign sablonok`,
        templateSub: `Mint egy virtuális vászon, ezek a sablonok nem csak előre elkészített tervek; egy dinamikus eszközkészlet. Személyre szabhatod minden részletét - a színektől a betűtípusokig, létrehozva egyedi és modern felhasználói felületet. Képzeld el egy olyan platformot, amely annyira sokoldalú, mint a Squarespace, annyira testreszabható, mint a WordPress, vagy annyira felhasználóbarát, mint a Showit. Akár magad akarod építeni, akár teljesen rám bízod, az álomweboldalad csak egy kattintásnyira van.`,
        templateBtn: `Sablonok`,
        serviceIntro: `A legújabb technológiák alkalmazásával segítek abban, hogy kitűnj a digitális tér zajából, és maradandó benyomást kelts.`,
        serviceTitle1: ` Webcentrikus felhasználói felület/élmény`,
        serviceDescription1: `A weboldal tervezésének és funkcionalitásának fejlesztése az intuitív és élvezetes felhasználói élmény érdekében.`,
        serviceTitle2: `Web Integrációk`,
        serviceDescription2: `Weboldalad kapcsolódása külső eszközökhöz és szolgáltatásokhoz annak képességeinek kiterjesztése érdekében.`,
        serviceTitle3: `Tartalomírás`,
        serviceDescription3: `Lenyűgöző és informatív szövegtartalom készítése annak érdekében, hogy megragadja és tájékoztassa a weboldallátogatókat.`,
        serviceTitle4: `Hosting`,
        serviceDescription4: `A szükséges infrastruktúra biztosítása annak érdekében, hogy a weboldalad elérhető és hozzáférhető legyen az interneten`,
        serviceTitle5: `Mobilbarát tervezés`,
        serviceDescription5: `A projektek tervezése annak érdekében, hogy zökkenőmentes és felhasználóbarát élményt biztosítson különböző eszközökön, beleértve a mobiltelefonokat is`,
        serviceTitle6: `Legújabb technológiák`,
        serviceDescription6: `Tapasztald meg a digitális átalakulást, amint kihasználom a legújabb eszközök és megoldások erejét, és korszerű webfejlesztést nyújtok számodra.`,
        contactBtn: `Dolgozzunk együtt!`,
        ambitiosText: ``,
        backToTopBtn: `Vissza a tetejére ⬆️`,
        contactText: `Kapcsolat`,
        contactTextSub: `Eljött az ideje, hogy megbeszéljük a projekted?`,
        navHome: `Főoldal`,
        navTemplates: `Sablonok`,
        navContact: `Kapcsolat`,
        navWorks: `Munkáim`,
        workPageTitle: `Indulj el egy vizuális utazáson legfrissebb munkáimon keresztül.`,
        workPageDescription: `Brigi oldalán elragadó sminkművészeti alkotások várnak majd minden látogatóra.`,
        workPageBtn: `Vissza a Főoldalra`,
        workPageDescription1: ``,
        workPageDescription2: `Ez a weboldal egy kaput szolgáltat a legújabb technológiai megoldásokhoz, betekintést nyújtva az innovatív digitális élmények jövőjébe.`,
        workPageDescription3: `Jani oldalán csodálatos fotók fogadják majd a látogatót, ahol minden kép egyedi pillanatot örökít meg.`,
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
        templateSubMain: `Mint egy virtuális vászon, ezek a sablonok nemcsak előre elkészített tervek hanem egy dinamikus eszköztár. Személyre szabhatod minden részletet - a színektől a betűtípusokig -, létrehozva egyedi és modern felhasználói felületet. Képzeld el egy olyan platformot, ami olyan sokoldalú, mint a Squarespace, olyan testre szabható, mint a WordPress, vagy olyan felhasználóbarát, mint a Showit. Akár magad szeretnéd megépíteni, akár teljesen rám bíznád, weboldalad csak egy kattintásra lesz.`,
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
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

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

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').innerHTML = 'Invalid Email format';
    return;
  }

  let formData = {
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
          'Hooray! Your message just landed in my inbox. I am excited to read it and will get back to you in a heartbeat.✨'
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

document.addEventListener('DOMContentLoaded', function () {
  var langFlag = document.querySelector('.lang-flag');
  var langDropdown = document.querySelector('.language-dropdown');
  var langListItems = document.querySelectorAll('ul.lang-list li');
  var langSelected = document.getElementById('lang_selected');

  langFlag.addEventListener('click', function () {
    langDropdown.classList.toggle('open');
  });

  langListItems.forEach(function (item) {
    item.addEventListener('click', function () {
      langListItems.forEach(function (li) {
        li.classList.remove('selected');
      });
      item.classList.add('selected');

      if (item.classList.contains('lang-en')) {
        langFlag.classList.add('lang-en');
        langFlag.classList.remove('lang-es');
        langFlag.classList.remove('lang-pt');
        langSelected.innerHTML = '<p>EN</p>';
      } else if (item.classList.contains('lang-pt')) {
        langFlag.classList.add('lang-pt');
        langFlag.classList.remove('lang-es');
        langFlag.classList.remove('lang-en');
        langSelected.innerHTML = '<p>PT</p>';
      }
      langDropdown.classList.remove('open');
    });
  });
});
