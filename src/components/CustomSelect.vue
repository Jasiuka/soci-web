<template>
    <div class="custom-select">
        <div @click="() => {isSelectionOpen = !isSelectionOpen}" class="custom-select__selected" :class="{'open': isSelectionOpen}">
            <span class="custom-select__selected-option" :data-value="selectedOption?.value">{{ selectedOption?.display }}</span>
            <span class="arrow" :class="{'open': isSelectionOpen}">&#916;</span>
        </div>
        <div v-if="isSelectionOpen" class="custom-select__options">
            <span @click="handleSelectionChange(option)" class="custom-select__option" v-for="option in options">{{ option.display }}</span>
        </div>
        <div @click="() => {isSelectionOpen = isSelectionOpen ? !isSelectionOpen : isSelectionOpen}" v-if="isSelectionOpen" class="custom-select__overlay"></div>
    </div>
</template>

<script lang="ts" setup>
import type { Option } from '@/types';
import { onMounted, onUnmounted, ref } from 'vue';
const props = defineProps<{
options: Option[],
default: Option
}>()

const selectedOption = ref<Option | null>(null)
const isSelectionOpen = ref<boolean>(false)

function handleSelectionChange(option: Option) {
    selectedOption.value = option
    isSelectionOpen.value = false
}

onMounted(() => {
    selectedOption.value = props.default
})

onUnmounted(() => {
    selectedOption.value = null
})
</script>

<style scoped>
.custom-select {
    position: relative;
}

.custom-select__selected {
    display: flex;
    gap: 5px;
    border: 1px solid var(--cl-primary);
}

.custom-select__selected, .custom-select__option {
    padding: calc(var(--pd-small) - 0.3rem);
    border-radius: var(--border-radius);
    cursor: pointer;
    user-select: none;
}

.arrow {
    font-size: var(--fs-small);
    font-weight: 500;
    transform: rotate(180deg);
}

.arrow.open {
    color: var(--cl-white);
    transform: rotate(0);
}

.custom-select__selected-option {
    flex: 1;
}

.custom-select__options {
    position: absolute;
    display: flex;
    flex-direction: column;
    max-height: 10rem;
    overflow: auto;
    padding: 10px;
    background-color: var(--cl-light);
    min-width: 100%;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
}

.custom-select__option:hover, .custom-select__selected.open {
    background-color: var(--cl-primary);
    color: var(--cl-white);
}

@media only screen and (max-width:56.25rem) {
    .custom-select {
        position: unset;
    }

.custom-select__options {
    position: fixed;
    min-width: 60%;
    max-height: 80%;
    margin: auto;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: var(--border-radius);


}

.custom-select__overlay {
position: fixed;
 background-color: rgba(0, 0, 0, 0.5);
 width: 100%;
 height: 100%;
 top: 0;
 left: 0;
 z-index: 10;
}

}

</style>