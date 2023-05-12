const fs = require('fs');
const path = require('path');

// const absoluteAuth='/Users/candyyhguo/Desktop';
// const textPath=path.resolve(absoluteAuth,'1.txt')
// const outputPath=path.resolve(absoluteAuth,'output1.txt')

const textPath="D:\\VScode\\data\\1.txt"
const outputPath="D:\\VScode\\data\\output1.txt"

const content=fs.readFileSync(textPath,"utf-8").toString().split(' ')
const nums=Math.floor(content.length/98);
console.log('数据总长度',content.length-1)

let result=[];
for(let i=0;i<=nums-1;i++){
    const r=content.splice(0,98);
    const newR=[];
    while(r.length>0){
        const ori=r.splice(0,2).join('');
        const after=Number('0x'.concat(ori))
       newR.push(after)
    }
    result.push(newR.join(' '))
}
console.log('结果总行数',result.length)
const output=result.join('\n');

fs.writeFileSync(outputPath, output);
