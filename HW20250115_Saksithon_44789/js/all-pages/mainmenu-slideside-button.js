//*จาวาสคิปสำหรับปุ่ม เปิด-ปิด เมนูย่อยด้านข้าง*//
const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");

icon1.addEventListener("click", function() {
  icon1.classList.add("hidden");
  icon2.classList.remove("hidden");
});

icon2.addEventListener("click", function() {
  icon2.classList.add("hidden");
  icon1.classList.remove("hidden");
})