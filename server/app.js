const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bodyParser = require('body-parser');
const Message = require('./Message');
app.use("/files", express.static("files"));
app.use(bodyParser.json());

const mongoUrl = "mongodb+srv://jeyachandranj:jj.jeyan@cluster0.pe8ib.mongodb.net/notes"
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

require("./pdfDetails");
const PdfSchema = mongoose.model("PdfDetails");
const upload = multer({ storage: storage });

app.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const { title, category } = req.body; 
  const fileName = req.file.filename;
  try {
    await PdfSchema.create({ title: title, category: category, pdf: fileName }); 
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/get-files", async (req, res) => {
  try {
    PdfSchema.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {}
});


app.post('/api/messages', async (req, res) => {
  const { user, message } = req.body;

  try {
      const newMessage = new Message({ user, message });
      await newMessage.save();
      res.status(201).json(newMessage);
  } catch (err) {
      res.status(500).json({ error: 'Failed to save message' });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
      const messages = await Message.find().sort({ timestamp: -1 });
      res.status(200).json(messages);
  } catch (err) {
      res.status(500).json({ error: 'Failed to fetch messages' });
  }
});


app.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});

app.listen(5000, () => {
  console.log("Server Started");
});
