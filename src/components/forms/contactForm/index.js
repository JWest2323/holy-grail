const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

// Replace the following with your MongoDB connection string
const uri =
  "mongodb+srv://admin:<password>@cluster0.ymrvb3c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit-form", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("ContactForm");
    const collection = database.collection("contact-form");

    const formData = req.body;

    const result = await collection.insertOne(formData);
    res
      .status(200)
      .send(`Form submitted successfully with ID: ${result.insertedId}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while submitting the form");
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
