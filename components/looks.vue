<script setup lang="ts"></script>
<template>
  <div class="flex flex-col items-center justify-center p-2 pt-10 lg:p-8">
    <h2>{{ $t("p9.1") }}</h2>
    <div class="h-full overflow-hidden">
      <img
        class="hidden w-full max-w-7xl lg:block"
        src="~/assets/IndieZoneScreenshot.png"
        alt="IndieZone.de Website Preview"
      />
      <img
        class="w-full lg:hidden"
        src="~assets/IndieZoneScreenshotMobile.png"
        alt="IndieZone.de Website Preview"
      />
    </div>
  </div>
</template>
