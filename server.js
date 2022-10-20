import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import { connectDatabase } from "./config/database.js";

//database call
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT} `);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});
