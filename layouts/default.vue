<script setup lange="ts">
    useSchemaOrg([
        defineOrganization({
            name: "Indiezone",
            logo: "/favicons/android-chrome-512x512.png",
            email: "info@indiezone.de",
        }),
        defineWebSite({
            url: "https://indiezone.de",
            name: "Indiezone",
            description: "online stöbern - lokal kaufen",
        }),
        defineWebPage(),
    ])
</script>
<template>
    <main class="font-myriad">
        <div class="flex flex-col w-full">
            <slot />
        </div>
    </main>
</template>
