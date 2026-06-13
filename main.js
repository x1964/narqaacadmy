// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة جميع الوظائف
    initMobileMenu();
    initScrollToTop();
    initScheduleTabs();
    initCounters();
    initSmoothScroll();
    initFormValidation();
    initCurrentYear();
    initNavbarScroll();
    initLanguageSwitcher();
    initTeacherCards();
    initContactForm();
    
    // تحميل اللغة الافتراضية
    loadLanguage('ar');
    
    // إضافة تأثيرات عند التمرير
    initScrollAnimations();
});

// القائمة الجوال
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// العودة للأعلى
function initScrollToTop() {
    const scrollBtn = document.querySelector('.scroll-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// تبادل جدول الحصص
function initScheduleTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const scheduleData = document.getElementById('schedule-data');
    
    // بيانات الجدول (يمكن استبدالها ببيانات حقيقية من قاعدة بيانات)
    const schedule = {
        saturday: [
            { time: '09:00 - 10:00', teacher: 'الشيخ عبدالرحمن', level: 'مبتدئ', type: 'تحفيظ', action: 'حجز' },
            { time: '14:00 - 15:00', teacher: 'الشيخ محمد', level: 'متوسط', type: 'مراجعة', action: 'حجز' },
            { time: '18:00 - 19:00', teacher: 'الشيخ أحمد', level: 'متقدم', type: 'تجويد', action: 'حجز' }
        ],
        sunday: [
            { time: '10:00 - 11:00', teacher: 'الشيخ علي', level: 'مبتدئ', type: 'تحفيظ', action: 'حجز' },
            { time: '16:00 - 17:00', teacher: 'الشيخ عمر', level: 'متوسط', type: 'مراجعة', action: 'حجز' }
        ],
        // ... إضافة باقي الأيام
    };
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // إزالة النشط من جميع الأزرار
            tabBtns.forEach(b => b.classList.remove('active'));
            // إضافة النشط للزر المضغوط
            btn.classList.add('active');
            
            const day = btn.dataset.day;
            renderSchedule(day);
        });
    });
    
    function renderSchedule(day) {
        scheduleData.innerHTML = '';
        
        const sessions = schedule[day] || [];
        
        if (sessions.length === 0) {
            scheduleData.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; padding: 2rem;">
                        لا توجد حصص متاحة لهذا اليوم
                    </td>
                </tr>
            `;
            return;
        }
        
        sessions.forEach(session => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${session.time}</td>
                <td>${session.teacher}</td>
                <td><span class="level-badge">${session.level}</span></td>
                <td>${session.type}</td>
                <td><button class="btn primary-btn book-btn" style="padding: 0.5rem 1rem;">${session.action}</button></td>
            `;
            scheduleData.appendChild(row);
        });
    }
    
    // عرض الجدول الأول افتراضياً
    renderSchedule('saturday');
}

// العدادات المتزايدة
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                const duration = 2000; // 2 ثانية
                const increment = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 16);
                
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// التمرير السلس
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href.startsWith('#home')) {
                return;
            }
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// التحقق من النماذج
function initFormValidation() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const inputs = this.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#dc3545';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // هنا يمكن إرسال البيانات للخادم
                this.reset();
                showNotification('تم إرسال رسالتك بنجاح!', 'success');
            } else {
                showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
            }
        });
    }
}

// إظهار الإشعارات
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#2D5F2E' : '#dc3545'};
        color: white;
        border-radius: 10px;
        z-index: 2000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// السنة الحالية
function initCurrentYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// شريط التنقل المتحرك
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// محول اللغة
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('[data-lang]');
    const mobileLangSelect = document.querySelector('.language-selector');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            loadLanguage(lang);
        });
    });
    
    if (mobileLangSelect) {
        mobileLangSelect.addEventListener('change', (e) => {
            loadLanguage(e.target.value);
        });
    }
}

// تأثيرات بطاقات المحفظين
function initTeacherCards() {
    const teacherCards = document.querySelectorAll('.teacher-card');
    
    teacherCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// نموذج التواصل
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        // تأثير عند التركيز
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = '';
        });
        
        // تحقق أثناء الكتابة
        input.addEventListener('input', () => {
            if (input.value.trim()) {
                input.style.borderColor = '#2D5F2E';
            }
        });
    });
}

// تأثيرات التمرير
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // مراقبة جميع العناصر التي نريد إضافة تأثيرات لها
    document.querySelectorAll('.feature-card, .teacher-card, .stat-card, .info-item').forEach(el => {
        observer.observe(el);
    });
}

// تأثيرات CSS إضافية
const style = document.createElement('style');
style.textContent = `
    .notification {
        font-weight: 500;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .level-badge {
        background: var(--gradient);
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.9rem;
    }
    
    .book-btn {
        animation: pulse 2s infinite;
    }
    
    .animate {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    .feature-card.animate {
        animation-delay: calc(var(--index) * 0.1s);
    }
`;

document.head.appendChild(style);