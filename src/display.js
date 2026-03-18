export { renderForm };

function renderForm() {
  const content = document.getElementById("content");

  const form = document.createElement("form");
  form.id = "form";
  form.noValidate = true;
  content.appendChild(form);

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email:";
  form.appendChild(emailLabel);
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.id = "email";
  emailInput.required = true;
  form.appendChild(emailInput);

  const postalCodeLabel = document.createElement("label");
  postalCodeLabel.setAttribute("for", "postal-code");
  postalCodeLabel.textContent = "Postal Code:";
  form.appendChild(postalCodeLabel);
  const postalCodeInput = document.createElement("input");
  postalCodeInput.type = "text";
  postalCodeInput.name = "postalCode";
  postalCodeInput.id = "postal-code";
  postalCodeInput.required = true;
  form.appendChild(postalCodeInput);

  const countryLabel = document.createElement("label");
  countryLabel.setAttribute("for", "country");
  countryLabel.textContent = "Country:";
  form.appendChild(countryLabel);
  const countryInput = document.createElement("input");
  countryInput.type = "text";
  countryInput.name = "country";
  countryInput.id = "country";
  countryInput.required = true;
  form.appendChild(countryInput);

  const passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("for", "password");
  passwordLabel.textContent = "Password:";
  form.appendChild(passwordLabel);
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.name = "password";
  passwordInput.pattern = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  passwordInput.id = "password";
  passwordInput.required = true;
  form.appendChild(passwordInput);

  const passwordValidationLabel = document.createElement("label");
  passwordValidationLabel.setAttribute("for", "password-validation");
  passwordValidationLabel.textContent = "Confirm password:";
  form.appendChild(passwordValidationLabel);
  const passwordValidationInput = document.createElement("input");
  passwordValidationInput.type = "password";
  passwordValidationInput.name = "password-validation";
  passwordValidationInput.id = "password-validation";
  passwordValidationInput.required = true;
  form.appendChild(passwordValidationInput);

  const submitBtn = document.createElement("button");
  submitBtn.id = "button";
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";
  form.appendChild(submitBtn);

  return {
    form,
    emailInput,
    postalCodeInput,
    countryInput,
    passwordInput,
    passwordValidationInput,
    submitBtn,
  };
}
