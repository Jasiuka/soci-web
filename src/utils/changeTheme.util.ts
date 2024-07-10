import { Themes } from "@/types"
export function changeTheme(newTheme: Themes) {
    const themeFile = document.getElementById("theme-link")
    console.log(themeFile)

    if (newTheme === "light") {
        themeFile?.setAttribute("href", "/themes/light.css")
    } else {
        themeFile?.setAttribute("href", "/themes/dark.css")
    }
}
