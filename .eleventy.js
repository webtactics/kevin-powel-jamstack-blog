const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

eleventyConfig.addPassthroughCopy('./src/style.css');
eleventyConfig.addPassthroughCopy('./src/assets');
eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED); 
  });

eleventyConfig.addFilter("limit", function (arr, limit) {
      return arr.slice(0, limit);
    });

 
    return {
    dir: {
        input: "src",
        output: "public"
    }
};
}