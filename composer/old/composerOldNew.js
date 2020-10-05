//const maxApi = require("max-api")

//logic functions
const rand=(min,max)=>{  
    min=Math.ceil(min) 
    max=Math.floor(max) 
    return Math.floor(Math.random()*(max-min+1))+min 
}
const flip=()=>rand(0,1)
const odd=(num)=>num%2===0

//record motifs
// let played=[]
//     //midi pitch and velocity input get added to played array
//     maxApi.addHandler("p",(p)=>{
//         played.push(p)
//     })
//     maxApi.addHandler("v",(v)=>{
//         played.push(v)
//     })
//     //clear previously played
//     maxApi.addHandler("clear",()=>{
//         played=[]
//     })
//     //add played to motifs array
//     let motifs=[]
//     maxApi.addHandler("keep",()=>{
//         motifs.push(played)
//         played=[]
//     })
//     //clear all motives
//     maxApi.addHandler("clearAll",()=>{
//         motifs=[]
//     })

let phrase=[]
//generate
let linear=()=>{
    let mult=rand(1,3)
    for (let i=0;i<rand(2,8);i++){
        phrase.push(i*mult)
    }
}
let random=()=>{
    let len=rand(2,12)
    for (let i=0;i<len;i++){
        phrase.push(rand(0,len))
    }
}
//manipulate
let weave=()=>{
    let numRepeated=rand(1,phrase.length)
    let repeated=[]
    let clone=[]
    let availMot=[...phrase]
    let cnt=0
    for (let i=0;i<numRepeated;i++){
        let reDex=rand(0,availMot.length)
        repeated.push(availMot[reDex])
        availMot.splice(reDex,1)
    }
    for (let i=0;i<phrase.length;i++){
        clone.push(phrase[i])
        clone.push(repeated[count])
        cnt < repeated.length ? cnt++ : cnt=0
    }
}
// let walk=()=>{
//     if (phrase.length===2){
//         for (let i=0;i=
//             phrase.forEach()
//     }
// }

// let phraseMethods=[linear(phrase,phraseLength),rondo(phrase,phraseLength)),random(p,pL),randno(p,pL),walk(p,pL)]
// let phraseManipulations=[mirror(p),repeat(p),shuffle(p),reverse(p),interleave(p)]
// pMake[rand(0,pMake.length-1)]

rondo()