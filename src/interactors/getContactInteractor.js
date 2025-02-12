import { InvalidContactIdError } from "../utils/errors.js";

class GetContactInteractor {
  constructor(storage) {
    this.storage = storage;
  }

  async getContactInteractor(contactId, presenter) {
    try {
      const contactData = await this.getContact(contactId);
      return presenter.getContactPresenterResponse(contactData);
    } catch (error) {
      this.handleErrors(error, presenter);
    }
  }

  async getContact(contactId) {
    const existingContact = await this.storage.getContactById(contactId);
    if (!existingContact) {
      throw new InvalidContactIdError();
    }
    return existingContact;
  }

  handleErrors(error, presenter) {
    if (error instanceof InvalidContactIdError) {
      return presenter.invalidContactIdPresenterResponse();
    }
    throw error;
  }
}

export default GetContactInteractor;
