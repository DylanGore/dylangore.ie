<template>
    <div id="404">
        <h1>Error 404 - Not Found</h1>
        <p>The content you are looking for could not be found.</p>
        <p>
            If you believe that this is an error, please
            <router-link to="/contact">contact me</router-link>.
        </p>
        <br />
        <router-link to="/" id="home-button">
            <span class="iconify" data-icon="mdi:home"></span> Go to Home
        </router-link>
    </div>
</template>

<script>
export default {
    name: '404'
};
</script>

<style scoped>
a#home-button {
    margin: 0;
    text-decoration: none;
    color: #000;
}

a#home-button:hover {
    color: #888888;
}
</style>