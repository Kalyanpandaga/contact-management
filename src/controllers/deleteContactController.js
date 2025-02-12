import DeleteContactInteractor from "../interactors/deleteContactInteractor.js";
import DeleteContactPresenter from "../presenters/deleteContactPresenter.js";
import Storage from "../storages/storage.js";

const deleteContactController = async (req, res) => {
  const storage = new Storage();
  const interactor = new DeleteContactInteractor(storage);
  const presenter = new DeleteContactPresenter(res);

  await interactor.deleteContactInteractor(req.params.id, presenter);
};

export default deleteContactController;
