<script setup lang="ts"></script>
<template>
    <div class="flex flex-col h-screen">
        <NuxtLink class="absolute px-6 py-2 text-white rounded-lg top-6 right-6 bg-secondary text-subtitle" to="/">Zurück zur Startseite</NuxtLink>
        <div class="p-4 lg:p-36 grow">
            <h2 class="mt-20 mb-8 lg:mb-28">Impressum.</h2>
            <div class="mb-4 space-y-1 text-subtitle lg:mb-14">
                <p>Klara Prettl</p>
                <p>IndieZone</p>
                <p>Goldbergstraße 31</p>
                <p>01683 Nossen</p>
                <p>Sachsen - Germany</p>
                <br />
                <p>Mail: info@indiezone.de</p>
            </div>
            <div>
                <p>Online-Streitbeilegugn gemäß Art. 14 Abs. 1 ODR-VO:</p>
                <p>Die Europäische Komission stellt eine Plattform zur Online-Streitbeilegung (OS-PLattform) bereit.</p>
                <p>
                    Sie erreichen dies eunter https://ec.europa.eu/consumers/odr/. Wir sind nicht bereit oder verpflichtet, an
                    Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 Abs. 1 Nr. 1 VSBG).
                </p>
            </div>
        </div>
        <div class="flex items-center justify-around w-full h-10 border-t shrink-0 lg:h-14">
            <div><NuxtLink class="underline" to="/Impressum">Impressum</NuxtLink></div>
            <div>&copy; 2023 IndieZone</div>
            <div class="invisible">Placeholder</div>
        </div>
    </div>
</template>
