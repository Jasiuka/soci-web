<template>
    <form
        class="profile__settings-password-change"
        @submit.prevent="handleForm"
    >
        <InputControl
            label="Dabartinis slaptažodis"
            input-type="password"
            input-name="current_password"
        />
        <InputControl
            label="Naujas slaptažodis"
            input-type="password"
            input-name="new_repeat"
        />
        <InputControl
            label="Pakartoti slaptažodį"
            input-type="password"
            input-name="repeat_password"
        />
        <CustomButton
            :button-text="'Pakeisti'"
            :button-title="'Pakeisti slaptažodį'"
            button-size="extra-small"
            button-type="submit"
        />
    </form>
</template>

<script lang="ts" setup>
function handleForm(e: Event) {
    const form = e.target as HTMLFormElement
    console.log("HANDLED")
}
</script>

<style scoped>
.profile__settings-password-change {
    display: flex;
    flex-direction: column;
    gap: var(--sp-medium);
}
</style>
