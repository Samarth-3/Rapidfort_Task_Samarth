const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const libre = require("libreoffice-convert");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 8080;


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

const uploadsDir = path.join(__dirname, "uploads");
const outputDir = path.join(__dirname, "output");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "uploads")),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const docxtopdfdemo = (req, file, callback) => {
  const ext = path.extname(file.originalname);
  if (ext !== ".docx" && ext !== ".doc") {
    return callback("This Extension is not supported");
  }
  callback(null, true);
};

const docxtopdfdemoupload = multer({ storage: storage, fileFilter: docxtopdfdemo });

app.get("/docxtopdfdemo", (req, res) => {
  res.render("docxtopdfdemo", {
    title: "DOCX to PDF Converter - Free Media Tools",
  });
});

app.post("/docxtopdfdemo", docxtopdfdemoupload.single("file"), (req, res) => {
  if (req.file) {
    console.log(`Uploaded file path: ${req.file.path}`);
    const file = fs.readFileSync(req.file.path);
    const outputFilePath = path.join(
      __dirname,
      "output",
      `${Date.now()}_output.pdf`
    );

    libre.convert(file, ".pdf", undefined, (err, done) => {
      if (err) {
        fs.unlinkSync(req.file.path);
        return res.status(500).send("Error in conversion process");
      }
      fs.writeFileSync(outputFilePath, done);
      res.download(outputFilePath, (err) => {
        if (err) {
          console.error("Error during file download:", err);
        }
        // Cleanup
        fs.unlinkSync(req.file.path);
        fs.unlinkSync(outputFilePath);
      });
    });
  } else {
    res.status(400).send("No file uploaded");
  }
});

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
