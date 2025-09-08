// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");
  const faqUl = document.querySelector(".faq-menu");
  const faqItems = document.querySelectorAll(".faq-menu li");
  const faqGroup = document.querySelectorAll(".faq-group");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");
    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    //toggle icon

    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    //toggle visibility of body
    groupBody.classList.toggle("open");

    //close other faq
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroups) => {
      if (otherGroups !== group) {
        const otherGroupBody = otherGroups.querySelector(".faq-group-body");
        const otherIcon = otherGroups.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });

  //FAQ menu filter
  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      //update the active state
      faqItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      //convert button text to category name for filtering when pressing a button
      const category = item.textContent.toLowerCase().replace(" ", "-");

      //filter the groups
      faqGroup.forEach((group) => {
        const groupCategories = group.dataset.category;

        if (category === "all" || groupCategories.includes(category)) {
          group.style.display = "block";
        } else {
          group.style.display = "none";
        }
      });
    });
  });
});

//Mobile Menu

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const testimonialsGrid = document.querySelector(".testimonials-grid");

  if (testimonialsGrid) {
    //Colen the cards so we can show te clones when the original ones end
    const cards = Array.from(testimonialsGrid.children);
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      testimonialsGrid.append(clone);
    });

    let translateX = 0;
    const scrollStep = 0.5; // Slower movement
    const cardWidth = 430;
    const totalCards = cards.length; //orogonals card length
    const resetPoint = totalCards * cardWidth;

    function autoScroll() {
      translateX += scrollStep;

      if (translateX >= resetPoint) {
        translateX = 0;
      }

      testimonialsGrid.style.transform = `translateX(-${translateX}px)`;
    }
    setInterval(autoScroll, 16); // Smooth 60fps
  }
});

//Hide navbar while scrolling down
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navBar");

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 0) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY;
  });
});
