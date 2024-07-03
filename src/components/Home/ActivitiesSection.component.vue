<template>
    <BaseSection
        section-heading="Veiklos"
        custom-section-class="activities"
        custom-layout-class="activities__layout"
    >
        <template #default>
            <Filter
                custom-id="activities"
                button-text="Ieškoti"
                :selection-data="selectionData"
            />
            <div class="activities-list">
                <ActivityCard
                    v-for="activity in testData.activities"
                    :key="activity.id"
                    :image="activity.image"
                    :card-title="activity.title"
                    custom-card-class="activities-list__card"
                    :route-to="`/activity/${activity.id}`"
                >
                    <div class="acvtivities-list__card-params">
                        <div
                            v-for="param in activity.params"
                            :key="param.value"
                            class="activities-list__param"
                        >
                            <span>{{ param.heading }}:</span>
                            <span
                                class="activities-list__param-value param-value"
                                :class="{
                                    [colorFreeSpacesColor(param.value)]:
                                        param.heading.includes('vietos')
                                }"
                                >{{ param.value }}</span
                            >
                        </div>
                    </div>
                </ActivityCard>
            </div>
        </template>
    </BaseSection>
</template>

<script lang="ts" setup>
import type { Select } from "@/types"
import Filter from "@/components/Filter.component.vue"
import ActivityCard from "@/components/Activities/ActivityCard.component.vue"
import { testData } from "@/data"
import { colorFreeSpacesColor } from "@/utils/colorFreeSpaceSlot.util"

const selectionData: Select[] = [
    {
        name: "city",
        label: "Miestas",
        options: [{ display: "Visi miestai", value: "all_city" }]
    },
    {
        name: "type",
        label: "Savanorystės tipas",
        options: [
            { display: "Visi tipai", value: "all_type" },
            { display: "Sportas", value: "sport" }
        ]
    },
    {
        name: "form",
        label: "Dalyvavimo forma",
        options: [{ display: "Visos formos", value: "all_form" }]
    },
    {
        name: "field",
        label: "Veiklos sritis",
        options: [{ display: "Visos sritys", value: "all_field" }]
    }
]
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

.activities-list__param > span:first-child {
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.4);
}

:deep(.activities-list__card) {
    cursor: pointer;
    border: 2px solid transparent;
}

:deep(.activities-list__card):hover {
    border: 2px solid var(--cl-primary);
}

/* 500px */
@media only screen and (max-width: 31.25rem) {
    .activities-list {
        grid-template-columns: 1fr;
    }
}

/* 350px */
@media only screen and (max-width: 21.875rem) {
    .activities-list__param {
        flex-direction: column;
    }
}
</style>
