import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ContatoView from '../views/ContatoView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import ProdutoView from '../views/ProdutoView.vue'
import AulasView from '../views/AulasView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/contato', component: ContatoView },
  { path: '/produtos', component: ProdutosView },
  { path: '/produtos/:nome', component: ProdutoView },
  { path: '/aulas', component: AulasView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router