
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Inicio.vue') },
      { path: 'hospedagens/', component: () => import('pages/Hospedagens.vue') },
      { path: 'hospedagem/:id', component: () => import('pages/Hospedagem.vue') },
      { path: 'media', component: () => import('pages/Media.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
