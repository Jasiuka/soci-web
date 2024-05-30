<template>
  <div class="filter" :id="customId">
    <InputControl input-name="activity_search" label="Raktinis žodis" />
    <SelectControl
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
import type { Select } from '@/types'
defineProps<{
  selectionData: Select[],
  buttonText: string,
  customId?: string
}>()
</script>

<style scoped>
.filter {

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: var(--sp-medium);
  align-items: end;
  grid-auto-rows: 1fr;
}

</style>
