const maxApi = require("max-api");
const path = require("path");
const { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER, SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
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
//midi input gets put into an array
let played=[]
    maxApi.addHandler("v",(v)=>{
        played.push(v)
    })
    maxApi.addHandler("p",(p)=>{
        played.push(p)
    })
    //clear midi input array
    maxApi.addHandler("clear",()=>{
        played=[]
    })
    //midi input array can be kept as a motif
    let motives=[]
    maxApi.addHandler("keep",()=>{
        motives.push(played)
        played=[]
    })
    //clear all motives
    maxApi.addHandler("clearAll",()=>{
        motives=[]
    })
for (let h=0;h<numSections;i++){}
//make phrases
let phrases=[]
let numPhrases=rand(2,4)
for (let i=0;i<numPhrases;i++){
    let phrase=[]
    //make subphrases from motives and shifts, and add them to the phrase
    let numSubPhrases=rand(2,6)
    for (let j=0;j<numSubPhrases;j++){
        let subPhrase=[]
        let shift=random(-3,4)
        motives[rand(0,motives.length-1)].forEach((note,index)=>{
            if(!odd(index)){
                subPhrase.push(note+shift)
                subPhrase.push(motives[index+1])
                subPhrase.push(shift)
                index==0?  pitches.push(1):pitches.push(0)
            }
            phrase.push(subPhrase)
        })
    phrases.push(phrase)
    }
}




//generate form
let form=[]
let hunk=[]
const numSections=rand(2,4)
for (let i=0;i<numSections;i++){
    //add sections, repetitions, or variations to form
    let inst=rand(1,3)
    let alt=0
    for (let j=0;j<inst;j++){
        form.push(i)
        if (j==0){
            //initial instance of section is 0 aka original
            form.push(0)
        } else if (j==1){
            //pick between a repetition and a new or repeated variaton
            flip() ? form.push(0) : (alt++, form.push(rand(1,alt)))
        } else {
            //pick a new or repeated variaton
            alt++
            form.push(rand(1,alt))
        }
    }
    alt=0
}
