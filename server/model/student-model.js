const { Schema, model, default: mongoose } = require("mongoose");

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type : String,
    required : true
  },
  message: {
    type: String,
    required: true,
  },
  deadline: {
    type : Number,
    required: true
  }
});


const Student = new model("Student", studentSchema )
module.exports = Student