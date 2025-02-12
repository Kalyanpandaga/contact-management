import GetContactInteractor from "../interactors/getContactInteractor.js";
import GetContactPresenter from "../presenters/getContactPresenter.js";
import Storage from "../storages/storage.js";

const getContactController = async (req, res) => {
  const storage = new Storage();
  const interactor = new GetContactInteractor(storage);
  const presenter = new GetContactPresenter(res);

  await interactor.getContactInteractor(req.params.id, presenter);
};

export default getContactController;
