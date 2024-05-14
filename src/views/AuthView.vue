<template>
  <TheLayout :footer-required="false">
    <BaseSection>
      <template #default>
        <div class="auth__content">
          <div class="auth__left-side">
            <div class="auth__left-side--heading">
              <img class="auth__logo" src="/src/assets/logo/SociLT-ESK-Black.png" />
              <h3 class="auth__form-name">{{ formName }}</h3>
            </div>
            <router-view></router-view>
          </div>
          <div class="auth__right-side">
            <h4>Soci.lt - prisijunk dabar ir atrask vietą kur norėtum savanoriauti!</h4>
            <img
              class="auth__illustration"
              alt="Search illustration"
              src="/src/assets/illustrations/search.svg"
            />
          </div>
        </div>
      </template>
    </BaseSection>
  </TheLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const formName = computed(() => {
  const pathName = route.name?.toString().toLowerCase()
  switch (pathName) {
    case 'signin':
      return 'Prisijungimas'
    case 'signup':
      return 'Registracija'
    case 'recover':
      return 'Slaptažodžio atnaujinimas'
  }
})
</script>

<style scoped>
.auth__content {
  border: 2px solid var(--cl-primary);
  display: flex;
  border-radius: var(--border-radius);
  overflow: hidden;
  min-height: 70dvh;
}

.auth__content > * {
  width: 50%;
}

/* RIGHT SIDE */

.auth__right-side {
  background-color: var(--cl-primary);
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 0 var(--pd-medium);
  padding-top: var(--pd-medium);
}

.auth__illustration {
  height: clamp(25rem, 50vh, 35rem);
}

.auth__right-side h4 {
  color: var(--cl-light);
  font-size: var(--fs-medium);
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
}

/* LEFT SIDE */
.auth__left-side {
  display: flex;
  flex-direction: column;
  gap: var(--sp-large);
  padding: var(--pd-medium);
}

.auth__left-side--heading {
  display: flex;
  flex-direction: column;
  gap: var(--sp-small);
  align-items: center;
}

.auth__form-name {
  font-size: var(--fs-large);
}

.auth__logo {
  width: 14rem;
  height: 12rem;
}

/* 900 px */
@media only screen and (max-width: 56.25rem) {
  .auth__illustration {
    display: none;
  }

  .auth__content {
    display: flex;
    flex-direction: column;
  }

  .auth__content > * {
    width: unset;
  }

  .auth__right-side {
    padding: var(--pd-medium);
  }
}

/* 500px */
@media only screen and (max-width: 31.25rem) {
  .auth__form-name {
    font-size: calc(var(--fs-medium) - 0.3rem);
  }

  .auth__logo {
    width: 8rem;
    height: 6rem;
  }

  .auth__right-side h4 {
    font-size: var(--fs-small);
  }
}
</style>
