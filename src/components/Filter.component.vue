<template>
    <div :id="customId" class="filter">
        <InputControl input-name="activity_search" label="Raktinis žodis" />
        <CustomSelect
            v-for="(select, index) in selectionData"
            :key="select.label"
            :options="select.options"
            :default="select.options[0]"
            :index="index"
            :should-not-close="selectOpen"
            :set-select-open="setSelectOpen"
            :name="select.name"
            :label="select.label"
            @change-selected="handleSelectChange"
        />
        <CustomButton
            custom-class="filter__button"
            button-text="Ieškoti"
            button-title="Ieškoti pagal filtrus"
        />
    </div>
</template>

<script lang="ts" setup>
import type { Select } from "@/types"
import { ref } from "vue"
defineProps<{
    selectionData: Select[]
    buttonText: string
    customId?: string
}>()

const selectOpen = ref<number>(-1)
function setSelectOpen(selectIndex: number) {
    selectOpen.value = selectIndex
}

function handleSelectChange(selection: string) {
    console.log(selection)
}
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
