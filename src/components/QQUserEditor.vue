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
  <div class="px-4 py-2">
    <div class="flex gap-2 mb-1">
      <label class="text-slate-400 w-24">QQ</label>
      <input type="text" v-model="qq" class="flex-1 outline-none" />
    </div>
    <div class="flex gap-2 mb-1">
      <label class="text-slate-400 w-26">气泡模式名称</label>
      <input type="text" v-model="name" class="flex-1 outline-none" />
    </div>
    <div class="flex gap-2 mb-1">
      <label class="text-slate-400 w-24">文字模式名称</label>
      <input type="text" v-model="longName" class="flex-1 outline-none" />
    </div>
    <button class="btn" @click="submit">提交</button>
  </div>
</template>

<style></style>
