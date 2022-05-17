<script setup lang="ts">
import { useMessageStore } from '@/stores/messages'
import { useUserStore } from '@/stores/user'

const { activeUser } = $(useUserStore())

const $list = $ref<HTMLDivElement>()

const { messages, addMessage, changeRecall, changeUser } = $(useMessageStore())

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
    <div ref="$list" class="p-2 sm:p-4 bg-white rounded flex-1 overflow-auto">
      <QQMessage
        v-for="(message, index) in messages"
        :key="index"
        :="message"
        @recall="changeRecall(message)"
        @change-user="(user) => changeUser(message, user)"
      />
    </div>
    <div class="p-4 sm:p-6 bg-white rounded border-t">
      <QQEditor @send="submit" />
    </div>
  </div>
</template>
