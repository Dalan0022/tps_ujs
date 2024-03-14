import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/",(req,res)=>{
  res.render("index.ejs");
});

app.get("/tananyag",(req,res)=>{
  res.render("tananyag.ejs");
});

app.get("/feladatok",(req,res)=>{
  res.render("feladatok.ejs");
});

app.get("/vizsga",(req,res)=>{
  res.render("vizsga.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
