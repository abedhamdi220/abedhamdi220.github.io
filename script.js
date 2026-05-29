// انتظار تحميل كامل عناصر الصفحة
document.addEventListener("DOMContentLoaded", function() {
    // تهيئة مكتبة AOS لحركات الظهور عند التمرير
    AOS.init({
        duration: 800, // مدة الحركة بالملي ثانية
        once: true,    // تشغيل الحركة مرة واحدة فقط عند النزول
        offset: 100    // المسافة قبل تفعيل الحركة
    });
});