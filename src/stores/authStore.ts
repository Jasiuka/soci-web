import { ref } from "vue"
import { defineStore } from "pinia"
import { type User } from "@/types"

export const useAuthStore = defineStore("auth", () => {
    // STATE
    const user = ref<User | null>(null)

    // ACTIONS
    function setUser(newUser: User) {
        user.value = newUser
    }

    function unsetUser() {
        user.value = null
    }

    return { setUser, unsetUser, user }
})
