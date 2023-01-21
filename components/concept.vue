<script setup lang="ts">
const { t } = useI18n();
</script>
<template>
  <div class="flex flex-col items-center justify-center p-2 pt-10 lg:p-8">
    <h2>{{ t("concept.1") }}</h2>
    <div class="overflow-hidden">
      <img
        class="hidden w-full max-w-7xl lg:block"
        src="~/assets/Concept.png"
        alt="Flowchart of our concept"
      />
      <img
        class="w-full lg:hidden"
        src="~assets/ConceptMobile.png"
        alt="Flowchart of our concept"
      />
    </div>
  </div>
</template>
