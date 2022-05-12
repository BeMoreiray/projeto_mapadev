


/*
quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar a próxima imagem

  a imagem atual começa em 0, ou seja, denominada como a primeira imagem já que a contagem começa em zero. Quando for clicado no avançar eu preciso adicionar mais 1 ao contador de imagem. 
  Assim podemos saber que agora vai ser mostrada a segunda imagem (indice 1)
  
  esconder todas as imagens 
           pegar todas as imagens usando o DOM e remover a classe mostrar


    mostrar a próxima imagem
       pegar todas as imagens, descobrir qual é o projeto, e colocar a classe mostrar nela. 


  */

const imagensPainel = document.querySelectorAll('.iamgem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;


function esconderImagens(){
imagensPainel.forEach(imagem =>{
    imagem.classList.remove('mostrar')
});
}

function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}


//click para função de clicar na seta e function para função que vamos ordenar, para oq vai acontecer depois que a gnt cliacar. ]
/*
quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar a próxima imagem*/


setaAvancar.addEventListener('click', function() { 

    //testa se o contador da imagemAtual é igual ao total de imagens.
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens) {
       return;
    }
    /*a imagem atual começa em 0, ou seja, denominada como a primeira imagem já que a contagem começa em zero. Quando for clicado no avançar eu preciso adicionar mais 1 ao contador de imagem. 
    Assim podemos saber que agora vai ser mostrada a segunda imagem (indice 1)*/
    
    imagemAtual++;

   /* esconder todas as imagens 
           pegar todas as imagens usando o DOM e remover a classe mostrar*/
    
    esconderImagens();

    /*mostrar a próxima imagem
    pegar todas as imagens, descobrir qual é o projeto, e colocar a classe mostrar nela. */
   
    mostrarImagem();


});

setaVoltar.addEventListener('click', function() {
    
    if(imagemAtual === 0){
        
        return;
    }
      

    imagemAtual--;

    /* esconder todas as imagens 
           pegar todas as imagens usando o DOM e remover a classe mostrar*/
         esconderImagens();

         /*mostrar a imagem anterior
    pegar todas as imagens, descobrir qual é o projeto, e colocar a classe mostrar nela. */
   
         mostrarImagem();

})