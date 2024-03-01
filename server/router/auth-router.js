const router = require("express").Router();

const authControllers = require("../controllers/auth-controllers");
const signupSchema = require("../validators/auth-valida");

const validate = require("../middlewares/validate-middleware");

router.route("/").get(authControllers.home);
router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);
router.route("/login").post(authControllers.login);

module.exports = router;
