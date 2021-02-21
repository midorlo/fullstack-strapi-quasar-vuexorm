<template>
  <q-card flat square bordered>
    <q-form>
    <q-card-section>
      <q-item-label>
        <q-input v-model="article.title" label="Title"></q-input>
      </q-item-label>
    </q-card-section>
    <q-card-section>
      <q-input v-model="article.published_at" label="Published"></q-input>
    </q-card-section>
    <q-card-section>
      <q-input v-model="article.content" label="Content"></q-input>
    </q-card-section>
    <q-card-section>
      <q-card-actions>
        <q-btn label="Edit"></q-btn>
        <q-btn label="Delete"></q-btn>
      </q-card-actions>
    </q-card-section>
    </q-form>
  </q-card>
</template>

<script>
export default {
  name: "ArticleDet",
  props: {
    param: {},
  },
  data: () => ({
    article: {}
  }),
  watch: {
    param: function (val) {
      this.article = this.param
    },
  },
}
</script>
