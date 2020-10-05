//const maxApi = require("max-api")


//LOGIC FUNCTIONS///////////////////////////////////////////////////////////////
const rand=(min,max)=>{  
    min=Math.ceil(min) 
    max=Math.floor(max) 
    return Math.floor(Math.random()*(max-min+1))+min 
}
const flip=()=>rand(0,1)
const odd=(num)=>num%2===0
const nearest=(arr,n)=>arr.reduce((prev,curr)=> Math.abs(curr-n) < Math.abs(prev-n) ? curr : prev)

//RECORD MOTIFS/////////////////////////////////////////////////////////////////
let motifs=[]
// let played=[]
//     //midi pitch and velocity input get added to played array
//     maxApi.addHandler("p",(p)=>{
//         played.push(p)
//     })
//     maxApi.addHandler("v",(v)=>{
//         played.push(v)
//     })
//     //CLEAR previously played
//     maxApi.addHandler("clear",()=>{
//         played=[]
//     })
//     //KEEP - add played motif to motifs array, clear played array
//     maxApi.addHandler("keep",()=>{
//         motifs.push(played)
//         played=[]
//     })
//     //CLEAR ALL motifs
//     maxApi.addHandler("clearAll",()=>{
//         motifs=[]
//     })

//GENERATE MOTIFS//////////////////////////////////////////////////////////////
//Note generation techniques
const randNote=()=>(rand(0,7))
const chordTones=[0,2,4,7,9]
const chordNote=()=>{
    return chordTones[rand(0,3)]
}
const nearNote=(arr)=>{
    let lastNote=arr[arr.length-1]
    return nearest(chordTones,lastNote)
}
const addNote=(arr,a,b)=>{
    let lastNote=arr[arr.length-1]
    let move= flip()===0 ? a : b
    return lastNote+move
}
const stepNote=(arr)=>addNote(arr,-1,1)
const skipNote=(arr)=>addNote(arr,-2,2)
const hopNote=(arr)=>addNote(arr,-4,3)
const jumpNote=(arr)=>addNote(arr,-3,4)

const noteArr=[randNote,chordNote,nearNote,stepNote,skipNote,hopNote,jumpNote]

//Motif generation
let motif=[]
const makeMotif=()=>{
    let length=rand(2,5)
    for (i=0;i<length;i++){
        if (i===0) flip() ? motif.push(randNote()) : motif.push(chordNote())
    else if (i>0 && i<length-1) motif.push(noteArr[rand(0,6)](motif))
    else {
        let tf=0
        chordTones.forEach((item)=>{if (motif[0]===item) tf=1})
        tf ? motif.push(noteArr[rand(0,6)](motif)) : motif.push(nearNote(motif))
    }}
    motifs.push([motif])
    motif=[]
}
const linMotif=()=>{
    let mult=rand(1,5)
    let len= mult===1 ? rand(2,7)
    : 2 ? rand(2,5)
    : 3 ? rand(2,4)
    : 4 ? rand(2,3)
    : 2
    for (let i=0;i<len;i++){
        motif.push(i*mult)
    }
    if (flip()) motif.reverse()
    motifs.push([motif])
    motif=[]
    
}
//const circMotif= symetrically surround chord tones

//MANIPULATE MOTIFS///////////////////////////////////////////////////////////////
const rev=(arr)=>{
    let copy=[...arr].reverse()
    motifs.push(copy)
}
const mirror=(arr)=>{
    let copy=[...arr]
    if (flip()) copy.pop()
    copy=copy.concat([...arr].reverse())
    motifs.push(copy)
}
const negate=(arr)=>{
    let copy=[...arr]
    copy.forEach((item,index)=>copy[index]=-item)
    motifs.push(copy)
}
const invert=(arr)=>{
    let copy=[...arr]
    copy.forEach((item,index)=>{
        let distance=item-copy[0]
        copy[index]=copy[0]-distance
    })
    motifs.push(copy)
}
const shuffle=(arr)=>{
    let copy=[...arr]
    for (let i=0;i<rand(1,arr.length);i++){
        let oldDex=rand(0,arr.length-1)
        let newDex=rand(0,arr.length-1)
        let a = copy[oldDex];
        copy[oldDex] = copy[newDex]
        copy[newDex] = a
    }
    motifs.push(copy)
}
const trunk=(arr)=>{
    let tot = arr.length
    if (tot > 2){
        let max = tot - 2
        let len = arr.length > 4 ? rand(2,max) : rand(1,max)
        let start = rand(1,tot-len)-1
        let end = start + len - 1
        console.log(`start ${start} end ${end}`)
        let copy = arr.filter((item,index)=> index<start | index>end )        
        mofits.push(copy)
    }
}
const noise=(arr)=>{
    let copy=[...arr]
    let unused=[]
    for (let i=0;i<copy.length;i++){
        used.push(i)
    }
    let numChange=rand(1,arr.length-1)
    for (let i=0;i<numChange;i++){
        //random pick can't be already picked
        let pick=unused[rand(0,unused.length-1)]
        unused.splice(pick,1)
        //pick can't become noise if it's a chordtone
        let tf=0
        chordTones.forEach((item)=>{
            if (copyB[pick]===item) 
            tf=1
        })
        if (!tf) {
            //noise note can't be same as original note
            let avail=[-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11]
            avail.splice(avail.indexOf(copy[pick]),1)
            //pick becomes noise
            copy[pick]=avail[rand(0,avail.length-1)]
        }
    }
    motifs.push(copy)
}

//NOTE!! a motif an its variations should maybe have a subArray that starts with the original
//motifs.push([motif]) O.G
//motifs[0].push(motif) Variaton
//NO.. USE OOP?

//GENERATE PHRASES////////////////////////////////////////////////////////////////////
let phrases=[]
let phrase=[]
//generate
let linPhrase=()=>{
    let mult=rand(1,3)
    for (let i=0;i<rand(2,8);i++){
        phrase.push(i*mult)
    }
}
let randPhrase=()=>{
    let len=rand(2,12)
    for (let i=0;i<len;i++){
        phrase.push(rand(0,len))
    }
}