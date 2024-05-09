<template>
  <div class="input-control">
    <input
      v-model.trim="inputVal"
      :id="inputName"
      :name="inputName"
      class="input"
      :type="inputType"
    />
    <label :class="{ moved: inputVal }" :for="inputName" class="label">{{ label }}</label>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
defineProps({
  label: {
    type: String,
    required: true
  },
  inputType: {
    type: String,
    required: false,
    default: 'text'
  },
  inputName: {
    type: String,
    required: true
  }
})

const inputVal = ref('')
</script>

<style scoped>
.input-control {
  display: flex;
  position: relative;
}

.input {
  border: none;
  border-bottom: 2px solid var(--cl-dark);
  min-width: 100%;
  font-family: inherit;
  font-size: var(--fs-small);
}

.input:active,
.input:focus {
  border-color: var(--cl-primary);
  outline: none;
}

.input:focus ~ .label {
  transform: translateY(-20px);
  font-size: calc(var(--fs-small) - 0.2rem);
}

.label {
  position: absolute;
  left: 0;
  transition: var(--transition);
}

.label.moved {
  transform: translateY(-20px);
  font-size: calc(var(--fs-small) - 0.2rem);
}
</style>
