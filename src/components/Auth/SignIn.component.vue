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
        </div>
        <p>
            Pamiršote slaptažodi?
            <RouterLink class="auth__link" to="/auth/recover"
                >Prisiminti slaptažodį</RouterLink
            >
        </p>
        <CustomButton
            button-text="Prisijungti"
            :button-style="ButtonStyles.REGULAR"
            :button-size="ButtonSizes.MEDIUM"
            button-type="submit"
            button-title="Mygtukas prisijungti"
            @click="testLogin"
        />
    </form>
    <p>
        Neturite paskyros?
        <RouterLink class="auth__link" to="/auth/signup"
            >Užsiregistruokite kaip savanoris</RouterLink
        >
    </p>
</template>

<script lang="ts" setup>
import { ButtonSizes, ButtonStyles } from "@/types"
import { useAuthStore } from "@/stores/authStore"
import { useRouter } from "vue-router"
import { useNotificationsStore } from "@/stores/notificationStore"
const { newNotification } = useNotificationsStore()

const router = useRouter()
const { setUser } = useAuthStore()
function testLogin() {
    setUser({ email: "test@gmail.com", id: 15 })
    router.push("/")
    newNotification("SUCCESS", "Sėkmingai prisijungėte")
}
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
    color: var(--cl-text-primary);
}
</style>
