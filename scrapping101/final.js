var data = require("./final.json");
var fs = require("fs");
//

for (const product of data) {
  if (product.info[" COLORWAY "]) {
    delete Object.assign(product.info, {
      ["colors"]: product.info[" COLORWAY "]
    })[" COLORWAY "];
  }
  if (product.info[" RETAIL PRICE "]) {
    delete Object.assign(product.info, {
      ["retailPrice"]: product.info[" RETAIL PRICE "]
    })[" RETAIL PRICE "];
  }

  delete Object.assign(product.info, {
    ["releasePrice"]: product.info[" RETAIL PRICE  "]
  })[" RETAIL PRICE  "];
  delete Object.assign(product.info, {
    ["retaildate"]: product.info[" RELEASE DATE "]
  })[" RELEASE DATE "];
}

// for (const product of data) {
//   if (product.info.sku) {
//     product.info.sku = product.info.sku.trim();
//   }
//   if (product.info.releaseDate) {
//     product.info.releaseDate = product.info.releaseDate.trim();
//   }
//   if (product.info.retailPrice) {
//     var price = product.info.retailPrice.trim();
//     product.info.retailPrice = parseInt(price.substring(1, price.length), 10);
//   }
//   if (product.info.colors) {
//     var colors = product.info.colors.trim();
//     product.info.colors = colors.split(" ");
//   }
// }

console.log(data);

var jsonData = JSON.stringify(data);
fs.writeFile("./final.json", jsonData, err => {
  if (err) {
    throw err;
  } else {
    console.log("Data save in the file");
  }
});

// for (const product of data) {
//   var cost = product.cost.replace("$", "");
//   product.cost = parseInt(cost, 10);
//   product.costValue = parseInt(product.costValue);
//   delete Object.assign(product.info, { ["sku"]: product.info[" SKU "] })[
//     " SKU "
//   ];
//   delete Object.assign(product.info, {
//     ["releaseDate"]: product.info[" RETAIL PRICE  "]
//   })[" RETAIL PRICE  "];
//   delete Object.assign(product.info, {
//     ["retailPrice"]: product.info[" RELEASE DATE "]
//   })[" RELEASE DATE "];
//   delete Object.assign(product.info, {
//     ["colors"]: product.info[" COLORWAY  "]
//   })[" COLORWAY  "];
// }
