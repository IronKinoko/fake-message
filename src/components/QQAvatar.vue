<script setup lang="ts">
const { qq } = defineProps<{ qq: string }>()

const logoURL = useDebounce(
  computed(() =>
    qq
      ? `https://q4.qlogo.cn/g?b=qq&nk=${encodeURIComponent(qq)}&s=3?d=retro`
      : ''
  ),
  300
)
</script>

<template>
  <img
    v-if="logoURL"
    class="rounded-full w-full h-full"
    :src="logoURL"
    alt="qq avatar"
  />
</template>

