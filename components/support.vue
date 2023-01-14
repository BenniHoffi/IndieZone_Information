<script setup lang="ts">
    const { t } = useI18n()
</script>
<template>
    <div class="flex items-center justify-center p-4">
        <div class="flex flex-col items-center justify-center gap-4 sm:gap-20 lg:max-w-6xl lg:gap-36">
            <h2 class="justify-self-end">{{ t("p11.1") }}</h2>
            <div class="flex flex-col items-center justify-center w-full gap-4 h-1/2 lg:gap-64 lg:flex-row">
                <div class="h-2/3 lg:h-auto lg:w-1/2">
                    <ul class="pl-4 space-y-2 list-disc text-text lg:text-subtitle text-secondary">
                        <li>{{ t("p11.2") }}</li>
                        <li>{{ t("p11.3") }}</li>
                        <li>{{ t("p11.4") }}</li>
                        <li>{{ t("p11.5") }}</li>
                        <!-- <li>Teile <b>indiezone.de</b> mit Freunden</li> -->
                    </ul>
                </div>
                <div class="flex flex-col items-center gap-4 lg:gap-10 lg:items-start h-1/3 lg:h-auto lg:w-1/2">
                    <p class="text-heading">{{ t("p11.6") }}</p>
                    <NuxtLink
                        href="mailto:info@indiezone.de"
                        class="px-4 py-2 mb-6 text-white transition-shadow rounded-lg hover:shadow-xl hover:shadow-neutral bg-secondary text-subtitle"
                        >{{ t("p11.7") }} info@indiezone.de</NuxtLink
                    >
                    <br />
                    <!-- <p class="text-heading">Teilen.</p>
                <div class="flex gap-4">
                    <button class="w-10"><img class="w-full" /></button>
                    <button class="w-10"><img class="w-full" /></button>
                    <button class="w-10"><img class="w-full" /></button>
                </div> -->
                </div>
            </div>
            <div class="flex flex-col items-center self-end justify-center gap-4 lg:flex-row lg:gap-64">
                <p class="w-full lg:w-1/2 text-secondary text-annotation lg:text-subtitle">
                    {{ t("p11.8") }}
                </p>
                <div class="self-start w-full lg:w-1/2">
                    <img class="w-full lg:max-w-md" src="~/assets/EFRE-Banner.jpg" alt="Banner Europäischer Fonds für regionale Entwicklung" />
                </div>
            </div>
        </div>
    </div>
</template>
