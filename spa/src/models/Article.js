import { Model } from '@vuex-orm/core'

export default class Article extends Model {

  static entity = 'article'
  static entites = 'articles'

  static fields () {
    return {
      id: this.attr(null),
      title: this.attr(null),
      content: this.attr(null),
      published_at: this.attr(null),
    }
  }

  static async fetchAll() {
    return Article.api().get(this.entites)
  }

  static async fetchOne(id) {
    return Article.api().get(this.entites + "/" + id)
  }
}


