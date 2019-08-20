import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';

// Import Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        authError: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setAuthError(state, payload) {
            state.authError = payload;
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        authError(state) {
            return state.authError;
        }
    },
    actions: {
        userLogin({ commit }, payload) {
            // prettier-ignore
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(cred => {
                commit('setUser', firebase.auth().currentUser);
                commit('setAuthError', null);
                router.push({name: 'home'});
            }).catch(err => {
                commit('setAuthError', err.message);
            });
        },
        userLogout({ commit }) {
            // prettier-ignore
            firebase.auth().signOut().then(res => {
                commit('setUser', null);
                commit('setAuthError', null);
            }).catch(err => {
                commit('setAuthError', err.message);
                alert(err.message);
            });
        },
        userRegister({ commit }, payload) {
            // prettier-ignore
            firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password).then(cred => {
                commit('setUser', cred.user);
                commit('setAuthError', null);

                // Redirect to homepage
                router.push({name: 'home'});

            }).catch(err => {
                commit('setAuthError', err.message);
                commit('setUser', null)
            });
        }
    }
});
