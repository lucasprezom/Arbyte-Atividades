const express = require('express')
const routes = require('./routes')
const port = 3000

const app = express()

app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
    res.send('rota principal')

})

app.listen(port, () => {
    console.log(`porta rodando ${port}!`)
    console.log(`htttp://localhost:${port}`)
})