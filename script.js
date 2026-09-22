document.addEventListener('DOMContentLoaded', () => {
    // Inject Configuration Data
    
    // Header/Hero
    document.title = `${config.businessName} | Aluminium, Glass & Wood Work in Begusarai`;
    document.getElementById('hero-title').textContent = config.businessName;
    document.getElementById('hero-tagline').textContent = config.tagline;
    document.getElementById('hero-tagline-hindi').textContent = config.taglineHindi;
    
    // Contact Info Updates
    document.getElementById('contact-address').textContent = config.address;
    document.getElementById('contact-service-area').textContent = config.serviceArea;
    document.getElementById('footer-address').textContent = config.address;
    
    const phoneLink = `tel:${config.phone.replace(/[^0-9+]/g, '')}`;
    const waLink = `https://wa.me/${config.whatsapp}`;
    
    // Phone Links
    document.getElementById('hero-call-btn').href = phoneLink;
    document.getElementById('contact-phone').href = phoneLink;
    document.getElementById('contact-phone').textContent = config.phone;
    document.getElementById('float-call').href = phoneLink;
    
    // WhatsApp Links
    document.getElementById('hero-wa-btn').href = waLink;
    document.getElementById('contact-wa').href = waLink;
    document.getElementById('contact-wa').textContent = `+91 ${config.whatsapp.substring(2)}`;
    document.getElementById('float-wa').href = waLink;
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
    });

    // Render Services
    const servicesContainer = document.getElementById('services-container');
    config.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 group';
        serviceCard.innerHTML = `
            <div class="w-16 h-16 bg-brand-light rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                <i class="fas ${service.icon} text-3xl text-brand-accent group-hover:text-white transition-colors duration-300"></i>
            </div>
            <h3 class="text-xl font-bold text-brand-dark mb-3">${service.name}</h3>
            <p class="text-gray-600 mb-6">${service.desc}</p>
            <a href="#contact" class="inline-flex items-center text-brand-accent font-semibold hover:text-brand-dark transition-colors" onclick="document.getElementById('service-req').value = '${service.name}'">
                Get Quote <i class="fas fa-arrow-right ml-2 text-sm"></i>
            </a>
        `;
        servicesContainer.appendChild(serviceCard);
    });

    // Render Gallery (Placeholders)
    const galleryContainer = document.getElementById('gallery-container');
    const galleryItems = [
        { name: 'Aluminium Windows', img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { name: 'Glass Partition', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { name: 'Modern Wardrobe', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { name: 'Glass Railing', img: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { name: 'Wooden Doors', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { name: 'Shop Front', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ];

    galleryItems.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'relative group overflow-hidden rounded-xl shadow-md h-64 cursor-pointer';
        itemEl.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                <h3 class="text-white font-bold text-xl">${item.name}</h3>
                <p class="text-gray-300 text-sm">View Project</p>
            </div>
        `;
        galleryContainer.appendChild(itemEl);
    });
});
