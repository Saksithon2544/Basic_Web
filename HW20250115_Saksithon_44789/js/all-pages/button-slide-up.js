 // Get the button
 let mybutton = document.getElementById("myBtn");
 // เมื่อคนใช้ลิ้งลูกกลิ้งขึ้นมา 20px ปุ่มtop จะเด่งขึ้นมา
 window.onscroll = function() {scrollFunction()};
 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }
 // เมื่อกดที่ปุ่มจะถูกเลื่อนขึ้นไปบนสุด
 function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }
 function topFunction() {
  // คำสั่งจุดเริ่มที่จะเลื่อนขึ้นไปด้านบนสุด
 const scrollHeight = window.pageYOffset;
 // ระยะเวลาเลื่อนขึ้น
 const duration = 300; // (หน่วยเป็น0.5วิ)
 // เฟรมเรดแสดงภาพที่เลื่อน
 const numberOfFrames = 30;
 // Calculate the distance to scroll in each frame
 const distancePerFrame = scrollHeight / numberOfFrames;
 // Animate the scroll อเนเมชั่นเลื่อน
 let i = 0;
 const interval = setInterval(() => {
     if (i < numberOfFrames) {
         window.scroll(0, scrollHeight - distancePerFrame * i);
         i++;
     } else {
         clearInterval(interval);
         window.scroll(0, 0);
     }
         }, duration / numberOfFrames);
     }