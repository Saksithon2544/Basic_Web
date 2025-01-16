document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logout");

    // เมื่อคลิกที่ปุ่ม Logout
    logoutButton.addEventListener("click", (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            confirmButtonText: 'Yes, logout',
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "./../index.html"; 
              localStorage.removeItem("authToken");
            }
        });
    });
});
