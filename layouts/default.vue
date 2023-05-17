<script setup lange="ts">
    import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline"
</script>
<template>
    <main class="font-myriad">
        <div class="absolute z-10 w-screen h-screen flex flex-col items-center">
            <div
                class="backdrop-blur-md z-20 flex w-full h-72 p-2 md:p-10 lg:p-20 gap-2 lg:gap-10 items-center justify-center text-secondary text-center">
                <ExclamationTriangleIcon class="w-12 h-12 md:w-32 md:h-32" />
                <span class="text-heading md:text-title">Hier wird gerade umgebaut</span>
            </div>
        </div>
        <div class="flex flex-col z-0 w-full">
            <slot />
        </div>
    </main>
</template>
