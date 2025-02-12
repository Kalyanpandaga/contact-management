class GetSearchContactsInteractor {
  constructor(storage) {
    this.storage = storage;
  }

  getSearchContactsInteractor = async (name, email, presenter) => {
    const contacts = await this.getSearchContacts(name, email);
    return presenter.getSearchContactsPresenterResponse(contacts);
  };

  getSearchContacts = async (name, email) => {
    const contacts = await this.storage.getContactsBySearch(name, email);
    return contacts;
  };
}

export default GetSearchContactsInteractor;
