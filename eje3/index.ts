interface SquareConfig {
    color?:string;
    width?:number;
}

function createSquare(config:SquareConfig):{color:string, area:number} {
    let newSquare = {color:"",area:0};
    if(config.color)
        newSquare.color=config.color;
    if(config.width)
        newSquare.area=config.width*config.width;
    return newSquare;

}

let mySquare = createSquare({color:"negro"});

console.log(mySquare);