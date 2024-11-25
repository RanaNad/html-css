// التفاعل مع نموذج التواصل
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // منع الإرسال الفعلي للنموذج
    alert("تم إرسال رسالتك بنجاح!"); // رسالة تأكيد
});
