<template>
    <Transition name="notification">
        <div
            v-if="activeNotification"
            :key="activeNotification.id"
            :class="activeNotification?.type.toLowerCase()"
            class="notification"
        >
            <button
                class="notification__btn"
                @click="notifactionsStore.closeNotification"
            >
                X
            </button>
            <span class="notification__description">{{
                activeNotification?.description
            }}</span>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
import { useNotificationsStore } from "@/stores/notificationStore"
import { storeToRefs } from "pinia"

const notifactionsStore = useNotificationsStore()
const { activeNotification } = storeToRefs(notifactionsStore)
</script>

<style scoped>
.notification {
    width: 100%;
    position: fixed;
    top: 0;
    color: var(--cl-extra-grey);
    display: flex;
    overflow: hidden;
    align-items: center;
    z-index: 30;
}

.notification__btn {
    background-color: transparent;
    padding: 6px;
}

.notification__description {
    flex: 1;
    text-align: center;
    font-size: var(--fs-small);
}

.notification.error {
    background-color: var(--cl-red);
}

.notification.error .notification__btn:hover {
    background-color: var(--cl-red-light);
}

.notification.warning {
    background-color: var(--cl-yellow);
}

.notification.warning .notification__btn:hover {
    background-color: var(--cl-yello-light);
}

.notification.success {
    background-color: var(--cl-green);
}

.notification.success .notification__btn:hover {
    background-color: var(--cl-green-light);
}

.notification-enter-active,
.notification-leave-active {
    transition: transform 0.3s linear;
}

.notification-enter-from,
.notification-leave-to {
    transform: translateY(-4rem);
}

/* 500px */
@media only screen and (max-width: 31.25rem) {
    .notification__description {
        font-size: calc(var(--fs-small) - 0.2rem);
    }
}
</style>
