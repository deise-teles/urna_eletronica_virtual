//vetor de candidatos
let candidatos = [
    {
      numero: 0,
      nome: "Nulo",
      partido: "--",
      nVotos: 0,
      imagem: "/img/branco.png"
    },
    {
      nome: "Branco",
      partido: "--",
      nVotos: 0,
      imagem: "/img/branco.png"
    },
    {
      numero: 52,
      nome: "Anitta",
      partido: "PBT",
      nVotos: 0,
      imagem: '/img/anitta.jpeg'
    },
    {
      numero: 36,
      nome: "Rodrigo Hilbert",
      partido: "PCP",
      nVotos: 0,
      imagem: '/img/rodrigo.jpeg'
    },
    {
      numero: 84,
      nome: "Thais Araújo",
      partido: "PCPP",
      nVotos: 0,
      imagem: '/img/thais.jpeg'
    },
    {
      numero: 79,
      nome: "Djavan",
      partido: "PMPB",
      nVotos: 0,
      imagem: '/img/djavan.jpeg'
    },
    {
      numero: 11,
      nome: "Neymar",
      partido: "PMC",
      nVotos: 0,
      imagem: '/img/neymar.jpeg'
    }  
   ]
   
   //Eleitores
   let eleitores = []
   function checaEleitores(titulo, eleitores) {
     let n = -1
     for(let i = 0; i < eleitores.length; i++){
       if(eleitores[i].titulo == titulo){
         n = i
       }
     }
     if(n > -1){
     return eleitores[n]
     } else{
       return null
     }
   }
   function getEleitores(e) {
     //e.preventDefault()
     let titulo = document.getElementById("titulo").value
     let nome = document.getElementById("nome").value
     let eleitor = checaEleitores(titulo, eleitores)
     if (eleitor == null){
       let eleitor = {nome: nome, titulo: titulo}
       eleitores.push(eleitor)
       mostraDisplayVotar()
     } else{
       alert("O eleitor com esse titulo já votou!")
     }
   }
   
   //Chamar o candidato pelo numero
   function getCandidatos(numero, candidatos){
     let n = 0
     for ( let i = 0; i < candidatos.length; i++) {
      if(candidatos[i].numero == numero) {
        n = i;
      }//if
     }//for
     return candidatos[n];
   }//function
   let botoesNumericos = document.querySelectorAll(".num")
    for (let i = 0; i < botoesNumericos.length; i++) {
      botoesNumericos[i].onclick = mostraNumCandidato
    }//for
   
   function mostraNumCandidato(e) {
    e.preventDefault()
     let teclado = e.target.innerHTML
     let dig1 = document.getElementById("dig1")
     let dig2 = document.getElementById("dig2")
     let num
     if (dig1.innerHTML == "" || dig2.innerHTML != "") {
      dig1.innerHTML = teclado
      dig2.innerHTML= ""
     } else {
       dig2.innerHTML = teclado
       numero = parseInt(dig1.innerHTML + dig2.innerHTML)
       let candidato = getCandidatos(numero, candidatos)
       let display = document.getElementById("candidatoDigitado") 
       display.innerHTML = "&nbsp&nbspNome: " + candidato.nome + "<br>&nbsp&nbspPartido: " + candidato.partido + "<br>&nbsp&nbspNumero: " + candidato.numero + "<br>"
       let imagem = document.getElementById("imagem")
       imagem.style.backgroundImage = 'url(' + candidato.imagem + ')'
     }//else
   }//function    
   
   //Branco
   let bBranco = document.getElementById("bbranco")
     bBranco.onclick = mostraBranco
   function mostraBranco() {
     let disp = document.getElementById("candidatoDigitado") 
       disp = "&nbsp&nbspNome: " + candidatos[1].nome + "<br>&nbsp&nbspPartido: " + candidatos[1].partido + "<br>&nbsp&nbspNumero: " + candidatos[1].numero + "<br>"
       let imagem = document.getElementById("img")
       imagem.style.backgroundImage = 'url(' + candidatos[1].imagem + ')'
   return disp
   }
   
   //quantidade de votos
   function computVotos(numero){
     let votoCandi = getCandidatos(numero, candidatos)
     votoCandi.nVotos++
   }
   
   // Mostra a div displayOp (menu)
   function mostraDisplayOp() {
     let displayInicialOp = document.getElementById("displayOp")
      displayOp.style.display = "flex"
    let displayDadosEleitor = document.getElementById("displayDados")
      displayDados.style.display = "none"
    let displayResultados = document.getElementById("displayResult")
      displayResult.style.display = "none"
    let displayVotacao = document.getElementById("displayVotar")
      displayVotar.style.display = "none"
    let displayFim = document.getElementById("displayFim")
     displayFim.style.display = "none"
   }//function
   
   //Mostrar a div displayDados (cadastro do eleitor)
   function mostraDisplayDados() {
    let displayInicialOp = document.getElementById("displayOp")
      displayOp.style.display = "none"
    let displayDadosEleitor = document.getElementById("displayDados")
      displayDados.style.display = "flex"
    let displayResultados = document.getElementById("displayResult")
      displayResult.style.display = "none"
    let displayVotacao = document.getElementById("displayVotar")
      displayVotar.style.display = "none"
    let displayFim = document.getElementById("displayFim")
      displayFim.style.display = "none"
   }//function
   
   //Mostrar a div displayResult (resultado das eleições)
   function mostraDisplayResult() {
    let displayInicialOp = document.getElementById("displayOp")
      displayOp.style.display = "none"
    let displayDadosEleitor = document.getElementById("displayDados")
      displayDados.style.display = "none"
    let displayResultados = document.getElementById("displayResult")
      displayResult.style.display = "flex"
    let displayVotacao = document.getElementById("displayVotar")
      displayVotar.style.display = "none"
    let displayFim = document.getElementById("displayFim")
      displayFim.style.display = "none"
   }//function
   
   //Mostrar a div displayVotar (Escolher um Candidato)
   function mostraDisplayVotar() {
    let displayInicialOp = document.getElementById("displayOp")
      displayOp.style.display = "none"
    let displayDadosEleitor = document.getElementById("displayDados")
      displayDados.style.display = "none"
    let displayResultados = document.getElementById("displayResult")
      displayResult.style.display = "none"
    let displayVotacao = document.getElementById("displayVotar")
      displayVotar.style.display = "flex"
    let displayFim = document.getElementById("displayFim")
      displayFim.style.display = "none"
   }//function
   
   //FIM
   function mostraDisplayFim() {
    let displayInicialOp = document.getElementById("displayOp")
      displayOp.style.display = "none"
    let displayDadosEleitor = document.getElementById("displayDados")
      displayDados.style.display = "none"
    let displayResultados = document.getElementById("displayResult")
      displayResult.style.display = "none"
    let displayVotacao = document.getElementById("displayVotar")
      displayVotar.style.display = "none"
    let displayFim = document.getElementById("displayFim")
      displayFim.style.display = "flex"
   }//function
   
   //  Botão selecionado for Votar, ir para a pag Votar
    let bVotar = document.getElementById("opVotar")
     bVotar.onclick = botao_votar
     function botao_votar(e){
      let b_votar = parseInt(e.target.innerHTML)
      mostraDisplayDados()
     }
   
   // Botão selecionado for Resultado, ir para a pag Resultado
    let bResultado = document.getElementById("opResultado")
     bResultado.onclick = botao_result
     function botao_result(e){
      let b_resultados = parseInt(e.target.innerHTML)
      let result = document.getElementById("resultados")
      result.innerHTML = ""
      for (let i = 0; i < candidatos.length; i++) {
         result.innerHTML += '<div style="background-image: url(\'' + candidatos[i].imagem  + '\');width: 150px; height: 150px; background-size: cover"></div>' + "&nbsp&nbspNome: " + candidatos[i].nome + "<br>&nbsp&nbsp&nbspNúmero de votos: " + candidatos[i].nVotos + "<br><br>"
       }
      mostraDisplayResult()
     }
   
   // Quando clicar em MENU ir para o menu (vator/resultado)
    let proxPag2 = document.getElementById("passaPg2")
     proxPag2.onclick = botaoProximaPagina
     function botaoProximaPagina(e){
      let bProxPag = parseInt(e.target.innerHTML)
      mostraDisplayOp()
     }
   
   // Pag Cadastro do Eleitor para a pag Votar + chama a função getEleitores
    let proxPag = document.getElementById("passaPg")
     proxPag.onclick = getEleitores
   
   // Confirma
    let bConfirmar = document.getElementById("bconfirma")
     bConfirmar.onclick = botao_confirma
     function botao_confirma(e){
       // Computacao do voto
       let dig1 = document.getElementById("dig1")
       let dig2 = document.getElementById("dig2")
       let numero = parseInt(dig1.innerHTML + dig2.innerHTML)
       computVotos(numero)
       // Ir para menu
       mostraDisplayFim()
       
     }
   // Corrige 
    let bCorrige = document.getElementById("bcorrige")
     bCorrige.onclick = botao_Corrige
    function botao_Corrige(e){
       e.preventDefault()
       mostraDisplayVotar()
    }
   