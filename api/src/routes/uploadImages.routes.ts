import { Router } from "express";
import upload from "../middleware/uploadImages.middleware";
import { postImage, getImage } from "../controller/uploadImages.controller";

const router = Router();

router.post("/upload", upload.single("image"), postImage);
router.get("/:id", getImage);

export default router;
