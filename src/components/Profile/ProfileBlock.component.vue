<template>
    <div class="profile-block">
        <h3 class="profile-block__heading">{{ heading }}</h3>
        <div class="profile-block__content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    heading: string
}>()
</script>

<style scoped>
.profile-block {
    display: flex;
    flex-direction: column;
    gap: var(--sp-small);
}

.profile-block__heading {
    text-transform: uppercase;
    font-weight: 500;
}
</style>
