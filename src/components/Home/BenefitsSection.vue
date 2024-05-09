<template>
  <BaseSection
    custom-section-class="benefits"
    custom-layout-class="benefits__layout"
    section-heading="Privalumai"
  >
    <template #default>
      <BenefitComponent
        v-for="benefit in benefits"
        :benefit-title="benefit.title"
        :benefit-description="benefit.description"
        :icon="benefit.icon"
      />
    </template>
  </BaseSection>
</template>

<script lang="ts" setup>
import BenefitComponent from '../BenefitComponent.vue'

const benefits: { icon: string; title: string; description: string }[] = [
  {
    icon: 'touchscreen-icon',
    title: 'Paprastumas',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum est sed ex deserunt amet neque laboriosam error, eos nihil inventore. Quisquam mollitia in'
  },
  {
    icon: 'autumn-leaf-icon',
    title: 'Tvarumas',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, inventore sunt illo unde ea animi neque error aperiam accusamus. Provident voluptate voluptas rerum itaque incidunt nihil ut. Provident, quisquam explicabo.'
  },
  {
    icon: 'touchscreen-icon',
    title: 'Paprastumas',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum est sed ex deserunt amet neque laboriosam error, eos nihil inventore. Quisquam mollitia in'
  },
  {
    icon: 'autumn-leaf-icon',
    title: 'Tvarumas',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, inventore sunt illo unde ea animi neque error aperiam accusamus. Provident voluptate voluptas rerum '
  }
]
</script>

<style scoped>
/* :deep(.benefits__layout) {
  display: flex;
  flex-direction: column;
  gap: var(--sp-medium);
} */
:deep(.benefits__layout) {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  row-gap: var(--sp-medium);
}
</style>
