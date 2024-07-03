import { Themes } from "@/types"
export function changeTheme(newTheme: Themes) {
    const themeFile = document.getElementById("theme-link")

    if (newTheme === "light") {
        themeFile?.setAttribute("href", "/src/assets/styles/themes/light.css")
    } else {
        themeFile?.setAttribute("href", "/src/assets/styles/themes/dark.css")
    }
}
