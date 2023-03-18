function calcular(){
    
    var primeirovalor = document.getElementById("1valor").value
    var segundovalor = document.getElementById("2valor").value
    var terceirovalor = document.getElementById("3valor").value
    var quartovalor = document.getElementById("4valor").value
    var quintovalor = document.getElementById("5valor").value
    var resultado
        
    resultado =  ((terceirovalor * quartovalor ) * quintovalor) / (primeirovalor * segundovalor );
        
    document.getElementById('resultado').value = resultado
    alert(resultado)
}

