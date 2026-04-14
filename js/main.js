// ========================================
// 主要功能脚本 - 配置版
// ========================================

// ========== 配置区域 ==========
const CONFIG = {
    // Formspree 配置（邮件通知）
    // 注册地址: https://formspree.io/
    formspreeId: 'YOUR_FORMSPREE_ID', // 需要替换为你的 Formspree ID

    // Server酱 配置（微信推送）
    // 注册地址: https://sct.ftqq.com/
    serverChanKey: 'YOUR_SERVERCHAN_KEY', // 需要替换为你的 SendKey

    // 接收通知的邮箱
    email: '1812044322@qq.com',

    // GitHub 仓库信息
    github: {
        username: 'Seeking-1',
        repo: 'seeking-website'
    }
};

// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 导航栏滚动效果
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 1)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
        }
    });

    // 表单提交处理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;

            // 显示加载状态
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 发送中...';
            submitBtn.disabled = true;

            try {
                // 收集表单数据
                const formData = new FormData(contactForm);
                const data = Object.fromEntries(formData.entries());

                // 添加时间戳
                data.timestamp = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });

                // 并行发送通知
                const promises = [];

                // 1. 发送邮件（Formspree）
                if (CONFIG.formspreeId !== 'YOUR_FORMSPREE_ID') {
                    promises.push(sendToFormspree(formData));
                }

                // 2. 发送微信推送（Server酱）
                if (CONFIG.serverChanKey !== 'YOUR_SERVERCHAN_KEY') {
                    promises.push(sendToServerChan(data));
                }

                // 3. 同时打开邮件客户端作为备用方案
                const mailtoLink = createMailtoLink(data);

                // 等待所有通知发送
                await Promise.allSettled(promises);

                // 成功提示
                showNotification('✅ 提交成功！我们会尽快回复您。', 'success');

                // 打开邮件客户端（备用方案）
                setTimeout(() => {
                    window.location.href = mailtoLink;
                }, 1000);

                contactForm.reset();

            } catch (error) {
                console.error('表单提交错误:', error);
                showNotification('❌ 发送失败，请直接通过邮件联系我们。', 'error');

                // 失败时打开邮件客户端
                const formData = new FormData(contactForm);
                const data = Object.fromEntries(formData.entries());
                window.location.href = createMailtoLink(data);
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // 产品卡片动画
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// 发送到 Formspree
async function sendToFormspree(formData) {
    const response = await fetch(`https://formspree.io/f/${CONFIG.formspreeId}`, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Formspree 发送失败');
    }

    return response;
}

// 发送到 Server酱（微信推送）
async function sendToServerChan(data) {
    const response = await fetch(`https://sctapi.ftqq.com/${CONFIG.serverChanKey}.send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: `🚀 Seeking官网新咨询 - ${data.name}`,
            desp: `
## 客户信息

| 项目 | 内容 |
|------|------|
| **姓名** | ${data.name} |
| **邮箱** | ${data.email} |
| **电话** | ${data.phone || '未填写'} |
| **咨询类型** | ${getSubjectText(data.subject)} |
| **提交时间** | ${data.timestamp} |

## 留言内容

> ${data.message}

---

**请及时回复客户咨询！**

📧 客户邮箱: ${data.email}
            `
        })
    });

    if (!response.ok) {
        throw new Error('Server酱发送失败');
    }

    return response;
}

// 创建 Mailto 链接
function createMailtoLink(data) {
    const subject = encodeURIComponent(`Seeking官网咨询 - ${getSubjectText(data.subject)} - ${data.name}`);
    const body = encodeURIComponent(`
客户姓名：${data.name}
邮箱：${data.email}
电话：${data.phone || '未填写'}
咨询类型：${getSubjectText(data.subject)}

留言内容：
${data.message}
    `);

    return `mailto:1812044322@qq.com?subject=${subject}&body=${body}`;
}

// 获取咨询类型文本
function getSubjectText(subject) {
    const subjectMap = {
        'product': '产品咨询',
        'quote': '报价请求',
        'partnership': '合作洽谈',
        'other': '其他'
    };
    return subjectMap[subject] || subject;
}

// 显示通知
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = message;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 20px 30px;
        background: ${type === 'success' ? '#10B981' : '#EF4444'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-weight: 600;
        max-width: 90%;
        word-wrap: break-word;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// CSS 动画
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
`;
document.head.appendChild(style);
