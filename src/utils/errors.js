class PhoneNumberNotValidError extends Error {
  constructor(message = "Phone number is invalid.") {
    super(message);
    this.name = "PhoneNumberNotValidError";
  }
}

class EmailNotValidError extends Error {
  constructor(message = "Email format is invalid.") {
    super(message);
    this.name = "EmailNotValidError";
  }
}

class NameNotValidError extends Error {
  constructor(message = "Name is invalid.") {
    super(message);
    this.name = "NameNotValidError";
  }
}

class EmailAlreadyExistsError extends Error {
  constructor(message = "Email already exists.") {
    super(message);
    this.name = "EmailAlreadyExistsError";
  }
}

class InvalidContactIdError extends Error {
  constructor(message = "invalid contact id.") {
    super(message);
    this.name = "InvalidContactId";
  }
}

export {
  PhoneNumberNotValidError,
  EmailNotValidError,
  NameNotValidError,
  EmailAlreadyExistsError,
  InvalidContactIdError,
};
