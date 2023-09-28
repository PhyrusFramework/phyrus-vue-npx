import { IRoutes } from '@phyrus/vue';

import DefaultLayout from '../layouts/default/default.vue';

import NotFoundPage from '../pages/404/404.vue';
import HomePage from '../pages/home/home.vue';

const routes : IRoutes = {
    
    layouts: {
        default: DefaultLayout
    },

    routes:  [

        {
            path: '/',
            component: HomePage
        },
        // [CLI] <-- Leave this mark here so the CLI can add new routes automatically (You can delete this text)
        
        // Leave always 404 Page always at the end
        {
            path: '/404',
            component: NotFoundPage
        },
        {
            path: "/:catchAll(.*)",
            redirect: '/404',
        },
    ]
}
export default routes;