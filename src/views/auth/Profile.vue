<template>
    <div id="profile">
        <h1>Profile</h1>
        <p v-if="getUser">{{user}}</p>
    </div>
</template>

<script>
export default {
    name: 'profile',
    data() {
        return {
            user: null
        };
    },
    computed: {
        getUser() {
            return (this.user = this.$store.getters.user);
        }
    }
};
</script>

<style scoped>
/* Import form styles */
@import '../../assets/css/auth.css';
</style>