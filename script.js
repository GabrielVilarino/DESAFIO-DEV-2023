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
//Rodada 1
    var divTable2 = document.querySelector("#tabela2")
    var table2 = document.createElement("table")
    divTable2.appendChild(table2)

    var linha2 = table2.insertRow(0);
    var coluna2 = linha2.insertCell(0)
    coluna2.innerHTML = times[0][0]
    coluna2 = linha2.insertCell(1)
    coluna2.innerHTML = times[2][0]
    coluna2 = linha2.insertCell(2)
    coluna2.innerHTML = times[0][1]

    linha2 = table2.insertRow(1);
    coluna2 = linha2.insertCell(0)
    coluna2.innerHTML = times[1][0]
    coluna2 = linha2.insertCell(1)
    coluna2.innerHTML = times[3][0]
    coluna2 = linha2.insertCell(2)
    coluna2.innerHTML = times[1][1]

    linha2 = table2.insertRow(2);
    coluna2 = linha2.insertCell(0)
    coluna2.innerHTML = times[4][0]
    coluna2 = linha2.insertCell(1)
    coluna2.innerHTML = times[5][0]
    coluna2 = linha2.insertCell(2)
    coluna2.innerHTML = times[4][1]

    if(times[0][1] == times[1][1]){
        var p1 = document.querySelector("#p1")
        var p2 = document.querySelector("#p2")
        p1.innerHTML = "(RODADA DUPLA)"
        p2.innerHTML = "(RODADA DUPLA)"
    }else if(times[0][1] == times[4][1]){
        var p1 = document.querySelector("#p1")
        var p3 = document.querySelector("#p3")
        p1.innerHTML = "(RODADA DUPLA)"
        p3.innerHTML = "(RODADA DUPLA)"
    }

    if(times[1][1] == times[4][1]){
        var p2 = document.querySelector("#p2")
        var p3 = document.querySelector("#p3")
        p2.innerHTML = "(RODADA DUPLA)"
        p3.innerHTML = "(RODADA DUPLA)"
    }

    //Rodada 2
    var divTable3 = document.querySelector("#tabela3")
    var table3 = document.createElement("table")
    divTable3.appendChild(table3)

    var linha3 = table3.insertRow(0);
    var coluna3 = linha3.insertCell(0)
    coluna3.innerHTML = times[0][0]
    coluna3 = linha3.insertCell(1)
    coluna3.innerHTML = times[3][0]
    coluna3 = linha3.insertCell(2)
    coluna3.innerHTML = times[0][1]

    linha3 = table3.insertRow(1);
    coluna3 = linha3.insertCell(0)
    coluna3.innerHTML = times[2][0]
    coluna3 = linha3.insertCell(1)
    coluna3.innerHTML = times[5][0]
    coluna3 = linha3.insertCell(2)
    coluna3.innerHTML = times[2][1]

    linha3 = table3.insertRow(2);
    coluna3 = linha3.insertCell(0)
    coluna3.innerHTML = times[1][0]
    coluna3 = linha3.insertCell(1)
    coluna3.innerHTML = times[4][0]
    coluna3 = linha3.insertCell(2)
    coluna3.innerHTML = times[1][1]

    if(times[0][1] == times[2][1]){
        var p4 = document.querySelector("#p4")
        var p5 = document.querySelector("#p5")
        p4.innerHTML = "(RODADA DUPLA)"
        p5.innerHTML = "(RODADA DUPLA)"
    }else if(times[0][1] == times[1][1]){
        var p4 = document.querySelector("#p4")
        var p6 = document.querySelector("#p6")
        p4.innerHTML = "(RODADA DUPLA)"
        p6.innerHTML = "(RODADA DUPLA)"
    }

    if(times[2][1] == times[1][1]){
        var p5 = document.querySelector("#p4")
        var p6 = document.querySelector("#p6")
        p4.innerHTML = "(RODADA DUPLA)"
        p6.innerHTML = "(RODADA DUPLA)"
    }

    //Returno Rodada 1
    var divTable4 = document.querySelector("#tabela4")
    var table4 = document.createElement("table")
    divTable4.appendChild(table4)

    var linha4 = table4.insertRow(0);
    var coluna4 = linha4.insertCell(0)
    coluna4.innerHTML = times[2][0]
    coluna4 = linha4.insertCell(1)
    coluna4.innerHTML = times[0][0]
    coluna4 = linha4.insertCell(2)
    coluna4.innerHTML = times[2][1]

    linha4 = table4.insertRow(1);
    coluna4 = linha4.insertCell(0)
    coluna4.innerHTML = times[3][0]
    coluna4 = linha4.insertCell(1)
    coluna4.innerHTML = times[1][0]
    coluna4 = linha4.insertCell(2)
    coluna4.innerHTML = times[3][1]

    linha4 = table4.insertRow(2);
    coluna4 = linha4.insertCell(0)
    coluna4.innerHTML = times[5][0]
    coluna4 = linha4.insertCell(1)
    coluna4.innerHTML = times[4][0]
    coluna4 = linha4.insertCell(2)
    coluna4.innerHTML = times[5][1]

    if(times[2][1] == times[3][1]){
        var p7 = document.querySelector("#p7")
        var p8 = document.querySelector("#p8")
        p7.innerHTML = "(RODADA DUPLA)"
        p8.innerHTML = "(RODADA DUPLA)"
    }else if(times[2][1] == times[5][1]){
        var p7 = document.querySelector("#p7")
        var p9 = document.querySelector("#p9")
        p7.innerHTML = "(RODADA DUPLA)"
        p9.innerHTML = "(RODADA DUPLA)"
    }

    if(times[2][1] == times[5][1]){
        var p8 = document.querySelector("#p8")
        var p9 = document.querySelector("#p9")
        p8.innerHTML = "(RODADA DUPLA)"
        p9.innerHTML = "(RODADA DUPLA)"
    }

     //Returno Rodada 2
     var divTable5 = document.querySelector("#tabela5")
     var table5 = document.createElement("table")
     divTable5.appendChild(table5)
 
     var linha5 = table5.insertRow(0);
     var coluna5 = linha5.insertCell(0)
     coluna5.innerHTML = times[3][0]
     coluna5 = linha5.insertCell(1)
     coluna5.innerHTML = times[0][0]
     coluna5 = linha5.insertCell(2)
     coluna5.innerHTML = times[3][1]
 
     linha5 = table5.insertRow(1);
     coluna5 = linha5.insertCell(0)
     coluna5.innerHTML = times[5][0]
     coluna5 = linha5.insertCell(1)
     coluna5.innerHTML = times[2][0]
     coluna5 = linha5.insertCell(2)
     coluna5.innerHTML = times[5][1]
 
     linha5 = table5.insertRow(2);
     coluna5 = linha5.insertCell(0)
     coluna5.innerHTML = times[4][0]
     coluna5 = linha5.insertCell(1)
     coluna5.innerHTML = times[1][0]
     coluna5 = linha5.insertCell(2)
     coluna5.innerHTML = times[4][1]

     if(times[3][1] == times[5][1]){
        var p10 = document.querySelector("#p10")
        var p11 = document.querySelector("#p11")
        p10.innerHTML = "(RODADA DUPLA)"
        p11.innerHTML = "(RODADA DUPLA)"
    }else if(times[3][1] == times[4][1]){
        var p10 = document.querySelector("#p10")
        var p12 = document.querySelector("#p12")
        p10.innerHTML = "(RODADA DUPLA)"
        p12.innerHTML = "(RODADA DUPLA)"
    }

    if(times[5][1] == times[4][1]){
        var p11 = document.querySelector("#p11")
        var p12 = document.querySelector("#p12")
        p11.innerHTML = "(RODADA DUPLA)"
        p12.innerHTML = "(RODADA DUPLA)"
    }

    if(times[2][1] == times[5][1]){
        var p8 = document.querySelector("#p8")
        var p9 = document.querySelector("#p9")
        p8.innerHTML = "(RODADA DUPLA)"
        p9.innerHTML = "(RODADA DUPLA)"
    }

    //Gerando Resultados

    //Turno e Returno Rodada 1
    var resultados = []
    var pontos = []
    for(var i = 0; i < times.length; i++){
        resultados[i] = Math.floor(Math.random()*10)
    }
    for(var i = 0; i < times.length; i++){
        resultados[i] += Math.floor(Math.random()*10)
    }
    for(var i = 0; i < times.length; i+=2){
        if(resultados[i] < resultados[i+1]){
            pontos[i+1] = 3
            pontos[i] = 0
        }else if(resultados[i] > resultados[i+1]){
            pontos[i] = 3
            pontos[i + 1] = 0
        }else{
            pontos[i] = 1
            pontos[i+1] = 1
        }
    }

    var p13 = document.querySelector("#p13")
    p13.innerHTML = times[0][0] + ": " + pontos[0] + " pontos"

    var p14 = document.querySelector("#p14")
    p14.innerHTML = times[1][0] + ": " + pontos[1] + " pontos"

    var p15 = document.querySelector("#p15")
    p15.innerHTML = times[2][0] + ": " + pontos[2] + " pontos"

    var p16 = document.querySelector("#p16")
    p16.innerHTML = times[3][0] + ": " + pontos[3] + " pontos"

    var p17 = document.querySelector("#p17")
    p17.innerHTML = times[4][0] + ": " + pontos[4] + " pontos"

    var p18 = document.querySelector("#p18")
    p18.innerHTML = times[5][0] + ": " + pontos[5] + " pontos"

    //Turno e Returno Rodada 2
    for(var i = 0; i < times.length; i++){
        resultados[i] = Math.floor(Math.random()*10)
    }
    for(var i = 0; i < times.length; i++){
        resultados[i] += Math.floor(Math.random()*10)
    }
    for(var i = 0; i < times.length; i+=2){
        if(resultados[i] < resultados[i+1]){
            pontos[i+1] += 3
            pontos[i] += 0
        }else if(resultados[i] > resultados[i+1]){
            pontos[i] += 3
            pontos[i + 1] += 0
        }else{
            pontos[i] += 1
            pontos[i+1] += 1
        }
    }

    var p19 = document.querySelector("#p19")
    p19.innerHTML = times[0][0] + ": " + pontos[0] + " pontos"

    var p20 = document.querySelector("#p20")
    p20.innerHTML = times[1][0] + ": " + pontos[1] + " pontos"

    var p21 = document.querySelector("#p21")
    p21.innerHTML = times[2][0] + ": " + pontos[2] + " pontos"

    var p22 = document.querySelector("#p22")
    p22.innerHTML = times[3][0] + ": " + pontos[3] + " pontos"

    var p23 = document.querySelector("#p23")
    p23.innerHTML = times[4][0] + ": " + pontos[4] + " pontos"

    var p24 = document.querySelector("#p24")
    p24.innerHTML = times[5][0] + ": " + pontos[5] + " pontos"


    //Resultado Final
    var p25 = document.querySelector("#p25")
    p25.innerHTML = times[0][0] + ": " + pontos[0] + " pontos"

    var p26 = document.querySelector("#p26")
    p26.innerHTML = times[1][0] + ": " + pontos[1] + " pontos"

    var p27 = document.querySelector("#p27")
    p27.innerHTML = times[2][0] + ": " + pontos[2] + " pontos"

    var p28 = document.querySelector("#p28")
    p28.innerHTML = times[3][0] + ": " + pontos[3] + " pontos"

    var p29 = document.querySelector("#p29")
    p29.innerHTML = times[4][0] + ": " + pontos[4] + " pontos"

    var p30 = document.querySelector("#p30")
    p30.innerHTML = times[5][0] + ": " + pontos[5] + " pontos"

}