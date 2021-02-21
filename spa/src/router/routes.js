const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {name: 'home'    , path: '', component: () => import('pages/Index.vue')},
      {name: 'articles', path: 'articles', component: () => import('pages/ViewAllArticles.vue')},
      {name: 'article' , path: 'articles/:id', component: () => import('pages/ViewArticle.vue')}
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
