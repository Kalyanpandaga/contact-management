import express from "express";
import getAllContactsController from "../controllers/getAllContactsController.js";
import createContactController from "../controllers/createContactCotroller.js";
import updateContactController from "../controllers/updateContactController.js";
import deleteContactController from "../controllers/deleteContactController.js";
import getContactController from "../controllers/getContactController.js";

const router = express.Router();

router.get("/contacts", getAllContactsController);
router.post("/contacts", createContactController);
router.put("/contacts/:id", updateContactController);
router.delete("/contacts/:id", deleteContactController);
router.get("/contacts/:id", getContactController);

export default router;
