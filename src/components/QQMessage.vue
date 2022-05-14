<script setup lang="ts">
export interface User {
  qq: string
  name: string
}
export interface Message {
  user: User
  content: string
}


const { user, content } = defineProps<Message>()
</script>
<template>
  <div class="flex gap-2 p-2 pb-0">
    <div class="w-8 h-8 translate-y-1">
      <QQAvatar :qq="user.qq"></QQAvatar>
    </div>
    <div>
      <div type="text" class="text-[#7F7F7F] text-sm outline-none">
        {{ user.name }}
      </div>
      <div class="message-bubble">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.message-bubble {
  @apply bg-[#E5E5E5] rounded-md py-2 px-3 relative w-fit whitespace-pre-wrap max-w-md;
}
.message-bubble:before {
  content: '';
  position: absolute;
  left: -9px;
  top: 12px;
  width: 0;
  height: 0;
  border-top: 5px solid #e5e5e5;
  border-left: 10px solid transparent;
  transform: rotate(20deg);
}
</style>
