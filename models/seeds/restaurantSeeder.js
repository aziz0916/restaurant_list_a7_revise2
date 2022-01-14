const mongoose = require('mongoose')

const Restaurant = require('../restaurant.js')
const restaurantList = require('../../restaurant.json')

mongoose.connect('mongodb://localhost/restaurant-list')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')

  for (let i = 0; i < restaurantList.results.length; i++) {
    Restaurant.create({
      name: restaurantList.results[i].name,
      name_en: restaurantList.results[i].name_en,
      category: restaurantList.results[i].category,
      image: restaurantList.results[i].image,
      location: restaurantList.results[i].location,
      phone: restaurantList.results[i].phone,
      google_map: restaurantList.results[i].google_map,
      rating: restaurantList.results[i].rating,
      description: restaurantList.results[i].description
    })
      // 假如使用此註解部分的程式會因為for迴圈而無法產生完整的種子資料
      // .then(() => {
      //   console.log('done.')
      //   db.close()
      // })
      // .catch(error => {
      //   console.log(error)
      //   res.render('errorPage', { status: 500, error: error.message })
      // })
      // .finally(() => process.exit())
      .then(() => {
        Restaurant.find()
          .then(restaurants => {
            if (restaurants.length === restaurantList.results.length) {
              console.log('done.')
              db.close()
            }
          })
          .catch(error => {
            console.log(error)
            res.render('errorPage', { status: 500, error: error.message })
          })
          .finally(() => process.exit())
      })
      .catch(error => {
        console.log(error)
        res.render('errorPage', { status: 500, error: error.message })
      })
  }
})