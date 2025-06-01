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
        intro: `As a web developer and designer, my goal is to create clear, functional, and visually refined solutions. I believe good ideas truly work when they are both technically sound and visually well-executed. I make sure your concept becomes not just visually appealing, but also stable and usable.`,
        introSec: `Unique design meets smart development.`,
        about: ` Every great project starts with an honest conversation – understanding what you want and what you truly need. Once that’s clear, the rest is “just” design and code – bringing it all to life in a way that’s genuinely about you.`,
        aboutSec: `My goal is to create a website that not only looks great and works well, but also delivers real value. I believe in solutions that highlight what makes your brand unique, attract the right audience, and support your business goals.`,
        promoText: `A site designed to suit your business.`,
        promoSub: `From here on, the focus is entirely on your brand.`,
        promoTextLeft: `The work starts with understanding your brand and goals. Then we define what content is needed and how to effectively reach your target audience.`,
        promoTextSecond: ``,
        promoTextThird: `Once the plan is in place, I get to work. I care about making sure everything works the way we imagined. I use the latest tools to keep the site fast, reliable, and easy to use.`,
        businessTitle: `Strengthen the foundation of your business`,
        businessSub: `I design and develop interfaces where visual aesthetics and functionality work in harmony.
Frontend technologies and user experience are the language I’m most fluent in.
My goal is to create websites that are clear, visually appealing, and easy to use.

`,

        businessBtn: `last projects`,
        frontendTitle: `My Frontend Journey`,
        frontendSub: `I design and develop interfaces where visual aesthetics and functionality work in harmony. Frontend technologies and user experience are the language I’m most fluent in. My goal is to create websites that are clear, visually appealing, and easy to use.`,
        frontendSec: `As you navigate through, envision not just a portfolio but a demonstration of my commitment to staying at the forefront of web development. Visit my portfolio to witness firsthand how I turn challenges into opportunities.`,
        templateTitleMain: `Soon Available – Web Design Templates`,
        templateSubMain: `These templates aren’t just pre-made solutions — they’re flexible foundations for your own website. Nearly every detail can be customized — from colors and fonts to layout — making it easy to adapt the design to your needs.`,
        templateBtn: `Templates`,
        serviceIntro: `By crafting personalized, modern websites and harnessing the latest technologies, I ensure you stand out from the digital crowd and make a lasting impression.`,
        serviceTitle1: `Web-Focused UI/UX`,
        serviceDescription1: `Designed to be simple to use and enjoyable to explore.`,
        serviceTitle3: `Content Writing`,
        serviceDescription3: `Content that supports navigation, not distraction.`,
        serviceTitle4: `Hosting`,
        serviceDescription4: `Providing the necessary infrastructure to make your website accessible and available on the internet.`,
        serviceTitle5: `Mobile Friendly Design`,
        serviceDescription5: `Responsive design for smooth use across all devices.`,
        // serviceTitle6: `Newest Technologies`,
        // serviceDescription6: `Using the latest tools and techniques to build modern, reliable websites.`,
        contactBtn: `Let's work together`,
        ambitiosText: `Bold pieces for bold people.`,
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
        templateCardTitle1: `Portfolio template`,
        templateCardTitle2: `Photography Template`,
        templateCardTitle3: `Webshop Template`,
        templateCardText1: `Perfect for anyone who wants to showcase their portfolio without starting from scratch.`,
        templateCardText2: `A ready-to-use webshop template – all it needs is your products.`,
        templateCardText3: `Discover the blend of aesthetics and functionality in this template, designed to showcase your photographic journey with elegance and style.`,
        templateCardBtbn: `SOLD OUT`,
        // templateDescription1: `Imagine a website template as a unique design concept for your online space. These templates are like ready-made blueprints, and typically, there are about 10 variations available. They serve as a fantastic starting point for your website. Now, if you want a personalized touch or have specific preferences, I offer the option to create a custom template just for you. In this case, I craft a tailored design to match your vision, and the process usually takes 1-3 days. Once it's ready, you can enjoy your very own website with the flexibility to change content whenever you want.`,
        templateDescription2: `My website templates are ready-made foundations to help you launch your online presence with ease. Choose from around 5 clean, modern designs—or request a custom one, delivered in 1–3 days. All templates are fully editable, so you can update your content anytime.

They’ll be available soon on my Etsy shop. Each design is thoughtfully created for a smooth, stylish user experience. Feel free to reach out with any questions. Farawell, and thank you for making Divine Inborn Studio a part of your digital story! ♡`,
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
          'Webfejlesztőként és dizájnerként a célom, hogy átlátható, működő és vizuálisan igényes megoldásokat készítsek. Hiszek abban, hogy a jó ötletek akkor működnek igazán, ha technikailag és vizuálisan is jól vannak kivitelezve. Gondoskodom róla, hogy az ötleted ne csak látványos, hanem stabil és használható is legyen.',
        introSec: `Egyedi design és fejlesztés `,
        about: `Minden jó munka egy őszinte beszélgetéssel kezdődik – azzal, hogy megértsem, mit szeretnél, mire van szükséged. Ha ez megvan, a többi már „csak” design és kód – vagyis a megvalósítás, ami valóban rólad szól.`,
        aboutSec: `Célom, hogy a weboldalad ne csak jól nézzen ki és működjön, hanem valódi értéket is teremtsen. Olyan megoldásokban hiszek, amelyek kiemelik a márkád egyediségét, vonzzák a látogatókat, és támogatják az üzleti céljaidat.

`,
        promoSub: `Ettől a ponttól kezdve minden a te márkádról szól.`,
        promoText: `Egy weboldal, amit a vállalkozásodhoz tervezek!`,
        promoTextLeft: `A munka azzal kezdődik, hogy megismerem a márkádat és a céljaidat. Ezután átgondoljuk, milyen tartalmakra van szükség, és hogyan szólítsuk meg hatékonyan a célközönségedet.
`,
        promoTextSecond: ``,
        promoTextThird: ` Miután elkészült a terv, nekilátok a megvalósításnak. Fontos számomra, hogy minden pontosan úgy működjön, ahogy elképzeltük. Korszerű megoldásokkal biztosítom, hogy az oldal gyors, stabil és felhasználóbarát legyen.`,
        businessTitle: `Erősítsd meg a vállalkozásod alapjait.`,
        businessSub: `Egy erős márka ma már nem létezhet jól működő weboldal nélkül. Az online jelenlét nemcsak arra ad lehetőséget, hogy megmutasd, ki vagy és mit képviselsz, hanem aktívan támogatja az ügyfelekkel való kapcsolatépítést is.`,
        // businessBtn: `Legutóbbi munkáim`,

        frontendTitle: `Frontend Utazásom`,
        frontendSub: `Olyan felületeket tervezek és fejlesztek, ahol a design és a funkcionalitás kiegyensúlyozottan működik együtt.
A frontend technológiák és a vizuális élmény közös nyelve az, amiben igazán otthon érzem magam.
Célom, hogy minden oldal egyszerre legyen átlátható, esztétikus és könnyen használható.`,
        frontendSec: ` `,
        templateTitleMain: `Hamarosan elérhető: webdesign sablonok`,
        templateSub: `Ezek a sablonok nemcsak előre elkészített megoldások, hanem rugalmas alapok egy saját weboldalhoz.
Szinte minden részlet alakítható – a színek, a betűtípusok, az elrendezés –, így az oldal könnyen igazítható a saját igényeidhez.`,
        templateBtn: `Sablonok`,
        serviceIntro: `Rendezett, egyedi és funkcionális online arculat.`,
        serviceTitle1: ` Webes környezetre szabott UI/UX`,
        serviceDescription1: `A cél egy olyan weboldal, amit könnyű átlátni és jó érzés használni.`,
        serviceTitle2: ``,
        serviceDescription2: ``,
        serviceTitle3: `Tartalomírás`,
        serviceDescription3: `Tartalom, ami nem terhel, hanem segít eligazodni.`,
        serviceTitle4: `Hosting`,
        serviceDescription4: `Megfelelő tárhely és működés az oldal zavartalan eléréséhez.`,
        serviceTitle5: `Mobilbarát tervezés`,
        serviceDescription5: `Letisztult működés minden eszközön.`,
        // serviceTitle6: `Legújabb technológiák`,
        // serviceDescription6: `A legújabb megoldásokat használom, hogy naprakész és jól működő weboldal szülessen.`,
        contactBtn: `Dolgozzunk együtt!`,
        ambitiosText: `Minimalista forma, maximális jelenlét.`,
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
        templateTitle: `Weboldalkészítés kódolás nélkül – könnyen, érthetően.`,
        templateSub: `Könnyen testreszabhatók, és kész felületi blokkokat kínálnak – így gyorsabban hozhatod létre a saját weboldalad.`,
        templateCardTitle1: `Portfólió  sablon`,
        templateCardTitle2: ` Fotós portfólió sablon `,
        templateCardTitle3: `Webshop sablon`,
        templateCardText1: `Tökéletes bárkinek, aki szeretné bemutatni a portfólióját anélkül, hogy nulláról kezdene.`,
        templateCardText2: `Ez a sablon segít abban, hogy a fotóidra essen a hangsúly – semmi fölösleges, csak letisztult megjelenés és jól átgondolt elrendezés.`,
        templateCardText3: `Egy kész webshop alap, amibe csak a termékeid hiányoznak.`,
        templateDescription2: `A weboldal sablonjaim előre elkészített alapok, amelyekkel könnyedén elindíthatod az online felületed. Kb. öt változat közül választhatsz, de ha személyre szabott megoldást szeretnél, egyedi sablont is készítek 1–3 napon belül. A tartalmakat bármikor szabadon módosíthatod.Hamarosan elérhetők lesznek az Etsy oldalamon. Minden sablont átgondoltan, letisztult stílusban terveztem, hogy egyszerű és látványos élményt nyújtson. Ha kérdésed van, írj nyugodtan – örömmel segítek. Addig is alegjobbakat kívánom, és köszönöm, hogy a Divine Inborn Studio része lehetett a digitális történetednek! ♡ 
`,
        contactPageTitle: `Kapcsolatfelvétel`,
        contactPageMessage: `Üzenet`,
        contactPageName: `Név`,
        contactPageEmail: `Email cím`,
        contactPageBtn: `Küldés`,
        templateCardBtbn: `Elfogyott`,
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
