/* <div class="divInputs">
    <span class="subTitulos">Escolha um número para deslocamento</span>

    <input type="number" name="numero" id="num" oninput="Num()" min="0" class="inputs">
</div> */


const inputEntrada = document.querySelector('#entrada')
const checkCifraCesar = document.querySelector('#cifraCesar')
const checkBase64 = document.querySelector('#base64')

function escolheCodificacao(){
    if(checkCifraCesar.checked){
        ativaCifradeCesar()
    }else if(checkBase64.checked){
        ativaBase64()
    }
}

escolheCodificacao()

function ativaCifradeCesar(){
    if(checkCifraCesar.checked){
        noneCifraCesar() // retira toda label de dentro da div cifra de cesar
    }else{
        criaBloco()
    }
}

function ativaBase64(){
    if(checkCifraCesar.checked){
        noneCifraCesar()
    }else{
        //executa bloco de códificação ou decodificação de acordo com o selecionado
    }
}


function criaBloco(){
    var container = document.querySelector('#divCifraCesar')
    var label = document.createElement('label')     // 
    label.setAttribute('class', 'labelAcresc')      // 
    var spanSubTit = document.createElement('span')     // 
    spanSubTit.setAttribute('class', 'subTitulos')
    var subTitulo = document.createTextNode('Escolha um número para deslocamento.')
    spanSubTit.appendChild(subTitulo)

    var inputAcrescenta = document.createElement('input')
    inputAcrescenta.setAttribute('class', 'inputAcresc')
    inputAcrescenta.setAttribute('id', 'acrescenta')

    container.appendChild(label)
    label.appendChild(spanSubTit)
    spanSubTit.appendChild(subTitulo)
    label.appendChild(inputAcrescenta)
} // função que cria o bloco de incremento que ativada quando clica em Cifra de Cesar

function noneCifraCesar(){
    var cifraCesarNone = document.querySelector('.labelAcresc')
    cifraCesarNone.setAttribute('class', 'displayNone')
}// função que tira a o bloco