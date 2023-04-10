

import {createApp} from "vue"
import SmartyUI from "./entry"

// createApp(JSXButton).mount('#app')
createApp({
    template:`
        <div>
        <SButton color="blue"   icon="search" >1</SButton>
        <SButton color="green" icon="edit">2</SButton>
        <SButton color="gray"  icon="check">3</SButton>
        <SButton color="yellow"  icon="message">4</SButton>
        <SButton color="red"  icon="delete">5</SButton>
        </div>
    `
})
.use(SmartyUI)
.mount("#app");

