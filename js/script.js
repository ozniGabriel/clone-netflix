but1 = document.querySelector('#f1')
but2 = document.querySelector('#f2')
but3 = document.querySelector('#f3')
but4 = document.querySelector('#f4')
but5 = document.querySelector('#f5')

botoes = [but1, but2, but3, but4, but5]

botoes.forEach(element => {
    element.addEventListener('click', ()=>{
        info = document.querySelector(`#in${element.id}`)
        icon = document.querySelector(`#icon${element.id}`)
        showInfo(info, icon)
    })
})

function showInfo(informacao, icone){
    if (informacao.style.display != "block"){
        informacao.style.display = "block"
        icone.setAttribute('class', 'fa fa-remove')
    } else {
        informacao.style.display = "none"
        icone.setAttribute('class', 'fa fa-plus')
    }
}
