const express = require("express");

const user = require("../models/users");

const app = express.Router();

app
  .post("/", (req, res, next) => {
    user.createUser(req.body)
      .then((user) => res.status(201).send(user));
  })
  .get("/", (req, res, next) => {
    users.getUsers()
      .then((data) => res.status(200).send(data))
      .catch(next);
  })
  .get("/:email", (req, res, next) => {
    users.getUser(req.params.email)
      .then((data) => {
        if (data) {
          res.status(200).send(data);
        } else {
          res.status(404).send("User not found");
        }
      })
  })
  .post("/login", (req, res, next) => {
    users.login(req.body.email, req.body.password)
      .then((data) => {
        if (data) {
          res.status(200).send(data);
        } else {
          res.status(401).send("Invalid username or password");
        }
      });
  })
  .post("/seed", (req, res, next) => {
    users.seed();
    res.status(200).send("Seeded");
  });


module.exports = app;