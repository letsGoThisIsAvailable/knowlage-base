module.exports = function(eleventyConfig) {
  console.log("CONFIG IS LOADING");

  eleventyConfig.addCollection("notes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/notes/**/*.md");
  });

  eleventyConfig.addPassthroughCopy({
    "src/css": "css"
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public"
    }
  };
};