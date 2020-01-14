// const names = ['Ed', 'John', 'Maria', 'Eliza', 'Harry', 'Potter']

// for(name of names){
//     console.log('Hellow there' +' '+ (name));
// }

// let loading = 0;
// while(loading < 100){
//     console.log('website is still loading')

//     loading++;

    
// }
const names = ['Ed', 'John', 'Maria', 'Eliza', 'Harry', 'Potter']
// for(let i = 0; i <names.length; i++){
//     console.log(names[i]);
//     //if(i === 3) break;
// }

for(name of names){
//    console.log(name);
}

// const user = {'firstName': 'M.', 'lastName': 'Mubi'}
// for(key in user) //console.log(user[key]);

// var i = 0;
// do {

// }
// while(i < 10){
//     i++;
//     if(i === 5) continue;
//     console.log(i);


// var num = prompt("enter your required table !")
// for (i = 1; i <= 10; i++){
//     console.log(num + "x" + i + "=" + (num*i))
// }

// for(i = 1; i<= 10; i++){
//     console.log
// }

/*var num = prompt('enter your desired number!');
var isPrime = true;

for(i = 2; i < num; i++){
    var result = num % i
    if(result == 0){
        console.log("this is not a prime number = " + num + ' | ' + i);
        isPrime = false;
        break
    }
    /*else {
        console.log('number is prime' + num + ' | ' + i);
        break
    }*/

/*if(isPrime){
    console.log('Number is prime' + ' ' + num);
}*/
// var i = '*'
// for(i = 1; i <=7; i++){
//     console.log('*')
// }

// for(var i = 0; i < 5; i++){
//     for(var j = 0; j < 3; j++){
//     console.log("I = " +i+ ' , ' + "J = "+j);


//     }
// }
var arr = [];
for(var i= 0; i < 5 ; i++){
    arr[i] = arr.push(i*2);

}
for(var j = 0; j < arr.length; j++){
    console.log(arr[j]);

}

// var arr = [34, 23, 56, 87, 1, 45, 88]
// var input = parseInt(prompt('Enter number to find '));
// console.log('User Input', input);
// for (var i = 0; i < arr.length; i++){
//    console.log(arr.indexOf);
// }
//     if(arr[i] === input){
//         console.log('Found ' + input + ' ' + 'on index ' + i);
//         break;
//     }
//     if(arr[1] !== input){
//         console.log('Not Found') 
//         break;
//     }
// }
var string = 'Jan'
var length = string.length
if(length > 3){
    console.log('This isn`t abbreviation')
}
else{
    console.log('This is an abbreviation')
}
var string = 'Hellow I`m mu  bi'
for (var i = 0; i < string.length; i++){
    if (string.slice(i, i+2) === "  "){
        console.log('Double space found at : ' + i)
        break
    }
}
var arr = []
var Months = ['January', 'February', 'March', 'April', 'May', 'June'];
for (i = 0; i < Months.length ; i++){
    arr.push(Months[i].slice(0,3))
}
console.log('Abbreviation of months are : ' + arr)

// var string = 'this is a string this is a string this is a string this is a string';
// for(let i = 0; i < string.length; i++){
//     if (string.slice())
// }
// console.log(string)

// var name = 'mubi'
// var index = name.indexOf('mubi')
// name = name.slice(0, index)+'Zain'+name.slice(index+5))

var arrr = ['hello', 'i', 'am', 'mubi']
index = arrr.indexOf('i')
arrr[index] = 'u'
console.log(arrr)