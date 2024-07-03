<template>
    <div class="two-options-select">
        <div v-for="option in options" :key="option.value" class="option">
            <input
                :id="option.value"
                type="radio"
                :name="name"
                :checked="checked === option.value"
                @change="handleChange(option.value)"
            />
            <label :for="option.value">{{ option.display }}</label>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    checked: string
    name: string
    options: {
        display: string
        value: string
    }[]
}>()

const emit = defineEmits(["change-select"])
function handleChange(newVal: string) {
    emit("change-select", newVal)
}
</script>

<style scoped>
.two-options-select {
    display: flex;
    align-items: center;
    border: 2px solid var(--cl-primary);
    border-radius: var(--border-radius);
    overflow: hidden;
    max-width: 10rem;
}

.option {
    flex: 1;
}

.option > input {
    display: none;
}

.option:has(input:checked) {
    background-color: var(--cl-primary);
    color: var(--cl-white);
}

.option > label {
    display: block;
    text-transform: uppercase;
    padding: 0 var(--pd-small);
    cursor: pointer;
}
</style>
