const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const user = process.env.MONGO_USER || "root";
const pass = process.env.MONGO_PASS || "example";
const dbName = process.env.MONGO_DB || "messagedb";

mongoose.connect(
  `mongodb://${user}:${pass}@mongo:27017/${dbName}?authSource=admin`,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

const MessageSchema = new mongoose.Schema({ text: String });
const Message = mongoose.model("Message", MessageSchema);

app.get("/messages", async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

app.post("/messages", async (req, res) => {
  const message = new Message({ text: req.body.text });
  await message.save();
  res.json({ message: "Message saved!" });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
