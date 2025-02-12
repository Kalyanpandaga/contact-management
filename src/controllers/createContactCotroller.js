import CreateContactInteractor from "../interactors/createContactInteractor.js";
import CreateContactPresenter from "../presenters/createContactPresenter.js";
import Storage from "../storages/storage.js";

const createContactController = async (req, res) => {
  const { name, email, phone, address } = req.body;

  const contactData = {
    name,
    email,
    phone,
    address: address || null, // Ensure optional field is handled
  };

  const storage = new Storage();
  const interactor = new CreateContactInteractor(storage);
  const presenter = new CreateContactPresenter(res);

  await interactor.createContactInteractor(contactData, presenter);
};

export default createContactController;
