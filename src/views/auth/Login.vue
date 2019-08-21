<template>
    <div id="login">
        <h1>Login</h1>
        <form id="loginForm" @submit.prevent="login" method="post">
            <div class="formError" v-if="authError">
                <p>{{ authError }}</p>
            </div>
            <div class="inputGroup">
                <label for="email">E-mail Address</label>
                <!-- prettier-ignore -->
                <input id="email" v-model="email" name="email" type="email" required />
            </div>
            <div class="inputGroup">
                <label for="password">Password</label>
                <!-- prettier-ignore -->
                <input id="password" v-model="password" name="password" type="password" required />
            </div>
            <input type="submit" value="Login" />
        </form>
        <!-- prettier-ignore prettyhtml-ignore  -->
        <!-- <p>
            Don't have an account? <router-link to="/register">Register now</router-link>.
        </p>-->
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            email: null,
            password: null
        };
    },
    methods: {
        login() {
            this.error = null;

            if (this.email && this.password) {
                this.$store.dispatch('userLogin', {
                    email: this.email,
                    password: this.password
                });
            } else {
                this.error = 'Please fill all fields!';
            }
        }
    },
    computed: {
        authError() {
            return this.$store.getters.authError;
        }
    }
};
</script>

<style scoped>
/* Import form styles */
@import '../../assets/css/form.css';

#loginForm {
    width: 35vw;
}

@media screen and (max-width: 790px) {
    #loginForm {
        width: 100%;
    }
}
</style>
