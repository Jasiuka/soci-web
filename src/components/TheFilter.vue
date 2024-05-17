<template>
  <div class="filter">
    <CustomInputControl input-name="activity_search" label="Raktinis žodis" />
    <CustomSelectControl
      v-for="select in selectionData"
      :name="select.label"
      :options-list="select.options"
      :key="select.label"
    />
    <CustomButton
      custom-class="filter__button"
      button-text="Ieškoti"
      button-title="Ieškoti pagal filtrus"
    />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Select } from '@/types'
import CustomSelectControl from './Custom/CustomSelectControl.vue'
import CustomInputControl from './Custom/CustomInputControl.vue'
import CustomButton from './Custom/CustomButton.vue'

defineProps({
  selectionData: {
    type: Array as PropType<Select[]>,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.filter {
  /* display: flex;
  gap: var(--sp-medium);
  align-items: end;
  flex-wrap: wrap; */

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: var(--sp-medium);
  align-items: end;
  grid-auto-rows: 1fr;
}

/* .filter > * {
  flex: 1;
} */

:deep(.filter__button) {
}
</style>
