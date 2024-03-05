const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      require: true,
    },
    
  },
  {}
);



userSchema.methods.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password)
}




userSchema.methods.generateToken = async function (   ) {
  try {
    return jwt.sign({
      userId: this._id.toString(),
      email: this.email,
      isAdmin : this.isAdmin,
    },
      process.env.JWT_KEY,
      {
        expiresIn: "30d",
      }
    )
  } catch (error) {
    console.log(error); 
  }
}


const User = new mongoose.model('User', userSchema);

module.exports = User;