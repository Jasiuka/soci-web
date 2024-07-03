import { ref } from "vue"
import { defineStore } from "pinia"
import { Themes } from "@/types"
import { changeTheme } from "@/utils/changeTheme.util"

export const useSettingsStore = defineStore("settings", () => {
    // STATE
    const theme = ref<Themes>(Themes.LIGHT)

    // ACTIONS
    function setTheme(newTheme: Themes) {
        theme.value = newTheme
        changeTheme(newTheme)
        localStorage.setItem("settings", newTheme)
    }

    function getThemeFromLocal() {
        const theme = localStorage.getItem("settings")
        if (theme !== "light" && theme !== "dark") {
            setTheme("light" as Themes)
            return
        }
        setTheme(theme as Themes)
    }

    return { theme, setTheme, getThemeFromLocal }
})
