<script setup lang="ts">
    const { t } = useI18n()
    const imgClass = ref("opacity-0 translate-x-[1000px]")
    const target = ref(null)
    useIntersectionObserver(target, ([{ isIntersecting }]) => {
        if (isIntersecting) {
            imgClass.value = ""
        }
    })
</script>
<template>
    <div ref="target" class="flex items-center justify-center p-4">
        <div class="flex flex-col items-center justify-center gap-4 lg:max-w-6xl lg:gap-32 lg:flex-row">
            <div class="flex flex-col justify-end h-1/3 lg:h-auto lg:justify-start lg:w-1/2">
                <h2>{{ t("p2.1") }}</h2>
                <h3>
                    {{ t("p2.2") }}
                    <br />
                    {{ t("p2.3") }}
                </h3>
            </div>
            <div class="lg:self-start h-2/3 lg:w-1/2">
                <img :class="imgClass" class="w-full transition-all duration-1000 ease-in" src="~/assets/MarkLaptopBlue.png" alt="Notebook on Desk" />
            </div>
        </div>
    </div>
</template>
