<template>
    <header id="page-header">
        <nav id="navbar">
            <span class="brand">
                <router-link to="/" id="page-title">Dylan Gore</router-link>
            </span>
            <a id="btn-nav">
                <a @click="mobileNav = !mobileNav">
                    <span class="iconify icon-2x" data-icon="mdi:menu"></span>
                </a>
            </a>
            <ul id="mainNav">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/projects">Projects</router-link>
                </li>
                <li>
                    <router-link to="/contact">Contact</router-link>
                </li>
                <li v-if="getUser">
                    <a @click.prevent="logout" href="#">Logout</a>
                </li>
            </ul>
            <ul id="mobileNav" v-if="mobileNav">
                <li @click="mobileNav = !mobileNav">
                    <router-link to="/">Home</router-link>
                </li>
                <li @click="mobileNav = !mobileNav">
                    <router-link to="/projects">Projects</router-link>
                </li>
                <li @click="mobileNav = !mobileNav">
                    <router-link to="/contact">Contact</router-link>
                </li>
                <li v-if="getUser">
                    <a @click.prevent="logout" href="#">Logout</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'mainheader',
    data() {
        return {
            mobileNav: false
        };
    },
    methods: {
        logout() {
            this.$store.dispatch('userLogout');
        }
    },
    computed: {
        getUser() {
            return this.$store.getters.user;
        }
    }
};
</script>