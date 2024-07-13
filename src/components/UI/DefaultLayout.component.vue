<template>
    <Header />
    <Transition name="scroll">
        <ScrollToTopButton v-if="scrollBtnVisible" />
    </Transition>
    <main ref="main" class="main">
        <Notification />
        <slot></slot>
        <Transition name="modal">
            <component :is="modal" v-if="isModalOpen"></component>
        </Transition>
    </main>
    <Footer v-if="footerRequired" class="footer"></Footer>
</template>

<script lang="ts" setup>
import Header from "@/components/UI/Header.component.vue"
import Footer from "@/components/UI/Footer.component.vue"
import ScrollToTopButton from "@/components/ScrollToTopButton.component.vue"
import Notification from "@components/Notifications/Notification.component.vue"
import {
    computed,
    defineAsyncComponent,
    onMounted,
    onUnmounted,
    ref
} from "vue"
import { useModalStore } from "@/stores/modalStore"
import { storeToRefs } from "pinia"
import { ModalComponents } from "@/types"

withDefaults(
    defineProps<{
        footerRequired?: boolean
    }>(),
    {
        footerRequired: true
    }
)

const main = ref<HTMLElement | null>(null)
const scrollBtnVisible = ref<boolean>(false)
const { isModalOpen, modalComponent } = storeToRefs(useModalStore())

const modal = computed(() => {
    if (modalComponent.value === ModalComponents.NONE) return ""
    return defineAsyncComponent(
        () =>
            import(
                `@components/ModalComponents/${modalComponent.value}.component.vue`
            )
    )
})

function handleScroll() {
    if (main.value) {
        const mainElementHeight = main.value?.scrollHeight
        const percentsToShowButton = 30
        const calculatedHeightToShowButton =
            (mainElementHeight * percentsToShowButton) / 100
        if (window.scrollY > calculatedHeightToShowButton) {
            scrollBtnVisible.value = true
        } else {
            scrollBtnVisible.value = false
        }
    }
}
onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
.scroll-enter-active,
.scroll-leave-active {
    transition: all 0.4s linear;
}

.scroll-leave-to,
.scroll-enter-from {
    transform: translateY(20rem);
}

.scroll-enter-to,
.scroll-leave-from {
    transform: translateY(0);
}

.modal-leave-active {
    transition: all 0.3s ease;
}

.modal-enter-active {
    transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-leave-from,
.modal-enter-to {
    opacity: 1;
}
</style>
