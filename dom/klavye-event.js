// KLAVYE EVENT

//keypress : harf ve sayilarda tetiklenen eventtir

document.addEventListener("keypress", run);

function run(e){
    //console.log(e.key);
    //console.log(e.keycode);//asci Tablo da ki karsiliklarini bu sekilde görebiliriz!!!
    //console.log(e.whcich); BU da ayni keyCode gibi ayni mantikta calisiyor
};

//keydown: Sadece harf ve sayilarda tetiklenmez ayrica diger klavye tuslarina bastigimiz zamanda tetiklenir!!

document.addEventListener("keydown", run);

function run(e){
    console.log(e.key);
    //console.log(e.keycode);//asci Tablo da ki karsiliklarini bu sekilde görebiliriz!!!
    //console.log(e.whcich); BU da ayni keyCode gibi ayni mantikta calisiyor
};

//keyup: Tustan elini kaldirdiginda calisan eventtir. Bütun tuslarda calisir. 

document.addEventListener("keyup", run);

function run(e){
    console.log(e.keyCode)
    if(e.keyCode === 116){
        alert("Das darf nicht!!")
    }
};

const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoAddButton");

input.addEventListener("keypress", run);

function run(e){
    console.log(e.target.value)
}