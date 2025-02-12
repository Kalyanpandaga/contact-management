import {
  isPhoneNumberValid,
  isEmailValid,
  isNameValid,
} from "../utils/validators.js";
import {
  PhoneNumberNotValidError,
  EmailNotValidError,
  NameNotValidError,
  EmailAlreadyExistsError,
} from "../utils/errors.js";

class CreateContactInteractor {
  constructor(storage) {
    this.storage = storage;
  }

  async createContactInteractor(contactData, presenter) {
    try {
      const newContact = await this.createContact(contactData);
      return presenter.createContactPresenterResponse(newContact);
    } catch (error) {
      this.handleErrors(error, presenter);
    }
  }

  async createContact(contactData) {
    isNameValid(contactData.name);
    isEmailValid(contactData.email);
    isPhoneNumberValid(contactData.phone);

    const isEmailExists = await this.storage.isEmailExists(contactData.email);
    if (isEmailExists) {
      throw new EmailAlreadyExistsError();
    }

    return await this.storage.createContact(contactData);
  }

  handleErrors(error, presenter) {
    switch (true) {
      case error instanceof PhoneNumberNotValidError:
        return presenter.invalidPhoneNumberPresenterResponse(error.message);
      case error instanceof EmailNotValidError:
        return presenter.invalidEmailPresenterResponse(error.message);
      case error instanceof NameNotValidError:
        return presenter.invalidNamePresenterResponse(error.message);
      case error instanceof EmailAlreadyExistsError:
        return presenter.emailAlreadyExistsPresenterResponse();
      default:
        throw error;
    }
  }
}

export default CreateContactInteractor;
