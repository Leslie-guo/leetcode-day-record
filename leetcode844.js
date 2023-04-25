var backspaceCompare = function(s, t) {
    let sLen=s.length-1,tLen=t.length-1;
    let skipS=0,skipT=0;
    while(sLen>=0||tLen>=0){
        while(sLen>=0){
            if(s[sLen]==='#'){
                skipS++;sLen--
            }else if(skipS>0){
                skipS--;sLen--
            }else{
                break;
            }
        };
        while(tLen>=0){
            if(t[tLen]==='#'){
                skipT++;tLen--
            }else if(skipT>0){
                skipT--;tLen--
            }else{
                break;
            }
        }
        if(sLen>0&&tLen>0){
            if(s[sLen]!==t[tLen]){
                return false
            }
        }else{
            if(sLen>=0||tLen>=0){
                return false
            }
        }
        sLen--;tLen--
    }
    return true
};

const t="bbbextm"
const s="bbb#extm"
const re=backspaceCompare(s,t)
console.log('re',re)