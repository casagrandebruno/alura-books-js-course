let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosAPI();



async function getBuscarLivrosAPI() {
    const response = await fetch(endpointAPI);
    livros = await response.json();

    let livrosComDesconto = aplicarDesconto(livros);

    exibirLivrosNaTela(livrosComDesconto);
}

