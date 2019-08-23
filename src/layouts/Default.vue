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

<style scoped>
div#app {
    height: 100%;
    min-height: 100%;
}

div.wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
}

main#page-main {
    padding: 1em 2em;
    height: 100%;
}

div#projectList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
}

div#projectList article {
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.25);
    transition: 0.3s;
}

div#projectList article div.content {
    padding: 0 0.5em 0.5em 0.5em;
    margin: 0;
    height: 100%;
    padding-bottom: 1em;
}

div#projectList article h3 {
    letter-spacing: 0.1em;
    margin: 0;
}

div#projectList article p {
    font-weight: 300;
    overflow: hidden;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.btn-project {
    background-color: var(--blue);
    font-weight: 300;
    color: #fff;
    padding: 0.4em;
    text-decoration: none;
}

.btn-project:hover {
    background-color: var(--dark-blue);
}

div#projectList article img {
    width: 100%;
    margin: 0;
}

footer#page-footer {
    font-size: 0.8em;
    background: #213558;
    color: #fff;
    padding: 0 0.5em;
    text-align: center;
}

@media screen and (max-width: 790px) {
    /* Up to Tablet Viewport */
    main#page-main {
        padding: 0 1em;
    }

    div#projectList {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1em;
        margin-bottom: 1em;
    }
}
</style>
