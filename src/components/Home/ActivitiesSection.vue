<template>
  <BaseSection
    section-heading="Veiklos"
    custom-section-class="activities"
    custom-layout-class="activities__layout"
  >
    <template #default>
      <TheFilter button-text="Ieškoti" :selection-data="selectionData" />
      <div class="activities-list">
        <BaseCard
          v-for="activity in testData.activities"
          :image="activity.image"
          :card-title="activity.title"
          custom-card-class="activities-list__card"
        >
          <div class="acvtivities-list__card-params">
            <div class="activities-list__param" v-for="param in activity.params">
              <span>{{ param.heading }}:</span>
              <span
                class="activities-list__param-value"
                :class="{ [getFreeSpacesColor(param.value)]: param.heading.includes('vietos') }"
                >{{ param.value }}</span
              >
            </div>
          </div>
        </BaseCard>
      </div>
    </template>
  </BaseSection>
</template>

<script lang="ts" setup>
import type { Option, Select } from '@/types'
import TheFilter from '../TheFilter.vue'
import BaseCard from '@/components/Base/BaseCard.vue'
import { testData } from '@/data'
import { computed } from 'vue'

const selectionData: Select[] = [
  { name: 'city', label: 'Miestas', options: [{ display: 'Visi miestai', value: 'all_city' }] },
  {
    name: 'type',
    label: 'Savanorystės tipas',
    options: [{ display: 'Visi tipai', value: 'all_type' }]
  },
  {
    name: 'form',
    label: 'Dalyvavimo forma',
    options: [{ display: 'Visos formos', value: 'all_form' }]
  },
  {
    name: 'field',
    label: 'Veiklos sritis',
    options: [{ display: 'Visos sritys', value: 'all_field' }]
  }
]

const options: Option[] = [
  { display: 'Visi miestai', value: 'all_city' },
  { display: 'Visi tipai', value: 'all_type' },
  { display: 'Visos formos', value: 'all_form' },
  { display: 'Visos sritys', value: 'all_field' }
]

function getFreeSpacesColor(valueString: string) {
  const valueArray = valueString.split('/')
  const availableSpaces = valueArray[0]
  const spaces = valueArray[1]

  const percent = parseInt(availableSpaces) / parseInt(spaces)

  let classToAdd = ''

  if (percent < 0.3) {
    classToAdd = 'low'
  } else if (percent < 0.6 && percent > 0.3) {
    classToAdd = 'medium'
  } else if (percent > 0.6) {
    classToAdd = 'alot'
  }

  return classToAdd
}
</script>

<style scoped>
:deep(.activities__layout) {
  display: flex;
  flex-direction: column;
  gap: var(--sp-large);
}

.activities-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: var(--sp-medium);
  grid-auto-rows: 1fr;
}

.acvtivities-list__card-params {
  display: flex;
  flex-direction: column;
  gap: calc(var(--sp-small) - 0.5rem);
}

.activities-list__param {
  display: flex;
  gap: calc(var(--sp-small) - 0.6rem);
}

:deep(.activities-list__card) {
  cursor: pointer;
  border: 2px solid transparent;
}

:deep(.activities-list__card):hover {
  border: 2px solid var(--cl-primary);
}

.activities-list__param-value.low {
  color: red;
}

.activities-list__param-value.medium {
  color: orange;
}

.activities-list__param-value.alot {
  color: darkgreen;
}
</style>
