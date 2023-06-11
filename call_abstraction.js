addition = (first,second,addedResult)=>{
    addedResult(first + second)
}

addition(4,5,(result)=>{
    console.log(result);
})

addition('hello ','world',(result)=>{
    console.log(result);
})