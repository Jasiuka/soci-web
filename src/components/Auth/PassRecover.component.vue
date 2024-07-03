<template>
    <form class="form">
        <p class="message">
            Norėdami atkurti savo slaptažodį įveskite el. pašto adresą kuriuo
            registravotės ir mes atsiųsime jums nuorodą kurią paspaudę galėsite
            atnaujinti slaptažodį
        </p>
        <div class="form__controls">
            <InputControl
                label="El. Paštas"
                input-type="email"
                input-name="email"
            />
        </div>
        <CustomButton
            button-text="Siųsti"
            :button-style="ButtonStyles.REGULAR"
            :button-size="ButtonSizes.MEDIUM"
            button-type="submit"
            button-title="Mygtukas siųsti"
        />
    </form>
</template>

<script lang="ts" setup>
import { ButtonStyles, ButtonSizes } from "@/types"
</script>

<style scoped>
.message {
    font-weight: 500;
}

.form {
    display: flex;
    flex-direction: column;
    gap: var(--sp-large);
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
