import { ref } from "vue"
import { defineStore } from "pinia"
import { ModalComponents } from "@/types"

export const useModalStore = defineStore("modalStore", () => {
    // STATE
    const isModalOpen = ref<boolean>(false)
    const modalComponent = ref<ModalComponents>(ModalComponents.NONE)

    // ACTIONS
    function setModalComponent(component: ModalComponents) {
        modalComponent.value = component
        openModal()
    }

    function openModal() {
        isModalOpen.value = true
    }

    function closeModal() {
        isModalOpen.value = false
        modalComponent.value = ModalComponents.NONE
    }

    return {
        openModal,
        closeModal,
        setModalComponent,
        isModalOpen,
        modalComponent
    }
})
