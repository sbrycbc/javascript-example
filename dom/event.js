//addEventListener();


const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click",changeTitle);


function changeTitle(){
    document.querySelectorAll('.cart-titile')[1].textContent="Andern!!"}


//MouseEvent

//DomContentLoaded


document.addEventListener("DOMContentLoaded", run);

function run(){
    console.log('Beginnt deine Siete!!!!');
}

//load

window.addEventListener("load", run);

function run(){
    console.log('Beginnt deine Siete!!!!');
}

//click

const cardTitle = document.querySelectorAll(".card-title")[1];

cardTitle.addEventListener("click",run);

function run(e){
    console.log(e.type);
}

//dbclick

const cardTitlen = document.querySelectorAll(".card-title")[1];

cardTitlen.addEventListener("dbclick",run);

function run(e){
    console.log(e.type);
};

//mouseover

const cardTitle_ = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".cart-body")[1];

cardBody.addEventListener("mouseover", run);

function run(e){
    console.log(e.type);
};

//mouseout

const cardTitle_p = document.querySelectorAll(".card-title")[1];
const cardBody_ = document.querySelectorAll(".cart-body")[1];

cardBody_.addEventListener("mouseout", run);
cardBody.addEventListener("mouseover", run);

function run(e){
    console.log(e.type);
};

//mouseleave 

const cardTitle_pa = document.querySelectorAll(".card-title")[1];
const cardBody_a = document.querySelectorAll(".cart-body")[1];

cardBody_a.addEventListener("mouseleave", run);

function run(e){
    console.log(e.type);
};









