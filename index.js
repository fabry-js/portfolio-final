const express = require('express');
const helmet = require('helmet');

const app = express()
app.use(helmet())

const port = process.env.PORT || 3000;

app.use((req, res, next) =>{
    if (req.path != '/') {
        res.redirect('/')
    }
    next()
})

app.get('/', (req, res, next) =>{
    if (true) {
        return res.sendFile('.index.html', {root: __dirname + '/'})
    }
    next()
})


app.use(express.static('./public/'))

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`);
})
