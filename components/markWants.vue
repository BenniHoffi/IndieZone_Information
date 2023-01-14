<script setup lang="ts">
    const { t } = useI18n()
    const target = ref(null)
    const checkClass = ref("scale-[4.0] opacity-0")
    const circleClass = ref("translate-y-[500px] opacity-0")

    useIntersectionObserver(target, ([{ isIntersecting }]) => {
        if (isIntersecting) {
            circleClass.value = "translate-y-0 opacity-1"
            setTimeout(() => {
                checkClass.value = "scale-1 opacity-1"
            }, 3000)
        }
    })
</script>
<template>
    <div ref="target" class="flex flex-col items-center justify-center p-4">
        <h2 class="mb-10">{{ t("p4.1") }}</h2>
        <ul class="space-y-2 list-none text-text lg:text-subtitle text-secondary">
            <li :class="circleClass" class="relative flex items-center gap-1 transition-all duration-1000 ease-in lg:gap-2">
                <img class="-translate-y-1 h-9 lg:h-11" src="~/assets/Circle.png" />
                <img :class="checkClass" class="absolute transition-transform duration-1000 -translate-y-1 h-9 lg:h-11" src="~/assets/Check.png" />
                {{ t("p4.2") }}
            </li>
            <li :class="circleClass" class="relative flex items-center gap-1 transition-all duration-1000 ease-in delay-500 lg:gap-2">
                <img class="-translate-y-1 h-9 lg:h-11" src="~/assets/Circle.png" />
                <img :class="checkClass" class="absolute transition-transform duration-1000 -translate-y-1 h-9 lg:h-11" src="~/assets/Check.png" />
                {{ t("p4.3") }}
            </li>
            <li :class="circleClass" class="relative flex items-center gap-1 transition-all duration-1000 ease-in delay-1000 lg:gap-2">
                <img class="-translate-y-1 h-9 lg:h-11" src="~/assets/Circle.png" />
                <img :class="checkClass" class="absolute transition-transform duration-1000 -translate-y-1 h-9 lg:h-11" src="~/assets/Check.png" />
                {{ t("p4.4") }}
            </li>
            <li :class="circleClass" class="relative flex items-center gap-1 lg:gap-2 transition-all duration-1000 ease-in delay-[1500ms]">
                <img class="-translate-y-1 h-9 lg:h-11" src="~/assets/Circle.png" />
                <img :class="checkClass" class="absolute transition-transform duration-1000 -translate-y-1 h-9 lg:h-11" src="~/assets/Check.png" />
                {{ t("p4.5") }}
            </li>
            <li :class="circleClass" class="relative flex items-center gap-1 lg:gap-2 transition-all duration-1000 ease-in delay-[2000ms]">
                <img class="-translate-y-1 h-9 lg:h-11" src="~/assets/Circle.png" />
                <img :class="checkClass" class="absolute transition-transform duration-1000 -translate-y-1 h-9 lg:h-11" src="~/assets/Check.png" />
                {{ t("p4.6") }}
            </li>
        </ul>
    </div>
</template>
