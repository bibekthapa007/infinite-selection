var fs = require("fs");
var products = require("./data.json").sneakers;
var productDetail = require("./product.json")
var mergeByKey = require("array-merge-by-key");

for (const product of products){
    product.name = product.name.trim();
}

for (const productD of productDetail){
    productD.name = productD.name.trim();
    productD.costValue = productD.cost;
    delete productD.cost;
}


const result = mergeByKey("name", products, productDetail)
// const result = mergeByKey("name", [{name:"bibek "}], [{name:"bibek"}] )
var jsonData = JSON.stringify(result);
  fs.writeFile("./result.json", jsonData, err => {
    if (err) {
      throw err;
    } else {
      console.log("Data save in the file");
    }
  });
console.log(result.length);
