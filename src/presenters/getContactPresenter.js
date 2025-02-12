import BasePresenter from "./basePresenter.js";

class GetContactPresenter extends BasePresenter {
  getContactPresenterResponse(contactData) {
    this.res.status(200).json({
      contactData: contactData,
    });
  }
}

export default GetContactPresenter;
