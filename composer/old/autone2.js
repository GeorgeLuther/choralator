const maxApi = require("max-api");
const path = require("path");
const { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } = require("constants");
const { createPublicKey } = require("crypto");
const { BigIntStats } = require("fs");
//logic functions
const odd=(num)=>num%2===0
const rand=(min,max)=>{  
    min=Math.ceil(min) 
    max=Math.floor(max) 
    return Math.floor(Math.random()*(max-min+1))+min 
}
const flip=()=>rand(0,1)


//max mps - inputs and outputs

    //record and delete motives
let active=false
maxApi.addHandler("transcribe",()=>active=!active)
let scribe=[]
let motives=[]
maxApi.addHandler("in",(n)=>{if(active)scribe.push(n)})
maxApi.addHandler("eraseNote",()=>scribe.pop)
maxApi.addHandler("keepMotif",()=>motives.push(scribe))
maxApi.addHandler("deleteMotif",()=>motives.pop)
maxApi.addHandler("clearAll",()=>motives=[])

    //compound motives into a phrase
let numMotives=rand(2,4)
let currMotives=[]    
let unused=[]
let numSubPhrase=rand(3,8)
//tells us which motives have been used
for (let i=0;i<motives.length;i++){
    unused.push(i)
}
for (let i=0;i<numMotives;i++){
    let used=unused[rand(0,unused.length-1)]
    currMotives.push(motives[used])
    unused.splice(i,1)
}
let phrase=[]
let bass=[]
for (let i=0;i<numSubPhrase;i++){
    let shift=rand(-3,4)
    currMotives[rand(0,currMotives.length-1)].forEach((note,index)=>{
        phrase.push(note+shift)
        index==0 ? bass.push(shift) : bass.push(0)
    })
}
//compound phrases into a section
//compound sections into a form

maxApi.addHandler("compose",()=>{
    const numSections=rand(2,4)
    let sections=[]
    for (let i=0;i<numSections;i++){
        let section=[]
        const numMotives=rand(1,motives.length)
        for (let j=0;j<numMotives;j++){
        section.push(motives[rand()])
        }
        
    }
    const numPhrases=rand(2,6)
    const formLength=rand(2,8)
})