import { IAppConfig } from "@phyrus/vue";

const config : IAppConfig = {

    language: {
        default: 'en'
    },

    api: {
        url: import.meta.env._API_URL
    },

    /*primevue: {
        ripple: true
    },*/


}
export default config;
