document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const startBtn = document.getElementById('start-btn');
    const audioToggle = document.getElementById('audio-toggle');
    const bgVideo = document.getElementById('bg-video');
    const indicator = document.querySelector('.slide-indicator');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let isMuted = true;

    // --- SLIDE NAVIGATION ---
    function updateSlide() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        if (indicator) {
            const current = String(currentSlide + 1).padStart(2, '0');
            const total = String(totalSlides).padStart(2, '0');
            indicator.textContent = `${current} / ${total}`;
        }

        if (prevBtn) prevBtn.disabled = (currentSlide === 0);
        if (nextBtn) nextBtn.disabled = (currentSlide === totalSlides - 1);
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlide();
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    }

    // Audio Toggle Logic
    if (audioToggle && bgVideo) {
        audioToggle.addEventListener('click', () => {
            if (isMuted) {
                bgVideo.muted = false;
                bgVideo.volume = 0.8;
                audioToggle.textContent = '🔊 AUDIO ON';
                audioToggle.style.background = 'var(--accent-pink)';
                audioToggle.style.color = 'white';
            } else {
                bgVideo.muted = true;
                audioToggle.textContent = '🔇 AUDIO OFF';
                audioToggle.style.background = 'transparent';
                audioToggle.style.color = 'var(--accent-pink)';
            }
            isMuted = !isMuted;
        });
    }

    // Event Listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (startBtn) startBtn.addEventListener('click', nextSlide);

    document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowRight' || e.code === 'Space' || e.code === 'Enter') nextSlide();
        if (e.code === 'ArrowLeft') prevSlide();
    });

    updateSlide();
});
