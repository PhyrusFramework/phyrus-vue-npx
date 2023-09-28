import { IAppConfig } from "@phyrus/vue";

const config : IAppConfig = {

    language: {
        default: 'en'
    },

    api: {
        url: import.meta.env._API_URL
    },

    /*cookieConsent: true, // Display cookie consent dialog

    primevue: {
        ripple: true
    },*/


}
export default config;
