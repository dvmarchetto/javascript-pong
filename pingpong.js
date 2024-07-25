//aqui vou criar minha bolinha
let xBolinha = 600;
let yBolinha = 400;
let tamBolinha = 25;
function setup(){
    //aqui vou criar minha mesa
    createCanvas(600,400);

} 

function draw(){
    //aqui vou por a cor de mesa, em rgb
    background(128,0,0);
    //chamando a funcaao
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    moveBolinha();
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

function Borda(){
    if (xBolinha > width || xBolinha < 0 ){
        yvelocidadeBolinha 
    }
}