/*
 * Design reminder — Living Systems Notebook:
 * Language is part of the experience, not a separate page. Keep Arabic concise,
 * technical, and human; retain established product and framework names in English.
 */

export type Locale = "en" | "ar";

export const locales = {
  en: {
    title: "Abdulrahman Al-Hammadi | Backend Developer",
    nav: ["System log", "Methods", "Training record", "Open a brief"],
    controls: { language: "العربية", light: "Light mode", dark: "Dark mode", cv: "CV", openMenu: "Open navigation", closeMenu: "Close navigation" },
    hero: {
      eyebrow: "Available for purposeful engineering work",
      heading: ["Backend systems,", "specified", "before they’re built."],
      summary: "Abdulrahman Al-Hammadi is a Backend Developer and Software Engineer in Damascus, building secure, scalable platforms where business requirements, data, and asynchronous systems have a clear place to meet.",
      primary: "Open engineering record",
      cv: "Open CV record",
      metadata: [["Role", "Backend Developer", "Software Engineer"], ["Base", "Damascus,", "Syria"], ["Focus", "Laravel, PHP", "& scalable systems"]],
      profile: "Editorial profile",
      profileLabel: "Profile",
      profileValue: "Systems thinker",
      focusLabel: "Focus",
      focusValue: "Reliable flow",
      principle: "Engineering principle",
      principleText: "Clear boundaries. Deliberate data paths.",
    },
    intro: {
      kicker: "The working approach",
      text: "Backend-focused with hands-on experience in multi-tenant SaaS platforms, LLM-grounded features, and asynchronous processing pipelines. The objective is not simply running code; it is a system that remains understandable, secure, and ready to evolve.",
      continuity: "System continuity",
      principles: ["Event-driven where the workload demands separation.", "Security embedded in data models and system boundaries.", "Patterns chosen to reduce future change-cost."],
    },
    work: {
      kicker: "Selected engineering work",
      title: "The systems behind the interface.",
      intro: "A record of the architectural decisions, operational constraints, and working patterns used to move projects forward.",
      notes: "Engineering notes",
      live: "View live system",
      record: "Architecture record",
    },
    projects: [
      { code: "SYS / 01", date: "Jun 2026 — Present", title: "DataEngine", type: "B2B SaaS Data Analytics Platform", stack: "Laravel · React · MySQL · Gemini API", solutions: ["Architected a multi-tenant SaaS platform for automated Excel and CSV analytics, with strict per-user data isolation and Laravel Queues for file ingestion and exports.", "Built a schema-less dynamic query engine on MySQL JSON columns for configurable filtering, search, and sorting across arbitrary spreadsheet structures.", "Integrated an LLM-grounded chat advisor constrained to precomputed report data, with real-time notifications through Laravel Echo and WebSockets."], tags: ["Laravel", "React", "MySQL JSON", "Gemini API", "WebSockets"], flow: ["Excel / CSV", "Queues", "JSON Data", "Grounded Advisor"] },
      { code: "SYS / 02", date: "Apr — May 2026", title: "Styloraify", type: "AI-Powered E-Commerce Platform", stack: "Laravel · MongoDB · Python / FastAPI", live: "https://styloraify.com/", solutions: ["Resolved Laravel–MongoDB failures on shared hosting with a custom cache-clearing route and a User model refactor for MongoDB’s string-based _id, preventing JWT crashes.", "Embedded custom Python/FastAPI source directly into the infrastructure to stabilize the AI generation engine’s deployment.", "Applied a Service-Repository pattern to keep API keys protected and business logic structured."], tags: ["Laravel", "MongoDB", "Python", "FastAPI", "Service-Repository"], flow: ["React Client", "Laravel API", "MongoDB", "AI Engine"] },
      { code: "SYS / 03", date: "Feb — Mar 2026", title: "Advanced E-Commerce System", type: "Scalable Payments & Role Design", stack: "Laravel · Strategy Pattern · Firebase · WhatsApp", solutions: ["Replaced nested conditional logic with the Strategy Pattern to make new payment gateways extensible without changes to core code.", "Architected granular RBAC permissions separating Finance, Orders, and Support responsibilities.", "Used Event-Driven Architecture for asynchronous Firebase and WhatsApp order notifications."], tags: ["Strategy Pattern", "RBAC", "Events", "Firebase", "WhatsApp"], flow: ["Order Event", "Listeners", "Role Policy", "Notifications"] },
    ],
    additional: {
      kicker: "Additional project work", title: "Two more systems in the record.", route: "Route map / auxiliary systems",
      items: [
        { title: "Bus Travel Booking Platform", detail: "A multi-role transportation SaaS for passengers, companies, and administrators, with transaction-safe seat reservations using pessimistic row locking, polymorphic KYC document uploads, and payment gateway integration.", tags: ["Multi-role SaaS", "Pessimistic Locking", "KYC", "Payments"] },
        { title: "Laravel-RealTime", detail: "A broadcasting-based backend for low-latency data synchronization, paired with CORS-optimized REST APIs for React SPA consumption.", tags: ["Broadcasting", "Low-latency", "REST APIs", "React SPA"] },
      ],
    },
    skills: { kicker: "Technical capabilities", title: "The tools are a vocabulary, not the whole story.", intro: "The working stack is chosen to keep systems maintainable under real product constraints.", groups: [["Backend & Frameworks", ["Laravel", "PHP", "RESTful APIs", "Python", "FastAPI"]], ["Architecture & Patterns", ["Microservices", "Event-Driven Architecture", "Strategy Pattern", "Service-Repository Pattern"]], ["Databases & Operations", ["MySQL", "MongoDB (Basic)", "Dynamic JSON-Based Querying", "System Deployment (Basic)"]], ["Frontend & Tools", ["React.js (Basic)", "HTML5", "CSS", "Bootstrap", "Git", "GitHub", "Firebase (Basic)"]]], noteKicker: "A useful constraint", note: "Technology is valuable when it makes the next decision more dependable." },
    journey: { kicker: "Education & certification", title: "A deliberate foundation.", first: { date: "Jun 2023 — Present", title: "B.S. in Informatics", badge: "Third-Year Student", institution: "International University for Science and Technology", detail: "Relevant coursework includes Web Development, Microprocessor Architecture (Intel 8085/8086), Assembly Language, Memory Paging, Data Structures, and Graph Theory." }, second: { date: "March 2026", title: "Intensive Backend Development with Laravel", badge: "110 Hours", institution: "Tamkeen — Empowering the Syrian Programmer", detail: "Completed intensive Laravel backend development training with a 95/100 final project score, together with a formal Letter of Recommendation for technical execution, architecture, and secure coding practices." } },
    contact: { eyebrow: "Ready for a clear brief", heading: ["Let’s make the system", "simpler", "than the problem."], action: "Start a conversation", location: "Damascus, Syria" },
    footer: "© 2026 Abdulrahman Al-Hammadi. Built as a record of work, not a template.",
  },
  ar: {
    title: "عبدالرحمن الحمادي | مطوّر Backend",
    nav: ["سجل الأنظمة", "المنهجيات", "السجل التدريبي", "ابدأ موجزاً"],
    controls: { language: "English", light: "الوضع الفاتح", dark: "الوضع الداكن", cv: "السيرة", openMenu: "فتح القائمة", closeMenu: "إغلاق القائمة" },
    hero: {
      eyebrow: "متاح لفرص هندسية ذات معنى",
      heading: ["أنظمة خلفية،", "محددة", "قبل أن تُبنى."],
      summary: "عبدالرحمن الحمادي مطوّر Backend ومهندس برمجيات في دمشق، يبني منصات آمنة وقابلة للتوسع، حيث تلتقي متطلبات العمل والبيانات والأنظمة غير المتزامنة ضمن بنية واضحة.",
      primary: "افتح السجل الهندسي",
      cv: "افتح السيرة الذاتية",
      metadata: [["الدور", "مطوّر Backend", "مهندس برمجيات"], ["الموقع", "دمشق،", "سوريا"], ["التركيز", "Laravel وPHP", "وأنظمة قابلة للتوسع"]],
      profile: "ملف تحريري",
      profileLabel: "الملف",
      profileValue: "تفكير منظومي",
      focusLabel: "التركيز",
      focusValue: "تدفق موثوق",
      principle: "مبدأ هندسي",
      principleText: "حدود واضحة. ومسارات بيانات مدروسة.",
    },
    intro: {
      kicker: "منهجية العمل",
      text: "تركيز عملي على الـBackend مع خبرة في منصات SaaS متعددة المستأجرين، وميزات مبنية على نماذج اللغة، ومسارات معالجة غير متزامنة. الهدف ليس تشغيل الكود فقط، بل بناء نظام مفهوم وآمن وجاهز للتطور.",
      continuity: "استمرارية النظام",
      principles: ["اعتماد التصميم القائم على الأحداث عندما يتطلب الحمل الفصل بين المسؤوليات.", "تضمين الأمان في نماذج البيانات وحدود النظام.", "اختيار الأنماط التي تخفض تكلفة التغيير مستقبلاً."],
    },
    work: { kicker: "أعمال هندسية مختارة", title: "الأنظمة خلف الواجهة.", intro: "سجل للقرارات المعمارية والقيود التشغيلية والأنماط العملية التي دفعت المشاريع إلى الأمام.", notes: "ملاحظات هندسية", live: "عرض النظام", record: "سجل معماري" },
    projects: [
      { code: "نظام / 01", date: "يونيو 2026 — الآن", title: "DataEngine", type: "منصة SaaS لتحليل بيانات الأعمال", stack: "Laravel · React · MySQL · Gemini API", solutions: ["صممت منصة SaaS متعددة المستأجرين لتحليل ملفات Excel وCSV تلقائياً، مع عزل صارم للبيانات بين المستخدمين واستخدام Laravel Queues لمعالجة الملفات والتصدير.", "بنيت محرك استعلامات ديناميكي بلا مخطط ثابت بالاعتماد على أعمدة MySQL JSON للفلترة والبحث والترتيب ضمن هياكل جداول متعددة.", "دمجت مساعد محادثة مبنياً على نماذج اللغة ومقيّداً ببيانات التقارير المسبقة، مع إشعارات لحظية عبر Laravel Echo وWebSockets."], tags: ["Laravel", "React", "MySQL JSON", "Gemini API", "WebSockets"], flow: ["Excel / CSV", "Queues", "بيانات JSON", "مساعد ذكي"] },
      { code: "نظام / 02", date: "أبريل — مايو 2026", title: "Styloraify", type: "منصة تجارة إلكترونية مدعومة بالذكاء الاصطناعي", stack: "Laravel · MongoDB · Python / FastAPI", live: "https://styloraify.com/", solutions: ["حللت أعطال Laravel وMongoDB في الاستضافة المشتركة عبر مسار مخصص لمسح التخزين المؤقت وإعادة هيكلة User Model لمعالجة قيمة _id النصية ومنع تعطل JWT.", "ضمّنت مصدر Python وFastAPI مباشرة ضمن البنية التحتية لتثبيت نشر محرك توليد الذكاء الاصطناعي.", "طبقت نمط Service-Repository لحماية مفاتيح API وتنظيم منطق الأعمال."], tags: ["Laravel", "MongoDB", "Python", "FastAPI", "Service-Repository"], flow: ["عميل React", "Laravel API", "MongoDB", "محرك AI"] },
      { code: "نظام / 03", date: "فبراير — مارس 2026", title: "نظام تجارة إلكترونية متقدم", type: "تصميم مدفوعات وأدوار قابل للتوسع", stack: "Laravel · Strategy Pattern · Firebase · WhatsApp", solutions: ["استبدلت المنطق الشرطي المتداخل بنمط Strategy لجعل إضافة بوابات الدفع قابلة للتوسع دون تعديل في الكود الأساسي.", "صممت صلاحيات RBAC دقيقة تفصل مسؤوليات المالية والطلبات والدعم.", "استخدمت Event-Driven Architecture لإشعارات الطلبات غير المتزامنة عبر Firebase وWhatsApp."], tags: ["Strategy Pattern", "RBAC", "Events", "Firebase", "WhatsApp"], flow: ["حدث طلب", "مستمعات", "سياسة الدور", "إشعارات"] },
    ],
    additional: { kicker: "أعمال إضافية", title: "نظامان آخران في السجل.", route: "خريطة مسارات / أنظمة مساندة", items: [{ title: "منصة حجز سفر بالحافلات", detail: "منصة SaaS متعددة الأدوار للمسافرين والشركات والمديرين، مع حجوزات مقاعد آمنة ضمن المعاملات باستخدام Pessimistic Locking، ورفع مستندات KYC متعددة الأشكال، وتكامل بوابة الدفع.", tags: ["SaaS متعدد الأدوار", "Pessimistic Locking", "KYC", "مدفوعات"] }, { title: "Laravel-RealTime", detail: "Backend مبني على البث لمزامنة البيانات منخفضة التأخير، مع REST APIs محسنة لـ CORS لاستهلاك تطبيقات React SPA.", tags: ["Broadcasting", "تأخير منخفض", "REST APIs", "React SPA"] }] },
    skills: { kicker: "القدرات التقنية", title: "الأدوات مفردات، وليست القصة كاملة.", intro: "يُختار الـStack العملي للحفاظ على الأنظمة القابلة للصيانة ضمن قيود المنتج الحقيقية.", groups: [["Backend والأطر", ["Laravel", "PHP", "RESTful APIs", "Python", "FastAPI"]], ["المعمارية والأنماط", ["Microservices", "Event-Driven Architecture", "Strategy Pattern", "Service-Repository Pattern"]], ["قواعد البيانات والعمليات", ["MySQL", "MongoDB (أساسي)", "Dynamic JSON-Based Querying", "System Deployment (أساسي)"]], ["الواجهة والأدوات", ["React.js (أساسي)", "HTML5", "CSS", "Bootstrap", "Git", "GitHub", "Firebase (أساسي)"]]], noteKicker: "قيد مفيد", note: "تكون التقنية ذات قيمة عندما تجعل القرار التالي أكثر موثوقية." },
    journey: { kicker: "التعليم والشهادات", title: "أساس مبني بوعي.", first: { date: "يونيو 2023 — الآن", title: "بكالوريوس معلوماتية", badge: "طالب سنة ثالثة", institution: "الجامعة الدولية للعلوم والتكنولوجيا", detail: "تشمل المقررات ذات الصلة تطوير الويب، معمارية المعالجات الدقيقة Intel 8085/8086، لغة Assembly، إدارة الذاكرة، هياكل البيانات، ونظرية الرسوم البيانية." }, second: { date: "مارس 2026", title: "تدريب مكثف في Backend Laravel", badge: "110 ساعات", institution: "تمكين — تمكين المبرمج السوري", detail: "أنهيت تدريب Laravel مكثفاً بنتيجة 95/100 في المشروع النهائي، مع خطاب توصية رسمي في التنفيذ التقني والمعمارية وممارسات البرمجة الآمنة." } },
    contact: { eyebrow: "جاهز لموجز واضح", heading: ["لنجعل النظام", "أبسط", "من المشكلة."], action: "ابدأ محادثة", location: "دمشق، سوريا" },
    footer: "© 2026 عبدالرحمن الحمادي. بُني كسجل للعمل، لا كقالب جاهز.",
  },
} as const;
