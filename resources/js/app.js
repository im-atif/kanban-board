import Vue from 'vue';
import App from './App.vue';
require('./bootstrap');

// Font awesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCirclePlus, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
library.add(faCirclePlus, faXmark, faTrashCan);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
    el: '#app',
    template: '<app />',
    components: { App }
});