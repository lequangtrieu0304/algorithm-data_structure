function mySet() {
    var collection = [];

    //this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    }

    //this method will return all the values in the set
    this.values = function() {
        return collection;
    }

    //this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }

    //this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)) {
            var index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    this.size = function() {
        return collection.length;
    }

    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e) {
            unionSet.add(e);
        });
        secondSet.forEach(function(e) {
            unionSet.add(e);
        });
        return unionSet;
    }
}

var set = new mySet();
var set2 = new mySet();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
console.log(set.has(1));

set2.add(6);
set2.add(5);
set2.add(4);
set2.add(3);

console.log(set.values());
console.log(set2.values());
console.log(set.union(set2).values());