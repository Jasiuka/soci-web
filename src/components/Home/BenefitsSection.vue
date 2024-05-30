<template>
  <BaseSection
    custom-section-class="benefits"
    custom-layout-class="benefits__layout"
    section-heading="Privalumai"
  >
    <template #default>
      <div class="benefits__wrapper">
        <Benefit v-for="benefit in benefits"
        :benefit-title="benefit.title"
        :benefit-description="benefit.description"
        :icon="benefit.icon"/>
      </div>
    </template>
  </BaseSection>
</template>

<script lang="ts" setup>
import BenefitComponent from '@components/BenefitComponent.vue'
import Benefit from '@components/BenefitComponent.component.vue'

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
    icon: 'settings-icon',
    title: 'Efektyvumas',
    description:
      'Skaitmenizuodami savanorystės apskaitos procesus mūsų platformoje, mažiname darbo krūvį mokytojams bei ne pelno siekiančioms organizacijoms.'
  }
]
</script>

<style scoped>

.benefits__wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, clamp(18rem,30vw,35rem));
  column-gap: var(--sp-large);
  grid-template-rows: repeat(2, 1fr);
  justify-content: space-between;
  row-gap: var(--sp-large);
}
:deep(.benefits__layout) {
  display: flex;
  flex-direction: column;

}

/* 680px */
@media only screen and (max-width: 42.5rem) {
  :deep(.benefits__layout) {
  align-items: center;
 } 
}
</style>
