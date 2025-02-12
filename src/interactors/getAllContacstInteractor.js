class GetAllContactsInteractor {
  constructor(storage) {
    this.storage = storage;
  }

  getAllContactsInteractor = async (presenter) => {
    const allContacts = await this.getAllContacts();
    presenter.getAllContactsPresenterResponse(allContacts);
  };

  getAllContacts = async () => {
    const allContacts = await this.storage.getAllContacts();
    return allContacts;
  };
}

export default GetAllContactsInteractor;
