
document.addEventListener('DOMContentLoaded', function() {
  
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    // Create background elements
    const techGrid = document.createElement('div');
    techGrid.className = 'tech-grid';
    document.body.appendChild(techGrid);

    const floatingDots = document.createElement('div');
    floatingDots.className = 'floating-dots';
    floatingDots.id = 'floatingDots';
    document.body.appendChild(floatingDots);

    const pulseEffect = document.createElement('div');
    pulseEffect.className = 'pulse-effect';
    pulseEffect.id = 'pulseEffect';
    document.body.appendChild(pulseEffect);

    // Create header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Tachyon 2024 Gallery';
    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.textContent = 'More Than Meets The Eye';
    
    header.appendChild(h1);
    header.appendChild(subtitle);
    container.appendChild(header);

    // Create gallery container
    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'gallery-container';
    galleryContainer.id = 'galleryContainer';

    // Create navigation areas
    const prevArea = document.createElement('div');
    prevArea.className = 'nav-area left';
    prevArea.id = 'prevArea';
    const prevBtn = document.createElement('div');
    prevBtn.className = 'nav-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevArea.appendChild(prevBtn);

    const nextArea = document.createElement('div');
    nextArea.className = 'nav-area right';
    nextArea.id = 'nextArea';
    const nextBtn = document.createElement('div');
    nextBtn.className = 'nav-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextArea.appendChild(nextBtn);

    // Create gallery slider
    const gallerySlider = document.createElement('div');
    gallerySlider.className = 'gallery-slider';
    gallerySlider.id = 'gallerySlider';

    // Create dots container
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'dots';
    dotsContainer.id = 'dotsContainer';

    // Assemble gallery
    galleryContainer.appendChild(prevArea);
    galleryContainer.appendChild(gallerySlider);
    galleryContainer.appendChild(nextArea);
    container.appendChild(galleryContainer);
    container.appendChild(dotsContainer);

    // Create footer
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    footerText.textContent = 'Tachyon © 2024 | Autobots, Roll Out!';
    footer.appendChild(footerText);
    container.appendChild(footer);

    // Add Font Awesome for icons
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);

    // Gallery functionality
    // Create floating background dots and pulse effects
    createFloatingDots();
    createPulseEffects();
    
    // Image data - user can replace these with their own images
    const images = [
        { id: 1, placeholder: "Event Highlights", url: "YOUR_IMAGE_URL_1" },
        { id: 2, placeholder: "Robotics Competition", url: "YOUR_IMAGE_URL_2" },
        { id: 3, placeholder: "Coding Challenge", url: "YOUR_IMAGE_URL_3" },
        { id: 4, placeholder: "Tech Exhibition", url: "YOUR_IMAGE_URL_4" },
        { id: 5, placeholder: "Guest Lectures", url: "YOUR_IMAGE_URL_5" },
        { id: 6, placeholder: "Workshops", url: "YOUR_IMAGE_URL_6" },
        { id: 7, placeholder: "Award Ceremony", url: "YOUR_IMAGE_URL_7" }
    ];
    
    let currentIndex = 0;
    
    // Create slides and dots
    images.forEach((image, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.dataset.index = index;
        
        // Add placeholder content - user will replace URLs with their images
        slide.innerHTML = `
            <div>${image.placeholder}</div>
            <div style="font-size: 0.8rem; margin-top: 10px;">Add your image URL</div>
        `;
        
        gallerySlider.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });
    
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Initialize gallery
    updateGallery();
    
    // Navigation area event listeners - FIXED AND WORKING
    prevArea.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    });
    
    nextArea.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    });
    
    // Mouse movement navigation
    galleryContainer.addEventListener('mousemove', (e) => {
        const rect = galleryContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const containerWidth = rect.width;
        
        // Check if mouse is in left or right third of container
        const isMouseInLeft = mouseX < containerWidth / 3;
        const isMouseInRight = mouseX > (containerWidth / 3) * 2;
        
        // Show appropriate button
        if (isMouseInLeft) {
            prevArea.style.background = 'rgba(0, 100, 255, 0.1)';
            nextArea.style.background = 'transparent';
        } else if (isMouseInRight) {
            nextArea.style.background = 'rgba(0, 100, 255, 0.1)';
            prevArea.style.background = 'transparent';
        } else {
            prevArea.style.background = 'transparent';
            nextArea.style.background = 'transparent';
        }
    });
    
    // Dot click event
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentIndex = parseInt(this.dataset.index);
            updateGallery();
        });
    });
    
    // Auto slide
    let autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    }, 4000);
    
    // Pause auto slide on hover
    galleryContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });
    
    galleryContainer.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateGallery();
        }, 4000);
        prevArea.style.background = 'transparent';
        nextArea.style.background = 'transparent';
    });
    
    function updateGallery() {
        // Update slides
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next', 'far-prev', 'far-next');
            
            if (index === currentIndex) {
                slide.classList.add('active');
            } else if (index === (currentIndex - 1 + images.length) % images.length) {
                slide.classList.add('prev');
            } else if (index === (currentIndex + 1) % images.length) {
                slide.classList.add('next');
            } else if (index === (currentIndex - 2 + images.length) % images.length) {
                slide.classList.add('far-prev');
            } else if (index === (currentIndex + 2) % images.length) {
                slide.classList.add('far-next');
            }
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function createFloatingDots() {
        const dotCount = 25;
        
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'floating-dot';
            
            // Random properties for each dot
            const size = Math.random() * 10 + 3;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const animationDuration = Math.random() * 6 + 4; // Faster animation
            const animationDelay = Math.random() * 2;
            
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.left = `${left}%`;
            dot.style.top = `${top}%`;
            dot.style.animationDuration = `${animationDuration}s`;
            dot.style.animationDelay = `${animationDelay}s`;
            
            floatingDots.appendChild(dot);
        }
    }
    
    function createPulseEffects() {
        const pulseCount = 3;
        
        for (let i = 0; i < pulseCount; i++) {
            const pulse = document.createElement('div');
            pulse.className = 'pulse';
            
            // Random properties for each pulse
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const animationDelay = Math.random() * 4;
            
            pulse.style.left = `${left}%`;
            pulse.style.top = `${top}%`;
            pulse.style.animationDelay = `${animationDelay}s`;
            
            pulseEffect.appendChild(pulse);
        }
    }
});
