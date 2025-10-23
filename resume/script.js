document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    const btn = section.querySelector('.toggle-btn');
    if (!btn) return;

    btn.addEventListener('click', function (event) {
      event.stopPropagation();
      const isOpen = section.classList.contains('active');

      sections.forEach(s => {
        s.classList.remove('active');
        const otherBtn = s.querySelector('.toggle-btn');
        if (otherBtn) {
          if (s.id === "personal") {
            otherBtn.textContent = "Open";
          } else if (s.id === "education") {
            otherBtn.textContent = "[+]";
          } else if (s.id === "skills") {
            const img = otherBtn.querySelector("img");
            if (img) img.src = "images/openeyes.png";
          }
        }
      });

      if (!isOpen) {
        section.classList.add('active');
        if (section.id === "personal") {
          btn.textContent = "Close";
        } else if (section.id === "education") {
          btn.textContent = "[-]";
        } else if (section.id === "skills") {
          const img = btn.querySelector("img");
          if (img) img.src = "images/openeyes.png";
        }
      } else {
        if (section.id === "personal") {
          btn.textContent = "Open";
        } else if (section.id === "education") {
          btn.textContent = "[+]";
        } else if (section.id === "skills") {
          const img = btn.querySelector("img");
          if (img) img.src = "images/closeeyes.png";
        }
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    const btn = section.querySelector('.toggle-btn');
    if (!btn) return;

    btn.addEventListener('click', function (event) {
      event.stopPropagation();
      const isOpen = section.classList.contains('active');

      // Close all sections
      sections.forEach(s => {
        s.classList.remove('active');
        const otherBtn = s.querySelector('.toggle-btn');
        if (otherBtn) {
          if (s.id === "personal") {
            otherBtn.textContent = "Open";
          } else if (s.id === "education") {
            otherBtn.textContent = "[+]";
          } else if (s.id === "skills") {
            const img = otherBtn.querySelector("img");
            if (img) img.src = "images/openeyes.png";
          }
        }
      });

      // Open the clicked one
      if (!isOpen) {
        section.classList.add('active');
        if (section.id === "personal") {
          btn.textContent = "Close";
        } else if (section.id === "education") {
          btn.textContent = "[-]";
        } else if (section.id === "skills") {
          const img = btn.querySelector("img");
          if (img) img.src = "images/openeyes.png";
        }
      } else {
        if (section.id === "personal") {
          btn.textContent = "Open";
        } else if (section.id === "education") {
          btn.textContent = "[+]";
        } else if (section.id === "skills") {
          const img = btn.querySelector("img");
          if (img) img.src = "images/closeeyes.png";
        }
      }
    });
  });
});
});

  function showToggle(headerRow) {
    const toggleBtn = headerRow.querySelector('.toggle-btn');
    if (toggleBtn) {
      toggleBtn.style.visibility = 'visible';
    }
  }

  function hideToggle(headerRow) {
    const toggleBtn = headerRow.querySelector('.toggle-btn');
    if (toggleBtn) {
      toggleBtn.style.visibility = 'hidden';
    }
  }

