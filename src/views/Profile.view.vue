<template>
    <TheLayout>
        <BaseSection
            custom-section-class="profile"
            custom-layout-class="profile__layout"
            section-heading="Profilis"
        >
            <template #default>
                <div class="profile__settings">
                    <ProfileBlock heading="Bendri nustatymai">
                        <div class="profile__settings-theme"></div>
                        <div class="profile__settings-theme"></div>
                    </ProfileBlock>
                    <ProfileBlock heading="Paskyros nustatymai">
                        <div class="profile__settings-theme"></div>
                    </ProfileBlock>
                    <ProfileBlock heading="Profilio nustatymai">
                        <div class="profile__settings-theme"></div>
                    </ProfileBlock>
                </div>
            </template>
        </BaseSection>
    </TheLayout>
</template>

<script lang="ts" setup>
import ProfileBlock from "@/components/Profile/ProfileBlock.component.vue"
</script>
<style scoped>
.profile__settings {
    display: flex;
    flex-direction: column;
    gap: var(--sp-medium);
}

.profile__settings-theme {
    display: flex;
    gap: var(--sp-small);
    align-items: center;
}
</style>
