import BasePresenter from "./basePresenter.js";

class GetContactsPresenter extends BasePresenter {
  getAllContactsPresenterResponse = (contacts) => {
    const contactsData = {
      contacts: contacts,
    };

    this.res.status(200).json(contactsData);
  };
}

export default GetContactsPresenter;
