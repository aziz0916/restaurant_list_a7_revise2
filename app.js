const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const restaurantList = require('./restaurant.json')
const Restaurant = require('./models/restaurant.js')

const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/restaurant-list')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

app.get('/restaurants/new', (req, res) => {
  res.render('new')
})

app.post('/restaurants', (req, res) => {
  const { id, name, name_en, category, image, location, phone, google_map, rating, description } = req.body

  return Restaurant.create({
    id: Number(id),
    name, name_en, category, image, location, phone, google_map,
    rating: Number(rating),
    description
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

app.get('/search', (req, res) => {
  let keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => restaurant.name.toLowerCase().includes(keyword.toLowerCase().trim()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase().trim()))

  if (!restaurants.length) {
    keyword = `您輸入的關鍵字：${keyword} 沒有符合條件的餐廳`
  }
  res.render('index', { restaurants, keyword })
})

app.get('/restaurants/:restaurants_id', (req, res) => {
  const restaurants_id = req.params.restaurants_id

  return Restaurant.findById(restaurants_id)
    .lean()
    .then(restaurant => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

app.get('/restaurants/:restaurants_id/edit', (req, res) => {
  const restaurants_id = req.params.restaurants_id

  return Restaurant.findById(restaurants_id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

app.post('/restaurants/:restaurants_id/edit', (req, res) => {
  const restaurants_id = req.params.restaurants_id
  const { id, name, name_en, category, image, location, phone, google_map, rating, description } = req.body

  return Restaurant.findById(restaurants_id)
    .then(restaurant => {
      restaurant.id = Number(id)
      restaurant.name = name
      restaurant.name_en = name_en
      restaurant.category = category
      restaurant.image = image
      restaurant.location = location
      restaurant.phone = phone
      restaurant.google_map = google_map
      restaurant.rating = Number(rating)
      restaurant.description = description
      restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${restaurants_id}`))
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})