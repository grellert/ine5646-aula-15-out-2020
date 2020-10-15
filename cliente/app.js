function onClickSearch(){
    const palavra = document.querySelector("#input-palavra").value;
    if (palavra === '') return;
    
    // FIX ME -- buscar texto no servidor com route param
    textoDef = "";
    mostraDefinição(palavra, textoDef);
}

function mostraDefinição(palavra, def){
    const wordSpan = document.querySelector("#texto-palavra");
    const defSpan = document.querySelector("#texto-definicao");
    const areaDef = document.querySelector("#area-definicao");

    areaDef.classList.remove("hidden");
    
    wordSpan.textContent = palavra + ': '; 
    defSpan.textContent = def;
}


const botaoObj = document.querySelector("#botao-busca");
botaoObj.addEventListener("click", onClickSearch);

const formSearch = document.querySelector('#form-palavra');
formSearch.addEventListener('submit', event => {
    event.preventDefault();
    onClickSearch();
});

