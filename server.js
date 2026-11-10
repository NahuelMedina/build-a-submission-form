import  express  from "express";
import apiRouter from "./routes/api.routes.js";
import { notFoundHandler, finalErrorHandler } from "./middleware/error.middleware.js";
const app = express();

app.use((req, res, next) => {
    const URL = req.url;
    const METHOD = req.method
    console.log(`url: ${URL}`);
    console.log(`method: ${METHOD}`);
    next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.use(notFoundHandler)

app.use(finalErrorHandler)

app.use("/api", apiRouter);


app.listen(3000, () => {
    console.log(`Server listening on: http://localhost:3000`);
})