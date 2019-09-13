var fs = require("fs");
var mergeByKey = require("array-merge-by-key");
const description = require("./description.json");
const result = require("./result.json")

const final = mergeByKey("name",  result, description)


console.log(final);

// for (const product of result) {
 
//   const d  = product.description;
//   d[0] = parseInt(d[0])
//   d[1] = parseInt(d[1])
// }



// console.log(result.length);


// for (const product of result) {
//   var d = product.description;

//   d = d.replace("4 DAYS: $", "");
//   d = d.replace("8 DAYS: $", " ");

//   d = d.split(" ");
//   if(d.length != 2){
//       console.log(d);
//   }
//   product.description = d;
// }

// // console.log(result);
var jsonData = JSON.stringify(final);

fs.writeFile("./final.json", jsonData, err => {
  if (err) {
    throw err;
  } else {
    console.log("Data save in the file");
  }
});



