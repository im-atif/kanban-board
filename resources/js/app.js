import Vue from 'vue';
import App from './App.vue';
require('./bootstrap');

// Font awesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCirclePlus, faPenToSquare, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
library.add(faCirclePlus, faXmark, faTrashCan, faPenToSquare);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import VModal from 'vue-js-modal/dist/ssr.nocss';
import 'vue-js-modal/dist/styles.css';

Vue.use(VModal);

new Vue({
    el: '#app',
    template: '<app />',
    components: { App }
});