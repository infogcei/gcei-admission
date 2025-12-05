// Main JavaScript for Guru Computer Institute Website

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MOBILE MENU TOGGLE =====
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // ===== SMOOTH SCROLLING =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });
    
    // ===== ADMISSION FORM SUBMISSION =====
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = Object.fromEntries(formData.entries());
            
            // Validate form
            if (!formObject.name || !formObject.mobile || !formObject.course) {
                alert('Please fill all required fields (*)');
                return;
            }
            
            // Create WhatsApp message
            const whatsappMessage = `🎓 *NEW ADMISSION FORM - GURU COMPUTER INSTITUTE* 🎓

📛 *Name:* ${formObject.name}
📱 *Mobile:* ${formObject.mobile}
📧 *Email:* ${formObject.email || 'Not provided'}
🎯 *Course:* ${formObject.course}
⏰ *Batch:* ${formObject.batch || 'Not specified'}
💬 *Message:* ${formObject.message || 'No message'}

📍 *Institute:* Guru Computer Education Institute
📌 *Location:* Bilha, Bilaspur (C.G.)
🕒 *Submission Time:* ${new Date().toLocaleString('hi-IN')}

Please contact this student for admission process.`;

            // Encode for WhatsApp URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/919244240484?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Show success message
            showNotification('✅ Admission form submitted successfully! We will contact you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // ===== COURSE ENROLLMENT BUTTONS =====
    const courseButtons = document.querySelectorAll('.course-btn');
    const courseModal = document.getElementById('courseModal');
    const modalCourseTitle = document.getElementById('modalCourseTitle');
    const modalCourseDesc = document.getElementById('modalCourseDesc');
    const modalCourseFee = document.getElementById('modalCourseFee');
    const modalClose = document.querySelector('.modal-close');
    
    // Course data
    const courses = {
        'Tally Prime GST': {
            desc: 'Complete accounting course with GST implementation, billing, inventory management and tax filing. Learn Tally Prime from basics to advanced level.',
            fee: '₹5,000',
            duration: '3 Months'
        },
        'DCA Course': {
            desc: 'Diploma in Computer Applications - Complete computer knowledge including MS Office, Internet, Basic Programming, and Tally.',
            fee: '₹8,000',
            duration: '6 Months'
        },
        'MS Office': {
            desc: 'Master Microsoft Word, Excel, PowerPoint for office jobs. Learn document creation, data analysis, presentations and professional reporting.',
            fee: '₹4,500',
            duration: '3 Months'
        },
        'Basic Computer': {
            desc: 'Computer fundamentals from scratch. Learn Windows operating system, file management, internet browsing, email and basic troubleshooting.',
            fee: '₹3,000',
            duration: '2 Months'
        },
        'Photoshop': {
            desc: 'Adobe Photoshop for graphic design, photo editing, digital art creation. Learn professional design techniques for social media and business.',
            fee: '₹4,000',
            duration: '2 Months'
        },
        'AI ChatGPT': {
            desc: 'Artificial Intelligence and ChatGPT course. Learn prompt engineering, AI tools for content creation, coding assistance and business applications.',
            fee: '₹3,500',
            duration: '1 Month'
        },
        'Typing': {
            desc: 'English and Hindi typing course. Learn touch typing with speed and accuracy. Essential skill for data entry jobs and office work.',
            fee: '₹2,000',
            duration: '1 Month'
        },
        'PGDCA Course': {
            desc: 'Post Graduate Diploma in Computer Applications. Advanced computer training for graduates. Includes programming, database management and web development.',
            fee: '₹12,000',
            duration: '1 Year'
        }
    };
    
    // Add click event to course buttons
    courseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseName = this.getAttribute('data-course');
            const course = courses[courseName];
            
            if (course) {
                modalCourseTitle.textContent = courseName;
                modalCourseDesc.textContent = course.desc;
                modalCourseFee.textContent = course.fee;
                
                // Store current course for enrollment
                currentCourse = courseName;
                
                // Show modal
                courseModal.style.display = 'flex';
            }
        });
    });
    
    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            courseModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    courseModal.addEventListener('click', function(e) {
        if (e.target === this) {
            courseModal.style.display = 'none';
        }
    });
    
    // ===== VIEW ALL COURSES BUTTON =====
    const viewAllBtn = document.getElementById('viewAllCourses');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            const allCourses = Object.keys(courses).map(course => 
                `• ${course}: ${courses[course].fee} (${courses[course].duration})`
            ).join('\n');
            
            const message = `📚 *ALL COURSES LIST - GURU COMPUTER INSTITUTE* 📚\n\n${allCourses}\n\nPlease let me know which course you are interested in.`;
            
            const whatsappUrl = `https://wa.me/919244240484?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
    
    // ===== NOTIFICATION FUNCTION =====
    function showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification-popup';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            background: ${type === 'success' ? '#4CAF50' : '#FF9800'};
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 15px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            max-width: 400px;
        `;
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
    
    // ===== ACTIVE NAV LINK HIGHLIGHT =====
    function highlightNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    highlightNavLink();
    
    // ===== COUNTER ANIMATION =====
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-box h3');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace('+', ''));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.floor(current) + '+';
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target + '+';
                }
            };
            
            // Start when in viewport
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
            
            observer.observe(counter);
        });
    }
    
    animateCounters();
    
    // ===== WHATSAPP DIRECT CHAT =====
    document.querySelectorAll('.whatsapp-btn, .float-whatsapp').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (!this.href.includes('wa.me')) {
                e.preventDefault();
                const message = "Hello Guru Computer Institute, I'm interested in your courses. Can you please share more details?";
                const whatsappUrl = `https://wa.me/919244240484?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            }
        });
    });
    
    // ===== LAZY LOAD IMAGES =====
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                if (src) {
                    img.src = src;
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        if (img.getAttribute('data-src')) {
            imageObserver.observe(img);
        }
    });
    
});

// ===== GLOBAL FUNCTIONS FOR MODAL =====
let currentCourse = '';

function enrollCourse() {
    if (!currentCourse) return;
    
    const message = `I want to enroll in ${currentCourse} course. Please share the admission process and fee details.`;
    const whatsappUrl = `https://wa.me/919244240484?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Close modal
    document.getElementById('courseModal').style.display = 'none';
}

function whatsappQuery() {
    if (!currentCourse) return;
    
    const message = `I have query about ${currentCourse} course. Please share syllabus, duration, fees and career opportunities.`;
    const whatsappUrl = `https://wa.me/919244240484?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Close modal
    document.getElementById('courseModal').style.display = 'none';
}

// ===== INSTITUTE DATA =====
window.instituteInfo = {
    name: "Guru Computer Education Institute",
    address: "Near Police Station, Dagori Road, Bilha, Bilaspur (C.G.) - 495224",
    phone: "9244240484",
    whatsapp: "919244240484",
    email: "info.gceiofficial@gmail.com",
    social: {
        facebook: "https://www.facebook.com/gceiofficial/",
        instagram: "https://www.instagram.com/gceiofficial/",
        youtube: "https://www.youtube.com/channel/UCebEVcrSsWWxWr2qVGRLk6w",
        location: "https://maps.app.goo.gl/sYdLaS4EFBz9a4go6"
    }
};