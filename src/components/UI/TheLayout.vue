<template>
  <TheHeader />
  <ScrollToTopButton v-if="scrollBtnVisible" />
  <main ref="main" class="main">
    <slot></slot>
  </main>
  <TheFooter v-if="footerRequired" class="footer"></TheFooter>
</template>

<script lang="ts" setup>
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
import ScrollToTopButton from '../ScrollToTopButton.vue'
import { onMounted, ref } from 'vue';

const scrollBtnVisible = ref<boolean>(false)
defineProps({
  footerRequired: {
    type: Boolean,
    required: false,
    default: true
  }
})

const main = ref(null);





</script>

<style scoped></style>
