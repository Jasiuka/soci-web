<template>
    <button @click="scrollToTop" class="btn-top-scroll" title="Į viršų">
        <img class="top-scroll__icon" src="/src/assets/icons/chevron-top-icon.svg"/>
    </button>
</template>

<script lang="ts" setup>

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'})
}

</script>


<style scoped>
.btn-top-scroll {
    width: 3rem;
    aspect-ratio: 1;
    border-radius: 50%;
    transition: var(--transition);
    background-color: var(--cl-dark);
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