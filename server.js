import express from "express";
import logEvents from "./logEvents.js";
import { EventEmitter } from "events";
import mysql from "mysql2";
import cors from "cors";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import { dbConfig, sessionSecret } from "./config.js";
import dotenv from "dotenv";

const saltRounds = 10;
dotenv.config();

const db = mysql.createConnection(dbConfig);

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

class MyEmitter extends EventEmitter {}

// initialize object
const myEmitter = new MyEmitter();

// add listener for log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // emit the event
  myEmitter.emit("log", "Log Event emitted!");
}, 2000);

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    db.query(
      "INSERT INTO login_form (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        if (err) {
          console.error(err);
          res.send({ message: "Error Registering user" });
        } else {
          res.send({ message: "User Registered Successfully" });
        }
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM login_form WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send({ loggedIn: true });
          } else {
            res.send({
              message:
                "Wrong username and Password, Please try again or create an account",
            });
          }
        });
      } else {
        res.send({
          message: "User does not exist",
        });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});