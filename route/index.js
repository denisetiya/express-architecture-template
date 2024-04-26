import express from "express";
import response from "../config/response.js";

const router = express.Router();

router.get("/", (req, res) => {
  return response(res, 200, "Welcome")
})





export default router