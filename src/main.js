import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import Home from './components/Home.vue';
import TextToBase64 from './components/TextToBase64.vue';
import FileToBase64 from './components/FileToBase64.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/text-to-base64',
            name: 'TextToBase64',
            component: TextToBase64,
        },
        {
            path: '/file-to-base64',
            name: 'FileToBase64',
            component: FileToBase64,
        },
    ],
});

createApp(App)
    .use(router)
    .mount('#app');
