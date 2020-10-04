const fs = require('fs');
const path = require('path');
const pathToData = path.join(require.main.path, 'data', 'cart.json');

const initProduct = { totalPrice: 0, products: [], quantity: 0 };
 
// similar to the utility method we use in models/product
const getDataFromFile = cb => {
    fs.readFile(pathToData, (er, data) => {
        if (er) {
            cb({ ...initProduct }, true);
        } else {
            if (!data.length) {
                return cb({ ...initProduct }, true);
            }
            cb(JSON.parse(data), false);
        }
    });
}
 
// check if product already exists in it 
const checkIfNew = (ar, id) => {
    let res = ar.find(el => (el.id === id));
    return res;
}


module.exports = class Cart {
  static addProduct(id, pr) {
    let price = Number(pr);

    // Fetch the previous cart
    getDataFromFile((data, init) => {
      if (init) {
        data.products.push({ id: id, qty: 1, price: price });
        data.quantity++;
        data.totalPrice = price;
      } else {
        let prod = checkIfNew(data.products, id);
        // if product exists , increment , else add a new one...
        if (prod) {
          prod.qty++;
        } else {
          data.products.push({ id: id, qty: 1, price: price });
        }
        data.totalPrice = data.totalPrice + price;
        data.quantity++;

      }
      fs.writeFile(pathToData, JSON.stringify(data), er => {
        if (er) {
          console.log('Error while writing');
        } else {
          console.log('DONEEEEEE');
        }
      })
    })
  }

}
