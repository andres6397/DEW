import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

var token = localStorage.getItem('token');
if(token)
    axios.defaults.headers.common['Authorization'] = 'Bearer' + token;
    
createApp(App).use(store).use(router).use(router).use(store).use(VueAxios, axios).mount('#app')
