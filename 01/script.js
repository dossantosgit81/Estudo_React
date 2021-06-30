// const menu = {
//     seletor: '.principal'
// }

// console.log(menu.seletor.toUpperCase());

// const uppername =  (nome) => {
//     return nome.toUpperCase();
// }

// const lowerName = (nome) => nome.toUpperCase();

// console.log(lowerName('andre'));


function handleMouse({clientX, clientY}){
    console.log(clientX, clientY);
 }

// function handleMouse(event){
//    const {clientX, clientY} = event;
//    console.log(clientX, clientY);
// }

const frutas = ['Banana', 'uva'];

const [fruta1, fruta2] = frutas;
//console.log(fruta1);

// const useQuadrado = [4, function(lado){return 4 * lado}];
// const [lados, perimetro] = useQuadrado;

// console.log(lados,perimetro(10));
// document.addEventListener('click', handleMouse);

// function showList(empresa, ...clientes){
//     clientes.forEach(cliente => {
//         console.log(cliente, empresa);
//     });
// }

// showList('Google', 'Andre', 'Rafael');

// const numeros = [10, 5, 20];
// const maior = Math.max(...numeros);
// console.log(maior);

// const numeros2 = [...numeros, 4, 6, 7];
// console.log(numeros2);

// const carro = {
//     cor: 'Azul',
//     portas: 4
// }

// carroAno = {...carro, ano: 2008};

// console.log(carroAno);