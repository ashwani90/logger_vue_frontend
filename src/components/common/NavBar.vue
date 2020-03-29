<template>
    <nav class="blue darken-2">
        <div class="container">
            <div class="nav-wrapper">
                <router-link to="/"><span class="brand-logo">BlaLogger</span></router-link>
                <!--<a href="#" data-activates="side-nav" class="button-collapse show-on-large right">-->
                    <!--<i class="material-icons">menu</i>-->
                <!--</a>-->
                <ul class="right hide-on-med-and-down">
                    <li class="active">
                        <router-link to="/dashboard">Dashboard</router-link>
                    </li>
                    <li>
                        <router-link to="/posts">Posts</router-link>
                    </li>
                    <li>
                        <router-link to="/tasks">Tasks</router-link>
                    </li>
                    <li>
                        <router-link to="/analytics">Analytics</router-link>
                    </li>
                    <li>
                        <router-link to="/profile">Profile</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

</script>