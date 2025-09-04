import express from "express";

export const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("Server running");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
