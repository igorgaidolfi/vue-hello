const { createApp } = Vue
createApp({
    data(){
        return{
            message: 'First message in Vue. Hello!',
            imageName: 'https://cdn.pixabay.com/photo/2018/01/14/14/45/la-rocher-de-la-baume-3081950_1280.jpg'
        }
    }
}).mount('#hello');