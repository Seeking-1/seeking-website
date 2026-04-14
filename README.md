# Seeking 官网

外贸产品咨询展示网站 - 三语切换（中文/English/العربية）

## 🌟 功能特点

- ✅ **创意活力设计** - 现代化渐变配色，动态交互效果
- ✅ **三语切换** - 中文、英文、阿拉伯语（支持 RTL）
- ✅ **响应式布局** - 完美适配手机、平板、电脑
- ✅ **客户表单** - 支持邮件通知 + 微信推送
- ✅ **免费托管** - GitHub Pages 零成本部署
- ✅ **SEO 友好** - 语义化 HTML，优化搜索引擎排名

## 📁 项目结构

```
seeking-website/
├── index.html          # 主页面
├── package.json        # 项目配置
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── lang.js         # 多语言切换
│   └── main.js         # 主要功能
└── images/             # 图片资源（待添加）
```

## 🚀 快速开始

### 本地预览

1. 在项目目录下启动本地服务器：
```bash
npx http-server -p 8080 -o
```

2. 浏览器自动打开 `http://localhost:8080`

### 部署到 GitHub Pages

#### 方法一：直接上传（推荐新手）

1. 在 GitHub 创建新仓库 `seeking-website`
2. 上传所有文件到仓库
3. 进入仓库 Settings → Pages
4. Source 选择 `main` 分支，文件夹选择 `/ (root)`
5. 保存后等待部署完成
6. 访问 `https://你的用户名.github.io/seeking-website`

#### 方法二：使用 Git 命令行

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Seeking官网"

# 关联远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/seeking-website.git

# 推送到 GitHub
git push -u origin main

# 然后在 GitHub 仓库设置中启用 Pages
```

## 📮 表单功能配置

### 1. 邮件通知（Formspree）

**免费额度**：每月 50 次提交

**配置步骤**：

1. 访问 [https://formspree.io/](https://formspree.io/)
2. 注册账号并创建新表单
3. 复制表单 ID（格式：`xyzabcde`）
4. 修改 `index.html` 中的表单 action：
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. 替换 `YOUR_FORM_ID` 为你的实际 ID

**效果**：客户提交表单后，你会收到邮件通知

### 2. 微信推送（Server酱）

**免费额度**：每日 5 条消息

**配置步骤**：

1. 访问 [https://sct.ftqq.com/](https://sct.ftqq.com/)
2. 微信扫码登录
3. 复制你的 SENDKEY
4. 修改 `js/main.js` 中的配置：
   ```javascript
   const SERVERCHAN_SENDKEY = 'YOUR_SENDKEY'; // 替换为你的 SENDKEY
   ```

**效果**：客户提交表单后，你的微信会收到推送通知

### 3. 后台查看

- **Formspree 后台**：登录 Formspree 可查看所有提交记录
- **导出数据**：支持导出 CSV/JSON 格式
- **Webhook**：支持转发到其他系统（需付费版）

## 🌐 多语言切换

网站支持三种语言实时切换：

- **中文**（默认）
- **English**
- **العربية**（阿拉伯语，自动 RTL 布局）

语言选择会自动保存到浏览器，下次访问自动应用。

## 📱 自定义内容

### 修改产品信息

编辑 `index.html` 中的产品卡片：

```html
<div class="product-card">
    <div class="product-icon">🪑</div>
    <h3>产品名称</h3>
    <p>产品描述</p>
</div>
```

### 修改联系方式

编辑 `index.html` 中的联系信息部分：

```html
<div class="info-item">
    <i class="fas fa-envelope"></i>
    <span>your@email.com</span>
</div>
```

### 添加产品图片

1. 将图片放入 `images/` 目录
2. 在产品卡片中替换图标为图片：

```html
<div class="product-icon">
    <img src="images/product.jpg" alt="产品名称" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

## 🎨 自定义样式

### 修改主题色

编辑 `css/style.css` 中的 CSS 变量：

```css
:root {
    --primary-color: #FF6B35;      /* 主色调 */
    --secondary-color: #004E89;    /* 副色调 */
    --accent-color: #FFD166;       /* 强调色 */
}
```

### 修改字体

```css
body {
    font-family: 'Your Font', 'Microsoft YaHei', sans-serif;
}
```

## 📊 统计分析（可选）

### Google Analytics

在 `index.html` 的 `<head>` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=你的跟踪ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '你的跟踪ID');
</script>
```

## 🔧 后续优化建议

### 1. 添加产品详情页

为每个产品创建独立页面，展示详细信息、图片、参数等。

### 2. 集成在线客服

- **Tidio**（免费）：支持网站聊天 + Facebook Messenger
- **Crisp**（免费）：支持聊天 + 知识库

### 3. SEO 优化

- 添加 `<meta>` 标签（keywords, description）
- 创建 `sitemap.xml`
- 添加结构化数据（JSON-LD）

### 4. 性能优化

- 压缩图片（TinyPNG）
- 启用浏览器缓存
- 使用 CDN 加速

## 💡 常见问题

### Q: 如何绑定自定义域名？

A: 在 GitHub Pages 设置中添加自定义域名，并在域名服务商处添加 CNAME 记录指向 `你的用户名.github.io`

### Q: 表单提交失败怎么办？

A: 检查 Formspree 配置是否正确，确保已替换 `YOUR_FORM_ID`

### Q: 微信推送收不到？

A: 确认 Server酱 SENDKEY 配置正确，并检查是否超过免费额度

### Q: 阿拉伯语显示异常？

A: 网站已自动处理 RTL 布局，如仍有问题请检查浏览器字体设置

## 📞 技术支持

如需帮助，请通过以下方式联系：

- GitHub Issues: [项目地址]
- 邮件: [你的邮箱]

---

**© 2024 Seeking. All rights reserved.**
