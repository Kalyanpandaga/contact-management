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
  InvalidContactIdError,
} from "../utils/errors.js";

class UpdateContactInteractor {
  constructor(storage) {
    this.storage = storage;
  }

  async updateContactInteractor(contactId, contactData, presenter) {
    try {
      await this.updateContact(contactId, contactData);
      return presenter.updateContactPresenterResponse();
    } catch (error) {
      this.handleErrors(error, presenter);
    }
  }

  async updateContact(contactId, contactData) {
    const existingContact = await this.storage.getContactById(contactId);
    if (!existingContact) {
      throw new InvalidContactIdError();
    }

    let { name, email, phone, address } = contactData;
    name = name ? name : existingContact.name;
    email = email ? email : existingContact.email;
    phone = phone ? phone : existingContact.phone;
    address = address ? address : existingContact.address;

    isNameValid(name);
    isEmailValid(email);
    isPhoneNumberValid(phone);

    const isEmailExists = await this.storage.isEmailExists(email, contactId);
    if (isEmailExists) {
      throw new EmailAlreadyExistsError();
    }

    const updateContactsData = { name, email, phone, address };
    await this.storage.updateContact(contactId, updateContactsData);
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
      case error instanceof InvalidContactIdError:
        return presenter.invalidContactIdPresenterResponse();
      default:
        throw error;
    }
  }
}

export default UpdateContactInteractor;
