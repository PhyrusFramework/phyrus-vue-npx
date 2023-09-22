////////////////// CSS Styles
// Prime theme
import './assets/primevue-theme.css';

// Phyrus Prime override styles
import '@phyrus/vue/prime.css';

// Phyrus CSS Grid system
import '@phyrus/vue/grid.css';

// Phyrus CSS library
import '@phyrus/vue/styles.css';

// Project variables
import './variables.scss';
//////////////////////////

import { App, translate } from '@phyrus/vue';

import AppMain from './App.vue';
import { createApp } from 'vue'
import config from './config/config';
import locales from './assets/translations/locales';
import routes from './config/routes';

const app = createApp(AppMain);

App.init(app, config, routes)
translate.initialize(locales);

app.mount('#app');
