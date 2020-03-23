import Dashboard from './components/pages/dashboard.vue';
import Posts from './components/pages/posts.vue';
import Tasks from './components/pages/tasks.vue';

export const routes = [
    { path: '/', component: Dashboard },
    { path: '/dashboard', component: Dashboard },
    { path: '/posts', component: Posts },
    { path: '/tasks', component: Tasks }
];