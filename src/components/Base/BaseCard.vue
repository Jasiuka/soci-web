<template>
  <div class="base-card" :class="customCardClass">
    <img class="base-card__image" :src="`./${props.image}.jpg`" />
    <h4 class="base-card__title">{{ cardTitle }}</h4>
    <div class="base-card__details-list">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  cardTitle: {
    type: String,
    required: true
  },
  customCardClass: {
    type: String,
    required: false
  }
})

const getImageUrl = computed(() => {
  return new URL(`/src/assets/logo/${props.image}.jpg`, import.meta.url).href
})
</script>

<style scoped>
.base-card {
  display: flex;
  flex-direction: column;
  gap: var(--sp-small);
  border-radius: var(--border-radius);

  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: var(--pd-medium);
  transition: var(--transition);
}

.base-card__image {
  object-fit: contain;
  /* width: 80%; */
  height: 8rem;
  align-self: center;
}

.base-card__title {
  font-size: calc(var(--fs-medium) - 0.5rem);
  flex: 1;
}
</style>
