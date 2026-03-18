export { validateEmail, validatePassword, validatePasswordConfirmation };

function validateEmail(form, email) {
  email.addEventListener("input", () => {
    if (!email.validity.valid) {
      showEmailError(email);
    } else {
      email.setCustomValidity("");
    }
  });

  form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
      showEmailError(email);
      event.preventDefault();
    }
  });
}

function showEmailError(email) {
  email.setCustomValidity("");
  if (email.validity.valueMissing) {
    email.setCustomValidity("An Email is required");
    email.reportValidity();
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity("The Email must contain @ and .com");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
}

function validatePassword(form, password) {
  password.addEventListener("input", () => {
    if (!password.validity.valid) {
      showPasswordError(password);
    } else {
      password.setCustomValidity("");
    }
  });

  form.addEventListener("submit", (event) => {
    if (!password.validity.valid) {
      showPasswordError(password);
      event.preventDefault();
    }
  });
}

function showPasswordError(password) {
  password.setCustomValidity("");
  if (password.validity.valueMissing) {
    password.setCustomValidity("A Password is required");
    password.reportValidity();
  } else if (password.validity.patternMismatch) {
    password.setCustomValidity(
      "Password must have at least 8 characters, 1 uppercase, 1 lowercase, and 1 number",
    );
    password.reportValidity();
  } else {
    password.setCustomValidity("");
  }
}

function validatePasswordConfirmation(form, password, passwordConfirmation) {
  function checkMatch() {
    if (password.value !== passwordConfirmation.value) {
      passwordConfirmation.setCustomValidity("Password must match");
      passwordConfirmation.reportValidity();
    } else passwordConfirmation.setCustomValidity("");
  }

  passwordConfirmation.addEventListener("input", checkMatch);

  form.addEventListener("submit", (event) => {
    checkMatch();
    if (!passwordConfirmation.validity.valid) {
      event.preventDefault();
    }
  });
}
