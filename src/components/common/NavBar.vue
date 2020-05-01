<template>
    <nav class="blue darken-2">
        <div class="container">
            <div class="nav-wrapper">
                <router-link to="/"><span class="brand-logo">BlaLogger</span></router-link>
                <!--<a href="#" data-activates="side-nav" class="button-collapse show-on-large right">-->
                    <!--<i class="material-icons">menu</i>-->
                <!--</a>-->
                <ul class="right hide-on-med-and-down">
                    <li :class="[currentPage.includes('dashboard') ? activeClass : '']">
                        <router-link to="/dashboard">Dashboard</router-link>
                    </li>
                    <li :class="[currentPage.includes('posts') ? activeClass : '']">
                        <router-link to="/posts">Posts</router-link>
                    </li>
                    <li :class="[currentPage.includes('tasks') ? activeClass : '']">
                        <router-link to="/tasks">Tasks</router-link>
                    </li>
                    <li :class="[currentPage.includes('analytics') ? activeClass : '']">
                        <router-link to="/analytics">Analytics</router-link>
                    </li>
                    <li :class="[currentPage.includes('profile') ? activeClass : '']">
                        <router-link to="/profile">Profile</router-link>
                    </li>
                    <span style="cursor: pointer;" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></span>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

    export default {
        data() {
            return {
                activeClass: 'active'
            }
        },
        computed: {
            currentPage() {
                return this.$route.path;
            }
        }
    }

</script>