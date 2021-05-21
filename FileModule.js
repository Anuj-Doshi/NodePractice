//Sync 

const {readFileSync, writeFileSync} = require('fs')
//const file = require('fs')

const first = readFileSync('./Hello.js','utf8')
const Second = readFileSync('./Content/Second.txt','utf8')
//writeFileSync('./Content/First.txt','Here is the result',{flag:'a'})
console.log(first,Second)


//Async FS
// const {readFile,writeFile} = require('fs')

// const readfile = readFile('./Content/First.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     const first = result
//     readFile('./Content/Second.txt','utf8',(err,result)=>{
//         if(err){
//             console.log(err);
//             return
//         }
//         const second = first + result
//         writeFile('./Content/Third.txt',second,{flag:'a'},(err,result)=>{
//             if(err){
//                 console.log(err);
//                 return
//             }
//             console.log(result);
//         })
//         console.log(result)
//     })
    
// })

// const writefile = writeFile('./Content/Second.txt','Anuj Doshi',{flag:'a'},(err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(result)
// })