<script setup lang="ts">
    definePageMeta({
        colorMode: "light",
    })

    useHead({
        link: [{ rel: "canonical", href: "https://indiezone.de/" }],
    })
</script>
<template>
    <div class="w-full h-screen overflow-x-hidden overflow-y-scroll snap-mandatory snap-y">
        <SearchOnline class="w-full h-screen snap-center" />
        <Mark class="w-full h-screen snap-center" />
        <MarksProblem class="w-full h-screen snap-center" />
        <MarkWants class="w-full h-screen snap-center" />
        <Solution1 class="w-full h-screen snap-center" />
        <Solution2 class="w-full h-screen snap-center" />
        <Concept class="w-full h-screen snap-center" />
        <MarkHappy class="w-full h-screen snap-center" />
        <ShopownerHappy class="w-full h-screen snap-center" />
        <Looks class="w-full h-screen snap-center" />
        <WhoWeAre class="w-full h-screen snap-center" />
        <Support class="w-full h-screen snap-center" />
        <Newsletter class="w-full h-screen snap-center" />
    </div>
</template>
