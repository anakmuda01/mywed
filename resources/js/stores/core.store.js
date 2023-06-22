import { defineStore } from 'pinia';

import {
    Loading,
} from 'quasar'

import router from "@/router/router";

export const useCoreStore = defineStore('core', {
    state: () => ({ undangan: null, indo_aktif: false, indo_stories: [], en_stories: [] }),
    actions: {
        getCore(id) {
            Loading.show()
            axios.get(`/api/undangan/${id}`)
                .then((response) => {
                    if (!response.data.undangan) {
                        router.push("/");
                        return;
                    }
                    this.undangan = response.data.undangan;
                    this.indo_aktif = response.data.indo_aktif;
                    this.indo_stories = response.data.indo_stories;
                    this.en_stories = response.data.en_stories;
                })
                .finally(() => {
                    Loading.hide();
                })
                .catch((e) => {
                    router.push("/");
                });
        },
    },
})