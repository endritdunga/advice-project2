import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let adv;
let colection = [];

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");

    adv = response.data.slip.advice;
    console.log(adv);
    res.render("index.ejs", { data: adv });
  } catch (error) {
    res.render("index.ejs", { error: "failed to make request" });
  }
});

app.post("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    adv = response.data.slip.advice;
    res.render("index.ejs", { data: adv });
    colection.push(adv);
    console.log(`our array colection ${colection}`);
  } catch (error) {
    res.render("index.ejs", { error: "error " });
  }
});
app.listen(port, () => console.log(`app is listen on port ${port}`));
