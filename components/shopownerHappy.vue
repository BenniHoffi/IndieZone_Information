<script setup lang="ts">
    const target = ref(null)
    const imgClass = ref("translate-x-[1000px] translate-y-[1000px]")
    const textClass = ref("translate-y-[1000px]")

    useIntersectionObserver(target, ([{ isIntersecting }]) => {
        if (isIntersecting) {
            imgClass.value = "translate-x-0 translate-y-0"
            textClass.value = "translate-y-0"
        }
    })
</script>
<template>
    <div ref="target" class="flex flex-col items-center justify-center gap-4 p-4 lg:flex-row lg:gap-10 lg:p-36">
        <div :class="textClass" class="flex flex-col justify-end transition-transform duration-1000 h-2/3 sm:h-1/2 lg:h-auto lg:w-2/3">
            <div class="self-end">
                <h2 class="mb-5 lg:mb-10">{{ $t("p8.1") }}</h2>
                <ul class="pl-4 space-y-1 list-disc list-outside lg:space-y-2 lg:pl-0 text-text lg:text-subtitle text-secondary">
                    <li>{{ $t("p8.2") }}</li>
                    <li>{{ $t("p8.3") }}</li>
                    <li>{{ $t("p8.4") }}</li>
                    <li>{{ $t("p8.5") }}</li>
                    <li>{{ $t("p8.6") }}</li>
                    <li>{{ $t("p8.7") }}</li>
                    <li>{{ $t("p8.8") }}</li>
                </ul>
            </div>
        </div>
        <div class="h-1/3 sm:h-1/2 lg:h-auto lg:w-1/3">
            <img
                :class="imgClass"
                class="h-full transition-transform duration-1000 lg:h-auto lg:w-full"
                src="~/assets/ShopownerHappy.png"
                alt="Stickfigure Mark with hat" />
        </div>
    </div>
</template>
