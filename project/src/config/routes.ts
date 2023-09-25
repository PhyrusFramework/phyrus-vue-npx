import { IRoutes } from '@phyrus/vue';

import HomePage from "../pages/home/home.vue";
import DefaultLayout from "../layouts/default/default.vue";

const routes : IRoutes = {
    
    layouts: {
        default: DefaultLayout
    },

    routes:  [

        {
            path: '/',
            component: HomePage
        },
        //ADDROUTE
    ]
}
export default routes;