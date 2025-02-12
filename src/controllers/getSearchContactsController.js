import GetSearchContactsInteractor from "../interactors/getSearchContactsInteractor.js";
import GetSearchContactsPresenter from "../presenters/getSearchContactsPresenter.js";
import Storage from "../storages/storage.js";

const getSearchContactsController = async (req, res) => {
  const { name, email } = req.query;

  const storage = new Storage();
  const interactor = new GetSearchContactsInteractor(storage);
  const presenter = new GetSearchContactsPresenter(res);

  await interactor.getSearchContactsInteractor(name, email, presenter);
};

export default getSearchContactsController;
