<template>
  <footer class="footer section">
    <div class="footer__container section__container">
      <div class="layout__container footer__layout">
        <div class="footer__top">

          <img src="/src/assets/logo/SociLT-ESK-White.png" alt="SOCI.LT logotipas" class="footer__logo"/>
          <div class="footer__contacts">
            <h5>Kontaktai</h5>
            <a title="Rašyti el. laišką" href="mailto:info@soci.lt">info@soci.lt</a>
          </div>
        </div>
        <div class="footer__line"></div>
        <div class="footer__bot">
          <span>SOCI.LT©2024 Visos teisės saugomos</span>
        </div>


      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer {
  background-color: var(--cl-primary);
  color: var(--cl-light);
}

.footer__logo {
  width: 12rem;
  height: 8rem;
}

.footer__layout {
  display: flex;
  flex-direction: column;
  gap: var(--sp-medium);
}

.footer__top {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--sp-medium);
}
.footer__top > div {
  display: flex;
  flex-direction: column;
  gap: var(--sp-small);
}

.footer__top h5 {
  font-size: var(--fs-medium);
}

.footer__top a {
  border-bottom: 1px solid currentColor;
  align-self: baseline;
  transition: var(--transition);
}

.footer__top a:hover {
  border-bottom-color: transparent;
}


.footer__bot {
  display: flex;
  justify-content: center;
}

.footer__line {
  height: 0.1rem;
  min-width: 40%;
  background-color: var(--cl-light);
  border-radius: var(--border-radius);
}
</style>
