<template>
    <header class="navbar">
        <span class="brand">
            <router-link to="/" id="page-title">Dylan Gore</router-link>
        </span>
        <label for="nav-toggle" class="nav-toggle-label">
            <span class="iconify icon-2x" data-icon="mdi:menu"></span>
        </label>
        <!-- prettier-ignore -->
        <input type="checkbox" id="nav-toggle" class="nav-toggle" :checked="showNav" />
        <nav class="navbar-nav">
            <ul>
                <li @click="toggleNav">
                    <router-link to="/">Home</router-link>
                </li>
                <li @click="toggleNav">
                    <router-link to="/projects">Projects</router-link>
                </li>
                <li @click="toggleNav">
                    <router-link to="/contact">Contact</router-link>
                </li>
                <li @click="toggleNav" v-if="getUser">
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
            showNav: false
        };
    },
    methods: {
        logout() {
            this.$store.dispatch('userLogout');
        },
        toggleNav() {
            this.showNav = !this.showNav;
        }
    },
    computed: {
        getUser() {
            return this.$store.getters.user;
        }
    }
};
</script>

<style>
.navbar {
    background: var(--blue);
    color: #fff;
    min-height: 65px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr, minmax(65px, auto);
    align-items: center;
    z-index: 999;
}

.navbar a {
    color: #fff;
    text-decoration: none !important;
}

.navbar a:hover {
    color: #d0d0d0;
}

.navbar .brand {
    margin-left: 1em;
    justify-self: left;
    font-size: 1.5em;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 300;
}

/* Hide checkbox */
.nav-toggle {
    display: none;
}

.nav-toggle:checked ~ nav {
    transform: scale(1, 1);
}

.nav-toggle-label {
    justify-self: right;
    margin-right: 1em;
    min-height: 65px;
    display: grid;
    align-items: center;
}

.navbar nav {
    background: var(--blue);
    position: absolute;
    top: 65px;
    width: 100%;
    transform: scale(1, 0);
    transition: transform 200ms ease-in-out;
    transform-origin: top;
}

.navbar nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar nav ul li {
    text-align: right;
    padding: 0.5em 0;
    margin-right: 1em;
}

/* Desktop Viewport */
@media screen and (min-width: 790px) {
    .nav-toggle-label {
        display: none;
    }

    .navbar {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .navbar nav {
        display: grid;
        transform: scale(1, 1);
        position: relative;
        top: 0;
        transition: none;
    }

    .navbar nav ul {
        overflow: hidden;
        justify-self: right;
    }

    .navbar nav ul li {
        float: left;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-left: 0.5em;
    }
}
</style>
