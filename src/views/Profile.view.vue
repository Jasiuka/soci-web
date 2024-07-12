<template>
    <TheLayout>
        <BaseSection
            custom-section-class="profile"
            custom-layout-class="profile__layout"
            section-heading="Mano Profilis"
        >
            <template #default>
                <div class="profile__settings">
                    <ProfileBlock
                        heading="Paskyros nustatymai"
                        :in-edit="inEdit"
                        name="account"
                        :data="fakeData"
                        @edit-mode="handleInEdit"
                    >
                        <CustomButton
                            :class="{
                                disabled:
                                    inEdit !== 'password_change' &&
                                    inEdit !== ''
                            }"
                            :disabled="
                                inEdit !== 'password_change' && inEdit !== ''
                            "
                            class="mb-medium"
                            :button-text="'Pakeisti slaptažodį'"
                            :button-title="'Pakeisti slaptažodį'"
                            button-size="extra-small"
                            :button-style="
                                inEdit === 'password_change'
                                    ? 'outline'
                                    : 'regular'
                            "
                            @click="
                                () => {
                                    inEdit =
                                        inEdit === 'password_change'
                                            ? ''
                                            : 'password_change'
                                }
                            "
                        />
                        <PasswordChangeBox
                            v-if="inEdit === 'password_change'"
                        />
                    </ProfileBlock>
                    <ProfileBlock
                        heading="Profilio nustatymai"
                        name="profile"
                        :in-edit="inEdit"
                        :data="fakeDataToo"
                        @edit-mode="handleInEdit"
                    >
                        <div class="profile__settings-extra">
                            <div>
                                <label title="Įkelti savo CV" for="cv">
                                    Įkelti CV
                                </label>
                                <span>CV neįkeltas</span>
                                <input id="cv" type="file" />
                            </div>
                            <textarea
                                placeholder="Pateikite trumpą aprašymą apie save..."
                            ></textarea>
                        </div>
                    </ProfileBlock>
                </div>
            </template>
        </BaseSection>
    </TheLayout>
</template>

<script lang="ts" setup>
import ProfileBlock from "@/components/Profile/ProfileBlock.component.vue"
import PasswordChangeBox from "@/components/Profile/PasswordChangeBox.component.vue"
import { useApiStore } from "@/stores/useApiStore"
import { computed, onMounted, ref } from "vue"

const accountData = ref<any>(null)
const profileData = ref<any>(null)

const { receiveData } = useApiStore()
const inEdit = ref<"password_change" | "profile" | "account" | "">("")
function handleInEdit(name: "password_change" | "profile" | "account" | "") {
    if (inEdit.value === name) {
        inEdit.value = ""
        return
    }

    inEdit.value = name
}

const fakeData = [
    {
        setting_name: "email",
        display: "El. paštas",
        value: "random@gmail.com",
        editable: true
    }
]

const fakeDataToo = [
    {
        setting_name: "name",
        display: "Vardas",
        value: "Lukas",
        editable: true
    },
    {
        setting_name: "last_name",
        display: "Pavardė",
        value: "Jasiukaitis",
        editable: true
    },
    {
        setting_name: "phone",
        display: "Tel. Numeris",
        value: "+3705484566",
        editable: true
    },
    {
        setting_name: "school",
        display: "Mokykla",
        value: "Jono Biliūno gimnazija",
        editable: false
    },
    {
        setting_name: "class",
        display: "Klasė",
        value: "9D",
        editable: false
    }
]

onMounted(async () => {
    const data = await Promise.all([receiveData("users"), receiveData("posts")])
    if (data) {
        console.log(data)
    }
})
</script>
<style scoped>
.profile__settings {
    max-width: max-content;
    position: relative;
}

.profile__settings-extra,
.profile__settings {
    display: flex;
    flex-direction: column;
    gap: var(--sp-medium);
}

.profile__settings-theme {
    display: flex;
    gap: var(--sp-small);
    align-items: center;
}

.profile__settings-extra div {
    display: flex;
    align-items: center;
    gap: 8px;
}

.profile__settings-extra textarea {
    font-family: inherit;
    max-width: 30rem;
    max-height: 15rem;
    min-height: 5rem;
    min-width: 30rem;
    background-color: var(--cl-bg-primary);
    color: var(--cl-text-primary);
    border: 2px solid var(--cl-primary);
    padding: 5px;
    border-radius: var(--border-radius);
}

.profile__settings-extra label {
    font-size: var(--fs-small);
    text-transform: uppercase;
    padding: 4px 6px;
    border-radius: var(--border-radius);
    border: 2px solid var(--cl-bg-secondary);
    width: fit-content;
    cursor: pointer;
    transition: var(--transition);
}

.profile__settings-extra label:hover {
    background-color: var(--cl-bg-secondary);
    color: var(--cl-text-secondary);
}

#cv {
    display: none;
}
</style>
