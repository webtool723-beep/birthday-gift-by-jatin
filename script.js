document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const bgMusic = document.getElementById('bgMusic');
    const slideshowContainer = document.getElementById('slideshow');
    const heartsContainer = document.getElementById('heartsContainer');

    // --- Configuration ---
    // Update these filenames when you add photos to the assets folder!
    const photos = [
        'https://picsum.photos/1200/800?random=1',
        'https://picsum.photos/1200/800?random=2',
        'https://picsum.photos/1200/800?random=3',
        'https://picsum.photos/1200/800?random=4'
    ];
    
    const emojis = ['❤️', '💖', '💕', '🥰', '😍', '✨', '🌹'];
    const SLIDESHOW_INTERVAL_MS = 5000; // 5 seconds per photo

    // --- Slideshow Setup ---
    let currentPhotoIndex = 0;
    
    function initSlideshow() {
        if (photos.length === 0) return;
        
        photos.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            // Add error handling in case image doesn't exist yet
            img.onerror = () => { img.style.display = 'none'; };
            if (index === 0) img.classList.add('active');
            slideshowContainer.appendChild(img);
        });

        // Start cycling photos
        if (photos.length > 1) {
            setInterval(nextPhoto, SLIDESHOW_INTERVAL_MS);
        }
    }

    function nextPhoto() {
        const images = slideshowContainer.querySelectorAll('img');
        if (images.length <= 1) return;

        images[currentPhotoIndex].classList.remove('active');
        currentPhotoIndex = (currentPhotoIndex + 1) % images.length;
        images[currentPhotoIndex].classList.add('active');
    }

    // --- Floating Emojis Setup ---
    function createEmoji() {
        const emojiEl = document.createElement('div');
        emojiEl.classList.add('floating-emoji');
        
        // Random emoji
        emojiEl.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Random horizontal position
        emojiEl.style.left = Math.random() * 100 + 'vw';
        
        // Random size
        emojiEl.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        
        // Random animation duration between 5s and 15s
        const duration = Math.random() * 10 + 5;
        emojiEl.style.animationDuration = duration + 's';
        
        heartsContainer.appendChild(emojiEl);
        
        // Remove element after animation completes to avoid memory leak
        setTimeout(() => {
            emojiEl.remove();
        }, duration * 1000);
    }

    function startFloatingEmojis() {
        // Create an emoji every 400ms
        setInterval(createEmoji, 400);
    }

    // --- Event Listeners ---
    welcomeScreen.addEventListener('click', () => {
        // Hide welcome screen
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
        }, 1000);

        // Show main content
        mainContent.classList.remove('hidden');

        // Play music
        bgMusic.play().catch(e => console.log("Audio play failed:", e));

        // Start animations
        initSlideshow();
        startFloatingEmojis();
    });
});
