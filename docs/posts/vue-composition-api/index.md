---
title: Vue 3 Composition API 指南
date: 2024-01-05
author: Pepe
tags: ['Vue', 'Composition API', '前端']
---

# Vue 3 Composition API 指南

Vue 3 引入了 Composition API，这是一种全新的代码组织方式，相比 Options API 更加灵活。

## 为什么需要 Composition API？

1. **更好的逻辑复用**
2. **更灵活的代码组织**
3. **更好的类型推断**

## 核心 API

### ref

用于创建响应式的基本类型值。

```typescript
import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1
```

### computed

用于创建计算属性。

```typescript
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
```

### watch 和 watchEffect

用于监听数据变化。

```typescript
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)

watch(count, (newVal, oldVal) => {
  console.log(`Count changed: ${oldVal} -> ${newVal}`)
})

watchEffect(() => {
  console.log(`Count is: ${count.value}`)
})
```

### 组合式函数

将相关逻辑组合在一起，形成可复用的函数。

```typescript
// useMouse.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(event: MouseEvent) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y }
}
```

## 总结

Composition API 为 Vue 开发带来了更大的灵活性，建议在新项目中使用。
