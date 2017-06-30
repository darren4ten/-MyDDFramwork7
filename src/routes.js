export default [
  {
      path: '/about/',
      component: require('./pages/about.vue')
  },
  {
      path: '/my-approval/',
      component: require('./pages/my-approval.vue')
  },
   {
      path: '/wf-detail/:ID/:WorkflowName',
      component: require('./pages/wf-detail.vue')
  },
  {
      path: '/form/',
      component: require('./pages/form.vue')
  },
  {
      path: '/dynamic-route/blog/:blogId/post/:postId/',
      component: require('./pages/dynamic-route.vue')
  }
]