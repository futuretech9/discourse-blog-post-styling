import Component from "@ember/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  site: service(),

  imageURL: computed("topic.firstPost.cooked", function () {
    const cooked = this.get("topic.firstPost.cooked");
    if (!cooked) return null;

    // Extract first image src from cooked content
    const match = cooked.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  }),

  isBlogTopic: computed("topic.category.slug", function () {
    const slug = this.get("topic.category.slug");
    // Adjust "blog" to your actual blog category slug if needed
    return slug === "blog";
  })
});
