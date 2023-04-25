function searchInsert(nums, target){
  // const length: number = nums.length;
  //     let left: number = 0,
  //         right: number = length - 1;
  //     while (left <= right) {
  //         const mid: number = Math.floor((left + right) / 2);
  //         if (nums[mid] < target) {
  //             left = mid + 1;
  //         } else if (nums[mid] === target) {
  //             return mid;
  //         } else {
  //             right = mid - 1;
  //         }
  //     }
  //     return right + 1;

  let left=0,right = nums.length - 1;
  while (left <= right) {
    const mid = left + (right - left) / 2;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right + 1;
}
const nums = [1, 3, 5, 6];
const target = 5;
const result=searchInsert(nums,target)
console.log('result',result)


