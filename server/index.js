const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");
const port = process.env.PORT || 3007;
const baseURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/";
const baseURLQA = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa";
const { TOKEN } = require("../config.js");
const compression = require("compression");

app.use(compression());

app.listen(port, () => {
  console.log(`The app server is running on port: ${port}`);
});

const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));

app.get("/products", (req, res) => {
  axios.get(baseURL, { headers: { Authorization: TOKEN } })
  .then((receivedProductList) => {
    res.status(200).send(receivedProductList.data);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.get("/products/:product_id/styles", (req, res) => {
  axios.get(`${baseURL}${req.params.product_id}/styles`, {
    headers: { Authorization: TOKEN },
  })
  .then((receivedStylesList) => {
    res.status(200).send(receivedStylesList.data);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.get("/products/:product_id", (req,res) => {
  axios.get(`${baseURL}${req.params.product_id}`, {headers: {Authorization: TOKEN}})
  .then((receivedProduct) => {
      res.status(200).send(receivedProduct.data)
  })
  .catch ((err) => {
      console.error(err);
      res.sendStatus(500);
  });
})

app.get("/products/:product_id/styles", (req,res) => {
  axios.get(`${baseURL}${req.params.product_id}/styles`, {headers: {Authorization: TOKEN}})
  .then((receivedStylesList) => {
      res.status(200).send(receivedStylesList.data)
  })
  .catch ((err) => {
    console.error(err);
    res.sendStatus(500);
  });
})

app.get("/products/:product_id", (req,res) => {
  axios.get(`${baseURL}${req.params.product_id}`, {headers: {Authorization: TOKEN}})
  .then((receivedFeaturesList) => {
    res.status(200).send(receivedFeaturesList.data)
  })
  .catch ((err) => {
    console.error(err);
    res.sendStatus(500);
  });
})

app.get("/products/:product_id/related", (req,res) => {
  axios.get(`${baseURL}${req.params.product_id}/related`, {headers: {Authorization: TOKEN}})
  .then((receivedRelatedProductsList) => {
      res.status(200).send(receivedRelatedProductsList.data);
  })
  .catch ((err) => {
      console.error(err);
      res.sendStatus(500);
  });
})

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE, function (err) {
    if (err) {
      res.status(500).send(err);
      res.sendStatus(500);
    }
  });
});

app.get("/questions/:product_id", (req, res) => {
  axios({
    method: "get",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`,
    params: {
      product_id: req.params.product_id,
      count: 10000,
    },
    headers: { Authorization: TOKEN },
  })
  .then((questionListData) => {
    res.status(200).send(questionListData.data);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.get("/questions/:question_id/answers", (req, res) => {
  axios({
    method: "get",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${req.params.question_id}/answers`,
    headers: { Authorization: TOKEN },
  })
  .then((questionListData) => {
    res.status(200).send(questionListData.data);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.post("/questions", (req, res) => {
  axios({
    method: "post",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions",
    data: {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      product_id: req.body.product_id,
    },
    headers: { Authorization: TOKEN },
  })
  .then((err, apiResponse) => {
    res.status(201).send(apiResponse);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.post("/answers", (req, res) => {
  axios({
    method: "post",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${req.body.id}/answers`,
    data: {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
    },
    headers: { Authorization: TOKEN },
  })
  .then((err, apiResponse) => {
    res.status(201).send(apiResponse);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.put("/questions/:question_id", (req, res) => {
  axios({
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${Number(
      req.params.question_id
    )}/helpful`,
    headers: { Authorization: TOKEN },
  })
  .then((apiresponse) => {
    res.status(201).send(apiresponse.data);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.put("/answers/:answer_id", (req, res) => {
  axios({
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${Number(
      req.params.answer_id
    )}/helpful`,
    headers: { Authorization: TOKEN },
  })
  .then((apiresponse) => {
    res.status(201).send(apiresponse.data);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.put("/answers/:answer_id/report", (req, res) => {
  axios({
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${Number(
      req.params.answer_id
    )}/report`,
    headers: { Authorization: TOKEN },
  })
  .then((apiresponse) => {
    res.status(201).send(apiresponse.data);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.put("/reviews/:review_id", (req, res) => {
  axios({
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${Number(
      req.params.review_id
    )}/helpful`,
    headers: { Authorization: TOKEN },
  })
  .then((apiresponse) => {
    res.status(201).send(apiresponse.data);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.put("/reviews/:review_id", (req, res) => {
  axios({
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${Number(
      req.params.review_id
    )}/report`,
    headers: { Authorization: TOKEN },
  })
  .then((apiresponse) => {
    res.status(201).send(apiresponse.data);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.post("/reviews", (req, res) => {
 axios({
   method: "post",
   url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`,
   headers: { Authorization: TOKEN },
 })
  .then((reviewDataNew) => {
    res.status(201).send(reviewDataNew);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});
