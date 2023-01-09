<script setup lang="ts">
    definePageMeta({
        colorMode: "light",
    })
</script>
<template>
    <div class="w-full h-screen overflow-x-hidden overflow-y-scroll snap-mandatory snap-y">
        <SearchOnline class="w-full h-screen snap-center" />
        <hr />
        <Mark class="w-full h-screen snap-center" />
        <hr />
        <MarksProblem class="w-full h-screen snap-center" />
        <hr />
        <MarkWants class="w-full h-screen snap-center" />
        <hr />
        <Solution1 class="w-full h-screen snap-center" />
        <hr />
        <Solution2 class="w-full h-screen snap-center" />
        <hr />
        <MarkHappy class="w-full h-screen snap-center" />
        <hr />
        <ShopownerHappy class="w-full h-screen snap-center" />
        <hr />
        <Looks class="w-full h-screen snap-center" />
        <hr />
        <WhoWeAre class="w-full h-screen snap-center" />
        <hr />
        <Support class="w-full h-screen snap-center" />
        <hr />
        <Newsletter class="w-full h-screen snap-center" />
    </div>
</template>
