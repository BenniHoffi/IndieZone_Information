<script setup lang="ts">
    useSchemaOrg([
        defineOrganization({
            name: "IndieZone",
            logo: "/favicons/android-chrome-512x512.png",
            email: "info@indiezone.de",
        }),
        defineWebSite({
            url: "https://indiezone.de",
            name: "IndieZone",
            description: "online stöbern - lokal kaufen",
        }),
        defineWebPage(),
    ])
</script>
<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
