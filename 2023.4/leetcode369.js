var isPerfectSquare = function(num) {
    let left=0,right=num;
    let ant
    while(left<=right){
        const mid=left+((right-left)>>1);
        if(mid*mid>num){
            right=mid-1
        }else if(mid*mid<num){
            left=mid+1
        }else{
            ant=mid
        }
    }
    if(ant){
        return true
    }else{
        return false
    }
};

const res=isPerfectSquare(8)
console.log('res',res)