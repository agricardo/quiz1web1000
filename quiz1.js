// question 1 ok
function arraySum(arr){
var resul = 0;
var i = 0;

function array(arr) {

    if (arr.length > i) {
        var temp = arr[i];
        resul = temp + resul;
        i++;
        return array(arr);
    }

    return resul;
}
return array(arr);
}
arraySum([1, 2, 3])

//question 2 ok

function icyHot(temperature1, temperature2) {

    if (temperature1 < 0 && temperature2 > 100) {
        return true;
    } else {
        return false;
    };

}
icyHot(120, -1)
icyHot(-1, 120)
//question 3 ok

function find(a, b) {
    if (a + b === 10) {
        return true;
    } else if (a === 10 || b === 10) {
        return true;
    } else {
        return false;
    };
}
find(5, 10)
//question 4 ok
function insert(val){
var first2 = val.slice(0, 2);
var last2 = val.slice(val.length - 2);

var result = first2 + val + last2;
return result;
}
insert("ana")
// question 5 ok

function frogJump(x, y, d){
var jumpNumber = 0;
function jump(x, y, d){
if(x < y){
    x = x + d;

    jumpNumber++
   return jump(x, y, d)
}
return jumpNumber;
};
return jump(x, y, d)
}
frogJump(0, 10, 2)

