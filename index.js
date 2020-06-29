import express, { response } from "express";
import fetch from "node-fetch";
import cors from "cors";

const url = "https://www.metaweather.com/api/location/2487956/";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/api", (req, res) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => res.send(data));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}...`);
});
