const multer = require("multer");

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only images are allowed"), false);
  }
};

const upload = multer({ fileFilter });

module.exports = upload;
