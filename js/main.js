"use strict";

var a = 1;
console.log( a );

var b = 2;
console.log( b );

var c = 4;
console.log( c );

var txt_a = 'tekstas 1';
console.log( txt_a );

var txt_b = "tekstas 2";
console.log( txt_b );

var txt_c = 'tekstas 3';
console.log( txt_c );

var marks = [10, 2, 7, 7, 8];
console.log( marks );

var worst_marks = [1, 2, 2, 1, 2];
console.log( worst_marks );

var usernames = ['asd', 'qwe', "''", '""', 'kitkat'];
console.log( usernames );

var sakiniai = [
    'Pamidoras yra raudonas.',
    'Cia yra panaudotos "dvygubos" kabutes.',
    "Cia yra panaudotos 'viengubos' kabutes.",
    "Cia yra panaudotos \"dvygubos\" kabutes.",
    'Cia yra panaudotos \'viengubos\' kabutes.'
];
console.log(sakiniai);

var tiesa = true;
console.log( tiesa );

var melas = false;
console.log( melas );

/****************************
 * VEIKSMAI SU KINTAMAISIAIS
 ****************************/

console.log('****************************');
console.log('* VEIKSMAI SU KINTAMAISIAIS');
console.log('****************************');

console.log( 2+2*2 );
console.log( 'Vardenis' + ' ' + 'Pavardenis' );

var amzius = 31.66;
console.log( 'Man yra ' + amzius + ' metu.' );

// console.log( a + '+' + b + '=' + (a+b) );

console.log( '1 + ' + b + ' = 3' );

console.log('----------------');

console.log( marks );
var sum_of_marks = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
console.log( sum_of_marks );

console.log( 'Pazymiu vidurkis: ' + (sum_of_marks / marks.length) );


console.log('----------------');

var abc = ['a', 'b', 'c', 'd'];
console.log( abc );

var atbula_abc = abc[3] + ', ' + abc[2] + ', ' + abc[1] + ', ' + abc[0];
console.log( atbula_abc );
