const router = require("express").Router();

const authControllers = require("../controllers/auth-controllers");
const {signupSchema} = require("../validators/auth-valida");
const authMiddleware = require("../middlewares/auth-middleware");
const validate = require("../middlewares/validate-middleware");
const { loginSchema } = require("../validators/auth-valida");

router.route("/").get(authControllers.home);
router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);
router
  .route("/login")
  .post(validate(loginSchema), authControllers.login);

router.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;
 