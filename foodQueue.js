// Question Number 3
/*
An online food ordering system uses a queue to manage incoming orders. Implement a queue data structure to represent this order queue. 
- Explain how to add new orders to the queue.
- Simulate processing orders by removing them from the front of the queue.
- Discuss the efficiency of using a queue for this purpose.
*/

// Pseudocode for queueing system
/*

1) Create an empty array for the queue
3) To add order to the queue;
   - append the new order to the end of the queue, 
   - print a message indicating that the order has been added
4) To remove order from the queue;
   - check if the queue is empty,
   - if empty;
      * print a message indicating that the queue is empty
      * return null
   - if the queue is not empty,
      * Remove and return the first order of the queue
      * print a message indicating that the order has been processed
5) Additionally, you can return the number of orders in the queue
6) Additionally, you can display the orders in the queue

*/

// SOLUTION
class foodOrderQueue {
   constructor() {
      // create an empty array for the queue
      this.queue = [];
   }

   // method to check if the queue is empty
   queueIsEmpty() {
      return this.queue.length === 0;
   }

   // Add a new order to the queue
   enqueue(order) {
      this.queue.push(order);
      console.log(`Order has been added: ${order}`)
      return order;
   }

   // remove and return the first order on the queue (FIFO)
   dequeue() {
      // first check if the queue is empty
      if (this.queueIsEmpty()) {
         console.log('No orders on the queue');
         return null;
      }
      
      // if the queue is not empty
      const order = this.queue.shift();
      console.log(`Order processed: ${order}`);
      return order;
   }

   // to check the number of orders on the queue
   numOfOrders() {
      return this.queue.length;
   }

   displayOrders() {
      return `The order on the queue are:\n ${this.queue.join('; ')}`;
   }
}

const orderQueue = new foodOrderQueue();

console.log('================================');
orderQueue.enqueue('Order 1: Tasty fried rice, chicken and coleslaw');
console.log('================================');
orderQueue.enqueue('Order 2: Fish peppersoup and cold beer');
console.log('================================');
orderQueue.enqueue('Order 3: Semo and afang soup with turkey');
console.log('================================\n\n');

// List out the orders available
console.log('======== Listing out the orders ===========');
console.log(orderQueue.displayOrders());
console.log('================================\n\n');

// List out the number of orders available
console.log('======== Number of Orders Left: ===========');
console.log(orderQueue.numOfOrders());
console.log('================================\n\n');

// Processing the orders
console.log('======== Processing the order ===========');
console.log(orderQueue.dequeue()); // Order 1: Tasty fried rice, chicken and coleslaw
console.log('==========================================');
console.log(orderQueue.dequeue()); // Order 2: Fish peppersoup and cold beer
console.log('==========================================');
console.log(orderQueue.dequeue()); // Order 3: Semo and afang soup with turkey
console.log('==========================================');
console.log(orderQueue.dequeue()); // No orders on the queue
