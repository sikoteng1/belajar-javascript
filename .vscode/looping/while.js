/*var a = [];
var i = 0;

//selama i kurang dari 4
//break condition : i == 4
while (i < 4) {
    //simpan i dalam array
    a.push(i);

    //naikan i untuk proses selanjutnya
    i++;

};

console.log(a); //[o,1,2,3]*/

//---kode diatas bisa diketik dengan cara lain:

var a = [];
var i = 0;

while (i++ < 4) {
    a.push(i);
};

console.log(a); //0,1,2,3

//---ini klo i++ diganti dengan ++i:

/*let a = [];
let i = 0;

while (++i < 4) {
    a.push(i);
};

console.log(a);*/