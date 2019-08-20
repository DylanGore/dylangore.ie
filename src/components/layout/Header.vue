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
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'header'
};
</script>