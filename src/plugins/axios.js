import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://console.firebase.google.com/project/vivacontas-d42b6/database/vivacontas-d42b6-default-rtdb/data/~2F?hl=pt-br',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
})