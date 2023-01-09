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
    <div ref="target" class="p-4 sm:p-36">
        <h2 class="mb-10">{{ $t("p7.1") }}</h2>
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
            <div class="h-56 sm:h-auto sm:w-1/3">
                <img
                    :class="imgClass"
                    class="h-full transition-transform duration-1000 sm:h-auto sm:w-5/6"
                    src="~/assets/MarkHat.png"
                    alt="Stickfigure Mark with hat" />
            </div>
            <div :class="textClass" class="transition-transform duration-1000 h-1/2 sm:h-auto sm:w-2/3">
                <ul class="pl-4 space-y-1 list-disc sm:space-y-2 sm:pl-0 text-text sm:text-heading text-secondary">
                    <li>{{ $t("p7.2") }}</li>
                    <li>{{ $t("p7.3") }}</li>
                    <li>{{ $t("p7.4") }}</li>
                    <li>{{ $t("p7.5") }}</li>
                    <li>{{ $t("p7.6") }}</li>
                    <li>{{ $t("p7.7") }}</li>
                    <li>{{ $t("p7.8") }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
