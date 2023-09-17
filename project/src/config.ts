import { IAppConfig } from "@phyrus/vue";
import HomePage from "./pages/home/home.vue";
import DefaultLayout from "./layouts/default/default.vue";

const config : IAppConfig = {

    config: {

    },

    language: {
        default: 'en'
    },

    primevue: {
        ripple: true
    },

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
export default config;
