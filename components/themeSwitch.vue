<script setup lang="ts">
    import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline"
</script>
<template>
    <ColorScheme placeholder="...">
        <button class="w-8 h-8" @click="$colorMode.value === 'light' ? ($colorMode.preference = 'dark') : ($colorMode.preference = 'light')">
            <MoonIcon v-if="$colorMode.value === 'light'" />
            <SunIcon v-else />
        </button>
    </ColorScheme>
</template>
