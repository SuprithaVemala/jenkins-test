import express from "express";
import cors from "cors";
import connectionToDB from "./connection-to-db";
import dotenv from "dotenv";
import userRouter from "./Routes/users-route";
import moviesRouter from "./Routes/movie-route";
import path from "path";

dotenv.config();

const startServer = () => {
	const app = express();

	app.use(express.json());

	app.use(cors());
	app.use(express.static(path.join(__dirname, "/views")));
	app.use(express.static("public"));
	connectionToDB()
		.then(() => {
			console.log("Connected to database");

			app.listen(process.env.PORT, () => {
				console.log(`Server Running at http://localhost:${process.env.PORT}`);
			});

			app.get("/", (req: any, res: any) => {
				res.sendFile(path.join(__dirname, "/views", "index.html"));
			});

			app.use("/api/users", userRouter);
			app.use("/api/movies", moviesRouter);
		})
		.catch((err: any) => {
			console.log(err.message);
		});
};

startServer();
