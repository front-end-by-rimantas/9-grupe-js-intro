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


/****************************
 * KINTAMUJU PALYGINIMAS
 ****************************/

console.log('****************************');
console.log('* KINTAMUJU PALYGINIMAS');
console.log('****************************');

var temp = 36;

// 36.2 > temp < 36.6

if ( temp > 36.6 ) {
    console.log( 'Jap, tavo temperatura per auksta' );
}

if ( temp < 36.2 ) {
    console.log( 'Jap, tavo temperatura per zema' );
}


var skaicius = 20;

if ( skaicius > 0 ) {
    console.log( skaicius + ' yra teigiamas.' );
} else if ( skaicius == 0 ) {
    console.log( 'Sorry, nulis yra nulis....' );
} else {
    console.log( skaicius + ' yra neigiamas.' );
}

// a > b
// a < b
// a == b
// a >= b
// a <= b
// a != b
// a === b
// a !== b

console.log('-------------');

if ( 5 > '5' ) {
    console.log( 'taip' );
} else {
    console.log( 'ne' );
}



/****************************
 * FOR LOOP (ciklas)
 ****************************/

console.log('****************************');
console.log('* FOR LOOP (ciklas)');
console.log('****************************');

var list = ['as', 'sd', 'df', 'fg', 'df', 'fg', 'df', 'fg', 'df', 'fg'];
console.log(list);

for ( var i=0; i<list.length; i++ ) {
    console.log( i + ' - ' + list[i] );
}



console.log('-------------');
console.log('skaiciu suma intervale');


var nuo = 0,
    iki = 4,
    suma = 0;

for ( var i=nuo; i<=iki; i++ ) {
    suma = suma + i;
    console.log(suma);
}

console.log('-------------');

var tekstas = 'abcdef';

for ( var i=0; i<5; i++ ) {
    console.log(  );
}
