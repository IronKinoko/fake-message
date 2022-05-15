import { acceptHMRUpdate, defineStore } from 'pinia'

export interface User {
  qq: string
  name: string
  longName?: string
}

export const useUserStore = defineStore('user', () => {
  const users = useLocalStorage<User[]>('users', [
    { qq: '707819027', name: '【理树子】XND' },
  ])

  const activeQQ = useLocalStorage('active-qq', '')

  function setActiveUser(qq: string) {
    activeQQ.value = qq
  }

  const activeUser = computed(() =>
    users.value.find((user) => user.qq === activeQQ.value)
  )

  function updateUser(user: User) {
    const target = users.value.find((o) => o.qq === user.qq)
    if (target) {
      Object.assign(target, user)
    } else {
      users.value.push(user)
    }
  }
  function deleteUser(qq: string) {
    users.value = users.value.filter((user) => user.qq !== qq)
  }

  return {
    users,
    activeQQ,
    activeUser,
    setActiveUser,
    deleteUser,
    updateUser,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
