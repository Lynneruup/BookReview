import express from "express";
import ViteExpress from "vite-express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
ViteExpress.config({ mode: "production" });

app.use(express.static(path.resolve(__dirname, "./backend/dist")));

app.get("/message", (_, res) => res.send("Hello from express!"));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
