import {Model} from '@vuex-orm/core'
import {date} from 'quasar'

export default class Article extends Model {

  static entity = 'article'
  static entites = 'articles'

  static apiConfig = {
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }

  static fields() {
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
  //curl -X PUT "http://localhost:9090/articles/1" -H  "Accept: application/json" --data-raw "{""data"":{""id"":1,""title"":""stringasd"",""content"":""string"",""published_at"":""2021-02-21T17:19:11.317Z"",""created_at"":""2021-02-21T01:09:23.644Z"",""updated_at"":""2021-02-21T17:19:20.300Z""}}"
  //curl -X PUT "http://localhost:9090/articles/1" -H  "accept: application/json" -d "{\"title\":\"string\",\"content\":\"string\",\"published_at\":\"2021-02-21T17:19:11.317Z\",\"created_by\":\"string\",\"updated_by\":\"string\"}"
  static updateRecord(data) {
    return Article.api().put(this.entites + '/'+ data.id, data, {})
  }

  static async fetchOne(id) {
    return Article.api().get(this.entites + "/" + id)
  }

  static mutators() {
    return {
      published_at(value) {
        let timeStamp = Date.parse(value)
        return date.formatDate(timeStamp, 'YYYY-MM-DD HH:mm')
      }
    }
  }
}


