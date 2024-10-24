const express = require("express")
const router = express.Router()
const app = express()
const porta = 3333


function mostraMulher(request,response){
    response.json({
        nome: 'Sabrina Rodrigues',
        imagem:'https://media.licdn.com/dms/image/v2/D4E03AQG24BzZgpQ9wg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709230988519?e=1735171200&v=beta&t=Kzrtu8LaL1CY2Qq3eF1cxqccnYCuLZXBU3S0A11WVCI',
        minibio:'Desenvolvedora Rpa'

    })

}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher',mostraMulher))
app.listen(porta, mostraPorta)