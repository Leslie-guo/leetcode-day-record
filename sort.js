const bubbleSort=(arr)=> {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                var temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

                                                     
const a=[13.4,15.3,15.8,18.4,19.9,17.2,16.1,17.3,18.3,18.9,17.6,15.8,13.2,12.5,12.0,12.7,12.5,14.7,14.5,15.7,16.3,16.9,
    16.8,17.3,18.4,18.1,16.5,17.5,18.5,16.2,15.2,14.7,13.2,12.8];
const b=bubbleSort(a)
console.log(b)

