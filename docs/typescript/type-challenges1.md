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
type KeyPropetry = string | number | symbol;
type TupleToObject<T extends readonly KeyPropetry[]> = {
  [K in T[number]]: K;
};
```

**题解**

1. T[number]取出的每一项 key
2. 值也是 K 键值相同

**学到了什么？**

1. as const 断言将宽泛的数据类型限定为具体的数值类型。

```typescript
const arrList1 = [1, "dada", true];
// const arrList1: (string | number | boolean)[]

const arrList2 = [1, "dada", true] as const;
// const arrList: readonly [1, "dada", true]
// 通过as const限定后，数组类型变为readonly [number, string]
// 准确来说，数组被限定成了一个元组，第一个数据的类型number，第二个是string，第三个是boolean
// as const实现了从(string | number | boolean)[]到readonly [1, "dada", true]转化。
```

as const 的其他应用场景

```typescript
function asConst() {
  let a: string = "abc";
  let b = (firstname: string, lastname: string): string => firstname + lastname;
  // return [a, b] as const;
  return [a, b];
}

let [pp, qq] = asConst();
console.log(qq("Green", "Tom"));

// 上述代码会直接编译失败，原因是系统认为变量qq的类型是string | ((firstname: string, lastname: string) => string) 编译器并不能认定q是一个函数。

// 可以使用as const 将函数asConst的返回值由宽泛的string | ((firstname: string, lastname: string) => any)转化成具体的readonly[string，(firstname: string, lastname: string) => string]，从而显示的表明q是函数类型的变量
```

**疑问(已解决**

```typescript
type KeyPropetry = string | number | symbol;

// 这个转出来就是对象
type TupleToObject1<T extends readonly KeyPropetry[]> = {
  [K in T[number]]: K;
};

// 这个转出来是数组??
// 因为keyof拿到的是数组index!!!!
// [K in keyof T]: K;  这样的话 类型就是 ["0","1"] 因为对象的key是字符串
type TupleToObject2<T extends readonly KeyPropetry[]> = {
  //“readonly ["tesla", "model 3"]”
  [K in keyof T]: T[K];
};

const tup = ["tesla", "model 3"] as const;
const result123: TupleToObject1<typeof tup> = {
  tesla: "tesla",
  "model 3": "model 3",
};
const result124: TupleToObject2<typeof tup> = ["tesla", "model 3"]; //为什么这个类型是数组而不是对象

// TupleToObject2的另一种写法
type ElementOf1<T extends readonly any[]> = T[number]; //“readonly ["tesla", "model 3"]”
const result125: ElementOf<typeof tup> = ["tesla", "model 3"];

// 这里就是一个转可选的例子 但是为什么上面的TupleToObject2出来的类型是数组而不是对象?
// 因为keyof拿到的是数组index!!!!
type SelecTable<T> = {
  [K in keyof T]?: T[K];
};
const table1: SelecTable<{ name: string; age: number }> = {
  name: "邱淑贞",
};
const table2: SelecTable<["nih", 313, true]> = ["nih"];
```

## 14 第一个元素

> 实现一个通用`First<T>`，它接受一个数组`T`并返回它的第一个元素的类型。

**例如：**

```ts
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
```

**我的答案**

```typescript
/** infer 表示 extends 中待推断的类型 */
type First<T extends any[]> = T extends [infer K,...infer P] ? K : never
```

**学到了什么？**

1. 在extends语句中，支持infer关键字，可以推断一个类型变量，高效的对类型进行模式匹配。

```typescript
type First<T extends any[]> = T extends [...infer K] ? K : never
let a3123: First<[1, 2, 3]> = [1, 2, 3]

type First2<T extends any[]> = T extends [infer K] ? K : never
let a3131: First2<[1]> = 1  //这个数组只要多一项 类型就会是never 所以下方使用...接住了后面的项

type First3<T extends any[]> = T extends [infer K, ...infer P] ? P : never
let a3535: First3<[1, 3, 4, 5]> = [3, 4, 5]

type First4<T extends any[]> = T extends [infer K, ...infer P] ? K : never
let a3775: First4<[1, 3, 4, 5]> = 1
```

**疑问**

```typescript
type First<T extends any[]> = T extends [infer K, ...infer P] ? K : never
let a3775: First4<[1, 3, 4, 5]> = 1 
//上方a3775只能等于1 如果我想它取到的是第一个元素的类型 也就是number 应该怎么写呢？
```

