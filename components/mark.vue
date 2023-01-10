<script setup lang="ts">
    const imgClass = ref("opacity-0 translate-x-[1000px]")
    const target = ref(null)
    useIntersectionObserver(target, ([{ isIntersecting }]) => {
        if (isIntersecting) {
            imgClass.value = ""
        }
    })
</script>
<template>
    <div ref="target" class="flex flex-col items-center justify-center gap-4 p-2 lg:flex-row lg:p-10 xl:p-36">
        <div class="flex flex-col justify-end h-1/2 lg:h-auto lg:justify-start lg:w-1/2">
            <h2>{{ $t("p2.1") }}</h2>
            <h3>
                {{ $t("p2.2") }}
                <br />
                {{ $t("p2.3") }}
            </h3>
        </div>
        <div class="lg:self-start h-1/2 lg:w-1/2">
            <img :class="imgClass" class="w-full transition-all duration-1000 ease-in" src="~/assets/MarkLaptopBlue.png" alt="Notebook on Desk" />
        </div>
    </div>
</template>
