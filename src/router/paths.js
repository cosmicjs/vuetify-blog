/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for each route
// which is lazy-loaded when the route is visited.
function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default [
  {
    path: '/',
    name: 'Home',
    component: loadView('Home')
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: loadView('Home')
  },
  {
    path: '/about',
    name: 'About',
    component: loadView('About')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: loadView('Contact')
  },
  {
    path: '/404',
    name: 'Not Found',
    component: loadView('404')
  },
  {
    path: '*',
    redirect: '/404'
  }
]
