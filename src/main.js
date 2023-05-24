import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import './assets/sass/light-bootstrap-dashboard.scss'
import './assets/css/demo.css'
import LightBootstrap from "./light-bootstrap-main";

// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000/api';

createApp(App).use(router).use(store).use(LightBootstrap).mount('#app')


