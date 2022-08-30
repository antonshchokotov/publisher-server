const router = require("express").Router();

const { isHttpUrlValid } = require("../utils");
const subscribeService = require("../services/subscribe.service");

router.post("/:topicName", async (req, res) => {
  const { topicName } = req.params;
  const { url } = req.body;

  if (!isHttpUrlValid(url))
    return res.status(400).send("invalid subscriber url");

  const subscription = {
    topicName,
    subscriberUrl: url,
  };

  try {
    subscribeService.addSubscription(subscription);
    res.sendStatus(200);
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
});

module.exports = router;
