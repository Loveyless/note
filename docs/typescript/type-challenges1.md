# type-challenges1

## 4 实现 Pick

> 实现 TS 内置的 Pick\<T, K>，但不可以使用它。
> 从类型 T 中选择出属性 K，构造成一个新的类型。

**例如:**

```typescript
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

```typescript
type MyPick<T, K> = <T extends object,K extends keyof T>{
  [P in K]: T[P];
}
```

首先这道题很简单 但是我学到了什么?

我发现这里只能用`[P in K]`不能使用`[P extends keyof K]`

再去了解一下它们的区别

1.  `K extend keyof T` 表示 K 是 T 的子类型，这里是一个类型约束声明。
    比如 `type T = "a" | "b" | "c";`
    那么 K 可以是 `"a"`，也可以是 `"a" | "c"` 或者 `"a" | "b" | "c"` 等

2.  in 可以理解为 `for ... in`，表示从 `keyof T` 中去遍历每一个类型

所以上面的`[P in K]`遍历了 K 的每个类型

## 7 实现 Readonly

> 不要使用内置的`Readonly<T>`，自己实现一个。
> 该 `Readonly` 会接收一个 *泛型参数*，并返回一个完全一样的类型，只是所有属性都会被 `readonly` 所修饰。
> 也就是不可以再对该对象的属性赋值。

**例如：**

```typescript
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

在 4 实现 Pick 中 K 已经 extends keyof T 了 所以后面\[P in K]时不需要 keyof

## 11 元组转换为对象

> 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。

**例如：**

```typescript
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

1.  T\[number]取出的每一项 key

2.  值也是 K 键值相同

**学到了什么？**

1.  T\[number]表示的是数组中每一个值

2.  as const 断言将宽泛的数据类型限定为具体的数值类型。

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

```typescript

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3

```

**我的答案**

都需要使用 extends 关键字作为判断条件使用

```typescript
//对数组T进行解构 使用infer(推断)关键字【infer类型会解析[]数组中的值 infer+变量 解构第一个值
type First<T extends any[]> = T extends [infer K, ...infer P] ? K : never;

// 如果T不是空数组则返回第一个值
type First<T extends any[]> = T extends [] ? never : T[0];

// 数组长度不为0则返回第一个值
type First<T extends readonly any[]> = T["length"] extends 0 ? never : T[0];

// T[number]表示的是数组中每一个值 T第一个值满足T[number] 则返回第一个值
type First<T extends readonly any[]> = T[0] extends T[number] ? T[0] : never;
```

**学到了什么？**

1.  在 extends 语句中，支持 infer 关键字，可以推断一个类型变量，高效的对类型进行模式匹配。

```typescript
type First<T extends any[]> = T extends [...infer K] ? K : never;
let a3123: First<[1, 2, 3]> = [1, 2, 3];

type First2<T extends any[]> = T extends [infer K] ? K : never;
let a3131: First2<[1]> = 1; //这个数组只要多一项 类型就会是never 所以下方使用...接住了后面的项

type First3<T extends any[]> = T extends [infer K, ...infer P] ? P : never;
let a3535: First3<[1, 3, 4, 5]> = [3, 4, 5];

type First4<T extends any[]> = T extends [infer K, ...infer P] ? K : never;
let a3775: First4<[1, 3, 4, 5]> = 1;
```

**疑问**

```typescript
type First<T extends any[]> = T extends [infer K, ...infer P] ? K : never;
let a3775: First4<[1, 3, 4, 5]> = 1;
//上方a3775只能等于1 如果我想它取到的是第一个元素的类型 也就是number 应该怎么写呢？
```

## 18 获取元组长度

> 创建一个通用的`Length`，接受一个`readonly`的数组，返回这个数组的长度。

**例如：**

```typescript
type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = ["FALCON 9", "FALCON HEAVY", "DRAGON", "STARSHIP", "HUMAN SPACEFLIGHT"];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
```

**我的答案：**

```typescript
type Length<T extends readonly any[]> = T["length"];
```

**学到了什么?**

```text
元组的length属性的类型是一种文本数字类型，等于元组中元素的数量。所以不仅仅是一个number，而是一个特定的数字（比如42）
T['length']可以表示ts中数组的长度
```

## 43 Exclude

> 实现内置的 Exclude \<T, U>类型，但不能直接使用它本身，从联合类型 T 中排除 U 的类型成员，来构造一个新的类型。

例如：

```typescript
type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
```

我的答案

```typescript
// extends关键字这里对T、U进行分布式遍历，所以T满足U的话就返回never否则就返回T
type MyExclude<T, U> = T extends U ? never : T;
```

## 189 Awaited

> 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。

例子：

```typescript
// 在 TS 中，我们用 Promise<T> 中的 T 来描述这个 Promise 返回的类型.请你实现一个类型，可以获取这个类型。例如：Promise<ExampleType>，请你返回 ExampleType 类型。
type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string
```

答案

```typescript
type MyAwaited<T> = T extends Promise<infer P> ? MyAwaited<P> : T;

// 如果T是promise类型且接收的参数也是promise类型的话，则进行递归调用，否则返回非promise参数。
type MyAwaited<T extends Promise<any>> = T extends Promise<infer x> ? (x extends Promise<any> ? MyAwaited<x> : x) : never;
```

学到了什么？

1.  在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。

2.  如果 T 是 promise 类型且接收的参数也是 promise 类型的话，则进行递归调用，否则返回非 promise 参数

## 268 If

> 实现一个 `IF` 类型，它接收一个条件类型 `C` ，一个判断为真时的返回类型 `T` ，以及一个判断为假时的返回类型 `F`。 `C` 只能是 `true` 或者 `false`， `T` 和 `F` 可以是任意类型。

例如：

```typescript
type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
```

我的答案

```typescript
type If<C, T, F> = C extends true ? T : C extends false ? F : never;

// 但是没有过这个
// @ts-expect-error
type error = If<null, "a", "b">;

// 看了别人写的
type If<C extends boolean, T, F> = C extends true ? T : C extends false ? F : never;
```

学到了什么？

```typescript
// 在这里事先约定好C的类型 可以提前报出错误
type If<C extends boolean, T, F>
```

## 533 Concat

> 在类型系统里实现 JavaScript 内置的 `Array.concat` 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

例如：

```typescript
type Result = Concat<[1], [2]>; // expected to be [1, 2]
```

我的答案

```typescript
type Concat<T extends Array<any>, U extends Array<any>> = [...T, ...U];
```

## 898 Includes

> 在类型系统里实现 JavaScript 的 `Array.includes` 方法，这个类型接受两个参数，返回的类型要么是 `true` 要么是 `false`。

例如：

```typescript
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">;
// expected to be `false`
```

我的答案

```typescript
type Includes<T extends readonly any[], U> = U extends T[number] ? true : false
// 但是这个答案过不了测试 显然没这么简单


// 别人的答案1
// 对T进行infer推断，如果First与U相等则返回true，否则继续递归调用其他参数Rest和U进行判断。
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> = 
T extends [infer First,...infer Rest]
? (
  Equal<First,U> extends true
  ?true
  :Includes<Rest,U>
)
:false


// 别人的答案2
type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? IsEqual<F, U> extends true
    ? true
    : Includes<R, U>
  : false;
```

学到了什么？

1.  。。。这道题没太看懂，大概看懂一点

## 3057 Push

> 在类型系统里实现通用的 `Array.push` 。

例如：

```typescript
type Result = Push<[1, 2], '3'> // [1, 2, '3']
```

我的答案

```typescript
type Push<T extends any[], U> = [...T,U]
```

## 3060 Unshift

> 实现类型版本的 `Array.unshift`。

例如：

```typescript
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
```

我的答案

```typescript
type Unshift<T extends Array<any>, U> = [U,...T]
```

## 3312 Parameters

> 实现内置的 Parameters 类型，而不是直接使用它，可参考[TypeScript官方文档](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype "TypeScript官方文档")。
> 从一个函数类型`Type`的参数使用的类型构造一个元组类型。

例如

```typescript
const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
```

我的答案

```typescript
// 对T接收的参数进行infer推断，如果有参数则返回参数，否则返回空数组
type MyParameters<T extends (...args: any[]) => any> = 
T extends (...args: infer L)=> any ? L : []
```
