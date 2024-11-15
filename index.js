const express = require('express');
const app = express();
const PORT = 5005;

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

let pLanguage = [];

app.get("/", (req,res) => {
    res.render("index", {plNames: pLanguage});
});

app.get("/contact", (req,res) => {
    res.render("contact", {});
});

app.post("/", (req, res) => {
    const newLanguage = req.body.pLanguage;
    pLanguage.push(newLanguage);
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
});