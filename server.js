import  express  from "express";

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

app.listen(3000, () => {
    console.log(`Server listen on: http://localhost:3000`);
})