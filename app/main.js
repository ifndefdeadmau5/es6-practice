var input = prompt('Input?');
console.log(input.length);
var object ={};
for (var i = 0; i < input.length; i++ ){
    if ( object[input[i]] ){
        continue;
    } else {
        object[input[i]]= true;
        console.log( input[i] );
    }
}