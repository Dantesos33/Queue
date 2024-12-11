//Creating a Queue

class Queue {
    constructor(){
        this.list = [];
    }
    
    //add element at the end
    enqueue(element){
        this.list.push(element);
        return element;
    }

    //removes element from the front
    dequeue(){
        if(this.list.length > 0){
        this.list.shift();
        }
        else{
            console.log("Queue is empty")
            return "Queue is empty"
        }
    }
    
    //checks that if the queue is empty or not
    isEmpty(){
        this.list.length == 0 ? console.log("Queue is Empty") : console.log("Queue is Not Empty");
        return this.list.length == 0;
    }
    
    //returns the first element
    peek(){
        console.log(this.list[0]);
        return this.list[0];
    }
    
    //print the queue
    printQueue(){
        console.log(this.list)
        return this.list;
    }
}

let q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.dequeue();

q.printQueue()