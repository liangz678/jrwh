
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


let router =  new Router({

  routes: [    
    { path: '/TaskSelect', name: 'TaskSelect', component: ()=> import("@/components/TaskSelect")},
    { path: '/DemandSelect', name: 'DemandSelect', component: ()=> import("@/components/DemandSelect")},
    { path: '/res', name: 'Res', component: ()=> import("@/components/Res")},
    { path: '/Resource', name: 'Resource', component: ()=> import("@/components/Resource")},
    { path: '/login', name: 'login', component: ()=> import("@/components/Login")},
    { path: '/index', name: 'index', component: ()=> import("@/components/index")},
  ]

})


router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    
    if (token === null || token === '') {
      next('/login');
      
    } else {
      next();
    }
  }
});
export default router