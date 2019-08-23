<template>
    <!-- Page is container by .wrapper for CSS Grid support -->
    <div id="app" class="wrapper">
        <MainHeader />
        <!-- Main Content -->
        <main id="page-main">
            <router-view></router-view>
        </main>
        <MainFooter />
    </div>
</template>

<script>
import MainHeader from '@/components/layout/Header';
import MainFooter from '@/components/layout/Footer';

export default {
    components: {
        MainHeader,
        MainFooter
    }
};
</script>

<style>
@import '../assets/css/style.css';
</style>
