import { createRouter, createWebHashHistory } from "vue-router";

import Landing from "@/pages/Landing.vue";
import ProdectsPage from "@/pages/products.vue";

const router = createRouter({
    history:createWebHashHistory(),

    routes: [
        {path:'/', name:'LandingPage', component: Landing },
        {path:'/products', name:'ProductsPage', component:ProdectsPage }
    ],

});

export default router;