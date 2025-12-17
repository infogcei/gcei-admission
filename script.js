// script.js

// Configuration
const CONFIG = {
    INSTITUTE_NAME: "Guru Computer Education Institute",
    INSTITUTE_ADDRESS: "पुलिस स्टेशन के पास, डागोरी रोड, बिल्हा, बिलासपुर (छत्तीसगढ़) 495224",
    PHONE_PRIMARY: "+919244240484",
    PHONE_SECONDARY: "+918349902843",
    EMAIL: "info.gceiofficial@gmail.com",
    WHATSAPP_NUMBER: "919244240484",
    GOOGLE_MAPS_LINK: "https://maps.app.goo.gl/sYdLaS4EFBz9a4go6",
    SOCIAL_LINKS: {
        facebook: "https://www.facebook.com/gceiofficial/",
        instagram: "https://www.instagram.com/gceiofficial/",
        youtube: "https://www.youtube.com/channel/UCebEVcrSsWWxWr2qVGRLk6w"
    }
};

// Courses Data
const COURSES_DATA = [
    {
        id: 1,
        title: "Basic Computer Course",
        subtitle: "कंप्यूटर की मूल बातें सीखें | Learn Computer Fundamentals",
        category: ["all", "beginner", "short"],
        duration: "1-2 Months",
        fee: "₹1,500 - ₹2,500",
        discountFee: "₹1,275 - ₹2,125",
        icon: "fas fa-desktop",
        iconColor: "#00796b",
        bgColor: "linear-gradient(135deg, #00796b 0%, #004d40 100%)",
        features: ["Computer Fundamentals", "Windows OS", "MS Paint", "Typing", "Internet Basics"],
        description: "कंप्यूटर शुरू करने वालों के लिए पूरा पाठ्यक्रम। कंप्यूटर के मूलभूत सिद्धांत, विंडोज़ ऑपरेटिंग सिस्टम, माउस और कीबोर्ड का उपयोग, इंटरनेट बेसिक्स और फाइल मैनेजमेंट सीखें।",
        syllabus: [
            "कंप्यूटर का परिचय और इतिहास",
            "हार्डवेयर और सॉफ्टवेयर की मूल बातें",
            "विंडोज़ ऑपरेटिंग सिस्टम",
            "MS Paint और नोटपैड",
            "टाइपिंग सीखना (इंग्लिश और हिंदी)",
            "इंटरनेट बेसिक्स और वेब ब्राउजिंग",
            "फाइल और फोल्डर मैनेजमेंट",
            "बेसिक ट्रबलशूटिंग"
        ],
        careerOpportunities: ["Computer Operator", "Data Entry Operator", "Front Desk Executive", "Cyber Cafe Manager"]
    },
    {
        id: 2,
        title: "MS Office Complete",
        subtitle: "MS Word, Excel, PowerPoint सीखें | Learn MS Word, Excel, PowerPoint",
        category: ["all", "beginner", "job"],
        duration: "2-3 Months",
        fee: "₹3,000 - ₹4,000",
        discountFee: "₹2,550 - ₹3,400",
        icon: "fas fa-file-alt",
        iconColor: "#2196F3",
        bgColor: "linear-gradient(135deg, #2196F3 0%, #0D47A1 100%)",
        features: ["MS Word", "MS Excel", "MS PowerPoint", "Practical Projects", "Certification"],
        description: "MS Office के तीनों मुख्य एप्लीकेशन्स - Word, Excel और PowerPoint में पूरी तरह से प्रशिक्षण। ऑफिस जॉब्स के लिए आवश्यक कौशल।",
        syllabus: [
            "MS Word: Document Creation & Formatting",
            "MS Excel: Formulas, Functions & Charts",
            "MS PowerPoint: Presentation Design",
            "Mail Merge & Templates",
            "Data Analysis in Excel",
            "Advanced Formatting Techniques",
            "Practical Office Projects",
            "Printing & Page Setup"
        ],
        careerOpportunities: ["Office Assistant", "Data Entry Operator", "Administrative Executive", "Account Assistant", "Teacher"]
    },
    {
        id: 3,
        title: "Tally Prime with GST",
        subtitle: "टैली प्राइम जीएसटी | पूरी अकाउंटिंग | Complete Accounting with Tally",
        category: ["all", "job", "professional"],
        duration: "3-4 Months",
        fee: "₹5,000 - ₹7,000",
        discountFee: "₹4,250 - ₹5,950",
        icon: "fas fa-calculator",
        iconColor: "#FF5722",
        bgColor: "linear-gradient(135deg, #FF5722 0%, #BF360C 100%)",
        features: ["Tally Prime", "GST Accounting", "Inventory", "Taxation", "Practical Training"],
        description: "टैली प्राइम सॉफ्टवेयर में पूरी अकाउंटिंग और जीएसटी का प्रशिक्षण। व्यावहारिक अकाउंटिंग प्रोजेक्ट्स के साथ।",
        syllabus: [
            "Tally Prime Introduction & Setup",
            "Company Creation & Configuration",
            "Accounting Vouchers & Entries",
            "GST Implementation & Returns",
            "Inventory Management",
            "Payroll Accounting",
            "Tax Deducted at Source (TDS)",
            "Final Accounts & Reports",
            "Practical Business Projects"
        ],
        careerOpportunities: ["Accountant", "GST Accountant", "Audit Assistant", "Bookkeeper", "Tax Consultant"]
    },
    {
        id: 4,
        title: "DCA - Diploma in Computer Applications",
        subtitle: "एक वर्षीय डिप्लोमा कोर्स | One Year Diploma Course",
        category: ["all", "professional", "job"],
        duration: "12 Months",
        fee: "₹10,000 - ₹12,000",
        discountFee: "₹8,500 - ₹10,200",
        icon: "fas fa-graduation-cap",
        iconColor: "#9C27B0",
        bgColor: "linear-gradient(135deg, #9C27B0 0%, #4A148C 100%)",
        features: ["Computer Fundamentals", "MS Office", "Tally", "HTML & CSS", "Project Work"],
        description: "कंप्यूटर एप्लीकेशन में एक वर्षीय डिप्लोमा कोर्स। कंप्यूटर की पूरी जानकारी और विभिन्न सॉफ्टवेयर का ज्ञान।",
        syllabus: [
            "Computer Fundamentals & OS",
            "MS Office (Word, Excel, PowerPoint)",
            "Internet & Email",
            "Tally with GST",
            "HTML & CSS Basics",
            "Photoshop Basics",
            "Typing (English & Hindi)",
            "Project Work & Viva"
        ],
        careerOpportunities: ["Computer Operator", "Office Assistant", "Data Entry Operator", "Front Desk Executive", "Receptionist"]
    },
    {
        id: 5,
        title: "PGDCA - Post Graduate Diploma",
        subtitle: "उन्नत कंप्यूटर डिप्लोमा | Advanced Computer Diploma",
        category: ["all", "professional"],
        duration: "12 Months",
        fee: "₹12,000 - ₹15,000",
        discountFee: "₹10,200 - ₹12,750",
        icon: "fas fa-user-graduate",
        iconColor: "#FF9800",
        bgColor: "linear-gradient(135deg, #FF9800 0%, #EF6C00 100%)",
        features: ["Advanced Computer Concepts", "DBMS", "Programming", "Web Design", "Project"],
        description: "स्नातकोत्तर डिप्लोमा इन कंप्यूटर एप्लीकेशन। उन्नत कंप्यूटर अवधारणाओं, डेटाबेस प्रबंधन और प्रोग्रामिंग का प्रशिक्षण।",
        syllabus: [
            "Computer Organization & Architecture",
            "Operating System Concepts",
            "Database Management System (DBMS)",
            "C Programming Language",
            "Data Structures & Algorithms",
            "Web Designing (HTML, CSS, JavaScript)",
            "Software Engineering",
            "Project Development"
        ],
        careerOpportunities: ["Software Trainee", "Database Assistant", "Web Designer", "System Administrator", "IT Support"]
    },
    {
        id: 6,
        title: "Typing Course",
        subtitle: "इंग्लिश और हिंदी टाइपिंग | English & Hindi Typing",
        category: ["all", "beginner", "short"],
        duration: "1-2 Months",
        fee: "₹1,000 - ₹2,000",
        discountFee: "₹850 - ₹1,700",
        icon: "fas fa-keyboard",
        iconColor: "#795548",
        bgColor: "linear-gradient(135deg, #795548 0%, #3E2723 100%)",
        features: ["English Typing", "Hindi Typing", "Speed Test", "Certificate", "Government Jobs"],
        description: "इंग्लिश और हिंदी टाइपिंग में तेज गति प्राप्त करने के लिए प्रशिक्षण। सरकारी नौकरियों के लिए उपयोगी।",
        syllabus: [
            "Typing Posture & Finger Position",
            "Home Row Practice",
            "English Typing Speed Building",
            "Hindi Typing (Kruti Dev/Mangal)",
            "Special Character Typing",
            "Typing Speed Test & Practice",
            "Document Formatting",
            "Typing Certificate Preparation"
        ],
        careerOpportunities: ["Typist", "Data Entry Operator", "Clerk", "Government Jobs", "Transcriptionist"]
    },
    {
        id: 7,
        title: "Photoshop & Canva",
        subtitle: "ग्राफ़िक डिजाइन कोर्स | Graphic Design Course",
        category: ["all", "creative", "trending"],
        duration: "2-3 Months",
        fee: "₹4,000 - ₹6,000",
        discountFee: "₹3,400 - ₹5,100",
        icon: "fas fa-paint-brush",
        iconColor: "#E91E63",
        bgColor: "linear-gradient(135deg, #E91E63 0%, #880E4F 100%)",
        features: ["Adobe Photoshop", "Canva Design", "Logo Design", "Social Media Graphics", "Freelancing"],
        description: "एडोब फोटोशॉप और कैनवा का उपयोग करके ग्राफिक डिजाइन सीखें। सोशल मीडिया ग्राफिक्स, लोगो डिजाइन और प्रिंट मीडिया डिजाइन।",
        syllabus: [
            "Photoshop Interface & Tools",
            "Image Editing & Retouching",
            "Layers, Masks & Filters",
            "Text Effects & Typography",
            "Canva for Social Media Graphics",
            "Logo Design Principles",
            "Business Card & Brochure Design",
            "Freelance Project Work"
        ],
        careerOpportunities: ["Graphic Designer", "Social Media Manager", "Freelance Designer", "Photo Editor", "Content Creator"]
    },
    {
        id: 8,
        title: "AI & ChatGPT Course",
        subtitle: "कृत्रिम बुद्धिमत्ता और चैटजीपीटी | Artificial Intelligence & ChatGPT",
        category: ["all", "trending", "professional"],
        duration: "1-2 Months",
        fee: "₹3,000 - ₹4,000",
        discountFee: "₹2,550 - ₹3,400",
        icon: "fas fa-robot",
        iconColor: "#00BCD4",
        bgColor: "linear-gradient(135deg, #00BCD4 0%, #006064 100%)",
        features: ["AI Fundamentals", "ChatGPT Usage", "Prompt Engineering", "AI Tools", "Future Skills"],
        description: "कृत्रिम बुद्धिमत्ता की मूल बातें और चैटजीपीटी का प्रभावी उपयोग सीखें। नवीनतम एआई टूल्स और तकनीकें।",
        syllabus: [
            "Introduction to Artificial Intelligence",
            "ChatGPT: Basics & Advanced Usage",
            "Prompt Engineering Techniques",
            "AI Tools for Content Creation",
            "AI in Business & Education",
            "Ethical AI & Limitations",
            "Future of AI & Career Opportunities",
            "Practical AI Projects"
        ],
        careerOpportunities: ["AI Content Creator", "Digital Marketer", "Business Analyst", "Educator", "Tech Consultant"]
    },
    {
        id: 9,
        title: "Web Design Basics",
        subtitle: "HTML, CSS और JavaScript | HTML, CSS & JavaScript",
        category: ["all", "creative", "trending"],
        duration: "3-4 Months",
        fee: "₹6,000 - ₹8,000",
        discountFee: "₹5,100 - ₹6,800",
        icon: "fas fa-code",
        iconColor: "#4CAF50",
        bgColor: "linear-gradient(135deg, #4CAF50 0%, #1B5E20 100%)",
        features: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Projects"],
        description: "वेब डिजाइन की मूल बातें - HTML, CSS और JavaScript सीखें। आकर्षक और रिस्पॉन्सिव वेबसाइट बनाना सीखें।",
        syllabus: [
            "HTML5: Structure & Semantic Tags",
            "CSS3: Styling & Layouts",
            "CSS Flexbox & Grid",
            "JavaScript Basics",
            "DOM Manipulation",
            "Responsive Web Design",
            "Bootstrap Framework",
            "Website Deployment"
        ],
        careerOpportunities: ["Web Designer", "Frontend Developer", "UI Designer", "Freelance Web Developer", "Content Manager"]
    },
    {
        id: 10,
        title: "Digital Marketing Basics",
        subtitle: "सोशल मीडिया और डिजिटल मार्केटिंग | Social Media & Digital Marketing",
        category: ["all", "trending", "job"],
        duration: "2-3 Months",
        fee: "₹4,000 - ₹5,000",
        discountFee: "₹3,400 - ₹4,250",
        icon: "fas fa-bullhorn",
        iconColor: "#9C27B0",
        bgColor: "linear-gradient(135deg, #9C27B0 0%, #4A148C 100%)",
        features: ["Social Media Marketing", "SEO Basics", "Content Marketing", "Google Ads", "Analytics"],
        description: "डिजिटल मार्केटिंग की मूल बातें - सोशल मीडिया मार्केटिंग, एसईओ, कंटेंट मार्केटिंग और ऑनलाइन विज्ञापन।",
        syllabus: [
            "Digital Marketing Fundamentals",
            "Social Media Marketing (Facebook, Instagram)",
            "Search Engine Optimization (SEO)",
            "Content Marketing & Blogging",
            "Google Ads & Analytics",
            "Email Marketing",
            "Brand Building Online",
            "Digital Marketing Strategy"
        ],
        careerOpportunities: ["Digital Marketer", "Social Media Manager", "SEO Specialist", "Content Writer", "Marketing Executive"]
    },
    {
        id: 11,
        title: "Spoken English & Personality",
        subtitle: "अंग्रेजी बोलना और व्यक्तित्व विकास | English Speaking & Personality Development",
        category: ["all", "job"],
        duration: "2-3 Months",
        fee: "₹3,000 - ₹4,000",
        discountFee: "₹2,550 - ₹3,400",
        icon: "fas fa-comments",
        iconColor: "#FFC107",
        bgColor: "linear-gradient(135deg, #FFC107 0%, #FF6F00 100%)",
        features: ["English Speaking", "Grammar", "Communication", "Interview Skills", "Confidence"],
        description: "अंग्रेजी बोलना सीखें और अपने व्यक्तित्व का विकास करें। नौकरी के साक्षात्कार और प्रभावी संचार के लिए उपयोगी।",
        syllabus: [
            "English Grammar Basics",
            "Vocabulary Building",
            "Conversation Practice",
            "Pronunciation & Accent",
            "Public Speaking",
            "Interview Preparation",
            "Personality Development",
            "Group Discussions"
        ],
        careerOpportunities: ["Customer Service", "Sales Executive", "Teacher", "Receptionist", "HR Assistant"]
    }
];

// DOM Elements
let pageLoader, mobileMenuBtn, navList, mobileMenuOverlay;
let categoryTabs, courseModal, courseModalContent;
let testimonialsContainer, testimonialForm, charCount;
let contactForm, backToTop, offerBar;
let allCoursesContainer, beginnerCoursesContainer, jobCoursesContainer;
let professionalCoursesContainer, creativeCoursesContainer, trendingCoursesContainer;
let shortCoursesContainer;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
    loadCoursesData();
    setupTestimonialForm();
    setupContactForm();
    setupSmoothScrolling();
    setupAccessibility();
    initializePage();
});

function initializeElements() {
    pageLoader = document.getElementById('pageLoader');
    mobileMenuBtn = document.getElementById('mobileMenuBtn');
    navList = document.getElementById('navList');
    mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    categoryTabs = document.querySelectorAll('.category-tab');
    courseModal = document.getElementById('courseModal');
    courseModalContent = document.getElementById('courseModalContent');
    testimonialsContainer = document.getElementById('testimonialsContainer');
    testimonialForm = document.getElementById('testimonialForm');
    charCount = document.getElementById('charCount');
    contactForm = document.getElementById('contactForm');
    backToTop = document.getElementById('backToTop');
    offerBar = document.getElementById('offerBar');
    
    // Course containers
    allCoursesContainer = document.getElementById('all-courses-container');
    beginnerCoursesContainer = document.getElementById('beginner-courses-container');
    jobCoursesContainer = document.getElementById('job-courses-container');
    professionalCoursesContainer = document.getElementById('professional-courses-container');
    creativeCoursesContainer = document.getElementById('creative-courses-container');
    trendingCoursesContainer = document.getElementById('trending-courses-container');
    shortCoursesContainer = document.getElementById('short-courses-container');
}

function setupEventListeners() {
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Category tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => switchCategory(tab.dataset.category));
    });
    
    // Footer category links
    document.querySelectorAll('.footer-links a[data-category]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            switchCategory(category);
            // Scroll to courses section
            document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Back to top
    window.addEventListener('scroll', toggleBackToTop);
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Character count for testimonial textarea
    const testimonialText = document.getElementById('testimonialText');
    if (testimonialText && charCount) {
        testimonialText.addEventListener('input', function() {
            charCount.textContent = this.value.length;
        });
    }
    
    // Offer bar click
    if (offerBar) {
        const offerLink = offerBar.querySelector('a');
        if (offerLink) {
            offerLink.addEventListener('click', scrollToCourses);
        }
    }
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && courseModal.style.display === 'flex') {
            closeCourseModal();
        }
    });
    
    // Check online/offline status
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
}

function initializePage() {
    // Hide loader after page loads
    setTimeout(() => {
        if (pageLoader) {
            pageLoader.classList.add('hidden');
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 500);
        }
    }, 1000);
    
    // Set current year in footer if needed
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement && yearElement.textContent.includes('2024')) {
        yearElement.textContent = yearElement.textContent.replace('2024', new Date().getFullYear());
    }
}

function loadCoursesData() {
    // Load courses into all containers
    COURSES_DATA.forEach(course => {
        const courseCard = createCourseCard(course);
        
        // Add to "all" container
        if (allCoursesContainer) {
            allCoursesContainer.appendChild(courseCard.cloneNode(true));
        }
        
        // Add to specific category containers
        course.category.forEach(cat => {
            const container = getCategoryContainer(cat);
            if (container && cat !== 'all') {
                container.appendChild(courseCard.cloneNode(true));
            }
        });
    });
    
    // Add click events to course buttons
    document.querySelectorAll('.course-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const courseId = this.dataset.courseId;
            openCourseModal(courseId);
        });
    });
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
        <div class="course-header">
            <div class="course-icon" style="background: ${course.bgColor};">
                <i class="${course.icon}" style="color: ${course.iconColor};"></i>
            </div>
            <h3 class="course-title">${course.title}</h3>
            <p class="course-subtitle">${course.subtitle}</p>
        </div>
        <div class="course-body">
            <div class="course-details">
                <div class="detail-item">
                    <div class="detail-label">Duration</div>
                    <div class="detail-value">${course.duration}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Course Fee</div>
                    <div class="detail-value">${course.fee}</div>
                </div>
            </div>
            <div class="course-features">
                ${course.features.map(feature => `
                    <div class="feature-item">
                        <i class="fas fa-check-circle"></i>
                        <span>${feature}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="course-footer">
            <button class="course-btn" data-course-id="${course.id}">
                <i class="fas fa-info-circle"></i>
                कोर्स विवरण देखें | View Course Details
            </button>
        </div>
    `;
    return card;
}

function getCategoryContainer(category) {
    switch(category) {
        case 'beginner': return beginnerCoursesContainer;
        case 'job': return jobCoursesContainer;
        case 'professional': return professionalCoursesContainer;
        case 'creative': return creativeCoursesContainer;
        case 'trending': return trendingCoursesContainer;
        case 'short': return shortCoursesContainer;
        default: return null;
    }
}

function switchCategory(category) {
    // Update active tab
    categoryTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
    
    // Show selected category, hide others
    document.querySelectorAll('.courses-by-category').forEach(cat => {
        cat.classList.toggle('active', cat.id === `category-${category}`);
    });
}

function openCourseModal(courseId) {
    const course = COURSES_DATA.find(c => c.id == courseId);
    if (!course) return;
    
    const modalContent = `
        <button class="course-modal-close" onclick="closeCourseModal()" aria-label="Close modal">
            <i class="fas fa-times"></i>
        </button>
        <div class="course-modal-header" style="background: ${course.bgColor};">
            <div class="course-modal-icon" style="background: rgba(255,255,255,0.2);">
                <i class="${course.icon}" style="color: white;"></i>
            </div>
            <h2 class="course-modal-title">${course.title}</h2>
            <p class="course-modal-subtitle">${course.subtitle}</p>
        </div>
        <div class="course-modal-content">
            <div class="course-info-grid">
                <div class="info-item">
                    <div class="info-label">Duration</div>
                    <div class="info-value">${course.duration}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Course Fee</div>
                    <div class="info-value">${course.fee}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Discount Fee</div>
                    <div class="info-value" style="color: #FF5722;">${course.discountFee} <span class="discount-badge">15% OFF</span></div>
                </div>
                <div class="info-item">
                    <div class="info-label">Category</div>
                    <div class="info-value">${course.category.filter(c => c !== 'all').map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')}</div>
                </div>
            </div>
            
            <div class="price-details">
                <h4><i class="fas fa-rupee-sign"></i> Installment Plan Available</h4>
                <div class="installment-plan">
                    <div class="installment-item">
                        <div class="installment-label">1st Installment</div>
                        <div class="installment-amount">₹${Math.round(parseInt(course.discountFee.replace('₹', '').replace(',', '').split('-')[0]) * 0.5)}</div>
                    </div>
                    <div class="installment-item">
                        <div class="installment-label">2nd Installment</div>
                        <div class="installment-amount">₹${Math.round(parseInt(course.discountFee.replace('₹', '').replace(',', '').split('-')[0]) * 0.5)}</div>
                    </div>
                </div>
            </div>
            
            <div class="course-description">
                <h3 class="modal-section-title">
                    <i class="fas fa-book-open"></i>
                    कोर्स विवरण | Course Description
                </h3>
                <p class="description-text">${course.description}</p>
            </div>
            
            <div class="syllabus-list">
                <h3 class="modal-section-title">
                    <i class="fas fa-list-ol"></i>
                    पाठ्यक्रम | Syllabus
                </h3>
                ${course.syllabus.map((item, index) => `
                    <div class="syllabus-item">
                        <div class="syllabus-number">${index + 1}</div>
                        <div class="syllabus-text">${item}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="career-opportunities">
                <h3 class="modal-section-title">
                    <i class="fas fa-briefcase"></i>
                    करियर अवसर | Career Opportunities
                </h3>
                <div class="career-tags">
                    ${course.careerOpportunities.map(opp => `
                        <span class="career-tag">${opp}</span>
                    `).join('')}
                </div>
            </div>
            
            <div class="course-modal-actions">
                <a href="tel:${CONFIG.PHONE_PRIMARY}" class="modal-action-btn enroll">
                    <i class="fas fa-phone-alt"></i>
                    एडमिशन के लिए कॉल करें
                </a>
                <a href="#contact" class="modal-action-btn demo" onclick="closeCourseModal()">
                    <i class="fas fa-calendar-alt"></i>
                    फ्री डेमो बुक करें
                </a>
                <a href="https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=I'm interested in ${encodeURIComponent(course.title)} course at Guru Computer Institute" 
                   class="modal-action-btn whatsapp" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                    WhatsApp पर पूछें
                </a>
            </div>
        </div>
    `;
    
    courseModalContent.innerHTML = modalContent;
    courseModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeCourseModal() {
    courseModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function setupTestimonialForm() {
    if (!testimonialForm) return;
    
    testimonialForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateTestimonialForm()) return;
        
        const formData = {
            name: document.getElementById('testimonialName').value.trim(),
            course: document.getElementById('testimonialCourse').value.trim(),
            text: document.getElementById('testimonialText').value.trim(),
            date: new Date().toLocaleDateString('en-IN', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
            }),
            timestamp: new Date().toISOString()
        };
        
        // Show loading
        const loading = document.getElementById('testimonialLoading');
        if (loading) loading.classList.add('active');
        
        // Simulate API call (in real implementation, send to server)
        setTimeout(() => {
            // Add testimonial to display
            addTestimonial(formData);
            
            // Show success message
            showSuccessMessage('Thank you for your review! Your feedback has been submitted successfully.');
            
            // Reset form
            testimonialForm.reset();
            charCount.textContent = '0';
            
            // Hide loading
            if (loading) loading.classList.remove('active');
            
            // Scroll to show new testimonial
            document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 1500);
    });
}

function validateTestimonialForm() {
    let isValid = true;
    const nameInput = document.getElementById('testimonialName');
    const courseInput = document.getElementById('testimonialCourse');
    const textInput = document.getElementById('testimonialText');
    const nameError = document.getElementById('nameError');
    const courseError = document.getElementById('courseError');
    const reviewError = document.getElementById('reviewError');
    
    // Reset errors
    [nameError, courseError, reviewError].forEach(el => {
        if (el) el.classList.remove('show');
    });
    [nameInput, courseInput, textInput].forEach(el => {
        if (el) el.classList.remove('error');
    });
    
    // Validate name
    if (!nameInput.value.trim()) {
        nameInput.classList.add('error');
        if (nameError) {
            nameError.textContent = 'Please enter your name.';
            nameError.classList.add('show');
        }
        isValid = false;
    }
    
    // Validate course
    if (!courseInput.value.trim()) {
        courseInput.classList.add('error');
        if (courseError) {
            courseError.textContent = 'Please enter course name.';
            courseError.classList.add('show');
        }
        isValid = false;
    }
    
    // Validate review text
    if (!textInput.value.trim()) {
        textInput.classList.add('error');
        if (reviewError) {
            reviewError.textContent = 'Please enter your review.';
            reviewError.classList.add('show');
        }
        isValid = false;
    } else if (textInput.value.trim().length < 20) {
        textInput.classList.add('error');
        if (reviewError) {
            reviewError.textContent = 'Review must be at least 20 characters.';
            reviewError.classList.add('show');
        }
        isValid = false;
    }
    
    return isValid;
}

function addTestimonial(data) {
    if (!testimonialsContainer) return;
    
    const initials = data.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    
    const testimonialHTML = `
        <div class="testimonial-card-new">
            <div class="testimonial-date">${data.date}</div>
            <div class="testimonial-text">"${data.text}"</div>
            <div class="testimonial-author">
                <div class="author-avatar">${initials}</div>
                <div class="author-info">
                    <h4>${data.name}</h4>
                    <p>${data.course} • Student</p>
                </div>
            </div>
        </div>
    `;
    
    // Add to beginning of container
    testimonialsContainer.insertAdjacentHTML('afterbegin', testimonialHTML);
}

function setupContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateContactForm()) return;
        
        const formData = {
            name: document.getElementById('contactName').value.trim(),
            mobile: document.getElementById('contactMobile').value.trim(),
            email: document.getElementById('contactEmail').value.trim(),
            qualification: document.getElementById('contactQualification').value,
            course: document.getElementById('inquiryCourse').value,
            message: document.getElementById('contactMessage').value.trim(),
            timestamp: new Date().toISOString()
        };
        
        // Show loading
        const loading = document.getElementById('contactFormLoading');
        if (loading) loading.classList.add('active');
        
        // Simulate API call
        setTimeout(() => {
            // In real implementation, send to server
            console.log('Form submitted:', formData);
            
            // Prepare WhatsApp message
            const whatsappMessage = `New Admission Inquiry:%0A%0AName: ${formData.name}%0AMobile: ${formData.mobile}%0AEmail: ${formData.email}%0AQualification: ${formData.qualification}%0AInterested Course: ${formData.course}%0AMessage: ${formData.message}`;
            
            // Open WhatsApp with prefilled message
            window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank');
            
            // Show success message
            showSuccessMessage('Thank you for your inquiry! We have opened WhatsApp for you to send your inquiry directly.');
            
            // Reset form
            contactForm.reset();
            
            // Hide loading
            if (loading) loading.classList.remove('active');
        }, 1500);
    });
}

function validateContactForm() {
    let isValid = true;
    const nameInput = document.getElementById('contactName');
    const mobileInput = document.getElementById('contactMobile');
    const emailInput = document.getElementById('contactEmail');
    const nameError = document.getElementById('contactNameError');
    const mobileError = document.getElementById('contactMobileError');
    const emailError = document.getElementById('contactEmailError');
    
    // Reset errors
    [nameError, mobileError, emailError].forEach(el => {
        if (el) el.classList.remove('show');
    });
    [nameInput, mobileInput, emailInput].forEach(el => {
        if (el) el.classList.remove('error');
    });
    
    // Validate name
    if (!nameInput.value.trim()) {
        nameInput.classList.add('error');
        if (nameError) {
            nameError.textContent = 'Please enter your name.';
            nameError.classList.add('show');
        }
        isValid = false;
    }
    
    // Validate mobile
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileInput.value.trim()) {
        mobileInput.classList.add('error');
        if (mobileError) {
            mobileError.textContent = 'Please enter mobile number.';
            mobileError.classList.add('show');
        }
        isValid = false;
    } else if (!mobileRegex.test(mobileInput.value.trim())) {
        mobileInput.classList.add('error');
        if (mobileError) {
            mobileError.textContent = 'Please enter valid 10-digit mobile number.';
            mobileError.classList.add('show');
        }
        isValid = false;
    }
    
    // Validate email (optional but if provided, must be valid)
    if (emailInput.value.trim() && !isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add('error');
        if (emailError) {
            emailError.textContent = 'Please enter valid email address.';
            emailError.classList.add('show');
        }
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function toggleMobileMenu() {
    navList.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    mobileMenuBtn.setAttribute('aria-expanded', navList.classList.contains('active'));
}

function closeMobileMenu() {
    navList.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
}

function toggleBackToTop() {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

function scrollToCourses() {
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
}

function setupSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (navList.classList.contains('active')) {
                    closeMobileMenu();
                }
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                // Scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupAccessibility() {
    // Add focus styles for keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Make modal focus trap
    if (courseModal) {
        courseModal.addEventListener('keydown', function(e) {
            if (e.key === 'Tab' && this.style.display === 'flex') {
                const focusableElements = this.querySelectorAll('button, a, input, textarea, select');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey && document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        });
    }
}

function updateOnlineStatus() {
    const notification = document.getElementById('offlineNotification');
    if (!notification) return;
    
    if (navigator.onLine) {
        notification.classList.remove('show');
        showSuccessMessage('You are back online!');
    } else {
        notification.classList.add('show');
    }
}

function showSuccessMessage(message) {
    // Remove existing success messages
    document.querySelectorAll('.success-message').forEach(el => el.remove());
    
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(successMsg);
    
    // Remove after animation
    setTimeout(() => {
        if (successMsg.parentNode) {
            successMsg.parentNode.removeChild(successMsg);
        }
    }, 3000);
}

// Global functions for HTML onclick handlers
window.scrollToCourses = scrollToCourses;
window.closeCourseModal = closeCourseModal;

// Initialize
updateOnlineStatus();