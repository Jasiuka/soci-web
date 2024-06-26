<template>
  <BaseSection
    custom-section-class="guide"
    custom-layout-class="guide__layout"
    section-heading="Naudojimosi instrukcija"
  >
    <template #default>
      <div class="line"></div>
      <div class="guide-steps__wrapper">
        <GuideCard v-for="(step,index) in guideSteps" :title="step.title" :subtitle="step.subtitle" :step-number="index + 1" :data-side="(index + 1) % 2 === 0 ? 'right' : 'left'">
          <template #asset>
            <div class="test">
              <img :src="`./${step.icon}-icon.svg`"/>
            </div>
          </template>
        </GuideCard>
      </div>
    </template>
  </BaseSection>
</template>

<script lang="ts" setup>
import GuideCard from "@components/GuideCard.component.vue"

const guideSteps = [
    {icon: 'form',title: "Registracija/Prisijungimas", subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi lacus, blandit eget magna et, volutpat viverra nunc. Phasellus consectetur, arcu sed volutpat hendrerit, dui metus bibendum purus, a vestibulum nibh nisi sed arcu. Aliquam eget tincidunt massa, ac blandit. '},
    {icon:'profile',title: "Profilio sukūrimas", subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim dolor purus, eget finibus ante faucibus eget. Curabitur tempus luctus erat in vehicula. Ut malesuada eros eros, a molestie dui. '},
    {icon:'search',title: "Paieška", subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel laoreet nisl. Curabitur tempor est risus, et gravida tortor condimentum eu. Curabitur vulputate eleifend erat quis sollicitudin. Nulla aliquam, massa ut rutrum maximus, tortor lorem dapibus nisi, eu congue ipsum leo eu sapien. Ut sit. '},
    {icon:'submit',title: "Aplikavimas", subtitle: 'lLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi lacus, blandit eget magna et, volutpat viverra nunc. Phasellus consectetur, arcu sed volutpat hendrerit, dui metus bibendum purus, a vestibulum nibh nisi sed arcu. Aliquam eget tincidunt massa, ac blandit.'}
]
</script>

<style scoped>
.guide-steps__wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--sp-medium);
}

.test {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 5rem;
  height: 5rem;
}

.line {
  position: absolute;
  width: 10px;
  height: 100%;
  background-color: var(--cl-primary);
  left: calc(50% - 10px);
}

@media only screen and (max-width:56.25rem) {
  .line {
    display: none;
  }
  
  .guide-steps__wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr
}
  }
  

</style>