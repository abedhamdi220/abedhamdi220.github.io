# تشغيل ونشر بورتفوليو عبدالرحمن

هذا الدليل يشرح تشغيل المشروع على جهازك، ثم رفعه إلى GitHub، ثم نشره مجاناً عبر GitHub Pages.

> المشروع مبني باستخدام React وVite وTypeScript، ويستخدم `pnpm` لإدارة الحزم.

## 1. المتطلبات

ثبّت البرامج التالية على جهازك:

| البرنامج | الاستخدام | رابط التحميل |
|---|---|---|
| Node.js إصدار LTS | تشغيل أدوات JavaScript | [nodejs.org](https://nodejs.org/) |
| Git | رفع الملفات إلى GitHub | [git-scm.com](https://git-scm.com/downloads) |
| Visual Studio Code | فتح وتعديل المشروع | [code.visualstudio.com](https://code.visualstudio.com/) |
| حساب GitHub | حفظ ونشر المشروع | [github.com](https://github.com/) |

بعد تثبيت Node.js وGit، افتح **PowerShell** في Windows أو **Terminal** في macOS/Linux ونفّذ:

```bash
node --version
git --version
```

إذا ظهرت أرقام الإصدارات، فالتثبيت ناجح.

## 2. تثبيت pnpm

من الطرفية نفّذ:

```bash
npm install --global pnpm
```

ثم تحقق:

```bash
pnpm --version
```

## 3. تجهيز المشروع على جهازك

نزّل ملفات المشروع من واجهة Manus بصيغة ZIP، ثم فك الضغط في مكان واضح، مثل:

```text
Documents/abdulrahman-portfolio
```

افتح الطرفية داخل مجلد المشروع. أسهل طريقة في Windows هي فتح المجلد في File Explorer، ثم الضغط على شريط العنوان وكتابة:

```text
powershell
```

ثم اضغط Enter.

تأكد أنك داخل المجلد الصحيح:

```bash
pwd
```

في Windows يمكن استخدام:

```powershell
Get-Location
```

يجب أن يكون المسار هو مجلد المشروع الذي يحتوي على `package.json` و`client` و`server`.

## 4. تثبيت الحزم

نفّذ الأمر التالي مرة واحدة بعد فك الضغط:

```bash
pnpm install
```

قد يستغرق الأمر بعض الوقت لأنه ينزّل مكتبات React وVite وباقي الاعتمادات.

## 5. تشغيل الموقع محلياً

شغّل خادم التطوير بالأمر:

```bash
pnpm dev
```

بعدها ستظهر في الطرفية وصلة شبيهة بهذه:

```text
http://localhost:3000/
```

افتحها في المتصفح. سيظهر الموقع على جهازك، وأي تعديل تحفظه في ملفات `client/src` سيظهر تلقائياً بعد تحديث الصفحة.

لإيقاف الموقع، ارجع إلى الطرفية واضغط:

```text
Ctrl + C
```

## 6. فحص المشروع قبل رفعه

قبل الرفع إلى GitHub، نفّذ فحص TypeScript والبناء النهائي:

```bash
pnpm check
pnpm build
```

إذا نجح الأمران، فهذا يعني أن المشروع قابل للبناء. قد تظهر رسالة تحذير عن حجم ملفات JavaScript؛ هذه ليست مشكلة تمنع التشغيل، لكنها تعني أن تحسين تقسيم الملفات يمكن إضافته لاحقاً.

## 7. إنشاء مستودع GitHub

افتح [github.com/new](https://github.com/new)، ثم أنشئ مستودعاً جديداً بهذه الإعدادات:

| الحقل | القيمة المقترحة |
|---|---|
| Repository name | `abdulrahman-portfolio` |
| Description | `Abdulrahman Al-Hammadi personal portfolio` |
| Visibility | Public إذا أردت استخدام GitHub Pages مجاناً |
| Add README | اتركه غير محدد |
| Add .gitignore | اتركه غير محدد |
| Add license | اختياري |

اضغط **Create repository**.

> مهم: لا ترفع مجلد `node_modules` ولا مجلد `dist`. يجب أن يمنعهما ملف `.gitignore` الموجود في المشروع.

## 8. رفع المشروع لأول مرة إلى GitHub

داخل مجلد المشروع نفّذ الأوامر التالية، مع استبدال `YOUR_USERNAME` باسم حسابك في GitHub:

```bash
git init
git add .
git commit -m "Initial portfolio release"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/abdulrahman-portfolio.git
git push -u origin main
```

مثال إذا كان اسم حسابك `abdulrahman-dev`:

```bash
git remote add origin https://github.com/abdulrahman-dev/abdulrahman-portfolio.git
```

عند طلب تسجيل الدخول، قد يفتح GitHub المتصفح للمصادقة. إذا طلب Git كلمة مرور في الطرفية، استخدم GitHub CLI أو Personal Access Token؛ GitHub لا يقبل كلمة مرور الحساب العادية عبر Git HTTPS في الحالات الحديثة.

بعد نجاح الأمر، افتح رابط المستودع:

```text
https://github.com/YOUR_USERNAME/abdulrahman-portfolio
```

يجب أن ترى ملفات مثل `package.json` و`client` و`vite.config.ts`.

## 9. النشر عبر GitHub Pages — الطريقة الموصى بها

لأن المشروع يستخدم Vite، الأفضل نشر نسخة البناء `dist` تلقائياً بواسطة GitHub Actions.

أنشئ هذا الملف داخل المشروع:

```text
.github/workflows/deploy.yml
```

ضع داخله المحتوى التالي:

```yaml
name: Deploy portfolio to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build site
        run: pnpm build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

بعد إنشاء الملف، نفّذ:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment"
git push
```

## 10. تفعيل GitHub Pages من الإعدادات

في صفحة المستودع على GitHub:

1. افتح تبويب **Settings**.
2. من القائمة الجانبية اختر **Pages**.
3. في قسم **Build and deployment** اختر **Source: GitHub Actions**.
4. افتح تبويب **Actions** وانتظر انتهاء Workflow باسم **Deploy portfolio to GitHub Pages**.
5. بعد النجاح، ارجع إلى **Settings → Pages** وستجد رابط الموقع.

غالباً سيكون الرابط بالشكل التالي:

```text
https://YOUR_USERNAME.github.io/abdulrahman-portfolio/
```

قد يستغرق ظهور أول نشر دقيقة أو دقيقتين.

## 11. إذا فشل النشر بسبب مسار Vite

إذا فتح رابط GitHub Pages وظهرت صفحة فارغة، افتح `vite.config.ts` وأضف `base` مع اسم المستودع. يجب أن يكون الإعداد قريباً من التالي:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/abdulrahman-portfolio/",
  plugins: [react()],
});
```

ثم نفّذ:

```bash
git add vite.config.ts
git commit -m "Configure GitHub Pages base path"
git push
```

إذا استخدمت نطاقاً مخصصاً أو نشرت الموقع في جذر نطاق آخر، يكون `base` مختلفاً؛ في هذه الحالة استخدم `/` بدلاً من `/abdulrahman-portfolio/`.

## 12. تحديث الموقع مستقبلاً

بعد تعديل أي ملف، استخدم التسلسل التالي:

```bash
pnpm dev
pnpm check
pnpm build
git add .
git commit -m "Update portfolio content"
git push
```

كل `push` إلى فرع `main` سيشغّل GitHub Actions ويبني النسخة الجديدة وينشرها تلقائياً.

## 13. إضافة صورة جديدة أو ملف CV

لا تضع ملفات كبيرة عشوائياً داخل `client/public`. بالنسبة للمشروع الحالي، أصول الصور وملف السيرة تستخدم روابط تخزين ثابتة. إذا أردت استبدال الصورة لاحقاً، ضع الصورة الجديدة في المكان الذي يديره مشروعك أو ارفعها إلى خدمة تخزين ثابتة، ثم حدّث رابطها في `client/src/pages/Home.tsx`.

بعد أي تغيير في الرابط، اختبر محلياً ثم نفّذ `pnpm build` قبل رفعه.

## 14. مشاكل شائعة وحلولها

| المشكلة | الحل |
|---|---|
| `pnpm is not recognized` | ثبّت pnpm من خلال `npm install --global pnpm` ثم أعد فتح الطرفية |
| `Cannot find package` | نفّذ `pnpm install` داخل مجلد المشروع |
| الصفحة لا تعمل محلياً | تأكد أن الأمر هو `pnpm dev` وأنك فتحت الرابط الذي يظهر في الطرفية |
| GitHub يرفض الرفع | تأكد من اسم المستودع والرابط، ثم نفّذ `git remote -v` |
| GitHub Pages صفحة فارغة | أضف `base: "/abdulrahman-portfolio/"` في `vite.config.ts` ثم ارفع التعديل |
| Workflow فاشل | افتح تبويب Actions، اختر Workflow الفاشل، واقرأ أول خطوة حمراء في السجل |
| الصور لا تظهر | تحقق من أن روابط الصور تبدأ بـ `/manus-storage/` أو أنها روابط عامة صحيحة |

## المسار المختصر

إذا كان Git وNode وpnpm مثبتة لديك، فالمسار العملي المختصر هو:

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
git init
git add .
git commit -m "Initial portfolio release"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/abdulrahman-portfolio.git
git push -u origin main
```

بعدها أضف ملف Workflow المذكور، ثم فعّل **Settings → Pages → Source: GitHub Actions**.

## مراجع رسمية

[1]: https://vite.dev/guide/static-deploy.html "Vite Static Deploy Guide"
[2]: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site "GitHub Pages Documentation"
[3]: https://docs.github.com/en/actions "GitHub Actions Documentation"
[4]: https://pnpm.io/installation "pnpm Installation Documentation"
[5]: https://git-scm.com/book/en/v2 "Pro Git Book"

## ملاحظة أخيرة

GitHub Pages مناسب لهذا المشروع لأنه واجهة أمامية ثابتة. لا ترفع أي مفاتيح سرية أو كلمات مرور أو ملفات `.env` إلى GitHub. إذا أضفت مستقبلاً قاعدة بيانات أو API خاصاً، فستحتاج إلى استضافة خلفية منفصلة أو خدمة تدعم الخادم، لأن GitHub Pages لا يشغّل كود الخادم.
