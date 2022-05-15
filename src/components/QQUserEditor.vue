<script setup lang="ts">
import { User } from './QQMessage.vue'

const { user } = defineProps<{ user?: User }>()
let qq = $ref(user?.qq || '')
let name = $ref(user?.name || '')
let longName = $ref(user?.longName || '')

const emit = defineEmits<{
  (e: 'submit', user: User): void
}>()

function submit() {
  if (!qq || !name) {
    return alert('请填写 QQ 与 气泡模式名称')
  }
  emit('submit', { qq, name, longName })
}
</script>

<template>
  <div class="px-4 py-2 space-y-4">
    <div class="flex items-center gap-2">
      <label class="text-slate-400 w-24">QQ</label>
      <input
        type="text"
        v-model="qq"
        class="flex-1 outline-none border rounded p-2"
      />
    </div>
    <div class="flex items-center gap-2">
      <label class="text-slate-400 w-26">气泡模式名称</label>
      <input
        type="text"
        v-model="name"
        class="flex-1 outline-none border rounded p-2"
      />
    </div>
    <div class="flex items-center gap-2">
      <label class="text-slate-400 w-24">文字模式名称</label>
      <input
        type="text"
        v-model="longName"
        class="flex-1 outline-none border rounded p-2"
      />
    </div>
    <button class="btn" @click="submit">提交</button>
  </div>
</template>

<style></style>
