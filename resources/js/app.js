import './bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/animate/fadeIn.css"
import "@quasar/extras/animate/fadeOut.css"
import "@quasar/extras/animate/slideInUp.css"
import "quasar/src/css/index.sass";
import { Quasar, Dialog, Loading, Notify } from 'quasar';

import 'aos/dist/aos.css'

import router from './router/router';

import App from './components/App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(Quasar, {
    plugins: {
        Dialog,
        Loading,
        Notify
    }
});
app.use(router);
app.mount('#app');