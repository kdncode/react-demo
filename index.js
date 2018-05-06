const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, (req, res) => {
    console.log('Server is running on port 3000');
})