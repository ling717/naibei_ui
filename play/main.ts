import { createApp } from "vue";

import App from "./app.vue";

import NbIcon from "@naibei_ui/components/icon";
import "@naibei_ui/theme/src/index.scss";
import NbButton from "@naibei_ui/components/button";

const app = createApp(App);
app.use(NbIcon).use(NbButton);
app.mount("#app");
