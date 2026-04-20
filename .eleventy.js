module.exports = function (eleventyConfig) {

  eleventyConfig.addCollection("notes", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/notes/*.md");
  });

  eleventyConfig.addCollection("tags", function(collectionApi) {
  let files = collectionApi.getFilteredByGlob("src/notes/**/*.md");
  let tags = {};

  for (let file of files) {
    let fileTags = file.data.tags || [];

    for (let tag of fileTags) {
      if (!tags[tag]) {
        tags[tag] = [];
      }

      tags[tag].push(file);
    }
  }

  console.log("TAGS:", Object.keys(tags));

  return tags;
});

  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public"
    }
  };
};