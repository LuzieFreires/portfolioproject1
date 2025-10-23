window.addEventListener("DOMContentLoaded", function() {
  // Get modal elements
  const modal = document.getElementById("project-modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  
  if (!modal || !modalImg || !modalTitle || !modalDesc) {
    console.error("Modal elements not found");
    return;
  }
  
  // Add click event listeners to all project cards
  const projects = document.querySelectorAll(".project");
  
  if (projects.length > 0) {
    projects.forEach(function(project) {
      project.addEventListener("click", function(e) {
        e.preventDefault();
        
        // Get project details
        const img = project.querySelector("img").src;
        const title = project.querySelector("h3").textContent;
        const desc = project.querySelector("p").textContent;
        
        // Populate modal with project details
        modalImg.src = img;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        
        // Show modal
        openModal();
      });
    });
  }
  
  // Close modal when clicking the close button
  if (modalClose) {
    modalClose.addEventListener("click", function(e) {
      e.preventDefault();
      closeModal();
    });
  }
  
  // Close modal when clicking outside the modal content
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function(e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }
  
  // Close modal when pressing Escape key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
  
  // Function to open the modal
  function openModal() {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  
  // Function to close the modal
  function closeModal() {
    modal.classList.remove("active");
    modal.style.display = "none";
    document.body.style.overflow = ""; 
  }
});


window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const visiblePoint = 120;

    el.classList.toggle("active", elementTop < windowHeight - visiblePoint);
  });
});

// === PROJECT CARD INTERACTION ===
const projectCards = document.querySelectorAll(".project");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    projectCards.forEach((p) => p.classList.remove("active"));
    card.classList.add("active");
  });
});

// === SMOOTH SCROLL FOR NAV LINKS ===
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// === BACK TO TOP BUTTON ===
document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.className = "back-to-top";
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 400);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // ---------- Helpers ----------
  const createModalIfMissing = () => {
    let modal = document.getElementById("project-modal");
    if (modal) return modal;

    // Build modal markup to match your CSS classes
    modal = document.createElement("div");
    modal.id = "project-modal";
    modal.className = "modal";

    modal.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <button class="modal-close" aria-label="Close modal">&times;</button>
        <img id="modal-img" src="" alt="Project Image">
        <h3 id="modal-title"></h3>
        <p id="modal-desc"></p>
      </div>
    `;

    document.body.appendChild(modal);
    return modal;
  };

  // Ensure modal exists (in case HTML was missing or mismatched)
  const modal = createModalIfMissing();
  const overlay = modal.querySelector(".modal-overlay");
  const closeBtn = modal.querySelector(".modal-close");
  const modalImg = modal.querySelector("#modal-img");
  const modalTitle = modal.querySelector("#modal-title");
  const modalDesc = modal.querySelector("#modal-desc");

  // Prevent page scroll while modal open
  const openModal = () => {
    modal.classList.add("show");
    document.body.classList.add("modal-open");
  };
  const closeModal = () => {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
  };

  // ---------- Attach click handlers to project cards ----------

  const projectsContainer = document.querySelector(".projects-grid") || document;
  projectsContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".project");
    if (!card) return;

    if (card.closest("#project-modal")) return;

    const imgEl = card.querySelector("img");
    const titleEl = card.querySelector("h3");
    const descEl = card.querySelector("p");

    modalImg.src = imgEl ? imgEl.src : "";
    modalImg.alt = titleEl ? `${titleEl.textContent} image` : "Project image";
    modalTitle.textContent = titleEl ? titleEl.textContent : "Untitled Project";
    modalDesc.textContent = descEl ? descEl.textContent : "No description available.";

    openModal();
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeModal();
  });

  overlay.addEventListener("click", () => closeModal());

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) closeModal();
  });

  modal.querySelector(".modal-content").addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on links
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }
    
    // Contact form redirect to home
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.hash = 'home';
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Skill progress animation
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Initial check on page load
    checkSkillBars();
    
    // Check on scroll
    window.addEventListener('scroll', checkSkillBars);
    
    function checkSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (barPosition < screenPosition) {
                const dataProgress = bar.getAttribute('data-progress');
                bar.style.width = dataProgress + '%';
            }
        });
    }
});
