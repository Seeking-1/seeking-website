# Seeking 官网部署指南

## 快速部署到 GitHub Pages

### 第一步：创建 GitHub 仓库

1. 登录 GitHub（如果没有账号，先注册一个）
2. 点击右上角 "+" → "New repository"
3. 仓库名称填写：`seeking-website`
4. 选择 "Public"（公开）
5. 点击 "Create repository"

### 第二步：上传文件

**方法 A：网页上传（简单）**

1. 在新建的仓库页面，点击 "uploading an existing file"
2. 将以下文件拖拽上传：
   - `index.html`
   - `package.json`
   - `README.md`
   - `css/style.css`
   - `js/lang.js`
   - `js/main.js`
3. 点击 "Commit changes"

**方法 B：Git 命令行（推荐）**

```bash
# 在项目目录下执行
git init
git add .
git commit -m "Initial commit: Seeking官网"
git branch -M main
git remote add origin https://github.com/你的用户名/seeking-website.git
git push -u origin main
```

### 第三步：启用 GitHub Pages

1. 进入仓库 → Settings（设置）
2. 左侧菜单找到 "Pages"
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main"，文件夹选择 "/ (root)"
5. 点击 "Save"

### 第四步：访问网站

- 等待 1-2 分钟部署完成
- 访问地址：`https://你的用户名.github.io/seeking-website`
- 在 Pages 设置页面也会显示访问链接

---

## 配置表单功能

### 1️⃣ 邮件通知（Formspree）

**步骤：**

1. 访问 https://formspree.io/
2. 用邮箱注册账号
3. 点击 "New Form"
4. 复制表单端点，格式如：`https://formspree.io/f/xyzabcde`
5. 修改 `index.html` 第 97 行：
   ```html
   <form id="contactForm" action="https://formspree.io/f/你的表单ID" method="POST">
   ```

**免费额度：** 每月 50 次提交

### 2️⃣ 微信推送（Server酱）

**步骤：**

1. 访问 https://sct.ftqq.com/
2. 微信扫码登录
3. 复制你的 SendKey
4. 修改 `js/main.js` 第 3 行：
   ```javascript
   const SERVERCHAN_SENDKEY = '你的SendKey';
   ```

**免费额度：** 每日 5 条消息

---

## 测试清单

部署完成后，依次测试以下功能：

- [ ] 网站能否正常访问
- [ ] 三语切换是否正常（中文/英文/阿拉伯语）
- [ ] 阿拉伯语是否自动变为 RTL 布局
- [ ] 导航链接是否可以跳转
- [ ] 表单提交是否成功
- [ ] 是否收到邮件通知
- [ ] 是否收到微信推送（如已配置）
- [ ] 手机端显示是否正常

---

## 常见问题

**Q: 网站访问显示 404？**
A: 等待 1-2 分钟让 GitHub Pages 完成部署，检查 Pages 设置是否启用

**Q: 表单提交后显示错误？**
A: 确认 Formspree 表单 ID 是否正确配置

**Q: 样式没有加载？**
A: 检查 CSS 文件路径是否正确，确保文件已上传

**Q: 如何更新网站内容？**
A: 直接在 GitHub 仓库中编辑文件，或本地修改后重新 push

---

## 下一步

1. **添加真实产品图片** - 替换占位符图标
2. **完善公司信息** - 更新联系方式、地址等
3. **绑定自定义域名** - 如 `www.seeking-export.com`
4. **添加 Google Analytics** - 分析访客数据

---

需要帮助？随时告诉我！
