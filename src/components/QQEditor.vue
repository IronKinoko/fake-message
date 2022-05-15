<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const { users, activeQQ, setActiveUser } = $(useUserStore())
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
      placeholder="输入内容"
      v-model="content"
      rows="3"
    ></textarea>

    <div class="flex justify-between items-center">
      <div class="flex gap-1">
        <div
          class="w-8 h-8 flex justify-center items-center rounded-full"
          :class="user.qq === activeQQ ? 'border-2 border-[#00B6CC]' : ''"
          v-for="user in users"
          :key="user.qq"
          @click="setActiveUser(user.qq)"
        >
          <div class="w-6 h-6" :title="user.name">
            <QQAvatar :qq="user.qq" />
          </div>
        </div>
        <div class="w-8 h-8 flex justify-center items-center">
          <RouterLink to="/users">
            <div class="w-6 h-6 btn round">+</div>
          </RouterLink>
        </div>
      </div>
      <button class="btn" @click="submit">
        发送(<span class="underline">ctrl+enter</span>)
      </button>
    </div>
  </div>
</template>

<style></style>
