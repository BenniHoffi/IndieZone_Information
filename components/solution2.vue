<script setup lang="ts">
    const target = ref(null)
    const imgClass = ref("translate-x-[1000px] translate-y-[1000px]")

    useIntersectionObserver(target, ([{ isIntersecting }]) => {
        if (isIntersecting) {
            imgClass.value = "translate-x-0 translate-y-0"
        }
    })
</script>
<template>
    <div ref="target" class="flex flex-col items-center justify-center gap-4 p-4 sm:flex-row sm:gap-10 sm:p-36">
        <div class="flex items-end justify-end w-auto h-2/5 sm:h-auto sm:w-1/2">
            <img :class="imgClass" class="w-full transition-transform duration-1000" src="~/assets/MarkShopowner.png" alt="Shopowner stickfigure" />
        </div>
        <div class="h-3/5 sm:h-auto sm:w-1/2">
            <h2>{{ $t("p6.1") }}</h2>
            <h3>
                {{ $t("p6.2") }}
                <br />
                {{ $t("p6.3") }}
            </h3>
        </div>
    </div>
</template>
