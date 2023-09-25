function tocaSom (seletorElemento) {

  const elemento = document.querySelector(seletorElemento);

  if(elemento && elemento.localName === 'audio') {
elemento.play();
  }
 else{
    //alert('Elemento ou seletor não encontrado');
    console.log('Elemento ou seletor não encontrado!')
 }

}

  const listaDeTeclas = document.querySelectorAll('.tecla');

  //para
  for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = '#som_${instrumento}'; //template string
 
   tecla.onclick = function () {
        tocaSom(idAudio);
    }

   tecla.onkeydown = function (){
    tecla.classList.add('ativa');
   }

   tecla.onkeyup = function () {
    tecla.className.remove('ativa');
   }
  }
