---
title: TypeScript 最佳实践
date: 2024-01-10
author: Pepe
tags: ['TypeScript', 'JavaScript', '最佳实践']
---

# TypeScript 最佳实践

TypeScript 已经成为现代前端开发的标准配置。以下是一些实用的最佳实践。

## 1. 启用严格模式

始终启用 `strict: true`，它包含一系列严格的类型检查规则。

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

## 2. 使用类型推断

TypeScript 具有强大的类型推断能力，不要过度标注类型。

```typescript
// 好的写法
const name = 'Pepe'
const numbers = [1, 2, 3]

// 不必要的标注
const name: string = 'Pepe'
```

## 3. 使用联合类型和交叉类型

合理使用联合类型和交叉类型来描述复杂的类型关系。

```typescript
type Status = 'pending' | 'success' | 'error'

interface User {
  name: string
  age: number
}

type UserWithStatus = User & { status: Status }
```

## 4. 使用泛型

泛型使代码更加灵活和可复用。

```typescript
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0]
}
```

## 总结

遵循这些最佳实践，可以写出更加健壮和可维护的 TypeScript 代码。
