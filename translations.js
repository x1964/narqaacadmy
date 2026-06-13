// ========== نظام الترجمة الكامل ==========

const translations = {
    ar: {
        // التنقل
        "nav.home": "الرئيسية",
        "nav.features": "المميزات",
        "nav.teachers": "المحفظون",
        "nav.schedule": "جدول",
        "nav.contact": "اتصل",
        "nav.profile": "البروفايل",
        "nav.login": "تسجيل الدخول",
        "nav.register": "إنشاء حساب",
        
        // البطل
        "hero.title": "تعلم القرآن الكريم بسهولة مع أفضل المحفظين",
        "hero.subtitle": "منصة متكاملة لتحفيظ القرآن الكريم عبر الإنترنت مع متابعة التقدم وإمكانية حجز جلسات مباشرة مع مشايخ متخصصين.",
        "hero.cta1": "ابدأ التعلم الآن",
        "hero.cta2": "تعرف على المزيد",
        "hero.image_alt": "تحفيظ القرآن",
        
        // الإحصائيات
        "stats.students": "طالب",
        "stats.teachers": "محفظ",
        "stats.sessions": "جلسة",
        "stats.hours": "ساعة تعليم",
        "stats.certificates": "شهادة",
        
        // المميزات
        "features.title": "مميزات المنصة",
        "features.subtitle": "كل ما تحتاجه لتحفيظ القرآن الكريم في مكان واحد",
        "features.feature1.title": "جلسات مباشرة",
        "features.feature1.desc": "جلسات تحفيظ مباشرة عبر Zoom أو Skype مع أفضل المحفظين",
        "features.feature2.title": "متابعة التقدم",
        "features.feature2.desc": "نظام متكامل لمتابعة تقدمك في الحفظ والمراجعة",
        "features.feature3.title": "جدولة مرنة",
        "features.feature3.desc": "اختر المواعيد المناسبة لك من جدول المحفظ",
        "features.feature4.title": "نظام تحفيزي",
        "features.feature4.desc": "حصولك على شهادات ونقاط عند إتمام أجزاء من القرآن",
        "features.feature5.title": "تلاوات متنوعة",
        "features.feature5.desc": "اختيار بين القراءات العشر وروايات متعددة",
        "features.feature6.title": "معلمون معتمدون",
        "features.feature6.desc": "محفظون معتمدون من الأزهر والجامعات الإسلامية",
        
        // المحفظون
        "teachers.title": "المحفظون المعتمدون",
        "teachers.subtitle": "تعلم من أفضل المحفظين المعتمدين",
        "teachers.teacher1.name": "الشيخ عبدالرحمن راضي",
        "teachers.teacher1.qualification": "إجازة في رواية حفص عن عاصم",
        "teachers.verified": "موثّق",
        "teachers.book_button": "حجز جلسة",
        
        // الجدول
        "schedule.title": "جدول الحصص المتاحة",
        "schedule.subtitle": "اختر الوقت المناسب لك وابدأ رحلتك مع القرآن الكريم",
        "schedule.table.time": "الوقت",
        "schedule.table.teacher": "المحفظ",
        "schedule.table.level": "المستوى",
        "schedule.table.type": "نوع الجلسة",
        "schedule.table.action": "الإجراء",
        
        // الأيام
        "days.saturday": "السبت",
        "days.sunday": "الأحد",
        "days.monday": "الإثنين",
        "days.tuesday": "الثلاثاء",
        "days.wednesday": "الأربعاء",
        "days.thursday": "الخميس",
        "days.friday": "الجمعة",
        
        // التواصل
        "contact.title": "تواصل معنا",
        "contact.subtitle": "نحن هنا لمساعدتك في أي استفسار",
        "contact.email": "البريد الإلكتروني",
        "contact.phone": "الهاتف",
        "contact.address": "العنوان",
        "contact.form.name": "اسمك الكريم",
        "contact.form.email": "بريدك الإلكتروني",
        "contact.form.subject": "الموضوع",
        "contact.form.message": "رسالتك",
        "contact.form.submit": "إرسال الرسالة",
        
        // التذييل
        "footer.about.desc": "منصة متكاملة لتحفيظ القرآن الكريم عبر الإنترنت مع أفضل المحفظين والمعلمين.",
        "footer.links.title": "روابط سريعة",
        "footer.services.title": "خدماتنا",
        "footer.services.service1": "تحفيظ القرآن",
        "footer.services.service2": "مراجعة الحفظ",
        "footer.services.service3": "تعليم التجويد",
        "footer.services.service4": "القراءات العشر",
        "footer.services.service5": "دورات التفسير",
        "footer.newsletter.title": "النشرة البريدية",
        "footer.newsletter.desc": "اشترك ليصلك كل جديد عن المنصة والعروض الخاصة.",
        "footer.newsletter.placeholder": "بريدك الإلكتروني",
        "footer.newsletter.submit": "اشترك",
        "footer.copyright": "نرقي أكاديمي. جميع الحقوق محفوظة.",
        "footer.terms": "الشروط والأحكام",
        "footer.privacy": "سياسة الخصوصية",
        
        // عام
        "language": "اللغة"
    },
    
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.features": "Features",
        "nav.teachers": "Teachers",
        "nav.schedule": "Schedule",
        "nav.contact": "Contact",
        "nav.profile": "Profile",
        "nav.login": "Login",
        "nav.register": "Register",
        
        // Hero
        "hero.title": "Learn the Holy Quran Easily with the Best Teachers",
        "hero.subtitle": "A comprehensive platform for memorizing the Quran online with progress tracking and direct session booking with specialized teachers.",
        "hero.cta1": "Start Learning Now",
        "hero.cta2": "Learn More",
        "hero.image_alt": "Quran Memorization",
        
        // Statistics
        "stats.students": "Students",
        "stats.teachers": "Teachers",
        "stats.sessions": "Sessions",
        "stats.hours": "Teaching Hours",
        "stats.certificates": "Certificates",
        
        // Features
        "features.title": "Platform Features",
        "features.subtitle": "Everything you need for Quran memorization in one place",
        "features.feature1.title": "Live Sessions",
        "features.feature1.desc": "Direct memorization sessions via Zoom or Skype with the best teachers",
        "features.feature2.title": "Progress Tracking",
        "features.feature2.desc": "Comprehensive system to track your memorization and review progress",
        "features.feature3.title": "Flexible Scheduling",
        "features.feature3.desc": "Choose suitable times from the teacher's schedule",
        "features.feature4.title": "Motivational System",
        "features.feature4.desc": "Earn certificates and points when completing Quran sections",
        "features.feature5.title": "Various Recitations",
        "features.feature5.desc": "Choose between the Ten Qira'at and multiple narrations",
        "features.feature6.title": "Certified Teachers",
        "features.feature6.desc": "Teachers certified by Al-Azhar and Islamic universities",
        
        // Teachers
        "teachers.title": "Certified Teachers",
        "teachers.subtitle": "Learn from the best certified teachers",
        "teachers.teacher1.name": "Sheikh Abdulrahman Radi",
        "teachers.teacher1.qualification": "Ijaza in Hafs narration from Asim",
        "teachers.verified": "Verified",
        "teachers.book_button": "Book Session",
        
        // Schedule
        "schedule.title": "Available Class Schedule",
        "schedule.subtitle": "Choose your suitable time and start your journey with the Quran",
        "schedule.table.time": "Time",
        "schedule.table.teacher": "Teacher",
        "schedule.table.level": "Level",
        "schedule.table.type": "Session Type",
        "schedule.table.action": "Action",
        
        // Days
        "days.saturday": "Saturday",
        "days.sunday": "Sunday",
        "days.monday": "Monday",
        "days.tuesday": "Tuesday",
        "days.wednesday": "Wednesday",
        "days.thursday": "Thursday",
        "days.friday": "Friday",
        
        // Contact
        "contact.title": "Contact Us",
        "contact.subtitle": "We're here to help you with any inquiry",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.address": "Address",
        "contact.form.name": "Your Name",
        "contact.form.email": "Your Email",
        "contact.form.subject": "Subject",
        "contact.form.message": "Your Message",
        "contact.form.submit": "Send Message",
        
        // Footer
        "footer.about.desc": "A comprehensive platform for Quran memorization online with the best teachers and educators.",
        "footer.links.title": "Quick Links",
        "footer.services.title": "Our Services",
        "footer.services.service1": "Quran Memorization",
        "footer.services.service2": "Revision",
        "footer.services.service3": "Tajweed Teaching",
        "footer.services.service4": "Ten Qira'at",
        "footer.services.service5": "Tafsir Courses",
        "footer.newsletter.title": "Newsletter",
        "footer.newsletter.desc": "Subscribe to receive all updates about the platform and special offers.",
        "footer.newsletter.placeholder": "Your Email",
        "footer.newsletter.submit": "Subscribe",
        "footer.copyright": "Narqa Academy. All rights reserved.",
        "footer.terms": "Terms & Conditions",
        "footer.privacy": "Privacy Policy",
        
        // General
        "language": "Language"
    },
    
    fr: {
        // Navigation
        "nav.home": "Accueil",
        "nav.features": "Fonctionnalités",
        "nav.teachers": "Enseignants",
        "nav.schedule": "Horaire",
        "nav.contact": "Contact",
        "nav.profile": "Profil",
        "nav.login": "Connexion",
        "nav.register": "S'inscrire",
        
        // Hero
        "hero.title": "Apprenez le Saint Coran facilement avec les meilleurs enseignants",
        "hero.subtitle": "Une plateforme complète pour mémoriser le Coran en ligne avec suivi des progrès et réservation de sessions directes avec des enseignants spécialisés.",
        "hero.cta1": "Commencer à apprendre",
        "hero.cta2": "En savoir plus",
        "hero.image_alt": "Mémorisation du Coran",
        
        // Statistics
        "stats.students": "Étudiants",
        "stats.teachers": "Enseignants",
        "stats.sessions": "Sessions",
        "stats.hours": "Heures d'enseignement",
        "stats.certificates": "Certificats",
        
        // Features
        "features.title": "Fonctionnalités de la plateforme",
        "features.subtitle": "Tout ce dont vous avez besoin pour mémoriser le Coran en un seul endroit",
        "features.feature1.title": "Sessions en direct",
        "features.feature1.desc": "Sessions de mémorisation directe via Zoom ou Skype avec les meilleurs enseignants",
        "features.feature2.title": "Suivi des progrès",
        "features.feature2.desc": "Système complet pour suivre vos progrès de mémorisation et de révision",
        "features.feature3.title": "Planification flexible",
        "features.feature3.desc": "Choisissez les horaires qui vous conviennent dans l'emploi du temps de l'enseignant",
        "features.feature4.title": "Système motivationnel",
        "features.feature4.desc": "Obtenez des certificats et des points en terminant des sections du Coran",
        "features.feature5.title": "Récitations variées",
        "features.feature5.desc": "Choisissez parmi les Dix Qira'at et plusieurs narrations",
        "features.feature6.title": "Enseignants certifiés",
        "features.feature6.desc": "Enseignants certifiés par Al-Azhar et les universités islamiques",
        
        // Teachers
        "teachers.title": "Enseignants certifiés",
        "teachers.subtitle": "Apprenez des meilleurs enseignants certifiés",
        "teachers.teacher1.name": "Cheikh Abdulrahman Radi",
        "teachers.teacher1.qualification": "Ijaza dans la narration Hafs de Asim",
        "teachers.verified": "Vérifié",
        "teachers.book_button": "Réserver une session",
        
        // Schedule
        "schedule.title": "Horaire des cours disponibles",
        "schedule.subtitle": "Choisissez votre horaire convenable et commencez votre voyage avec le Coran",
        "schedule.table.time": "Heure",
        "schedule.table.teacher": "Enseignant",
        "schedule.table.level": "Niveau",
        "schedule.table.type": "Type de session",
        "schedule.table.action": "Action",
        
        // Days
        "days.saturday": "Samedi",
        "days.sunday": "Dimanche",
        "days.monday": "Lundi",
        "days.tuesday": "Mardi",
        "days.wednesday": "Mercredi",
        "days.thursday": "Jeudi",
        "days.friday": "Vendredi",
        
        // Contact
        "contact.title": "Contactez-nous",
        "contact.subtitle": "Nous sommes là pour vous aider avec toute demande",
        "contact.email": "E-mail",
        "contact.phone": "Téléphone",
        "contact.address": "Adresse",
        "contact.form.name": "Votre nom",
        "contact.form.email": "Votre e-mail",
        "contact.form.subject": "Sujet",
        "contact.form.message": "Votre message",
        "contact.form.submit": "Envoyer le message",
        
        // Footer
        "footer.about.desc": "Une plateforme complète pour mémoriser le Coran en ligne avec les meilleurs enseignants et éducateurs.",
        "footer.links.title": "Liens rapides",
        "footer.services.title": "Nos services",
        "footer.services.service1": "Mémorisation du Coran",
        "footer.services.service2": "Révision",
        "footer.services.service3": "Enseignement du Tajweed",
        "footer.services.service4": "Dix Qira'at",
        "footer.services.service5": "Cours de Tafsir",
        "footer.newsletter.title": "Newsletter",
        "footer.newsletter.desc": "Abonnez-vous pour recevoir toutes les mises à jour sur la plateforme et les offres spéciales.",
        "footer.newsletter.placeholder": "Votre e-mail",
        "footer.newsletter.submit": "S'abonner",
        "footer.copyright": "Narqa Academy. Tous droits réservés.",
        "footer.terms": "Conditions générales",
        "footer.privacy": "Politique de confidentialité",
        
        // General
        "language": "Langue"
    },
    
    ur: {
        // Navigation
        "nav.home": "ہوم",
        "nav.features": "خصوصیات",
        "nav.teachers": "اساتذہ",
        "nav.schedule": "شیڈول",
        "nav.contact": "رابطہ",
        "nav.profile": "پروفائل",
        "nav.login": "لاگ ان",
        "nav.register": "رجسٹر کریں",
        
        // Hero
        "hero.title": "بہترین اساتذہ کے ساتھ قرآن کریم آسانی سے سیکھیں",
        "hero.subtitle": "قرآن حفظ کرنے کے لیے ایک مکمل پلیٹ فارم جو آن لائن پیش رفت کی ٹریکنگ اور ماہر اساتذہ کے ساتھ براہ راست سیشن بکنگ کی سہولت فراہم کرتا ہے۔",
        "hero.cta1": "ابھی سیکھنا شروع کریں",
        "hero.cta2": "مزید جانیں",
        "hero.image_alt": "قرآن حفظ",
        
        // Statistics
        "stats.students": "طلباء",
        "stats.teachers": "اساتذہ",
        "stats.sessions": "سیشنز",
        "stats.hours": "تیاری کے گھنٹے",
        "stats.certificates": "سرٹیفیکیٹس",
        
        // Features
        "features.title": "پلیٹ فارم کی خصوصیات",
        "features.subtitle": "قرآن حفظ کرنے کے لیے آپ کی ہر ضرورت ایک ہی جگہ",
        "features.feature1.title": "براہ راست سیشنز",
        "features.feature1.desc": "بہترین اساتذہ کے ساتھ زوم یا سکائپ کے ذریعے براہ راست حفظ کے سیشنز",
        "features.feature2.title": "پیش رفت کی نگرانی",
        "features.feature2.desc": "آپ کے حفظ اور نظر ثانی کی پیش رفت کو ٹریک کرنے کا مکمل نظام",
        "features.feature3.title": "لچکدار شیڈولنگ",
        "features.feature3.desc": "استاد کے شیڈول سے اپنے مناسب اوقات کا انتخاب کریں",
        "features.feature4.title": "حوصلہ افزا نظام",
        "features.feature4.desc": "قرآن کے حصے مکمل کرنے پر سرٹیفیکیٹس اور پوائنٹس حاصل کریں",
        "features.feature5.title": "مختلف قراءتیں",
        "features.feature5.desc": "دس قراءتوں اور متعدد روایات کے درمیان انتخاب کریں",
        "features.feature6.title": "مصدقہ اساتذہ",
        "features.feature6.desc": "الازہر اور اسلامی یونیورسٹیوں سے مصدقہ اساتذہ",
        
        // Teachers
        "teachers.title": "مصدقہ اساتذہ",
        "teachers.subtitle": "بہترین مصدقہ اساتذہ سے سیکھیں",
        "teachers.teacher1.name": "شیخ عبدالرحمن راضی",
        "teachers.teacher1.qualification": "حفص عن عاصم کی روایت میں اجازہ",
        "teachers.verified": "تصدیق شدہ",
        "teachers.book_button": "سیشن بک کریں",
        
        // Schedule
        "schedule.title": "دستیاب کلاس شیڈول",
        "schedule.subtitle": "اپنا مناسب وقت منتخب کریں اور قرآن کے ساتھ اپنا سفر شروع کریں",
        "schedule.table.time": "وقت",
        "schedule.table.teacher": "استاد",
        "schedule.table.level": "لیول",
        "schedule.table.type": "سیشن کی قسم",
        "schedule.table.action": "عمل",
        
        // Days
        "days.saturday": "ہفتہ",
        "days.sunday": "اتوار",
        "days.monday": "پیر",
        "days.tuesday": "منگل",
        "days.wednesday": "بدھ",
        "days.thursday": "جمعرات",
        "days.friday": "جمعہ",
        
        // Contact
        "contact.title": "رابطہ کریں",
        "contact.subtitle": "ہم آپ کی کسی بھی استفسار میں مدد کے لیے موجود ہیں",
        "contact.email": "ای میل",
        "contact.phone": "فون",
        "contact.address": "پتہ",
        "contact.form.name": "آپ کا نام",
        "contact.form.email": "آپ کا ای میل",
        "contact.form.subject": "موضوع",
        "contact.form.message": "آپ کا پیغام",
        "contact.form.submit": "پیغام بھیجیں",
        
        // Footer
        "footer.about.desc": "قرآن حفظ کرنے کے لیے ایک مکمل آن لائن پلیٹ فارم جس میں بہترین اساتذہ اور معلمین شامل ہیں۔",
        "footer.links.title": "فوری لنکس",
        "footer.services.title": "ہماری خدمات",
        "footer.services.service1": "قرآن حفظ",
        "footer.services.service2": "نظر ثانی",
        "footer.services.service3": "تجوید کی تعلیم",
        "footer.services.service4": "دس قراءتیں",
        "footer.services.service5": "تفسیر کے کورسز",
        "footer.newsletter.title": "نیوز لیٹر",
        "footer.newsletter.desc": "پلیٹ فارم کے بارے میں تمام اپ ڈیٹس اور خصوصی پیشکشیں حاصل کرنے کے لیے سبسکرائب کریں۔",
        "footer.newsletter.placeholder": "آپ کا ای میل",
        "footer.newsletter.submit": "سبسکرائب کریں",
        "footer.copyright": "نرقہ اکیڈمی۔ جملہ حقوق محفوظ ہیں۔",
        "footer.terms": "شرائط و ضوابط",
        "footer.privacy": "پرائیویسی پالیسی",
        
        // General
        "language": "زبان"
    },
    
    id: {
        // Navigation
        "nav.home": "Beranda",
        "nav.features": "Fitur",
        "nav.teachers": "Pengajar",
        "nav.schedule": "Jadwal",
        "nav.contact": "Kontak",
        "nav.profile": "Profil",
        "nav.login": "Masuk",
        "nav.register": "Daftar",
        
        // Hero
        "hero.title": "Belajar Al-Quran dengan Mudah bersama Pengajar Terbaik",
        "hero.subtitle": "Platform komprehensif untuk menghafal Al-Quran online dengan pelacakan kemajuan dan pemesanan sesi langsung dengan pengajar spesialis.",
        "hero.cta1": "Mulai Belajar Sekarang",
        "hero.cta2": "Pelajari Lebih Lanjut",
        "hero.image_alt": "Menghafal Al-Quran",
        
        // Statistics
        "stats.students": "Siswa",
        "stats.teachers": "Pengajar",
        "stats.sessions": "Sesi",
        "stats.hours": "Jam Mengajar",
        "stats.certificates": "Sertifikat",
        
        // Features
        "features.title": "Fitur Platform",
        "features.subtitle": "Semua yang Anda butuhkan untuk menghafal Al-Quran dalam satu tempat",
        "features.feature1.title": "Sesi Langsung",
        "features.feature1.desc": "Sesi hafalan langsung via Zoom atau Skype dengan pengajar terbaik",
        "features.feature2.title": "Pelacakan Kemajuan",
        "features.feature2.desc": "Sistem komprehensif untuk melacak kemajuan hafalan dan murajaah Anda",
        "features.feature3.title": "Penjadwalan Fleksibel",
        "features.feature3.desc": "Pilih waktu yang sesuai dari jadwal pengajar",
        "features.feature4.title": "Sistem Motivasi",
        "features.feature4.desc": "Dapatkan sertifikat dan poin saat menyelesaikan bagian Al-Quran",
        "features.feature5.title": "Berbagai Qira'at",
        "features.feature5.desc": "Pilih di antara Sepuluh Qira'at dan berbagai riwayat",
        "features.feature6.title": "Pengajar Bersertifikat",
        "features.feature6.desc": "Pengajar bersertifikat dari Al-Azhar dan universitas Islam",
        
        // Teachers
        "teachers.title": "Pengajar Bersertifikat",
        "teachers.subtitle": "Belajar dari pengajar bersertifikat terbaik",
        "teachers.teacher1.name": "Syaikh Abdulrahman Radi",
        "teachers.teacher1.qualification": "Ijaza dalam riwayat Hafs dari Asim",
        "teachers.verified": "Terverifikasi",
        "teachers.book_button": "Pesan Sesi",
        
        // Schedule
        "schedule.title": "Jadwal Kelas Tersedia",
        "schedule.subtitle": "Pilih waktu yang sesuai dan mulailah perjalanan Anda dengan Al-Quran",
        "schedule.table.time": "Waktu",
        "schedule.table.teacher": "Pengajar",
        "schedule.table.level": "Tingkat",
        "schedule.table.type": "Jenis Sesi",
        "schedule.table.action": "Aksi",
        
        // Days
        "days.saturday": "Sabtu",
        "days.sunday": "Minggu",
        "days.monday": "Senin",
        "days.tuesday": "Selasa",
        "days.wednesday": "Rabu",
        "days.thursday": "Kamis",
        "days.friday": "Jumat",
        
        // Contact
        "contact.title": "Hubungi Kami",
        "contact.subtitle": "Kami siap membantu Anda dengan pertanyaan apa pun",
        "contact.email": "Email",
        "contact.phone": "Telepon",
        "contact.address": "Alamat",
        "contact.form.name": "Nama Anda",
        "contact.form.email": "Email Anda",
        "contact.form.subject": "Subjek",
        "contact.form.message": "Pesan Anda",
        "contact.form.submit": "Kirim Pesan",
        
        // Footer
        "footer.about.desc": "Platform komprehensif untuk menghafal Al-Quran online dengan pengajar dan pendidik terbaik.",
        "footer.links.title": "Tautan Cepat",
        "footer.services.title": "Layanan Kami",
        "footer.services.service1": "Hafalan Al-Quran",
        "footer.services.service2": "Murajaah",
        "footer.services.service3": "Pengajaran Tajwid",
        "footer.services.service4": "Sepuluh Qira'at",
        "footer.services.service5": "Kursus Tafsir",
        "footer.newsletter.title": "Buletin",
        "footer.newsletter.desc": "Berlangganan untuk menerima semua pembaruan tentang platform dan penawaran khusus.",
        "footer.newsletter.placeholder": "Email Anda",
        "footer.newsletter.submit": "Berlangganan",
        "footer.copyright": "Narqa Academy. Semua hak dilindungi.",
        "footer.terms": "Syarat & Ketentuan",
        "footer.privacy": "Kebijakan Privasi",
        
        // General
        "language": "Bahasa"
    },
    
    es: {
        // Navigation
        "nav.home": "Inicio",
        "nav.features": "Características",
        "nav.teachers": "Profesores",
        "nav.schedule": "Horario",
        "nav.contact": "Contacto",
        "nav.profile": "Perfil",
        "nav.login": "Iniciar Sesión",
        "nav.register": "Registrarse",
        
        // Hero
        "hero.title": "Aprende el Sagrado Corán fácilmente con los mejores profesores",
        "hero.subtitle": "Una plataforma completa para memorizar el Corán en línea con seguimiento de progreso y reserva de sesiones directas con profesores especializados.",
        "hero.cta1": "Comienza a Aprender Ahora",
        "hero.cta2": "Conoce Más",
        "hero.image_alt": "Memorización del Corán",
        
        // Statistics
        "stats.students": "Estudiantes",
        "stats.teachers": "Profesores",
        "stats.sessions": "Sesiones",
        "stats.hours": "Horas de Enseñanza",
        "stats.certificates": "Certificados",
        
        // Features
        "features.title": "Características de la Plataforma",
        "features.subtitle": "Todo lo que necesitas para memorizar el Corán en un solo lugar",
        "features.feature1.title": "Sesiones en Vivo",
        "features.feature1.desc": "Sesiones de memorización directa vía Zoom o Skype con los mejores profesores",
        "features.feature2.title": "Seguimiento de Progreso",
        "features.feature2.desc": "Sistema completo para rastrear tu progreso de memorización y revisión",
        "features.feature3.title": "Programación Flexible",
        "features.feature3.desc": "Elige los horarios que te convengan del horario del profesor",
        "features.feature4.title": "Sistema Motivacional",
        "features.feature4.desc": "Gana certificados y puntos al completar secciones del Corán",
        "features.feature5.title": "Recitaciones Variadas",
        "features.feature5.desc": "Elige entre las Diez Qira'at y múltiples narraciones",
        "features.feature6.title": "Profesores Certificados",
        "features.feature6.desc": "Profesores certificados por Al-Azhar y universidades islámicas",
        
        // Teachers
        "teachers.title": "Profesores Certificados",
        "teachers.subtitle": "Aprende de los mejores profesores certificados",
        "teachers.teacher1.name": "Sheij Abdulrahman Radi",
        "teachers.teacher1.qualification": "Ijaza en la narración Hafs de Asim",
        "teachers.verified": "Verificado",
        "teachers.book_button": "Reservar Sesión",
        
        // Schedule
        "schedule.title": "Horario de Clases Disponibles",
        "schedule.subtitle": "Elige tu horario adecuado y comienza tu viaje con el Corán",
        "schedule.table.time": "Hora",
        "schedule.table.teacher": "Profesor",
        "schedule.table.level": "Nivel",
        "schedule.table.type": "Tipo de Sesión",
        "schedule.table.action": "Acción",
        
        // Days
        "days.saturday": "Sábado",
        "days.sunday": "Domingo",
        "days.monday": "Lunes",
        "days.tuesday": "Martes",
        "days.wednesday": "Miércoles",
        "days.thursday": "Jueves",
        "days.friday": "Vierno",
        
        // Contact
        "contact.title": "Contáctanos",
        "contact.subtitle": "Estamos aquí para ayudarte con cualquier consulta",
        "contact.email": "Correo Electrónico",
        "contact.phone": "Teléfono",
        "contact.address": "Dirección",
        "contact.form.name": "Tu Nombre",
        "contact.form.email": "Tu Correo Electrónico",
        "contact.form.subject": "Asunto",
        "contact.form.message": "Tu Mensaje",
        "contact.form.submit": "Enviar Mensaje",
        
        // Footer
        "footer.about.desc": "Una plataforma completa para memorizar el Corán en línea con los mejores profesores y educadores.",
        "footer.links.title": "Enlaces Rápidos",
        "footer.services.title": "Nuestros Servicios",
        "footer.services.service1": "Memorización del Corán",
        "footer.services.service2": "Revisión",
        "footer.services.service3": "Enseñanza del Tajweed",
        "footer.services.service4": "Diez Qira'at",
        "footer.services.service5": "Cursos de Tafsir",
        "footer.newsletter.title": "Boletín",
        "footer.newsletter.desc": "Suscríbete para recibir todas las actualizaciones sobre la plataforma y ofertas especiales.",
        "footer.newsletter.placeholder": "Tu Correo Electrónico",
        "footer.newsletter.submit": "Suscribirse",
        "footer.copyright": "Narqa Academy. Todos los derechos reservados.",
        "footer.terms": "Términos y Condiciones",
        "footer.privacy": "Política de Privacidad",
        
        // General
        "language": "Idioma"
    }
};

// إدارة نظام الترجمة
class TranslationManager {
    constructor() {
        this.currentLang = 'ar';
        this.isRTL = true;
        this.init();
    }
    
    init() {
        // تحميل اللغة المحفوظة
        this.loadSavedLanguage();
        // إعداد مستمعي الأحداث
        this.setupEventListeners();
        // تطبيق اللغة الأولى
        this.applyLanguage(this.currentLang);
    }
    
    loadSavedLanguage() {
        const savedLang = localStorage.getItem('narqa-lang');
        if (savedLang && translations[savedLang]) {
            this.currentLang = savedLang;
        }
    }
    
    setupEventListeners() {
        // أزرار تغيير اللغة في الشريط العلوي
        document.querySelectorAll('.language-btn, [data-lang]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.closest('[data-lang]').dataset.lang;
                this.changeLanguage(lang);
            });
        });
        
        // القائمة المنسدلة في القائمة الجوال
        const mobileSelect = document.querySelector('.language-selector');
        if (mobileSelect) {
            mobileSelect.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
        }
        
        // تحديث القائمة المنسدلة عند تغيير اللغة
        this.updateLanguageSelectors();
    }
    
    changeLanguage(lang) {
        if (!translations[lang]) return;
        
        this.currentLang = lang;
        this.isRTL = ['ar', 'ur'].includes(lang);
        
        // حفظ اللغة
        localStorage.setItem('narqa-lang', lang);
        
        // تطبيق التغييرات
        this.applyLanguage(lang);
        
        // إظهار إشعار
        this.showLanguageChangeNotification();
    }
    
    applyLanguage(lang) {
        // تغيير اتجاه الصفحة
        this.changePageDirection();
        
        // تحديث النصوص
        this.updateAllTexts(lang);
        
        // تحديث أزرار اللغة
        this.updateLanguageButtons(lang);
        
        // تحديث الروابط حسب اللغة
        this.updateLinksForLanguage(lang);
        
        // إضافة تأثير انتقال سلس
        this.addTransitionEffect();
    }
    
    changePageDirection() {
        document.documentElement.dir = this.isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = this.currentLang;
        
        // تغيير فونت النص للغات غير العربية
        if (this.currentLang === 'ar') {
            document.body.style.fontFamily = "'Tajawal', sans-serif";
        } else {
            document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        }
    }
    
    updateAllTexts(lang) {
        const translation = translations[lang];
        
        // تحديث جميع العناصر ذات data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translation[key]) {
                // تحديث النص
                element.textContent = translation[key];
                
                // تحديث العناصر الأخرى
                if (element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translation[key]);
                }
                
                if (element.hasAttribute('title')) {
                    element.setAttribute('title', translation[key]);
                }
                
                if (element.hasAttribute('aria-label')) {
                    element.setAttribute('aria-label', translation[key]);
                }
            }
        });
        
        // تحديث النصوص الثابتة الإضافية
        this.updateStaticTexts(lang);
    }
    
    updateStaticTexts(lang) {
        // تحديث النصوص التي ليس لها data-translate
        const translation = translations[lang];
        
        // تحديث عنوان الصفحة
        document.title = translation ? `نرقي - Narqa Academy (${this.getLanguageName(lang)})` : 'نرقي - Narqa Academy';
        
        // تحديث النصوص في جدول الحصص
        this.updateScheduleTable(lang);
        
        // تحديث البيانات في بطاقات المحفظين
        this.updateTeacherCards(lang);
    }
    
    updateScheduleTable(lang) {
        const translation = translations[lang];
        if (!translation) return;
        
        // تحديث أيام الأسبوع في التبويبات
        document.querySelectorAll('[data-day]').forEach(tab => {
            const day = tab.dataset.day;
            const dayKey = `days.${day}`;
            if (translation[dayKey]) {
                tab.textContent = translation[dayKey];
            }
        });
        
        // إعادة تحميل جدول الحصص إذا كان موجوداً
        if (typeof window.renderSchedule === 'function') {
            const activeDay = document.querySelector('.tab-btn.active')?.dataset.day || 'saturday';
            window.renderSchedule(activeDay);
        }
    }
    
    updateTeacherCards(lang) {
        const translation = translations[lang];
        if (!translation) return;
        
        // تحديث بيانات المحفظين
        document.querySelectorAll('.teacher-card').forEach((card, index) => {
            if (index === 0) {
                const name = card.querySelector('h3[data-translate="teachers.teacher1.name"]');
                const qualification = card.querySelector('.teacher-qualification[data-translate="teachers.teacher1.qualification"]');
                
                if (name && translation['teachers.teacher1.name']) {
                    name.textContent = translation['teachers.teacher1.name'];
                }
                
                if (qualification && translation['teachers.teacher1.qualification']) {
                    qualification.textContent = translation['teachers.teacher1.qualification'];
                }
            }
        });
    }
    
    updateLanguageButtons(lang) {
        // تحديث زر اللغة الرئيسي
        const mainLangBtn = document.querySelector('.language-btn[data-lang]');
        if (mainLangBtn) {
            mainLangBtn.textContent = this.getLanguageName(lang);
            mainLangBtn.dataset.lang = lang;
        }
        
        // تحديث أزرار القائمة المنسدلة
        document.querySelectorAll('.language-dropdown button[data-lang]').forEach(btn => {
            btn.textContent = this.getLanguageName(btn.dataset.lang);
        });
        
        // تحديث القائمة المنسدلة في القائمة الجوال
        const mobileSelect = document.querySelector('.language-selector');
        if (mobileSelect) {
            mobileSelect.value = lang;
        }
    }
    
    updateLanguageSelectors() {
        // تحديث خيارات القائمة المنسدلة
        const selectors = document.querySelectorAll('.language-selector');
        selectors.forEach(select => {
            select.innerHTML = '';
            Object.keys(translations).forEach(lang => {
                const option = document.createElement('option');
                option.value = lang;
                option.textContent = this.getLanguageName(lang);
                if (lang === this.currentLang) {
                    option.selected = true;
                }
                select.appendChild(option);
            });
        });
    }
    
    updateLinksForLanguage(lang) {
        // تحديث روابط وسائل التواصل الاجتماعي حسب اللغة
        const whatsappLinks = document.querySelectorAll('a[href*="whatsapp"], a[href*="wa.me"]');
        whatsappLinks.forEach(link => {
            const currentHref = link.getAttribute('href');
            const message = this.getWhatsAppMessage(lang);
            const newHref = currentHref.split('?')[0] + '?text=' + encodeURIComponent(message);
            link.setAttribute('href', newHref);
        });
        
        // تحديث روابط البريد الإلكتروني
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            const currentHref = link.getAttribute('href');
            const subject = this.getEmailSubject(lang);
            const newHref = currentHref.split('?')[0] + '?subject=' + encodeURIComponent(subject);
            link.setAttribute('href', newHref);
        });
    }
    
    getWhatsAppMessage(lang) {
        const messages = {
            'ar': 'مرحباً، أريد الاستفسار عن منصة نرقي لتحفيظ القرآن',
            'en': 'Hello, I want to inquire about the Narqa platform for Quran memorization',
            'fr': 'Bonjour, je veux me renseigner sur la plateforme Narqa pour la mémorisation du Coran',
            'ur': 'السلام علیکم، میں قرآن حفظ کرنے کے لیے نرقہ پلیٹ فارم کے بارے میں پوچھنا چاہتا ہوں',
            'id': 'Halo, saya ingin bertanya tentang platform Narqa untuk menghafal Al-Quran',
            'es': 'Hola, quiero consultar sobre la plataforma Narqa para la memorización del Corán'
        };
        return messages[lang] || messages['ar'];
    }
    
    getEmailSubject(lang) {
        const subjects = {
            'ar': 'استفسار عن منصة نرقي لتحفيظ القرآن',
            'en': 'Inquiry about Narqa platform for Quran memorization',
            'fr': 'Demande de renseignements sur la plateforme Narqa pour la mémorisation du Coran',
            'ur': 'قرآن حفظ کے لیے نرقہ پلیٹ فارم کے بارے میں استفسار',
            'id': 'Pertanyaan tentang platform Narqa untuk menghafal Al-Quran',
            'es': 'Consulta sobre la plataforma Narqa para la memorización del Corán'
        };
        return subjects[lang] || subjects['ar'];
    }
    
    getLanguageName(code) {
        const names = {
            'ar': 'العربية',
            'en': 'English',
            'fr': 'Français',
            'ur': 'اردو',
            'id': 'Bahasa Indonesia',
            'es': 'Español'
        };
        return names[code] || code;
    }
    
    addTransitionEffect() {
        // إضافة تأثير انتقال سلس
        document.body.style.opacity = '0.8';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.3s ease';
            document.body.style.opacity = '1';
        }, 50);
    }
    
    showLanguageChangeNotification() {
        const notification = document.createElement('div');
        notification.className = 'language-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${this.getLanguageChangeMessage()}</span>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 2000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // إزالة الإشعار بعد 3 ثوانٍ
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    getLanguageChangeMessage() {
        const messages = {
            'ar': 'تم تغيير اللغة إلى العربية',
            'en': 'Language changed to English',
            'fr': 'Langue changée en Français',
            'ur': 'زبان اردو میں تبدیل کردی گئی',
            'id': 'Bahasa diubah ke Bahasa Indonesia',
            'es': 'Idioma cambiado a Español'
        };
        return messages[this.currentLang] || messages['ar'];
    }
    
    // دالة للمساعدة في الحصول على النص المترجم
    translate(key) {
        return translations[this.currentLang]?.[key] || key;
    }
    
    // دالة لتحديث نص عنصر معين
    updateElementText(element, key) {
        const text = this.translate(key);
        if (text !== key) {
            element.textContent = text;
        }
    }
}

// تهيئة مدير الترجمة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    window.translationManager = new TranslationManager();
    
    // إضافة أنيميشنات CSS للترجمة
    const style = document.createElement('style');
    style.textContent = `
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
        
        .language-notification {
            font-weight: 500;
            font-size: 0.9rem;
        }
        
        /* تأثيرات الانتقال عند تغيير اللغة */
        body.lang-transition * {
            transition: all 0.3s ease !important;
        }
        
        /* تنسيق خاص للغات RTL و LTR */
        [dir="rtl"] .nav-links {
            margin-right: 0;
            margin-left: auto;
        }
        
        [dir="ltr"] .nav-links {
            margin-left: 0;
            margin-right: auto;
        }
        
        [dir="ltr"] .logo-img {
            margin-right: 10px;
            margin-left: 0;
        }
        
        [dir="ltr"] .nav-links a::after {
            left: 0;
            right: auto;
        }
        
        [dir="ltr"] .feature-icon {
            margin-left: auto;
            margin-right: 0;
        }
        
        [dir="ltr"] .info-item:hover {
            transform: translateX(10px);
        }
        
        [dir="ltr"] .footer-links a:hover {
            padding-left: 5px;
            padding-right: 0;
        }
        
        [dir="ltr"] .newsletter-form button:hover {
            transform: translateX(5px);
        }
        
        [dir="ltr"] .mobile-menu a:hover {
            transform: translateX(10px);
        }
    `;
    document.head.appendChild(style);
});

// دوال مساعدة للوصول من أي مكان
function changeLanguage(lang) {
    if (window.translationManager) {
        window.translationManager.changeLanguage(lang);
    }
}

function getTranslation(key) {
    if (window.translationManager) {
        return window.translationManager.translate(key);
    }
    return key;
}

// تصدير الدوال للاستخدام في ملفات أخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        TranslationManager,
        translations,
        changeLanguage,
        getTranslation
    };
}