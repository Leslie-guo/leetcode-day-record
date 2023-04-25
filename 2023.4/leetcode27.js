const removeElement = function(nums, val) {
    let slowIndex=0;
    for(let fastIndex=0;fastIndex<nums.length;fastIndex++){
        if(val!==nums[fastIndex]){
            nums[slowIndex++]=nums[fastIndex]
        }
    }
    return slowIndex;
};

const nums=[0,1,2,3,4,0,4,2]
const result=removeElement(nums,2);
console.log('result',result,nums)