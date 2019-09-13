var express = require("express");
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
var app = express();
require("tls").DEFAULT_ECDH_CURVE = "auto";

var file;
fs.readFile("./single.html", (err, data) => {
  if (err) {
    throw err;
  }
  file = data;
});
url = "http://localhost:3000/";
request(url, async function(error, response, html) {
  if (!error) {
    var $ = cheerio.load(file);

    var products = [];
    // console.log($.html());
    await $(".product-content").filter(function() {
      console.log("running");
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

      console.log(product);
    });
  } else {
    console.log(error);
  }
});
// var myfile;
// async function single() {
//   await fs.readFile("./single.html", (err, data) => {
//     if (err) {
//       throw err;
//     }
//     myfile = data;
//     console.log(myfile);
//   });
//   console.log(myfile);
//   var $ = cheerio.load(myfile);
//   // return;
// }
//  single().then(() => console.log("sucess"))

// var $ = cheerio.load(myfile);
//  $(".product-page").filter(function() {
//   var data = $(this);
//   data.find("#360Image > img").each(function(i, el) {
//     var imgData = $(this);

//     console.log(imgData.attr().src);
//   });
// });

app.get("/", function(req, res) {
  res.send("hello");
});

app.get("/single", function(req, res) {
  url = "https://infiniteselection.com/browse-sneakers/";
  url =
    "https://infiniteselection.com/sneakers/e1b8fa95-ed16-421f-b7fe-979e67af8503/";
  request(url, async function(error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      // console.log($.html());
      await $(".product-page").filter(function() {
        console.log("running");
        var data = $(this);
        var product = {};
        fs.writeFile("./single.html", data.html(), err => {
          if (err) {
            throw err;
          } else {
            console.log("Data save in the file");
          }
        });
        var video = data.find("#360Image");
        console.log(video.html());
        console.log("ended");
      });
    } else {
      console.log(error);
    }
  });
});

app.get("/infinite", function(req, res) {
  var file;
  fs.readFile("./infinite.html", (err, data) => {
    if (err) {
      throw err;
    }
    file = data;
  });
  url = "https://infiniteselection.com/browse-sneakers/";
  request(url, async function(error, response, html) {
    if (!error) {
      var $ = cheerio.load(file);

      var sneakersData = [];
      // console.log($.html());
      await $(".sneakers-card").filter(function() {
        console.log("running");
        var data = $(this);
        var sneakersCard = data;
        var sneakerData = {};
        var sneakersCardInner = sneakersCard.find("a");

        sneakerData.sneakerLink = sneakersCardInner.attr("href");
        sneakerData.image = sneakersCardInner.find("img").attr("src");
        // console.log(sneakersCardInner.html());
        var sneakersCardInfo = sneakersCard.find(".sneakers-card-info");
        sneakerData.name = sneakersCardInfo.find(".sneakers-card__name").text();
        sneakerData.cost = sneakersCardInfo.find(".sneakers-card__cost").text();
        sneakerData.costValue = sneakersCardInfo
          .find(".sneakers-card__cost-value")
          .text();

        console.log(sneakerData);
        sneakersData.push(sneakerData);
        // console.log(sneakersCardInfo.find(".sneakers-card__cost").text());

        // console.log(sneakersCard.html());
        console.log("ended");
      });
    } else {
      console.log(error);
    }
    var jsonData = JSON.stringify(sneakersData);
    fs.writeFile("./data.json", jsonData, err => {
      if (err) {
        throw err;
      } else {
        console.log("Data save in the file");
      }
    });
  });
});
app.get("/scrape", function(req, res) {
  url = "http://www.imdb.com/title/tt1229340/";
  request(url, function(error, response, html) {
    // First we'll check to make sure no errors occurred when making the request

    if (!error) {
      // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
      var $ = cheerio.load(html);

      // Finally, we'll define the variables we're going to capture

      var title, release, rating;
      var json = { title: "", release: "", rating: "" };
      $(".title_wrapper").filter(function() {
        var data = $(this);
        // console.log(data);
        json.title = data.find("h1").text();
        json.date = data.find(".subtext").find("a")[1].childNodes[0].data;
        console.log(json.date);
      });

      console.log(json);
    } else {
      console.log(error);
    }
  });
});

app.listen("3000");
console.log("Magic happens on port 3000");
exports = module.exports = app;
