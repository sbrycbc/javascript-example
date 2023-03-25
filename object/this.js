// `this` Keyword

/* let list = {
    category : `phone`,
    names : [`IPhone 8`, `Samsung S8`, `IPhone 7`],
    call :function (){
        this.names.map((name)=> {
            console.log(`${this.category}  ${name}`);
        })

    }
}

list.call(); */


function Game(){
    this.live = 0;
    this.addlive = function(){
        this.OneUp = setInterval(()=>{
            console.log(++this.live)
        },1000)
    }

}

let player = new Game();
player.addlive();