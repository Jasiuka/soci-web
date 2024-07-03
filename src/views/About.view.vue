<template>
    <TheLayout>
        <BaseSection
            custom-section-class="about-us"
            custom-layout-class="about-us__layout"
            section-heading="Apie mus"
        >
            <template #default>
                <div class="about-us__top">
                    <div class="about-us__content">
                        <h2>Mes darome savanorystę lengviau prieinamą</h2>
                        <p>
                            Mūsų tikslas yra skatinti savanorystę jaunimo bei
                            mokinių tarpe ir pakeisti įsisenėjusią tvarką, kai
                            viskas buvo daroma fiziniu būdu. Todėl mūsų komanda
                            sukūrė platformą, kurioje socialinės-pilietinės
                            veiklos įforminimas, apskaita bei savanorių paieška
                            yra perkeliama į elektroninę erdvę.
                        </p>
                        <p>
                            Kurdami lengvai prieinamą ir centralizuotą
                            platformą, siekiame palnegvinti mokyklų, nepelno
                            siekiančių organizacijų ir mokinių darbo krūvį – čia
                            Jūs galite lengvai ir greitai rasti sau patogiausią
                            ir geriausią savanorystę ar savanorį.
                        </p>
                        <p class="bold">
                            Linkime geros savanorystės! <br />
                            - Soci.lt komanda
                        </p>
                    </div>
                    <img
                        class="about-us__img"
                        src="/src/assets/illustrations/computer.svg"
                        alt="Computer illustration"
                    />
                </div>
                <div class="about-us__special">
                    <span>Norime priminti jog tai yra BETA versija</span>
                    <span>Atsiradus nesklandumams kreiptis:</span>
                    <a type="email" href="mailto:info@soci.lt">info@soci.lt</a>
                </div>
            </template>
        </BaseSection>
    </TheLayout>
</template>

<style scoped>
:deep(.about-us__layout) {
    display: flex;
    flex-direction: column;
    gap: var(--sp-large);
}

.about-us__top {
    display: flex;
    gap: var(--sp-large);
}

.about-us__top h2 {
    font-size: clamp(var(--fs-medium), 3vw, var(--fs-large));
    color: var(--cl-primary);
    margin-bottom: var(--sp-small);
}

.about-us__content > p {
    font-size: clamp(var(--fs-small), 2vw, var(--fs-medium));
    font-style: italic;
}

.about-us__content > p:first-of-type {
    margin-bottom: var(--sp-small);
}

.about-us__content > p:nth-of-type(2) {
    margin-bottom: var(--sp-medium);
}

.bold {
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.6);
}

.about-us__special {
    background-color: var(--cl-red);
    color: white;
    align-self: baseline;
    padding: var(--pd-small);
    border-radius: var(--border-radius);
}

.about-us__special > * {
    display: block;
}

.about-us__special > *:nth-child(2) {
    margin-bottom: var(--sp-small);
}

.about-us__special > a {
    text-decoration: underline;
}

.about-us__img {
    width: clamp(15rem, 30vw, 35rem);
    align-self: baseline;
}

/* 900px */
@media only screen and (max-width: 56.25rem) {
    .about-us__top {
        flex-direction: column-reverse;
    }
}

/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
