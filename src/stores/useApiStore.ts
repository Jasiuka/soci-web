import axios, { type AxiosInstance } from "axios"

import { ref } from "vue"
import { defineStore } from "pinia"
import { type User } from "@/types"

export const useApiStore = defineStore("api", () => {
    // STATE
    const user = ref<User | null>(null)

    // ACTIONS

    async function receiveData(path: string): Promise<any> {
        try {
            const axiosInstance = createInstance()
            const { data } = await axiosInstance.get(path)
            if (data) {
                return data
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
            }
        }
    }

    // HELPER FUNCTIONS

    function createInstance(): AxiosInstance {
        return axios.create({
            baseURL: "https://jsonplaceholder.typicode.com",
            timeout: 1000
        })
    }

    return { receiveData }
})
