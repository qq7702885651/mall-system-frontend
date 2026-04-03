// src/stores/user.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const name = ref('张三')
    const age = ref(18)

    const updateName = (newName) => {
        name.value = newName
    }

    return { name, age, updateName }
}, {
    // 开启持久化
    persist: true
})