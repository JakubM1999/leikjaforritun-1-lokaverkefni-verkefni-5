// Initialize video toggle functionality
function initVideoToggle() {
    const video = document.getElementById('bg-video');
    const toggleBtn = document.getElementById('video-toggle');

    if (video && toggleBtn) {
        // Remove any existing listeners by cloning (optional, but safe)
        const newBtn = toggleBtn.cloneNode(true);
        toggleBtn.parentNode.replaceChild(newBtn, toggleBtn);

        newBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (video.paused) {
                video.play();
                newBtn.textContent = 'PAUSE VIDEO';
            } else {
                video.pause();
                newBtn.textContent = 'PLAY VIDEO';
            }
        });
    }
}

// Run immediately if DOM is already ready, otherwise wait for it
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVideoToggle);
} else {
    initVideoToggle();
}