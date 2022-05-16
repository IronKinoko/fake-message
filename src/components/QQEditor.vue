<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const { users, activeQQ, setActiveUser } = $(useUserStore())
let content = $ref('')

const isMac = /macintosh|mac os x/i.test(navigator.userAgent)

const emit = defineEmits<{ (e: 'send', content: string): void }>()
function submit(e?: KeyboardEvent) {
  if (e) {
    if (isMac && !e.metaKey) return
    else if (!isMac && !e.ctrlKey) return

    e.preventDefault()
  }

  if (!content) return
  emit('send', content)
  content = ''
}
</script>

<template>
  <div>
    <textarea
      class="outline-none resize-none w-full"
      @keydown.enter="submit"
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
            <div
              class="w-6 h-6 btn btn-round text-xs"
            >
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1879"
                width="1em"
                height="1em"
              >
                <path
                  d="M576 64H448v384H64v128h384v384h128V576h384V448H576z"
                  fill="currentColor"
                  p-id="1880"
                ></path>
              </svg>
            </div>
          </RouterLink>
        </div>
      </div>
      <button class="btn" @click="submit()">
        发送(<span class="underline">{{ isMac ? '⌘' : 'ctrl' }}+enter</span>)
      </button>
    </div>
  </div>
</template>

<style></style>
