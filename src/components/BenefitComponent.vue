<template>
  <div class="benefit">
    <div class="benefit__icon-wrapper">
      <img class="benefit__icon" :src="`/src/assets/icons/${icon}.svg`" alt="Privalumo ikonėlė" />
    </div>
    <div class="benefit__text-wrapper">
      <!-- TITLE -->

      <h4 class="benefit__title">{{ benefitTitle }}</h4>
      <!-- TEXT -->
      <p class="benefit__description">{{ benefitDescription }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  benefitTitle: {
    type: String,
    required: true
  },
  benefitDescription: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.benefit {
  display: flex;
  align-items: center;
}

.benefit__icon-wrapper {
  position: relative;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  margin-right: -1.5rem;
  z-index: 3;
  border-left: 3px solid var(--cl-primary);
}

.benefit__text-wrapper {
  color: var(--cl-dark);
  border-radius: var(--border-radius);
  align-self: stretch;
  flex: 1;
  display: flex;
  align-items: center;
  padding: var(--pd-small) var(--pd-medium);
  padding-left: calc(var(--pd-medium) + 0.5rem);
  background: rgb(91, 181, 91);
  background: linear-gradient(90deg, rgba(91, 181, 91, 1) 0%, rgba(255, 255, 255, 1) 100%);
}

.benefit__title {
  font-weight: 500;
  font-size: calc(var(--fs-medium) - 0.5rem);
  min-width: 10rem;
}

.benefit__icon {
  width: 2.5rem;
  height: 2.5rem;
}

/* 680px */
@media only screen and (max-width: 42.5rem) {
  .benefit__text-wrapper {
    flex-direction: column;
    gap: var(--sp-small);
  }

  .benefit__title {
    min-width: unset;
  }
}
</style>
