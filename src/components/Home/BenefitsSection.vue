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
      'Čia galite susirasti tinkamiausią savanorystės veiklą ar savanorį keliais mygtukų paspaudimais ir matyti visą Jums reikalingą informaciją vienoje vietoje. '
  },
  {
    icon: 'autumn-leaf-icon',
    title: 'Tvarumas',
    description:
      'Mūsų sistemos dėka, popierinių dokumentų atsisakymas tampa realybe – visi reikalingi duomenys yra perkeliami į elektroninę erdvę ir ten apdorojami.'
  },
  {
    icon: 'clock-icon',
    title: 'Spartumas',
    description:
      'Šioje sistemoje, mes apjungiame visas tris į savanorystę įstraukusias šalis, todėl duomenų apsikeitimas tampa lengvesnis ir greitesnis.'
  },
  {
    icon: 'setting-icon',
    title: 'Efektyvumas',
    description:
      'Skaitmenizuodami savanorystės apskaitos procesus mūsų platformoje, mažiname darbo krūvį mokytojams bei ne pelno siekiančioms organizacijoms.'
  }
]
</script>

<style scoped>
:deep(.benefits__layout) {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  row-gap: var(--sp-medium);
}
</style>
