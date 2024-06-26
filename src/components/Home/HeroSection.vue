<template>
  <BaseSection custom-section-class="hero" custom-layout-class="hero__layout">
    <template #sectionOutterAddon>
      <div class="hero-shape"></div>
    </template>
    <template #default>
      <div class="hero-heading--wrapper">
        <h1 class="heading">Tavo savanorystės kelionė prasideda čia</h1>
        <h2 class="sub-heading">
          Platforma, kurioje patogiai, greitai ir lengvai rasite sau tinkamiausią savanorystės
          veiklą
        </h2>
        <CustomButton
      custom-class="hero__button"
      button-text="Pradėti paiešką"
      button-title="Pradėti savanorystės veiklų paiešką"
      @click="moveToActivities"
    />
      </div>
      <img class="hero-illustration" src="@/assets/illustrations/travel-green_no-bg.svg" />
    </template>
  </BaseSection>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

function moveToActivities() {
  router.push("activities")
}
</script>

<style scoped>
.hero {
  min-height: 60dvh;
  display: flex;
  align-items: end;
}

.hero-heading--wrapper {
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
.heading {
  font-size: clamp(var(--fs-medium), 3vw, var(--fs-heading));
  margin-bottom: var(--sp-small);
}

.sub-heading {
  font-size: clamp(var(--fs-small), 1vw, calc(var(--fs-large) - 0.4rem));
  margin-bottom: var(--sp-small);
}
:deep(.hero__layout) {
  display: flex;
  align-items: end;
}

.hero-illustration {
  width: 50%;
  min-width: 16rem;
}

.hero-shape {
  position: absolute;
  display: inline-block;
  content: '';
  min-width: 100%;
  background-color: var(--cl-primary);
  height: 7rem;
  top: calc(100% - var(--pd-section-vertical));
  clip-path: polygon(0 0, 100% 0, 100% 21%, 0% 100%);
}

@media only screen and (max-width: 56.25rem) {
  :deep(.hero__layout) {
    flex-direction: column;
    gap: var(--sp-large);
    align-items: end;
  }

  .hero-illustration {
    align-self: center;
  }
}
</style>
