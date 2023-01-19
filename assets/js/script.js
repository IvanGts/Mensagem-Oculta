const inputEntrada = document.querySelector('#entrada')
const checkCifraCesar = document.querySelector('#cifraCesar')
const checkBase64 = document.querySelector('#base64')

// escolheCodificacao()
// função ativada quando o radio estiver checked ou seja, a o cifra de cesar selecionado pelo usuário
function checkCC(){ 
    if(checkCifraCesar.checked){
        if($(".labelAcresc").is(":visible")){ // verificando se o elemento está visivel
            noneCifraCesar() // retira toda label de dentro da div cifra de cesar
        }else{
            criaBloco()
        }
    }
    // aqui será passada a função que ativa a codificação e decodificação de cifra de cesar
}


function checkB64(){
    if($(".labelAcresc").is(":visible")){ // verificando se o elemento está visivel
        noneCifraCesar() // retira toda label de dentro da div cifra de cesar
    }
    ativaBase64()
}

function ativaBase64(){
    console.log('funfando');
}

function criaBloco(){
    var container = document.querySelector('#divCifraCesar')
    var label = document.createElement('label')
    var spanSubTit = document.createElement('span') 
    var subTitulo = document.createTextNode('Escolha um número para deslocamento.')
    var inputAcrescenta = document.createElement('input')

    container.appendChild(label)
    label.appendChild(inputAcrescenta)
    label.appendChild(spanSubTit)
    spanSubTit.appendChild(subTitulo)
    label.setAttribute('class', 'labelAcresc')       
    spanSubTit.setAttribute('class', 'subTitulos')
    inputAcrescenta.setAttribute('class', 'inputAcresc')
    inputAcrescenta.setAttribute('type', 'number')
    inputAcrescenta.setAttribute('id', 'acrescenta')
    inputAcrescenta.setAttribute('min', '0')
    inputAcrescenta.setAttribute('placeholder', 'Ex: 1,2,3...')
} // função que cria o bloco de incremento que ativada quando clica em Cifra de Cesar


function noneCifraCesar(){
    var cifraCesarNone = document.querySelector('.labelAcresc')
    cifraCesarNone.setAttribute('class', 'displayNone')
}// função que tira a o bloco