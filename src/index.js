import { renderForm } from "./display.js";
import { validateEmail } from "./form.js";

const { form, emailInput } = renderForm();
validateEmail(form, emailInput);
