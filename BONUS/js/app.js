const { createApp } = Vue

    // const createApp = Vue.createApp
    const option = {
        data() {
            return {
                titol: 'Scegli un numero da 1 a 8',
                img: 'https://www.tuttogreen.it/wp-content/uploads/2017/10/shutterstock_518591449-700x467.jpg',
                text: 'ciao',
            }
        },
        methods: {
            saluta: function () {
                console.log('Buongiorno')
            },
        },
    }
    
const app = createApp(option)
app.mount('#app')