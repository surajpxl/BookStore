import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

// Enable CORS (important for frontend on Netlify)
app.use(cors());
app.use(express.json());

// Load environment variables
dotenv.config();

// Use correct variable name
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("MongoDB connection error:", error));

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
