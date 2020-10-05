const odd=(num)=>num%2===0
const random=(min,max)=>{  
    min=Math.ceil(min) 
    max=Math.floor(max) 
    return Math.floor(Math.random()*(max-min+1))+min 
}
const flip=()=>random(0,1)
let j=5

example=(j)=>{
    return j==4 ? random(-4,-5)
         : j==5 ? flip()
         : j==6 ? random(50,60)
         : 38;
}

let go=[]
go.push(2)
go.unshift(1)

console.log(go)
console.log(go[0])
console.log(flip() ? 'yea':'no')