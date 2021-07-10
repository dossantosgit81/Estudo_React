import React from 'react';

const titulo = <h1>Esse é um titulo</h1>;

function mostrarNome(sobrenome){
    return 'André ' + sobrenome;
}

const carro = {
    marca: 'Ford',
    rodas: '4'
}

const estiloP = {
    color: 'blue',
    fontSize: "2rem"
};

const App = () => {
    const nome = "André";
    const ativo = false;
    return (
        <React.Fragment>
            {titulo}
            {mostrarNome("John ")}
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome"/>
            <p className={ativo ? 'ativo' : 'inativo'}>{nome}</p>
            <p style={estiloP}>{carro.marca}</p>
        </React.Fragment>
        // <a className="ativo" href="https://reactjs.org" title="Isso é um site">
        //     React
        // </a>
    );
};
   

export default App;