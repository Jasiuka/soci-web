<template>
    <div class="input-control">
        <input
            :id="inputName"
            v-model.trim="inputVal"
            :name="inputName"
            class="input"
            :type="inputType"
        />
        <label :class="{ moved: inputVal }" :for="inputName" class="label">{{
            label
        }}</label>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"

type Props = {
    label: string
    inputType?: string
    inputName: string
    inputValue?: string
}
const props = withDefaults(defineProps<Props>(), {
    inputType: "text"
})
const inputVal = ref("")

onMounted(() => {
    if (props.inputValue) {
        inputVal.value = props.inputValue
    }
})
</script>

<style scoped>
.input-control {
    display: flex;
    position: relative;
}

.input {
    border: none;
    border-bottom: 2px solid var(--cl-bg-secondary);
    min-width: 100%;
    font-family: inherit;
    font-size: var(--fs-small);
    background-color: var(--cl-bg-primary);
    color: var(--cl-text-primary);
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
