import colors from "colors";
import mongoose from "mongoose";

import "dotenv/config";

import app from "./app";

const PORT = process.env.PORT;

mongoose.connect(`${process.env.MONGODB_URI_REMOTE}`);

mongoose.connection.on("open", () => {
  console.log(
    colors.magenta(
      "MongoDB Connected at: " + `${process.env.MONGODB_URI_REMOTE}`
    )
  );
});

mongoose.connection.on("error", (err) => {
  console.log(colors.red(`MongoDB Error: \n${err}`));
});

app.listen(PORT, () => {
  console.log(colors.green(`API running at http://localhost:${PORT}`));
});
