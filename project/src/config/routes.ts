import { IRouter } from '@phyrus/vue';

import HomePage from "../pages/home/home.vue";
import DefaultLayout from "../layouts/default/default.vue";

const routes : IRouter = {
    
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