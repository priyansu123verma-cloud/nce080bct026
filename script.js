/* ==================== MOBILE NAVBAR TOGGLE ==================== */

// Get DOM elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

/**
 * Toggle mobile menu on hamburger click
 */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

/**
 * Close mobile menu when a nav link is clicked
 */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/**
 * Close mobile menu when clicking outside of it
 */
document.addEventListener('click', (event) => {
    const isClickOnMenu = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickOnMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

/* ==================== FORM VALIDATION ==================== */

// Get form elements
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formMessage = document.getElementById('formMessage');

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Display error message for a specific field
 * @param {string} fieldId - ID of the input field
 * @param {string} message - Error message to display
 */
function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

/**
 * Clear error message for a specific field
 * @param {string} fieldId - ID of the input field
 */
function clearError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    if (errorElement) {
        errorElement.textContent = '';
    }
}

/**
 * Validate the contact form
 * @returns {boolean} - True if form is valid
 */
function validateForm() {
    let isValid = true;

    // Clear all previous errors
    clearError('name');
    clearError('email');
    clearError('message');

    // Validate name
    if (nameInput.value.trim() === '') {
        showError('name', 'Name is required');
        isValid = false;
    } else if (nameInput.value.trim().length < 2) {
        showError('name', 'Name must be at least 2 characters long');
        isValid = false;
    }

    // Validate email
    if (emailInput.value.trim() === '') {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate message
    if (messageInput.value.trim() === '') {
        showError('message', 'Message is required');
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        showError('message', 'Message must be at least 10 characters long');
        isValid = false;
    }

    return isValid;
}

/**
 * Display form submission message
 * @param {string} message - Message to display
 * @param {string} type - Message type ('success' or 'error')
 */
function displayFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

/**
 * Handle form submission
 * @param {Event} event - Form submission event
 */
function handleFormSubmit(event) {
    event.preventDefault();

    // Validate form
    if (!validateForm()) {
        displayFormMessage('Please fill out all fields correctly.', 'error');
        return;
    }

    // Simulate form submission (in a real application, you would send data to a server)
    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
    };

    console.log('Form submitted with data:', formData);

    // Display success message
    displayFormMessage('Thank you for your message! We will get back to you soon.', 'success');

    // Reset form
    contactForm.reset();
    clearError('name');
    clearError('email');
    clearError('message');
}

/* ==================== REAL-TIME FIELD VALIDATION ==================== */

/**
 * Validate name field in real-time
 */
nameInput.addEventListener('blur', () => {
    if (nameInput.value.trim() === '') {
        showError('name', 'Name is required');
    } else if (nameInput.value.trim().length < 2) {
        showError('name', 'Name must be at least 2 characters long');
    } else {
        clearError('name');
    }
});

/**
 * Validate email field in real-time
 */
emailInput.addEventListener('blur', () => {
    if (emailInput.value.trim() === '') {
        showError('email', 'Email is required');
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError('email', 'Please enter a valid email address');
    } else {
        clearError('email');
    }
});

/**
 * Validate message field in real-time
 */
messageInput.addEventListener('blur', () => {
    if (messageInput.value.trim() === '') {
        showError('message', 'Message is required');
    } else if (messageInput.value.trim().length < 10) {
        showError('message', 'Message must be at least 10 characters long');
    } else {
        clearError('message');
    }
});

/* ==================== SMOOTH SCROLLING ENHANCEMENT ==================== */

/**
 * Enhance smooth scrolling for nav links
 */
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        
        // Only use smooth scroll for internal links
        if (href.startsWith('#')) {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                // Slight delay for mobile menu animation
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    });
});

/* ==================== NAVBAR SHADOW ON SCROLL ==================== */

const navbar = document.querySelector('.navbar');

/**
 * Add shadow to navbar on scroll
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});

/* ==================== INITIALIZATION ==================== */

/**
 * Initialize the page on load
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Brew Haven website loaded successfully!');
    
    // You can add more initialization code here if needed
});

/* ==================== UTILITY FUNCTIONS ==================== */

/**
 * Log a message to console (for debugging)
 * @param {string} message - Message to log
 */
function log(message) {
    console.log(`[Brew Haven]: ${message}`);
}

/**
 * Scroll to a specific element
 * @param {string} elementId - ID of the element to scroll to
 */
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Export functions for use in HTML (if needed)
window.handleFormSubmit = handleFormSubmit;
window.scrollToElement = scrollToElement;
