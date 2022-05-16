<script setup lang="ts">
export interface Option {
  label?: string
  value: string
}
const { options = [] } = defineProps<{
  options: Option[]
}>()

let visible = $ref(false)

let pos = $ref({ x: 0, y: 0 })

let menuRef = $ref<HTMLDivElement>()
onClickOutside($$(menuRef), () => {
  visible = false
})

function open(e: MouseEvent) {
  pos = { x: e.pageX, y: e.pageY }
  visible = true
}
defineExpose({ open })

const emit = defineEmits<{ (e: 'click', option: Option): void }>()

function handleOption(option: Option) {
  emit('click', option)
  visible = false
}
</script>

<template>
  <div
    v-if="visible"
    ref="menuRef"
    class="fixed bg-white shadow py-1 z-10 text-slate-700"
    :style="{ left: pos.x + 'px', top: pos.y + 'px' }"
  >
    <div
      v-for="option in options"
      :key="option.value"
      @click="handleOption(option)"
      class="px-2 py-1 hover:bg-slate-100 transition cursor-pointer"
    >
      <slot :name="option.value">
        {{ option.label }}
      </slot>
    </div>
  </div>
</template>

<style></style>
