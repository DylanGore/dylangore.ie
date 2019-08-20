<template>
    <header id="page-header">
        <nav id="navbar">
            <router-link to="/" id="page-title">Dylan Gore</router-link>
            <a id="btn-nav">
                <i class="fas fa-2x fa-bars"></i>
            </a>
            <ul>
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
        </nav>
    </header>
</template>

<script>
export default {
    name: 'mainheader',
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