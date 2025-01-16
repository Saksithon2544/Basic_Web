document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logout");

    // เมื่อคลิกที่ปุ่ม Logout
    logoutButton.addEventListener("click", (e) => {
        e.preventDefault();

        localStorage.removeItem("authToken");

        window.location.href = "../index.html"; 
    });
});
