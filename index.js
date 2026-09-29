document.addEventListener('DOMContentLoaded', function () {
  // Animations need GSAP (loaded from a CDN). If it is slow/blocked, skip them instead of
  // throwing — otherwise the language restore below would never run.
  if (typeof gsap !== 'undefined') {
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

  } // end GSAP animations

  const languageDropdown = document.getElementById('language-dropdown');
  let languageData;

  function loadLanguageData(language) {
    if (language === 'en') {
      languageData = {
        greeting: 'From concept to reality!',
        intro: `Hello, I am Apollónia - a Product Designer with a frontend development background. I design websites, digital products, and brand identities with the goal of turning ideas into seamless, high-performing digital experiences. Here, you can explore my work, design approach, and professional journey.`,
        introSec: `Unique design meets smart development.`,
        about: ` Every great project starts with an honest conversation – understanding what you want and what you truly need. Once that’s clear, the rest is “just” design and code – bringing it all to life in a way that’s genuinely about you.`,
        aboutSec: `My goal is to create a website that not only looks great and works well, but also delivers real value. I believe in solutions that highlight what makes your brand unique, attract the right audience, and support your business goals.`,
        promoText: `What to expect throughout the process.`,
        promoSub: `From here on, the focus is entirely on your brand.`,
        promoTextLeft: `The first step is getting to know your business, goals, and vision. This helps me create a solution that's tailored to your brand and your needs.`,
        promoTextSecond: `
        Next, I turn your ideas into reality by creating wireframes, UI designs, and interactive prototypes, while keeping you involved throughout the process.`,
        promoTextThird: `Based on your feedback, we refine every detail together to ensure the final design is polished and visually cohesive.`,
        businessTitle: `Strengthen the foundation of your business`,
        businessSub: `I design and develop interfaces where visual aesthetics and functionality work in harmony.
Frontend technologies and user experience are the language I’m most fluent in.
My goal is to create websites that are clear, visually appealing, and easy to use.

`,

        businessBtn: `last projects`,
        frontendTitle: `Brand Identity Design`,
        frontendSub: `A logo alone does not create a complete brand identity. Consistent colors, typography, and visual elements help your business become recognizable, credible, and professional across every platform. Alongside logo design, I create a thoughtful and cohesive visual identity that represents your brand consistently both online and offline.`,
        frontendSec: `As you navigate through, envision not just a portfolio but a demonstration of my commitment to staying at the forefront of web development. Visit my portfolio to witness firsthand how I turn challenges into opportunities.`,
        templateTitleMain: `Soon Available – Web Design Templates`,
        templateSubMain: `These templates aren’t just pre-made solutions — they’re flexible foundations for your own website. Nearly every detail can be customized — from colors and fonts to layout — making it easy to adapt the design to your needs.`,
        templateBtn: `Templates`,
        serviceIntro: `Services`,
        serviceTitle1: `Web-Focused UI/UX`,
        serviceDescription1: `Designed to be simple to use and enjoyable to explore.`,
        serviceTitle3: `Landing Page Design`,
        serviceDescription3: `Whether you're launching a new brand, product, or campaign—or simply want to enhance your existing website—I design landing pages that make a strong first impression, capture attention, and support your business goals.`,
        serviceTitle4: `E-commerce Store Design`,
        serviceDescription4: `I design custom e-commerce websites that reflect your brand, provide a seamless shopping experience, and help turn visitors into customers.`,
        serviceTitle5: `Brand Identity & Logo Design`,
        serviceDescription5: `From logo design to a complete brand identity, I create visual systems that reflect your brand and make it memorable.`,
        serviceTitle6: `Custom Solutions`,
        serviceDescription6: `Have a unique idea or project in mind? Let's create a custom solution tailored to your goals and bring your vision to life.`,
        contactBtn: `Let's work together`,
        ambitiosText: `Bold pieces for bold people.`,
        backToTopBtn: `Back to Top ⬆ `,
        contactText: `Contact`,
        contactTextSub: `Curious or have ideas? Connect and collaborate by dropping me an email. Let's bring your visions to life!`,
        navHome: `Home`,
        navTemplates: `Templates`,
        navContact: `Contact`,
        navWorks: `Works`,
        workPageTitle: `Below are some of the projects I’ve worked on.`,
        workPageDescription: ` On Brigi's page, captivating makeup artworks await every visitor.`,
        workPageDescription1: ``,
        workPageDescription2: `A personal site about equestrian life and experiences.`,
        workPageDescription3: `A little magic is on the way — Unicorn Magic Brew Coffee is coming soon to Reading, England.`,
        workPageBtnLink: `Preparing for Launch`,
        workPageVisitBtn: `Visit Website`,
        workPageBtn: `Portal to Home`,
        templateTitle: `Craft a stunning website without coding `,
        templateSub: `All my templates offer seamless customization and pre-designed UI blocks. Simplify your online presence with style!`,
        templateCardTitle1: `Portfolio template`,
        templateCardTitle2: `Photography Template`,
        templateCardTitle3: `Webshop Template`,
        templateCardText1: `Perfect for anyone who wants to showcase their portfolio without starting from scratch.`,
        templateCardText2: `A ready-to-use webshop template – all it needs is your products.`,
        templateCardText3: `Discover the blend of aesthetics and functionality in this template, designed to showcase your photographic journey with elegance and style.`,
        templateCardBtbn: `Coming Soon`,
        // templateDescription1: `Imagine a website template as a unique design concept for your online space. These templates are like ready-made blueprints, and typically, there are about 10 variations available. They serve as a fantastic starting point for your website. Now, if you want a personalized touch or have specific preferences, I offer the option to create a custom template just for you. In this case, I craft a tailored design to match your vision, and the process usually takes 1-3 days. Once it's ready, you can enjoy your very own website with the flexibility to change content whenever you want.`,
        templateDescription2: `My website templates are ready-made foundations to help you launch your online presence with ease. Choose from around 5 clean, modern designs—or request a custom one, delivered in 1–3 days. All templates are fully editable, so you can update your content anytime.

They’ll be available soon on my Etsy shop. Each design is thoughtfully created for a smooth, stylish user experience. Feel free to reach out with any questions. Farewell, and thank you for making Divine Inborn Studio a part of your digital story! ♡`,
        contactPageTitle: `Get in touch!`,
        contactPageMessage: `Message`,
        contactPageName: `Name`,
        contactPageEmail: `Email`,
        contactPageBtn: `Send`,
      };
    } else if (language === 'hu') {
      languageData = {
        greeting: 'Az ötlettől a működő felületig!',
        intro:
          'Szia! Apollónia vagyok - Product Designer, frontend fejlesztői háttérrel. Weboldalakat, digitális termékeket és arculatokat tervezek. Itt beleláthatsz a munkáimba, a szemléletembe és a szakmai utamba.',
        introSec: `A design mögött bővebben`,
        about: `A frontend fejlesztés során vált számomra igazán fontossá, hogy egy digitális termék ne csak technikailag működjön, hanem vizuálisan is következetes és könnyen használható legyen. Ez a szemlélet vezetett a Product Design felé, ahol a technikai tapasztalatot kreatív és felhasználóközpontú gondolkodással kapcsolom össze.`,
        aboutSec: `Ma weboldalakat, digitális termékeket és arculatokat tervezek, miközben az AI-eszközöket is tudatosan használom a gyorsabb ötleteléshez és tervezéshez — úgy, hogy közben minden munka megőrizze az eredeti gondolatot, az egyedi karaktert és az emberi szemléletet.

`,
        promoSub: `Ettől a ponttól kezdve minden a te márkádról szól.`,
        promoText: `Lépésről lépésre a kész megoldásig.`,
        promoTextLeft: `Első lépésként egy rövid beszélgetés során megismerem a céljaidat, a márkádat és az elképzeléseidet, hogy a végeredmény valóban rólad szóljon.`,
        promoTextSecond: `
        Ezután formát adok az ötleteknek: elkészítem a wireframe-eket, a UI terveket és a prototípust, miközben folyamatosan egyeztetünk a részletekről.`,
        promoTextThird: ` A visszajelzéseid alapján közösen finomítjuk a részleteket, hogy a végeredmény vizuálisan is teljes legyen.
        
        A végleges terveket rendezett, fejlesztésre kész fájlokkal adom át, és szükség esetén a megvalósítás során is támogatást nyújtok.`,
        businessTitle: `Stabil alapok a márkádnak`,
        businessSub: `Egy átgondolt, egységes márka bizalmat épít, segít kitűnni a versenytársak közül, és professzionálisabbá teszi a megjelenésedet. Segítek olyan egységes és felismerhető megjelenést kialakítani, amely hitelesebbé teszi a márkádat, megkülönböztet másoktól, és teret ad a későbbi növekedésnek.`,
        businessBtn: `Munkáim`,

        frontendTitle: `Arculattervezés`,
        frontendSub: `A logó önmagában még nem teljes arculat. Az egységes színek, betűtípusok és vizuális elemek segítenek abban, hogy vállalkozásod felismerhető, hiteles és professzionális legyen minden felületen. A logótervezés mellett olyan átgondolt vizuális megjelenést alakítok ki, amely következetesen képviseli a márkádat online és offline egyaránt.
`,
        frontendSec: ` `,
        templateTitleMain: `Hamarosan elérhető: webdesign sablonok`,
        templateSub: `Ezek a sablonok nemcsak előre elkészített megoldások, hanem rugalmas alapok egy saját weboldalhoz. Szinte minden részlet alakítható – a színek, a betűtípusok, az elrendezés –, így az oldal könnyen igazítható a saját igényeidhez.`,
        templateBtn: `Sablonok`,
        serviceIntro: `Szolgáltatások`,
        serviceTitle1: ` Weboldaltervezés (UX/UI)`,
        serviceDescription1: `Segítek egy modern, személyre szabott weboldal megtervezésében, amely illik hozzád, tükrözi a márkádat, és támogatja az üzleti céljaidat.`,
        serviceTitle2: ``,
        serviceDescription2: ``,
        serviceTitle3: `Landing page tervezés`,
        serviceDescription3: `Legyen szó egy új márkáról, termékről vagy kampányról, olyan landing page-et tervezek, amely erős első benyomást kelt, megragadja a látogatók figyelmét, és támogatja a céljaid elérését.`,
        serviceTitle4: `Webshoptervezés`,
        serviceDescription4: `Segítek egy olyan webshop megtervezésében, amely egyszerre tükrözi a márkádat, könnyen használható, és támogatja az értékesítést.`,
        serviceTitle5: `Arculat- és logótervezés`,
        serviceDescription5: `Segítek kialakítani márkád saját vizuális stílusát – a logótól a teljes arculatig.`,
        serviceTitle6: `Egyedi kérések`,
        serviceDescription6: `Nem találtad, amit keresel? Ha egyedi elképzelésed van, keress bátran – szívesen segítek megtalálni a legjobb megoldást.`,
        contactBtn: `Dolgozzunk együtt!`,
        ambitiosText: `Minimalista forma, maximális jelenlét.`,
        backToTopBtn: `Vissza a tetejére ⬆️`,
        contactText: `Kapcsolat`,
        contactTextSub: `Eljött az ideje, hogy megbeszéljük a projekted?`,
        navHome: `Főoldal`,
        navTemplates: `Sablonok`,
        navContact: `Kapcsolat`,
        navWorks: `Munkáim`,
        workPageTitle: `Az alábbiakban néhány általam készített munkát találsz.`,
        workPageDescription: `Brigi oldalán elragadó sminkművészeti alkotások várnak majd minden látogatóra.`,
        workPageBtn: `Vissza a Főoldalra`,
        workPageDescription1: ``,
        workPageDescription2: `Lovas élet és tapasztalatok egy személyes oldalon.`,
        workPageDescription3: `Egy kis varázslat úton van — a Unicorn Magic Brew kávézó hamarosan megérkezik Readingbe, Angliába.`,
        workPageBtnLink: `Hamarosan..`,
        workPageVisitBtn: `Megtekintés`,
        templateTitle: `Weboldalkészítés kódolás nélkül – könnyen, érthetően.`,
        templateSubMain: `Könnyen testreszabhatók, és kész felületi blokkokat kínálnak – így gyorsabban hozhatod létre a saját weboldalad.`,
        templateCardTitle1: `Portfólió sablon`,

        templateCardTitle2: `Fotós portfólió sablon`,
        templateCardTitle3: `Webshop sablon`,
        templateCardText1: `Tökéletes bárkinek, aki szeretné bemutatni a portfólióját anélkül, hogy nulláról kezdene.`,
        templateCardText2: `Ez a sablon segít abban, hogy a fotóidra essen a hangsúly – semmi fölösleges, csak letisztult megjelenés és jól átgondolt elrendezés.`,
        templateCardText3: `Egy kész webshop alap, amibe csak a termékeid hiányoznak.`,
        templateDescription2: `A weboldal sablonjaim előre elkészített alapok, amelyekkel könnyedén elindíthatod az online felületed. Kb. öt változat közül választhatsz, de ha személyre szabott megoldást szeretnél, egyedi sablont is készítek 1–3 napon belül. A tartalmakat bármikor szabadon módosíthatod. Hamarosan elérhetők lesznek az Etsy oldalamon. Minden sablont átgondoltan, letisztult stílusban terveztem, hogy egyszerű és látványos élményt nyújtson. Ha kérdésed van, írj nyugodtan – örömmel segítek. Addig is a legjobbakat kívánom, és köszönöm, hogy a Divine Inborn Studio része lehetett a digitális történetednek! ♡
`,
        contactPageTitle: `Kapcsolatfelvétel`,
        contactPageMessage: `Üzenet`,
        contactPageName: `Név`,
        contactPageEmail: `Email cím`,
        contactPageBtn: `Küldés`,
        templateCardBtbn: `Hamarosan`,
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

  const SUPPORTED_LANGUAGES = ['hu', 'en'];
  // Hungarian is the primary language: it is also the text shipped in the static HTML.
  const DEFAULT_LANGUAGE = 'hu';

  function changeLanguage(language, updateStorage = false) {
    if (!SUPPORTED_LANGUAGES.includes(language)) language = DEFAULT_LANGUAGE;
    loadLanguageData(language);
    translateContent();
    document.documentElement.lang = language;
    // content is now in the saved language → reveal it (see the early script in <head>)
    document.documentElement.classList.remove('i18n-pending');

    if (updateStorage) {
      try {
        localStorage.setItem('selectedLanguage', language);
      } catch (e) {}
    }
  }

  if (languageDropdown) {
    languageDropdown.addEventListener('change', function () {
      const selectedLanguage = languageDropdown.value;
      changeLanguage(selectedLanguage, true);
    });
  }

  // Priority: ?lang= URL parameter → saved choice → Hungarian default
  function getInitialLanguage() {
    const langParam = new URL(window.location.href).searchParams.get('lang');
    if (SUPPORTED_LANGUAGES.includes(langParam)) return langParam;
    let storedLanguage = null;
    try {
      storedLanguage = localStorage.getItem('selectedLanguage');
    } catch (e) {}
    if (SUPPORTED_LANGUAGES.includes(storedLanguage)) return storedLanguage;
    return DEFAULT_LANGUAGE;
  }

  changeLanguage(getInitialLanguage());

  // Keyboard support for the contact form's send button (div with role="button")
  document.querySelectorAll('.login-btn').forEach(function (btn) {
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        submitForm();
      }
    });
  });
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

  // This legacy flag switcher is not present in the current markup
  if (!langFlag || !langDropdown) return;

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

// LANGUAGE SWITCHER UI
// Presentation layer only: it drives the existing (hidden) #language-dropdown select
// and fires its normal "change" event, so the translation logic above runs unchanged.
document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('.lang-switch');
  var select = document.getElementById('language-dropdown');
  if (!root || !select) return;

  var toggle = root.querySelector('.lang-switch__toggle');
  var current = root.querySelector('.lang-switch__current');
  var options = Array.prototype.slice.call(root.querySelectorAll('.lang-switch__option'));

  function activeLanguage() {
    return document.documentElement.lang === 'en' ? 'en' : 'hu';
  }

  // Reflect the active language (set by changeLanguage via <html lang>) in the UI
  function sync() {
    var lang = activeLanguage();
    current.textContent = lang.toUpperCase();
    options.forEach(function (option) {
      var isActive = option.getAttribute('data-lang') === lang;
      option.setAttribute('aria-checked', isActive ? 'true' : 'false');
      option.classList.toggle('is-active', isActive);
    });
  }

  function isOpen() {
    return root.classList.contains('is-open');
  }

  function focusOption(index) {
    var i = (index + options.length) % options.length;
    options[i].focus();
  }

  function open(focusActive) {
    root.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    if (focusActive) {
      var activeIndex = options.findIndex(function (o) {
        return o.getAttribute('data-lang') === activeLanguage();
      });
      focusOption(activeIndex < 0 ? 0 : activeIndex);
    }
  }

  function close(returnFocus) {
    if (!isOpen()) return;
    root.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) toggle.focus();
  }

  function choose(lang) {
    if (lang !== activeLanguage()) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
    }
    close(true);
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    // e.detail === 0 → activated from the keyboard (Enter / Space)
    isOpen() ? close(false) : open(e.detail === 0);
  });

  toggle.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      open(true);
    } else if (e.key === 'Escape') {
      close(true);
    }
  });

  options.forEach(function (option, index) {
    option.addEventListener('click', function (e) {
      e.stopPropagation();
      choose(option.getAttribute('data-lang'));
    });
    option.addEventListener('keydown', function (e) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          focusOption(index + 1);
          break;
        case 'ArrowUp':
          e.preventDefault();
          focusOption(index - 1);
          break;
        case 'Home':
          e.preventDefault();
          focusOption(0);
          break;
        case 'End':
          e.preventDefault();
          focusOption(options.length - 1);
          break;
        case 'Escape':
          e.preventDefault();
          close(true);
          break;
        case 'Tab':
          close(false);
          break;
      }
    });
  });

  // Close when clicking or focusing outside
  document.addEventListener('click', function (e) {
    if (!root.contains(e.target)) close(false);
  });
  document.addEventListener('focusin', function (e) {
    if (!root.contains(e.target)) close(false);
  });

  new MutationObserver(sync).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang'],
  });
  sync();
});

// BACK NAVIGATION
// "← BACK" links go to the real previous page; with no meaningful history
// (opened directly / from another site / new tab) they follow their href (homepage).
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-back]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var ref = document.referrer;
      var cameFromThisSite = false;
      try {
        var refUrl = new URL(ref);
        cameFromThisSite =
          refUrl.origin === window.location.origin && refUrl.href !== window.location.href;
      } catch (err) {}
      if (cameFromThisSite && window.history.length > 1) {
        e.preventDefault();
        window.history.back();
      }
    });
  });
});
