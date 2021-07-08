import { createApp } from "vue";

import App from "./App.vue";
import router from "./router"; // router가 ./router/index.js를 자동으로 찾아서 연결해줌
import store from "./store/store";
// import ApiMixin from "./api";
// .mixin(ApiMixin)

createApp(App).use(store).use(router).mount("#app");

// window.Kakao.init("e430d78646920375686b1e9b9f9bfd37");
// window.Kakao.isInitialized();
// console.log("Is is kakao initialized?", window.Kakao.isInitialized());
// window.Kakao.init("4c61c24653b24c8078dc88d3f6d7b1f3");
// window.Kakao.isInitialized();
