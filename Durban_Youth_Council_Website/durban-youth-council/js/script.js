/* ==========================================================================
   Durban Youth Council — site script (js/script.js)
   Loaded at the bottom of every page. Features:
     1) Mobile navigation toggle (all pages)
     2) Enquiry form validation (enquiry.html only)
     3) Contact form validation (contact.html only)
   Plain JavaScript only: no libraries or frameworks are used.
   ========================================================================== */

/* Shared email check: text + "@" + text + "." + text, with no spaces.
   Not a perfect validator, but it catches the common typing mistakes. */
var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Shows a message in a feedback element. isError controls the colour and the
   ARIA role: "alert" interrupts a screen reader, "status" is read politely. */
function showFeedback(el, message, isError) {
  el.textContent = message;
  el.style.color = isError ? "#a32638" : "#1f6f78";
  el.setAttribute("role", isError ? "alert" : "status");
}

/* Wait until the HTML has been parsed so querySelector can find the elements */
document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. Mobile navigation toggle ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  /* Guard: only attach the listener if both elements exist on this page */
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      /* classList.toggle returns true when the class was ADDED (menu now open) */
      var isOpen = nav.classList.toggle("open");
      /* Keep aria-expanded in sync so assistive technology knows the state */
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* ---------- 2. Enquiry form validation (enquiry.html only) ---------- */
  var enquiryForm = document.querySelector("#enquiry-form");

  if (enquiryForm) {
    var feedback = document.querySelector("#form-feedback");

    enquiryForm.addEventListener("submit", function (event) {
      /* Stop the browser submitting: there is no backend in this project */
      event.preventDefault();

      var name = enquiryForm.querySelector("#full-name");
      var email = enquiryForm.querySelector("#email");
      /* :checked returns the selected radio button, or null if none is chosen */
      var interestChecked = enquiryForm.querySelector('input[name="interest"]:checked');
      var errors = [];

      if (!name.value.trim()) {
        errors.push("Please enter your full name.");
      }
      if (!email.value.trim() || !EMAIL_PATTERN.test(email.value.trim())) {
        errors.push("Please enter a valid email address.");
      }
      if (!interestChecked) {
        errors.push("Please tell us whether you'd like to volunteer or become a sponsor.");
      }

      if (errors.length > 0) {
        showFeedback(feedback, errors.join(" "), true);
      } else {
        showFeedback(feedback,
          "Thanks, " + name.value.trim() + "! Your enquiry has been noted. " +
          "(Demo only. No actual submission occurs.)", false);
        enquiryForm.reset();
      }
    });
  }

  /* ---------- 3. Contact form validation (contact.html only) ----------
     Added after Part 1 feedback: the form previously had no validation. */
  var contactForm = document.querySelector("#contact-form");

  if (contactForm) {
    var contactFeedback = document.querySelector("#contact-feedback");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var cName = contactForm.querySelector("#c-name");
      var cEmail = contactForm.querySelector("#c-email");
      var cMessage = contactForm.querySelector("#c-message");
      var cErrors = [];

      if (!cName.value.trim()) {
        cErrors.push("Please enter your full name.");
      }
      if (!cEmail.value.trim() || !EMAIL_PATTERN.test(cEmail.value.trim())) {
        cErrors.push("Please enter a valid email address.");
      }
      if (!cMessage.value.trim()) {
        cErrors.push("Please type a message.");
      }

      if (cErrors.length > 0) {
        showFeedback(contactFeedback, cErrors.join(" "), true);
      } else {
        showFeedback(contactFeedback,
          "Thanks, " + cName.value.trim() + "! Your message has been noted. " +
          "(Demo only. No actual submission occurs.)", false);
        contactForm.reset();
      }
    });
  }
});
