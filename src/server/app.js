import express from "express";
import cors from "cors";
import "dotenv/config";

import models, { connectDb } from "./models";
import routes from "./routes";

var app = express();
app.use(cors());

// Built-In Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware

app.use(async (req, res, next) => {
  req.context = {
    models
  };
  next();
});

// Routes

app.use("/list", routes.list);

// Start

const eraseDatabaseOnSync = false;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([models.List.deleteMany({})]);
    createList();
  }
  app.listen(process.env.PORT, () => {
    console.log(`LISTING AT http://localhost:${process.env.PORT}`);
  });
});

const createList = async () => {
  const item1 = new models.Item({
    text: "Chuchi item 1",
  });
  const item2 = new models.Item({
    text: "Chuchi item 2",
  });
  const list1 = new models.List({
    name: "list1",
    items: [item1, item2],
  });
  const list2 = new models.List({
    name: "list2",
    items: [item1, item2],
  });

  await list1.save();
  await list2.save();
};
