//recuperar os nomes;
let nomesLista = [];
function adicionar(){
    let nomes = document.getElementById('nome-amigo').value;
    let nomeMaiusculo = transformaParaMaiusculo(nomes);
    if (nomes != '') {
        if (nomesLista.includes(nomeMaiusculo)) {
            document.getElementById('nome-amigo').value = '';
            alert('Esse amigo já está incluso');
            return;
        }
        nomesLista.push(nomeMaiusculo);
        adicionarNomesLista();
        document.getElementById('nome-amigo').value = '';
    } else{
        alert('Insira um nome do amigo(a)');
        return;
    }
}

function transformaParaMaiusculo(palavra) {
    return palavra.toUpperCase();
}

//adicionar o nome a lista;
function adicionarNomesLista(){
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = nomesLista.join(',');
}
//sortear os nomes;
function sortear(){
    if(nomesLista.length < 4){
        alert('Insira pelo menos 6 participantes');
        return;
    }
    const nomeSorteado = embaralha(nomesLista);
    for(let i =0; i < nomesLista.length; i++){
        let sorteios = document.getElementById('lista-sorteio');
        if(i == nomesLista.length - 1){
            sorteios.innerHTML = sorteios.innerHTML +  nomesLista[i] + ' -> ' +  nomesLista[0] + '<br>';
        } else{
            sorteios.innerHTML = sorteios.innerHTML +  nomesLista[i] + ' -> ' +  nomesLista[i + 1] + '<br>';
        }
        
    }

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


//reninciar;
function reiniciar(){
    nomesLista = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}