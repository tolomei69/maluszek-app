<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
    if (name)
        router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
    <div>
        <button btn m-3 text-sm :disabled="!name" @click="go">
            {{ t('button.go') }}
        </button>
    </div>
</template>
