<template>
    <div id="app" class="wrapper">
        <header id="page-header">
            <nav id="navbar">
                <a href="index.html" id="page-title">Dylan Gore</a>
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
                </ul>
            </nav>
        </header>
        <main id="page-main">
            <router-view></router-view>
        </main>
        <footer id="page-footer">
            <p id="copyright">&copy; Copyright 2019 Dylan Gore</p>
        </footer>
    </div>
</template>

<style scoped>
@import '../assets/css/style.css';
</style>