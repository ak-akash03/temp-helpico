// const { get } = require("mongoose");
const User = require("../model/user.modal");
// const Contact = require("../model/contact-model")
const Contact = require("../model/contact-model");
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    // console.log(users);
    // console.log("pass");
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users Found : " });
    }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};


const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();


    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contats Found : " });
    }
    return res.status(200).json(contacts)


  } catch (error) {
    next(error)
  }
}

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({_id : id})

    return res.status(200).json({message : "user deleted successfully : "})
  } catch (error) {
    next(error)
  } 
}



const deleteContactDataById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({_id : id})

    return res.status(200).json({message : "Contacts deleted successfully : "})
  } catch (error) {
    next(error)
  } 
}


module.exports = {getAllUsers,deleteUserById ,deleteContactDataById, getAllContacts};
