import { createApp } from "vue";

import App from "./app.vue";

import NbIcon from "@naibei_ui/components/icon";
import "@naibei_ui/theme/src/index.scss";

const app = createApp(App);
app.use(NbIcon);
app.mount("#app");
