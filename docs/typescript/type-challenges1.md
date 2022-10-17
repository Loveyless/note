## 4 实现 Pick

> 实现 TS 内置的 Pick<T, K>，但不可以使用它。
> 从类型 T 中选择出属性 K，构造成一个新的类型。

**例如:**

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

**我的答案**

```ts
type MyPick<T, K> = <T extends object,K extends keyof T>{
  [P in K]: T[P];
}
```

首先这道题很简单 但是我学到了什么?

我发现这里只能用`[P in K]`不能使用`[P extends keyof K]`

再去了解一下它们的区别

1. `K extend keyof T` 表示 K 是 T 的子类型，这里是一个类型约束声明。

   比如 `type T = "a" | "b" | "c";`

   那么 K 可以是 `"a"`，也可以是 `"a" | "c"` 或者 `"a" | "b" | "c"` 等

2. in 可以理解为 `for ... in`，表示从 `keyof T` 中去遍历每一个类型

所以上面的`[P in K]`遍历了 K 的每个类型

## 7 实现 Readonly

> 不要使用内置的`Readonly<T>`，自己实现一个。
> 该 `Readonly` 会接收一个 _泛型参数_，并返回一个完全一样的类型，只是所有属性都会被 `readonly` 所修饰。
> 也就是不可以再对该对象的属性赋值。

**例如：**

```ts
interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
```

**我的答案**

```typescript
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

学到了什么?

本题中 T 必须 keyof 转为类型

在 4 实现 Pick 中 K 已经 extends keyof T 了 所以后面[P in K]时不需要 keyof

## 11 元组转换为对象

> 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。

**例如：**

```ts
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

**我的答案**

```typescript

```
