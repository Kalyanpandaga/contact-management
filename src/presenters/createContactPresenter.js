class CreateContactPresenter {
  constructor(res) {
    this.res = res;
  }

  createContactPresenterResponse(newContact) {
    this.res.status(201).json({ createdContact: newContact });
  }

  invalidPhoneNumberPresenterResponse(message) {
    this.res.status(400).json({
      statusCode: 400,
      status: "INVALID_PHONE_NUMBER",
      message,
    });
  }

  invalidEmailPresenterResponse(message) {
    this.res.status(400).json({
      statusCode: 400,
      status: "INVALID_EMAIL",
      message,
    });
  }

  invalidNamePresenterResponse(message) {
    this.res.status(400).json({
      statusCode: 400,
      status: "INVALID_NAME",
      message,
    });
  }

  emailAlreadyExistsPresenterResponse() {
    this.res.status(400).json({
      statusCode: 400,
      status: "EMAIL_ALREADY_EXISTS",
      message:
        "this email already exists in our contacts. So please try with other email.",
    });
  }
}

export default CreateContactPresenter;
