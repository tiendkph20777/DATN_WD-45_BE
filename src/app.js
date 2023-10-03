import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "./routes/product";
import categoryRouter from "./routes/category";
import productDetailRouter from "./routes/product_detail";
import userRouter from "./routes/user";
import authRouter from "./routes/auth";
import roleRouter from "./routes/role";
import commentRouter from "./routes/comment";
// import cartRouter from "./routes/cart";
import carDetailRouter from "./routes/cartDetail";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", categoryRouter);
app.get("/api", (req, res) => {
  res.send("Lấy dữ liệu thành công");
});
app.use("/api", productRouter);
app.use("/api", productDetailRouter);
app.use("/api", userRouter);
app.use("/api", authRouter);
app.use("/api", roleRouter);
app.use("/api", commentRouter);
// app.use("/api", cartRouter);
app.use("/api", carDetailRouter);

mongoose.connect("mongodb://127.0.0.1:27017/DATN", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sự kiện khi kết nối thành công
mongoose.connection.on("connected", () => {
  console.log("Kết nối đến MongoDB thành công");
});

// Sự kiện khi kết nối bị lỗi
mongoose.connection.on("error", (err) => {
  console.error("Kết nối đến MongoDB thất bại:", err);
});

// Sự kiện khi ngắt kết nối
mongoose.connection.on("disconnected", () => {
  console.log("Ngắt kết nối đến MongoDB");
});

export const viteNodeApp = app;
