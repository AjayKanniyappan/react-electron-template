const fs = require("fs");

fs.rmSync("app/dist", { recursive: true, force: true });
