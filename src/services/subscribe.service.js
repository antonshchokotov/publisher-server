const storageService = require("./storage.service");

const addSubscription = (subscription) => {
  const { topicName, subscriberUrl } = subscription;

  try {
    const isTopicExisting = storageService.getTopic(topicName);
    if (!isTopicExisting) storageService.addTopic(topicName);

    storageService.addSubscriber({ topicName, subscriberUrl });
  } catch (e) {
    console.log("could not add subscription to the storage");
    throw e;
  }
};

module.exports = {
  addSubscription,
};
