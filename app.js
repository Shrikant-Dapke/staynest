const express = require("express");
const app = express();
const Listing = require("./models/listing");
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/staynest";

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hi, I am Root");
});

app.get("/listings", async (req, res) => {
  let sampleListings = new Listing({
    title: "Cozy Cottage",
    description: "A charming cottage nestled in the countryside.",
    price: 120,
    location: "Countryside",
    country: "USA",
  });

  await sampleListings.save();
  console.log("Sample listing saved to the database");
  res.send("Sample listing created and saved to the database");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
