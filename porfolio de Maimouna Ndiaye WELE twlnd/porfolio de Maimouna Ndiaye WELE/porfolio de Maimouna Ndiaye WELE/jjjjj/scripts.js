// Gestion du mode sombre
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "Mode Clair";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  themeToggle.textContent = isDarkMode ? "Mode Clair" : "Mode Sombre";
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// Modales pour les projets
const projectCards = document.querySelectorAll(".project-card");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close-modal");

projectCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    modals[index].style.display = "block";
  });
});

closeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    modals[index].style.display = "none";
  });
});

window.addEventListener("click", (event) => {
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Validation du formulaire
const contactForm = document.getElementById("contact-form");
const confirmationMessage = document.getElementById("confirmation-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  confirmationMessage.textContent = "Merci ! Votre message a été envoyé.";
  confirmationMessage.style.color = "green";
  contactForm.reset();
});
// Initialisation d'AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  // Afficher le sous-titre avec animation
  setTimeout(function () {
    document.getElementById("subtitle").classList.add("animate-fade-in");
    document.getElementById("subtitle").style.opacity = 1;
  }, 2000);

  // Toggle dark mode
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("bg-gray-900");
    document.body.classList.toggle("text-gray-100");

    // Update toggle button text
    const icon = themeToggle.querySelector("i");
    const text = themeToggle.querySelector("span");

    if (document.body.classList.contains("bg-gray-900")) {
      text.textContent = "Mode Clair";
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      text.textContent = "Mode Sombre";
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }

    // Toggle dark class on components
    document.querySelectorAll(".dark-transition").forEach((el) => {
      el.classList.toggle("dark");
    });
  });

  // Modal functionality
  const modals = document.querySelectorAll("[data-modal]");
  modals.forEach((card) => {
    card.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal");
      document.getElementById(modalId).classList.remove("hidden");
    });
  });

  const closeButtons = document.querySelectorAll(".modal-close");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.closest('[id^="modal"]').classList.add("hidden");
    });
  });

  // Close modal when clicking outside
  window.addEventListener("click", function (event) {
    document.querySelectorAll('[id^="modal"]').forEach((modal) => {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });

  // Form submission with AJAX
  const form = document.getElementById("contact-form");
  const confirmationMessage = document.getElementById("confirmation-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulate form submission (replace with actual AJAX in production)
    setTimeout(function () {
      form.reset();
      confirmationMessage.innerHTML =
        '<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded" role="alert"><p>Votre message a été envoyé avec succès !</p></div>';

      setTimeout(function () {
        confirmationMessage.innerHTML = "";
      }, 5000);
    }, 1000);
  });

  // Initialize particles
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    });
  }

  // Animate elements when scrolled into view
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight - 50) {
        element.classList.add("animate");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Trigger on load
});

tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
        success: "#38c172",
        info: "#6574cd",
        warning: "#f6993f",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 1s ease-in forwards",
        "slide-up": "slideUp 0.7s ease-in-out forwards",
        "slide-down": "slideDown 0.7s ease-in-out forwards",
        "slide-in-right": "slideInRight 0.7s ease-in-out forwards",
        "slide-in-left": "slideInLeft 0.7s ease-in-out forwards",
        "zoom-in": "zoomIn 0.7s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
};
// Attendre que le document soit chargé
document.addEventListener("DOMContentLoaded", function () {
  // Initialisation des animations AOS
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
  });

  // Gestion du menu mobile
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const navMenu = document.getElementById("nav-menu");

  if (mobileMenuButton && navMenu) {
    mobileMenuButton.addEventListener("click", function () {
      navMenu.classList.toggle("hidden");
      navMenu.classList.toggle("flex");
    });
  }

  // Fermer le menu mobile lors du clic sur un lien
  const navLinks = document.querySelectorAll("#nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth < 768) {
        // Seulement sur mobile
        navMenu.classList.add("hidden");
        navMenu.classList.remove("flex");
      }
    });
  });

  // Gestion de l'indicateur de navigation sur desktop
  const updateIndicator = () => {
    const indicator = document.getElementById("indicator");
    const activeLink = document.querySelector("#nav-menu a.active");

    if (indicator && activeLink && window.innerWidth >= 768) {
      const linkRect = activeLink.getBoundingClientRect();
      const navRect = document.querySelector("nav").getBoundingClientRect();

      indicator.style.width = `${linkRect.width}px`;
      indicator.style.left = `${linkRect.left - navRect.left}px`;
    }
  };

  // Détecter la section active lors du défilement
  const sections = document.querySelectorAll("section[id]");

  function highlightNavOnScroll() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");
      const navLink = document.querySelector(
        `#nav-menu a[href="#${sectionId}"]`
      );

      if (
        navLink &&
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        document.querySelectorAll("#nav-menu a").forEach((link) => {
          link.classList.remove("active");
        });
        navLink.classList.add("active");
        updateIndicator();
      }
    });
  }

  window.addEventListener("scroll", highlightNavOnScroll);
  window.addEventListener("resize", updateIndicator);

  // Appliquer initialement
  highlightNavOnScroll();

  // Animation du sous-titre dans la section hero
  setTimeout(() => {
    const subtitle = document.getElementById("subtitle");
    if (subtitle) {
      subtitle.style.opacity = "1";
      subtitle.style.transition = "opacity 1s ease-in-out";
    }
  }, 3000); // Après l'animation de typing

  // Mode sombre
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // Vérifier les préférences utilisateur
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");

  // Appliquer le thème initial
  if (savedTheme === "dark" || (!savedTheme && prefersDarkMode)) {
    htmlElement.classList.add("dark");
    updateDarkModeUI(true);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      htmlElement.classList.toggle("dark");
      const isDark = htmlElement.classList.contains("dark");

      // Sauvegarder la préférence
      localStorage.setItem("theme", isDark ? "dark" : "light");

      // Mettre à jour l'UI
      updateDarkModeUI(isDark);
    });
  }

  function updateDarkModeUI(isDark) {
    const themeIcon = themeToggle.querySelector("i");
    const themeText = themeToggle.querySelector("span");

    if (isDark) {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
      themeText.textContent = "Mode Clair";
      themeToggle.classList.add("bg-gray-700");
      themeToggle.classList.remove("bg-gray-200");
      themeToggle.classList.add("text-white");
      themeToggle.classList.remove("text-black");
    } else {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
      themeText.textContent = "Mode Sombre";
      themeToggle.classList.remove("bg-gray-700");
      themeToggle.classList.add("bg-gray-200");
      themeToggle.classList.remove("text-white");
      themeToggle.classList.add("text-black");
    }
  }

  // Gestion des modales de projets
  const projectCards = document.querySelectorAll("[data-modal]");
  const modals = document.querySelectorAll('[id^="modal"]');
  const closeButtons = document.querySelectorAll(".modal-close");

  projectCards.forEach((card) => {
    card.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal");
      const modal = document.getElementById(modalId);

      if (modal) {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden"; // Empêcher le défilement
      }
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest('[id^="modal"]');
      if (modal) {
        modal.classList.add("hidden");
        document.body.style.overflow = ""; // Réactiver le défilement
      }
    });
  });

  // Fermer la modale en cliquant à l'extérieur
  modals.forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.add("hidden");
        document.body.style.overflow = "";
      }
    });
  });

  // Gestion du formulaire de contact
  const contactForm = document.getElementById("contact-form");
  const confirmationMessage = document.getElementById("confirmation-message");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simuler l'envoi du formulaire (à remplacer par l'intégration réelle)
      const formData = new FormData(contactForm);

      // Afficher un message de chargement
      confirmationMessage.innerHTML =
        '<p class="text-blue-500">Envoi en cours...</p>';

      // Simuler un délai d'envoi
      setTimeout(() => {
        confirmationMessage.innerHTML =
          '<p class="text-green-500">Votre message a été envoyé avec succès!</p>';
        contactForm.reset();
      }, 1500);
    });
  }

  // Adaptation pour différentes tailles d'écran
  function handleResponsiveLayout() {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    // Ajuster les animations AOS sur mobile
    if (isMobile) {
      document.querySelectorAll("[data-aos]").forEach((el) => {
        el.setAttribute("data-aos-delay", "0");
      });
    }

    // Afficher/masquer le menu sur desktop
    if (navMenu && window.innerWidth >= 768) {
      navMenu.classList.remove("hidden");
      navMenu.classList.add("flex");
    } else if (navMenu) {
      navMenu.classList.add("hidden");
      navMenu.classList.remove("flex");
    }
  }

  window.addEventListener("resize", handleResponsiveLayout);
  handleResponsiveLayout(); // Appliquer au chargement

  // Initialisation de Particles.js pour l'arrière-plan
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
      },
      retina_detect: true,
    });
  }

  // Animations CSS supplémentaires (pour compléter les styles déjà présents)
  const additionalStyles = document.createElement("style");
  additionalStyles.textContent = `
      /* Animations responsives */
      @media (max-width: 768px) {
        .typing-effect {
          animation: typing 2s steps(20, end), blink-caret .75s step-end infinite;
        }
        
        .timeline-item {
          padding-left: 1rem;
        }
      }
      
      /* Animation pour le menu mobile */
      #nav-menu {
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
      
      #nav-menu.flex:not(.hidden) {
        opacity: 1;
        transform: translateY(0);
      }
      
      #nav-menu.hidden {
        opacity: 0;
        transform: translateY(-10px);
      }
      
      /* Classes d'animations supplémentaires */
      .animate-spin-slow {
        animation: spin 8s linear infinite;
      }
      
      .animate-pulse-slow {
        animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      
      .animate-bounce-slow {
        animation: bounce 3s infinite;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `;
  document.head.appendChild(additionalStyles);
});

// Media queries pour Tailwind en JavaScript
window.addEventListener("load", function () {
  function updateTailwindClasses() {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    // Ajuster les classes pour le header
    const header = document.querySelector("header");
    if (header) {
      if (isMobile) {
        header.classList.add("py-2");
        header.classList.remove("py-4");
      } else {
        header.classList.add("py-4");
        header.classList.remove("py-2");
      }
    }

    // Ajuster les tailles de police pour le hero
    const heroTitle = document.querySelector("#home h2");
    if (heroTitle) {
      if (isMobile) {
        heroTitle.classList.remove("text-4xl");
        heroTitle.classList.add("text-2xl");
      } else {
        heroTitle.classList.add("text-4xl");
        heroTitle.classList.remove("text-2xl");
      }
    }

    // Ajuster l'espacement des sections
    document.querySelectorAll("section").forEach((section) => {
      if (isMobile) {
        section.classList.remove("py-16");
        section.classList.add("py-10");
      } else {
        section.classList.add("py-16");
        section.classList.remove("py-10");
      }
    });
  }

  window.addEventListener("resize", updateTailwindClasses);
  updateTailwindClasses(); // Appliquer au chargement
});

// Gestion du sticky header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (header) {
    if (window.scrollY > 10) {
      header.classList.add("py-2");
      header.classList.remove("py-4");
      header.classList.add("shadow-md");
    } else {
      header.classList.remove("py-2");
      header.classList.add("py-4");
      header.classList.remove("shadow-md");
    }
  }
});
