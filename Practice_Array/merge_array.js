function merge_array(arr1, arr2) {
    var result = [];
    var merge = arr1.concat(arr2);
    var object = {};

    var arr_length = merge.length;

    for(var i = 0; i < arr_length; i++){
        var item = merge[i];
        if(!object[item]){
            result.push(item);
            object[item] = true;
        }
    }

    return result;
}

var array1 = [1, 2, 3, 4];
var array2 = [3, 4, 5, 2];

console.log(merge_array(array1, array2));