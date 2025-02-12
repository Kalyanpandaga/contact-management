import BasePresenter from "./basePresenter.js";

class GetSearchContactsPresenter extends BasePresenter {
  getSearchContactsPresenterResponse(contacts) {
    this.res.status(200).json({ contacts });
  }
}

export default GetSearchContactsPresenter;
