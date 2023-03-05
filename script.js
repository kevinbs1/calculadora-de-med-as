let form = document.getElementById('form-atividade');
let table = document.getElementById('tabela');
let tabelaBody = document.getElementById('tabela-body');
let tabelaFooter = document.getElementById('tabela-footer')

let inputNomeAtividade = document.getElementById('nome-atividade');
let inputNotaAtividade = document.getElementById('nota-atividade');

function addRow(nome, nota) {
    
    let row = document.createElement("tr");

    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    let img = document.createElement("img");

    if(nota > 6){
        img.src = './aprovado.png';
    } else {
        img.src = './reprovado.png';
    }
    
    c1.innerText = nome;
    c2.innerText = nota;
    c3.appendChild(img);

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);

    tabelaBody.appendChild(row);
    

}

function mediaFinal() {
    
    let row = document.createElement('tr');

}

form.addEventListener('submit', function(e){
    e.preventDefault();

    addRow(inputNomeAtividade.value, inputNotaAtividade.value);

    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
    
})