<script setup lang="ts"></script>
<template>
    <div class="flex flex-col items-center justify-center p-4 lg:p-36">
        <h2 class="mb-10">{{ $t("p10.1") }}</h2>
        <div class="flex flex-col items-center justify-center gap-4 h-5/6 lg:flex-row lg:gap-40 space-between">
            <div class="flex items-center justify-center w-full gap-4 lg:flex-col h-1/3 lg:h-auto">
                <img
                    class="w-1/2 mb-6 rounded-full sm:w-auto sm:h-2/3 lg:w-auto lg:h-full lg:h-auto lg:w-full"
                    src="~/assets/Indie-Passfoto-Benni.jpg" />
                <div class="flex flex-col items-start justify-center w-1/2 lg:items-center lg:w-auto text-text sm:text-subtitle">
                    <div>Benjamin Hoffmann</div>
                    <div>{{ $t("p10.2") }}</div>
                    <div>
                        <a class="text-[#0B64A8] underline text-annotation lg:text-text" href="#">{{ $t("p10.5") }}</a>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center w-full gap-4 lg:flex-col h-1/3 lg:h-auto">
                <img
                    class="w-1/2 mb-6 rounded-full sm:w-auto sm:h-2/3 lg:w-auto lg:h-full lg:h-auto lg:w-full"
                    src="~/assets/Indie-Passfoto-Richard.png" />
                <div class="flex flex-col items-start justify-center w-1/2 lg:items-center lg:w-auto text-text sm:text-subtitle">
                    <div>Richard Schreiber</div>
                    <div>{{ $t("p10.3") }}</div>
                    <div>
                        <a class="text-[#0B64A8] underline text-annotation lg:text-text" href="#">{{ $t("p10.5") }}</a>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center w-full gap-4 lg:flex-col h-1/3 lg:h-auto">
                <img
                    class="w-1/2 mb-6 rounded-full sm:w-auto sm:h-2/3 lg:w-auto lg:h-full lg:h-auto lg:w-full"
                    src="~/assets/Indie-Passfoto-Klara.png" />
                <div class="flex flex-col items-start justify-center w-1/2 lg:items-center lg:w-auto text-text sm:text-subtitle">
                    <div>Klara Prettl</div>
                    <div>{{ $t("p10.4") }}</div>
                    <div>
                        <a class="text-[#0B64A8] underline text-annotation lg:text-text" href="#">{{ $t("p10.5") }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
