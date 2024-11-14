var special_words = [
  'CPU', 'ULA', 'REGISTRADORES', 'RAM', 'ROM', 'EPROM', 'FLASH', 'MEMORIA DE MASSA', 
  'DMA', 'CS', 'ADRESS BUS', 'DATA BUS', 'I5', 'I7', 'DUAL CORE', 'QUAD CORE'
];

var respostas = {}; 

var acertos = 0;

// Inicializa a lista de respostas para cada palavra
for (var index = 0; index < special_words.length; index++) {
  respostas[special_words[index]] = [];
}

document.addEventListener("keydown", function(e) {
  if (e.key == "Backspace") {
    var input = e.target;
    var palavra = identificarPalavra(input.id);

    if (palavra == null) {
      return;
    }

    // Remove os espaços manualmente
    var palavraSemEspacos = removerEspacos(palavra);
    var idInput = Number(input.id.replace(`letras${palavraSemEspacos}`, ''));
    var idAnterior = idInput - 1;
    var inputAnterior = document.getElementById(`letras${palavraSemEspacos}${idAnterior}`);

    if (inputAnterior != null) {
      input.value = "";
      inputAnterior.focus();
      e.preventDefault();
    } else {
      input.value = "";
    }
  }
});

function entradaUsuario(input) {
  var palavra = identificarPalavra(input.id);
  if (palavra == null) {
    return;
  }

  // Remove os espaços manualmente
  var palavraSemEspacos = removerEspacos(palavra);
  var idInput = Number(input.id.replace(`letras${palavraSemEspacos}`, ''));
  var proximoId = idInput + 1;
  var listaRespostas = respostas[palavra];

  var letra = input.value.toUpperCase();
  listaRespostas[idInput - 1] = letra;

  console.log(letra);

  var proxInput = document.getElementById(`letras${palavraSemEspacos}${proximoId}`);
  
  if (proxInput == null) {
    var palavraFinal = listaRespostas.join('');
    var acertou = palavraFinal == palavra;
    console.log(acertou + " " + palavraFinal);

    if (acertou) {
      console.log("acertou");

      var palavraSemEspacos = '';
      for (var index = 0; index < palavra.length; index++) {
        if(palavra[index] != ' ') { // Verifica se o caractere não é um espaço
          palavraSemEspacos += palavra[index]; // Adiciona o caractere à nova string
        }
      }
      console.log(palavraSemEspacos)
      var paragrafo = document.getElementById(`p${palavraSemEspacos}`);
      if (paragrafo) {
        paragrafo.classList.add("acertou"); // Marca o parágrafo como correto
      }
      acertos++;

      if(acertos == 16){
        divMensagem.innerHTML = "PARABENS VOCE CONCLUIU A CRUZADINHA!"
      }

      console.log(palavraFinal);
    } else {
      console.log("errou");
      console.log(palavraFinal);
    }
  } else {
    input.blur();
    proxInput.focus();
  }
}

function identificarPalavra(id) {
  for (var index = 0; index < special_words.length; index++) {
    var palavra = special_words[index];

    // Remove os espaços manualmente
    var palavraSemEspacos = removerEspacos(palavra);

    if (id.includes(`letras${palavraSemEspacos}`)) {
      return palavra;
    }
  }
  return null;
}

// Função para remover espaços manualmente
function removerEspacos(palavra) {
  var palavraSemEspacos = '';
  for (var i = 0; i < palavra.length; i++) {
    if (palavra[i] != ' ') {
      palavraSemEspacos += palavra[i];
    }
  }
  return palavraSemEspacos;
}

function start() {
  div_information.innerHTML  = "";
  div_information.style.display = "none";
  var container = div_questions;

  container.style.display = "flex";

  div_lista.style.display = "flex";
}
