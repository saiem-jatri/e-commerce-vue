import { createApp } from 'vue'
import './style.css'
import router from './router/index.js'
import App from './App.vue'
import './index.css'
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('Password', Password);
app.mount('#app')

