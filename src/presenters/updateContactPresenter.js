import BasePresenter from "./basePresenter.js";

class UpdateContactPresenter extends BasePresenter {
  updateContactPresenterResponse() {
    this.res.status(201).json({
      statusCode: 201,
      status: "SUCCESS",
      message: "Contact updated successfully.",
    });
  }
}

export default UpdateContactPresenter;
