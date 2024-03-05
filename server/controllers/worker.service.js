const Student = require("../model/student-model")

const services = async (req, res) => {
    try {
        const response = await Student.find();
        
        if(!response){
            res.status(404).json({msg : "No Service Found"})
            return;
        }
        
        res.status(200).json({msg : response})

    } catch (error) {
        console.log("error from services");
    }
}

module.exports = services 