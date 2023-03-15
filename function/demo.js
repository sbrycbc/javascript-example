// Demo : Functions

let kontoA = {
    name : 'Mahir Cebe',
    kontoNo :'12345678',
    balence :2000,
    EkKonto : 1000
}

let kontoB = {
    name : 'Tarik Cebe',
    kontoNo :'87654321',
    balence :3000,
    EkKonto : 2000
}

function paraCek(konto,miktar){
    console.log(`Merhaba ${konto.name}`)
    if(konto.balence >= miktar){
        console.log(`darf mal ihre Geld nehmen!!`);
    }
    else{ 
        let toplam = konto.balence + konto.EkKonto;

        if(toplam>= miktar){
            if(confirm(`können Sie EkKonto benutzen?`)){
                console.log(`ddarf mal ihre Geld nehmen!!`)
            }
            else{
                console.log(`${konto.kontoNo} nolu im Konto kein Geld!!`);
            }
        }
        else{
            console.log(`sorryy kein Geld!!`);
        }
    }

}

paraCek(kontoA,2000)
//paraCek(kontoB,3000)