// ========================================
// 多语言切换系统
// ========================================

const translations = {
    zh: {
        'brand': 'Seeking',
        'nav.home': '首页',
        'nav.products': '产品中心',
        'nav.about': '关于我们',
        'nav.contact': '联系我们',
        'hero.title': 'Connecting Global Trade',
        'hero.subtitle': '专业的外贸解决方案，连接全球市场',
        'hero.cta': '立即咨询',
        'products.title': '产品中心',
        'products.furniture.title': '家具产品',
        'products.furniture.desc': '高品质木制家具，设计精美，工艺精湛',
        'products.packaging.title': '包装材料',
        'products.packaging.desc': '专业包装解决方案，确保货物安全运输',
        'products.home.title': '家居用品',
        'products.home.desc': '多样化家居产品，满足不同市场需求',
        'products.learnMore': '了解更多 →',
        'about.title': '关于 Seeking',
        'about.desc1': 'Seeking 是专业的外贸服务品牌，致力于为全球客户提供优质的产品和服务。',
        'about.desc2': '我们拥有丰富的行业经验和专业的团队，确保每一笔交易都安全、高效。',
        'about.stats.countries': '服务国家',
        'about.stats.clients': '满意客户',
        'about.stats.products': '产品种类',
        'contact.title': '联系我们',
        'contact.address': '中国·广东',
        'contact.form.name': '您的姓名',
        'contact.form.email': '邮箱地址',
        'contact.form.phone': '联系电话',
        'contact.form.subject': '选择咨询类型',
        'contact.form.subject.product': '产品咨询',
        'contact.form.subject.quote': '报价请求',
        'contact.form.subject.partnership': '合作洽谈',
        'contact.form.subject.other': '其他',
        'contact.form.message': '您的留言',
        'contact.form.submit': '发送消息'
    },
    en: {
        'brand': 'Seeking',
        'nav.home': 'Home',
        'nav.products': 'Products',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'hero.title': 'Connecting Global Trade',
        'hero.subtitle': 'Professional Export Solutions for Global Markets',
        'hero.cta': 'Get Started',
        'products.title': 'Our Products',
        'products.furniture.title': 'Furniture',
        'products.furniture.desc': 'High-quality wooden furniture with exquisite design and craftsmanship',
        'products.packaging.title': 'Packaging Materials',
        'products.packaging.desc': 'Professional packaging solutions for safe transportation',
        'products.home.title': 'Home Products',
        'products.home.desc': 'Diverse home products for different market needs',
        'products.learnMore': 'Learn More →',
        'about.title': 'About Seeking',
        'about.desc1': 'Seeking is a professional export trading brand dedicated to providing quality products and services to global clients.',
        'about.desc2': 'With rich industry experience and professional team, we ensure every transaction is safe and efficient.',
        'about.stats.countries': 'Countries Served',
        'about.stats.clients': 'Satisfied Clients',
        'about.stats.products': 'Product Types',
        'contact.title': 'Contact Us',
        'contact.address': 'Guangdong, China',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Email Address',
        'contact.form.phone': 'Phone Number',
        'contact.form.subject': 'Select Inquiry Type',
        'contact.form.subject.product': 'Product Inquiry',
        'contact.form.subject.quote': 'Request Quote',
        'contact.form.subject.partnership': 'Partnership',
        'contact.form.subject.other': 'Other',
        'contact.form.message': 'Your Message',
        'contact.form.submit': 'Send Message'
    },
    ar: {
        'brand': 'Seeking',
        'nav.home': 'الرئيسية',
        'nav.products': 'المنتجات',
        'nav.about': 'من نحن',
        'nav.contact': 'اتصل بنا',
        'hero.title': 'ربط التجارة العالمية',
        'hero.subtitle': 'حلول تصدير احترافية للأسواق العالمية',
        'hero.cta': 'ابدأ الآن',
        'products.title': 'منتجاتنا',
        'products.furniture.title': 'الأثاث',
        'products.furniture.desc': 'أثاث خشبي عالي الجودة بتصميم رائع وحرفية متقنة',
        'products.packaging.title': 'مواد التغليف',
        'products.packaging.desc': 'حلول تغليف احترافية للنقل الآمن',
        'products.home.title': 'المنتجات المنزلية',
        'products.home.desc': 'منتجات منزلية متنوعة لتلبية احتياجات السوق المختلفة',
        'products.learnMore': 'اعرف المزيد ←',
        'about.title': 'عن Seeking',
        'about.desc1': 'Seeking هي علامة تجارية احترافية للتصدير مكرسة لتقديم منتجات وخدمات عالية الجودة للعملاء حول العالم.',
        'about.desc2': 'مع خبرة غنية في الصناعة وفريق محترف، نضمن أن كل معاملة آمنة وفعالة.',
        'about.stats.countries': 'دول نخدمها',
        'about.stats.clients': 'عملاء راضون',
        'about.stats.products': 'نوع المنتج',
        'contact.title': 'اتصل بنا',
        'contact.address': 'قوانغدونغ، الصين',
        'contact.form.name': 'اسمك',
        'contact.form.email': 'البريد الإلكتروني',
        'contact.form.phone': 'رقم الهاتف',
        'contact.form.subject': 'اختر نوع الاستفسار',
        'contact.form.subject.product': 'استفسار المنتج',
        'contact.form.subject.quote': 'طلب عرض سعر',
        'contact.form.subject.partnership': 'الشراكة',
        'contact.form.subject.other': 'أخرى',
        'contact.form.message': 'رسالتك',
        'contact.form.submit': 'إرسال الرسالة'
    }
};

let currentLang = 'zh';

// 切换语言
function switchLanguage(lang) {
    currentLang = lang;
    
    // 更新按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // 更新文本内容
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.dataset.lang;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // 更新占位符
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.dataset.langPlaceholder;
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // 阿拉伯语 RTL 支持
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
    
    // 保存语言偏好
    localStorage.setItem('seeking-lang', lang);
}

// 初始化语言
function initLanguage() {
    const savedLang = localStorage.getItem('seeking-lang') || 'zh';
    switchLanguage(savedLang);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    
    // 语言按钮点击事件
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
        });
    });
});
