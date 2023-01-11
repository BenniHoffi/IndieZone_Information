<script setup lang="ts">
    const img = ref("w-full lg:h-5/6 lg:w-auto")
    const strip = ref("w-0")
    const text = ref("opacity-0")

    setTimeout(() => {
        img.value = "w-[197.833px] lg:w-auto lg:h-[177px]"
        strip.value = "w-full"
        text.value = ""
    }, 100)
</script>
<template>
    <div class="relative flex flex-col items-center justify-center">
        <LangSelect />
        <div :class="strip" class="absolute transition-all duration-1000 ease-in delay-1000 h-[42px] top-[197px] bg-primary" />
        <img
            :class="img"
            class="absolute transition-all duration-1000 ease-in delay-1000 top-16"
            src="~/assets/IndieZoneLogoBordered.png"
            alt="IndieZone Logo" />
        <div :class="text" class="flex flex-col items-center text-center transition-opacity duration-1000 ease-in delay-[2000ms] px-2 pt-44">
            <h1>{{ $t("p1.1") }}</h1>
            <h3>{{ $t("p1.2") }}</h3>
            <h3>{{ $t("p1.3") }}</h3>
        </div>
    </div>
</template>
