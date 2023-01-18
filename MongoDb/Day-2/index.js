const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/login", async (req, res) => {
  const payload = req.body;
  try {
    const user = new UserModel(payload);
    await user.save();
    console.log("Registered");
  } catch (err) {
    console.log(err);
  }
  res.send("login");
});

app.post("/register", (req, res) => {
  res.send("registered");
});

app.listen(8000, () => {
  console.log("server running at 8000");
});
