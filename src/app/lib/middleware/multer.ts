import multer, { StorageEngine } from "multer";
import path from "path";

// Configure Multer storage
const storage: StorageEngine = multer.diskStorage({
  destination: "./public/uploads", // Destination folder
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

// Multer configuration
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Only .jpeg, .jpg, and .png formats are allowed!"));
    }
    cb(null, true);
  },
});

export const uploadMiddleware = upload.single("file");
