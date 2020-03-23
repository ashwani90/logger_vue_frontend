<template>
  <body class="grey lighten-4">
    <app-navbar></app-navbar>
    <section class="section section-visitors blue lighten-4">
      <div class="row">
        <div class="col s12 m6 l8">
          <div class="card-panel">
            <!-- chart block -->
          <app-performance-chart></app-performance-chart>
          </div>
        </div>
        <div class="col s12 m6 l4">
          <!-- recent updates block -->
        <app-recent-updates></app-recent-updates>
        </div>
      </div>
    </section>
    <!-- social part of the app -->
    <section>
      <div class="row">
        <app-friends-posts></app-friends-posts>
        <app-leaderboard></app-leaderboard>
      </div>
    </section>
    <!-- footer -->
    <app-footer></app-footer>
  </body>
</template>

<script>
import NavBar from './components/common/NavBar.vue';
import PerformanceChart from './components/dashboard/chart';
import RecentUpdates from './components/dashboard/recentUpdates';
import FriendsPosts from './components/dashboard/friendsPosts';
import LeaderBoard from './components/dashboard/leaderBoard';
import Footer from './components/common/footer';

export default {
  name: 'App',
  components: {
    appNavbar: NavBar,
      appPerformanceChart: PerformanceChart,
      appRecentUpdates: RecentUpdates,
      appFriendsPosts: FriendsPosts,
      appLeaderboard: LeaderBoard,
      appFooter: Footer,
  }
}
</script>

<style>

</style>
