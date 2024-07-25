//aqui vou criar minha bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
function setup(){
    //aqui vou criar minha mesa
    createCanvas(600,400);

} 

function draw(){
    //aqui vou por a cor de mesa, em rgb
    background(128,0,0);
    //chamando a funcaao
    criaBolinha(xBolinha, yBolinha, tamBolinha)
}

//funcao bolinha
function criaBolinha(xBolinha, yBolinha, tamBolinha){
    circle (xBolinha, yBolinha, tamBolinha);

}
//funcao em bolinha
function moveBolinha(){
    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;
}