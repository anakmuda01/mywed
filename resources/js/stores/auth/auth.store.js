import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../../router/router';

export const useAuthStore = defineStore('auth', {
    state: () => ({ user: null }),
    actions: {
        getUser() {
            axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('Gubzwp5y9SC8oL9Q0aAi')}`;
            return new Promise((resolve, reject) => {
                axios
                    .get("/api/v1/user-logged")
                    .then((response) => {
                        if (response.data) {
                            this.user = response.data;
                            resolve(true)
                        } else {
                            resolve(false)
                        }
                    })
                    .catch((errors) => {
                        localStorage.removeItem("Gubzwp5y9SC8oL9Q0aAi");
                        router.push("/login");
                        if (errors.response.status == "500" || errors.response.status == "429") {
                            router.push("/server-error");
                        }
                        reject(errors.response.status);
                    })
            })
        },
        logOut() {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/v1/logout")
                    .then((response) => {
                        if (response.data) {
                            localStorage.removeItem("Gubzwp5y9SC8oL9Q0aAi"); //remove user token when logout
                            router.push("/login");
                            setTimeout(() => {
                                location.reload();
                            }, 0); // push user to login page
                            resolve(true)
                        } else {
                            resolve(false)
                        }
                    })
                    .catch((errors) => {
                        router.push("/");
                        if (errors.response.status == "500" || errors.response.status == "429") {
                            router.push("/server-error");
                        }
                        reject(errors.response.status);
                    })
            })
        }
    },
})