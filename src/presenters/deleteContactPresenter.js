import BasePresenter from "./basePresenter.js";

class DeleteContactPresenter extends BasePresenter {
  deleteContactPresenterResponse() {
    this.res.status(200).json({
      statusCode: 200,
      status: "SUCCESS",
      message: "Contact deleted successfully.",
    });
  }
}

export default DeleteContactPresenter;
