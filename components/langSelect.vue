<script setup lang="ts">
    import { LanguageIcon } from "@heroicons/vue/24/outline"

    const { locale } = useI18n()

    const target = ref(null)

    const { isOutside } = useMouseInElement(target)

    const langClass = computed(() => {
        return isOutside.value ? "opacity-50" : "opacity-100"
    })

    const formKitConfig: any = inject(Symbol.for("FormKitConfig"))
    watch(locale, () => {
        formKitConfig.locale = locale.value
    })
</script>
<template>
    <div ref="target" :class="langClass" class="absolute z-20 flex transition-opacity top-4 left-4 focus-within:opacity-100">
        <LanguageIcon class="w-5 h-5" />
        <FormKit id="langSelect" v-model="locale" name="Language select" type="select" :options="{ de: 'German', en: 'English' }" />
    </div>
</template>
