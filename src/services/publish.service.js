const storageService = require("./storage.service");
const notifyService = require("./notify.service");

const publishMessage = (publication) => {
  const { topicName, message } = publication;

  try {
    const topic = storageService.getTopic(topicName);
    if (!topic) storageService.addTopic(topicName);

    storageService.addMessage({ topicName, message });

    const subscribers = (topic && topic.subscribers) || [];
    if (subscribers.length)
      notifyService.distributeMessage({
        subscribers,
        message: { topic: topicName, data: message },
      });
  } catch (e) {
    console.log("could not add or distribute new topic message to the storage");
    throw e;
  }
};

module.exports = {
  publishMessage,
};
