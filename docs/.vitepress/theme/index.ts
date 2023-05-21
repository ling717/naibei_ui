import Theme from 'vitepress/dist/client/theme-default/index.js'
import NbButton from "@naibei_ui/components/button";
export default {
  ...Theme, // 默认主题
  enhanceApp({ app }) {
    app.use(NbButton)
  },
}