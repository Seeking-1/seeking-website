# Seeking 官网部署清单

## ✅ 已完成配置

- [x] 网站主体文件创建
- [x] 三语切换功能（中文/英文/阿拉伯语）
- [x] 响应式设计
- [x] 表单功能
- [x] 邮箱地址配置：1812044322@qq.com
- [x] GitHub 用户名：Seeking-1

---

## 📋 接下来需要完成的步骤

### 步骤 1：注册 Formspree（邮件通知）

**目的：** 客户提交表单后，自动发送邮件到你的 QQ 邮箱

**操作步骤：**

1. 访问 https://formspree.io/
2. 点击 "Get Started" 或 "Sign Up"
3. 使用你的邮箱 `1812044322@qq.com` 注册
4. 登录后，点击 "+ New Form"
5. 表单名称填写：`Seeking官网咨询表单`
6. 复制生成的表单 ID（格式类似：`xyzabcde`）
7. 记录下来，稍后需要填入配置文件

**免费额度：** 每月 50 次提交

---

### 步骤 2：注册 Server酱（微信推送）

**目的：** 客户提交表单后，微信立即收到推送通知

**操作步骤：**

1. 访问 https://sct.ftqq.com/
2. 使用微信扫码登录
3. 登录成功后，点击 "SendKey" 菜单
4. 复制你的 SendKey（格式类似：`SCT123456xxxxxxxxxxxxx`）
5. 记录下来，稍后需要填入配置文件

**免费额度：** 每日 5 条消息

---

### 步骤 3：更新配置文件

获得 Formspree ID 和 Server酱 SendKey 后，需要修改 `js/main.js` 文件：

```javascript
const CONFIG = {
    // Formspree 配置（邮件通知）
    formspreeId: 'YOUR_FORMSPREE_ID', // 替换这里

    // Server酱 配置（微信推送）
    serverChanKey: 'YOUR_SERVERCHAN_KEY', // 替换这里

    // ... 其他配置保持不变
};
```

**替换示例：**
```javascript
formspreeId: 'xyzabcde',           // 你的实际 Formspree ID
serverChanKey: 'SCT123456xxxxxx',  // 你的实际 SendKey
```

---

### 步骤 4：创建 GitHub 仓库并上传

#### 4.1 创建仓库

1. 访问 https://github.com/
2. 使用账号 `Seeking-1` 登录（如果没有则注册）
3. 点击右上角 "+" → "New repository"
4. 填写信息：
   - Repository name: `seeking-website`
   - Description: `Seeking官网 - 外贸产品咨询展示`
   - 选择 **Public**（公开）
   - ✅ 勾选 "Add a README file"
5. 点击 "Create repository"

#### 4.2 上传文件

**方法 A：网页上传（推荐新手）**

1. 在仓库页面，点击 "Add file" → "Upload files"
2. 将以下文件/文件夹拖拽上传：
   ```
   seeking-website/
   ├── index.html
   ├── package.json
   ├── README.md
   ├── DEPLOY.md
   ├── css/
   │   └── style.css
   ├── js/
   │   ├── lang.js
   │   └── main.js
   └── images/ (空文件夹可不上传)
   ```
3. Commit message 填写：`Initial commit: Seeking官网上线`
4. 点击 "Commit changes"

**方法 B：Git 命令行**

如果你熟悉 Git，可以在项目目录执行：

```bash
git init
git add .
git commit -m "Initial commit: Seeking官网上线"
git branch -M main
git remote add origin https://github.com/Seeking-1/seeking-website.git
git push -u origin main
```

---

### 步骤 5：启用 GitHub Pages

1. 在仓库页面，点击 "Settings"（设置）
2. 左侧菜单找到 "Pages"
3. 在 "Source" 部分：
   - Branch: 选择 `main`
   - Folder: 选择 `/ (root)`
4. 点击 "Save"
5. 等待 1-2 分钟部署完成
6. 页面顶部会显示：**Your site is published at https://seeking-1.github.io/seeking-website/**

---

### 步骤 6：测试网站

访问 `https://seeking-1.github.io/seeking-website/` 测试：

- [ ] 网站能否正常打开
- [ ] 三语切换是否正常（中文/EN/عربي）
- [ ] 阿拉伯语是否自动 RTL 布局
- [ ] 导航跳转是否流畅
- [ ] 表单提交是否成功
- [ ] 是否收到邮件通知
- [ ] 是否收到微信推送
- [ ] 手机端显示是否正常

---

## 🎯 快速启动脚本

为了简化部署，我已将所有文件准备好在：
```
C:\Users\唐正雨\.qclaw\workspace\seeking-website\
```

你只需要：

1. ✅ 注册 Formspree → 获取表单 ID
2. ✅ 注册 Server酱 → 获取 SendKey
3. ✅ 更新 `js/main.js` 配置
4. ✅ 上传到 GitHub
5. ✅ 启用 GitHub Pages
6. ✅ 完成！

---

## 📞 需要帮助？

如果在任何步骤遇到问题，随时告诉我：

- Formspree 注册问题
- Server酱配置问题
- GitHub 上传问题
- Pages 部署问题
- 表单功能调试

我会立即协助你解决！🚀
