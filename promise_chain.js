

new Promise((resolve,reject)=>{
    resolve(1);
})
.then(value =>{
    console.log('start',value)
    return 2
})
.then(value =>{
    console.log('second',value)
    return 1
})