export { validateEmail };

function validateEmail(form, email) {
  email.addEventListener("input", () => {
    if (!email.validity.valid) {
      showError(email);
    } else {
      email.setCustomValidity("");
    }
  });

  form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
      showError(email);
      event.preventDefault();
    }
  });
}

function showError(email) {
  email.setCustomValidity("");
  if (email.validity.valueMissing) {
    email.setCustomValidity("Email is required");
    email.reportValidity();
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity("Email must contain @ and .com");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
}
