// A smol example of how you can bring in external data
// Used on the home page: ![cat of the day]({{ catpic }})

const axios = require("axios");

module.exports = async () => {
  const result = await axios.get("https://aws.random.cat/meow");

  return result.data.file;
  // Example return: https:\/\/purr.objects-us-east-1.dream.io\/i\/image1-4.jpg
};
