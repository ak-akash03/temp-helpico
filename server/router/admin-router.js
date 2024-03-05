const adminControllers = require("../controllers/admin-controllers");
const authMiddleware = require("../middlewares/auth-middleware")
const router = require("express").Router();


router.route("/users").get(authMiddleware,adminControllers.getAllUsers)

router.route("/users/delete/:id").delete(authMiddleware, adminControllers.deleteUserById)
router.route("/contacts/delete/:id").delete(authMiddleware, adminControllers.deleteContactDataById)

router.route("/contacts").get(authMiddleware,adminControllers.getAllContacts)



module.exports = router


