class GetContactsPresenter {
  constructor(res) {
    this.res = res;
  }

  getAllContactsPresenterResponse = (contacts) => {
    const contactsData = {
      contacts: contacts,
    };

    this.res.status(200).json(contactsData);
  };
}

export default GetContactsPresenter;
