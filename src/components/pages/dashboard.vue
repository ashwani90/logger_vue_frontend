<template>
    <div>
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
    </div>
</template>

<script>
    import PerformanceChart from '../dashboard/chart';
    import RecentUpdates from '../dashboard/recentUpdates';
    import FriendsPosts from '../dashboard/friendsPosts';
    import LeaderBoard from '../dashboard/leaderBoard';

    export default {
        name: 'App',
        components: {
            appPerformanceChart: PerformanceChart,
            appRecentUpdates: RecentUpdates,
            appFriendsPosts: FriendsPosts,
            appLeaderboard: LeaderBoard,
        }
    }
</script>