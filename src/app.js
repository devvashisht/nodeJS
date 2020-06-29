
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app = express()

// define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handle bar engine and view location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    console.log("--------2")
    res.render('index', {
        title: 'weather app',
        name: 'Dev'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about me',
        name: 'avas'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is helpful text',
        title: 'Help',
        name: 'DEv'
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "you must provide a address"
        })
    }
    // res.send({
    //     forecast: 50,
    //     location: "Delhi",
    //     address: req.query.address
    // })

    geocode(req.query.address, (error, { latitude, longitude, location }= {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                forecast : forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "you must provide a search term"
        })
    }
    console.log(req.query.rating)
    res.send(
        { products: [] }
    )
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Dev',
        errorMessage: 'Help Ariticle not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Dev',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})


// app.get('', (req,res) =>{
//         res.send('<h1>Weather</h1>')
// })

// app.get('/help', (req,res) =>{
//     // res.send({
//     //     name : 'Dev',
//     //     age : 34
//     // })
//     res.send([{
//         name : 'Dev',
//         age : 34
//     },
//     {
//         name : 'Manish',
//         age : 30
//     }])
// })
// app.get('/about', (req,res) =>{
//     res.send('<h1>about page</h1>')
// })
