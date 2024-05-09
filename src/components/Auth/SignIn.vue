<template>
  <form class="form">
    <div class="form__controls">
      <CustomInputControl label="El. Paštas" input-type="email" input-name="email" />
      <CustomInputControl label="Slaptažodis" input-type="password" input-name="password" />
    </div>
    <p>
      Pamiršai slaptažodi?
      <RouterLink class="auth__link" to="/auth/recover">Prisiminti slaptažodį</RouterLink>
    </p>
    <CustomButton
      button-text="Prisijungti"
      :button-style="ButtonStyles.REGULAR"
      :button-size="ButtonSizes.MEDIUM"
      button-type="submit"
      button-title="Mygtukas prisijungti"
    />
  </form>
  <p>
    Neturi paskyros?
    <RouterLink class="auth__link" to="/auth/signup">Užsiregistruok kaip savanoris</RouterLink>
  </p>
</template>

<script lang="ts" setup>
import CustomButton from '../Custom/CustomButton.vue'
import CustomInputControl from '../Custom/CustomInputControl.vue'
import { ButtonSizes, ButtonStyles } from '@/types'
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
