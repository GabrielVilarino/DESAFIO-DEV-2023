var btn = document.querySelector('#submitbtn')

function addTimes(){
    var textarea = document.querySelector('#clubes')

    var linhas = textarea.value.split("\n")

    var times = [];

for(var i = 0; i < linhas.length; i++){
    var linha = linhas[i];
    var partes = linha.split(";");
    var time = partes[0].trim();
    var estado = partes[1].trim();
    times[i] = [time, estado];
}

console.table(times);

    var divTable = document.querySelector("#tabela")
    var table = document.createElement("table")
    divTable.appendChild(table)
    
    for(var i = 0; i < times.length; i++){
        var linha = table.insertRow(i);
        for(var j = 0; j < 2; j++){
            var coluna = linha.insertCell(j);
                coluna.innerHTML = times[i][j];
        
    }
}
}