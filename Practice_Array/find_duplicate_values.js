
function timGiaTriTrungLap(array){
    let obj = {};
    let result = [];

    array.forEach(item => {
        if(!obj[item]){
            obj[item] = 0;
        }
        obj[item] += 1;
    })

    for(let prop in obj){
        if(obj[prop] >= 2){
            result.push(prop);
        }
    }

    return result;
}

console.log(timGiaTriTrungLap([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));