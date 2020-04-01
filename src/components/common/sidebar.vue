<template>
    <ul id="slide-out" class="sidenav">
        <li><div class="user-view">
            <div class="background">
                <img :src="oceanImage">
            </div>
            <a href="#"><img class="circle" :src="personImage"></a>
            <a href="#"><span class="white-text name">Ashwani Gaur</span></a>
            <a href="#"><span class="white-text email">abcdk@gmail.com</span></a>
        </div></li>
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
            <router-link to="/time-slots">Time Table</router-link>
        </li>
        <li>
            <router-link to="/analytics">Analytics</router-link>
        </li>
        <li>
            <router-link to="/profile">Profile</router-link>
        </li>
    </ul>
</template>

<script>
    import M from 'materialize-css';
    import oceanImage from '@/assets/ocean.jpg';
    import personImage from '@/assets/person1.jpg';

    export default {
        data() {
            return {
                personImage: personImage,
                oceanImage: oceanImage,
            }
        },
        mounted() {
            M.AutoInit();
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);

        },
        updated() {
            M.AutoInit();
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
        }
    }
</script>