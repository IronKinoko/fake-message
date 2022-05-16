<script setup lang="ts">
import { User } from './QQMessage.vue'

const props = defineProps<{ user?: User }>()

let user = $ref<User>(props.user || { qq: '', name: '' })

const emit = defineEmits<{
  (e: 'submit', user: User): void
}>()

function submit() {
  if (!user.qq || !user.name) {
    return alert('请填写 QQ 与 气泡模式名称')
  }
  emit('submit', user)
}
</script>

<template>
  <div class="px-4 py-2 space-y-4">
    <div class="flex items-center gap-2">
      <label class="text-slate-400 w-24">QQ</label>
      <input
        type="text"
        v-model="user.qq"
        class="flex-1 outline-none border rounded p-2 focus:border-[#00B6CC]"
      />
    </div>
    <div class="flex items-center gap-2">
      <label class="text-slate-400 w-24">名称</label>
      <input
        type="text"
        v-model="user.name"
        class="flex-1 outline-none border rounded p-2 focus:border-[#00B6CC]"
      />
    </div>
    <div class="flex items-center gap-2">
      <label class="text-slate-400 w-24">群头衔</label>
      <input
        type="text"
        v-model="user.title"
        class="flex-1 outline-none border rounded p-2 focus:border-[#00B6CC]"
      />
    </div>
    <button class="btn" @click="submit">提交</button>
  </div>
</template>

<style></style>
