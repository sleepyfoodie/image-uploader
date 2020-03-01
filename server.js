const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// );

app.get("/albums", (req, res) => {
  let url = "https://api.imgur.com/3/account";
  axios
    .get(`${url}/sleepyfoodie/albums`,{
        'headers': {
            'authorization': 'Client-ID cdef04b1623453d'
        }
    })
    .then(response => {
        console.log(response.data)
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
      return res.send([]);
    });
});

app.listen(process.env.PORT || 8080, () => {
  console.log("SERVER RUNNING ON 8080");
});
