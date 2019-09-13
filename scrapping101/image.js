var fs = require('fs');

var data = require('./data.json');

console.log(data.sneakers);

var images = []

for(const sneaker of data.sneakers){
    images.push(sneaker.sneakerLink);
}

var jsonData = JSON.stringify(images);
fs.writeFile("./image.json", jsonData, err => {
  if (err) {
    throw err;
  } else {
    console.log("Data save in the file");
  }
});
