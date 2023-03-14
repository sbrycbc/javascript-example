//Functions

function yasHesapla(dogumYili){
    return 2023 -dogumYili;
}

let ageMahir = yasHesapla(2011);
let ageTarikUlas = yasHesapla(2014);
let ageGölge = yasHesapla(2021);

console.log(ageMahir);
console.log(ageTarikUlas);
console.log(ageGölge);


function EmekligeKacYilKaldi(dogumYili, isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if(emeklilik>0){
        console.log(`${isim} emekli olmana ${emeklilik} yil kaldi`);
    }
    else{
        console.log(`Zaten emekli oldunuz!`)
    }
}

EmekligeKacYilKaldi(2011,`Mahir` );
EmekligeKacYilKaldi(2014,`Tarik` );
EmekligeKacYilKaldi(1951,`Gölge` );

