const maxApi = require("max-api");
const path = require("path")
//logic functions
const odd=(num)=>num%2===0
const rand=(min,max)=>{  
    min=Math.ceil(min) 
    max=Math.floor(max) 
    return Math.floor(Math.random()*(max-min+1))+min 
}
const flip=()=>rand(0,1)

//note techniques
const randNote=function(){
    return (rand(0,7))
}
let chordTones=[0,2,4,7]
const chordNote=function(){
    return chordTones[rand(0,3)]
}
//motif techniques
let motives=[]
let motif=[]
//reach a chord tone by moving up or down towards it
const reach=()=>{
    motif=[]
    motif.push(chordNote())
    const dir=flip()
    const len=rand(2,6)
    const pick=()=>{
        return len<3 ? rand(1,7)
        : len==3 ? rand(1,3)
        : len==4 ? rand(1,2)
        : 1
    }
    const itv=pick()
    for (let i=0;i<len;i++){
        if (dir){
            let nu=motif[0]+itv
            if (nu<12){
            motif.unshift(nu)
            }
        }else{
            let nu=motif[0]-itv
            if (nu>-8){
            motif.unshift(nu)
            }
        }
    }
    motives.push[motif]
}
const weave=()=>{
    motif=[]
    const dir=flip()
    const len=rand(2,6)
    for (let i=0;i<len;i++){
        flip() ? motif.push(rand(-3,7)) : motif.push(chordNote())
    }
}

let motives=[]
let phrase=()=>{
    let numMofit=rand(2,6)
    for (let i=0;i<numMotif;i++){
        phrase.push()
    }
}

//max mps - inputs and outputss
// maxApi.addHandler("new",()=>)

let c=0
let scale = [0,2,4,5,7,9,11,12,14,16,17,19,21,23,24,26,28,29,31,33,35,36]
maxApi.addHandler("note",()=>{
    let pitch = scale[motif[c]+7]+48
    maxApi.outlet("pitch", pitch)
    maxApi.outlet("vel", 80)
    c++
    if (c>=motif.length)c=0
})