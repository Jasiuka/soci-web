<template>
    <div class="activity-page__tab-content">
        <div v-if="activeTab === 'info'" class="activity-page__information">
            <div class="activity-page__description">
                <h4 class="activity-page__description-title title">
                    Informacija apie savanorišką veiklą
                </h4>
                <p class="activity-page__description-value">
                    {{ activity?.description }}
                </p>
            </div>
            <div class="activity-page__params-wrapper">
                <div
                    v-for="activityParam in activity?.params"
                    :key="activityParam.heading"
                    class="activity-page__param"
                >
                    <h4 class="activity-page__param-title title">
                        {{ activityParam.heading }}
                    </h4>
                    <p
                        :class="{
                            [colorFreeSpacesColor(activityParam.value)]:
                                activityParam.heading.includes('vietos')
                        }"
                        class="activity-page__param-value param-value"
                    >
                        {{ activityParam.value }}
                    </p>
                </div>
            </div>
        </div>
        <div v-else class="activity-page__company">
            <div class="activity-page__company-info">
                <h4 class="title">Pavadinimas</h4>
                <p class="activity-page__param-value">
                    {{ activity?.company.name }}
                </p>
            </div>
            <div class="activity-page__company-info">
                <h4 class="title">Miestas</h4>
                <p class="activity-page__param-value">
                    {{ activity?.company.city }}
                </p>
            </div>
            <div class="activity-page__company-info contact-person">
                <h4 class="title">Kontaktinis asmuo</h4>
                <p class="activity-page__param-value">
                    {{ activity?.company.person.name }}
                </p>
                <p class="activity-page__param-value">
                    <MailIcon class="activity-page__icon" />
                    {{ activity?.company.person.email }}
                </p>
                <p class="activity-page__param-value">
                    <PhoneIcon class="activity-page__icon" />
                    {{ activity?.company.person.phone }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { type Activity } from "@/types"
import { colorFreeSpacesColor } from "@/utils/colorFreeSpaceSlot.util"
import PhoneIcon from "@components/icons/Phone.icon.vue"
import MailIcon from "@components/icons/Mail.icon.vue"

defineProps<{
    activity: Activity
    activeTab: string
}>()
</script>

<style scoped>
.activity-page__tab-content {
    padding: var(--pd-small);
    border: 2px solid var(--cl-primary);
    border-radius: var(--border-radius);
}

.activity-page__information,
.activity-page__company {
    display: flex;
    flex-direction: column;
    gap: var(--sp-medium);
}

.activity-page__params-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    row-gap: var(--sp-small);
}

.title {
    font-weight: 500;
    margin-bottom: calc(var(--sp-small) - 0.7rem);
}

.activity-page__param-value {
    display: flex;
    align-items: center;
    gap: var(--sp-small);
}

.activity-page__param-value > img {
    width: 1rem;
}

.activity-page__icon {
    width: 1rem;
    height: 1rem;
}

.contact-person {
    display: flex;
    flex-direction: column;
}

/* 500px */
@media only screen and (max-width: 31.25rem) {
    .activity-page__params-wrapper {
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    }
}
</style>
