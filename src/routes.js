import Dashboard from './components/pages/dashboard.vue';
import Posts from './components/pages/posts.vue';
import Tasks from './components/pages/tasks.vue';
import PostForm from './components/posts/postForm';
import TaskForm from './components/tasks/taskForm';

export const routes = [
    { path: '/', component: Dashboard },
    { path: '/dashboard', component: Dashboard },
    { path: '/posts', component: Posts },
    { path: '/tasks', component: Tasks },
    { path: '/add-posts', component: PostForm },
    { path: '/add-tasks', component: TaskForm }
];