<template>
  <q-timeline color="secondary"
              layout="comfortable"
              side="right">

    <q-timeline-entry heading> Timeline heading</q-timeline-entry>

    <q-timeline-entry
      v-for="article in articles"
      :key="article.id"
      :title="article.title"
      :subtitle="article.published_at">

      {{ article.content }}
    </q-timeline-entry>
  </q-timeline>
</template>

<script>
import Article from "src/models/Article";

export default {
  name: "ArticleList",
  computed: {
    /**
     * [ { "$id": "1", "id": 1, "title": "test", "content": "hw", "published_at": "2021-02-21T01:09:27.570Z" }, ..]
     */
    articles() {
      return Article.all()
    }
  }
}
</script>
