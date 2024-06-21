// Question 6: Reverse a Linked List
/*
Given the head of a singly linked list, reverse the list and return the new head.Example
    Input: head = [1, 2, 3, 4, 5]
    Output: [5, 4, 3, 2, 1]
*/

// Define structure for a linked list node
class ListNode {
    constructor(value) {
        this.value = value; // value of the node
        this.next = null; // pointer to the next node (initially null)
    }
}

// Create a function to insert a new node into the list
function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextTemp = current.next;  // Temporarily store the next node
        current.next = prev;  // Reverse the pointer to the previous node
        prev = current;  // Move prev pointer one step forward
        current = nextTemp;  // Move current pointer one step forward
    }

    return prev; // 'prev' will be the new head of the reversed linked list
}

// Create a function to print the linked list
function printList(head) {
    let current = head;
    const result = [];
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result);
}

/*
    1) Initialization:
        - `prev` is initialized to null, which will eventually become the new head of the reversed linked list.
        - `current` is initialized to head, which starts at the original head of the linked list.

    2) Iterative Reversal:
        - `while (current !== null)`:
            - `nextTemp` temporarily stores the next node of `current`.
            - `current.next = prev` reverses the pointer of `current` to point to `prev` (the previous node).
            - Move `prev` and `current` pointers one step forward: `prev = current` and `current = nextTemp`.
    3) Return the New Head:
        - Once the loop completes, `prev` will point to the new head of the reversed linked list, so return `prev`.
*/

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original list:");
printList(head); // Output: [1, 2, 3, 4, 5]

head = reverseLinkedList(head);

console.log("Reversed list:");
printList(head); // Output: [5, 4, 3, 2, 1]