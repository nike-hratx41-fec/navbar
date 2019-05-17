const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fike');
const shoes = require('../../shoe-data-generator/shoeData.json');

let shoeSchema = mongoose.Schema({
  productName: String,
  category: String,
  sku: String,
  brand: String,
  price: Number,
  images: [String]
});

let Shoes = mongoose.model('Shoes', shoeSchema);

let save = (data) => {
    console.log('inside of save: ', data[0])
    Shoes.insertMany(data, (err) => {
        if (err) {
            console.log('insertion error: ', err)
        }
        console.log('attempting to update')
        Shoes.update(data, { upsert: true })
    });
};

//uncomment below 
// save(shoes);
