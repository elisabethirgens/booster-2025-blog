import { DateTime } from "luxon";

export default (eleventyConfig) => {
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("d LLL yyyy");
  });
  return {
    /* TODO: update below with name of your repo! */
    pathPrefix: "/booster-2025-blog/",
  };
};
