// for(var i = 1; i<=5;i++){
//     if( i%2 != 0){

//     for(var j = 1; j <=i ; j++){
// console.log('*')
// }
// console.log('\n')
// }
// }

// for(var i = 3; i>=1;i--){
// if( i%2 != 0){
// for(var j = 1; j <=i ; j++){
// console.log('*')
// }
// console.log('\n')
// }
// }

// var amountOfFoodOne = parseInt(prompt('Input amount of Tikka !'));
// var amountOfFoodSecond = parseInt(prompt('Input amount of Biryani !'));
// var amountOfFoodThird = parseInt(prompt('Input amount of Drink !'));

// var totalAmountOfFoods = amountOfFoodOne + amountOfFoodSecond + amountOfFoodThird;
// alert (totalAmountOfFoods + (totalAmountOfFoods * 0.17 )); 
// var total = totalAmountOfFoods + (totalAmountOfFoods * 0.17) 
// var totalBill = parseInt(prompt('How many persons are sharing it ?'));
// console.log(total / totalBill);

var username = (prompt('Enter Username'));
var password = (prompt('Enter Password'));
var status

if (username.indexOf('/') === -1 && username.indexOf('*') === -1 && username.indexOf('@') === -1  ){
    status = 'done'
    console.log(status)
}

else{
    status = 'failed'
    console.log(status)
}

// || 'or' ki condition m ek b true hwa to sb true hojaenge
// && 'and' ki condition m sb true hone chiaye