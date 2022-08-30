const router = require("express").Router();

const storageService = require("../services/storage.service");

router.get("/", async (_, res) => {
  try {
    const topics = storageService.getAllTopics();
    res.json(topics);
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
});

module.exports = router;
