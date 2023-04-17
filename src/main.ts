import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/styles/main.scss";
import App from "./App.vue";
import router from "./router/index";
import "virtual:svg-icons-register";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
