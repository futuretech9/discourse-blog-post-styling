import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  imageURL: computed("topic.firstPost.cooked", function () {
    const cooked = this.topic.firstPost.cooked;
    const match = cooked.match(/<img.+src="([^"]+)"/);
    return match ? match[1] : null;
  }),

  isBlogTopic: computed("topic.category.slug", function () {
    const slug = this.topic.category.slug;
    return slug === "blog"; // adjust to your blog category slug
  })
});
