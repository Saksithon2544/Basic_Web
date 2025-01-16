// Open dialog when clicking on the "Hire Purchase" link
document.getElementById('openDialogBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('dialogOverlay').style.display = 'flex';
});

// Close input dialog
document.getElementById('closeDialogButton').addEventListener('click', function() {
    document.getElementById('dialogOverlay').style.display = 'none';
});

// Close result dialog
document.getElementById('closeResultDialogButton').addEventListener('click', function() {
    document.getElementById('dialogResult').style.display = 'none';
});

// Show custom rate input field when loan type is custom
document.getElementById('loanTypeSelect').addEventListener('change', function() {
    const customRateInput = document.getElementById('customRateInput');
    const label = document.getElementById('labelCustomRateInput');
    if (this.value === 'custom') {
        customRateInput.style.display = 'inline';
        label.style.display = 'inline';
    } else {
        customRateInput.style.display = 'none';
        label.style.display = 'none';
    }
});

// Function to calculate loan
function calculateLoan() {
    const loanAmountInput = document.getElementById('loanAmountInput');
    const loanAmount = parseFloat(loanAmountInput.value);
    const installmentMonths = parseInt(document.getElementById('installmentMonthsInput').value);
    const loanType = document.getElementById('loanTypeSelect').value;
    const customRate = parseFloat(document.getElementById('customRateInput').value);
    const downPayment = parseFloat(document.getElementById('downPaymentInput').value) || 0;

    // Validate inputs
    if (!loanAmountInput.value || loanAmount <= 0 || loanAmount > 500000) {
        Swal.fire({
            icon: 'error',
            title: 'ข้อผิดพลาด',
            text: 'กรุณากรอกจำนวนเงินกู้ที่มีค่ามากกว่า 0 และไม่เกิน 500,000 บาท',
        });
        return;
    }

    if (loanAmount < 10000) {
        Swal.fire({
            icon: 'error',
            title: 'ข้อผิดพลาด',
            text: 'จำนวนเงินกู้ต้องไม่น้อยกว่า 10,000 บาท',
        });
        return;
    }

    if (![12, 24, 36, 48, 60, 72].includes(installmentMonths)) {
        Swal.fire({
            icon: 'error',
            title: 'ข้อผิดพลาด',
            text: 'กรุณาเลือกจำนวนงวดที่ถูกต้อง',
        });
        return;
    }

    if (loanType === 'custom' && (isNaN(customRate) || customRate <= 0)) {
        Swal.fire({
            icon: 'error',
            title: 'ข้อผิดพลาด',
            text: 'กรุณากรอกอัตราดอกเบี้ยแบบกำหนดเองที่มีค่ามากกว่า 0',
        });
        return;
    }

    if (downPayment < 0) {
        Swal.fire({
            icon: 'error',
            title: 'ข้อผิดพลาด',
            text: 'เงินดาวน์ไม่สามารถเป็นค่าลบได้',
        });
        return;
    }

    // Default interest rate
    let interestRate = 23; // Default interest rate of 23% for standard loan
    if (loanType === 'custom') {
        interestRate = customRate; // Use custom rate if selected
    }

    // Calculate loan details
    const principal = loanAmount - downPayment; // Principal after down payment
    const interestAmount = (principal * interestRate / 100); // Interest amount
    const totalAmount = principal + interestAmount; // Total amount to be paid
    const monthlyInstallment = totalAmount / installmentMonths; // Monthly installment

    // Display results in a new dialog box
    const resultText = `ยอดเงินกู้หลังจากหักเงินดาวน์: ${principal.toLocaleString('th-TH',{ minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท<br>
                        อัตราดอกเบี้ย: ${interestRate}%<br>
                        ดอกเบี้ยรวม: ${interestAmount.toLocaleString('th-TH',{ minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท<br>
                        ยอดรวมที่ต้องชำระ: ${totalAmount.toLocaleString('th-TH',{ minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท<br>
                        ค่างวดรายเดือน: ${monthlyInstallment.toLocaleString('th-TH',{ minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท`;

    document.getElementById('dialogContent').innerHTML = resultText;
    
    document.getElementById('dialogResult').style.display = 'flex';

      // Add event listener for the recalculate button
      document.getElementById('recalculateBtn').addEventListener('click', function() {
        // Hide result dialog
        document.getElementById('dialogResult').style.display = 'none';
        // Show input form again
        document.getElementById('dialogOverlay').style.display = 'flex';
    });

    // Close the input dialog
    document.getElementById('dialogOverlay').style.display = 'none';
}
