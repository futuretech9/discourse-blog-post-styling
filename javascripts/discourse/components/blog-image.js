import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  imageURL: computed("topic.firstPost.cooked", function () {
    const cooked = this.get("topic.firstPost.cooked");
    if (!cooked) return null;

    const match = cooked.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  }),

  isBlogTopic: computed("topic.category.slug", function () {
    const slug = this.get("topic.category.slug");
    // Adjust this to your actual blog category slug if it's not 'blog'
    return slug === "blog";
  })
});
