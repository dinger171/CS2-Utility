import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
    const nades = [
        {
            id: 1,
            name: "Mirage Window Smoke",
            map: "mirage",
            type: "smoke"
        }
    ];

    res.json(nades);
});

export default router;