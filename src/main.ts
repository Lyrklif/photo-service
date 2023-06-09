import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import "./assets/styles/main.scss";
import App from "./App.vue";
import router from "./router/index";
import "virtual:svg-icons-register";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPersist);

app.use(pinia);
app.use(router);

app.mount("#app");
