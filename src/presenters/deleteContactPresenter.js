import BasePresenter from "./basePresenter.js";

class DeleteContactPresenter extends BasePresenter {
  deleteContactPresenterResponse() {
    this.res.status(204).json({
      statusCode: 204,
      status: "SUCCESS",
      message: "Contact deleted successfully.",
    });
  }
}

export default DeleteContactPresenter;
