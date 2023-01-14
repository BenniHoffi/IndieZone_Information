<script setup lang="ts">
    const { t } = useI18n()
    const imgClass = ref("translate-x-full")
    const target = ref(null)

    useIntersectionObserver(target, ([{ isIntersecting }]) => {
        if (isIntersecting) {
            imgClass.value = "translate-x-0"
        }
    })
</script>
<template>
    <div ref="target" class="flex items-center justify-center p-4">
        <div class="flex flex-col items-center justify-center gap-4 lg:max-w-6xl lg:gap-32 lg:flex-row">
            <div class="flex flex-col justify-end h-1/2 lg:w-1/2">
                <h2>{{ t("p3.1") }}</h2>
                <h3 class="text-text lg:text-subtitle">
                    {{ t("p3.2") }}
                    <br />
                    {{ t("p3.3") }}
                    <br />
                    {{ t("p3.4") }}
                    <br />
                    {{ t("p3.5") }}
                </h3>
            </div>
            <div class="h-1/2 lg:h-auto lg:w-1/2">
                <div class="relative flex items-start justify-center w-full h-full">
                    <img class="w-full" src="~/assets/MarkSad.png" alt="Stickfigure Mark is sad" />
                    <img
                        :class="imgClass"
                        class="absolute top-0 w-full h-auto transition-transform duration-1000"
                        src="~/assets/Boxes.png"
                        alt="Boxes" />
                </div>
            </div>
        </div>
    </div>
</template>
