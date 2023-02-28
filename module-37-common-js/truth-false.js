let y = 0;


// !y eita dey mane kono kicu truth hoile convert kore false korle eitar vitor dhukbena
if(!y){
    console.log('false');
}

// not not y
if(!!y){
    console.log('truthy');
}

let x = undefined;
if(x){
    console.log('yeah truthy'); //!x eita dile false eita dile truth kore dibe mane bole eita ki false kina se ha bolbe
}
else{
    console.log('yeah falsy');
}