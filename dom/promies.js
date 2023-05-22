// Promises

console.log("start");

function changeBackgroundColor(color,delay){
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    });
}

changeBackgroundColor("red", 2000)
.then(() => changeBackgroundColor("yellow",4000))
.then(() => changeBackgroundColor("orange",6000))
