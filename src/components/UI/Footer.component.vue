<template>
    <footer class="footer section">
        <div class="footer__container section__container">
            <div class="layout__container footer__layout">
                <div class="footer__top">
                    <img
                        src="/src/assets/logo/SociLT-ESK-White.png"
                        alt="SOCI.LT logotipas"
                        class="footer__logo"
                    />
                    <div class="footer__contacts">
                        <h5>Kontaktai</h5>
                        <a
                            class="link-clickable"
                            title="Rašyti el. laišką"
                            href="mailto:info@soci.lt"
                            >info@soci.lt</a
                        >
                    </div>
                </div>
                <div class="footer__line"></div>
                <div class="footer__bot">
                    <span>SOCI.LT©{{ thisYear }} Visos teisės saugomos</span>
                    <div class="footer__modal-buttons">
                        <button
                            class="footer__modal-btn"
                            @click="
                                setModalComponent(
                                    ModalComponents.PRIVACY_POLICY
                                )
                            "
                        >
                            Privatumo politika
                        </button>
                        <button
                            class="footer__modal-btn"
                            @click="
                                setModalComponent(ModalComponents.TERMS_OF_USE)
                            "
                        >
                            Naudojimosi taisyklės
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { useModalStore } from "@/stores/modalStore"
import { ModalComponents } from "@/types"
const { setModalComponent } = useModalStore()

const thisYear = new Date().getFullYear()
</script>

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
    align-self: baseline;
}

.footer__bot {
    align-self: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: var(--sp-small);
}

.footer__line {
    height: 0.1rem;
    min-width: 40%;
    background-color: var(--cl-light);
    border-radius: var(--border-radius);
}

.footer__modal-btn {
    text-decoration: underline;
    background-color: transparent;
}
/* 500px */
@media only screen and (max-width: 31.25rem) {
    .footer__logo {
        width: 8rem;
        height: 6rem;
    }

    .footer__top h5 {
        font-size: calc(var(--fs-medium) - 0.3rem);
    }

    .footer__top {
        gap: var(--sp-small);
    }
}
</style>
