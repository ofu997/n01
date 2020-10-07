const fs = require('fs');
const path = require('path');
const pathToData = path.join(require.main.path, 'data', 'cart.json');

const initProduct = { totalPrice: 0, products: [], quantity: 0 };
 
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
  static addProduct(prodId, productPrice) {
    let price = Number(productPrice);

    // Fetch the previous cart
    getDataFromFile((data, init) => {
      if (init) {
        data.products.push({ id: prodId, qty: 1, price: price });
        data.quantity++;
        data.totalPrice = price;
      } else {
        let prod = checkIfNew(data.products, prodId);
        // if product exists , increment , else add a new one...
        if (prod) {
          prod.qty++;
        } else {
          data.products.push({ id: prodId, qty: 1, price: price });
        }
        data.totalPrice = data.totalPrice + price;
        data.quantity++;
      }
      fs.writeFile(pathToData, JSON.stringify(data), er => {
        if (er) {
          console.log('Error while writing');
        } else {
          console.log('models/cart Retrieved data from file');
        }
      })
    })
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(pathToData, (err, fileContent) => {
      if (err) {
        return;
      }
      const updatedCart = { ...JSON.parse(fileContent) };
      const product = updatedCart.products.find(prod => prod.id === id);
      if (!product) {
          return;
      }
      const productQty = product.qty;
      updatedCart.products = updatedCart.products.filter(
        prod => prod.id !== id
      );
      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty;

      fs.writeFile(p, JSON.stringify(updatedCart), err => {
        console.log(err);
      });
    });
  }  

  static getCart(cb) {
    fs.readFile(pathToData, (err, fileContent) => {
      const cart = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(cart);
      }
    });
  }  

}
