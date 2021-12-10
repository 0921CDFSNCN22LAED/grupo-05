const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

function saveProducts() {
  const texto = JSON.stringify(products, null, 4);
  fs.writeFileSync(productsFilePath, texto, "utf-8");
}

function findOne(id) {
  const product = products.find((prod) => {
    return prod.id == id;
  });
  return product;
}

function getAll() {
  return products;
}

function createOne(body) {
    const product = {
    id: Date.now(), 
    ...body
    };

    products.push(product);

    saveProducts();
}


function deleteOne(id) {
  const index = products.findIndex((prod) => prod.id == id);

  products.splice(index, 1);

  saveProducts();
}

module.exports = {
  getAll,
  findOne,
  saveProducts,
  createOne,
  deleteOne,
};
