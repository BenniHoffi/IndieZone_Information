<script setup lang="ts">
    const { t } = useI18n()
    // const img = ref("w-full lg:h-5/6 lg:w-auto")
    // const strip = ref("w-0")
    // const text = ref("opacity-0")

    // setTimeout(() => {
    //     img.value = "w-[197.833px] lg:w-auto lg:h-[177px]"
    //     strip.value = "w-full"
    //     text.value = ""
    // }, 100)

    const img = ref("w-[197.833px] lg:w-auto lg:h-[177px]")
    const strip = ref("w-full")
    const text = ref("")
</script>
<template>
    <div class="relative flex flex-col items-center justify-center">
        <div :class="strip" class="absolute transition-all duration-1000 ease-in delay-1000 h-[42px] top-[197px] bg-primary" />
        <img
            :class="img"
            class="absolute transition-all duration-1000 ease-in delay-1000 top-16"
            src="~/assets/IndieZoneLogoBordered.png"
            alt="IndieZone Logo" />
        <div
            :class="text"
            class="flex grow flex-col items-center text-center transition-opacity duration-1000 ease-in delay-[2000ms] px-2 pt-72 lg:pt-96">
            <h1 class="text-heading lg:text-title">
                {{ t("p1.1") }} <br class="sm:hidden" />
                {{ t("p1.1-5") }}
            </h1>
            <h3 class="text-annotation xs:text-text lg:text-subtitle">{{ t("p1.2") }}</h3>
            <h3 class="text-annotation xs:text-text lg:text-subtitle">{{ t("p1.3") }}</h3>
        </div>
        <img
            class="w-full p-4 sm:mb-0 sm:p-0 sm:absolute sm:top-10 sm:right-10 sm:w-[22%] sm:max-w-md"
            src="~/assets/EFRE-Banner.jpg"
            alt="Banner Europäischer Fonds für regionale Entwicklung" />
    </div>
</template>
