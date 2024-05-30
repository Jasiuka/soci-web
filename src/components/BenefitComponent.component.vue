<template>
    <div class="benefit">
        <img class="benefit__icon" :src="`./${icon}.svg`" alt="Privalumo ikonėlė" />
        <h4 class="benefit__title">{{ benefitTitle }}</h4>
      <p class="benefit__description">{{ benefitDescription }}</p>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string,
  benefitTitle: string,
  benefitDescription: string
}>()
</script>

<style scoped>
.benefit {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: var(--sp-small);
    align-items: center;
}

.benefit__title {
  font-weight: 500;
  font-size: calc(var(--fs-medium) - 0.5rem);
  min-width: 10rem;
  text-transform: uppercase;
  text-align: center;
}

.benefit__icon {
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: var(--sp-small);
  
}

.benefit__description {
    line-height: 1.8;
  text-align: center;
  font-size: clamp(var(--fs-small),2vw,calc(var(--fs-medium) - 0.7rem));

}

/* 680px */
/* @media only screen and (max-width: 42.5rem) {
  .benefit__text-wrapper {
    flex-direction: column;
    gap: var(--sp-small);
  }

  .benefit__title {
    min-width: unset;
  }
} */
</style>