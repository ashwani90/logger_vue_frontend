<template>
  <body class="grey lighten-4">
    <app-navbar></app-navbar>

    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- footer -->
    <app-footer></app-footer>
  </body>
</template>

<script>
import NavBar from './components/common/NavBar.vue';
import Footer from './components/common/footer';

export default {
  name: 'App',
  components: {
    appNavbar: NavBar,
    appFooter: Footer,
  }
}
</script>

<style>
  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
