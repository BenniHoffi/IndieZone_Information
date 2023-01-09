<script setup lang="ts"></script>
<template>
    <div class="flex flex-col items-center justify-center gap-4 p-4 sm:gap-10 sm:p-36">
        <h2 class="mb-10">{{ $t("p11.1") }}</h2>
        <div class="flex flex-col items-center justify-center gap-4 sm:gap-10 sm:flex-row sm:space-x-52">
            <div class="h-2/3 sm:h-auto sm:w-1/2">
                <ul class="pl-4 space-y-2 list-disc text-text sm:text-subtitle text-secondary">
                    <li>{{ $t("p11.2") }}</li>
                    <li>{{ $t("p11.3") }}</li>
                    <li>{{ $t("p11.4") }}</li>
                    <li>{{ $t("p11.5") }}</li>
                    <!-- <li>Teile <b>indiezone.de</b> mit Freunden</li> -->
                </ul>
            </div>
            <div class="space-y-10 h-1/3 sm:h-auto sm:w-1/2">
                <p class="text-heading">{{ $t("p11.6") }}</p>
                <button @click="" class="px-4 py-2 text-white rounded-lg bg-secondary text-subtitle">{{ $t("p11.7") }} info@indiezone.de</button>
                <br />
                <!-- <p class="text-heading">Teilen.</p>
                <div class="flex gap-4">
                    <button class="w-10"><img class="w-full" /></button>
                    <button class="w-10"><img class="w-full" /></button>
                    <button class="w-10"><img class="w-full" /></button>
                </div> -->
            </div>
        </div>
    </div>
</template>
