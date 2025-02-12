class DeleteContactPresenter {
  constructor(res) {
    this.res = res;
  }

  deleteContactPresenterResponse() {
    this.res.status(200).json({
      statusCode: 200,
      status: "SUCCESS",
      message: "Contact deleted successfully.",
    });
  }

  invalidContactIdPresenterResponse() {
    this.res.status(400).json({
      statusCode: 400,
      status: "INVALID_CONTACT_ID",
      message: "Invalid contact ID.",
    });
  }
}

export default DeleteContactPresenter;
