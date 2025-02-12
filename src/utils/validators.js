import Joi from "joi";
import {
  PhoneNumberNotValidError,
  EmailNotValidError,
  NameNotValidError,
} from "./errors.js";

export const isPhoneNumberValid = (phone) => {
  const schema = Joi.string()
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      "string.empty": "Phone number is required.",
      "string.pattern.base": "Phone number must be exactly 10 digits.",
    });

  const { error } = schema.validate(phone);
  if (error) throw new PhoneNumberNotValidError(error.details[0].message);
};

export const isEmailValid = (email) => {
  const schema = Joi.string().trim().email().required().messages({
    "string.empty": "Email is required.",
    "string.email": "Invalid email format.",
  });

  const { error } = schema.validate(email);
  if (error) throw new EmailNotValidError(error.details[0].message);
};

export const isNameValid = (name) => {
  const schema = Joi.string().trim().min(2).required().messages({
    "string.empty": "Name is required.",
    "string.min": "Name must be at least 2 characters long.",
  });

  const { error } = schema.validate(name);
  if (error) throw new NameNotValidError(error.details[0].message);
};
