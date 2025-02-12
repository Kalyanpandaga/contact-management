import GetAllContactsInteractor from "../interactors/getAllContacstInteractor.js";
import GetAllContactsPresenter from "../presenters/getAllContactsPresenter.js";
import Storage from "../storages/storage.js";

const getAllContactsController = async (req, res) => {
  const storage = new Storage();
  const interactor = new GetAllContactsInteractor(storage);

  const presenter = new GetAllContactsPresenter(res);
  await interactor.getAllContactsInteractor(presenter);
};

export default getAllContactsController;
