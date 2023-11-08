
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

document.querySelector('.tecla_pom').onclick = tocaSom;

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;

for(let contador = 0;contador < listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    
   
}