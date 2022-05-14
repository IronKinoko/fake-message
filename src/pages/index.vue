<script setup lang="ts">
import { Message } from '@/components/QQMessage.vue'

let messages = $ref<Message[]>([
  { user: { qq: '707819027', name: '【理树子】XND' }, content: '示例消息' },
  { user: { qq: '707819027', name: '【理树子】XND' }, content: '示例消息' },
  { user: { qq: '707819027', name: '【理树子】XND' }, content: '示例消息' },
  { user: { qq: '707819027', name: '【理树子】XND' }, content: '示例消息' },
])
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="shadow-lg p-4 bg-white rounded">
      <QQMessage
        v-for="(message, index) in messages"
        :key="index"
        :="message"
      />
    </div>
    <br />
    <div class="shadow-lg p-6 bg-white rounded">
      <QQEditor />
    </div>
  </div>
</template>
