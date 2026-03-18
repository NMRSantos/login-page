import { renderForm } from "./display.js";
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
} from "./form.js";

const { form, emailInput, passwordInput, passwordValidationInput } =
  renderForm();
validateEmail(form, emailInput);
validatePassword(form, passwordInput);
validatePasswordConfirmation(form, passwordInput, passwordValidationInput);
