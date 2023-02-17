const { createApp } = Vue

    // const createApp = Vue.createApp
    const option = {
        data() {
            return {
                titol: 'un messaggio',
                img: 'https://www.tuttogreen.it/wp-content/uploads/2017/10/shutterstock_518591449-700x467.jpg'
            }
        }
    }
    
const app = createApp(option)
app.mount('#app')