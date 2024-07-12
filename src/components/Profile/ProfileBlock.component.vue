<template>
    <div class="profile-block">
        <div class="profile-block__top">
            <h3 class="profile-block__heading">{{ heading }}</h3>
            <CustomButton
                :button-text="editMode ? 'Išsaugoti' : 'Redaguoti'"
                :button-title="editMode ? 'Išsaugoti' : 'Redaguoti'"
                button-size="extra-small"
                :class="{ disabled: inEdit !== '' && inEdit !== name }"
                :disabled="inEdit !== '' && inEdit !== name"
                @click="emit('editMode', name)"
            />
        </div>
        <div class="profile-block__content">
            <form ref="form" class="profile__settings">
                <div
                    v-for="{ setting_name, display, value, editable } in data"
                    :key="display"
                    :class="`profile__settings-${setting_name}`"
                    class="profile__settings-box"
                >
                    <template v-if="editMode && editable">
                        <InputControl
                            :label="display"
                            input-type="text"
                            :input-name="setting_name"
                            :input-value="value"
                        />
                    </template>
                    <template v-else>
                        <span>{{ display }}:</span>
                        <span class="semi-bold">{{ value }}</span>
                    </template>
                </div>
            </form>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue"

const props = defineProps<{
    heading: string
    name: string
    inEdit: string
    data: {
        display: string
        value: string
        editable: boolean
        setting_name: string
    }[]
}>()

const form = ref(null)

const editMode = computed(() => props.inEdit === props.name)

const emit = defineEmits(["editMode"])
</script>

<style scoped>
.profile-block {
    display: flex;
    flex-direction: column;
    gap: var(--sp-small);
}

.profile-block__top {
    width: fit-content;
    align-items: center;
    display: flex;
    gap: var(--sp-small);
}

.profile-block__top > h3 {
    flex: 1;
}

.profile-block__heading {
    text-transform: uppercase;
    font-weight: 500;
}

.profile__settings {
    display: flex;
    flex-direction: column;
    gap: var(--sp-medium);
    margin-bottom: var(--sp-small);
    border-bottom: 1px solid var(--cl-grey);
    padding-bottom: var(--pd-small);
}

.profile__settings-box {
    display: flex;
    align-items: center;
    gap: calc(var(--sp-small) - 0.8rem);
}
</style>
