function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return function coffee(){

    }
}
function returnsAnAnonymousFunction(){
    return function(){
        
    }
}