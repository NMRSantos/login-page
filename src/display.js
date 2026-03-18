export { renderForm };

function renderForm() {
  const content = document.getElementById("content");

  const form = document.createElement("form");
  form.id = "form";
  form.setAttribute("novalidate", true);
  content.appendChild(form);

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email:";
  form.appendChild(emailLabel);
  const emailInput = document.createElement("input");
  emailInput.id = "email";
  emailInput.setAttribute("mandatory", true);
  form.appendChild(emailInput);

  const postalCodeLabel = document.createElement("label");
  postalCodeLabel.setAttribute("for", "postal-code");
  postalCodeLabel.textContent = "Postal Code:";
  form.appendChild(postalCodeLabel);
  const postalCodeInput = document.createElement("input");
  postalCodeInput.id = "postal-code";
  postalCodeInput.setAttribute("mandatory", true);
  form.appendChild(postalCodeInput);

  const countryLabel = document.createElement("label");
  countryLabel.setAttribute("for", "country");
  countryLabel.textContent = "Country:";
  form.appendChild(countryLabel);
  const countryInput = document.createElement("input");
  countryInput.id = "country";
  countryInput.setAttribute("mandatory", true);
  form.appendChild(countryInput);

  const passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("for", "password");
  passwordLabel.textContent = "Password:";
  form.appendChild(passwordLabel);
  const passwordInput = document.createElement("input");
  passwordInput.id = "password";
  passwordInput.setAttribute("mandatory", true);
  form.appendChild(passwordInput);

  const passwordValidationLabel = document.createElement("label");
  passwordValidationLabel.setAttribute("for", "password-validation");
  passwordValidationLabel.textContent = "Confirm password:";
  form.appendChild(passwordValidationLabel);
  const passwordValidationInput = document.createElement("input");
  passwordValidationInput.id = "password-validation";
  passwordValidationInput.setAttribute("mandatory", true);
  form.appendChild(passwordValidationInput);

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  form.appendChild(submitBtn);

  return {
    emailInput,
    postalCodeInput,
    countryInput,
    passwordInput,
    passwordValidationInput,
    submitBtn,
  };
}
