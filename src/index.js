import express from "express";
import middleware from "./utils/middleware.js";
import routes from "./routes/index.js";

const app = express();
const port = process.env.PORT || 8000;

middleware(app);

app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Otaku API 🚀",
    docs: "🗿",
});

app.use((req, res) => {
  res.status(404).json({
    status: false,
    message: "Not found!",
    
  });
});

app.listen(port, () => {
  console.log("Otaku API 🚀");
});
