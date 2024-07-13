import { ref } from "vue"
import { defineStore } from "pinia"

type NotificationType = "ERROR" | "WARNING" | "SUCCESS"

interface INotification {
    type: NotificationType
    description: string
    id: number
}
let timer: ReturnType<typeof setInterval> | null

export const useNotificationsStore = defineStore("notificationsStore", () => {
    // STATE
    const activeNotification = ref<INotification | null>()

    // ACTIONS

    function newNotification(type: NotificationType, description: string) {
        const uniqueId = new Date().getUTCMilliseconds()
        const notification = {
            type,
            description,
            id: uniqueId
        }
        if (activeNotification.value) {
            activeNotification.value = null
        }
        activeNotification.value = notification

        if (timer) {
            clearInterval(timer)
            timer = null
        }

        if (!timer) {
            timer = setInterval(() => {
                closeNotification()
                if (timer) {
                    clearInterval(timer)
                    timer = null
                }
            }, 2000)
        }
    }

    function closeNotification() {
        activeNotification.value = null
    }

    return { newNotification, activeNotification, closeNotification }
})
