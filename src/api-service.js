const fetch = require('node-fetch');



async function listarProdutos(){
	const responseProdutos = await fetch('https://stupefied-keller-a2c79e.netlify.app/produtos.json');
	verificarErros(responseProdutos);
	const dataProdutos = await responseProdutos.json();

	return dataProdutos;
}

function verificarErros(response){
	if(response.status !== 200){
		//throw new Error('${response.statusText}: ${response.status}');
		throw new Error(`${response.statusText}: ${response.status}`);
	}
}

async function listarCategorias(){
	const responseCategorias = await fetch('https://stupefied-keller-a2c79e.netlify.app/categorias.json');
	verificarErros(responseCategorias);
	const dataCategorias = await responseCategorias.json();

	return dataCategorias;
}

async function listarCupons(){
	const responseCupons = await fetch('https://stupefied-keller-a2c79e.netlify.app/cupons.json');
	verificarErros(responseCupons);
	const dataCupons = await responseCupons.json();

	return dataCupons;
}


module.exports = (listarProdutos, listarCategorias, listarCupons);