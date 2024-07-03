<template>
    <header>
        <button
            class="header-nav__mobile"
            :class="{ open: menuOpen }"
            @click="toggleMobileMenu"
        >
            <Transition name="icon" mode="out-in">
                <MenuIcon v-if="!menuOpen" />
                <CloseIcon v-else />
            </Transition>
        </button>
        <nav class="nav" :class="{ open: menuOpen }">
            <Logo />
            <ul class="nav-list">
                <li class="nav-list__item">
                    <RouterLink class="nav-list__item-link" to="/"
                        >Pagrindinis</RouterLink
                    >
                </li>
                <li class="nav-list__item">
                    <RouterLink class="nav-list__item-link" to="/about-us"
                        >Apie mus</RouterLink
                    >
                </li>
                <li v-if="user" class="nav-list__item">
                    <RouterLink class="nav-list__item-link" to="/profile"
                        >Profilis</RouterLink
                    >
                </li>
                <li v-if="user" class="nav-list__item">
                    <button
                        class="nav-list__item-link"
                        title="Atsijungti"
                        @click="() => auth.unsetUser()"
                    >
                        Atsijungti
                    </button>
                </li>
                <li v-else class="nav-list__item">
                    <RouterLink class="nav-list__item-link" to="/auth"
                        >Prisijungti</RouterLink
                    >
                </li>
            </ul>

            <button
                class="theme-changer"
                :class="{ open: menuOpen }"
                :title="
                    theme === Themes.LIGHT
                        ? 'Perjungti į tamsos režimą'
                        : 'Perjungti į šviesos režimą'
                "
                @click="handleThemeChange"
            >
                <Transition name="theme" mode="out-in">
                    <MoonIcon v-if="theme === Themes.DARK" class="theme-icon" />
                    <SunIcon v-else class="theme-icon" />
                </Transition>
            </button>
        </nav>
    </header>
</template>

<script lang="ts" setup>
import Logo from "@/components/Logo.component.vue"
import { ref } from "vue"
import MenuIcon from "@/components/icons/Menu.icon.vue"
import CloseIcon from "@/components/icons/Close.icon.vue"
import { useAuthStore } from "@/stores/authStore"
const menuOpen = ref<boolean>(false)
function toggleMobileMenu() {
    menuOpen.value = !menuOpen.value
}
import { useSettingsStore } from "@/stores/settingsStore"
import { storeToRefs } from "pinia"
import { Themes } from "@/types"

const { setTheme } = useSettingsStore()
const { theme } = storeToRefs(useSettingsStore())
import SunIcon from "../icons/Sun.icon.vue"
import MoonIcon from "../icons/Moon.icon.vue"

function handleThemeChange() {
    if (theme.value === Themes.LIGHT) {
        setTheme(Themes.DARK)
    } else {
        setTheme(Themes.LIGHT)
    }
}

const auth = useAuthStore()
const { user } = storeToRefs(auth)
</script>

<style scoped>
header {
    width: 100%;
    overflow: hidden;
}

.theme-changer {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: transparent;
    outline: none;
    box-shadow: none;
}

.theme-icon {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    fill: var(--cl-bg-secondary);
}

.nav {
    max-width: var(--max-width);
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0 var(--pd-page-side);
    padding-top: var(--pd-small);

    gap: var(--sp-medium);
}

.nav-list {
    display: flex;
    gap: var(--sp-medium);
    flex: 1;
    align-items: center;
}

.nav-logo {
    width: 6rem;
    height: 4rem;
}

.nav-list__item button {
    background-color: transparent;
    color: inherit;
}

.nav-list__item-link {
    transition: var(--transition);
    font-size: calc(var(--fs-medium) - 0.5rem);
}

.nav-list__item-link:not(.link-active):hover {
    color: var(--cl-primary);
}

.header-nav__mobile {
    display: none;
}

/* MEDIA QUERIES */

@media only screen and (max-width: 56.25rem) {
    .theme-changer {
        transform: translateX(20rem);
    }

    .theme-changer.open {
        transform: translateX(0);
        top: unset;
        bottom: 1rem;
    }

    header {
        position: relative;
        overflow: unset;
        width: 100%;
    }
    .nav {
        padding: 0 var(--pd-large);
        padding-top: var(--pd-large);
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        flex-direction: column;
        max-width: 0;
        overflow: hidden;
        height: 100dvh;
        margin-right: 0;
        background-color: var(--cl-bg-primary);
        transform: translateX(100%);
        transition: var(--transition-longer);
        position: fixed;
        z-index: 30;
        top: 0;
        right: 0;
    }

    .nav-list {
        flex-direction: column;
    }

    .nav.open {
        visibility: visible;
        opacity: 1;
        pointer-events: all;
        max-width: 50%;
        transform: translateX(0);
        box-shadow: -5px 0px 9px -3px rgba(0, 0, 0, 0.1);
    }

    .header-nav__mobile {
        /* display: inline-block; */
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        padding: clamp(0.5rem, 3vw, 1rem);
        top: 0.8rem;
        right: 0.8rem;
        z-index: 100;
        border-radius: 50%;
        background-color: var(--cl-bg-secondary);
        position: fixed;
        z-index: 31;
        top: 1rem;
        right: 1rem;
    }

    .header-nav__mobile:hover > .mobile-icon {
        transform: scale(1.1);
    }
}

.mobile-icon {
    width: 1rem;
    height: 1rem;
    fill: var(--cl-bg-primary);
    transition: var(--transition);
}

/* ANIMATIONS */

.icon-enter-active,
.theme-enter-active {
    animation: rotate 0.3s linear;
}

.icon-leave-active,
.theme-leave-active {
    animation: rotate 0.3s linear reverse;
}

@keyframes rotate {
    from {
        transform: rotate(0);
        opacity: 0;
    }

    to {
        transform: rotate(360deg);
        opacity: 1;
    }
}
</style>
