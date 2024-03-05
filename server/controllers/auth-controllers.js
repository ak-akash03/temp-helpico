const User = require("../model/user.modal");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to Home from controllers  : ");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, email, phone, password } = req.body;
    const userExits = await User.findOne({ email });

    if (userExits) {
      return res.status(400).json({ message: "email already exits : " });
    }

    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound);
    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hash_password,
      
    });

    res
      .status(200)
      .json({
        msg: "Registration Successful : ",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    console.log(error);
  }
};


const login = async (req, res) => {
  try {
    const {email, password} = req.body;

    const userExit = await User.findOne({email})

    if(!userExit){
      return res.status(400).json({message : "Invalid Credentials : "})
    }

    // const user = await bcrypt.compare(password, userExit.password)
   
   const user = await userExit.comparePassword(password)
   
    if(user){
      res.status(200).json({
        msg: "Login Successful : ",
        token: await userExit.generateToken(),
        userId: userExit._id.toString(),     
      })
    }
    else{
      res.status(401).json({message : "Invalid Email Or Password : "})
    }

  }catch (error) {
      res.status(500).json("internal server errror   ")
      next(error);
  }
}



// ---------------------------------------------------------------------



const user = async(req, res) => {
  try {
    const userData = req.user;
    console.log(userData);

    res.status(200).json({userData})

    
  } catch (error) {
    console.log(`error from thee user root ${error}`);
  } 
}


module.exports = { home, login, register, user };

