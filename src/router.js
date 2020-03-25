import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
    linkExactActiveClass: "active",
    mode: "history",
    routes: [
        {
            path: "/",
            name: "HelloWorld",
            
            component: () =>
              import(/* webpackChunkName: "demo" */ "./components/HelloWorld.vue")
          },
    ]
})
export default router;