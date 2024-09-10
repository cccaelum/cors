const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/character/:characterName', async (req, res) => {
    const characterName = req.params.characterName
    const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`

    try {
        const response = await axios.get(url)
        const {name, species, image} = response.data.results[0]; // saca el primer personaje del array results

        res.json({ name, species, image })

    } catch (ERROR) {
        res.status(404).json({error: 'personaje no encontrado'})
    }
})

app.listen(3000, () => {
    console.log('express esta escuchando en el puerto http://localhost:3000')
})