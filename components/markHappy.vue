<script setup lang="ts">
    const { t } = useI18n()
    const target = ref(null)
    const imgClass = ref("translate-x-[1000px] translate-y-[1000px]")
    const textClass = ref("translate-y-[1000px]")

    useIntersectionObserver(target, ([{ isIntersecting }]) => {
        if (isIntersecting) {
            imgClass.value = ""
            textClass.value = ""
        }
    })
</script>
<template>
    <div ref="target" class="relative flex flex-col items-center justify-center p-4 lg:p-10">
        <h2 class="hidden justify-self-end lg:inline">{{ t("p7.1") }}</h2>
        <div class="flex flex-col items-center justify-center h-full gap-4 pt-4 lg:h-5/6 lg:flex-row lg:gap-10">
            <h2 class="justify-self-end lg:hidden">{{ t("p7.1") }}</h2>

            <div class="h-1/3 sm:h-1/2 lg:h-auto lg:w-1/3">
                <img
                    :class="imgClass"
                    class="h-full transition-transform duration-1000 lg:h-auto lg:w-5/6 2xl:w-9/12"
                    src="~/assets/MarkHat.png"
                    alt="Stickfigure Mark with hat" />
            </div>
            <div :class="textClass" class="flex items-center transition-transform duration-1000 sm:h-1/2 lg:h-auto lg:w-2/3">
                <ul class="pl-4 space-y-1 list-disc lg:space-y-2 lg:pl-0 text-annotation xs:text-text sm:text-subtitle text-secondary">
                    <li>{{ t("p7.2") }}</li>
                    <li>{{ t("p7.3") }}</li>
                    <li>{{ t("p7.4") }}</li>
                    <li>{{ t("p7.5") }}</li>
                    <li>{{ t("p7.6") }}</li>
                    <li>{{ t("p7.7") }}</li>
                    <li>{{ t("p7.8") }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
