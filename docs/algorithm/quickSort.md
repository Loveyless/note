## 思路

[阮一峰 快速排序](https://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html)



1. 在数据集之中，选择一个元素作为"基准"（pivot）。

2. 所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。

3. 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。


## 代码实现


### 1. 首先，定义一个quickSort函数，它的参数是一个数组。
```js
let quickSort = (arr) => {

};
```

### 2. 然后，检查数组的元素个数，如果小于等于1，就返回。
```js
let quickSort = (arr) => {

    //如果传进来的数小于1就返回
　　if (arr.length <= 1) { return arr; }

};
```

### 3. 接着，选择"基准"（pivot），并将其与原数组分离，再定义两个空数组，用来存放一左一右的两个子集。

```js
let quickSort = (arr) => {

    //如果传进来的数小于1就返回
　　if (arr.length <= 1) { return arr; }

    //找到数组item中间的下标
　  let pivotIndex = Math.floor(arr.length / 2) ; //Math.floor 向下取整

    //把中间下标的值截取出来 arr.splice为变异数组 会修改原数组
　　let pivot = arr.splice(pivotIndex, 1)[0];

　　let left = [];

　　let right = [];
};
```


### 4. 接着，选择"基准"（pivot），并将其与原数组分离，再定义两个空数组，用来存放一左一右的两个子集。

```js
let quickSort = (arr) => {

    //如果传进来的数小于1就返回
　　if (arr.length <= 1) { return arr; }

    //找到数组item中间的下标
　  let pivotIndex = Math.floor(arr.length / 2) ; //Math.floor 取近似值

    //把中间下标的值截取出来作为'基准' arr.splice为变异数组 会修改原数组
　　let pivot = arr.splice(pivotIndex, 1)[0];

　　let left = [];

　　let right = [];

    //开始遍历数组，小于"基准"的元素放入左边的子集，大于基准的元素放入右边的子集。
    for (let i = 0; i < arr.length; i++){

      if (arr[i] < pivot) {

            //每一项小于基准就取left
  　　　　　　left.push(arr[i]);

      } else {

            //每一项大于基准就取right
  　　　　　　right.push(arr[i]);

      }

    }

    //或者

    arr.forEach(item => {
      
      //每一项小于基准就取left
      item < pivot && left.push(item);

      //每一项大于基准就取right
      item > pivot && right.push(item);

    });

};
```

### 5. 最后，使用递归不断重复这个过程，就可以得到排序后的数组。
```js
let quickSort = (arr) => {

    //如果传进来的数小于1就返回
　　if (arr.length <= 1) { return arr; }

    //找到数组item中间的下标
　  let pivotIndex = Math.floor(arr.length / 2) ; //Math.floor 取近似值

    //把中间下标的值截取出来作为'基准' arr.splice为变异数组 会修改原数组
　　let pivot = arr.splice(pivotIndex, 1)[0];

　　let left = [];

　　let right = [];

    //然后，开始遍历数组，小于"基准"的元素放入左边的子集，大于基准的元素放入右边的子集。
    for (let i = 0; i < arr.length; i++){

      if (arr[i] < pivot) {

            //每一项小于基准就取left
  　　　　　　left.push(arr[i]);

      } else {

            //每一项大于基准就取right
  　　　　　　right.push(arr[i]);

      }

    }

    return [...quickSort(left),pivot,...quickSort(right)]
    //或者 Array.concat() 合并两个或多个 不传则浅拷贝
    return quickSort(left).concat([pivot], quickSort(right));

};
```


## 学到了什么
1. Math.floor() 为向下取整
如果想实现四舍五入
```js
// 任何数 + 0.5
Math.floor(any + 0.5)
```


2. Array.concat() 合并两个或多个 **不传则浅拷贝**
```js
// 以后数组浅拷贝就这样写
arr.concat()
```


## more
测试发现不光排序还**去重**了
为什么呢?
```js
arr.forEach(item => {
  
  //每一项小于基准就取left
  item < pivot && left.push(item);

  //每一项大于基准就取right
  item > pivot && right.push(item);

});
```

这里对比item与基准值的时候并没有对**item等于基准**时的操作
所以当数组里两个值相同 比对基准 会无任何操作
只把基准返回 ``` return [...quickSort(left),pivot,...quickSort(right)] ``` 