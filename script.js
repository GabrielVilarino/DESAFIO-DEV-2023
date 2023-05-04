function addTimes(){
    var textarea = document.querySelector('#clubes')

    var linhas = textarea.value.split("\n")

    var times = {};

for(var i = 0; i < linhas.length; i++){
    var linha = linhas[i];
    var partes = linha.split(";");
    var time = partes[0].trim();
    var estado = partes[1].trim();
    times[time] = estado;
}

var selecionados = document.querySelector('#selecionados')
selecionados.innerHTML = JSON.stringify(times)
}