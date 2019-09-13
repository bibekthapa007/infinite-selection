const puppeteer = require("puppeteer");
var cheerio = require("cheerio");
var fs = require("fs");
var json = require("./image.json");

const sneakers = [];

var id = 0;
const getProduct = async url => {
  // console.log(url)
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);
  const html = await page.content();
  console.log("starting cheerio");
  var $ = cheerio.load(html);
  await $(".product-page").filter(function() {
    var data = $(this);
    var product = {};
    product.images = [];
    data.find("#360Image > img").each(function(i, el) {
      var imgData = $(this);
      var media = imgData.attr().src;
      if (!media.includes(".gif")) {
        product.images.push(imgData.attr().src);
      } else {
        product.gif = imgData.attr().src;
      }
      // console.log(imgData.attr().src);
    });
    product.name = data.find(".product__name").text();
    var condition = data.find(".product-subtitle__condition").text();
    product.condition = condition.substring(11, condition.length);
    product.description = data.find(".product-description__text").text();

    var cost = data.find(".product-subtitle__cost").text();

    cost = cost.substring(1, cost.length);
    cost = cost.substring(0, cost.length - 6);
    product.cost = cost;
    product.info = {};
    data.find(".product-info-row").each(function(i, el) {
      var info = $(this);
      var id = info.find(".product-info__category").text();
      var value = info.find(".product-info__value").text();
      product.info[id] = value;
    });
    // sneakers.push(product);

    if (id <= 62) {
      if (id === 62) {
        var jsonData = JSON.stringify(product) + " ] ";
      } else if (id === 0) {
        var jsonData = "[ " + JSON.stringify(product);
      } else {
        var jsonData = JSON.stringify(product) + ", ";
      }
      id++;
      console.log(jsonData, "--------" + id);
      fs.writeFile("./product.json", jsonData, { flag: "a+" }, err => {
        if (err) {
          throw err;
        } else {
          console.log("Data save in the file");
        }
      });
      // console.log(product.length);
      getProduct(json[id]);
    }
    // console.log(product);
  });
  //   console.log(html);
  await browser.close();
};
// boo(
//   "https://infiniteselection.com/sneakers/75621bd3-63d2-4c52-b449-d36b15180e5e/"
// );
getProduct(json[0]);

async function getProducts() {
  for (const sneaker of json) {
    getProduct(sneaker);
  }
  var jsonData = JSON.stringify(products);
  fs.writeFile("./product.json", jsonData, err => {
    if (err) {
      throw err;
    } else {
      console.log("Data save in the file");
    }
  });
}

// products();
