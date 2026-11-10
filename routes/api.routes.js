import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("API is available!");
});

router.get("/crash", (req, res, next) => {
    const newError = new Error("Database connection failed.");
    next(newError);
})

router.get("/bad-request", (req, res, next) => {
    const err = new Error("Client-side data is missing.");
    err.status = 400;
    next(err);
})

export default router;