import { createApp } from "vue";

import App from "./app.vue";

import NbIcon from "@naibei_ui/components/icon";

const app = createApp(App);
app.use(NbIcon);
app.mount("#app");
