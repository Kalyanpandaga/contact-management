import mongoose from "mongoose";
import Contact from "../models/contactModel.js";
import { InvalidContactIdError } from "../utils/errors.js";

const { CastError } = mongoose.Error;

class Storage {
  async getAllContacts() {
    const contacts = await Contact.find().select(
      "name email phone address createdAt"
    );

    const total_contacts = contacts.map(
      ({ _id, name, email, phone, createdAt, address }) => ({
        id: _id.toString(),
        name: name,
        email: email,
        phoneNumber: phone,
        address: address,
        createdAt: createdAt,
      })
    );

    return total_contacts;
  }

  async createContact(contactData) {
    const { name, email, phone, address } = contactData;

    const newContact = new Contact({
      name,
      email,
      phone,
      address: address || "",
    });

    await newContact.save();

    return {
      id: newContact._id.toString(),
      name: newContact.name,
      email: newContact.email,
      phone: newContact.phone,
      address: newContact.address,
      createdAt: newContact.createdAt,
    };
  }

  async getContactById(contactId) {
    try {
      const existingContact = await Contact.findById(contactId).select(
        "id name email phone address createdAt updatedAt"
      );

      if (!existingContact) {
        return null;
      }

      return {
        id: existingContact.id,
        name: existingContact.name,
        email: existingContact.email,
        phone: existingContact.phone,
        address: existingContact.address,
        createdAt: existingContact.createdAt,
        updatedAt: existingContact.updatedAt,
      };
    } catch (error) {
      return null;
    }
  }

  async deleteContact(contactId) {
    await Contact.findByIdAndDelete(contactId);
  }

  async isEmailExists(email, excludeContactId = null) {
    const existingContact = await Contact.findOne({ email });
    if (!existingContact) return false;

    return excludeContactId ? existingContact.id !== excludeContactId : true;
  }

  async updateContact(contactId, contactData) {
    const updateContactData = { ...contactData, updatedAt: new Date() };
    await Contact.findByIdAndUpdate(contactId, updateContactData, {
      new: true,
    });
  }
}

export default Storage;
