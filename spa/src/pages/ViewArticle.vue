<template>
  <q-page class="q-pa-md">
    <article-det :param="article"/>
  </q-page>
</template>

<script>
import Article from "src/models/Article";
import ArticleDet from "components/ArticleDet";

export default {
  name: "ViewArticle",
  components: {ArticleDet},
  data: () => ({
    article: {}
  }),
  created() {
    Article.fetchOne(this.$route.params.id).then(value => this.article = value.response.data)
  }
  // async created() {
  //   await Article
  //     .fetchOne(this.$route.params.id)
  //     .then(value => this.article = value.response.data)
  // }
}
</script>

<style scoped>

</style>
