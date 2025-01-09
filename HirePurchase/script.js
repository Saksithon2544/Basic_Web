document.getElementById("calculateBtn").addEventListener("click", function () {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const months = parseInt(document.getElementById("months").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);

    if (isNaN(loanAmount) || isNaN(months) || isNaN(interestRate)) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
    }

    const VAT_RATE = 0.07;

    // คำนวณยอดกู้ไม่รวม VAT
    const loanWithoutVAT = parseFloat((loanAmount / (1 + VAT_RATE)).toFixed(2));

    // คำนวณ VAT (ใช้ยอดกู้ไม่รวม VAT)
    const vat = parseFloat((loanAmount - loanWithoutVAT).toFixed(2));

    // คำนวณดอกเบี้ยรายเดือน
    const monthlyRate = interestRate / 12 / 100;

    // คำนวณค่างวดไม่รวม VAT
    const monthlyPaymentWithoutVAT = parseFloat(
        ((loanWithoutVAT * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))).toFixed(2)
    );

    // คำนวณค่างวดรวม VAT (ปัดเป็น 2 ตำแหน่ง)
    const monthlyPaymentWithVAT = parseFloat((monthlyPaymentWithoutVAT * (1 + VAT_RATE)).toFixed(2));

    // คำนวณยอดรวมที่ต้องจ่ายทั้งหมด
    const totalPaymentWithVAT = parseFloat((monthlyPaymentWithVAT * months).toFixed(2));

    // คำนวณค่าธรรมเนียมเช่าซื้อ
    const hirePurchaseFee = parseFloat((totalPaymentWithVAT - loanWithoutVAT).toFixed(2));

    // แสดงผลลัพธ์
    document.getElementById("loanWithoutVAT").textContent = loanWithoutVAT.toFixed(2);
    document.getElementById("vat").textContent = vat.toFixed(2);
    document.getElementById("monthlyPaymentWithoutVAT").textContent = monthlyPaymentWithoutVAT.toFixed(2);
    document.getElementById("monthlyPaymentWithVAT").textContent = monthlyPaymentWithVAT.toFixed(2);
    document.getElementById("totalPaymentWithVAT").textContent = totalPaymentWithVAT.toFixed(2);
    document.getElementById("hirePurchaseFee").textContent = hirePurchaseFee.toFixed(2);

    // คำนวณและแสดงผลค่างวดรวม VAT ในฟอร์แมตที่ต้องการ
    const checkMonthlyPaymentWithVAT = (monthlyPaymentWithoutVAT * (1 + VAT_RATE)).toFixed(2);
    document.getElementById("checkMonthlyPaymentWithVAT").textContent = checkMonthlyPaymentWithVAT;
});
