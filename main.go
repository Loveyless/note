package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	tmp := 0
	head := l1
	var pre *ListNode // 用于改指向

	for l1 != nil && l2 != nil {
		l1.Val += tmp + l2.Val
		tmp = l1.Val / 10
		l1.Val %= 10

		pre = l1 // 作用时机：当 l1 == nil 时，pre记录了前一个非空l1节点
		l1 = l1.Next
		l2 = l2.Next
	}

	if l2 != nil { // 以 l1 为主链，l1 没 l2 长则将 l2 的部分补到 l1
		pre.Next = l2
		l1 = pre.Next
	}
	for l1 != nil {
		l1.Val += tmp
		tmp = l1.Val / 10
		l1.Val %= 10

		pre = l1
		l1 = l1.Next
	}
	if tmp == 1 { // 最后的进位，不得不new
		pre.Next = &ListNode{Val: tmp}
	}

	return head
}

func main() {
	l1 := ListNode{2, &ListNode{4, &ListNode{4, &ListNode{3, nil}}}}
	l2 := ListNode{5, &ListNode{6, &ListNode{4, &ListNode{3, nil}}}}
	fmt.Println(addTwoNumbers(&l1, &l2))
}
