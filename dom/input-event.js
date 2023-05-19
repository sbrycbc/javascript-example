//INPUT-EVENT

//focus: Inputa girdigimizde tetiklenir!!

const todo = document.querySelector("#todoName");
todo.addEventListener("focus", run);

function run(e){
    console.log(e.type)
};

//blur: Inputa ciktigimizda tetiklenir!!

const todo_ = document.querySelector("#todoName");
todo_.addEventListener("blur", run);

function run(e){
    console.log(e.type)
};

//copy: Inputun icine bir sey kopyaladigimizda tetiklenir!!!

const todo_a = document.querySelector("#todoName");
todo_a.addEventListener("copy", run);

function run(e){
    console.log(e.type)
};

//paste
//cut
//select


