<script setup lang="ts">
    function submit(data: { email: string }) {
        console.log(data.email)
    }
</script>
<template>
    <div class="flex flex-col items-center justify-center px-4">
        <div class="flex flex-col items-center justify-center grow">
            <h2 class="mb-20 lg:mb-40">{{ $t("p12.1") }}</h2>
            <div class="w-full sm:w-2/3 lg:w-1/2">
                <FormKit :submit-label="$t('p12.4')" :config="{ validationVisibility: 'submit' }" type="form" @submit="submit">
                    <FormKit
                        type="email"
                        name="email"
                        :placeholder="$t('p12.2')"
                        :help="$t('p12.3')"
                        validation="required|email"
                        validation-visibility="submit" />
                </FormKit>
            </div>
        </div>
        <div class="flex items-center justify-around w-full h-10 border-t shrink-0 lg:h-14">
            <div>
                <NuxtLink class="underline" to="/Impressum">{{ $t("p12.5") }}</NuxtLink>
            </div>
            <div>&copy; 2023 IndieZone</div>
            <div class="invisible">Placeholder</div>
        </div>
    </div>
</template>
