const path = require("path");

module.exports = {
  client: {
    // Source files
    src: path.resolve(__dirname, "../src/client"),

    // Production build files
    build: path.resolve(__dirname, "../dist/client"),

    // Static files that get copied to build folder
    // public: path.resolve(__dirname, '../public'),
  },
};
