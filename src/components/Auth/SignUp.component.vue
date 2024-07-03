<template>
    <form class="form">
        <div class="form__controls">
            <InputControl
                label="El. Paštas"
                input-type="email"
                input-name="email"
            />
            <InputControl
                label="Slaptažodis"
                input-type="password"
                input-name="password"
            />
            <InputControl
                label="Pakartoti slaptažodį"
                input-type="password"
                input-name="repeat"
            />
        </div>
        <CustomButton
            button-text="Registruotis"
            :button-style="ButtonStyles.REGULAR"
            :button-size="ButtonSizes.MEDIUM"
            button-type="submit"
            button-title="Mygtukas registruotis"
        />
    </form>
    <p>
        Jau turi paskyrą?
        <RouterLink class="auth__link" to="/auth/signin">Prisijunk</RouterLink>
    </p>
</template>

<script lang="ts" setup>
import { ButtonStyles, ButtonSizes } from "@/types"
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: var(--sp-medium);
}

.form__controls {
    display: flex;
    flex-direction: column;
    gap: calc(var(--sp-large) + 0.5rem);
}

.auth__link {
    color: var(--cl-primary);
    text-decoration: underline;
    transition: var(--transition);
}

.auth__link:hover {
    color: var(--cl-dark);
}
</style>
