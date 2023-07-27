import { uploadContact } from './api.js'

const formulario = document.querySelector('[data-formulario]')

formulario.addEventListener('submit', (e) =>{

  newContact();
  e.preventDefault();
})

async function newContact() {
  const nome = document.querySelector('.nome').value
  const numero = document.querySelector('.numero').value
  const email = document.querySelector('.email').value
  console.log(nome)
  try{
    await uploadContact(nome, numero, email)
  }catch(err){
    alert(err)
  }
}