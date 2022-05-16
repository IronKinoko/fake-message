<script setup lang="ts">
import ContextMenu, { Option } from '@/components/ContextMenu.vue'
import { useUserStore } from '@/stores/user'

export interface User {
  qq: string
  title?: string
  name: string
}
export interface Message {
  user: User
  content: string
  isRecall?: boolean
}

const message = defineProps<Message>()
const { user, content, isRecall } = $(message)

const { users } = $(useUserStore())

const options = computed(() => [
  { value: 'changeUser', label: '换用户' },
  { value: 'recall', label: isRecall ? '取消撤回' : '撤回' },
])

const menuRef = $ref<InstanceType<typeof ContextMenu>>()

function showContextMenu(e: MouseEvent) {
  menuRef.open(e)
}

const emit = defineEmits<{
  (e: 'recall', message: Message): void
  (e: 'changeUser', user: User): void
}>()
function handleOption(option: Option) {
  switch (option.value) {
    case 'recall':
      emit('recall', message)
      break
  }
}
</script>
<template>
  <div v-if="isRecall" class="flex items-center justify-center p-2">
    <div
      class="bg-[#f8f8f8] px-2 py-1 text-stone-400 text-sm"
      @contextmenu.prevent="showContextMenu"
    >
      {{ user.name }} 撤回一条消息
    </div>
  </div>
  <div v-else class="flex gap-2 p-2 pb-0">
    <div class="w-8 h-8 translate-y-1">
      <QQAvatar :qq="user.qq"></QQAvatar>
    </div>
    <div class="flex-1 min-w-0">
      <div type="text" class="text-[#7F7F7F] text-sm outline-none">
        {{ user.title ? `【${user.title}】${user.name}` : user.name }}
      </div>
      <div class="message-bubble" @contextmenu.prevent="showContextMenu">
        {{ content }}
      </div>
    </div>
  </div>

  <ContextMenu ref="menuRef" :options="options" @click="handleOption">
    <template #changeUser>
      <div>改变用户</div>
      <div class="flex gap-1">
        <div
          class="w-8 h-8 flex justify-center items-center rounded-full hover:border-2 hover:border-[#00B6CC]"
          :class="user.qq === message.user.qq ? 'border-2 border-[#00B6CC] !cursor-default' : ''"
          v-for="user in users"
          :key="user.qq"
          @click="emit('changeUser', user)"
        >
          <div class="w-6 h-6" :title="user.name">
            <QQAvatar :qq="user.qq" />
          </div>
        </div>
      </div>
    </template>
  </ContextMenu>
</template>

<style scoped>
.message-bubble {
  @apply bg-[#E5E5E5] rounded-md py-2 px-3 relative w-fit whitespace-pre-wrap max-w-full break-words;
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
