//importing express into the js file
const express = require('express')
const app = express()

//import mustache
const mustacheExpress = require('mustache-express')

//this is so express can parse your body
app.use(express.urlencoded())


//setting up mustache as a templating engine
app.engine('mustache', mustacheExpress())

//the pages are located in the views directory
app.set('views', './views')

//extension for all the pages
app.set('view engine', 'mustache')

let trips = []

const PORT = 3000


app.get('/trips', (req, res)=>{
    res.render('index', {allTrips: trips})
})


app.post('/trips', (req, res) => {
    const title = req.body.title
    const imageURL = req.body.imageURL
    const depDate = req.body.depDate
    const retDate = req.body.retDate

    let trip = {tripId: trips.length -1, title: title, imageURL: imageURL, depDate: depDate, retDate: retDate}
    trips.push(trip)

    console.log(trips)

    res.redirect('/trips')


})
   

//this will start the server and let us know that it's running
app.listen(PORT, () => {
    console.log('Server is running...')
})




