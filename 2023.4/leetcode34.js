// var searchRange = function(nums, target) {
//     const getLeftBorder = (nums, target) => {
//         let left = 0, right = nums.length - 1;
//         let leftBorder = -2;// 记录一下leftBorder没有被赋值的情况
//         while(left <= right){
//             let middle = left + ((right - left) >> 1);
//             if(nums[middle] >= target){ // 寻找左边界，nums[middle] == target的时候更新right
//                 right = middle - 1;
//                 leftBorder = right;
//             } else {
//                 left = middle + 1;
//             }
//         }
//         return leftBorder;
//     }

//     const getRightBorder = (nums, target) => {
//         let left = 0, right = nums.length - 1;
//         let rightBorder = -2; // 记录一下rightBorder没有被赋值的情况
//         while (left <= right) {
//             let middle = left + ((right - left) >> 1);
//             if (nums[middle] > target) {
//                 right = middle - 1;
//             } else { // 寻找右边界，nums[middle] == target的时候更新left
//                 left = middle + 1;
//                 rightBorder = left;
//             }
//         }
//         return rightBorder;
//     }

//     let leftBorder = getLeftBorder(nums, target);
//     let rightBorder = getRightBorder(nums, target);
//     // 情况一
//     if(leftBorder === -2 || rightBorder === -2) return [-1,-1];
//     // 情况三
//     if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
//     // 情况二
//     return [-1, -1];
// };
var searchRange = function(nums, target) {
    const getLeft=(nums,target)=>{
        let left=0,right=nums.length-1;
        let leftBorder=-2;
        while(left<=right){
            const middle=left+((right-left)>>1);
            if(nums[middle]>=target){
                right=middle-1;
                leftBorder=right;
            }else{
                left=middle+1
            }
        }
        return leftBorder;
    }
    const getRight=(nums,target)=>{
        let left=0,right=nums.length-1;
        let rightBorder=-2;
        while(left<=right){
            const middle=left+((right-left)>>1);
            if(nums[middle]<=target){
                left=middle+1;
                rightBorder=left
            }else{
                right=middle-1
            }
        }
        return rightBorder
    }   
    const left=getLeft(nums,target);
    const right=getRight(nums,target)
    if(left===-2||right===-2){
        return [-1,-1]
    }  
    if(right-left>1){
        return [left+1,right-1]
    }
     return [-1,-1]
};

const data=[2,2]

const res=searchRange(data,3)
console.log('res',res)
