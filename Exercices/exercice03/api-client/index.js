
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({origin: '*'}))

app.use(express.json())




const clients = [
    {
        id:1,
        firstName: 'toto',
        lastName: 'titi',
        phone: '010101001',
        status: false,
        address : {
            street : 'strreet',
            postCode: '00000',
            city: 'mouvaux'
        }
    },

    {
        id:2,
        firstName: 'toto',
        lastName: 'titi',
        phone: '010101001',
        status: true,
        address : {
            street : 'strreet',
            postCode: '00000',
            city: 'mouvaux'
        }
    },

    {
        id:3,
        firstName: 'toto',
        lastName: 'titi',
        phone: '010101001',
        status: false,
        address : {
            street : 'strreet',
            postCode: '00000',
            city: 'mouvaux'
        }
    },
    
    {
        id:4,
        firstName: 'tutu',
        lastName: 'titi',
        phone: '010101001',
        status: true,
        address : {
            street : 'strreet',
            postCode: '00000',
            city: 'mouvaux'
        }
    }
]

const getlastId = () => {
    return clients[clients.length - 1].id
}

app.get('/clients', (req, res) => {
    res.json(clients)
})

app.post('/clients', (req, res) => {
    const data = req.body
    const client = {id: getlastId()+1, ...data}
    clients.push(client)
    console.log(client)
    res.json(client)
})

app.listen(8080)


// commande : node index.js