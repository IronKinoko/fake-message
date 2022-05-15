import { acceptHMRUpdate, defineStore } from 'pinia'
import { User } from './user'

export interface Message {
  user: User
  content: string
}

export const useMessageStore = defineStore('message', () => {
  let messages = $ref<Message[]>([
    { user: { qq: '707819027', name: '【理树子】XND' }, content: '示例消息' },
  ])

  function addMessage(user: User, content: string) {
    messages.push({ user, content })
  }

  return $$({
    messages,
    addMessage,
  })
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMessageStore, import.meta.hot))
