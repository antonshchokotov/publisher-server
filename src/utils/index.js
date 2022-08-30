const isHttpUrlValid = (url) => {
  try {
    const { protocol } = new URL(url);
    return protocol === "http:" || protocol === "https:";
  } catch (_) {
    return false;
  }
};

module.exports = {
  isHttpUrlValid,
};
