import mongoose from "mongoose";

export const dbConnection = () => {
mongoose
  .connect(process.env.MONGO_URI , {
    dbName:"AmyBlog",
  })
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));
}
