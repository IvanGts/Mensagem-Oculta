$('#submit').on('click', () => {        //fução que verifica qual foi selecionado para execução e impressão a codificação ou decodifiiação
    let entrada = $('#entrada').val()
    let saida = $('#saida')
    let deslocamento = Number($('#incremento').val())
    let opcoesMetodos = $('#opcoesMetd option:selected').val()
    
    let radioOperacao = $('input[name=radio]:checked').val()

    if(radioOperacao === 'codificar'){
        if(opcoesMetodos == 'cifraCesar'){
            saida.text(codificaCifraCesar(entrada, deslocamento))
        }else if(opcoesMetodos === 'base64'){
        
            saida.text(codificaBase64(entrada))
        
        }
    }else{
        if(opcoesMetodos == 'cifraCesar'){
            saida.text(decodificaCifraCesar(entrada, deslocamento))
        }else if(opcoesMetodos === 'base64'){
            saida.text(decodificaBase64(entrada))
        }
    }
})

$('#opcoesMetd').on('change', ()=> {        //função que cria a caixa de incremento e retira quando não selecionado para cifra de cesar
    let opcoesMetodos = $('#opcoesMetd option:selected').val()
    if(opcoesMetodos == 'cifraCesar'){
        $('#divCifraCesar').append('<input type="number" id="incremento" min=1 max=25>')
        $('.textSelecione').hide()
    }else{
        $('#incremento').remove()
        $('.textSelecione').show()   
    }
})


const codificaBase64 = (frase) => btoa(frase)       //função que codifica em bas64

const decodificaBase64 = (frase) => atob(frase)     //função que decodifica em bas64

const codificaCifraCesar = (frase, deslocamento) => {       //função que codifica em cifra de cesar
    let fraseResult = ''
    for(let i =0; i < frase.length; i++){
        let ascii = frase.charCodeAt(i)     //pega o alfabeto na tabela ascii de acordo com o valor do i
        if(ascii >= 65 && ascii <= 90){
            ascii += deslocamento 

            if(ascii > 90){
                ascii = ascii - 90 + 64
            }
        }
        if(ascii >= 97 && ascii <= 122){
            ascii += deslocamento
            if(ascii > 122){
                ascii = ascii - 122 + 96
            }
        }
        fraseResult += String.fromCharCode(ascii)
    }
    return fraseResult
}

const decodificaCifraCesar = (frase, deslocamento) => {     //função que decodifica em cifra de cesar
    let fraseResult = ''
    for(let i =0; i < frase.length; i++){
        let ascii = frase.charCodeAt(i)
        if(ascii >= 65 && ascii <= 90){
            ascii -= deslocamento

            if(ascii < 65){
                ascii = 91 - (65 - ascii)
            }
        }
        if(ascii >= 97 && ascii <= 122){
            ascii -= deslocamento
            if(ascii > 122){
                ascii = 123 - (97 -ascii)
            }
        }
        fraseResult += String.fromCharCode(ascii)
    }
    return fraseResult
}

$('form').on('submit', function(event){     // tira o comportamento/recarregamento padrão da página quando o submit é acionado
    event.preventDefault()
})

































// if(letra === ' '){
//     fraseComp = `${fraseComp} ` //criptgrafa vazio 
// }else{
//     for(var[key, value] of alfabeto){
//         if(value === _.toLower(letra)){
        
//             if(deslocamento + parametroAlfa > 26){     //se passa de 26, para escolher não criar mai de um alfabeto é realizada basicamente a automação da criação de um novo alfabeto com base no inicial
//                 let controlWhile = true 
//                 let cont = 1
//                 while(controlWhile){

//                     var alfabetoAcima26 = new Map()     //cria um novo alfabeto, assim a cada contagem 
//                     for(var[key2, value] of alfabeto){
//                         key2 = key2 + cont * 26     // 26 é o número de letras no alfabeto, caso na contagem passe do parametro 26(z) do alfabeto
//                         alfabetoAcima26.set(key2, value)
//                     }
//                     if(alfabetoAcima26.get(deslocamento + key) != undefined){        //verificando se o deslocamento passado existe dentro do alfabeto
//                         fraseComp = `${fraseComp}${alfabeto.get(deslocamento + key)}`
//                         controlWhile = false
//                     }
//                     contador += 1
//                 }
//             }else{
//                 fraseComp = `${fraseComp}${alfabeto.get(deslocamento + key)}`
//             }
//         }
//     }
// }


// function cifraCesar() {   
//     let msg = document.querySelector("#mensagem").value;   
//     let chave = parseInt(document.querySelector("#rangenumber").value);   
//     let saida = '';    
// if (codificar.checked) {     
//     for (let i = 0; i < msg.length; i++){       
//     if (msg[i] === msg[i].toUpperCase()) {         
//         saida += String.fromCharCode((msg.charCodeAt(i) + chave - 65) % 26 + 65);        
//     } 
//     else {         
//         saida += String.fromCharCode((msg.charCodeAt(i) + chave - 97) % 26 + 97);      
//      }     
//     }     
//     return saida;    
// } else if (decodificar.checked) {     
//     for (let i = 0; i < msg.length; i++) {       
//         if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) { 
//             saida += String.fromCharCode((msg.charCodeAt(i) - 97 -  chave + 26) % 26 + 97);      
//          } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {        
//             saida += String.fromCharCode((msg.charCodeAt(i) - 65 - chave + 26) % 26 + 65);       
//         } else {         
//     saida += String.fromCharCode(msg.charCodeAt(i));       
//         }
//     }     
// return saida;   
// } }