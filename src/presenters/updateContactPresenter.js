class UpdateContactPresenter {
  constructor(response) {
    this.response = response;
  }

  updateContactPresenterResponse() {
    this.response.status(200).json({
      statusCode: 200,
      status: "SUCCESS",
      message: "Contact updated successfully.",
    });
  }

  invalidPhoneNumberPresenterResponse(message) {
    this.response.status(400).json({
      statusCode: 400,
      status: "INVALID_PHONE_NUMBER",
      message: message,
    });
  }

  invalidEmailPresenterResponse(message) {
    this.response.status(400).json({
      statusCode: 400,
      status: "INVALID_EMAIL",
      message: message,
    });
  }

  invalidNamePresenterResponse(message) {
    this.response.status(400).json({
      statusCode: 400,
      status: "INVALID_NAME",
      message: message,
    });
  }

  emailAlreadyExistsPresenterResponse() {
    this.response.status(400).json({
      statusCode: 400,
      status: "EMAIL_ALREADY_EXISTS",
      message: "Email is already in use.",
    });
  }

  invalidContactIdPresenterResponse() {
    this.response.status(400).json({
      statusCode: 400,
      status: "INVALID_CONTACT_ID",
      message: "invalid contact id",
    });
  }
}

export default UpdateContactPresenter;
