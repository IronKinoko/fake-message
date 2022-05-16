import { acceptHMRUpdate, defineStore } from 'pinia'

export interface User {
  qq: string
  name: string
  longName?: string
}

export const useUserStore = defineStore('user', () => {
  let users = $(
    useLocalStorage<User[]>('users', [
      { qq: '707819027', name: '【理树子】XND' },
    ])
  )

  let activeQQ = $(useLocalStorage('active-qq', ''))

  function setActiveUser(qq: string) {
    activeQQ = qq
  }

  const activeUser = computed(() => users.find((user) => user.qq === activeQQ))

  function updateUser(user: User) {
    const target = users.find((o) => o.qq === user.qq)
    if (target) {
      Object.assign(target, user)
    } else {
      users.push(user)
    }
  }
  function deleteUser(qq: string) {
    users = users.filter((user) => user.qq !== qq)
  }

  return $$({
    users,
    activeQQ,
    activeUser,
    setActiveUser,
    deleteUser,
    updateUser,
  })
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
