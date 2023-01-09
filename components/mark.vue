<script setup lang="ts">
    const imgClass = ref("opacity-0")
    const target = ref(null)
    useIntersectionObserver(target, ([{ isIntersecting }]) => {
        if (isIntersecting) {
            imgClass.value = "opacity-1"
        }
    })
</script>
<template>
    <div ref="target" class="flex flex-col items-center justify-center gap-4 p-2 sm:flex-row sm:p-52">
        <div class="flex flex-col justify-end h-1/2 sm:h-auto sm:justify-start sm:w-1/2">
            <h2>{{ $t("p2.1") }}</h2>
            <h3>
                {{ $t("p2.2") }}
                <br />
                {{ $t("p2.3") }}
            </h3>
        </div>
        <div class="sm:self-start h-1/2 sm:w-1/2">
            <img :class="imgClass" class="w-full transition-opacity duration-1000 ease-in" src="~/assets/MarkLaptopBlue.png" alt="Notebook on Desk" />
        </div>
    </div>
</template>
