import Theme from 'vitepress/dist/client/theme-default/index.js'
import NbButton from "@naibei_ui/components/button";
import NbIcon from "@naibei_ui/components/icon"
import "@naibei_ui/theme/src/index.scss";
export default {
  ...Theme, // 默认主题
  enhanceApp({ app }) {
    app.use(NbIcon).use(NbButton)
  },
}