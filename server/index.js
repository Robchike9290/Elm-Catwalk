const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const baseURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/";
const baseURLQA = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa";

const { TOKEN } = require("../client/QA/config.js");

app.listen(port, () => {
  console.log(`The app server is running on port: ${port}`);
});

const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
// app.use(express.static("public"));
app.use(express.static(__dirname + "/../client/dist"));

app.get("/products", (req, res) => {
  axios
    .get(baseURL, { headers: { Authorization: TOKEN } })
    .then((receivedProductList) => {
      //   console.log(receivedProductList.data);
      res.status(200).send(receivedProductList.data);
    })
    .catch((err) => {
      //   console.error(err);
      console.error("failed in server GET");
    });
});

app.get("/products/:product_id/styles", (req, res) => {
  // console.log(req.params);
  axios
    .get(`${baseURL}${req.params.product_id}/styles`, {
      headers: { Authorization: TOKEN },
    })
    .then((receivedStylesList) => {
      // console.log(data.data);
      res.status(200).send(receivedStylesList.data);
    })
    .catch((err) => {
      console.error(err);
      console.error("failed in server GET");
    });
});

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE, function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/questions/:product_id", (req, res) => {
  // console.log(req.params);

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
      console.log("failed in server GET");
    });
});

app.post("/questions", (req, res) => {
  console.log(req.body);
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
      res.send(apiResponse);
    })
    .catch((err) => {
      console.error(err);
      console.log("failed in server GET");
    });
});

app.post("/answers", (req, res) => {
  console.log(req.body);
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
      res.send(apiResponse);
    })
    .catch((err) => {
      console.error(err);
      console.log("failed in server GET");
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
      res.status(200).send(apiresponse.data);
    })
    .catch((err) => {
      console.error(err);
      console.log("failed in server GET");
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
      res.status(200).send(apiresponse.data);
    })
    .catch((err) => {
      console.error(err);
      console.log("failed in server GET");
    });
});
