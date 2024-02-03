

let feat = document.querySelectorAll('.feature')
let listas = document.querySelectorAll('.listas')



listas.forEach((i,j) => {

  i.addEventListener('click', (el)=>{

    document.querySelector('.active').classList.remove('active')
    el.target.classList.add('active')

    document.querySelector('.activado').classList.remove('activado')
    feat[j].classList.add('activado')

  })

})

document.querySelectorAll('.questionone').forEach( (e, j) => {
  e.addEventListener('click', ()=>{
    document.querySelectorAll('.questionone')[j].classList.toggle('altura')
  })
})



document.querySelector('.humb').addEventListener('click', ()=>{
  document.querySelector('.list').style.top = 0
})
document.querySelector('.closed').addEventListener('click', ()=>{
  document.querySelector('.list').style.top = '-100%'
})