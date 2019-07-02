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
console.log('Atbulas tekstas');


var tekstas = 'abcdef',
    atbulas = '';

for ( var i=tekstas.length - 1; i>=0; i-- ) {
    console.log( tekstas[i] );
    atbulas = atbulas + tekstas[i];
}
console.log('Atbulas tekstas: ' + atbulas);

console.log('-------------');
console.log('Dalyba be liekanos intervale');

var nuo = -180,
    iki = 180,
    daliklis = 5,
    kiekis = 0;

// logika
for ( var i=nuo; i<=iki; i++ ) {
    // console.log( i, '%', daliklis, ' = ', (i - i%daliklis) / daliklis, 'sveiku ir ', i%daliklis, 'liekana' );
    
    if ( i % daliklis === 0 ) {
        kiekis++;
    }
}

console.log( 'Skaičių intervale tarp '+nuo+' ir '+iki+', besidalinančių be liekanos iš '+daliklis+' yra '+kiekis+' vienetai.' );




/****************************
 * FUNKCIJOS
 ****************************/

console.log('****************************');
console.log('* FUNKCIJOS');
console.log('****************************');

console.log('Tuscia funkcija');

function tusciaFunkcija() {
    // logika
    return false;
}

console.log( tusciaFunkcija() );


console.log('-------------');
console.log('Skaiciu daugyba');

function daugyba( skaicius1, skaicius2 ) {

    if ( typeof( skaicius1 ) !== 'number' ||
         typeof( skaicius2 ) !== 'number' ) {
        return 'Kintamieji turi buti skaiciaus tipo.';
    }

    if ( !isFinite(skaicius1) ||
         !isFinite(skaicius2)) {
        return 'Kintamieji turi buti realus skaiciai.';
    }

    var sandauga = skaicius1 * skaicius2;
    return sandauga;
}

console.log( daugyba( -5, '4' ) );
console.log( daugyba( '-5', '4' ) );
console.log( daugyba( -5, 'a' ) );
console.log( daugyba( -5, [1, 2] ) );
console.log( daugyba( 2, Infinity ) );
console.log( daugyba( Infinity, 5 ) );
console.log( daugyba( 2, NaN ) );
console.log( daugyba( NaN, 5 ) );

console.log( daugyba( 2, 3 ) );
console.log( daugyba( -5, 4 ) );
console.log( daugyba( 0, 0 ) );


console.log('-------------');
console.log('Skaitmenu kiekis skaiciuje');

function skaitmenuKiekisSkaiciuje( skaicius ) {
    var kiekis = 0,
        tekstas = ''+skaicius;

    if ( typeof(skaicius) !== 'number' ||
         !isFinite(skaicius) ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }


    if ( tekstas.indexOf('e') >= 0 ) {
        // issiskaidome aplink e
        let sudedamosiosSkaiciausDalys = tekstas.split('e');
        console.log(sudedamosiosSkaiciausDalys);
        
        // kiekis + pirma dalis
        kiekis = kiekis + 1;
        // kiekis = kiekis + sudedamosiosSkaiciausDalys[0].length;

        // kiekis + antra dalis
        kiekis = kiekis + parseInt( sudedamosiosSkaiciausDalys[1] );

    } else {
        // logika
        kiekis = tekstas.length;

        for ( var i=0; i<tekstas.length; i++ ) {
            if ( tekstas[i] === '.' ||
                 tekstas[i] === ',' ||
                 tekstas[i] === '-' ||
                 tekstas[i] === '+' ) {
                kiekis--;
            }
        }
    }


    return skaicius + ' (' + kiekis + ')';
}

console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( "asd" ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( Infinity ) );

console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( 3.14 ) );
console.log( skaitmenuKiekisSkaiciuje( Math.PI ) );
console.log( skaitmenuKiekisSkaiciuje( -314 ) );
console.log( skaitmenuKiekisSkaiciuje( -3.14 ) );
console.log( skaitmenuKiekisSkaiciuje( +314 ) );
console.log( skaitmenuKiekisSkaiciuje( +3.14 ) );
console.log( skaitmenuKiekisSkaiciuje( 2+2*2 ) );
console.log( skaitmenuKiekisSkaiciuje( 2**3 ) );
console.log( skaitmenuKiekisSkaiciuje( 1/3 ) );
console.log( skaitmenuKiekisSkaiciuje( 1000000000000000000000000000000000000000 ) );
console.log( skaitmenuKiekisSkaiciuje( 1e+21 ) );
console.log( skaitmenuKiekisSkaiciuje( -0.123456789012345678901234567890123456789 ) );
// console.log( skaitmenuKiekisSkaiciuje( 1e-30 ) );