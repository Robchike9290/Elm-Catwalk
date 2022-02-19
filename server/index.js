const express = require("express");
const axios = require ("axios")
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/'

const { TOKEN } = require('../config.js')

app.listen(port, () => {
   console.log(`The app server is running on port: ${port}`);
});
// http://example.com/page?parameter=value&also=another
const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
// app.use(express.static("public"));
app.use(express.static(__dirname + '/../client/dist'));

app.get("/products", (req, res) => {

   axios.get(`${baseURL}?count=7`, {headers: {Authorization: TOKEN}})
   .then((receivedProductList) => {
   //   console.log(receivedProductList.data);
     res.status(200).send(receivedProductList.data);
   })
   .catch ((err) => {
     console.error(err);
     console.error('failed in server GET');
   })
})

app.get("/products/:product_id", (req,res) => {
   axios.get(`${baseURL}${req.params.product_id}`, {headers: {Authorization: TOKEN}})
      .then((receivedProduct) => {
         res.status(200).send(receivedProduct.data)
      })
      .catch ((err) => {
         console.error('failed in server GET');
      });

})

app.get("/products/:product_id/styles", (req,res) => {
   //console.log("Product ID", req.params.product_id);
   axios.get(`${baseURL}${req.params.product_id}/styles`, {headers: {Authorization: TOKEN}})
      .then((receivedStylesList) => {
         //console.log("Data for productID", receivedStylesList.data);
         res.status(200).send(receivedStylesList.data)
      })
      .catch ((err) => {
         //   console.error(err);
           console.error('failed in server GET');
         });

})

app.get("/products/:product_id/related", (req,res) => {
   axios.get(`${baseURL}${req.params.product_id}/related`, {headers: {Authorization: TOKEN}})
      .then((receivedRelatedProductsList) => {
         res.status(200).send(receivedRelatedProductsList.data);
      })
      .catch ((err) => {
         console.error('failed in server GET');
         res.sendStatus(500);
      });
})

app.get("/", (req, res) => {
   res.sendFile(HTML_FILE, function(err){
      if(err){
         res.status(500).send(err);
      }
   });
});