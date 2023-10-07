//alert("belajar javascript itu menyenangkan"); //untuk munculin popup
//confirm("belajar javascript itu menyenangkan");//untuk munculin pilihan konfirmasi yes or no
//prompt("belajar javascript itu menyenangkan");//untuk munculin kotak kosong untuk isian dalam popup

//let name ="hermia"
//console.log(nama); untuk mengetahui eror atau tidak
//let usia;
//usia = 21;
//alert(usia); //fungsinya sama dengan console tapi lebih diutamakan untuk memakai console


//if else
let age = 25;

if (age >= 18) {
    console.log('Usia dewasa.');
} else {
    console.log('Usia masih anak-anak.');
}

// Nested if
let grade = 'A';

if (grade === 'A') {
    console.log('Yeyy Luar Biasa!');
} else if (grade === 'B') {
    console.log('Bagus Sekali!');
} else {
    console.log('Belajar Lagi yaaa!!!');
}

//switch case
let month = 'January';

switch (month) {
    case 'January':
        console.log('Bulan Januari');
        break;
    case 'February':
        console.log('Bulan Februari');
        break;
    default:
        console.log('Bulan tidak terdeteksi');
}

//for statement
for (let i = 1; i <= 5; i++) {
    console.log('Perulangan ke-' + i);
}

//while
let count = 1;

while (count <= 5) {
    console.log('Urutan ke-' + count);
    count++;
}

//do while
let number = 1;

do {
    console.log('Nomor ke: ' + number);
    number++;
} while (number <= 5);

//function
function greet(name) {
    return 'Halo nama saya, ' + name + '!';
}

console.log(greet('Hermiam'));