window.addEventListener("load",init);

function init(){
    document.getElementById("asunto").addEventListener("change",revisar);
}

function revisar(){
    if(document.getElementById("asunto").value=="curso"){
        document.getElementById("cursoInput").style.display="block";
        document.getElementById("cursoLabel").style.display="block";
    }else{
        document.getElementById("cursoInput").style.display="none";
        document.getElementById("cursoLabel").style.display="none";
    }
}