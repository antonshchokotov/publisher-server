const TOPICS = [];

const getTopic = (name) => TOPICS.find((el) => el.name === name);

const addTopic = (name) => TOPICS.push({ name, subscribers: [], messages: [] });

const addSubscriber = ({ topicName, subscriberUrl }) => {
  const TOPIC = getTopic(topicName);
  TOPIC.subscribers.push(subscriberUrl);
};

const addMessage = ({ topicName, message }) => {
  const TOPIC = getTopic(topicName);
  TOPIC.messages.push(message);
};

const getAllTopics = () => TOPICS;

module.exports = {
  getTopic,
  addTopic,
  addSubscriber,
  addMessage,
  getAllTopics,
};
