const { createApp } = Vue

    // const createApp = Vue.createApp
    const option = {
        data() {
            return {
                titol: 'un messaggio',
            }
        }
    }

const app = createApp(option)
app.mount('#app')