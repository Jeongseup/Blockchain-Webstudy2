import { createApp } from "vue";

import App from "./App.vue";
import router from "./router"; // router가 ./router/index.js를 자동으로 찾아서 연결해줌
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
