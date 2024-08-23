//------------------------------------for - in--------------------------------------------//

var list = ['a', 'b', 'c'];
var message;
for (var i in list) {

    message = 'indeks ' + i + ' berisi data ' + list[i];
    console.log(message);
};

//---for in bisa digunakan untuk memproses semua atribut(key)

var person = {
    'name': 'boss',
    'age': 40,
    'sex': 'male'
}

var message;

for (var attr in person) {

    message = 'atribut ' + attr + ' berisi data ' + person[attr];
    console.log(message);
}