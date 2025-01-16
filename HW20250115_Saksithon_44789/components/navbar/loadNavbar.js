function loadHTML(selector, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading file: ${filePath}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;

            // Add functionality (e.g., toggle button) after loading
            const headerToggle = document.getElementById('header-toggle');
            const navBar = document.getElementById('nav-bar');

            if (headerToggle && navBar) {
                headerToggle.addEventListener('click', () => {
                    navBar.classList.toggle('show');
                });
            }
        })
        .catch(error => console.error(error));
}
