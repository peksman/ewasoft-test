export function initFormPopup() {
      var form = document.querySelector('.contact-form');
      var submitButton = form.querySelector('button[type="submit"]');
      var popup = document.querySelector('.contact-form__popup');

      document.getElementById("contact-form").addEventListener("submit", function(event) {
          event.preventDefault();
      });

      submitButton.addEventListener('click', function(event) {
          var inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
          var errorMessages = form.querySelectorAll('.error-message');

          errorMessages.forEach(function(errorMessage) {
              errorMessage.classList.remove('error-message__active');
          });

          var allFieldsValid = true;

          inputs.forEach(function(input) {
              var wrapper = input.parentElement;
              var errorMessage = wrapper.querySelector('.error-message');

              if (input.value.trim() === '') {
                  errorMessage.classList.add('error-message__active');
                  allFieldsValid = false;
              }

              if (input.type === 'email' && !isValidEmail(input.value.trim())) {
                  errorMessage.classList.add('error-message__active');
                  allFieldsValid = false;
              }
          });

          var labels = document.querySelectorAll(".form-label");
              
          if (allFieldsValid) {
              popup.classList.add('success');
              document.getElementById("text").value = "";
              document.getElementById("email").value = "";
              document.getElementById("message").value = "";
              labels.forEach(function(label) {
                label.classList.remove("form-label__active");
            });
              setTimeout(function() {
                  popup.classList.remove('success');
              }, 3000);
          }

          var errorsExist = form.querySelector('.error-message__active');

          if (errorsExist) {
              event.preventDefault();
          }
      });

      function isValidEmail(email) {
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
      }

      const inputs = document.querySelectorAll('.contact-form__wrapper input, .contact-form__wrapper textarea');

      inputs.forEach(input => {
          input.addEventListener('blur', function() {
              const wrapper = this.parentElement;
              const label = wrapper.querySelector('.form-label');

              if (this.value.trim() !== '') {
                  label.classList.add('form-label__active');
              } else {
                  label.classList.remove('form-label__active');
              }
          });
      });

      inputs.forEach(input => {
          const wrapper = input.parentElement;
          const label = wrapper.querySelector('.form-label');

          if (input.value.trim() !== '') {
              label.classList.add('form-label__active');
          }
      });   
}