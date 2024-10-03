        document.getElementById('hamburgerMenu').addEventListener('click', function() {
            toggleMenu();
        })

        function toggleMenu() {
            const x = document.getElementById('mobileMenu');
            if (x.style.display === 'flex') {
                x.style.display = 'none';
            } else {
                x.style.display = 'flex';
            }
        }