const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const { register, login } = require("./controllers/auth.controller");
const userController = require("./controllers/user.auth.controller");
const productController = require("./controllers/product.auth.controller");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/user", userController);
app.use("/products", productController);

app.post("/register", register);
app.post("/login", login);
const healthcareDevicesController = require("./controllers/HealthcareDevice-controller");
app.use("/HealthcareDevices", healthcareDevicesController);

const healthFooddrinkController = require("./controllers/HealthFood-controller");
app.use("/HealthFoodandDrinks", healthFooddrinkController);

const covidController = require("./controllers/covid-controller");
app.use("/covids", covidController);

const skincareController = require("./controllers/skincare-controller");
app.use("/skincares", skincareController);

const healthcaredataController = require("./controllers/healthcare-data-controller");
app.use("/healthcaredata", healthcaredataController);

const port = process.env.PORT || 5300;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`we are on the port of ${port}`);
  } catch (error) {
    console.log({ errors: error.message });
  }
});
