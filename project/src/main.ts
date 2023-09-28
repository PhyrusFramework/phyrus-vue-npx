////////////////// CSS Styles
// Prime theme
import './assets/primevue-theme.css';

// Phyrus Prime override styles
import '@phyrus/vue/css/prime.css';

// Phyrus CSS Grid system
import '@phyrus/vue/css/grid.css';

// Phyrus CSS library
import '@phyrus/vue/css/styles.css';

// Project variables
import './variables.scss';
//////////////////////////

import { createApp } from 'vue';
import { App, AppPage, translate } from '@phyrus/vue';

import AppMain from './App.vue';
import config from './config/config';
import routes from './config/routes';
import http from './config/http';
import locales from './assets/translations/locales';

// Create APP
const app = createApp(AppMain);

// Initialize Phyrus
App.init(app, config, routes);
app.component('app-page', AppPage);

// Initialize things here:

http();                         // HTTP Client configuration
translate.initialize(locales);  // Languages

// Mount app
app.mount('#app');