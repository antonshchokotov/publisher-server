const express = require("express");
const bodyParser = require("body-parser");

const { PORT, ROUTES } = require("./config");

const subscribeController = require("./controllers/subscribeController");
const publishController = require("./controllers/publishController");
const statusController = require("./controllers/statusController");

const app = express();

app.use(bodyParser.json());

app.use(ROUTES.SUBSCRIBE, subscribeController);
app.use(ROUTES.PUBLISH, publishController);
app.use(ROUTES.STATUS, statusController);

app.listen(PORT, () => {
  console.log(`Server is listening to the port ${PORT}`);
});
