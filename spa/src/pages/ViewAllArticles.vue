<template>
  <q-page class="q-pa-md">
    <q-card flat square>
      <q-card-section>
        <article-list/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import Article from "src/models/Article";
import ArticleList from "components/ArticleList";

export default {

  name: "ViewAllArticles",
  components: {
    ArticleList
  },
  async created() {
    await Article.fetch()
  },
}
</script>

<style scoped>

</style>
