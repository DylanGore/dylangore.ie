<template>
    <!-- Page is container by .wrapper for CSS Grid support -->
    <div id="app" class="wrapper">
        <Header />
        <!-- Main Content -->
        <main id="page-main">
            <router-view></router-view>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default {
    components: {
        Header,
        Footer
    }
};
</script>

<style scoped>
/* Imports the default stylesheet to be applied to this template only */
@import '../assets/css/style.css';
</style>
