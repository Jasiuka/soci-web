<template>
    <section :class="customSectionClass" class="section">
        <slot name="sectionOutterAddon"></slot>
        <div class="section__container">
            <h3 v-if="sectionHeading" class="section__heading">
                {{ sectionHeading }}
            </h3>
            <div class="layout__container" :class="customLayoutClass">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    customSectionClass?: string
    customLayoutClass?: string
    sectionHeading?: string
}>()
</script>

<style scoped>
.section__container {
    max-width: var(--max-width);
    padding: 0 var(--pd-page-side);
    margin: 0 auto;
}

.section {
    position: relative;
    padding: var(--pd-section-vertical) 0;
}

.section__heading {
    text-transform: uppercase;
    color: inherit;
    font-size: var(--fs-medium);
    margin-bottom: var(--sp-large);
    font-weight: 500;
}

/* 900px */
@media only screen and (max-width: 56.25rem) {
    .section__container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>
