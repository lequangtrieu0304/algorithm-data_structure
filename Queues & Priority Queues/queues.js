function Queue() {
    var collection = [];

    this.print = function(){
        console.log(collection);
    };

    this.enqueue = function(element){
        collection.push(element);
    }

    this.dequeue = function() {
        return collection.shift();
    }

    this.front = function(){
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.isEmpty = function(){
        return (collection.length === 0);
    }
}

var myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

console.log(myQueue.dequeue());
console.log(myQueue.front());
console.log(myQueue.print());
console.log(myQueue.isEmpty());