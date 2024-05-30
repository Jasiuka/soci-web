<template>
  <header>
    <button @click="toggleMobileMenu" class="header-nav__mobile">
      <Transition name="icon" mode="out-in">
        <MenuIcon v-if="!menuOpen" />
        <CloseIcon v-else />
      </Transition>
    </button>
    <nav class="nav" :class="{ open: menuOpen }">
      <!-- <img class="nav-logo" src="@/assets/logo/Soci-no-words-black.svg" /> -->
      <LogoSvg />
      <ul class="nav-list">
        <li class="nav-list__item">
          <RouterLink class="nav-list__item-link" to="/">Pagrindinis</RouterLink>
        </li>
        <li class="nav-list__item">
          <RouterLink class="nav-list__item-link" to="/about-us">Apie mus</RouterLink>
        </li>
        <li class="nav-list__item">
          <RouterLink class="nav-list__item-link" to="/auth">Prisijungti</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import LogoSvg from '@components/LogoSvg.vue'
import {ref } from 'vue'
import MenuIcon from '@components/icons/MenuIcon.vue'
import CloseIcon from '@components/icons/CloseIcon.vue'
const menuOpen = ref<boolean>(false)
function toggleMobileMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
header {
  width: 100%;
  overflow: hidden;
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
    background-color: var(--cl-light);
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

  .open {
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
    padding: 1rem;
    top: 0.8rem;
    right: 0.8rem;
    z-index: 100;
    border-radius: 50%;
    background-color: var(--cl-secondary);
    position: fixed;
    z-index: 31;
    top: 1rem;
    right: 1rem;
  }

  .header-nav__mobile:hover > .mobile-icon {
    transform: scale(1.1);
  }

  .header-nav__mobile:hover > * > svg {
    fill: red;
    background-color: red;
    color: red;
  }
}

.mobile-icon {
  width: 1rem;
  height: 1rem;
  fill: var(--cl-light);
  transition: var(--transition);
}

/* ANIMATIONS */

.icon-enter-active,
.icon-leave-active {
  animation: rotate 0.3s linear;
}

.icon-leave-active {
  animation: rotate 0.3s linear reverse;
}

@keyframes rotate {
  from {
    transform: rotate(0);
    opacity: 0;
  }

  to {
    transform: rotate(180deg);
    opacity: 1;
  }
}
</style>
