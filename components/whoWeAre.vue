<script setup lang="ts">
    const { t } = useI18n()
</script>
<template>
    <div class="flex items-center justify-center p-4">
        <div class="flex flex-col items-center justify-center h-full gap-4 lg:max-w-6xl lg:gap-20">
            <h2 class="justify-self-end">{{ t("p10.1") }}</h2>
            <div class="flex flex-col items-center justify-center gap-4 h-5/6 lg:flex-row lg:h-auto lg:gap-20 2xl:gap-40 space-between">
                <div class="flex items-center justify-center w-full gap-4 lg:flex-col h-1/3 lg:h-auto">
                    <img class="mb-6 rounded-full h-5/6 max-h-xs lg:h-auto lg:w-full lg:max-w-xs" src="~/assets/Indie-Passfoto-Benni.jpg" />
                    <div class="flex flex-col items-start justify-center w-1/2 lg:items-center lg:w-auto text-text sm:text-subtitle">
                        <div>Benjamin Hoffmann</div>
                        <div>{{ t("p10.2") }}</div>
                        <div>
                            <NuxtLink href="mailto:info@indiezone.de" class="text-[#0B64A8] underline text-annotation lg:text-text">{{
                                t("p10.5")
                            }}</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full gap-4 lg:flex-col h-1/3 lg:h-auto">
                    <img class="mb-6 rounded-full h-5/6 max-h-xs lg:h-auto lg:w-full lg:max-w-xs" src="~/assets/Indie-Passfoto-Richard.png" />
                    <div class="flex flex-col items-start justify-center w-1/2 lg:items-center lg:w-auto text-text sm:text-subtitle">
                        <div>Richard Schreiber</div>
                        <div>{{ t("p10.3") }}</div>
                        <div>
                            <NuxtLink href="mailto:info@indiezone.de" class="text-[#0B64A8] underline text-annotation lg:text-text">{{
                                t("p10.5")
                            }}</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full gap-4 lg:flex-col h-1/3 lg:h-auto">
                    <img class="mb-6 rounded-full h-5/6 max-h-xs lg:h-auto lg:w-full lg:max-w-xs" src="~/assets/Indie-Passfoto-Klara.png" />
                    <div class="flex flex-col items-start justify-center w-1/2 lg:items-center lg:w-auto text-text sm:text-subtitle">
                        <div>Klara Prettl</div>
                        <div>{{ t("p10.4") }}</div>
                        <div>
                            <NuxtLink href="mailto:info@indiezone.de" class="text-[#0B64A8] underline text-annotation lg:text-text">{{
                                t("p10.5")
                            }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
