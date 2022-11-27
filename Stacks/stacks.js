var Stack = function() {
    this.count = 0;
    this.storage = {}

    //add a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //removes and return the value at the end of the stacks
    this.pop = function() {
        if(this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count]
        return result;
    }

    this.size = function() {
        return this.count;
    }

    //returns the value at the end of the stacks
    this.peek = function (){
        return this.storage[this.count-1];
    }
}

const myStack = new Stack();

myStack.push('quang trieu');
myStack.push('abcxyz');
console.log(myStack.size());
console.log(myStack.peek());