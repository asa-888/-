document.addEventListener('DOMContentLoaded', () => {
    const newsCarousel = document.querySelector('.team-news-carousel');
    if (newsCarousel) {
        // Basic infinite scroll for news carousel
        // Note: For a more robust carousel with navigation and touch support, a library like Swiper.js would be recommended.
        // This is a simplified example to demonstrate JS integration.
        const slider = newsCarousel.querySelector('.team-news-slider');
        const slides = Array.from(slider.children);
        const slideWidth = slides[0].offsetWidth;
        let currentPosition = 0;

        function cloneSlides() {
            slides.forEach(slide => {
                slider.appendChild(slide.cloneNode(true));
            });
        }

        cloneSlides();

        // Simple auto-scroll - for real carousel, use proper animation and controls
        // This part is illustrative and requires more advanced JS for smooth animation
    }

    $(function(){
        $('.btn-trigger').on('click', function() {
          $(this).toggleClass('active');
          return false;
        });
      });
});

