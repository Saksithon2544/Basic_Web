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

// Function to calculate loan
function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmountInput').value);
    const installmentMonths = parseInt(document.getElementById('installmentMonthsInput').value);
    const loanType = document.getElementById('loanTypeSelect').value;
    const customRate = parseFloat(document.getElementById('customRateInput').value);
    const downPayment = parseFloat(document.getElementById('downPaymentInput').value) || 0;

    // Validate inputs
    if (loanAmount <= 0 || loanAmount > 500000) {
        alert("จำนวนเงินกู้ต้องมีค่ามากกว่า 0 และไม่เกิน 500,000 บาท");
        return;
    }
    if (![12, 24, 36, 48, 60, 72].includes(installmentMonths)) {
        alert("กรุณาเลือกจำนวนงวดที่ถูกต้อง");
        return;
    }
    if (loanType === 'custom' && (isNaN(customRate) || customRate <= 0)) {
        alert("กรุณากรอกอัตราดอกเบี้ยแบบกำหนดเอง");
        return;
    }

    // Default interest rate
    let interestRate = 23;
    if (loanType === 'custom') {
        interestRate = customRate;
    }

    // Calculate loan details
    const principal = loanAmount - downPayment;
    const interestAmount = (principal * interestRate / 100);
    const totalAmount = principal + interestAmount;
    const monthlyInstallment = totalAmount / installmentMonths;

    // Show the results in a new dialog box
    const resultText = `ยอดเงินกู้หลังจากหักเงินดาวน์: ${principal.toFixed(2)} บาท<br>
                        อัตราดอกเบี้ย: ${interestRate}%<br>
                        ดอกเบี้ยรวม: ${interestAmount.toFixed(2)} บาท<br>
                        ยอดรวมที่ต้องชำระ: ${totalAmount.toFixed(2)} บาท<br>
                        ค่างวดรายเดือน: ${monthlyInstallment.toFixed(2)} บาท`;

    document.getElementById('dialogContent').innerHTML = resultText;
    document.getElementById('dialogResult').style.display = 'flex';

    // Close the input dialog
    document.getElementById('dialogOverlay').style.display = 'none';
}