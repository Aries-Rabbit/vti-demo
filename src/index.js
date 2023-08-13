// B1: Tạo file index.js
// B2: Mở terminal chạy lệnh, yarn init
// B3: Cập nhật file package.json
//      + "type":"module"
//      + "script":{"start":"nodemon index.js"}
// B4: yarn add express dotenv nodemon
// B5: setup như bên dưới

import express from "express";
import cors from "cors";
import rootRouter from "./routers/rootRouter.js";
const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static(".")); // định vị thư mục để load tài nguyên từ BE

app.listen(8080);

app.use("/api", rootRouter);
