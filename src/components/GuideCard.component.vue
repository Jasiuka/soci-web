<template>
<div class="guide-card">
    <div class="guide-card__center-line">
        <div class="circle">{{ stepNumber }}</div>
    </div>
    <div class="guide-card__asset-container">
        <slot name="asset"></slot>
    </div>
    <div class="guide-card__text-content">
        <div>
            <h4 class="guide-card__title">{{ title }}</h4>
            <p class="guide-card__subtitle">{{ subtitle }}</p>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
defineProps<{
    stepNumber: number,
    title: string,
    subtitle: string,
}>()
</script>

<style scoped>
.guide-card {
    display: flex;
    align-items: center;
    padding: var(--pd-small);
    gap: var(--sp-medium);
    position: relative;
    width: calc(50% - 10px);
    padding-right: calc(var(--pd-large) * 2);
}

.guide-card[data-side='right'] {
    transform: translateX(calc(100% + 10px));
    flex-direction: row-reverse;
    padding-right: unset;
    padding-left: calc(var(--pd-large) * 2);
}
.guide-card__asset-container {
    flex-shrink: 0;
    /* height: 150px;
    width: 200px; */

}

.guide-card__text-content {
    flex:1;
    display: flex;
    justify-content: start;
}


.guide-card[data-side='right'] .guide-card__text-content {
    justify-content: end;
}

.guide-card__title {
    color: var(--cl-primary);
    font-size: clamp(var(--fs-small),3vw,var(--fs-medium));
    font-weight: 500;
}

.guide-card__subtitle {

}


.guide-step-box {
    background-color: var(--cl-primary);
    padding: var(--pd-small) var(--pd-medium);
    border-radius: var(--border-radius);
    font-size: var(--fs-small);
    font-weight: 500;
    position: absolute;
    top: -1.8rem;
    left: -2rem;
}

.guide-card__center-line {
    position: absolute;
    height: 4px;
    background-color: var(--cl-primary);
    top: calc(50% - 4px);
    right: -1.8rem;
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}


.guide-card[data-side='right'] .guide-card__center-line {
    right: unset;
    left: -1.8rem;
    justify-content: flex-start;

}

.circle {
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--cl-primary);
    border-radius: 50%;
    font-size: var(--fs-medium);
    color: var(--cl-light);
}


@media only screen and (max-width:56.25rem) {
    .guide-card {
    width: auto;
    padding: var(--pd-small);
    border-radius: var(--border-radius);
    border: 2px solid var(--cl-primary);
}

.guide-card[data-side='right'] {
    transform: translateX(0);
    padding: var(--pd-small);
}

.guide-card__center-line {
    background-color: transparent;
    top: 0;
    right: -1.5rem;
}
}

.guide-card[data-side='right'] .guide-card__center-line {
    left: -1.5rem;

}
@media only screen and (max-width:31.25rem) {
    .guide-card, .guide-card[data-side='right'] {
    flex-direction: column;
}
}

</style>