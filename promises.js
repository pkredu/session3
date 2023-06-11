var promise = new Promise(function(resolve,reject){
    const a = "node.js";
    const b = "klode.js";
    if(a==b){
        resolve('success');
    }else{
        reject('incorrect');
    }
})
// if ssuccessful or reoslve()
.then(function(result){
    console.log('The string are same:-',result)
})
// if unsuccessfull or reject()
.catch(function(err){
    console.log('string are not same or some error occured',err)
})