import UpdateContactInteractor from "../interactors/updateContactInteractor.js";
import UpdateContactPresenter from "../presenters/updateContactPresenter.js";
import Storage from "../storages/storage.js";

const updateContactController = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address } = req.body;

  const contactData = {
    name,
    email,
    phone,
    address: address || null,
  };

  const storage = new Storage();
  const interactor = new UpdateContactInteractor(storage);
  const presenter = new UpdateContactPresenter(res);

  await interactor.updateContactInteractor(id, contactData, presenter);
};

export default updateContactController;
