const conteudo = document.querySelector('[data-shrink="yes"]');

const span = document.querySelector('[data-shrink="yes"] span');

span.classList.toggle('aparecer')

setInterval(function(){
    conteudo.classList.toggle('shrink')
}, 5000)

setTimeout(function(){
    setInterval(function(){
    span.classList.toggle('aparecer')
}, 5000)
}, 200)




