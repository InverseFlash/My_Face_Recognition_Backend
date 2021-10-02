const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const knex = require("knex");
const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// app.use(cors());

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

app.get("/", (_, res) => res.send("Server has been started"));
app.post("/signin", (req, res) => signin.handleSignIn(req, res, db, bcrypt));
app.post("/register", (req, res) =>
  register.handleRegister(req, res, db, bcrypt)
);
app.get("/profile/:id", (req, res) => profile.handleProfile(req, res, db));
app
  .put("/image", (req, res) => image.handleImage(req, res, db))
  .post("/imageUrl", (req, res) => image.handleApiCall(req, res));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
