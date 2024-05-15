<template>
  <div class="select-wrapper">
    <span class="select-name">{{ name }}</span>
    <select class="select">
      <option :value="option.value" v-for="option in optionsList" :key="option.value + ' ' + option.display">
        {{ option.display }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import type { Option } from '@/types'
import type { PropType } from 'vue'
defineProps({
  name: {
    type: String,
    required: true
  },
  optionsList: {
    type: Array as PropType<Option[]>,
    required: true
  }
})
</script>

<style scoped>
.select-wrapper {
  display: flex;
  flex-direction: column;
  gap: calc(var(--sp-small) - 0.5rem);
}

select {
  font-size: var(--fs-small);
}
</style>
