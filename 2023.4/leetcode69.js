var mySqrt = function(x) {
    let left=0,right=x
    let ant=0
    while(left<=right){
        const mid=left+((right-left)>>1)
        if(mid*mid<=x){
            ant=mid;
            left=mid+1
        }else{
            right=mid-1
        }
    }
    return ant
};

const a=mySqrt(8);
console.log('a',a)