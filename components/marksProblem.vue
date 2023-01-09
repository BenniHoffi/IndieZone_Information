<script setup lang="ts">
    const imgClass = ref("translate-x-full")
    const target = ref(null)

    useIntersectionObserver(target, ([{ isIntersecting }]) => {
        if (isIntersecting) {
            imgClass.value = "translate-x-0"
        }
    })
</script>
<template>
    <div ref="target" class="flex flex-col items-center justify-center gap-4 p-2 sm:flex-row sm:gap-10 sm:p-36">
        <div class="flex flex-col justify-end h-1/2 sm:w-1/2">
            <h2>{{ $t("p3.1") }}</h2>
            <h3 class="text-text sm:text-subtitle">
                {{ $t("p3.2") }}
                <br />
                {{ $t("p3.3") }}
                <br />
                {{ $t("p3.4") }}
                <br />
                {{ $t("p3.5") }}
            </h3>
        </div>
        <div class="h-1/2 sm:h-auto sm:w-1/2">
            <div class="relative flex items-start justify-center w-full h-full">
                <img class="w-full" src="~/assets/MarkSad.png" alt="Stickfigure Mark is sad" />
                <img :class="imgClass" class="absolute top-0 w-full h-auto transition-transform duration-1000" src="~/assets/Boxes.png" alt="Boxes" />
            </div>
        </div>
    </div>
</template>
