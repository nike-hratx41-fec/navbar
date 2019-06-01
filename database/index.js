const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://admin:password42@mattmongodb-o9nhb.mongodb.net/fike?retryWrites=true&w=majority`, {useNewUrlParser: true});
// const shoes = require('../../shoe-data-generator/shoeData.json');



let shoeSchema = mongoose.Schema({
  productName: String,
  category: String,
  sku: String,
  brand: String,
  price: Number,
  images: [String]
});

let Shoes = mongoose.model('Shoes', shoeSchema);

let findAll = (obj, callBack) => {
  Shoes.find(obj, function(err, docs) {
    if (err) {
      console.log("I AM GETTING AN ERROR");
    } else {
      console.log("sucess retreiving database stuff");
      callBack(null, docs);
    }
  });
};

//for setting up initial database

// let save = (data) => {
//     console.log('inside of save: ', data[0])
//     Shoes.insertMany(data, (err) => {
//         if (err) {
//             console.log('insertion error: ', err)
//         }
//         console.log('attempting to update')
//         Shoes.update(data, { upsert: true })
//     });
// };

//uncomment below 
//save(shoes);

module.exports.findAll = findAll;