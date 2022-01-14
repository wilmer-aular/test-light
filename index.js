const express = require("express");
const bodyParser = require("body-parser");
const routerFacade = require("./src/routers/index");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.json());

app.use("/", routerFacade);

app.listen(5001, () => {
  console.info("El servidor está inicializado en el puerto 5001");
});
