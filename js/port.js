 

      const toggler = document.querySelector(".navbar-toggler i");
      const navCollapse = document.getElementById("navLinks");

      navCollapse.addEventListener("show.bs.collapse", () => {
        toggler.classList.remove("bi-list");
        toggler.classList.add("bi-x-lg"); // يتحول لـ X
      });

      navCollapse.addEventListener("hide.bs.collapse", () => {
        toggler.classList.remove("bi-x-lg");
        toggler.classList.add("bi-list"); // يرجع تلات شرط
      });

      // لما اضغط على أي لينك جوا القائمة
      document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          let nav = document.querySelector(".navbar-collapse");
          let bsCollapse = new bootstrap.Collapse(nav, { toggle: false });
          bsCollapse.hide();
        });
      });

//       document.addEventListener("DOMContentLoaded", function () {
//   const navbar = document.querySelector(".navbar");
//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 50) {
//       navbar.classList.add("scrolled");
//     } else {
//       navbar.classList.remove("scrolled");
//     }
//   });
// });

      // // Navbar scroll effect
       const nav = document.getElementById("mainNav");
       window.addEventListener("scroll", () => {
        if (window.scrollY > 20) nav.classList.add("nav-scrolled");
         else nav.classList.remove("nav-scrolled");
       });

      // Footer year
      document.getElementById("year").textContent = new Date().getFullYear();
    
