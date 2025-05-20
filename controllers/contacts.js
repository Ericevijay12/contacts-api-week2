const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Get all
exports.getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

// Get by ID
exports.getContactById = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) return res.status(404).send('Contact not found');
  res.json(contact);
};

// Create
exports.createContact = async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json({ id: contact._id });
};

// Update
exports.updateContact = async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!contact) return res.status(404).send('Contact not found');
  res.status(204).send();
};

// Delete
exports.deleteContact = async (req, res) => {
  const result = await Contact.findByIdAndDelete(req.params.id);
  if (!result) return res.status(404).send('Contact not found');
  res.status(204).send();
};
