import express from "express";
import nadesRouter from "./routes/nades.js";

const app = express();

app.use(express.json());

app.use("/api/nades", nadesRouter);

app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});