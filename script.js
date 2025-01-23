const ar = [{
    name:"amir",
    year: "final"
},{
    name:"sadab",
    year: "final"
},{
    name:"henry",
    year: "final"
},{
    name:"nawyaz",
    year: "final"
}]

ar.forEach((val)=>{
    console.log(val)
})

for(let val of ar){
    console.log(val)
for(let key in val){
    console.log(key)
}

}