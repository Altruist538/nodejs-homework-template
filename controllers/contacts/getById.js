const mongoose = require("mongoose");
const { HttpError, ctrlWrapper } = require("../../helpers");
const Contact = require("../../models/contacts");
const getById = async (req, res) => {
  const id = req.params.contactId;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw HttpError(400, "Invalid Id");
  }
  const contactOn = await Contact.findById(id);
  if (contactOn) {
    return res.status(200).send(contactOn);
  }
  throw HttpError(404, "Not found");
};
module.exports = { getById: ctrlWrapper(getById) };
