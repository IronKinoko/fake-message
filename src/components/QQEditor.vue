<script setup lang="ts">
let content = $ref('')

const emit = defineEmits<{ (e: 'send', content: string): void }>()
function submit(e: Event) {
  e.preventDefault()

  if (!content) return
  emit('send', content)
  content = ''
}
</script>

<template>
  <div>
    <textarea
      class="outline-none resize-none w-full"
      @keydown.ctrl.enter="submit"
      @keydown.meta.enter="submit"
      placeholder="输入内容"
      v-model="content"
      rows="3"
    ></textarea>

    <div class="flex justify-between items-center">
      <div></div>
      <button
        class="bg-[#00B6CC] hover:bg-[#3EDEFB] active:bg-[#06BCE9] text-white rounded-sm py-1 px-2"
        @click="submit"
      >
        发送(shift+enter)
      </button>
    </div>
  </div>
</template>

<style></style>
