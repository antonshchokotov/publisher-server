const router = require("express").Router();

const publishService = require("../services/publish.service");

router.post("/:topicName", async (req, res) => {
  const { topicName } = req.params;
  const message = req.body;

  try {
    publishService.publishMessage({ topicName, message });
    res.sendStatus(200);
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
});

module.exports = router;
