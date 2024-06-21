// Question 5: Insert a Node in a Sorted Linked List
/* Given a sorted linked list, insert a new node with a given value into the correct sorted position in the list.Example
    Input: head = [1, 2, 4, 5], value = 3
    Output: [1, 2, 3, 4, 5]
*/

// Define structure for a linked list node
class ListNode {
    constructor(value) {
        this.value = value; // value of the node
        this.next = null; // pointer to the next node (initially null)
    }
}

// Create a function to insert a new node into the list
function insertIntoSortedList(head, value) {
    const newNode = new ListNode(value); // create a new node with the given value

    // if the list is empty, the new node becomes the head of the list
    if (head === null) {
        return newNode; 
    }

    // if the new node's value is less than the current head's value,
    // insert the new node before the current head
    if (value < head.value) {
        newNode.next = head;
        return newNode;
    }

    // Traverse the linked list to find the correct position to insert the new node
    let current = head;
    while (current.next !== null && current.next.value < value) {
        current = current.next;
    }

    // Insert the new node into the correct position
    newNode.next = current.next;
    current.next = newNode;

    // Return the head of the updated linked list
    return head;
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
const newNode = new ListNode(value);:

Creates a new instance of ListNode with the provided value.
Handling Empty List:

if (head === null) { return newNode; }:
If the head of the linked list is null (i.e., the list is empty), the newNode becomes the new head of the list.
Inserting Before the Head:

if (value < head.value) { newNode.next = head; return newNode; }:
If the value of the newNode is less than the value of the current head, insert newNode before head and return newNode as the new head of the list.
Traversing to Find Insertion Point:

let current = head;:

Initializes current to the head of the linked list for traversal.
while (current.next !== null && current.next.value < value) { current = current.next; }:

Traverse the linked list until you find a node whose next node has a value greater than or equal to value. This finds the correct position to insert newNode.
Inserting the New Node:

newNode.next = current.next; current.next = newNode;:
Inserts newNode between current and current.next.
Returning the Updated Head:

return head;:
Returns the head of the updated linked list after insertion.
*/

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(4);
head.next.next.next = new ListNode(5);

console.log("Original list:");
printList(head); // Output: [1, 2, 4, 5]

head = insertIntoSortedList(head, 3);

console.log("List after insertion:");
printList(head); // Output: [1, 2, 3, 4, 5]