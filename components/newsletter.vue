<script setup lang="ts">
    import { Database } from "composables/database.types"

    const localePath = useLocalePath()
    const { t } = useI18n()
    const client = useSupabaseClient<Database>()

    const emailSent = ref(false)
    const errorDiv = ref(false)
    const duplicateError = ref(false)

    async function submit(data: { email: string }) {
        const { error } = await client.from("newsletter_emails").insert<{ email: string }>([{ email: data.email }])
        if (error) {
            if (error.code === "23505") {
                duplicateError.value = true
            } else {
                errorDiv.value = true
            }
        } else {
            emailSent.value = true
        }
    }
</script>
<template>
    <div class="flex flex-col items-center justify-center px-4">
        <div class="flex flex-col items-center justify-center grow">
            <h2 class="mb-20 lg:mb-40">{{ t("p12.1") }}</h2>
            <div v-if="!emailSent" class="w-full sm:w-2/3 lg:w-1/2">
                <FormKit :submit-label="t('p12.4')" :config="{ validationVisibility: 'submit' }" type="form" @submit="submit">
                    <FormKit
                        type="email"
                        name="email"
                        :placeholder="t('p12.2')"
                        :help="t('p12.3')"
                        validation="required|email"
                        validation-visibility="submit" />
                </FormKit>
                <div v-if="errorDiv" class="text-red-500 text-annotation">
                    {{ t("p12.6") }}
                </div>
                <div v-if="duplicateError" class="text-red-500 text-annotation">
                    {{ t("p12.8") }}
                </div>
            </div>
            <div v-else class="flex justify-center w-full">
                <h3>{{ t("p12.7") }}</h3>
            </div>
        </div>
        <div class="flex items-center justify-around w-full h-10 border-t shrink-0 lg:h-14">
            <div>
                <NuxtLink class="underline" :to="localePath('/impressum')">{{ t("p12.5") }}</NuxtLink>
            </div>
            <div>&copy; 2023 IndieZone</div>
            <div class="invisible">Placeholder</div>
        </div>
    </div>
</template>
