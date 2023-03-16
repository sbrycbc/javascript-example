const num = 15.123456789;

// I- Toplamda 3 basamakli sayi kullanin
console.log(num.toPrecision(3));

// II- Ondalik kismi 3 basamakta sinirla
console.log(num.toFixed(3));

// III - en yakin sayiya yuvarla
console.log(Math.round(num));

// IV - asagiya yuvarla
console.log(Math.floor(num));


// V - yukariya yuvarla
console.log(Math.ceil(num));

// VI - 1,2,10,65,20 sayilarindan en kücügünü ve en büyügünü bul
console.log(Math.min(1,2,10,65,20));
console.log(Math.max(1,2,10,65,20));

//VII - sayi araligini kullanicinin belirleyecegi rastgele bir sayi üretin
const min = 50;
const max = 100;
console.log(Math.floor(min+Math.random()*(max-min)));

/*VIII - Bir personelin yaptigi mesaiye göre aldigi maasi hesaplayalim.
    ** Brüt maas  : 3700
    ** Brüt mesai : 10.3
    Agustos ayinda mesai toplami 42 saat ise toplam brüt maasi nedir?
    Brüt maas üzerinden toplam kesinti orani %25 ise alinacak toplam net maas nedir?
*/
const brütMaas = 3700;
const mesaiÜcreti = 10.3
const mesaiSüresi = 42;

const toplamBrütMaas = brütMaas + (mesaiÜcreti*mesaiSüresi);
const toplamNetMaas = toplamBrütMaas - (toplamBrütMaas/4);
console.log(toplamBrütMaas.toFixed(2));
console.log(toplamNetMaas.toFixed(2));


