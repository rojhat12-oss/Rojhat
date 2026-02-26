const translations = {
    en: {
        name: "Rojhat Haysam",
        greeting: "Hi, I'm",
        title: "Web Developer | Python Programmer",
        bio: "\"I turn ideas into working projects using code, data, and creativity. Available for Remote and Freelance work.\"",
        btnProjects: "My Projects",
        btnContactHero: "Contact Me",
        skillsTitle: "Skills",
        projectsTitle: "Projects",
        contactTitle: "Contact Me",
        avail: "Available for freelance work",
        btnEmail: "Email Me",
        btnWhatsapp: "WhatsApp",
        btnInstagram: "Instagram",
        proj1Title: "Student Management System",
        proj1Desc: "Efficiently manage student info using PHP & MySQL.",
        proj2Title: "Horror Game",
        proj2Desc: "Atmospheric horror experience focused on game logic.",
        skillWebTitle: "Web Dev",
        skillWebDesc: "HTML, CSS, JS, PHP",
        skillPythonTitle: "Python",
        skillPythonDesc: "Data Analysis & Logic",
        skillCreativeTitle: "Creative",
        skillCreativeDesc: "Video Editing & Design",
        skillExcelTitle: "Excel",
        skillExcelDesc: "Analysis & Formulas"
    },
    ar: {
        name: "روژهات هيثم",
        greeting: "مرحباً، أنا",
        title: "مطوّر ويب | مبرمج بايثون",
        bio: "\"أحول الأفكار إلى مشاريع حقيقية باستخدام الكود والبيانات والإبداع. متاح للعمل عن بُعد والعمل المستقل.\"",
        btnProjects: "مشاريعي",
        btnContactHero: "تواصل معي",
        skillsTitle: "المهارات",
        projectsTitle: "المشاريع",
        contactTitle: "تواصل معي",
        avail: "متاح للعمل المستقل",
        btnEmail: "راسلني",
        btnWhatsapp: "واتساب",
        btnInstagram: "انستغرام",
        proj1Title: "نظام إدارة الطلاب",
        proj1Desc: "إدارة معلومات الطلاب بكفاءة باستخدام PHP و MySQL.",
        proj2Title: "لعبة رعب",
        proj2Desc: "تربة رعب تعتمد على المنطق وتصميم اللعبة.",
        skillWebTitle: "تطوير الويب",
        skillWebDesc: "HTML, CSS, JS, PHP",
        skillPythonTitle: "بايثون",
        skillPythonDesc: "تحليل البيانات والمنطق",
        skillCreativeTitle: "إبداع",
        skillCreativeDesc: "مونتاج فيديو وتصميم",
        skillExcelTitle: "إكسل",
        skillExcelDesc: "تحليل ومعادلات"
    },
    ku: {
        name: "رۆژهات هه‌یسم",
        greeting: "سڵاو، ئەز",
        title: "گەشەپێدەرێ وێب | پرۆگرامەرێ پایتۆن",
        bio: "\"ئەز هزرا دکەمە پرۆژێن کارا ب رێکا بکارئینانا کۆد و داتا و داهێنانێ. بەردەستم بۆ کارێ ژ دۆر و سەربەخۆ.\"",
        btnProjects: "پرۆژێن من",
        btnContactHero: "پەیوەندیێ ب من بکە",
        skillsTitle: "شیان (کارامەیی)",
        projectsTitle: "پرۆژە",
        contactTitle: "پەیوەندیێ ب من بکە",
        avail: "بەردەستە بۆ کارێ سەربەخۆ",
        btnEmail: "نامەیەکێ فرێکە",
        btnWhatsapp: "واتساب",
        btnInstagram: "ئینستاگرام",
        proj1Title: "سیستەمێ رێڤەبرنا قوتابیان",
        proj1Desc: "رێڤەبرنا پێزانینێن قوتابیان ب شێوەیەکێ کارا ب PHP و MySQL.",
        proj2Title: "یارییەکا ترس",
        proj2Desc: "یارییەکا ترس کو گرنگیێ ددەتە کەش و هەوا و لۆجیکا یاریێ.",
        skillWebTitle: "گەشەپێدانا وێب",
        skillWebDesc: "HTML, CSS, JS, PHP",
        skillPythonTitle: "پایتۆن",
        skillPythonDesc: "شیکارکرنا داتا و لۆجیک",
        skillCreativeTitle: "داهێنەر",
        skillCreativeDesc: "مۆنتاژ و دیزاین",
        skillExcelTitle: "ئێکسڵ",
        skillExcelDesc: "شیکار و هاوکێشە"
    }
};

const elements = {
    heroGreeting: document.getElementById('hero-greeting'),
    heroName: document.getElementById('hero-name'),
    heroTitle: document.getElementById('hero-title'),
    heroBio: document.getElementById('hero-bio'),
    btnProjects: document.getElementById('btn-projects'),
    btnContactHero: document.getElementById('btn-contact-hero'),
    skillsTitle: document.getElementById('skills-title'),
    projectsTitle: document.getElementById('projects-title'),
    contactTitle: document.getElementById('contact-title'),
    contactAvail: document.getElementById('contact-avail'),
    btnWhatsapp: document.getElementById('btn-whatsapp').querySelector('span'),
    btnInstagram: document.getElementById('btn-instagram').querySelector('span'),
    proj1Title: document.getElementById('proj-1-title'),
    proj1Desc: document.getElementById('proj-1-desc'),
    proj2Title: document.getElementById('proj-2-title'),
    proj2Desc: document.getElementById('proj-2-desc'),
    skillWebTitle: document.getElementById('skill-web-title'),
    skillWebDesc: document.getElementById('skill-web-desc'),
    skillPythonTitle: document.getElementById('skill-python-title'),
    skillPythonDesc: document.getElementById('skill-python-desc'),
    skillCreativeTitle: document.getElementById('skill-creative-title'),
    skillCreativeDesc: document.getElementById('skill-creative-desc'),
    skillExcelTitle: document.getElementById('skill-excel-title'),
    skillExcelDesc: document.getElementById('skill-excel-desc')
};

const langSwitcher = document.getElementById('lang-switcher');

function setLanguage(lang) {
    const t = translations[lang];
    const isRTL = lang === 'ar' || lang === 'ku';

    // Update Text
    if (elements.heroGreeting) elements.heroGreeting.textContent = t.greeting;
    if (elements.heroName) elements.heroName.textContent = t.name;
    if (elements.heroTitle) elements.heroTitle.textContent = t.title;
    if (elements.heroBio) elements.heroBio.textContent = t.bio;

    if (elements.btnProjects) {
        // Keep the icon if it exists
        const icon = elements.btnProjects.querySelector('i');
        elements.btnProjects.textContent = t.btnProjects + ' ';
        if (icon) elements.btnProjects.appendChild(icon);
    }

    if (elements.btnContactHero) elements.btnContactHero.textContent = t.btnContactHero;
    if (elements.skillsTitle) elements.skillsTitle.textContent = t.skillsTitle;
    if (elements.projectsTitle) elements.projectsTitle.textContent = t.projectsTitle;
    if (elements.contactTitle) elements.contactTitle.textContent = t.contactTitle;
    if (elements.contactAvail) elements.contactAvail.textContent = t.avail;

    // Update Span inside buttons
    if (elements.btnWhatsapp) elements.btnWhatsapp.textContent = t.btnWhatsapp;
    if (elements.btnInstagram) elements.btnInstagram.textContent = t.btnInstagram;

    if (elements.proj1Title) elements.proj1Title.textContent = t.proj1Title;
    if (elements.proj1Desc) elements.proj1Desc.textContent = t.proj1Desc;
    if (elements.proj2Title) elements.proj2Title.textContent = t.proj2Title;
    if (elements.proj2Desc) elements.proj2Desc.textContent = t.proj2Desc;

    if (elements.skillWebTitle) elements.skillWebTitle.textContent = t.skillWebTitle;
    if (elements.skillWebDesc) elements.skillWebDesc.textContent = t.skillWebDesc;
    if (elements.skillPythonTitle) elements.skillPythonTitle.textContent = t.skillPythonTitle;
    if (elements.skillPythonDesc) elements.skillPythonDesc.textContent = t.skillPythonDesc;
    if (elements.skillCreativeTitle) elements.skillCreativeTitle.textContent = t.skillCreativeTitle;
    if (elements.skillCreativeDesc) elements.skillCreativeDesc.textContent = t.skillCreativeDesc;
    if (elements.skillExcelTitle) elements.skillExcelTitle.textContent = t.skillExcelTitle;
    if (elements.skillExcelDesc) elements.skillExcelDesc.textContent = t.skillExcelDesc;

    // Update Direction
    if (isRTL) {
        document.body.classList.add('rtl');
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.body.classList.remove('rtl');
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', 'ltr');
    }
}

langSwitcher.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

// Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Prevent scrolling when mobile menu is open
hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Reset overflow when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.body.style.overflow = '';
    });
});

// Initialize
setLanguage('en');

// Hero Image Click Interaction
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
    heroImage.addEventListener('click', () => {
        heroImage.classList.toggle('enlarged');
    });
}
