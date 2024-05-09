<template>
  <TheHeader />
  <main class="main">
    <slot></slot>
  </main>
  <TheFooter v-if="footerRequired" class="footer"></TheFooter>
</template>

<script lang="ts" setup>
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
defineProps({
  footerRequired: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>

<style scoped></style>
