import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || null,
        storedUser: localStorage.getItem('user') || null
    }),
    getters: {
        user: state => {
            if (!!state.storedUser) {
                return JSON.parse(state.storedUser);
            }
            return state.storedUser;
        },
        userIsAuth: state => !!state.token
    },
    actions: {
        storeLoggedInUser(token, user) {
            const _this = this;

            // Save the token to localStorage
            localStorage.setItem('token', token);

            // Save the user to localStorage
            const stringifiedUser = JSON.stringify(user);
            localStorage.setItem('user', stringifiedUser);

            // Save the token and user to the store ktate
            _this.token = token;
            _this.storedUser = stringifiedUser;
        }
    }
});