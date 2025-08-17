/* Contact form submission handler */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // For demonstration, just show an alert
    alert(`Thank you, ${name}! Your message has been received.`);

    // Clear the form
    this.reset();
});

/* Products Carousel */
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;
    if (!prevSlide) {
        prevSlide = slides[slides.length - 1];
    }
    moveToSlide(track, currentSlide, prevSlide);
});

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    if (!nextSlide) {
        nextSlide = slides[0];
    }
    moveToSlide(track, currentSlide, nextSlide);
});

/* Testimonials Carousel */
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialSlides = Array.from(testimonialTrack.children);
const nextTestimonialBtn = document.querySelector('.next-testimonial');
const prevTestimonialBtn = document.querySelector('.prev-testimonial');

const moveToTestimonialSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Set testimonial slides position
testimonialSlides.forEach((slide, index) => {
    slide.style.left = 100 * index + '%';
});

prevTestimonialBtn.addEventListener('click', e => {
    const currentSlide = testimonialTrack.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;
    if (!prevSlide) {
        prevSlide = testimonialSlides[testimonialSlides.length - 1];
    }
    testimonialTrack.style.transform = 'translateX(-' + prevSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
});

nextTestimonialBtn.addEventListener('click', e => {
    const currentSlide = testimonialTrack.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    if (!nextSlide) {
        nextSlide = testimonialSlides[0];
    }
    testimonialTrack.style.transform = 'translateX(-' + nextSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
});
