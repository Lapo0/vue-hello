const { createApp } = Vue
    console.log(Vue)

    // const createApp = Vue.createApp
    const option = {
        data() {
            return {
                message: 'ciao',
            }
        }
    }
const app = createApp(option)
app.mount('#app')