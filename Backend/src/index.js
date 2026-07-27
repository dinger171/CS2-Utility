import express from "express";
import cors from "cors";
import nadesRouter from "./routes/nades.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/nades", nadesRouter);

app.listen(3000, "::", () => {
    console.log("Backend running on http://[::]:3000");
});