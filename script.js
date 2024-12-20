// Script.js for Infinity Math

// Smooth Scroll for Navigation Buttons
document.querySelectorAll('.btn-custom').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const target = button.getAttribute('href');
        if (target && target.startsWith('#')) {
            const section = document.querySelector(target);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Dynamic Greeting Based on Time
const header = document.querySelector('header p');
const now = new Date();
const hour = now.getHours();
let greeting;

if (hour < 12) {
    greeting = 'Selamat Pagi! Mulailah hari dengan matematika.';
} else if (hour < 18) {
    greeting = 'Selamat Siang! Saatnya belajar matematika.';
} else {
    greeting = 'Selamat Malam! Jangan lupa matematika sebelum tidur.';
}

header.textContent = greeting;

// Alert for Coming Soon Section
document.querySelectorAll('a.btn-custom[href="#"]').forEach(button => {
    button.addEventListener('click', () => {
        alert('Fitur ini akan segera hadir. Nantikan update dari kami!');
    });
});
