<script setup lang="ts">
const { qq } = defineProps<{ qq: string }>()

/**
 * qq头像接口
 * https://q1.qlogo.cn/g?b=qq&nk={qq}&s={size}
 * qq：qq号
 * size：0,1,2,3,4,5  //原图，40，40，100，140，640
 */
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
    class="rounded-full w-full h-full avtar"
    :src="logoURL"
    alt="qq avatar"
  />
</template>

<style scoped>
.avtar {
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  -webkit-font-smooting: antialiased;
}
</style>
