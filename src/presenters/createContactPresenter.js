import BasePresenter from "./basePresenter.js";

class CreateContactPresenter extends BasePresenter {
  createContactPresenterResponse(newContact) {
    this.res.status(201).json({ createdContact: newContact });
  }
}

export default CreateContactPresenter;
