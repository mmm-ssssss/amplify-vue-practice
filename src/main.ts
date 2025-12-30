import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import router from "./router";
import { createPinia } from "pinia";

Amplify.configure(outputs);

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount("#app");
