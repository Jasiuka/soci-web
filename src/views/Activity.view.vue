<template>
    <TheLayout>
        <BaseSection
            custom-section-class="activity-page"
            custom-layout-class="activity-page__layout"
        >
            <template v-if="activity" #default>
                <div class="activity-page__heading">
                    <img
                        class="activity-page__image"
                        :alt="activity?.title + ' veiklos paveikslėlis'"
                        :src="`/${activity?.image}`"
                    />

                    <div>
                        <h2>{{ activity?.title }}</h2>
                        <span>{{ activity?.address }}</span>
                    </div>
                </div>
                <div class="activity-page__tabs-container">
                    <ul class="activity-page__tabs-list">
                        <li>
                            <button
                                :class="{ active: activeTab === 'info' }"
                                title="Informacija apie veiklą"
                                @click="() => (activeTab = 'info')"
                            >
                                Informacija
                            </button>
                        </li>
                        <li>
                            <button
                                :class="{ active: activeTab === 'company' }"
                                title="Informacija apie įmonę"
                                @click="() => (activeTab = 'company')"
                            >
                                Apie įmonę
                            </button>
                        </li>
                    </ul>
                </div>
                <ActivityTabs :activity="activity" :active-tab="activeTab" />
                <CustomButton
                    :button-size="ButtonSizes.SMALL"
                    :button-style="ButtonStyles.REGULAR"
                    custom-class="activity-page__button"
                    :button-title="`Aplikuoti į ${activity?.title} veiklą`"
                    button-text="Aplikuoti"
                />
            </template>
            <template v-else #default>
                <h2>
                    Atsiprašome, bet savanorystės veikla, kurią bandote
                    pasiekti, nerasta. Veiklos ID {{ activityId }}
                </h2>
                <span>Galbūt įvyko klaida arba veikla buvo pašalinta.</span>
                <span
                    >Prašome patikrinti URL adresą arba grįžti į
                    <RouterLink class="link-clickable" to="/"
                        >pagrindinį</RouterLink
                    >
                    puslapį ir bandyti pasirinkti veiklą iš sąrašo.</span
                >
            </template>
        </BaseSection>
    </TheLayout>
</template>

<script lang="ts" setup>
import { testData } from "@/data"
import { useRoute } from "vue-router"
import { ButtonSizes, ButtonStyles } from "@/types"
import ActivityTabs from "@components/Activities/ActivityTabs.component.vue"
const { params } = useRoute()

import { onBeforeMount, ref } from "vue"
import type { Activity } from "@/types"
const activity = ref<Activity | null>(null)
const activityId = ref<string>("")

const activeTab = ref<string>("info")

onBeforeMount(() => {
    activityId.value = params.id as string
    const activityFound = findDataById() as Activity | null
    activity.value = activityFound
})

function findDataById() {
    const id = parseInt(params.id as string)
    const activityFound = testData.activities.find(
        (activity: Activity) => activity.id === id
    )
    return activityFound
}
</script>

<style scoped>
:deep(.activity-page__layout) {
    display: flex;
    flex-direction: column;
    gap: var(--sp-medium);
}

.activity-page__heading {
    display: flex;
    align-items: center;
    gap: var(--sp-medium);
    flex-wrap: wrap;
}

.activity-page__heading h2 {
    font-size: var(--fs-medium);
    margin-bottom: calc(var(--sp-small) - 0.7rem);
}

.activity-page__image {
    width: 10rem;
    height: 10rem;
    padding: var(--pd-small);
    border-radius: var(--border-radius);
    background-color: var(--cl-white);
}

.activity-page__tabs-container {
    display: block;
    border-bottom: 3px solid var(--cl-primary);
}

.activity-page__tabs-list {
    display: flex;
}

.activity-page__tabs-list button {
    padding: var(--pd-small);
    background-color: transparent;
    color: var(--cl-text-primary);
    font-size: inherit;
    transition: var(--transition);
}

.activity-page__tabs-list button.active {
    background-color: var(--cl-primary);
    color: var(--cl-light);
}

.activity-page__tabs-list button:not(.active):hover {
    background-color: var(--cl-primary);
    color: var(--cl-light);
}

.activity-page__tabs-list > li:first-child button {
    border-radius: var(--border-radius) 0 0 0;
}

.activity-page__tabs-list > li:last-child button {
    border-radius: 0 var(--border-radius) 0 0;
}

:deep(.activity-page__button) {
    display: block;
    width: 100%;
    font-weight: 500;
}
</style>
