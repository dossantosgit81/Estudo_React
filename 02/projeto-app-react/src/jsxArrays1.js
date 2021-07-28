import React from'react';

const App = () =>{
    // const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];
    // return <ul>{filmes.map(filme=><li key={filme}>{filme}</li>)}</ul>
const livros = [
    {nome: 'A Game of Thrones', ano: 1996},
    {nome: 'A clash of Kings', ano: 1998},
    {nome: 'A Storn of swords', ano: 2800}
];
    return ( 
        <ul>
            {livros
            .filter(livro=>livro.ano>=1998)
            .map(livro=><li key={livro.nome}>{livro.nome}, {livro.ano}</li>)}
        </ul>
    );
}

export default App;