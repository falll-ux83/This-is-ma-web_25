// humberger-menu
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Efek fade-in & fade-out
document.addEventListener("DOMContentLoaded", function () {
    // Efek Fade In saat halaman pertama kali dimuat
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1.5s";
    document.body.style.opacity = 1;

    // Ambil semua elemen dengan class 'fade-in-out'
    const fadeElements = document.querySelectorAll(".fade-in-out");

    // Fungsi untuk mengecek apakah elemen masuk viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight - 100 && rect.bottom > 100; 
    }

    // Fungsi untuk menampilkan elemen dengan efek fade-in & fade-out saat scroll
    function handleScroll() {
        fadeElements.forEach((el) => {
            if (isElementInViewport(el)) {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-10");
            } else {
                el.classList.add("opacity-0", "translate-y-10");
                el.classList.remove("opacity-100", "translate-y-0");
            }
        });
    }

    // Tambahkan event listener untuk memantau scroll
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Panggil sekali saat pertama kali halaman dimuat
});