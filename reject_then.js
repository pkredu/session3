var promise = new Promise((resolve,reject)=>{
    reject('there is a problem')
}).then(result=>{
    console.log('then',result);
},()=>{
    console.log('then-problem');
})
