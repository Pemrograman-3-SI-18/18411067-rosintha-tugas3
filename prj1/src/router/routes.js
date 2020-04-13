
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home/DataBuku.vue') },
      { path: 'inputdatabuku', component: () => import('pages/home/inputdatabuku.vue') },
      { path: 'datatransaksi', component: () => import('pages/home/datatransaksi.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/login regis layouts.vue'),
    children: [
      { path: 'auth/login', component: () => import('pages/users/login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/registrasi.vue') }
    ]
  }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
