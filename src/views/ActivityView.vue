<template>
    <TheLayout>
        <BaseSection   
    custom-section-class="activity-page"
    custom-layout-class="activity-page__layout">
    <template #default>
      <div class="activity-page__heading">
        <img class="activity-page__image" :alt="activity?.title + ' veiklos paveikslėlis'" :src="`/${activity?.image}.jpg`"/>

        <div>
          <h2>{{ activity?.title }}</h2>
          <span>{{ activity?.address }}</span>
        </div>
      </div>
      <div class="activity-page__tabs-container">
        <ul class="activity-page__tabs-list">
          <li>
            <button @click="() => activeTab = 'info'" :class="{'active': activeTab === 'info'}" title="Informacija apie veiklą">Informacija</button>
          </li>
          <li>
            <button @click="() => activeTab = 'company'" :class="{'active': activeTab === 'company'}" title="Informacija apie įmonę">Apie įmonę</button>
          </li>
        </ul>
      </div>
      <div class="activity-page__tab-content">
        <div class="activity-page__information"  v-if="activeTab === 'info'">
          <div class="activity-page__description">
            <h4 class="activity-page__description-title title">Informacija apie savanorišką veiklą</h4>
            <p class="activity-page__description-value">{{ activity?.description }}</p>
          </div>
          <div class="activity-page__params-wrapper">

            <div v-for="activityParam in activity?.params" :key="activityParam.heading" class="activity-page__param">
              <h4 class="activity-page__param-title title">{{ activityParam.heading }}</h4>
              <p  :class="{ [getFreeSpacesColor(activityParam.value)]: activityParam.heading.includes('vietos') }" class="activity-page__param-value param-value">{{ activityParam.value }}</p>
            </div>
          </div>
        </div>
      <div class="activity-page__company" v-else>
        <div class="activity-page__company-info">
          <h4 class="title">Pavadinimas</h4>
            <p class="activity-page__param-value">{{ activity?.company.name }}</p>
        </div>
        <div class="activity-page__company-info">
          <h4 class="title">Miestas</h4>
            <p class="activity-page__param-value">{{ activity?.company.city }}</p>
        </div>
        <div class="activity-page__company-info contact-person">
          <h4 class=" title">Kontaktinis asmuo</h4>
            <p class="activity-page__param-value">
             {{ activity?.company.person.name }}
            </p>
            <p class="activity-page__param-value">
             <img activity-page__icon src="/src/assets/icons/envelope-line-icon.svg" alt="Laiško ikonėlė"/>
             {{ activity?.company.person.email }}
            </p>
            <p class="activity-page__param-value">
             <img activity-page__icon src="/src/assets/icons/phone-line-icon.svg" alt="Telefono ikonėlė"/>
             {{ activity?.company.person.phone }}
            </p>
        </div>

      </div>
      </div>
      <CustomButton :button-size="ButtonSizes.SMALL" :button-style="ButtonStyles.REGULAR" custom-class="activity-page__button" :button-title="`Aplikuoti į ${activity?.title} veiklą`" button-text="Aplikuoti"/>
    </template>
        </BaseSection>
    </TheLayout>
  </template>

  <script lang="ts" setup>
  import { getFreeSpacesColor } from '@/utils/helper';
  import { testData } from '@/data';
  import { useRoute } from 'vue-router';
  import { ButtonSizes, ButtonStyles } from '@/types';
  const {params} = useRoute()

  import { computed, onBeforeMount, ref } from 'vue';
import type { Activity } from '@/types';
import CustomButton from '@/components/Custom/CustomButton.vue';
const activity = ref<Activity | null>(null)

const activeTab = ref<string>('info')

onBeforeMount(() => {
  const activityFound = findDataById() as Activity | null
  activity.value = activityFound
})

  function findDataById() {
    const id = parseInt(params.id as string)
    const activityFound = testData.activities.find((activity: Activity) => activity.id === id)
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
  width: 8rem;
  height: 8rem;
}

.activity-page__tabs-container {
  display: block;
  /* background-color: var(--cl-primary); */
  border-bottom: 3px solid var(--cl-primary);
}

.activity-page__tabs-list {
  display: flex;
}

.activity-page__tabs-list button {
  padding: var(--pd-small);
  background-color: transparent;
  color: var(--cl-dark);
  font-size: inherit;
  transition: var(--transition);
}

.activity-page__tab-content {
  padding: var(--pd-small);
  border: 2px solid var(--cl-primary);
  border-radius: var(--border-radius);
}

.activity-page__information, .activity-page__company {
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

.activity-page__tabs-list button.active {
  background-color: var(--cl-primary);
  color: var(--cl-light);
}

.activity-page__tabs-list button:not(.active):hover {
  background-color: var(--cl-primary);
  color: var(--cl-light);
}

.activity-page__tabs-list > li:first-child button{
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


/* 500px */
@media only screen and (max-width:31.25rem) {
  .activity-page__params-wrapper {
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}
}
  </style>
  