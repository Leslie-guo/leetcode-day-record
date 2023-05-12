var sortedSquares = function(nums) {
    const result=[];
    let k=nums.length-1;i=0;j=nums.length-1;
    while(i<=j){
     if(nums[i]*nums[i]<nums[j]*nums[j]){
            result[k--]=nums[j]*nums[j];
            j--;
        }else{
            result[k--]=nums[i]*nums[i];
            i++
        }
    }
    return result;
};

console.log(parseInt(0x55AA,10))