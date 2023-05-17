// Selecting Element

const clearButton = document.querySelector("#todoClearButton");

const todoList = document.querySelector(".list-group");

const todoListe = document.querySelectorAll(".list-group-item")[2];

const todoListt = Array.from(document.querySelectorAll("li:first.child(even)"));
 todoListt.forEach(function(todo){
    todo.style.backgroundColor = "lightgrey";
});


// Style 

const todo = document.querySelectorAll(".list-group-item")[0];

todo.style.color ="red";
todo.style.backgroundColor = "purple";
todo.style.fontWeight = "bold";
todo.style.paddingTop = "20px";
todo.style.paddingLeft = "70px";


value = todo.parentElement; // Eltern element e ulasabiliriz

value = todo.nextElementSibling; // Kinder elementler arasi  iler gecis;
value = todo.previousElementSibling;// Kinderler arasi geri gecis;

