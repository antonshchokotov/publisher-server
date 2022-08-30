const axios = require("axios");

const distributeMessage = ({ subscribers, message }) => {
  try {
    subscribers.forEach((subscriberUrl) => {
      sendMessage({ url: subscriberUrl, data: message });
    });
  } catch (e) {
    console.log("could not distribute message to some subscribers");
    throw e;
  }
};

const sendMessage = async ({ url, data }) => {
  try {
    await axios({
      method: "post",
      url,
      data,
    });
  } catch (e) {
    console.log(`could not sent message to ${url}, ${e.message}`);
  }
};

module.exports = {
  distributeMessage,
};
