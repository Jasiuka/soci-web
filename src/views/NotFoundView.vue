<template>
<TheLayout>
    <BaseSection>
        <div class="not-found__content">
            <h2>Puslapis kurio ieškote neegzistuoja</h2>
            <img class="not-found__img" src="/src/assets/illustrations/not-found.svg"/>
        </div>
    </BaseSection>
</TheLayout>
</template>

<script setup lang="ts" >
</script>

<style scoped>

.not-found__content {
    display: flex;
    flex-direction: column;
    gap: var(--sp-large);
    min-height: 100dvh;
    align-items: center;
    justify-content: center;
}

.not-found__content h2 {
    font-size: clamp(var(--fs-medium),5vw,var(--fs-heading));
}

.not-found__img {
    width: clamp(15rem,65vw,60rem);
}
</style>