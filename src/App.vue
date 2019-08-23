<template>
    <div id="app">
        <component :is="layout">
            <router-view />
        </component>
    </div>
</template>

<style>
/* Global CSS applied to all views/components */

/* Imports */
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400');

/* Color Variables */
:root {
    --blue: #2e4b7a;
    --dark-blue: #243a5e;
    --red: #c62828;
    --navbar-height: 10vh;
}

/* Viewport Size */
body,
html {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    margin: 0;
    width: 100%;
    height: 100%;
}

/* Icon Size */
.icon-2x {
    font-size: 2em;
}

/* Icon Color */
.github-icon:hover {
    color: #333 !important;
    font-weight: bold;
}

.twitter-icon:hover {
    color: #1da1f2 !important;
    font-weight: bold;
}

.devto-icon:hover {
    color: #000 !important;
    font-weight: bold;
}

.linkedin-icon:hover {
    color: #0077b5 !important;
    font-weight: bold;
}

.email-icon:hover {
    color: #dd5143 !important;
    font-weight: bold;
}
</style>

<script>
const default_layout = 'default';

export default {
    computed: {
        layout() {
            return (this.$route.meta.layout || default_layout) + '-layout';
        }
    }
};
</script>
