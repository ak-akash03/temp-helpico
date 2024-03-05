const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact.router")
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const cors = require('cors')
const studentRoute = require("./router/student.router")
const workerRoute = require("./router/Worker.router")
const adminRoute = require("./router/admin-router")
const corsOptions = {
  origin: "http://localhost:3000",
  methods:"GET, POST , PUT, DELETE, PATCH, HEAD  ",
  Credential: true,
}
app.use(cors(corsOptions));
app.use(express.json());
const PORT = 5000;

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute)  
app.use("/api/data", studentRoute)  
app.use("/api/data", workerRoute)  
app.use("/api/admin", adminRoute)

app.use(errorMiddleware);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server run at port http://localhost:${PORT}`);
  });
});


