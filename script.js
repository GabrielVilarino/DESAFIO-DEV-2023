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
}