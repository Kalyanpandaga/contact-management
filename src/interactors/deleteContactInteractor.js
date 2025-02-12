import { InvalidContactIdError } from "../utils/errors.js";

class DeleteContactInteractor {
  constructor(storage) {
    this.storage = storage;
  }

  async deleteContactInteractor(contactId, presenter) {
    try {
      await this.deleteContact(contactId);
      return presenter.deleteContactPresenterResponse();
    } catch (error) {
      this.handleErrors(error, presenter);
    }
  }

  async deleteContact(contactId) {
    const existingContact = await this.storage.getContactById(contactId);
    if (!existingContact) {
      throw new InvalidContactIdError();
    }

    await this.storage.deleteContact(contactId);
  }

  handleErrors(error, presenter) {
    if (error instanceof InvalidContactIdError) {
      return presenter.invalidContactIdPresenterResponse();
    }
    throw error;
  }
}

export default DeleteContactInteractor;
