<template>
    <a
        v-if="hyperlink"
        :href="hyperlink"
        :class="[customClass, buttonStyle, buttonSize]"
        :title="buttonTitle"
        class="custom-button"
        >{{ buttonText }}</a
    >
    <button
        v-else
        class="custom-button"
        :title="buttonTitle"
        :class="[customClass, buttonStyle, buttonSize]"
        :type="buttonType"
    >
        {{ buttonText }}
    </button>
</template>

<script lang="ts" setup>
import type { ButtonHTMLAttributes } from "vue"
import { ButtonStyles, ButtonSizes } from "@/types"

type Props = {
    buttonText: string
    buttonTitle: string
    customClass?: string
    buttonType?: ButtonHTMLAttributes["type"]
    buttonStyle?: ButtonStyles
    buttonSize?: ButtonSizes
    hyperlink?: string
}

withDefaults(defineProps<Props>(), {
    buttonType: "button",
    buttonStyle: ButtonStyles.REGULAR,
    buttonSize: ButtonSizes.MEDIUM
})
</script>

<style scoped>
.custom-button {
    padding: calc(var(--pd-small) - 0.3rem);
    transition: var(--transition);
    border-radius: var(--border-radius);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border: 2px solid transparent;
}

/* STYLES  */

.custom-button.regular {
    background-color: var(--cl-primary);
    color: var(--cl-primary-text);
}

.custom-button.regular:hover {
    background-color: var(--cl-bg-primary);
    color: var(--cl-text-primary);
    border-color: var(--cl-primary);
}

.custom-button.outline {
    background-color: var(--cl-bg-primary);
    color: var(--cl-text-primary);
    border-color: var(--cl-primary);
}

.custom-button.outline:hover {
    background-color: var(--cl-primary);
    color: var(---cl-primary-text);
}

.custom-button.no_bg {
    background-color: transparent;
    color: var(--cl-text-primary);
    padding: unset;
    font-weight: 600;
    box-shadow: unset;
}

.custom-button.no_bg:hover {
    color: var(--cl-primary);
}

.custom-button.secondary {
    background-color: transparent;
    color: var(--cl-text-primary);
    padding: unset;
    font-weight: 400;
    box-shadow: unset;
}

.custom-button.secondary:hover {
    color: var(--cl-text-primary-dark);
}

/* SIZES */

.custom-button.extra-small {
    padding: calc(var(--pd-small) - 0.6rem);
    font-size: var(--fs-small);
}

.custom-button.small {
    font-size: var(--fs-small);
}

.custom-button.medium {
    font-size: calc(var(--fs-medium) - 0.5rem);
}

.custom-button.large {
    font-size: var(--fs-medium);
}

/* DISABLED */

.custom-button.disabled {
    opacity: 0.6;
    background-color: var(--cl-primary-dark);
    pointer-events: none;
}
</style>
