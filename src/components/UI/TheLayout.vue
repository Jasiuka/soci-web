<template>
  <TheHeader />
  <Transition name="scroll">
    <ScrollToTopButton v-if="scrollBtnVisible" />
  </Transition>
  <main ref="main" class="main">
    <slot></slot>
  </main>
  <TheFooter v-if="footerRequired" class="footer"></TheFooter>
</template>

<script lang="ts" setup>
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
import ScrollToTopButton from '../ScrollToTopButton.vue'
import { onMounted, onUnmounted, ref } from 'vue';

const scrollBtnVisible = ref<boolean>(false)
defineProps({
  footerRequired: {
    type: Boolean,
    required: false,
    default: true
  }
})

const main = ref<HTMLElement | null>(null);

function handleScroll() {
  if(main.value) {
    const mainElementHeight = main.value?.scrollHeight
    const percentsToShowButton = 30;
    const calculatedHeightToShowButton = mainElementHeight * percentsToShowButton / 100
    if(window.scrollY > calculatedHeightToShowButton) {
      scrollBtnVisible.value = true
    } else {
      scrollBtnVisible.value = false
      
    }
  }
}


onMounted(() => {
window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>

.scroll-enter-active, .scroll-leave-active {
  transition: all 0.4s linear;
}

.scroll-leave-to, .scroll-enter-from {
  transform: translateY(20rem);
}

.scroll-enter-to, .scroll-leave-from {
  transform: translateY(0);
}
</style>
