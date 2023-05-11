var minSubArrayLen = function(target, nums) {
    // 暴力解法，leetcode的数据集会超时
    //     const len=[]
    //     for(let i=0;i<nums.length;i++){
    //         let res=nums[i];j=i+1
    //         while(res<target&&j<nums.length){
    //             res+=nums[j];
    //             j++;
    //         }
    //         if(!(j===nums.length&&res<target)){
    //             len.push(j-i)
    //         }
    //     }
    //     if(len.length===0){
    //         return 0
    //     }else{
    //     let min=len[0];
    //     for(let i=1;i<len.length;i++){
    //         if(len[i]<min){
    //             min=len[i]
    //         }
    //     }
    //     return min
    //    }
    // 滑动窗口解法 只用一个for循环，那么这个循环的索引，一定是表示 滑动窗口的终止位置。需要确定以下三个问题：
    // 窗口内是什么？
    // 如何移动窗口的起始位置？
    // 如何移动窗口的结束位置？
    let originPoint=0,result = 0x3f3f3f3f;
    let sum=0,subLength=0
    for(let j=0;j<=nums.length;j++){
        sum+=nums[j]
        while(sum>=target){
            subLength=j-originPoint+1;
            result=subLength<result?subLength:result
            sum-=nums[originPoint++];
        } 
    }
    return result === 0x3f3f3f3f ? 0 : result;
    };

const sum=[2,3,1,2,4,3]
const res=minSubArrayLen(7,sum)
console.log('res',res)