//challenge 1: age in days
function ageInDays(){
var birthYear = prompt('Which year were you born... Buddy?');
var ageInDayss = (2019 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnwser = document.createTextNode('you are' + ' ' + ageInDayss + ' ' + 'days old');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnwser);
document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}
