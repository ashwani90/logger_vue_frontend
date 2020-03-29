import Dashboard from './components/pages/dashboard.vue';
import Posts from './components/pages/posts.vue';
import Tasks from './components/pages/tasks.vue';
import PostForm from './components/posts/postForm';
import TaskForm from './components/tasks/taskForm';
import Analytics from './components/pages/analytics';
import Profile from './components/pages/profile';
import PostDetails from './components/posts/postDetails';

export const routes = [
    { path: '/', component: Dashboard },
    { path: '/dashboard', component: Dashboard },
    { path: '/posts', component: Posts },
    { path: '/tasks', component: Tasks },
    { path: '/add-posts', component: PostForm },
    { path: '/post', component: PostDetails },
    { path: '/add-tasks', component: TaskForm },
    { path: '/settings', component: Analytics },
    { path: '/profile', component:Profile },
];