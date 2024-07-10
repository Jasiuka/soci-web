<template>
    <div ref="modalElement" class="modal">
        <div class="modal__outer">
            <div class="modal__inner">
                <div class="modal__inner-top">
                    <h3>{{ modalTitle }}</h3>
                    <CustomButton
                        class="modal__close-btn"
                        button-text="X"
                        button-title="Uždaryti langą"
                        button-style="no_bg"
                        @click="closeModal"
                        >X</CustomButton
                    >
                </div>
                <div class="modal__content">
                    <slot></slot>
                </div>
                <div class="modal__control">
                    <slot name="control"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"
import { useModalStore } from "@/stores/modalStore"
const { closeModal } = useModalStore()
const modalElement = ref<HTMLElement | null>(null)

defineProps<{ modalTitle: string }>()

onMounted(() => {
    modalElement.value?.addEventListener("click", handleModalClick)
})

onUnmounted(() => {
    modalElement.value?.removeEventListener("click", handleModalClick)
})

function handleModalClick(e: Event) {
    const target = e.target as HTMLElement
    if (target.className !== "modal") {
        return
    }
    closeModal()
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--cl-overlay);
    z-index: 10;
}

@supports (backdrop-filter: blur()) {
    .modal {
        backdrop-filter: blur(3px);
    }
}

.modal__outer {
    max-width: var(--max-width);
    border-radius: var(--border-radius);
    background-color: var(--cl-bg-primary);
    padding-right: 5px;
    padding-top: 5px;
}

.modal__inner {
    max-height: 70vh;
    display: flex;
    flex-direction: column;
    padding: var(--pd-medium);
    gap: var(--sp-medium);
}

.modal__inner-top {
    display: flex;
}

.modal__inner-top > h3 {
    flex: 1;
}

.modal__content {
    flex: 1;
    overflow-y: auto;
}

.modal__control {
    display: flex;
    gap: var(--sp-medium);
}
</style>
