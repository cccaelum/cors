const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(cors({
    origin: 'http://127.0.0.1:5501' // permiso a una url en concreto, si queremos mas las metemos en un array
}))

app.get('/character/:characterName', async (req, res) => {
    const characterName = req.params.characterName
    const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`

    try {
        const response = await axios.get(url)
        const {name, status, species, gender, origin: { name: originName }, image} = response.data.results[0]; // saca el primer personaje del array results

        res.json({ name, status, species, gender, origin: { name: originName }, image })

    } catch (ERROR) {
        res.status(500).json({error: 'personaje no encontrado'}) //500 error de servidor ya que estamos accedienco a uno externo
    }
})

app.listen(3000, () => {
    console.log('express esta escuchando en el puerto http://localhost:3000')
})