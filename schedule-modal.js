document.addEventListener('DOMContentLoaded', () => {
    const scheduleModalOverlay = document.querySelector('.schedule-modal-overlay');
    const scheduleCards = document.querySelectorAll('.schedule-card');
    const scheduleModalCloseButton = document.querySelector('.schedule-modal-close');

    if (scheduleModalOverlay && scheduleModalCloseButton) {
        scheduleModalCloseButton.addEventListener('click', () => {
            scheduleModalOverlay.style.display = 'none';
        });

        scheduleModalOverlay.addEventListener('click', (e) => {
            if (e.target === scheduleModalOverlay) {
                scheduleModalOverlay.style.display = 'none';
            }
        });
    }

    scheduleCards.forEach(card => {
        card.addEventListener('click', () => {
            // In a real WordPress theme, you would fetch event details via AJAX or use data attributes
            // For this conversion, we will just toggle the modal for demonstration.
            if (scheduleModalOverlay) {
                scheduleModalOverlay.style.display = 'flex'; // Show modal
            }
        });
    });

   
});

