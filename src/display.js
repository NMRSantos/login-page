export { renderForm };

function renderForm() {
  const content = document.getElementById("content");

  const form = document.createElement("form");
  form.setAttribute("novalidate", true);
  content.appendChild(form);

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email:";
  content.appendChild(emailLabel);
  const emailInput = document.createElement("input");
  emailInput.id = "email";
  content.appendChild(emailInput);

  const postalCodeLabel = document.createElement("label");
  postalCodeLabel.setAttribute("for", "postal-code");
  postalCodeLabel.textContent = "Postal Code:";
  content.appendChild(postalCodeLabel);
  const postalCodeInput = document.createElement("input");
  postalCodeInput.id = "postal-code";
  content.appendChild(postalCodeInput);

  const countryLabel = document.createElement("label");
  countryLabel.setAttribute("for", "country");
  countryLabel.textContent = "Country:";
  content.appendChild(countryLabel);
  const countryInput = document.createElement("input");
  countryInput.id = "country";
  content.appendChild(countryInput);

  const passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("for", "password");
  passwordLabel.textContent = "Password:";
  content.appendChild(passwordLabel);
  const passwordInput = document.createElement("input");
  passwordInput.id = "password";
  content.appendChild(passwordInput);

  const passwordValidationLabel = document.createElement("label");
  content.appendChild(passwordValidationLabel);
  passwordValidationLabel.setAttribute("for", "password-validation");
  passwordValidationLabel.textContent = "Confirm password:";
  const passwordValidationInput = document.createElement("input");
  passwordValidationInput.id = "password-validation";
  content.appendChild(passwordValidationInput);
}
