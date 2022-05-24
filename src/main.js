import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";
import "./index.css";

//  initializing the app
const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount("#app");