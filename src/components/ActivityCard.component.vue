<template>
  <RouterLink :to="routeTo" class="base-card" :class="customCardClass">
    <img class="base-card__image" :src="`./${props.image}.jpg`" />
    <h4 class="base-card__title">{{ cardTitle }}</h4>
    <div class="base-card__details-list">
      <slot></slot>
    </div>
  </RouterLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  image: string,
  cardTitle: string,
  customCardClass?: string,
  routeTo: string,
}>()

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

/* 350px */
@media only screen and (max-width:21.875rem) {
  .base-card__image {
  object-fit: contain;
  height: 5rem;
  align-self: center;
}
}
</style>
