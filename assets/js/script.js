const inputEntrada = document.querySelector('#entrada')
const metodsCodif = document.querySelector('#opcoesMetd')
const selectCC = document.querySelector('#cifraCesar')
const checkedCodificar = document.querySelector('#codificar')
const checkedDecodificar = document.querySelector('#decodificar')

// escolheCodificacao()
// função ativada quando o radio estiver checked ou seja, a o cifra de cesar selecionado pelo usuário


function selectMetodo(){        //esta função realiza a criação de todos os blocos ao selecionar um método
    const ValueSelect = metodsCodif.value

    if(ValueSelect == 'Cifra de César'){
        if($('.labelAcresc').is(':visible')){       // verificando se o elemento está visivel
            // null 

        }else if($('.textSelecione').is(':visible')){
            noneSeletor()

        }else if($('.txtBase64').is(':visible')){
            noneBloco64()
        }
        criaIncrementoCC()
    }else if(ValueSelect == 'base64'){
        if($('.labelAcresc').is(':visible')){
            noneIncrementoCC()
        }else if($('.textSelecione').is(':visible')){
            noneSeletor()
        }else if($('.txtBase64').is(':visible')){
            // null
        }
        criaBloco64()
    }else if(ValueSelect == 'Selecione'){
        if($('.labelAcresc').is(':visible')){
            noneIncrementoCC()
        }else if($('.txtBase64').is(':visible')){
            noneBloco64()
        }else if($('.textSelecione').is(':visible')){
            // null
        }   
    }
}

    // aqui será passada a função que ativa a codificação e decodificação de cifra de cesar


function criaBloco64(){     // esta função cria a o bloco para que o usuário identifique que o base64 está ativo
    var container = document.querySelector('#divCifraCesar')
    var span64 = document.createElement('span')
    var textBase64 = document.createTextNode('Codificação em base64 ativada!')

    container.appendChild(span64)
    span64.appendChild(textBase64)
    span64.setAttribute('class', 'txtBase64')
}


function criaIncrementoCC(){        //esta função cria o bloco de incremento quando o usuário seleciona Cifra de Cesar. Utilizada somente JS
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
    inputAcrescenta.setAttribute('id', 'incremento')
    inputAcrescenta.setAttribute('min', '0')
    inputAcrescenta.setAttribute('placeholder', 'Ex: 1,2,3...')
} 

function noneIncrementoCC(){        //função que tira o bloco de incremento
    var cifraCesarNone = document.querySelector('.labelAcresc')
    cifraCesarNone.setAttribute('class', 'displayNone')
}

function noneBloco64(){     //esta função tira o bloco que identifica que o base64 está ativado
    var bloco64None = document.querySelector('.txtBase64')
    bloco64None.setAttribute('class', 'none64')
}

function noneSeletor(){     //está funcão tira a caixa que diz para o usário escolher um método
    var seletorNone = document.querySelector('.textSelecione')
    seletorNone.setAttribute('class', 'noneSeletor')
}

function recriaTextSelecione(){
    var container = document.querySelector('#divCifraCesar')
    var spanTextSelec = document.createElement('span')
    var textSel = document.createTextNode('Escolha um método acima')
    container.appendChild(spanTextSelec)
    spanTextSelec.appendChild(textSel)
    spanTextSelec.setAttribute('class', 'recriaSelecione')
}

$('form').on('submit', function(event){     // tira o comportamento/recarregamento padrão da página quando o submit é acionado
    event.preventDefault()
})













// const container = document.querySelector('#divCifraCesar')
// const elementP = document.createElement('p')
// container.appendChild(elementP) 
// const textNull = document.createTextNode('Selecione um método acima')
// elementP.appendChild(textNull)
// $('#divCifraCesar').append(elementP)
// elementP.setAttribute('class', 'textNull')