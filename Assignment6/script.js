var dis = 0;
var ans = 0;
var cal = 0
function myFnC() {
    document.getElementById('result').innerHTML = "";
    document.getElementById('sub').innerHTML = "";
}
function myfn1() {
    var x = document.getElementById('result').innerHTML;
     document.getElementById('result').innerHTML= x + "1";
}
function myfn2() {
    var x = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML=x+"2";
}function myfn3() {
    var x = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML=x+"3";
}function myfn4() {
    var x = document.getElementById('result').innerHTML;
   document.getElementById('result').innerHTML=x+"4";
}function myfn5() {
    var x = document.getElementById('result').innerHTML;
     document.getElementById('result').innerHTML=x+"5";
}function myfn6() {
    var x = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML=x+"6";
}function myfn7() {
    var x = document.getElementById('result').innerHTML;
     document.getElementById('result').innerHTML=x+"7";
}function myfn8() {
    var x = document.getElementById('result').innerHTML;
     document.getElementById('result').innerHTML=x+"8";
}
function myfn9() {
    var x = document.getElementById('result').innerHTML;
     document.getElementById('result').innerHTML=x+"9";
}
function myfn0() {
    var x = document.getElementById('result').innerHTML;
     document.getElementById('result').innerHTML=x+"0";
}
function myfnp() {
    var x = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML=x+".";
}

function addition() {
    cal = 1
    dis = document.getElementById('result').innerHTML;
    document.getElementById('sub').innerHTML = dis + "+";
    document.getElementById('result').innerHTML = "";
}
function subtraction() {
    cal = 2
    dis = document.getElementById('result').innerHTML;
    document.getElementById('sub').innerHTML = dis + "-";
    document.getElementById('result').innerHTML = "";
}
function multiplication() {
    cal = 3
    dis = document.getElementById('result').innerHTML;
    document.getElementById('sub').innerHTML = dis + "x";
    document.getElementById('result').innerHTML = "";
}
function division() {
    cal = 4
    dis = document.getElementById('result').innerHTML;
    document.getElementById('sub').innerHTML = dis + "/";
    document.getElementById('result').innerHTML = "";
}

function equals() {
    ans = parseInt(document.getElementById('result').innerHTML);
    var x = document.getElementById('sub').innerHTML;
    x = x + ans;
    dis = parseInt(dis);
    switch (cal) {
        case 1 : 
            ans = ans + dis;
            break;
        case 2 :
            ans = dis - ans;
            break;
        case 3 :
            ans = ans * dis;
            break;
        case 4 :
            ans = dis / ans;
            break;
            
            
    }
    document.getElementById('result').innerHTML = ans;
    document.getElementById('sub').innerHTML = "";
}
