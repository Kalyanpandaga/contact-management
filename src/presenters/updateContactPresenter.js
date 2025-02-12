import BasePresenter from "./basePresenter.js";

class UpdateContactPresenter extends BasePresenter {
  updateContactPresenterResponse() {
    this.res.status(200).json({
      statusCode: 200,
      status: "SUCCESS",
      message: "Contact updated successfully.",
    });
  }
}

export default UpdateContactPresenter;
