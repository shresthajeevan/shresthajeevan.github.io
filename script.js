// Three.js Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create floating particles
const particles = [];
const particleCount = 100;

for (let i = 0; i < particleCount; i++) {
    const geometry = new THREE.SphereGeometry(0.1, 8, 8);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x7c3aed,
        transparent: true,
        opacity: 0.6
    });
    const particle = new THREE.Mesh(geometry, material);
    
    particle.position.x = Math.random() * 20 - 10;
    particle.position.y = Math.random() * 20 - 10;
    particle.position.z = Math.random() * 20 - 10;
    
    particle.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
    );
    
    particles.push(particle);
    scene.add(particle);
}

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    
    particles.forEach(particle => {
        particle.position.add(particle.velocity);
        
        // Bounce off walls
        if (Math.abs(particle.position.x) > 10) particle.velocity.x *= -1;
        if (Math.abs(particle.position.y) > 10) particle.velocity.y *= -1;
        if (Math.abs(particle.position.z) > 10) particle.velocity.z *= -1;
        
        particle.rotation.x += 0.01;
        particle.rotation.y += 0.01;
    });
    
    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
const navbar = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.querySelector('nav .md\\:hidden');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const html = document.documentElement;
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.querySelector('.fa-sun');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    html.classList.add('dark');
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
}

darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    moonIcon.classList.toggle('hidden');
    sunIcon.classList.toggle('hidden');
    
    // Save theme preference
    const theme = html.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Experience Section - No Animation for better loading
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Content Loaded");
    
    // Add animate class to all experience elements right away
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineDots = document.querySelectorAll('.timeline-dot');
    const experienceCards = document.querySelectorAll('.experience-card');
    
    console.log("Timeline items:", timelineItems.length);
    
    // Add all classes immediately without animations
    timelineItems.forEach(item => {
        item.classList.add('animate');
    });
    
    timelineDots.forEach(dot => {
        dot.classList.add('animate');
    });
    
    experienceCards.forEach(card => {
        card.classList.add('animate');
    });

    // Experience Modal
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const experienceModal = document.getElementById('experienceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.querySelector('.close-modal');

    console.log("Read more buttons:", readMoreButtons.length);
    console.log("Modal exists:", !!experienceModal);

    if (readMoreButtons.length && experienceModal && modalTitle && modalContent && closeModal) {
        const experienceDetails = {
            "Graduate Research Assistant Details": {
                title: "Graduate Research Assistant",
                content: `
                    <div class="space-y-4">
                        <div>
                            <h4 class="font-semibold text-lg mb-2">Course Module Development</h4>
                            <p>Designed and developed a comprehensive graduate-level course module focused on Software Supply Chain Security, incorporating AI technologies to enhance learning outcomes. The module includes:</p>
                            <ul class="list-disc list-inside mt-2 ml-4">
                                <li>Interactive learning materials</li>
                                <li>AI-powered vulnerability detection exercises</li>
                                <li>Real-world case studies</li>
                                <li>Hands-on security assessment tools</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-lg mb-2">Research Contributions</h4>
                            <p>Conducted extensive research on modern security vulnerabilities and developed innovative methods for their detection and mitigation. Key achievements include:</p>
                            <ul class="list-disc list-inside mt-2 ml-4">
                                <li>Published research on AI-driven security analysis</li>
                                <li>Developed new vulnerability detection algorithms</li>
                                <li>Created automated security assessment tools</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-lg mb-2">Educational Technology</h4>
                            <p>Implemented cutting-edge educational technologies to enhance the learning experience:</p>
                            <ul class="list-disc list-inside mt-2 ml-4">
                                <li>Interactive coding environments</li>
                                <li>AI-powered feedback systems</li>
                                <li>Virtual security labs</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            "Software Engineer Intern Details": {
                title: "Software Engineer Intern",
                content: `
                    <div class="space-y-4">
                        <div>
                            <h4 class="font-semibold text-lg mb-2">UI/UX Design</h4>
                            <p>Led the design and implementation of user interfaces using Figma, creating cohesive and intuitive designs:</p>
                            <ul class="list-disc list-inside mt-2 ml-4">
                                <li>Designed responsive layouts for multiple devices</li>
                                <li>Created interactive prototypes</li>
                                <li>Implemented design systems</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-lg mb-2">Calendar System Development</h4>
                            <p>Researched and implemented an optimized calendar system:</p>
                            <ul class="list-disc list-inside mt-2 ml-4">
                                <li>Integrated with various calendar APIs</li>
                                <li>Implemented RFC-compliant scheduling</li>
                                <li>Optimized performance for large datasets</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-lg mb-2">E-commerce Development</h4>
                            <p>Developed a Vue.js-based storefront with focus on user experience:</p>
                            <ul class="list-disc list-inside mt-2 ml-4">
                                <li>Implemented responsive design patterns</li>
                                <li>Optimized performance metrics</li>
                                <li>Enhanced accessibility features</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        };

        readMoreButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log("Read more button clicked");
                const details = button.getAttribute('data-details');
                if (experienceDetails[details]) {
                    modalTitle.textContent = experienceDetails[details].title;
                    modalContent.innerHTML = experienceDetails[details].content;
                } else {
                    modalTitle.textContent = details;
                    modalContent.innerHTML = `
                        <p>Additional details about ${details} will be displayed here.</p>
                        <p>This is a placeholder for the detailed content that would be shown in the modal.</p>
                    `;
                }
                experienceModal.classList.remove('hidden');
                experienceModal.classList.add('flex');
                const modalBox = experienceModal.querySelector('.bg-white, .dark\\:bg-dark');
                if (modalBox) {
                    modalBox.classList.add('scale-100', 'opacity-100');
                }
            });
        });

        closeModal.addEventListener('click', () => {
            console.log("Close modal clicked");
            const modalBox = experienceModal.querySelector('.bg-white, .dark\\:bg-dark');
            if (modalBox) {
                modalBox.classList.remove('scale-100', 'opacity-100');
            }
            setTimeout(() => {
                experienceModal.classList.add('hidden');
                experienceModal.classList.remove('flex');
            }, 300);
        });

        experienceModal.addEventListener('click', (e) => {
            if (e.target === experienceModal) {
                const modalBox = experienceModal.querySelector('.bg-white, .dark\\:bg-dark');
                if (modalBox) {
                    modalBox.classList.remove('scale-100', 'opacity-100');
                }
                setTimeout(() => {
                    experienceModal.classList.add('hidden');
                    experienceModal.classList.remove('flex');
                }, 300);
            }
        });
    }
});

// GSAP Animations
// Hero section
gsap.from('.hero-content', {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'power4.out'
});

// About section - remove animations and make elements visible immediately
document.addEventListener('DOMContentLoaded', function() {
    // Make About section cards immediately visible
    const aboutCards = document.querySelectorAll('#about .glass-card');
    aboutCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'none';
        card.style.transition = 'none';
    });
});

// Skills section badges - removed animation, only make visible immediately
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing skills");
    
    // Get all skill badges
    const skillBadges = document.querySelectorAll('.skill-badge');
    console.log("Found skill badges:", skillBadges.length);
    
    // Make all badges visible immediately
    skillBadges.forEach(badge => {
        badge.style.opacity = '1';
        badge.style.transform = 'none';
        badge.style.transition = 'none';
    });
});

// Projects section
document.addEventListener('DOMContentLoaded', function() {
    console.log("Initializing projects section");
    
    const projectCards = document.querySelectorAll('#projects .project-card');
    console.log("Found project cards:", projectCards.length);
    
    // Make all project cards visible immediately
    projectCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'none';
    });
});

// Simple animation for projects
gsap.from('#projects .project-card', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top center'
    },
    opacity: 0.8,
    y: 20,
    duration: 0.5,
    stagger: 0.2,
    ease: 'power1.out'
});

// Contact form
gsap.from('#contact form', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top center'
    },
    opacity: 0,
    y: 50,
    duration: 0.8
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Floating card animation
const floatingCard = document.querySelector('.perspective-1000');

if (floatingCard) {
    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        
        floatingCard.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });
}

// Form submission
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'bg-success/10 border border-success text-success px-4 py-3 rounded relative';
    successMessage.textContent = 'Message sent successfully!';
    contactForm.appendChild(successMessage);
    
    // Reset form
    contactForm.reset();
    
    // Remove success message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log("Main DOM Content Loaded");
    
    // Debug log for all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        console.log(`Found section: ${section.id}`);
    });
    
    // Check for project cards directly
    const projectCards = document.querySelectorAll('.project-card');
    console.log(`Found ${projectCards.length} project cards total`);
    
    // Force display all project cards
    projectCards.forEach(card => {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.visibility = 'visible';
    });
}); 