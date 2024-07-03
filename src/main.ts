import "@assets/styles/base.css"
import "@assets/styles/common.css"

import { createApp } from "vue"
import { createPinia } from "pinia"
import BaseSection from "@/components/Base/BaseSection.component.vue"
import TheLayout from "@/components/UI/DefaultLayout.component.vue"
import CustomButton from "@/components/Custom/CustomButton.component.vue"
import CustomInputControl from "@/components/Custom/CustomInputControl.component.vue"
import CustomSelect from "@/components/Custom/CustomSelect.component.vue"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(createPinia())
app.use(router)
    .component("TheLayout", TheLayout)
    .component("BaseSection", BaseSection)
    .component("CustomButton", CustomButton)
    .component("InputControl", CustomInputControl)
    .component("CustomSelect", CustomSelect)

app.mount("#app")
