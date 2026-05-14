import express from "express"

const app = express();

const PORT = 5000;

app.get("/", (_req, res) => {
    res.json({
        message: "Backend running",
    })
});

app.listen(PORT, () => {
    console.log(`Sever running on port: ${PORT}`)
})
