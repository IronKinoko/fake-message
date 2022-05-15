<script setup lang="ts">
import { useMessageStore } from '@/stores/messages'
import { useUserStore } from '@/stores/user'

const { users, activeUser } = $(useUserStore())

const $list = $ref<HTMLDivElement>()

const { messages, addMessage } = $(useMessageStore())

function submit(content: string) {
  if (!activeUser) {
    return alert('请在左下角选择或添加一个用户')
  }
  addMessage(activeUser, content)
  nextTick(() => {
    $list.scrollTo(0, $list.scrollHeight)
  })
}
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div ref="$list" class="p-4 bg-white rounded flex-1 overflow-auto">
      <QQMessage
        v-for="(message, index) in messages"
        :key="index"
        :="message"
      />
    </div>
    <div class="p-6 bg-white rounded border-t">
      <QQEditor @send="submit" :users="users" />
    </div>
  </div>
</template>
