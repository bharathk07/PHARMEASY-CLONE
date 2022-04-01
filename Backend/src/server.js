const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.auth.controller");
const { register, login } = require("./controllers/auth.controller");
const cors = require('cors')
const productController = require("./controllers/product.auth.controller");

const app = express();

app.use(express.json());
app.use("/user", userController);
app.use("/products", productController);

app.post("/register", register);
app.post("/login", login);

const port = process.env.PORT || 5300;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`we are on the port of ${port}`);
  } catch (error) {
    console.log({ errors: error.message });
  }
});

// checking

// const connect = require("./configs/db");
// const app = require("./backend");

// app.listen(5300, async () => {
//   try {
//     await connect();
//     console.log("Connect to Port 5300...");
//   } catch (err) {
//     console.log(err.message);
//   }
// });
