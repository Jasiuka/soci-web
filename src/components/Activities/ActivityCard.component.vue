<template>
    <RouterLink :to="routeTo" class="base-card" :class="customCardClass">
        <img class="base-card__image" :src="`./${props.image}`" />
        <h4 class="base-card__title">{{ cardTitle }}</h4>
        <div class="base-card__details-list">
            <slot></slot>
        </div>
    </RouterLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
    image: string
    cardTitle: string
    customCardClass?: string
    routeTo: string
}>()
</script>

<style scoped>
.base-card {
    display: flex;
    flex-direction: column;
    gap: var(--sp-small);
    border-radius: var(--border-radius);

    box-shadow: var(--shadow);
    padding: var(--pd-medium);
    transition: var(--transition);
}

.base-card__image {
    object-fit: contain;
    /* width: 80%; */
    height: 8rem;
    width: 8rem;
    align-self: center;
    padding: var(--pd-small);
    background-color: var(--cl-white);
    border-radius: var(--border-radius);
}

.base-card__title {
    font-size: calc(var(--fs-medium) - 0.5rem);
    flex: 1;
}

/* 350px */
@media only screen and (max-width: 21.875rem) {
    .base-card__image {
        object-fit: contain;
        height: 5rem;
        width: 5rem;
        align-self: center;
    }
}
</style>
