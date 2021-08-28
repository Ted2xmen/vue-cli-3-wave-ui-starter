import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

const app = createApp(App);

app.use(store)
app.use(router)

new WaveUI(app, {
  
     colors: { primary: '#19998f' } 


  })

app.mount('#app')




