<script setup lang="ts">
import { User, useUserStore } from '@/stores/user'

const { users, deleteUser, updateUser } = $(useUserStore())

let editKey = $ref('')

function editUser(user: User) {
  updateUser(user)
  editKey = ''
}
</script>

<template>
  <RouterLink to="../">
    <div class="p-2 border-b bg-white">
      <Icon type="left"></Icon>
      返回
    </div>
  </RouterLink>
  <div class="bg-white shadow-sm mb-2">
    <div v-for="user in users" :key="user.qq" class="border-b">
      <template v-if="editKey === user.qq">
        <QQUserEditor :user="user" @submit="editUser" />
      </template>
      <template v-else>
        <div class="flex gap-2 items-center px-4 py-2">
          <div class="w-8 h-8">
            <QQAvatar :qq="user.qq" />
          </div>
          <div>
            <div>{{ user.name }}</div>
            <div>{{ user.qq }}</div>
          </div>
          <div class="ml-auto space-x-2">
            <button class="btn" @click="editKey = user.qq">编辑</button>
            <button class="btn" @click="deleteUser(user.qq)">删除</button>
          </div>
        </div>
      </template>
    </div>
  </div>
  <div class="bg-white shadow-sm">
    <QQUserEditor @submit="updateUser" />
  </div>
</template>

<style></style>
