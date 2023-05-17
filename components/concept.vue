<script setup lang="ts">
    const { t, locale } = useI18n()
</script>
<template>
    <div class="flex flex-col items-center justify-center p-2 pt-10 lg:p-8">
        <h2>{{ t("concept.1") }}</h2>
        <div class="h-full overflow-hidden lg:h-auto">
            <img
                v-if="locale == 'de'"
                class="hidden w-full max-h-full max-w-7xl lg:block"
                src="~/assets/Concept.png"
                alt="Flowchart of our concept" />
            <img v-else class="hidden w-full max-h-full max-w-7xl lg:block" src="~/assets/ConceptEng.png" alt="Flowchart of our concept" />
            <img v-if="locale == 'de'" class="w-full max-h-full lg:hidden" src="~assets/ConceptMobile.png" alt="Flowchart of our concept" />
            <img v-else class="w-full max-h-full lg:hidden" src="~assets/ConceptMobileEng.png" alt="Flowchart of our concept" />
        </div>
    </div>
</template>
