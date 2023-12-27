
//bai 1
function substring(str) {
    if (str.length < 3) {
        return str ;
    }
    let str2 = str.slice(-3);
    if (str2 === "ing"){
        return str + "ly";
    } else
    {
        return str + "ing";
    }
}
console.log(substring('play'));
console.log(substring("running"));
console.log(substring('go'));

//bai 2 
var t = 'TRung Nghai';
function convert(str) {
    var result ='';
    for (var i=0; i < t.length; i++) {
        var t1 = str[i];
        if (t1 === t1.toLowerCase()) {
            result += t1.toUpperCase();
        } else {
            result += t1.toLowerCase();
        }
    }
    return result;
}
console.log(convert(t));


//bai 3 
var so = [1 , "a" , 2 , "b", 3];
function locso(so) {
    return so.filter((item) => !isNaN(item));
} 
console.log(locso(so));

// bai 4
var so1 = [ 1 , 5 , 2 ,3];
console.log(so1.sort().reverse()); 

//bai 5 
var so2 = [1, 2 ,3];
function myFunc(num) {
    return num * 2;
}
console.log(so2.map(myFunc));

//bai 6 

var so3 = [1,2,3,4,5,6,7];
function dayso(so3) {
    var number = [];
    for (var i=0; i < so3.length; i++) {
        if (so3[i] % 2 !== 0) {
            number.push(so3[i]);
        }
    }
    return number;
}
console.log(dayso(so3));

//bai 7 
var so4 = [1,2,3,1,2,3,4,5,3,1,2];
function dayso(so4) {
    var so5 = [];
    for (var i=0; i < so4.length; i++) {
        if (so5.indexOf(so4[i]) === -1) {
            so5.push(so4[i]);
        }
    }
    return so5;
}
console.log(dayso(so4));
