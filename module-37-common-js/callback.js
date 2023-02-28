function greeting(greetinghandle,name){
    greetinghandle(name);
}

function greetinghandle(name){
    console.log('good morning', name);
}
function greetevenng(name){
    console.log('good evening',name);
}
function greetnight(name){
    console.log('good night',name);
}

greeting(greetinghandle, 'tom hanks');
greeting(greetevenng, 'sum carry');
greeting(greetnight, 'sum jhones');




function submit(){
    console.log('submit button clicked');
}

//document.getElementById('btn').addEventListener('click',submit{
   
//});


function bangla(vasha,f){
    vasha(f);

}
function vasha(f){
    console.log('english', f)
}
bangla(vasha, 'so cute');