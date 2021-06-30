const precos = [
    'Crédito',
    'R$ 200',
    'R$ 400',
    'Contas a Pagar',
    'R$ 300',
    'R$ 400',
    'Meus dados'
];

const precoFiltro = precos.filter((p) => p.includes('R$'));

const precoNumeros = precoFiltro.map((preco)=> Number(preco.replace ('R$ ', '')));

console.log(precoNumeros);
console.log(precoFiltro);