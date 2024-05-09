<template>
  <section :class="customSectionClass" class="section">
    <slot name="sectionOutterAddon"></slot>
    <div class="section__container">
      <h3 v-if="sectionHeading" class="section__heading">{{ sectionHeading }}</h3>
      <div class="layout__container" :class="customLayoutClass">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  customSectionClass: {
    type: String,
    required: false
  },
  customLayoutClass: {
    type: String,
    required: false
  },
  sectionHeading: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<style scoped>
.layout__container {
}

.section__container {
  max-width: var(--max-width);
  padding: 0 var(--pd-page-side);
  margin: 0 auto;
}

.section {
  position: relative;
  padding: var(--pd-section-vertical) 0;
}

.section__heading {
  text-transform: uppercase;
  color: inherit;
  font-size: var(--fs-medium);
  margin-bottom: var(--sp-large);
  font-weight: 500;
}
</style>
