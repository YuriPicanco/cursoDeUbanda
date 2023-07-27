// export const api = {
//   // connect,
//   uploadContact

// }

// export async function connect(){
//   const connect = await fetch('http://localhost:3000/contatos')
//   const connectResolve = await connect.json()
//   console.log(connectResolve)
//   return connectResolve
  
// }

export async function uploadContact(nome, numero, email){

  const connect = await fetch('http://localhost:3000/contatos', {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      numero: numero,
      email: email,
    })
  })
  console.log(connect)
  if(!connect.ok){
    throw new Error('Não foi possível salvar o contato')
  }

  const connectResolve = await connect.json()
  return connectResolve
}