const express = require("express");
const multer = require("multer");

const app = express();
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, resp) => {
  resp.send("kdfjkdj kfjdsjfij");
});

app.post("/files", upload.single("foodimg"), (req, resp) => {
  resp.status(200).send({ message: "Image uploaded successfully" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running at port no. ${PORT} on http://127.0.0.1:${PORT}`);
});
