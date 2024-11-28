import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Creates an endpoint for sending the TVTag data (fake/example data)
router.get("/latest", (req, res) => {
    res.setHeader('content-type', 'application/json');
    res.sendFile(path.join(__dirname, "data", "tvtag.json"));
});
    
export default router;