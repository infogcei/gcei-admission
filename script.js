// script.js - Professional Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (menuToggle && !menuToggle.contains(event.target) && 
            mobileNav && !mobileNav.contains(event.target)) {
            mobileNav.style.display = 'none';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (mobileNav) {
                    mobileNav.style.display = 'none';
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Course Category Filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const courseCards = document.querySelectorAll('.course-card');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const selectedCategory = this.dataset.category;
            
            // Filter course cards
            courseCards.forEach(card => {
                const cardCategories = card.dataset.category.split(' ');
                
                if (selectedCategory === 'all' || cardCategories.includes(selectedCategory)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Quick Inquiry Form Submission
    const quickInquiryForm = document.getElementById('quickInquiryForm');
    if (quickInquiryForm) {
        quickInquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('inquiryName').value;
            const mobile = document.getElementById('inquiryMobile').value;
            const course = document.getElementById('inquiryCourse').value;
            
            // Create WhatsApp message
            const message = `🎓 *क्विक इन्क्वायरी - गुरु कंप्यूटर इंस्टीट्यूट* 🎓

*नाम:* ${name}
*मोबाइल:* ${mobile}
*कोर्स:* ${course}

*संस्थान:* गुरु कंप्यूटर एजुकेशन इंस्टीट्यूट
*स्थान:* बिल्हा, बिलासपुर (छ.ग.)
*समय:* ${new Date().toLocaleString('hi-IN')}`;
            
            // Encode message for WhatsApp
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/919244240484?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Reset form
            quickInquiryForm.reset();
            
            // Show success message
            alert('✅ पूछताछ सफलतापूर्वक सबमिट हो गई!\n\nआपको WhatsApp पर रीडायरेक्ट किया जाएगा।');
        });
    }
    
    // Course Data
    const coursesData = {
        'basic': {
            title: 'बेसिक कंप्यूटर कोर्स',
            icon: 'fas fa-desktop',
            duration: '2 माह',
            fees: '₹3,000',
            description: 'शुरुआती लोगों के लिए कंप्यूटर की बेसिक जानकारी। विंडोज, इंटरनेट, ईमेल और बेसिक सॉफ्टवेयर का उपयोग।'
        },
        'office': {
            title: 'MS Office Complete',
            icon: 'fas fa-file-excel',
            duration: '3 माह',
            fees: '₹4,500',
            description: 'वर्ड, एक्सेल, पावरपॉइंट और एक्सेस का कंप्लीट कोर्स। ऑफिस ऑटोमेशन और प्रोफेशनल डॉक्युमेंटेशन।'
        },
        'tally': {
            title: 'Tally Prime GST',
            icon: 'fas fa-calculator',
            duration: '3 माह',
            fees: '₹5,000',
            description: 'कंप्लीट अकाउंटिंग with GST इम्प्लीमेंटेशन। बिजनेस अकाउंटिंग, इन्वेंटरी मैनेजमेंट और टैक्स फाइलिंग।'
        },
        'dca': {
            title: 'DCA Course',
            icon: 'fas fa-laptop-code',
            duration: '6 माह',
            fees: '₹8,000',
            description: 'डिप्लोमा in कंप्यूटर एप्लीकेशन। सभी एसेंशियल कंप्यूटर एप्लीकेशन का कंप्लीट कोर्स।'
        },
        'pgdca': {
            title: 'PGDCA Course',
            icon: 'fas fa-user-graduate',
            duration: '1 वर्ष',
            fees: '₹12,000',
            description: 'पोस्ट ग्रेजुएट डिप्लोमा in कंप्यूटर एप्लीकेशन। ग्रेजुएट्स के लिए एडवांस्ड लेवल कोर्स।'
        },
        'photoshop': {
            title: 'Adobe Photoshop',
            icon: 'fas fa-paint-brush',
            duration: '2 माह',
            fees: '₹4,000',
            description: 'प्रोफेशनल ग्राफिक डिज़ाइन, फोटो एडिटिंग और डिजिटल आर्ट क्रिएशन।'
        },
        'canva': {
            title: 'Canva Design',
            icon: 'fas fa-palette',
            duration: '1 माह',
            fees: '₹3,000',
            description: 'सोशल मीडिया ग्राफिक्स, प्रेजेंटेशन और मार्केटिंग मटेरियल डिज़ाइन।'
        },
        'ai': {
            title: 'AI ChatGPT Course',
            icon: 'fas fa-robot',
            duration: '1 माह',
            fees: '₹3,500',
            description: 'आर्टिफिशियल इंटेलिजेंस, ChatGPT और प्रॉम्प्ट इंजीनियरिंग। कंटेंट क्रिएशन और प्रॉब्लम सॉल्विंग।'
        }
    };
    
    // Open Course Modal
    window.openCourseModal = function(courseId) {
        const course = coursesData[courseId];
        if (!course) {
            alert('कोर्स डिटेल्स जल्द ही आ रही हैं! कृपया कॉल करें: 92442 40484');
            return;
        }
        
        const modalContent = `
            <div style="padding: 30px; text-align: center;">
                <div style="font-size: 60px; color: #00695c; margin-bottom: 20px;">
                    <i class="${course.icon}"></i>
                </div>
                <h3 style="color: #004d40; margin-bottom: 15px;">${course.title}</h3>
                <div style="display: flex; justify-content: center; gap: 30px; margin: 20px 0;">
                    <div style="text-align: center;">
                        <div style="font-size: 12px; color: #666; margin-bottom: 5px;">Duration</div>
                        <div style="font-weight: 700; color: #004d40;">${course.duration}</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 12px; color: #666; margin-bottom: 5px;">Fees</div>
                        <div style="font-weight: 700; color: #004d40;">${course.fees}</div>
                    </div>
                </div>
                <p style="color: #555; line-height: 1.6; margin-bottom: 30px;">${course.description}</p>
                
                <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 30px;">
                    <button onclick="enrollCourse('${courseId}')" style="background: #00695c; color: white; border: none; padding: 15px; border-radius: 5px; font-weight: 600; cursor: pointer;">
                        <i class="fas fa-file-alt"></i> एनरोल नाउ - ${course.fees}
                    </button>
                    <button onclick="bookDemo('${courseId}')" style="background: #ff9800; color: white; border: none; padding: 15px; border-radius: 5px; font-weight: 600; cursor: pointer;">
                        <i class="fas fa-calendar-alt"></i> फ्री डेमो क्लास बुक करें
                    </button>
                    <button onclick="whatsappQuery('${courseId}')" style="background: #25d366; color: white; border: none; padding: 15px; border-radius: 5px; font-weight: 600; cursor: pointer;">
                        <i class="fab fa-whatsapp"></i> WhatsApp पर डिटेल्स के लिए
                    </button>
                </div>
            </div>
        `;
        
        // Create modal
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '2000';
        
        const modalBox = document.createElement('div');
        modalBox.style.background = 'white';
        modalBox.style.borderRadius = '10px';
        modalBox.style.width = '90%';
        modalBox.style.maxWidth = '500px';
        modalBox.style.position = 'relative';
        modalBox.innerHTML = modalContent;
        
        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '15px';
        closeBtn.style.right = '15px';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.fontSize = '28px';
        closeBtn.style.color = '#666';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = function() {
            document.body.removeChild(modal);
        };
        
        modalBox.appendChild(closeBtn);
        modal.appendChild(modalBox);
        
        // Close on outside click
        modal.onclick = function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        };
        
        document.body.appendChild(modal);
    };
    
    // Open Admission Modal
    window.openAdmissionModal = function() {
        const modalContent = `
            <div style="padding: 30px;">
                <h3 style="color: #004d40; margin-bottom: 20px; text-align: center;">
                    <i class="fas fa-file-alt"></i> ऑनलाइन एडमिशन फॉर्म
                </h3>
                
                <form id="admissionModalForm" onsubmit="submitAdmissionForm(event)" style="display: flex; flex-direction: column; gap: 15px;">
                    <div>
                        <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #333;">पूरा नाम *</label>
                        <input type="text" required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 5px;">
                    </div>
                    
                    <div>
                        <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #333;">मोबाइल नंबर *</label>
                        <input type="tel" required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 5px;">
                    </div>
                    
                    <div>
                        <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #333;">कोर्स चुनें *</label>
                        <select required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 5px;">
                            <option value="">-- कोर्स चुनें --</option>
                            <option>बेसिक कंप्यूटर</option>
                            <option>MS Office</option>
                            <option>Tally Prime GST</option>
                            <option>DCA Course</option>
                            <option>PGDCA Course</option>
                            <option>Photoshop</option>
                            <option>AI ChatGPT</option>
                        </select>
                    </div>
                    
                    <button type="submit" style="background: #00695c; color: white; border: none; padding: 15px; border-radius: 5px; font-weight: 600; cursor: pointer; margin-top: 10px;">
                        <i class="fas fa-paper-plane"></i> एडमिशन फॉर्म सबमिट करें
                    </button>
                </form>
                
                <p style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
                    <i class="fas fa-info-circle"></i> हम आपसे संपर्क करेंगे और admission process बताएंगे।
                </p>
            </div>
        `;
        
        showModal(modalContent, 'एडमिशन फॉर्म');
    };
    
    // Show Modal Function
    function showModal(content, title = '') {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '2000';
        
        const modalBox = document.createElement('div');
        modalBox.style.background = 'white';
        modalBox.style.borderRadius = '10px';
        modalBox.style.width = '90%';
        modalBox.style.maxWidth = '500px';
        modalBox.style.maxHeight = '90vh';
        modalBox.style.overflowY = 'auto';
        modalBox.style.position = 'relative';
        
        if (title) {
            modalBox.innerHTML = `
                <div style="padding: 20px; border-bottom: 1px solid #eee;">
                    <h3 style="margin: 0; color: #004d40;">${title}</h3>
                </div>
                ${content}
            `;
        } else {
            modalBox.innerHTML = content;
        }
        
        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '15px';
        closeBtn.style.right = '15px';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.fontSize = '28px';
        closeBtn.style.color = '#666';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = function() {
            document.body.removeChild(modal);
        };
        
        modalBox.appendChild(closeBtn);
        modal.appendChild(modalBox);
        
        // Close on outside click
        modal.onclick = function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        };
        
        document.body.appendChild(modal);
    }
    
    // Course Actions
    window.enrollCourse = function(courseId) {
        const course = coursesData[courseId];
        const message = `मैं ${course.title} कोर्स में एनरोल करना चाहता/चाहती हूँ (${course.fees})। कृपया admission process और required documents बताएं।`;
        const whatsappUrl = `https://wa.me/919244240484?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        closeAllModals();
    };
    
    window.bookDemo = function(courseId) {
        const course = coursesData[courseId];
        const message = `मैं ${course.title} कोर्स के लिए फ्री डेमो क्लास बुक करना चाहता/चाहती हूँ। कृपया available slots और demo class details बताएं।`;
        const whatsappUrl = `https://wa.me/919244240484?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        closeAllModals();
    };
    
    window.whatsappQuery = function(courseId) {
        let message;
        if (courseId === 'all') {
            message = `मुझे course counseling चाहिए। कृपया मेरी qualification और career goals के based पर सुझाव दें कि कौन सा course मेरे लिए best रहेगा।`;
        } else {
            const course = coursesData[courseId];
            message = `मुझे ${course.title} कोर्स के बारे में query है। कृपया details बताएं: syllabus, duration, fees, career opportunities, और batch timings।`;
        }
        
        const whatsappUrl = `https://wa.me/919244240484?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        closeAllModals();
    };
    
    // Submit Admission Form
    window.submitAdmissionForm = function(e) {
        e.preventDefault();
        const form = e.target;
        const name = form.querySelector('input[type="text"]').value;
        const mobile = form.querySelector('input[type="tel"]').value;
        const course = form.querySelector('select').value;
        
        const message = `🎓 *एडमिशन फॉर्म - गुरु कंप्यूटर इंस्टीट्यूट* 🎓

*नाम:* ${name}
*मोबाइल:* ${mobile}
*कोर्स:* ${course}

*संस्थान:* गुरु कंप्यूटर एजुकेशन इंस्टीट्यूट
*स्थान:* बिल्हा, बिलासपुर (छ.ग.)
*समय:* ${new Date().toLocaleString('hi-IN')}`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919244240484?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
        closeAllModals();
        alert('✅ एडमिशन फॉर्म सफलतापूर्वक सबमिट हो गया!\n\nआपको WhatsApp पर रीडायरेक्ट किया जाएगा।');
    };
    
    // Submit Quick Inquiry
    window.submitQuickInquiry = function(e) {
        e.preventDefault();
        const form = e.target;
        const name = document.getElementById('inquiryName').value;
        const mobile = document.getElementById('inquiryMobile').value;
        const course = document.getElementById('inquiryCourse').value;
        
        const message = `🎓 *क्विक इन्क्वायरी - गुरु कंप्यूटर इंस्टीट्यूट* 🎓

*नाम:* ${name}
*मोबाइल:* ${mobile}
*कोर्स:* ${course}

*संस्थान:* गुरु कंप्यूटर एजुकेशन इंस्टीट्यूट
*स्थान:* बिल्हा, बिलासपुर (छ.ग.)
*समय:* ${new Date().toLocaleString('hi-IN')}`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919244240484?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
        form.reset();
        alert('✅ पूछताछ सफलतापूर्वक सबमिट हो गई!\n\nआपको WhatsApp पर रीडायरेक्ट किया जाएगा।');
    };
    
    // Close all modals
    function closeAllModals() {
        document.querySelectorAll('[style*="position: fixed"][style*="rgba(0,0,0,0.8)"]').forEach(modal => {
            document.body.removeChild(modal);
        });
    }
    
    // Scroll to top
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        return false;
    };
    
    // Initialize animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.course-card, .stat-card, .timing-card, .team-member');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.course-card, .stat-card, .timing-card, .team-member').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    setTimeout(animateOnScroll, 100);
});