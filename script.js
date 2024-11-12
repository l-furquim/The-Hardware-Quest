var special_words = [
  'CPU', 'ULA', 'Registradores', 'RAM', 'ROM', 'EPROM', 'FLASH', 'Memória de Massa', 
  'DMA', 'CS', 'Adress Bus', 'Data Bus', 'I5', 'I7', 'Dual Core', 'Quad Core'
];

// Listas separadas para cada palavra
var respostasCPU = [];
var respostasULA = [];
var respostasRegistradores = [];
var respostasRAM = [];
var respostasROM = [];
var respostasEPROM = [];
var respostasFLASH = [];
var respostasMemoriaDeMassa = [];
var respostasDMA = [];
var respostasCS = [];
var respostasAdressBus = [];
var respostasDataBus = [];
var respostasI5 = [];
var respostasI7 = [];
var respostasDualCore = [];
var respostasQuadCore = [];

document.addEventListener("keydown", (e) => {
  if(e.key == "Backspace"){
    if(e.target.id.includes("letrasCPU")){
      var idInput = Number(e.target.id.split('letrasCPU')[1]);  
      var idAnterior = idInput - 1;
      var inputAnterior = document.getElementById(`letrasCPU${idAnterior}`);
      console.log(`Id anterior: ${inputAnterior.id}, idAtual : ${idInput}, target: ${e.target}`);

      if(inputAnterior != null){
        e.target.value = "";
        inputAnterior.focus();
        e.preventDefault();
      }else{
        e.target.value = "";
      }
    }

    if(e.target.id.includes("letrasULA")){
      var idInput = Number(e.target.id.split('letrasULA')[1]);  
      var idAnterior = idInput - 1;
      var inputAnterior = document.getElementById(`letrasULA${idAnterior}`);
      console.log(`Id anterior: ${inputAnterior.id}, idAtual : ${idInput}, target: ${e.target}`);

      if(inputAnterior != null){
        e.target.value = "";
        inputAnterior.focus();
        e.preventDefault();
      }else{
        e.target.value = "";
      }
    }

    if(e.target.id.includes("letrasRegistradores")){
      var idInput = Number(e.target.id.split('letrasRegistradores')[1]);  
      var idAnterior = idInput - 1;
      var inputAnterior = document.getElementById(`letrasRegistradores${idAnterior}`);
      console.log(`Id anterior: ${inputAnterior.id}, idAtual : ${idInput}, target: ${e.target}`);

      if(inputAnterior != null){
        e.target.value = "";
        inputAnterior.focus();
        e.preventDefault();
      }else{
        e.target.value = "";
      }
    }

    if(e.target.id.includes("letrasRAM")){
      var idInput = Number(e.target.id.split('letrasRAM')[1]);  
      var idAnterior = idInput - 1;
      var inputAnterior = document.getElementById(`letrasRAM${idAnterior}`);
      console.log(`Id anterior: ${inputAnterior.id}, idAtual : ${idInput}, target: ${e.target}`);

      if(inputAnterior != null){
        e.target.value = "";
        inputAnterior.focus();
        e.preventDefault();
      }else{
        e.target.value = "";
      }
    }

    if(e.target.id.includes("letrasROM")){
      var idInput = Number(e.target.id.split('letrasROM')[1]);  
      var idAnterior = idInput - 1;
      var inputAnterior = document.getElementById(`letrasROM${idAnterior}`);
      console.log(`Id anterior: ${inputAnterior.id}, idAtual : ${idInput}, target: ${e.target}`);

      if(inputAnterior != null){
        e.target.value = "";
        inputAnterior.focus();
        e.preventDefault();
      }else{
        e.target.value = "";
      }
    }

    if(e.target.id.includes("letrasEPROM")){
      var idInput = Number(e.target.id.split('letrasEPROM')[1]);  
      var idAnterior = idInput - 1;
      var inputAnterior = document.getElementById(`letrasEPROM${idAnterior}`);
      console.log(`Id anterior: ${inputAnterior.id}, idAtual : ${idInput}, target: ${e.target}`);

      if(inputAnterior != null){
        e.target.value = "";
        inputAnterior.focus();
        e.preventDefault();
      }else{
        e.target.value = "";
      }
    }

    if(e.target.id.includes("letrasFLASH")){
      var idInput = Number(e.target.id.split('letrasFLASH')[1]);  
      var idAnterior = idInput - 1;
      var inputAnterior = document.getElementById(`letrasFLASH${idAnterior}`);
      console.log(`Id anterior: ${inputAnterior.id}, idAtual : ${idInput}, target: ${e.target}`);

      if(inputAnterior != null){
        e.target.value = "";
        inputAnterior.focus();
        e.preventDefault();
      }else{
        e.target.value = "";
      }
    }

    if(e.target.id.includes("letrasMemoriaDeMassa")){
      var idInput = Number(e.target.id.split('letrasMemoriaDeMassa')[1]);  
      var idAnterior = idInput - 1;
      var inputAnterior = document.getElementById(`letrasMemoriaDeMassa${idAnterior}`);
      console.log(`Id anterior: ${inputAnterior.id}, idAtual : ${idInput}, target: ${e.target}`);

      if(inputAnterior != null){
        e.target.value = "";
        inputAnterior.focus();
        e.preventDefault();
      }else{
        e.target.value = "";
      }
    }
  }
});

// Função para gerenciar as entradas para a palavra "CPU"
function entradaUsuarioCPU(input) {
  var idInput = Number(input.id.split('letrasCPU')[1]);
  var proximoId = idInput + 1;
  var listaRespostas = respostasCPU;
  
  var letra = input.value.toUpperCase();
  listaRespostas[idInput - 1] = letra;

  var proxInput = document.getElementById(`letrasCPU${proximoId}`);
  
  if (proxInput == null) {
    var palavraFinal = listaRespostas.join('');
    var acertou = palavraFinal === special_words[0];
    console.log(acertou + " " + palavraFinal);

    if (acertou) {
      alert(`Você acertou a palavra: ${palavraFinal}!`);
    } else {
      alert(`A palavra não está correta. Tente novamente.`);
    }
  } else {
    input.blur();
    proxInput.focus();
  }
}

// Outras funções de entrada podem seguir o mesmo padrão.



''// Função para gerenciar as entradas para a palavra "CPU"
function entradaUsuarioCPU(input) {
  var idInput = Number(input.id.split('letrasCPU')[1]);
  var proximoId = idInput + 1;
  var listaRespostas = respostasCPU;
  
  var letra = input.value.toUpperCase();
  listaRespostas[idInput - 1] = letra;

  var proxInput = document.getElementById(`letrasCPU${proximoId}`);
  
  if (proxInput == null) {
    var palavraFinal = listaRespostas.join('');
    var acertou = palavraFinal === special_words[0];
    console.log(acertou + " " + palavraFinal);

    if (acertou) {
      alert(`Você acertou a palavra: ${palavraFinal}!`);
    } else {
      alert(`A palavra não está correta. Tente novamente.`);
    }
  } else {
    input.blur();
    proxInput.focus();
  }
}
// Função para gerenciar as entradas para a palavra "ULA"
function entradaUsuarioULA(input) {
  var idInput = Number(input.id.split('letrasULA')[1]);
  var proximoId = idInput + 1;
  var listaRespostas = respostasULA;
  
  var letra = input.value.toUpperCase();
  listaRespostas[idInput - 1] = letra;

  var proxInput = document.getElementById(`letrasULA${proximoId}`);
  
  if (proxInput == null) {
    var palavraFinal = listaRespostas.join('');
    var acertou = palavraFinal === special_words[1];
    console.log(acertou + " " + palavraFinal);

    if (acertou) {
      alert(`Você acertou a palavra: ${palavraFinal}!`);
    } else {
      alert(`A palavra não está correta. Tente novamente.`);
    }
  } else {  
    input.blur();
    proxInput.focus();
  }
}

// Função para gerenciar as entradas para a palavra "Registradores"
function entradaUsuarioRegistradores(input) {
  var idInput = Number(input.id.split('letrasRegistradores')[1]);
  var proximoId = idInput + 1;
  var listaRespostas = respostasRegistradores;
  
  var letra = input.value.toUpperCase();
  listaRespostas[idInput - 1] = letra;

  var proxInput = document.getElementById(`letrasRegistradores${proximoId}`);
  
  if (proxInput == null) {
    var palavraFinal = listaRespostas.join('');
    var acertou = palavraFinal === special_words[2];
    console.log(acertou + " " + palavraFinal);

    if (acertou) {
      alert(`Você acertou a palavra: ${palavraFinal}!`);
    } else {
      alert(`A palavra não está correta. Tente novamente.`);
    }
  } else {
    input.blur();
    proxInput.focus();
  }
}

// Função para gerenciar as entradas para a palavra "RAM"
function entradaUsuarioRAM(input) {
  var idInput = Number(input.id.split('letrasRAM')[1]);
  var proximoId = idInput + 1;
  var listaRespostas = respostasRAM;
  
  var letra = input.value.toUpperCase();
  listaRespostas[idInput - 1] = letra;

  var proxInput = document.getElementById(`letrasRAM${proximoId}`);
  
  if (proxInput == null) {
    var palavraFinal = listaRespostas.join('');
    var acertou = palavraFinal === special_words[3];
    console.log(acertou + " " + palavraFinal);

    if (acertou) {
      alert(`Você acertou a palavra: ${palavraFinal}!`);
    } else {
      alert(`A palavra não está correta. Tente novamente.`);
    }
  } else {
    input.blur();
    proxInput.focus();
  }
}

// Função para gerenciar as entradas para a palavra "ROM"
function entradaUsuarioROM(input) {
  var idInput = Number(input.id.split('letrasROM')[1]);
  var proximoId = idInput + 1;
  var listaRespostas = respostasROM;
  
  var letra = input.value.toUpperCase();
  listaRespostas[idInput - 1] = letra;

  var proxInput = document.getElementById(`letrasROM${proximoId}`);
  
  if (proxInput == null) {
    var palavraFinal = listaRespostas.join('');
    var acertou = palavraFinal === special_words[4];
    console.log(acertou + " " + palavraFinal);

    if (acertou) {
      alert(`Você acertou a palavra: ${palavraFinal}!`);
    } else {
      alert(`A palavra não está correta. Tente novamente.`);
    }
  } else {
    input.blur();
    proxInput.focus();
  }
}

// Função para gerenciar as entradas para a palavra "EPROM"
function entradaUsuarioEPROM(input) {
  var idInput = Number(input.id.split('letrasEPROM')[1]);
  var proximoId = idInput + 1;
  var listaRespostas = respostasEPROM;
  
  var letra = input.value.toUpperCase();
  listaRespostas[idInput - 1] = letra;

  var proxInput = document.getElementById(`letrasEPROM${proximoId}`);
  
  if (proxInput == null) {
    var palavraFinal = listaRespostas.join('');
    var acertou = palavraFinal === special_words[5];
    console.log(acertou + " " + palavraFinal);

    if (acertou) {
      alert(`Você acertou a palavra: ${palavraFinal}!`);
    } else {
      alert(`A palavra não está correta. Tente novamente.`);
    }
  } else {
    input.blur();
    proxInput.focus();
  }
}

// Função para gerenciar as entradas para a palavra "FLASH"
function entradaUsuarioFLASH(input) {
  var idInput = Number(input.id.split('letrasFLASH')[1]);
  var proximoId = idInput + 1;
  var listaRespostas = respostasFLASH;
  
  var letra = input.value.toUpperCase();
  listaRespostas[idInput - 1] = letra;

  var proxInput = document.getElementById(`letrasFLASH${proximoId}`);
  
  if (proxInput == null) {
    var palavraFinal = listaRespostas.join('');
    var acertou = palavraFinal === special_words[6];
    console.log(acertou + " " + palavraFinal);

    if (acertou) {
      alert(`Você acertou a palavra: ${palavraFinal}!`);
    } else {
      alert(`A palavra não está correta. Tente novamente.`);
    }
  } else {
    input.blur();
    proxInput.focus();
  }
}

// Função para gerenciar as entradas para a palavra "Memória de Massa"
function entradaUsuarioMemoriaDeMassa(input) {
  var idInput = Number(input.id.split('letrasMemoriaDeMassa')[1]);
  var proximoId = idInput + 1;
  var listaRespostas = respostasMemoriaDeMassa;
  
  var letra = input.value.toUpperCase();
  listaRespostas[idInput - 1] = letra;

  var proxInput = document.getElementById(`letrasMemoriaDeMassa${proximoId}`);
  
  if (proxInput == null) {
    var palavraFinal = listaRespostas.join('');
    var acertou = palavraFinal === special_words[7];
    console.log(acertou + " " + palavraFinal);

    if (acertou) {
      alert(`Você acertou a palavra: ${palavraFinal}!`);
    } else {
      alert(`A palavra não está correta. Tente novamente.`);
    }
  } else {
    input.blur();
    proxInput.focus();
  }
}

// E assim por diante para as demais palavras...








function start() {
  div_information.innerHTML  = "";
  div_information.style.display = "none";
  var container = div_questions;

  container.style.display = "flex";

  div_lista.style.display = "flex";
}''