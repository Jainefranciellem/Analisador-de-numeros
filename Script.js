let num = document.getElementById('txtnum')
let lista = document.getElementById('valorN')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else{
        return false
    }
}
function inLista (n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function analisador (){
    if(isNumero(num.value) && !inLista (num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione antes de finalizar!')
    } else {
        let tot = valores.length
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
    }
}