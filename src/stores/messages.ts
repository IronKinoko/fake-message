import { acceptHMRUpdate, defineStore } from 'pinia'
import { User } from './user'

export interface Message {
  user: User
  content: string
  isRecall?: boolean
}

export const useMessageStore = defineStore('message', () => {
  let messages = $ref<Message[]>([
    {
      user: { qq: '707819027', name: 'XND', title: '理树子' },
      content: '点击头像切换人员\n右键消息更多功能',
      isRecall: false,
    },
  ])

  function addMessage(user: User, content: string) {
    messages.push({ user, content })
  }

  function changeRecall(message: Message) {
    message.isRecall = !message.isRecall
  }

  function changeUser(message: Message, user: User) {
    message.user = user
  }

  return $$({
    messages,
    addMessage,
    changeRecall,
    changeUser
  })
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMessageStore, import.meta.hot))
