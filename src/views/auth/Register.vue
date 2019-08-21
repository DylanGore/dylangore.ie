<template>
    <div id="register">
        <router-link to="/login" id="backlink">
            <span class="iconify" data-icon="fa:arrow-left"></span>
            Back to login
        </router-link>
        <h1>Register</h1>
        <form id="registerForm" @submit.prevent="register" method="post">
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
            <div class="inputGroup">
                <label for="passwordConfirm">Confirm Password</label>
                <!--prettier-ignore prettyhtml-ignore -->
                <input id="passwordConfirm" v-model="passwordConfirm" name="passwordConfirm" type="password" required />
            </div>
            <input type="submit" value="Create Account" />
        </form>
    </div>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            error: null,
            email: null,
            password: null,
            passwordConfirm: null
        };
    },
    methods: {
        register() {
            this.error = null;

            if (this.email && this.password && this.passwordConfirm) {
                if (this.password === this.passwordConfirm) {
                    this.$store.dispatch('userRegister', {
                        email: this.email,
                        password: this.password
                    });
                } else {
                    this.error = 'Passwords do not match!';
                    this.password = null;
                    this.passwordConfirm = null;
                }
            } else {
                this.error = 'Please fill all fields!';
            }
        }
    },
    computed: {
        authError() {
            if (this.error) {
                return this.error;
            }
            return this.$store.getters.authError;
        }
    }
};
</script>

<style scoped>
/* Import form styles */
@import '../../assets/css/form.css';

#registerForm {
    width: 35vw;
}

a#backlink {
    justify-self: left;
    align-self: center;
    margin: 0;
    padding: 2em 0;
    text-decoration: none;
    color: #000;
}

a#backlink:hover {
    color: #888888;
}

@media screen and (max-width: 767px) {
    #registerForm {
        width: 100%;
    }
}
</style>
