<template>
    <button class="btn-top-scroll" title="Į viršų" @click="scrollToTop">
        <ArrowUpIcon class="top-scroll__icon" />
    </button>
</template>

<script lang="ts" setup>
import ArrowUpIcon from "./icons/ArrowUp.icon.vue"
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>

<style scoped>
.btn-top-scroll {
    width: 3rem;
    aspect-ratio: 1;
    border-radius: 50%;
    transition: var(--transition);
    background-color: var(--cl-bg-secondary);
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
    z-index: 10;
}

.btn-top-scroll:hover {
    transform: scale(1.05);
}

.top-scroll__icon {
    width: 2rem;
}
</style>
