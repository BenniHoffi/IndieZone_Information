<script setup lang="ts">
    const { t } = useI18n()
    const target = ref(null)
    const imgClass = ref("-translate-x-[1000px] translate-y-[1000px]")
    const textClass = ref("translate-y-[1000px]")

    useIntersectionObserver(target, ([{ isIntersecting }]) => {
        if (isIntersecting) {
            imgClass.value = "translate-x-0 translate-y-0"
            textClass.value = "translate-y-0"
        }
    })
</script>
<template>
    <div ref="target" class="flex items-center justify-center p-4">
        <div class="flex flex-col items-center justify-center gap-4 lg:max-w-6xl lg:gap-32 lg:flex-row">
            <div class="flex items-end justify-end w-auto h-1/2 lg:h-auto lg:w-1/2">
                <img :class="imgClass" class="w-full transition-transform duration-1000" src="~/assets/MarkLaptopGreen.png" alt="Stickfigure Mark" />
            </div>
            <div :class="textClass" class="w-auto transition-transform duration-1000 h-1/2 lg:h-auto lg:w-1/2">
                <h2>{{ t("p5.1") }}</h2>
                <h3>
                    {{ t("p5.2") }}
                    <b>{{ t("p5.3") }}</b>
                    {{ t("p5.4") }}
                </h3>
            </div>
        </div>
    </div>
</template>
