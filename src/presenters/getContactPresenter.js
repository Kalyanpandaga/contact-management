class GetContactPresenter {
  constructor(res) {
    this.res = res;
  }

  getContactPresenterResponse(contactData) {
    this.res.status(200).json({
      contactData: contactData,
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

export default GetContactPresenter;
