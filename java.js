var btn = document.getElementById("diagnoseBtn");
var targetPage = "shakhes.html";

function goToDiagnosePage() {
  window.location.href = targetPage;
}

// 1. مسك العناصر
const fileInput = document.getElementById("plantImageInput");
const uploadIconBtn = document.getElementById("uploadIconBtn");
const placeholderContent = document.getElementById("placeholderContent");
const previewImg = document.getElementById("previewImg");
const analyzeBtn = document.getElementById("analyzeBtn");
const changeBtn = document.getElementById("changeBtn");

// 2. فتح نافذة اختيار الصورة عند الضغط على الأيقونة أو زرار "تغيير الصورة"
function openImagePicker() {
  fileInput.click();
}

uploadIconBtn.addEventListener("click", openImagePicker);
changeBtn.addEventListener("click", openImagePicker);

// 3. عند اختيار صورة من الجهاز
function handleImageChange() {
  const file = fileInput.files[0];
  if (!file) return;

  // قراءة الصورة وعرضها داخل الديف
  const imageUrl = URL.createObjectURL(file);
  previewImg.src = imageUrl;
  previewImg.style.display = "block";

  // إخفاء الكلام والأيقونة اللي جوه الديف
  placeholderContent.style.display = "none";

  // تغيير لون زرار "تحليل الصورة" وإظهار زرار "تغيير الصورة"
  analyzeBtn.classList.add("image-added");
  changeBtn.style.display = "inline-block";
}

fileInput.addEventListener("change", handleImageChange);
