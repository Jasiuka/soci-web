<script setup lang="ts">
import { RouterView } from "vue-router"
import { useSettingsStore } from "./stores/settingsStore"
import { onBeforeMount } from "vue"

const { getThemeFromLocal } = useSettingsStore()

onBeforeMount(() => {
    getThemeFromLocal()
})
</script>

<template>
    <RouterView />
</template>
