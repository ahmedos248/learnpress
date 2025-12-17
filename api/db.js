import jsonServer from "json-server";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbFile = path.join(__dirname, "db.json");

const router = jsonServer.router(dbFile);
const middlewares = jsonServer.defaults();

export default function handler(req, res) {
    if (!fs.existsSync(dbFile)) {
        res.status(500).json({ error: "db.json not found" });
        return;
    }

    req.url = req.url.replace(/^\/api\/db/, "") || "/";

    middlewares(req, res, () => {
        router(req, res, () => res.status(404).json({ error: "Route not found" }));
    });
}
