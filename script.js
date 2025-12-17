// script.js - GitHub और WordPress दोनों के लिए

// Course Data
const COURSES_DATA = [
    {
        id: 1,
        title: "Basic Computer Course",
        subtitle: "कंप्यूटर की मूल बातें सीखें",
        category: ["all", "beginner"],
        duration: "1-2 Months",
        fee: "₹1,500 - ₹2,500",
        discountFee: "₹1,275 - ₹2,125",
        icon: "fas fa-desktop",
        bgColor: "linear-gradient(135deg, #00796b 0%, #004d40 100%)",
        features: ["Computer Fundamentals", "Windows OS", "MS Paint", "Typing", "Internet Basics"],
        description: "कंप्यूटर शुरू करने वालों के लिए पूरा पाठ्यक्रम।",
        syllabus: ["कंप्यूटर का परिचय", "विंडोज़ ऑपरेटिंग सिस्टम", "टाइपिंग सीखना", "इंटरनेट बेसिक्स"],
        careerOpportunities: ["Computer Operator", "Data Entry Operator"]
    },
    {
        id: 2,
        title: "MS Office Complete",
        subtitle: "MS Word, Excel, PowerPoint सीखें",
        category: ["all", "beginner", "job"],
        duration: "2-3 Months",
        fee: "₹3,000 - ₹4,000",
        discountFee: "₹2,550 - ₹3,400",
        icon: "fas fa-file-alt",
        bgColor: "linear-gradient(135deg, #2196F3 0%, #0D47A1 100%)",
        features: ["MS Word", "MS Excel", "MS PowerPoint", "Practical Projects"],
        description: "MS Office के तीनों मुख्य एप्लीकेशन्स का प्रशिक्षण।",
        syllabus: ["MS Word", "MS Excel", "MS PowerPoint", "Practical Projects"],
        careerOpportunities: ["Office Assistant", "Data Entry Operator"]
    },
    {
        id: 3,
        title: "Tally Prime with GST",
        subtitle: "टैली प्राइम जीएसटी | पूरी अकाउंटिंग",
        category: ["all", "job", "professional"],
        duration: "3-4 Months",
        fee: "₹5,000 - ₹7,000",
        discountFee: "₹4,250 - ₹5,950",
        icon: "fas fa-calculator",
        bgColor: "linear-gradient(135deg, #FF5722 0%, #BF360C 100%)",
        features: ["Tally Prime", "GST Accounting", "Inventory", "Taxation"],
        description: "टैली प्राइम सॉफ्टवेयर में पूरी अकाउंटिंग और जीएसटी का प्रशिक्षण।",
        syllabus: ["Tally Prime Introduction", "GST Implementation", "Inventory Management", "Practical Projects"],
        careerOpportunities: ["Accountant", "GST Accountant", "Bookkeeper"]
    }
];

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initPage();
    loadCourses();
    setupEventListeners();
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

function initPage() {
    // Hide loader
    setTimeout(() => {
        const loader = document.getElementById('pageLoader');
        if (loader) {
            loader.style.display = 'none';
        }
    }, 1000);
}

function loadCourses() {
    const containers = {
        'all': document.getElementById('all-courses-container'),
        'beginner': document.getElementById('beginner-courses-container'),
        'job': document.getElementById('job-courses-container'),
        'professional': document.getElementById('professional-courses-container')
    };
    
    // Clear containers
    Object.values(containers).forEach(container => {
        if (container) container.innerHTML = '';
    });
    
    // Load courses
    COURSES_DATA.forEach(course => {
        const courseCard = createCourseCard(course);
        
        // Add to all containers based on category
        course.category.forEach(cat => {
            if (containers[cat]) {
                containers[cat].appendChild(courseCard.cloneNode(true));
            }
        });
    });
    
    // Add event listeners to course buttons
    document.querySelectorAll('.course-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const courseId = this.getAttribute('data-course-id');
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
                <i class="${course.icon}"></i>
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
                ${course.features.map(feat => `
                    <div class="feature-item">
                        <i class="fas fa-check-circle"></i>
                        <span>${feat}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="course-footer">
            <button class="course-btn" data-course-id="${course.id}">
                <i class="fas fa-info-circle"></i>
                कोर्स विवरण देखें
            </button>
        </div>
    `;
    return card;
}

function setupEventListeners() {
    // Mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navList = document.getElementById('navList');
    const overlay = document.getElementById('mobileMenuOverlay');
    
    if (mobileBtn && navList) {
        mobileBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', () => {
            navList.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    
    // Category tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            switchCategory(category);
        });
    });
    
    // Testimonial form
    const testimonialForm = document.getElementById('testimonialForm');
    if (testimonialForm) {
        testimonialForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitTestimonial();
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitContactForm();
        });
    }
    
    // Back to top
    window.addEventListener('scroll', function() {
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navList && navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    overlay.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function switchCategory(category) {
    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-category') === category) {
            tab.classList.add('active');
        }
    });
    
    // Show selected category
    document.querySelectorAll('.courses-by-category').forEach(catDiv => {
        catDiv.classList.remove('active');
        if (catDiv.id === `category-${category}`) {
            catDiv.classList.add('active');
        }
    });
}

function openCourseModal(courseId) {
    const course = COURSES_DATA.find(c => c.id == courseId);
    if (!course) return;
    
    const modalContent = `
        <button class="course-modal-close" onclick="closeCourseModal()">×</button>
        <div class="course-modal-header" style="background: ${course.bgColor};">
            <div class="course-modal-icon">
                <i class="${course.icon}"></i>
            </div>
            <h2>${course.title}</h2>
            <p>${course.subtitle}</p>
        </div>
        <div class="course-modal-content">
            <div class="course-info">
                <div class="info-item"><strong>Duration:</strong> ${course.duration}</div>
                <div class="info-item"><strong>Fee:</strong> ${course.fee}</div>
                <div class="info-item"><strong>Discount Fee:</strong> ${course.discountFee}</div>
            </div>
            <div class="course-description">
                <h3>Course Description</h3>
                <p>${course.description}</p>
            </div>
            <div class="course-actions">
                <a href="tel:+919244240484" class="modal-btn call-btn">
                    <i class="fas fa-phone"></i> Call for Admission
                </a>
                <a href="https://wa.me/919244240484" class="modal-btn whatsapp-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
            </div>
        </div>
    `;
    
    document.getElementById('courseModalContent').innerHTML = modalContent;
    document.getElementById('courseModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeCourseModal() {
    document.getElementById('courseModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function submitTestimonial() {
    const name = document.getElementById('testimonialName').value;
    const course = document.getElementById('testimonialCourse').value;
    const text = document.getElementById('testimonialText').value;
    
    if (!name || !course || !text) {
        alert('Please fill all fields');
        return;
    }
    
    // Add testimonial to display
    const testimonialHTML = `
        <div class="testimonial-card-new">
            <div class="testimonial-date">Today</div>
            <div class="testimonial-text">"${text}"</div>
            <div class="testimonial-author">
                <div class="author-avatar">${name.charAt(0)}</div>
                <div class="author-info">
                    <h4>${name}</h4>
                    <p>${course} • Student</p>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('testimonialsContainer').insertAdjacentHTML('afterbegin', testimonialHTML);
    
    // Clear form
    document.getElementById('testimonialForm').reset();
    document.getElementById('charCount').textContent = '0';
    
    alert('Thank you for your review!');
}

function submitContactForm() {
    const name = document.getElementById('contactName').value;
    const mobile = document.getElementById('contactMobile').value;
    const course = document.getElementById('inquiryCourse').value;
    
    if (!name || !mobile) {
        alert('Please fill required fields');
        return;
    }
    
    // Create WhatsApp message
    const message = `New Admission Inquiry:%0A%0AName: ${name}%0AMobile: ${mobile}%0ACourse: ${course}%0A%0AFrom: Guru Computer Institute Website`;
    
    // Open WhatsApp
    window.open(`https://wa.me/919244240484?text=${message}`, '_blank');
    
    // Clear form
    document.getElementById('contactForm').reset();
    
    alert('Opening WhatsApp to send your inquiry...');
}

// Global functions
window.closeCourseModal = closeCourseModal;