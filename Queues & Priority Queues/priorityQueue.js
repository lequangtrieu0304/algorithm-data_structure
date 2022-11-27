function PriorityQueue() {
    var collection = [];

    this.print = function() {
        (console.log(collection));
    }

    this.isEmpty = function() {
        return (collection.length === 0);
    }

    this.enqueue = function(element) {
        if(this.isEmpty()){
            collection.push(element)
        }
        else {
            var added = false;
            for(var i = 0; i < collection.length; i++){
                if(element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added) {
                collection.push(element);
            }
        }
    };
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    }
}

var myQueue = new PriorityQueue();

myQueue.enqueue(["t", 3]);
myQueue.enqueue(["r", 2]);
myQueue.enqueue(["i", 1]);
myQueue.enqueue(["e", 4]);
myQueue.enqueue(["u", 5]);

console.log(myQueue.print());
console.log(myQueue.dequeue());