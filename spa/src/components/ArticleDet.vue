<template>
  <div>
    <q-card flat>
      <q-toolbar>
        <q-toolbar-title>Editing Article {{ param.title }}</q-toolbar-title>
      </q-toolbar>

      <q-card-section>
        <q-item-label>
          <q-input v-model="article.title" label="Title"/>
        </q-item-label>
      </q-card-section>

      <q-card-section>
        <q-editor
          square
          flat
          v-model=editor
          max-height="100%"
          toolbar-color="primary"
        />
      </q-card-section>

    </q-card>
    <q-footer>
        <q-card-actions>
          <q-btn unelevated label="Edit" @click="update(article)"></q-btn>
          <q-btn unelevated label="Delete" @click="remove(article)"></q-btn>
          <q-btn unelevated label="Cancel" @click="cancel()"></q-btn>
        </q-card-actions>
    </q-footer>
  </div>

</template>

<script>
import Article from "src/models/Article";
export default {
  name: "ArticleDet",
  props: {
    param: {},
  },
  data: () => ({
    article: {},
    editor: "undefined"
  }),
  watch: {
    param: function () {
      this.article = this.param
      this.editor = this.param.content
    },
    editor: function () {
      this.article.content = this.editor
    }
  },
  methods: {
    update(article) {
      Article.updateRecord(article)
    },
    remove(article) {
      console.log(article)
    },
    cancel() {
      this.$router.back()
    }
  }
}
</script>
